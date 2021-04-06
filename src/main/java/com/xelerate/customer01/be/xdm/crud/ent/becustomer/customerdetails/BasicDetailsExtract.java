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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;

public class BasicDetailsExtract extends ExtractNodeDSRecs implements ExtractNodeDSRecsIface {
  public void process(
      BasicDetailsDb dbData, TransactionContext txnCtxt, ArrayList<DSRecDet> daoRecs)
      throws XException {
    int noOfRecs = 0;
    int totalRecs = daoRecs.size();
    BasicDetailsDb dbNodeDataRec = dbData;
    DSRecDet daoRecDet = new DSRecDet();
    daoRecDet.entityName = null;
    daoRecDet.dsId = "custMast";
    daoRecDet.dsName = "cust_mast_02";
    daoRecDet.daoRec = dbNodeDataRec.getCustMast();
    daoRecDet.pkObj = dbNodeDataRec.getCustMast().getCustNumber();
    daoRecs.add(daoRecDet);
  }
}
