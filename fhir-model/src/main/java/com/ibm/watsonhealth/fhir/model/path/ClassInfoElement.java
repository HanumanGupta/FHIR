/*
 * (C) Copyright IBM Corp. 2019
 * 
 * SPDX-License-Identifier: Apache-2.0
 */

package com.ibm.watsonhealth.fhir.model.path;

import java.util.Objects;

/**
 * This class is part of the implementation for the Types and Reflection section of the FHIRPath specification:
 * @see <a href="http://hl7.org/fhirpath/2018Sep/index.html#types-and-reflection">FHIRPath Types and Reflection</a>
 */
public class ClassInfoElement {
    private final String name;
    private final String type;
    private final Boolean oneBased;
    
    public ClassInfoElement(String name, String type) {
        this(name, type, null);
    }
    
    public ClassInfoElement(String name, String type, Boolean oneBased) {
        this.name = Objects.requireNonNull(name);
        this.type = Objects.requireNonNull(type);
        this.oneBased = oneBased;
    }
    
    public String getName() {
        return name;
    }
    
    public String getType() {
        return type;
    }
    
    public Boolean isOneBased() {
        return oneBased;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        ClassInfoElement other = (ClassInfoElement) obj;
        return Objects.equals(name, other.name) && 
                Objects.equals(type, other.type) && 
                Objects.equals(oneBased, other.oneBased);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, type, oneBased);
    }
    
    @Override
    public String toString() {
        if (oneBased != null) {
            return String.format("ClassInfoElement { name: '%s', type: '%s', oneBased: '%s' }", name, type, oneBased);
        }
        return String.format("ClassInfoElement { name: '%s', type: '%s' }", name, type);
    }
}