package com.xelerate.customer01.be.xdm.db.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DBEntityIface;
import com.xelerate.be.contracts.DBEntity;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;

public class BeCustomerDb extends DBEntity implements DBEntityIface {
  // For :customerDetails
  public CustomerDetailsDb customerDetails = null;

  public CustomerDetailsDb getCustomerDetails() {
    return this.customerDetails;
  }

  public void setCustomerDetails(CustomerDetailsDb customerDetails) {
    this.customerDetails = customerDetails;
  }
}
