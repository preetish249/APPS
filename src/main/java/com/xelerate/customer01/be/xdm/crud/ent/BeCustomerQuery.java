package com.xelerate.customer01.be.xdm.crud.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.QueryIface;
import com.xelerate.be.contracts.Query;
import java.util.HashMap;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.CustomerDetailsQuery;

public class BeCustomerQuery extends Query implements QueryIface {
  public BeCustomerDb process(BeCustomerDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new BeCustomerDb();
    }
    BeCustomerDb dbNodeData = new BeCustomerDb();
    dbNodeData = parentData;
    BeCustomerDb dbNodeDataRec = dbNodeData;
    int noOfRecs = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    dbNodeData = dbNodeDataRec;
    dbNodeDataRec.setCustomerDetails(new CustomerDetailsQuery().process(dbNodeDataRec, txnCtxt));
    return dbNodeData;
  }
}
