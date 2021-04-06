package com.xelerate.customer01.be.xdm.dao;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import java.io.Serializable;
import com.xelerate.api.contracts.DAOIface;
import com.xelerate.xdm.DAO;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "cust_personal_02")
@NamedQueries({
  // Basic and Defined DAO  Queries....
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds.fetch.pk",
      query = " SELECT a FROM CustPersonal02Ds a WHERE a.custPk= :param1"),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds.fetch.all",
      query = " SELECT a FROM CustPersonal02Ds a "),
  @NamedQuery(
      name = "com.xelerate.customer01.be.xdm.dao.CustPersonal02Ds.delete.pk",
      query = " DELETE  FROM CustPersonal02Ds a WHERE  a.custPk= :param1")
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class CustPersonal02Ds extends DAO implements Serializable, DAOIface {
  @Id
  @Column(name = "CUST_PK")
  private Integer custPk;

  @Column(name = "TITLE")
  private String title;

  @Column(name = "FIRST_NAME")
  private String firstName;

  @Column(name = "MIDDLE_NAME")
  private String middleName;

  @Column(name = "LAST_NAME")
  private String lastName;

  @Temporal(TemporalType.DATE)
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
  @Column(name = "DOB")
  private Date dob;

  @Column(name = "GENDER")
  private String gender;

  @Column(name = "MARITAL_STATUS")
  private String maritalStatus;

  @Column(name = "PROFESSION")
  private String profession;

  public Integer getCustPk() {
    return this.custPk;
  }

  public void setCustPk(Integer custPk) {
    this.custPk = custPk;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return this.middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Date getDob() {
    return this.dob;
  }

  public void setDob(Date dob) {
    this.dob = dob;
  }

  public String getGender() {
    return this.gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getMaritalStatus() {
    return this.maritalStatus;
  }

  public void setMaritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
  }

  public String getProfession() {
    return this.profession;
  }

  public void setProfession(String profession) {
    this.profession = profession;
  }
}
