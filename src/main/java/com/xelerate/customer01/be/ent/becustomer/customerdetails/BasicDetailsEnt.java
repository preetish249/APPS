package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.be.contracts.Node;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class BasicDetailsEnt extends Node implements NodeIface {
  protected String custId = null;
  protected Date custSince = null;
  protected String custStatus = null;

  public String getCustId() {
    return this.custId;
  }

  public void setCustId(String custId) {
    this.custId = custId;
  }

  public Date getCustSince() {
    return this.custSince;
  }

  public void setCustSince(Date custSince) {
    this.custSince = custSince;
  }

  public String getCustStatus() {
    return this.custStatus;
  }

  public void setCustStatus(String custStatus) {
    this.custStatus = custStatus;
  }

  // Initialising :custId
  @JsonIgnore Element custIdElm = new Element("custId", "pcLongCode");
  // Initialising :custSince
  @JsonIgnore Element custSinceElm = new Element("custSince", "pcDt");
  // Initialising :custStatus
  @JsonIgnore Element custStatusElm = new Element("custStatus", "pcShortCode");

  public Element getCustIdElm() {
    return this.custIdElm;
  }

  public void setCustIdElm(Element custIdElm) {
    this.custIdElm = custIdElm;
  }

  public Element getCustSinceElm() {
    return this.custSinceElm;
  }

  public void setCustSinceElm(Element custSinceElm) {
    this.custSinceElm = custSinceElm;
  }

  public Element getCustStatusElm() {
    return this.custStatusElm;
  }

  public void setCustStatusElm(Element custStatusElm) {
    this.custStatusElm = custStatusElm;
  }

  public void init() {
    super.init();
    // Initialising :custId
    custIdElm.setName("custId");
    custIdElm.setSmartTypeName("pcLongCode");
    // Initialising :custSince
    custSinceElm.setName("custSince");
    custSinceElm.setSmartTypeName("pcDt");
    // Initialising :custStatus
    custStatusElm.setName("custStatus");
    custStatusElm.setSmartTypeName("pcShortCode");
  }

  @JsonIgnore protected int noOfElms = 3;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 0;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
