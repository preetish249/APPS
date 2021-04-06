package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.be.contracts.ValidatorNode;
import com.xelerate.customer01.be.attr.BaCustIdEnt;
import com.xelerate.be.core.BEVals;

public class BaCustIdEntVals extends ValidatorNode implements ValidatorNodeIface {
  public void validate(BaCustIdEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
  } // End Validate Function...
}
