/*
 * (C) Copyright IBM Corp. 2019, 2020
 *
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.fhir.registry.core.test;

import java.util.Collection;

import org.testng.Assert;
import org.testng.annotations.Test;

import com.ibm.fhir.model.resource.CodeSystem;
import com.ibm.fhir.model.resource.SearchParameter;
import com.ibm.fhir.model.resource.StructureDefinition;
import com.ibm.fhir.model.type.Canonical;
import com.ibm.fhir.registry.FHIRRegistry;

public class FHIRRegistryTest {
    @Test
    public void testRegistry() {
        StructureDefinition structureDefinition = FHIRRegistry.getInstance().getResource("http://hl7.org/fhir/StructureDefinition/Account", StructureDefinition.class);
        Assert.assertNotNull(structureDefinition);
    }

    @Test
    public void testVersionedResource() {
        CodeSystem codeSystem = FHIRRegistry.getInstance().getResource("http://terminology.hl7.org/CodeSystem/v2-0391|2.4", CodeSystem.class);
        Assert.assertNotNull(codeSystem);

        codeSystem = FHIRRegistry.getInstance().getResource("http://terminology.hl7.org/CodeSystem/v2-0391|2.6", CodeSystem.class);
        Assert.assertNotNull(codeSystem);

        codeSystem = FHIRRegistry.getInstance().getResource("http://terminology.hl7.org/CodeSystem/v2-0391", CodeSystem.class);
        Assert.assertNotNull(codeSystem);
        Assert.assertTrue(codeSystem.getUrl().getValue().endsWith("2.6"));
    }

    @Test
    public void testGetResourcesByResourceType() {
        Collection<SearchParameter> searchParameters = FHIRRegistry.getInstance().getResources(SearchParameter.class);
        Assert.assertEquals(searchParameters.size(), 1375);
    }

    @Test
    public void testGetProfilesByType() {
        Collection<Canonical> observationProfiles = FHIRRegistry.getInstance().getProfiles("Observation");
        Assert.assertEquals(observationProfiles.size(), 17);
    }

    @Test
    public void testGetSearchParametersByType() {
        Collection<SearchParameter> tokenSearchParameters = FHIRRegistry.getInstance().getSearchParameters("token");
        Assert.assertEquals(tokenSearchParameters.size(), 536);
    }
}
