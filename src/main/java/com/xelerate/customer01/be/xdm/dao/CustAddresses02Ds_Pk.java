package com.xelerate.customer01.be.xdm.dao;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import java.io.Serializable;
import com.xelerate.api.contracts.DAOPKIface;
import com.xelerate.xdm.DAOPK;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class CustAddresses02Ds_Pk extends DAOPK implements Serializable, DAOPKIface {
  @Column(name = "CUST_PK")
  private Integer custPk;

  @Column(name = "ADDR_TYPE")
  private String addrType;

  public Integer getCustPk() {
    return this.custPk;
  }

  public void setCustPk(Integer custPk) {
    this.custPk = custPk;
  }

  public String getAddrType() {
    return this.addrType;
  }

  public void setAddrType(String addrType) {
    this.addrType = addrType;
  }

  public boolean equals(Object otherObj) {
    boolean equal = false;
    if (this == otherObj) {
      equal = true;
    } else if ((otherObj instanceof CustAddresses02Ds_Pk)) {
      CustAddresses02Ds_Pk castObj = (CustAddresses02Ds_Pk) otherObj;

      try {
        if ((((this.custPk == null) && (castObj.custPk == null))
                || (this.custPk.equals(castObj.custPk)))
            && (((this.addrType == null) && (castObj.addrType == null))
                || (this.addrType.equals(castObj.addrType)))) {
          equal = true;
        }
      } catch (Exception ex) {
        equal = false;
        ex.printStackTrace();
      }
    }
    return equal;
  }

  public int hashCode() {
    final int prime = 31;
    int hash = 17;
    if (this.custPk != null) {
      hash = hash * prime + this.custPk;
    } else {
      hash = hash * prime + 0;
    }
    if (this.addrType != null) {
      hash = hash * prime + this.addrType.hashCode();
    } else {
      hash = hash * prime + 0;
    }
    return hash;
  }
}
