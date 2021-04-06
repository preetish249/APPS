package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperNodeIface;
import com.xelerate.be.contracts.MapperNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;

public class BasicDetailsEntMapper extends MapperNode implements MapperNodeIface {
  public void populateDB(
      BasicDetailsDb DBData, BasicDetailsEnt BEData, CustomerDetailsDb parentDBData)
      throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For ==>custMast
      CustMast02Ds vcustMast = new CustMast02Ds();
      /// Check if the data source exists in Parent..If so use the same
      /// Attached....custMast
      vcustMast = parentDBData.getCustMast();
      vcustMast.xAction = BEData.xAction;
      DBData.setCustMast(vcustMast);
      // Propagation..
      vcustMast.setCustNumber(parentDBData.getCustMast().getCustNumber());
      // Population..
      DBData.getCustMast().setCustId(BEData.getCustId());
      DBData.getCustMast().setCustSince(BEData.getCustSince());
      DBData.getCustMast().setCustStatus(BEData.getCustStatus());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(BasicDetailsEnt BEData, BasicDetailsDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For ==>custMast
      BEData.setCustId(DBData.getCustMast().getCustId());
      BEData.setCustSince(DBData.getCustMast().getCustSince());
      BEData.setCustStatus(DBData.getCustMast().getCustStatus());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
