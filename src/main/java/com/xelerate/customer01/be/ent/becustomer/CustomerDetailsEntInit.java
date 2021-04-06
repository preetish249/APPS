package com.xelerate.customer01.be.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEntInit;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEntInit;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEntInit;

public class CustomerDetailsEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(CustomerDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For basicDetails...
    BasicDetailsEnt childBEData_0 = null;
    BasicDetailsEntInit childValidator_0 = new BasicDetailsEntInit();
    childBEData_0 = BEData.getBasicDetails();
    childValidator_0.initialize(childBEData_0);
    // For personalDetails...
    PersonalDetailsEnt childBEData_1 = null;
    PersonalDetailsEntInit childValidator_1 = new PersonalDetailsEntInit();
    childBEData_1 = BEData.getPersonalDetails();
    childValidator_1.initialize(childBEData_1);
    // For addresses...
    AddressesEnt childBEData_2 = null;
    AddressesEntInit childValidator_2 = new AddressesEntInit();
    for (int i = 0; i < BEData.getAddresses().size(); i++) {
      childBEData_2 = BEData.getAddresses().get(i);
      childValidator_2.initialize(childBEData_2);
    } /// For Loop
    // For custNumber...
    BEData.custNumberElm = new Element("custNumber", "pcPk");
  } // End Validate Function...
}
