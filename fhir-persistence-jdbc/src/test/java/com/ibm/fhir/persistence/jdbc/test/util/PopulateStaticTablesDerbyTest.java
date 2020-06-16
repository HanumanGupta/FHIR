/*
 * (C) Copyright IBM Corp. 2020
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.fhir.persistence.jdbc.test.util;

import static org.testng.Assert.assertTrue;
import static org.testng.AssertJUnit.assertNotNull;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.ibm.fhir.database.utils.api.IConnectionProvider;
import com.ibm.fhir.database.utils.api.ITransaction;
import com.ibm.fhir.database.utils.api.ITransactionProvider;
import com.ibm.fhir.database.utils.pool.PoolConnectionProvider;
import com.ibm.fhir.database.utils.transaction.SimpleTransactionProvider;
import com.ibm.fhir.model.test.TestUtil;
import com.ibm.fhir.persistence.jdbc.connection.Action;
import com.ibm.fhir.persistence.jdbc.connection.DisableAutocommitAction;
import com.ibm.fhir.persistence.jdbc.connection.FHIRDbConnectionStrategy;
import com.ibm.fhir.persistence.jdbc.connection.FHIRDbTestConnectionStrategy;
import com.ibm.fhir.persistence.jdbc.connection.SetSchemaAction;
import com.ibm.fhir.persistence.jdbc.dao.api.FHIRDbDAO;
import com.ibm.fhir.persistence.jdbc.dao.impl.FHIRDbDAOImpl;
import com.ibm.fhir.persistence.jdbc.exception.FHIRPersistenceDBConnectException;
import com.ibm.fhir.schema.derby.DerbyFhirDatabase;

/**
 * 
 */
public class PopulateStaticTablesDerbyTest {
    private Properties testProps;

    // wraps up everything we need for a FHIR/Derby test database
    private DerbyTestHelper testHelper;
 
    public PopulateStaticTablesDerbyTest() throws Exception {
        this.testProps = TestUtil.readTestProperties("test.jdbc.properties");
    }

    @BeforeClass
    public void startup() throws Exception {
        // Use the derby initializer so that we don't create the database unless
        // we have to
        this.testHelper = new DerbyTestHelper(1);
    }
    
    @Test(groups = { "derby" })
    public void testGetDerbyConnectionAndCheckStaticTables() throws Exception {
        
        Action setSchema = new SetSchemaAction("FHIRDATA");
        Action disableAC = new DisableAutocommitAction(setSchema);
        
        FHIRDbConnectionStrategy strat = new FHIRDbTestConnectionStrategy(testHelper.getConnectionProvider(), disableAC);
        
        boolean result1 = false;
        boolean result2 = false;

        // Using the new strategy pattern for obtaining connections, you must run all
        // DB operations within the scope of a transaction provided by the ITransactionProvider.
        // This ensures that an open connection will have its transaction committed before
        // it is closed.
        try (ITransaction tx = testHelper.transaction()) {
            try (Connection connection = strat.getConnection()) {
                assertNotNull(connection);
                try (PreparedStatement stmt =
                        connection.prepareStatement("SELECT COUNT(*) FROM FHIRDATA.PARAMETER_NAMES")) {
                    assertTrue(stmt.execute());
                    ResultSet resultSet = stmt.getResultSet();
                    if (resultSet.next()) {
                        int r = resultSet.getInt(1);
                        if (r > 0) {
                            result1 = true;
                        }
                    }
                }
                try (PreparedStatement stmt = connection.prepareStatement("SELECT COUNT(*) FROM FHIRDATA.RESOURCE_TYPES")) {
                    assertTrue(stmt.execute());
                    ResultSet resultSet = stmt.getResultSet();
                    if (resultSet.next()) {
                        int r = resultSet.getInt(1);
                        if (r > 0) {
                            result2 = true;
                        }
                    }
                }
            }
        }
        assertTrue(result1);
        assertTrue(result2);
    }
}
