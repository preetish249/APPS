package com.xelerate.customer01.be.ent;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperIface;
import com.xelerate.be.contracts.Mapper;
import com.xelerate.customer01.be.ent.BeCustomerEnt;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.ent.becustomer.CustomerDetailsEntMapper;

public class BeCustomerEntMapper extends Mapper implements MapperIface {
  public void populateDB(BeCustomerDb DBData, BeCustomerEnt BEData) throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For :customerDetails
      if (BEData.getCustomerDetails() != null) {
        CustomerDetailsDb childDBData = null;
        CustomerDetailsEnt childBEData = null;
        DBData.setCustomerDetails(new CustomerDetailsDb());
        childBEData = BEData.getCustomerDetails();
        childDBData = DBData.getCustomerDetails();
        new CustomerDetailsEntMapper().populateDB(childDBData, childBEData, DBData);
      }
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(BeCustomerEnt BEData, BeCustomerDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For :customerDetails
      if (DBData.getCustomerDetails() != null) {
        CustomerDetailsEnt childBEData = null;
        CustomerDetailsDb childDBData = null;
        BEData.setCustomerDetails(new CustomerDetailsEnt());
        childDBData = DBData.getCustomerDetails();
        childBEData = BEData.getCustomerDetails();
        new CustomerDetailsEntMapper().populateBE(childBEData, childDBData);
      }
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
