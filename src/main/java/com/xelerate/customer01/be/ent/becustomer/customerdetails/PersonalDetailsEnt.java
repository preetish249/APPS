package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.be.contracts.Node;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEnt;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class PersonalDetailsEnt extends Node implements NodeIface {
  protected CustNameEnt custName = null;
  protected Date custDoB = null;
  protected String custProfession = null;
  protected String gender = null;
  protected String maritalStatus = null;

  public CustNameEnt getCustName() {
    return this.custName;
  }

  public void setCustName(CustNameEnt custName) {
    this.custName = custName;
  }

  public Date getCustDoB() {
    return this.custDoB;
  }

  public void setCustDoB(Date custDoB) {
    this.custDoB = custDoB;
  }

  public String getCustProfession() {
    return this.custProfession;
  }

  public void setCustProfession(String custProfession) {
    this.custProfession = custProfession;
  }

  public String getGender() {
    return this.gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getMaritalStatus() {
    return this.maritalStatus;
  }

  public void setMaritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
  }

  // Initialising :custDoB
  @JsonIgnore Element custDoBElm = new Element("custDoB", "pcDt");
  // Initialising :custProfession
  @JsonIgnore Element custProfessionElm = new Element("custProfession", "pcShortCode");
  // Initialising :gender
  @JsonIgnore Element genderElm = new Element("gender", "pcShortCode");
  // Initialising :maritalStatus
  @JsonIgnore Element maritalStatusElm = new Element("maritalStatus", "pcShortCode");

  public Element getCustDoBElm() {
    return this.custDoBElm;
  }

  public void setCustDoBElm(Element custDoBElm) {
    this.custDoBElm = custDoBElm;
  }

  public Element getCustProfessionElm() {
    return this.custProfessionElm;
  }

  public void setCustProfessionElm(Element custProfessionElm) {
    this.custProfessionElm = custProfessionElm;
  }

  public Element getGenderElm() {
    return this.genderElm;
  }

  public void setGenderElm(Element genderElm) {
    this.genderElm = genderElm;
  }

  public Element getMaritalStatusElm() {
    return this.maritalStatusElm;
  }

  public void setMaritalStatusElm(Element maritalStatusElm) {
    this.maritalStatusElm = maritalStatusElm;
  }

  public void init() {
    super.init();
    // Initialising :custDoB
    custDoBElm.setName("custDoB");
    custDoBElm.setSmartTypeName("pcDt");
    // Initialising :custProfession
    custProfessionElm.setName("custProfession");
    custProfessionElm.setSmartTypeName("pcShortCode");
    // Initialising :gender
    genderElm.setName("gender");
    genderElm.setSmartTypeName("pcShortCode");
    // Initialising :maritalStatus
    maritalStatusElm.setName("maritalStatus");
    maritalStatusElm.setSmartTypeName("pcShortCode");
  }

  @JsonIgnore protected int noOfElms = 4;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 1;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
