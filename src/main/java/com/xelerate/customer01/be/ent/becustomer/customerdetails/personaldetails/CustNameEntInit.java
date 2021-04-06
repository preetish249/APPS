package com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.customer01.be.attr.BaPersonNameEntInit;
import com.xelerate.be.contracts.Element;

public class CustNameEntInit extends BaPersonNameEntInit implements InitEntityNodeIface {
  public void initialize(CustNameEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For personTitle...
    BEData.personTitleElm = new Element("personTitle", "pcShortCode");
    // For firstName...
    BEData.firstNameElm = new Element("firstName", "pcShortDesc");
    // For middleName...
    BEData.middleNameElm = new Element("middleName", "pcShortDesc");
    // For lastName...
    BEData.lastNameElm = new Element("lastName", "pcShortDesc");
  } // End Validate Function...
}
