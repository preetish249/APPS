package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.be.contracts.ValidatorNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.be.core.BEVals;

public class BasicDetailsEntVals extends ValidatorNode implements ValidatorNodeIface {
  public void validate(BasicDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For custId...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustId(), BEData.getCustIdElm());
    // For custSince...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustSince(), BEData.getCustSinceElm());
    // For custStatus...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustStatus(), BEData.getCustStatusElm());
  } // End Validate Function...
}
