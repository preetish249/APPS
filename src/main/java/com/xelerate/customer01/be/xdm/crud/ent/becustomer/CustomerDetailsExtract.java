package com.xelerate.customer01.be.xdm.crud.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ExtractNodeDSRecsIface;
import com.xelerate.be.contracts.ExtractNodeDSRecs;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.BasicDetailsExtract;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.PersonalDetailsExtract;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.customerdetails.AddressesExtract;

public class CustomerDetailsExtract extends ExtractNodeDSRecs implements ExtractNodeDSRecsIface {
  public void process(
      CustomerDetailsDb dbData, TransactionContext txnCtxt, ArrayList<DSRecDet> daoRecs)
      throws XException {
    int noOfRecs = 0;
    int totalRecs = daoRecs.size();
    CustomerDetailsDb dbNodeDataRec = dbData;
    DSRecDet daoRecDet = new DSRecDet();
    daoRecDet.entityName = null;
    daoRecDet.dsId = "custMast";
    daoRecDet.dsName = "cust_mast_02";
    daoRecDet.daoRec = dbNodeDataRec.getCustMast();
    daoRecDet.pkObj = dbNodeDataRec.getCustMast().getCustNumber();
    daoRecs.add(daoRecDet);
    new BasicDetailsExtract().process(dbNodeDataRec.getBasicDetails(), txnCtxt, daoRecs);
    new PersonalDetailsExtract().process(dbNodeDataRec.getPersonalDetails(), txnCtxt, daoRecs);
    new AddressesExtract().process(dbNodeDataRec.getAddresses(), txnCtxt, daoRecs);
  }
}
