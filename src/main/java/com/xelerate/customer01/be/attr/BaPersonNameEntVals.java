package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.be.contracts.ValidatorNode;
import com.xelerate.customer01.be.attr.BaPersonNameEnt;
import com.xelerate.be.core.BEVals;

public class BaPersonNameEntVals extends ValidatorNode implements ValidatorNodeIface {
  public void validate(BaPersonNameEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For personTitle...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getPersonTitle(), BEData.getPersonTitleElm());
    // For firstName...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getFirstName(), BEData.getFirstNameElm());
    // For middleName...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getMiddleName(), BEData.getMiddleNameElm());
    // For lastName...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getLastName(), BEData.getLastNameElm());
  } // End Validate Function...
}
