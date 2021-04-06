package com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DBNodeIface;
import com.xelerate.be.contracts.DBNode;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;

public class BasicDetailsDb extends DBNode implements DBNodeIface {
  public CustMast02Ds custMast = null;

  public CustMast02Ds getCustMast() {
    return this.custMast;
  }

  public void setCustMast(CustMast02Ds custMast) {
    this.custMast = custMast;
  }
}
