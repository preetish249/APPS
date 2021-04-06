package com.xelerate.customer01.be.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.be.contracts.Node;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class CustomerDetailsEnt extends Node implements NodeIface {
  protected BasicDetailsEnt basicDetails = null;
  protected PersonalDetailsEnt personalDetails = null;
  protected ArrayList<AddressesEnt> addresses = null;
  protected Integer custNumber = null;

  public BasicDetailsEnt getBasicDetails() {
    return this.basicDetails;
  }

  public void setBasicDetails(BasicDetailsEnt basicDetails) {
    this.basicDetails = basicDetails;
  }

  public PersonalDetailsEnt getPersonalDetails() {
    return this.personalDetails;
  }

  public void setPersonalDetails(PersonalDetailsEnt personalDetails) {
    this.personalDetails = personalDetails;
  }

  public ArrayList<AddressesEnt> getAddresses() {
    return this.addresses;
  }

  public void setAddresses(ArrayList<AddressesEnt> addresses) {
    this.addresses = addresses;
  }

  public Integer getCustNumber() {
    return this.custNumber;
  }

  public void setCustNumber(Integer custNumber) {
    this.custNumber = custNumber;
  }

  // Initialising :custNumber
  @JsonIgnore Element custNumberElm = new Element("custNumber", "pcPk");

  public Element getCustNumberElm() {
    return this.custNumberElm;
  }

  public void setCustNumberElm(Element custNumberElm) {
    this.custNumberElm = custNumberElm;
  }

  public void init() {
    super.init();
    // Initialising :custNumber
    custNumberElm.setName("custNumber");
    custNumberElm.setSmartTypeName("pcPk");
  }

  @JsonIgnore protected int noOfElms = 1;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 3;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
