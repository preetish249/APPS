package com.xelerate.customer01.be.ent.becustomer;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperNodeIface;
import com.xelerate.be.contracts.MapperNode;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.BasicDetailsDb;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.BasicDetailsEntMapper;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.PersonalDetailsDb;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEntMapper;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEntMapper;

public class CustomerDetailsEntMapper extends MapperNode implements MapperNodeIface {
  public void populateDB(
      CustomerDetailsDb DBData, CustomerDetailsEnt BEData, BeCustomerDb parentDBData)
      throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For ==>custMast
      CustMast02Ds vcustMast = new CustMast02Ds();
      /// Check if the data source exists in Parent..If so use the same
      vcustMast.xAction = BEData.xAction;
      DBData.setCustMast(vcustMast);
      // Population..
      DBData.getCustMast().setCustNumber(BEData.getCustNumber());
      // For :basicDetails
      if (BEData.getBasicDetails() != null) {
        BasicDetailsDb childDBData = null;
        BasicDetailsEnt childBEData = null;
        DBData.setBasicDetails(new BasicDetailsDb());
        childBEData = BEData.getBasicDetails();
        childDBData = DBData.getBasicDetails();
        new BasicDetailsEntMapper().populateDB(childDBData, childBEData, DBData);
      }
      // For :personalDetails
      if (BEData.getPersonalDetails() != null) {
        PersonalDetailsDb childDBData = null;
        PersonalDetailsEnt childBEData = null;
        DBData.setPersonalDetails(new PersonalDetailsDb());
        childBEData = BEData.getPersonalDetails();
        childDBData = DBData.getPersonalDetails();
        new PersonalDetailsEntMapper().populateDB(childDBData, childBEData, DBData);
      }
      // For :addresses
      if (BEData.getAddresses() != null) {
        AddressesDb childDBData = null;
        AddressesEnt childBEData = null;
        DBData.setAddresses(new ArrayList<AddressesDb>());
        for (int i = 0; i < BEData.getAddresses().size(); i++) {
          childBEData = BEData.getAddresses().get(i);
          childDBData = new AddressesDb();
          DBData.getAddresses().add(childDBData);
          new AddressesEntMapper().populateDB(childDBData, childBEData, DBData);
        }
      }
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(CustomerDetailsEnt BEData, CustomerDetailsDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For ==>custMast
      BEData.setCustNumber(DBData.getCustMast().getCustNumber());
      // For :basicDetails
      if (DBData.getBasicDetails() != null) {
        BasicDetailsEnt childBEData = null;
        BasicDetailsDb childDBData = null;
        BEData.setBasicDetails(new BasicDetailsEnt());
        childDBData = DBData.getBasicDetails();
        childBEData = BEData.getBasicDetails();
        new BasicDetailsEntMapper().populateBE(childBEData, childDBData);
      }
      // For :personalDetails
      if (DBData.getPersonalDetails() != null) {
        PersonalDetailsEnt childBEData = null;
        PersonalDetailsDb childDBData = null;
        BEData.setPersonalDetails(new PersonalDetailsEnt());
        childDBData = DBData.getPersonalDetails();
        childBEData = BEData.getPersonalDetails();
        new PersonalDetailsEntMapper().populateBE(childBEData, childDBData);
      }
      // For :addresses
      if (DBData.getAddresses() != null) {
        AddressesEnt childBEData = null;
        AddressesDb childDBData = null;
        BEData.setAddresses(new ArrayList<AddressesEnt>());
        for (int i = 0; i < DBData.getAddresses().size(); i++) {
          childDBData = DBData.getAddresses().get(i);
          childBEData = new AddressesEnt();
          BEData.getAddresses().add(childBEData);
          new AddressesEntMapper().populateBE(childBEData, childDBData);
        }
      }
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
