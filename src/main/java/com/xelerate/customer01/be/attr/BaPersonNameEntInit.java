package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;

public class BaPersonNameEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(BaPersonNameEnt BEData) throws XException {
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
