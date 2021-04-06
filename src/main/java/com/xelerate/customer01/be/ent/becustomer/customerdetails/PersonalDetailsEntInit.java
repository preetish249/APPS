package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEntInit;

public class PersonalDetailsEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(PersonalDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For custName...
    CustNameEnt childBEData_0 = null;
    CustNameEntInit childValidator_0 = new CustNameEntInit();
    childBEData_0 = BEData.getCustName();
    childValidator_0.initialize(childBEData_0);
    // For custDoB...
    BEData.custDoBElm = new Element("custDoB", "pcDt");
    // For custProfession...
    BEData.custProfessionElm = new Element("custProfession", "pcShortCode");
    // For gender...
    BEData.genderElm = new Element("gender", "pcShortCode");
    // For maritalStatus...
    BEData.maritalStatusElm = new Element("maritalStatus", "pcShortCode");
  } // End Validate Function...
}
