package com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DBNodeIface;
import com.xelerate.be.contracts.DBNode;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds_Pk;

public class AddressesDb extends DBNode implements DBNodeIface {
  public CustAddresses02Ds custAddr = null;

  public CustAddresses02Ds getCustAddr() {
    return this.custAddr;
  }

  public void setCustAddr(CustAddresses02Ds custAddr) {
    this.custAddr = custAddr;
  }
}
