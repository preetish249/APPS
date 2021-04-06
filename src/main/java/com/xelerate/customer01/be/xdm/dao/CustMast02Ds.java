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

@Entity
@Table(name = "cust_mast_02")
@NamedQueries({
  // Basic and Defined DAO  Queries....
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustMast02Ds.fetch.pk",
      query = " SELECT a FROM CustMast02Ds a WHERE a.custNumber= :param1"),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustMast02Ds.fetch.all",
      query = " SELECT a FROM CustMast02Ds a "),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustMast02Ds.delete.pk",
      query = " DELETE  FROM CustMast02Ds a WHERE  a.custNumber= :param1")
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustMast02Ds extends DAO implements Serializable, DAOIface {
  @Id
  @Column(name = "CUST_NUMBER")
  private Integer custNumber;

  @Column(name = "CUST_ID")
  private String custId;

  @Column(name = "CUST_STATUS")
  private String custStatus;

  @Temporal(TemporalType.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  @Column(name = "CUST_SINCE")
  private Date custSince;

  public Integer getCustNumber() {
    return this.custNumber;
  }

  public void setCustNumber(Integer custNumber) {
    this.custNumber = custNumber;
  }

  public String getCustId() {
    return this.custId;
  }

  public void setCustId(String custId) {
    this.custId = custId;
  }

  public String getCustStatus() {
    return this.custStatus;
  }

  public void setCustStatus(String custStatus) {
    this.custStatus = custStatus;
  }

  public Date getCustSince() {
    return this.custSince;
  }

  public void setCustSince(Date custSince) {
    this.custSince = custSince;
  }
}
