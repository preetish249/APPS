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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.personaldetails.CustNameDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.personaldetails.CustNameQuery;

public class PersonalDetailsQuery extends QueryNode implements QueryNodeIface {
  public PersonalDetailsDb process(CustomerDetailsDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new CustomerDetailsDb();
    }
    PersonalDetailsDb dbNodeData = parentData.getPersonalDetails();
    if (dbNodeData == null) {
      dbNodeData = new PersonalDetailsDb();
    }
    PersonalDetailsDb dbNodeDataRec = dbNodeData;
    int noOfRecs = 0;
    ArrayList<CustPersonal02Ds> dsData_custPersonal = new ArrayList<CustPersonal02Ds>();
    int noOf_custPersonal_Recs = 0;
    int cntr_custPersonal = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    // For ==>custPersonal
    params.clear();
    //// Parent Col ====>getCustMast.CUST_NUMBER
    params.put("Param1", parentData.getCustMast().getCustNumber());
    dsData_custPersonal =
        (ArrayList<CustPersonal02Ds>)
            txnCtxt.dbRepository.dbConn.getResultList(
                "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.personalDetails.custPersonal_Join",
                params);
    noOf_custPersonal_Recs = dsData_custPersonal.size();
    if (noOf_custPersonal_Recs > noOfRecs) {
      noOfRecs = noOf_custPersonal_Recs; // /FOr Max Records
    }
    if (noOf_custPersonal_Recs > 0) {
      dbNodeDataRec.setCustPersonal(dsData_custPersonal.get(0));
    }
    dbNodeData = dbNodeDataRec;
    dbNodeDataRec.setCustName(new CustNameQuery().process(dbNodeDataRec, txnCtxt));
    return dbNodeData;
  }
}
