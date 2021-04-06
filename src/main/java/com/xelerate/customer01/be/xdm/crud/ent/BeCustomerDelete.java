package com.xelerate.customer01.be.xdm.crud.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.DeleteIface;
import com.xelerate.be.contracts.Delete;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerExtract;

public class BeCustomerDelete extends Delete implements DeleteIface {
  public void process(BeCustomerDb dbData, TransactionContext txnCtxt) throws XException {
    ArrayList<DSRecDet> daoRecs = new BeCustomerExtract().process(dbData, txnCtxt);
    BEUtils.deleteDAORecs(daoRecs, txnCtxt);
  }
}
