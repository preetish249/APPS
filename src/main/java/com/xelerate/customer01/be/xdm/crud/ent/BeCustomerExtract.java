package com.xelerate.customer01.be.xdm.crud.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ExtractDSRecsIface;
import com.xelerate.be.contracts.ExtractDSRecs;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.xdm.crud.ent.becustomer.CustomerDetailsExtract;

public class BeCustomerExtract extends ExtractDSRecs implements ExtractDSRecsIface {
  public ArrayList<DSRecDet> process(BeCustomerDb dbData, TransactionContext txnCtxt)
      throws XException {
    ArrayList<DSRecDet> daoRecs = new ArrayList<DSRecDet>();
    int noOfRecs = 0;
    int totalRecs = daoRecs.size();
    BeCustomerDb dbNodeDataRec = dbData;
    new CustomerDetailsExtract().process(dbNodeDataRec.getCustomerDetails(), txnCtxt, daoRecs);
    return daoRecs;
  }
}
