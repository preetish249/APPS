package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.be.contracts.Node;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class BaPersonNameEnt extends Node implements NodeIface {
  protected String personTitle = null;
  protected String firstName = null;
  protected String middleName = null;
  protected String lastName = null;

  public String getPersonTitle() {
    return this.personTitle;
  }

  public void setPersonTitle(String personTitle) {
    this.personTitle = personTitle;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return this.middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  // Initialising :personTitle
  @JsonIgnore Element personTitleElm = new Element("personTitle", "pcShortCode");
  // Initialising :firstName
  @JsonIgnore Element firstNameElm = new Element("firstName", "pcShortDesc");
  // Initialising :middleName
  @JsonIgnore Element middleNameElm = new Element("middleName", "pcShortDesc");
  // Initialising :lastName
  @JsonIgnore Element lastNameElm = new Element("lastName", "pcShortDesc");

  public Element getPersonTitleElm() {
    return this.personTitleElm;
  }

  public void setPersonTitleElm(Element personTitleElm) {
    this.personTitleElm = personTitleElm;
  }

  public Element getFirstNameElm() {
    return this.firstNameElm;
  }

  public void setFirstNameElm(Element firstNameElm) {
    this.firstNameElm = firstNameElm;
  }

  public Element getMiddleNameElm() {
    return this.middleNameElm;
  }

  public void setMiddleNameElm(Element middleNameElm) {
    this.middleNameElm = middleNameElm;
  }

  public Element getLastNameElm() {
    return this.lastNameElm;
  }

  public void setLastNameElm(Element lastNameElm) {
    this.lastNameElm = lastNameElm;
  }

  public void init() {
    super.init();
    // Initialising :personTitle
    personTitleElm.setName("personTitle");
    personTitleElm.setSmartTypeName("pcShortCode");
    // Initialising :firstName
    firstNameElm.setName("firstName");
    firstNameElm.setSmartTypeName("pcShortDesc");
    // Initialising :middleName
    middleNameElm.setName("middleName");
    middleNameElm.setSmartTypeName("pcShortDesc");
    // Initialising :lastName
    lastNameElm.setName("lastName");
    lastNameElm.setSmartTypeName("pcShortDesc");
  }

  @JsonIgnore protected int noOfElms = 4;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 0;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
