package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.MapperNodeIface;
import com.xelerate.be.contracts.MapperNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.customerdetails.AddressesDb;
import com.xelerate.customer01.be.xdm.db.ent.becustomer.CustomerDetailsDb;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds_Pk;

public class AddressesEntMapper extends MapperNode implements MapperNodeIface {
  public void populateDB(AddressesDb DBData, AddressesEnt BEData, CustomerDetailsDb parentDBData)
      throws XException {
    try {
      super.populateDB(DBData, BEData);
      // For ==>custAddr
      CustAddresses02Ds vcustAddr = new CustAddresses02Ds();
      /// Check if the data source exists in Parent..If so use the same
      vcustAddr.xAction = BEData.xAction;
      vcustAddr.setId(new CustAddresses02Ds_Pk());
      DBData.setCustAddr(vcustAddr);
      // Propagation..
      vcustAddr.getId().setCustPk(parentDBData.getCustMast().getCustNumber());
      // Population..
      DBData.getCustAddr().setAddrLine1(BEData.getAddrLn1());
      DBData.getCustAddr().setAddrLine2(BEData.getAddrLn2());
      DBData.getCustAddr().setAddrLine3(BEData.getAddrLn3());
      DBData.getCustAddr().setCity(BEData.getCity());
      DBData.getCustAddr().setState(BEData.getState());
      DBData.getCustAddr().setCountry(BEData.getCountry());
      DBData.getCustAddr().setZipCode(BEData.getZipCode());
      DBData.getCustAddr().getId().setAddrType(BEData.getAddrType());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-001", "Failed in populating DB.");
    }
  }

  public void populateBE(AddressesEnt BEData, AddressesDb DBData) throws XException {
    try {
      super.populateBE(BEData, DBData);
      // For ==>custAddr
      BEData.setAddrLn1(DBData.getCustAddr().getAddrLine1());
      BEData.setAddrLn2(DBData.getCustAddr().getAddrLine2());
      BEData.setAddrLn3(DBData.getCustAddr().getAddrLine3());
      BEData.setCity(DBData.getCustAddr().getCity());
      BEData.setState(DBData.getCustAddr().getState());
      BEData.setCountry(DBData.getCustAddr().getCountry());
      BEData.setZipCode(DBData.getCustAddr().getZipCode());
      BEData.setAddrType(DBData.getCustAddr().getId().getAddrType());
    } catch (Exception ex) {
      throw new XException("ENT-MAP-002", "Failed in populating DB.");
    }
  }
}
