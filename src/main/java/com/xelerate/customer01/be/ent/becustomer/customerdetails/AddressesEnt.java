package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.customer01.be.attr.BaAddrEnt;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class AddressesEnt extends BaAddrEnt implements NodeIface {
  protected String addrLn1 = null;
  protected String addrLn2 = null;
  protected String addrLn3 = null;
  protected String city = null;
  protected String state = null;
  protected String country = null;
  protected String zipCode = null;
  protected String addrType = null;

  public String getAddrLn1() {
    return this.addrLn1;
  }

  public void setAddrLn1(String addrLn1) {
    this.addrLn1 = addrLn1;
  }

  public String getAddrLn2() {
    return this.addrLn2;
  }

  public void setAddrLn2(String addrLn2) {
    this.addrLn2 = addrLn2;
  }

  public String getAddrLn3() {
    return this.addrLn3;
  }

  public void setAddrLn3(String addrLn3) {
    this.addrLn3 = addrLn3;
  }

  public String getCity() {
    return this.city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getState() {
    return this.state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getCountry() {
    return this.country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getZipCode() {
    return this.zipCode;
  }

  public void setZipCode(String zipCode) {
    this.zipCode = zipCode;
  }

  public String getAddrType() {
    return this.addrType;
  }

  public void setAddrType(String addrType) {
    this.addrType = addrType;
  }

  // Initialising :addrLn1
  @JsonIgnore Element addrLn1Elm = new Element("addrLn1", "SYS_X3_13");
  // Initialising :addrLn2
  @JsonIgnore Element addrLn2Elm = new Element("addrLn2", "SYS_X3_14");
  // Initialising :addrLn3
  @JsonIgnore Element addrLn3Elm = new Element("addrLn3", "SYS_X3_15");
  // Initialising :city
  @JsonIgnore Element cityElm = new Element("city", "SYS_X3_16");
  // Initialising :state
  @JsonIgnore Element stateElm = new Element("state", "SYS_X3_17");
  // Initialising :country
  @JsonIgnore Element countryElm = new Element("country", "SYS_X3_18");
  // Initialising :zipCode
  @JsonIgnore Element zipCodeElm = new Element("zipCode", "SYS_X3_19");
  // Initialising :addrType
  @JsonIgnore Element addrTypeElm = new Element("addrType", "pcShortCode");

  public Element getAddrLn1Elm() {
    return this.addrLn1Elm;
  }

  public void setAddrLn1Elm(Element addrLn1Elm) {
    this.addrLn1Elm = addrLn1Elm;
  }

  public Element getAddrLn2Elm() {
    return this.addrLn2Elm;
  }

  public void setAddrLn2Elm(Element addrLn2Elm) {
    this.addrLn2Elm = addrLn2Elm;
  }

  public Element getAddrLn3Elm() {
    return this.addrLn3Elm;
  }

  public void setAddrLn3Elm(Element addrLn3Elm) {
    this.addrLn3Elm = addrLn3Elm;
  }

  public Element getCityElm() {
    return this.cityElm;
  }

  public void setCityElm(Element cityElm) {
    this.cityElm = cityElm;
  }

  public Element getStateElm() {
    return this.stateElm;
  }

  public void setStateElm(Element stateElm) {
    this.stateElm = stateElm;
  }

  public Element getCountryElm() {
    return this.countryElm;
  }

  public void setCountryElm(Element countryElm) {
    this.countryElm = countryElm;
  }

  public Element getZipCodeElm() {
    return this.zipCodeElm;
  }

  public void setZipCodeElm(Element zipCodeElm) {
    this.zipCodeElm = zipCodeElm;
  }

  public Element getAddrTypeElm() {
    return this.addrTypeElm;
  }

  public void setAddrTypeElm(Element addrTypeElm) {
    this.addrTypeElm = addrTypeElm;
  }

  public void init() {
    super.init();
    // Initialising :addrLn1
    addrLn1Elm.setName("addrLn1");
    addrLn1Elm.setSmartTypeName("SYS_X3_13");
    // Initialising :addrLn2
    addrLn2Elm.setName("addrLn2");
    addrLn2Elm.setSmartTypeName("SYS_X3_14");
    // Initialising :addrLn3
    addrLn3Elm.setName("addrLn3");
    addrLn3Elm.setSmartTypeName("SYS_X3_15");
    // Initialising :city
    cityElm.setName("city");
    cityElm.setSmartTypeName("SYS_X3_16");
    // Initialising :state
    stateElm.setName("state");
    stateElm.setSmartTypeName("SYS_X3_17");
    // Initialising :country
    countryElm.setName("country");
    countryElm.setSmartTypeName("SYS_X3_18");
    // Initialising :zipCode
    zipCodeElm.setName("zipCode");
    zipCodeElm.setSmartTypeName("SYS_X3_19");
    // Initialising :addrType
    addrTypeElm.setName("addrType");
    addrTypeElm.setSmartTypeName("pcShortCode");
  }

  @JsonIgnore protected int noOfElms = 8;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 0;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
