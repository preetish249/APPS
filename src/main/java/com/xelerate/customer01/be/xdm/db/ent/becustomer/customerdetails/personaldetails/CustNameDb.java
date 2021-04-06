package com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.personaldetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DBNodeIface;
import com.xelerate.be.contracts.DBNode;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;

public class CustNameDb extends DBNode implements DBNodeIface {
  public CustPersonal02Ds custPersonal = null;

  public CustPersonal02Ds getCustPersonal() {
    return this.custPersonal;
  }

  public void setCustPersonal(CustPersonal02Ds custPersonal) {
    this.custPersonal = custPersonal;
  }
}
