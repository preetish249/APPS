package com.xelerate.customer01.be.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.InitEntityIface;
import com.xelerate.be.contracts.InitEntity;
import com.xelerate.be.contracts.Element;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEntInit;

public class BeCustomerEntInit extends InitEntity implements InitEntityIface {
  public void initialize(BeCustomerEnt BEData) throws XException {
    // Call Super Method...
    super.initialize(BEData);
    // For customerDetails...
    CustomerDetailsEnt childBEData_0 = null;
    CustomerDetailsEntInit childValidator_0 = new CustomerDetailsEntInit();
    childBEData_0 = BEData.getCustomerDetails();
    childValidator_0.initialize(childBEData_0);
  } // End Validate Function...
}
