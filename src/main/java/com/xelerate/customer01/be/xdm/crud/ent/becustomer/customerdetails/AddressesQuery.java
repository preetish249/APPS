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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds_Pk;

public class AddressesQuery extends QueryNode implements QueryNodeIface {
  public ArrayList<AddressesDb> process(CustomerDetailsDb parentData, TransactionContext txnCtxt)
      throws XException {
    if (parentData == null) {
      parentData = new CustomerDetailsDb();
    }
    ArrayList<AddressesDb> dbNodeData = parentData.getAddresses();
    if (dbNodeData == null) {
      dbNodeData = new ArrayList<AddressesDb>();
    }
    AddressesDb dbNodeDataRec = null;
    if (dbNodeData.size() > 0) {
      dbNodeDataRec = dbNodeData.get(0); // /??
    } else {
      dbNodeDataRec = new AddressesDb();
    }
    int noOfRecs = 0;
    ArrayList<CustAddresses02Ds> dsData_custAddr = new ArrayList<CustAddresses02Ds>();
    int noOf_custAddr_Recs = 0;
    int cntr_custAddr = 0;
    HashMap<String, Object> params = new HashMap<String, Object>(); // //Parameters Array
    // For ==>custAddr
    params.clear();
    //// Parent Col ====>getCustMast.CUST_NUMBER
    params.put("Param1", parentData.getCustMast().getCustNumber());
    dsData_custAddr =
        (ArrayList<CustAddresses02Ds>)
            txnCtxt.dbRepository.dbConn.getResultList(
                "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.addresses.custAddr_Join",
                params);
    noOf_custAddr_Recs = dsData_custAddr.size();
    if (noOf_custAddr_Recs > noOfRecs) {
      noOfRecs = noOf_custAddr_Recs; // /FOr Max Records
    }
    if (noOfRecs > 0) {
      dbNodeData.clear();
      for (int resRecCntr = 0; resRecCntr < noOfRecs; resRecCntr++) {
        dbNodeDataRec = new AddressesDb();
        if (resRecCntr < noOf_custAddr_Recs) {
          dbNodeDataRec.setCustAddr(dsData_custAddr.get(resRecCntr));
        }
        dbNodeData.add(dbNodeDataRec);
      } /// End Of For Loop
    } // No Of Recfs
    else {
      //// No Data Found...
    }
    return dbNodeData;
  }
}
