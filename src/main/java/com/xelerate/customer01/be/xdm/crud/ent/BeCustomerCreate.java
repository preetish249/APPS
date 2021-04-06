package com.xelerate.customer01.be.xdm.crud.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.CreateIface;
import com.xelerate.be.contracts.Create;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerExtract;

public class BeCustomerCreate extends Create implements CreateIface {
  public void process(BeCustomerDb dbData, TransactionContext txnCtxt) throws XException {
    ArrayList<DSRecDet> daoRecs = new BeCustomerExtract().process(dbData, txnCtxt);
    BEUtils.saveDAORecs(daoRecs, txnCtxt);
  }
}
