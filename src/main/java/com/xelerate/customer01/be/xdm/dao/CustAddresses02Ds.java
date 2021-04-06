package com.xelerate.customer01.be.xdm.dao;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import java.io.Serializable;
import com.xelerate.api.contracts.DAOIface;
import com.xelerate.xdm.DAO;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds_Pk;

@Entity
@Table(name = "cust_addresses_02")
@NamedQueries({
  // Basic and Defined DAO  Queries....
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds.fetch.pk",
      query =
          " SELECT a FROM CustAddresses02Ds a WHERE a.id.custPk= :param1 AND a.id.addrType= :param2"),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds.fetch.all",
      query = " SELECT a FROM CustAddresses02Ds a "),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds.delete.pk",
      query =
          " DELETE  FROM CustAddresses02Ds a WHERE  a.id.custPk= :param1 AND  a.id.addrType= :param2")
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustAddresses02Ds extends DAO implements Serializable, DAOIface {
  @EmbeddedId private CustAddresses02Ds_Pk id;

  public CustAddresses02Ds_Pk getId() {
    return this.id;
  }

  public void setId(CustAddresses02Ds_Pk id) {
    this.id = id;
  }

  @Column(name = "ADDR_LINE1")
  private String addrLine1;

  @Column(name = "ADDR_LINE2")
  private String addrLine2;

  @Column(name = "ADDR_LINE3")
  private String addrLine3;

  @Column(name = "CITY")
  private String city;

  @Column(name = "STATE")
  private String state;

  @Column(name = "COUNTRY")
  private String country;

  @Column(name = "ZIP_CODE")
  private String zipCode;

  public String getAddrLine1() {
    return this.addrLine1;
  }

  public void setAddrLine1(String addrLine1) {
    this.addrLine1 = addrLine1;
  }

  public String getAddrLine2() {
    return this.addrLine2;
  }

  public void setAddrLine2(String addrLine2) {
    this.addrLine2 = addrLine2;
  }

  public String getAddrLine3() {
    return this.addrLine3;
  }

  public void setAddrLine3(String addrLine3) {
    this.addrLine3 = addrLine3;
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
}
