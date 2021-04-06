package com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.personaldetails;

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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.personaldetails.CustNameDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;

public class CustNameQuery extends QueryNode implements QueryNodeIface {
  public CustNameDb process(PersonalDetailsDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new PersonalDetailsDb();
    }
    CustNameDb dbNodeData = parentData.getCustName();
    if (dbNodeData == null) {
      dbNodeData = new CustNameDb();
    }
    CustNameDb dbNodeDataRec = dbNodeData;
    int noOfRecs = 0;
    ArrayList<CustPersonal02Ds> dsData_custPersonal = new ArrayList<CustPersonal02Ds>();
    int noOf_custPersonal_Recs = 0;
    int cntr_custPersonal = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    /// Attached???????????....custPersonal
    dbNodeDataRec.setCustPersonal(parentData.getCustPersonal());
    if (noOf_custPersonal_Recs > 0) {
      dbNodeDataRec.setCustPersonal(dsData_custPersonal.get(0));
    }
    dbNodeData = dbNodeDataRec;
    return dbNodeData;
  }
}
