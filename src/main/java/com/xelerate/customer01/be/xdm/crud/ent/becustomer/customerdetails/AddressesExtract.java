package com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ExtractNodeDSRecsIface;
import com.xelerate.be.contracts.ExtractNodeDSRecs;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds_Pk;

public class AddressesExtract extends ExtractNodeDSRecs implements ExtractNodeDSRecsIface {
  public void process(
      ArrayList<AddressesDb> dbData, TransactionContext txnCtxt, ArrayList<DSRecDet> daoRecs)
      throws XException {
    int noOfRecs = 0;
    int totalRecs = daoRecs.size();
    noOfRecs = dbData.size();
    AddressesDb dbNodeDataRec = null;
    for (int i = 0; i < noOfRecs; i++) {
      dbNodeDataRec = dbData.get(i);
      DSRecDet daoRecDet = new DSRecDet();
      daoRecDet.entityName = null;
      daoRecDet.dsId = "custAddr";
      daoRecDet.dsName = "cust_addresses_02";
      daoRecDet.daoRec = dbNodeDataRec.getCustAddr();
      daoRecDet.pkObj = dbNodeDataRec.getCustAddr().getId();
      daoRecs.add(daoRecDet);
    } /// End of For Loop;
  }
}
