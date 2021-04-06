package com.xelerate.customer01.be.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.be.contracts.ValidatorNode;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.xelerate.be.core.BEVals;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEntVals;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEntVals;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEntVals;

public class CustomerDetailsEntVals extends ValidatorNode implements ValidatorNodeIface {
  public void validate(CustomerDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For basicDetails...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BasicDetailsEnt childBEData_0 = null;
    BasicDetailsEntVals childValidator_0 = new BasicDetailsEntVals();
    if (BEData.getBasicDetails() != null) {
      childBEData_0 = BEData.getBasicDetails();
      childValidator_0.validate(childBEData_0);
    }
    // For personalDetails...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    PersonalDetailsEnt childBEData_1 = null;
    PersonalDetailsEntVals childValidator_1 = new PersonalDetailsEntVals();
    if (BEData.getPersonalDetails() != null) {
      childBEData_1 = BEData.getPersonalDetails();
      childValidator_1.validate(childBEData_1);
    }
    // For addresses...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    AddressesEnt childBEData_2 = null;
    AddressesEntVals childValidator_2 = new AddressesEntVals();
    if (BEData.getAddresses() != null) {
      for (int i = 0; i < BEData.getAddresses().size(); i++) {
        childBEData_2 = BEData.getAddresses().get(i);
        childValidator_2.validate(childBEData_2);
      } /// For Loop
    }
    // For custNumber...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustNumber(), BEData.getCustNumberElm());
  } // End Validate Function...
}
