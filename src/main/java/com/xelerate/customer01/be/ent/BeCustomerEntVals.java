package com.xelerate.customer01.be.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorIface;
import com.xelerate.be.contracts.Validator;
import com.xelerate.customer01.be.ent.BeCustomerEnt;
import com.xelerate.be.core.BEVals;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEntVals;

public class BeCustomerEntVals extends Validator implements ValidatorIface {
  public void validate(BeCustomerEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For customerDetails...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    CustomerDetailsEnt childBEData_0 = null;
    CustomerDetailsEntVals childValidator_0 = new CustomerDetailsEntVals();
    if (BEData.getCustomerDetails() != null) {
      childBEData_0 = BEData.getCustomerDetails();
      childValidator_0.validate(childBEData_0);
    }
  } // End Validate Function...
}
