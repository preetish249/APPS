package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.customer01.be.attr.BaAddrEntVals;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.AddressesEnt;
import com.xelerate.be.core.BEVals;

public class AddressesEntVals extends BaAddrEntVals implements ValidatorNodeIface {
  public void validate(AddressesEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For addrLn1...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getAddrLn1(), BEData.getAddrLn1Elm());
    // For addrLn2...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getAddrLn2(), BEData.getAddrLn2Elm());
    // For addrLn3...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getAddrLn3(), BEData.getAddrLn3Elm());
    // For city...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCity(), BEData.getCityElm());
    // For state...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getState(), BEData.getStateElm());
    // For country...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCountry(), BEData.getCountryElm());
    // For zipCode...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getZipCode(), BEData.getZipCodeElm());
    // For addrType...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getAddrType(), BEData.getAddrTypeElm());
  } // End Validate Function...
}
