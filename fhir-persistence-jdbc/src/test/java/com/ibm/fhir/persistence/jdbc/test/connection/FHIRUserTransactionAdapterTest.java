/*
 * (C) Copyright IBM Corp. 2020
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.fhir.persistence.jdbc.test.connection;

import static org.testng.Assert.assertEquals;

import javax.transaction.Status;

import org.testng.annotations.Test;

import com.ibm.fhir.persistence.jdbc.connection.FHIRUserTransactionAdapter;

/**
 * Unit test for the {@link FHIRUserTransactionAdapter}
 */
public class FHIRUserTransactionAdapterTest {

    @Test(groups = {"jdbc"})
    public void testStandardFlow() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
    }

    @Test(groups = {"jdbc"})
    public void testRepeatFlow() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);

        // start a new transaction
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        
        
    }

    @Test(groups = {"jdbc"})
    public void testNestedFlow() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // should still be active
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
    }
    
    @Test(groups = {"jdbc"})
    public void testNestedBeginAfterRollbackOnly() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        adapter.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);
        
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // should still be active
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // now we should see the rollback
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
    }


    @Test(groups = {"jdbc"})
    public void testNestedRollbackOnly() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        adapter.setRollbackOnly();
        
        // inner transaction, so setRollbackOnly is suppressed
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // should still be marked active
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        adapter.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);
        
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        
    }

    
    @Test(groups = {"jdbc"})
    public void sharedNestedRollback() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();

        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        FHIRUserTransactionAdapter nested = new FHIRUserTransactionAdapter(tx);
        nested.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);
        
        nested.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // when we end the nested, because we didn't start the tx, it should still
        // be marked for active
        nested.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // the outer transaction can mark for rollback
        adapter.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // now we can end the transaction (rollback to no transaction)
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        
    }


    @Test(groups = {"jdbc"})
    public void sharedNestedCommit() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();

        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        adapter.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        FHIRUserTransactionAdapter nested = new FHIRUserTransactionAdapter(tx);
        nested.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        nested.begin();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // when we end the nested, because we didn't start the tx, it should be active
        nested.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        nested.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_ACTIVE);

        // now we can end (commit) the transaction
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        
    }


    @Test(groups = {"jdbc"})
    public void sharedNestedAfterRollback() throws Exception {
        MockUserTransaction tx = new MockUserTransaction();

        FHIRUserTransactionAdapter adapter = new FHIRUserTransactionAdapter(tx);
        adapter.begin();
        adapter.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // now try and start a nested transaction
        FHIRUserTransactionAdapter nested = new FHIRUserTransactionAdapter(tx);
        nested.begin();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // should be a NOP
        nested.setRollbackOnly();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // when we end the nested, because we didn't start the tx, it should still
        // be marked for rollback
        nested.end();
        assertEquals(tx.getStatus(), Status.STATUS_MARKED_ROLLBACK);

        // now we can end the transaction (rollback to no transaction)
        adapter.end();
        assertEquals(tx.getStatus(), Status.STATUS_NO_TRANSACTION);
        
    }

}
