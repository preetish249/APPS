package com.xelerate.customer01.be.xdm.qr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.EntityQueriesIface;
import com.xelerate.be.contracts.EntityQueries;
import javax.persistence.*;
import com.xelerate.customer01.be.xdm.dao.CustMast02Ds;
import com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds;
import com.xelerate.customer01.be.xdm.dao.CustAddresses02Ds;

@Entity
@NamedQueries({
  // For ==>custMast
  @NamedQuery(
      name = "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.custMast_Join",
      query = " SELECT a FROM  CustMast02Ds a WHERE  a.custNumber = :Param1 "),
  // For ==>custMast
  @NamedQuery(
      name = "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.basicDetails.custMast_Join",
      query = " SELECT a FROM  CustMast02Ds a "),
  // For ==>custPersonal
  @NamedQuery(
      name =
          "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.personalDetails.custPersonal_Join",
      query = " SELECT a FROM  CustPersonal02Ds a WHERE  a.custPk = :Param1 "),
  // For ==>custPersonal
  @NamedQuery(
      name =
          "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.personalDetails.custName.custPersonal_Join",
      query = " SELECT a FROM  CustPersonal02Ds a "),
  // For ==>custAddr
  @NamedQuery(
      name = "null.BIZENTITIES.ENTITIES.beCustomer.customerDetails.addresses.custAddr_Join",
      query = " SELECT a FROM  CustAddresses02Ds a WHERE  a.id.custPk = :Param1 ")
})
public class BeCustomerQueries extends EntityQueries implements EntityQueriesIface {
  @Id private Integer id;
}
