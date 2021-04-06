package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperNodeIface;
import com.xelerate.be.contracts.MapperNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.personaldetails.CustNameDb;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEntMapper;

public class PersonalDetailsEntMapper extends MapperNode implements MapperNodeIface {
  public void populateDB(
      PersonalDetailsDb DBData, PersonalDetailsEnt BEData, CustomerDetailsDb parentDBData)
      throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For ==>custPersonal
      CustPersonal02Ds vcustPersonal = new CustPersonal02Ds();
      /// Check if the data source exists in Parent..If so use the same
      vcustPersonal.xAction = BEData.xAction;
      DBData.setCustPersonal(vcustPersonal);
      // Propagation..
      vcustPersonal.setCustPk(parentDBData.getCustMast().getCustNumber());
      // Population..
      DBData.getCustPersonal().setDob(BEData.getCustDoB());
      DBData.getCustPersonal().setProfession(BEData.getCustProfession());
      DBData.getCustPersonal().setGender(BEData.getGender());
      DBData.getCustPersonal().setMaritalStatus(BEData.getMaritalStatus());
      // For :custName
      if (BEData.getCustName() != null) {
        CustNameDb childDBData = null;
        CustNameEnt childBEData = null;
        DBData.setCustName(new CustNameDb());
        childBEData = BEData.getCustName();
        childDBData = DBData.getCustName();
        new CustNameEntMapper().populateDB(childDBData, childBEData, DBData);
      }
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(PersonalDetailsEnt BEData, PersonalDetailsDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For ==>custPersonal
      BEData.setCustDoB(DBData.getCustPersonal().getDob());
      BEData.setCustProfession(DBData.getCustPersonal().getProfession());
      BEData.setGender(DBData.getCustPersonal().getGender());
      BEData.setMaritalStatus(DBData.getCustPersonal().getMaritalStatus());
      // For :custName
      if (DBData.getCustName() != null) {
        CustNameEnt childBEData = null;
        CustNameDb childDBData = null;
        BEData.setCustName(new CustNameEnt());
        childDBData = DBData.getCustName();
        childBEData = BEData.getCustName();
        new CustNameEntMapper().populateBE(childBEData, childDBData);
      }
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
