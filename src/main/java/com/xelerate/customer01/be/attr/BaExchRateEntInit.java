package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityNodeIface;
import com.xelerate.be.contracts.InitEntityNode;
import com.xelerate.be.contracts.Element;

public class BaExchRateEntInit extends InitEntityNode implements InitEntityNodeIface {
  public void initialize(BaExchRateEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
  } // End Validate Function...
}
