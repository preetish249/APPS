package com.xelerate.customer01.be.xdm.crud.ent.becustomer;

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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.BasicDetailsQuery;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.PersonalDetailsQuery;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.AddressesQuery;

public class CustomerDetailsQuery extends QueryNode implements QueryNodeIface {
  public CustomerDetailsDb process(BeCustomerDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new BeCustomerDb();
    }
    CustomerDetailsDb dbNodeData = parentData.getCustomerDetails();
    if (dbNodeData == null) {
      dbNodeData = new CustomerDetailsDb();
    }
    CustomerDetailsDb dbNodeDataRec = dbNodeData;
    int noOfRecs = 0;
    ArrayList<CustMast02Ds> dsData_custMast = new ArrayList<CustMast02Ds>();
    int noOf_custMast_Recs = 0;
    int cntr_custMast = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    // For ==>custMast
    params.clear();
    //// Parent Col ====>getCustMast.CUST_NUMBER
    params.put("Param1", dbNodeDataRec.getCustMast().getCustNumber());
    dsData_custMast =
        (ArrayList<CustMast02Ds>)
            txnCtxt.dbRepository.dbConn.getResultList(
                "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.custMast_Join", params);
    noOf_custMast_Recs = dsData_custMast.size();
    if (noOf_custMast_Recs > noOfRecs) {
      noOfRecs = noOf_custMast_Recs; // /FOr Max Records
    }
    if (noOf_custMast_Recs > 0) {
      dbNodeDataRec.setCustMast(dsData_custMast.get(0));
    }
    dbNodeData = dbNodeDataRec;
    dbNodeDataRec.setBasicDetails(new BasicDetailsQuery().process(dbNodeDataRec, txnCtxt));
    dbNodeDataRec.setPersonalDetails(new PersonalDetailsQuery().process(dbNodeDataRec, txnCtxt));
    dbNodeDataRec.setAddresses(new AddressesQuery().process(dbNodeDataRec, txnCtxt));
    return dbNodeData;
  }
}
