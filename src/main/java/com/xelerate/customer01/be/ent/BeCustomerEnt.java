package com.xelerate.customer01.be.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.EntityIface;
import com.xelerate.be.contracts.Entity;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class BeCustomerEnt extends Entity implements EntityIface {
  protected CustomerDetailsEnt customerDetails = null;

  public CustomerDetailsEnt getCustomerDetails() {
    return this.customerDetails;
  }

  public void setCustomerDetails(CustomerDetailsEnt customerDetails) {
    this.customerDetails = customerDetails;
  }

  public void init() {
    super.init();
  }

  @JsonIgnore protected int noOfElms = 0;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 1;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
