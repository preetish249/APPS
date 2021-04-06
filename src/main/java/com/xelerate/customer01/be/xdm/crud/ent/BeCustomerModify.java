package com.xelerate.customer01.be.xdm.crud.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ModifyIface;
import com.xelerate.be.contracts.Modify;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerExtract;

public class BeCustomerModify extends Modify implements ModifyIface {
  public void process(BeCustomerDb dbData, TransactionContext txnCtxt) throws XException {
    ArrayList<DSRecDet> daoRecs = new BeCustomerExtract().process(dbData, txnCtxt);
    BEUtils.modifyDAORecs(daoRecs, txnCtxt);
  }
}
