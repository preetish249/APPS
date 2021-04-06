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
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.personaldetails.CustNameExtract;

public class PersonalDetailsExtract extends ExtractNodeDSRecs implements ExtractNodeDSRecsIface {
  public void process(
      PersonalDetailsDb dbData, TransactionContext txnCtxt, ArrayList<DSRecDet> daoRecs)
      throws XException {
    int noOfRecs = 0;
    int totalRecs = daoRecs.size();
    PersonalDetailsDb dbNodeDataRec = dbData;
    DSRecDet daoRecDet = new DSRecDet();
    daoRecDet.entityName = null;
    daoRecDet.dsId = "custPersonal";
    daoRecDet.dsName = "cust_personal_02";
    daoRecDet.daoRec = dbNodeDataRec.getCustPersonal();
    daoRecDet.pkObj = dbNodeDataRec.getCustPersonal().getCustPk();
    daoRecs.add(daoRecDet);
    new CustNameExtract().process(dbNodeDataRec.getCustName(), txnCtxt, daoRecs);
  }
}
