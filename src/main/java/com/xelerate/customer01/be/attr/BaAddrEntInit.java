package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;

public class BaAddrEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(BaAddrEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For addrLn1...
    BEData.addrLn1Elm = new Element("addrLn1", "SYS_X3_2");
    // For addrLn2...
    BEData.addrLn2Elm = new Element("addrLn2", "SYS_X3_3");
    // For addrLn3...
    BEData.addrLn3Elm = new Element("addrLn3", "SYS_X3_4");
    // For city...
    BEData.cityElm = new Element("city", "SYS_X3_5");
    // For state...
    BEData.stateElm = new Element("state", "SYS_X3_6");
    // For country...
    BEData.countryElm = new Element("country", "SYS_X3_7");
    // For zipCode...
    BEData.zipCodeElm = new Element("zipCode", "SYS_X3_8");
    // For addrType...
    BEData.addrTypeElm = new Element("addrType", "pcShortCode");
  } // End Validate Function...
}
