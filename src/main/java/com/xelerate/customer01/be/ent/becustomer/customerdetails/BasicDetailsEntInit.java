package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;

public class BasicDetailsEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(BasicDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For custId...
    BEData.custIdElm = new Element("custId", "pcLongCode");
    // For custSince...
    BEData.custSinceElm = new Element("custSince", "pcDt");
    // For custStatus...
    BEData.custStatusElm = new Element("custStatus", "pcShortCode");
  } // End Validate Function...
}
