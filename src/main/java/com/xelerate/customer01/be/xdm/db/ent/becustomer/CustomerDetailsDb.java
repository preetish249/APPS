package com.xelerate.customer01.be.xdm.db.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DBNodeIface;
import com.xelerate.be.contracts.DBNode;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;

public class CustomerDetailsDb extends DBNode implements DBNodeIface {
  public CustMast02Ds custMast = null;

  public CustMast02Ds getCustMast() {
    return this.custMast;
  }

  public void setCustMast(CustMast02Ds custMast) {
    this.custMast = custMast;
  }

  // For :basicDetails
  public BasicDetailsDb basicDetails = null;

  public BasicDetailsDb getBasicDetails() {
    return this.basicDetails;
  }

  public void setBasicDetails(BasicDetailsDb basicDetails) {
    this.basicDetails = basicDetails;
  }

  // For :personalDetails
  public PersonalDetailsDb personalDetails = null;

  public PersonalDetailsDb getPersonalDetails() {
    return this.personalDetails;
  }

  public void setPersonalDetails(PersonalDetailsDb personalDetails) {
    this.personalDetails = personalDetails;
  }

  // For :addresses
  public ArrayList<AddressesDb> addresses = null;

  public ArrayList<AddressesDb> getAddresses() {
    return this.addresses;
  }

  public void setAddresses(ArrayList<AddressesDb> addresses) {
    this.addresses = addresses;
  }
}
