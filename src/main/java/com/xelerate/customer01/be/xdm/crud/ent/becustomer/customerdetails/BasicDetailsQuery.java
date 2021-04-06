package com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.QueryNodeIface;
import com.xelerate.be.contracts.QueryNode;
import java.util.HashMap;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;

public class BasicDetailsQuery extends QueryNode implements QueryNodeIface {
  public BasicDetailsDb process(CustomerDetailsDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new CustomerDetailsDb();
    }
    BasicDetailsDb dbNodeData = parentData.getBasicDetails();
    if (dbNodeData == null) {
      dbNodeData = new BasicDetailsDb();
    }
    BasicDetailsDb dbNodeDataRec = dbNodeData;
    int noOfRecs = 0;
    ArrayList<CustMast02Ds> dsData_custMast = new ArrayList<CustMast02Ds>();
    int noOf_custMast_Recs = 0;
    int cntr_custMast = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    /// Attached???????????....custMast
    dbNodeDataRec.setCustMast(parentData.getCustMast());
    if (noOf_custMast_Recs > 0) {
      dbNodeDataRec.setCustMast(dsData_custMast.get(0));
    }
    dbNodeData = dbNodeDataRec;
    return dbNodeData;
  }
}
