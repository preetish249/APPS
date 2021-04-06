package com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperNodeIface;
import com.xelerate.be.contracts.MapperNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.personaldetails.CustNameDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;

public class CustNameEntMapper extends MapperNode implements MapperNodeIface {
  public void populateDB(CustNameDb DBData, CustNameEnt BEData, PersonalDetailsDb parentDBData)
      throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For ==>custPersonal
      CustPersonal02Ds vcustPersonal = new CustPersonal02Ds();
      /// Check if the data source exists in Parent..If so use the same
      /// Attached....custPersonal
      vcustPersonal = parentDBData.getCustPersonal();
      vcustPersonal.xAction = BEData.xAction;
      DBData.setCustPersonal(vcustPersonal);
      // Population..
      DBData.getCustPersonal().setTitle(BEData.getPersonTitle());
      DBData.getCustPersonal().setFirstName(BEData.getFirstName());
      DBData.getCustPersonal().setMiddleName(BEData.getMiddleName());
      DBData.getCustPersonal().setLastName(BEData.getLastName());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(CustNameEnt BEData, CustNameDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For ==>custPersonal
      BEData.setPersonTitle(DBData.getCustPersonal().getTitle());
      BEData.setFirstName(DBData.getCustPersonal().getFirstName());
      BEData.setMiddleName(DBData.getCustPersonal().getMiddleName());
      BEData.setLastName(DBData.getCustPersonal().getLastName());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
