package com.xelerate.customer01.be.ent.becustomer.customerdetails;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.ValidatorNodeIface;
import com.xelerate.be.contracts.ValidatorNode;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.PersonalDetailsEnt;
import com.xelerate.be.core.BEVals;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEnt;
import com.xelerate.customer01.be.ent.becustomer.customerdetails.personaldetails.CustNameEntVals;

public class PersonalDetailsEntVals extends ValidatorNode implements ValidatorNodeIface {
  public void validate(PersonalDetailsEnt BEData) throws XException {
    // Call Super Method...
    super.validate(BEData);
    // For custName...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    CustNameEnt childBEData_0 = null;
    CustNameEntVals childValidator_0 = new CustNameEntVals();
    if (BEData.getCustName() != null) {
      childBEData_0 = BEData.getCustName();
      childValidator_0.validate(childBEData_0);
    }
    // For custDoB...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustDoB(), BEData.getCustDoBElm());
    // For custProfession...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getCustProfession(), BEData.getCustProfessionElm());
    // For gender...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getGender(), BEData.getGenderElm());
    // For maritalStatus...
    /*
    Place Foe Genrated Validations
    Either Inline or as a Separate Function(s)..
    */
    BEVals.validate(BEData.getMaritalStatus(), BEData.getMaritalStatusElm());
  } // End Validate Function...
}
