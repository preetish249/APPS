package com.xelerate.customer01.be.api;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.api.contracts.APIIface;
import com.xelerate.core.APIMsg;
import com.xelerate.core.Utils;
import com.xelerate.be.core.BEUtils;
import com.xelerate.be.core.DSRecDet;
import com.xelerate.be.core.TransactionContext;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerCreate;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerModify;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerQuery;
import com.xelerate.customer01.be.xdm.crud.ent.BeCustomerDelete;
import com.xelerate.customer01.be.ent.BeCustomerEnt;
import com.xelerate.customer01.be.xdm.db.ent.BeCustomerDb;
import com.xelerate.customer01.be.ent.BeCustomerEntMapper;
import com.xelerate.customer01.be.ent.BeCustomerEntVals;
//preetish k das.55
public class BeCustomerCreateApi implements APIIface {
  private BeCustomerEnt be = new BeCustomerEnt();
  private BeCustomerEntVals vl = new BeCustomerEntVals();
  private BeCustomerDb db = new BeCustomerDb();
  private BeCustomerEntMapper beMapper = new BeCustomerEntMapper();
  private TransactionContext txnCtxt = new TransactionContext();

  public void process(APIMsg msg) throws XException {
    try {
      // Set Transaction Context..
      txnCtxt.dbRepository.dbConn = msg.dbConn;
      // Parse Request
      parseRequest(msg);
      // Validate Request
      validateRequest(msg);
      // XDM Process
      processRequest(msg);
      // Process Response
      processResponse(msg);
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("BE-CRUD-001", "Failed in Processing");
    }
  }

  public void parseRequest(APIMsg msg) throws XException {
    try {
      // Parse Request
      be = (BeCustomerEnt) Utils.getObjFromJson(msg.req.json, BeCustomerEnt.class);
      // Convert to DB
      db = new BeCustomerDb();
      beMapper.populateDB(db, be);
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("BE-CRUD-002", "Failed in Parsing...");
    }
  }

  public void validateRequest(APIMsg msg) throws XException {
    try {
      vl.validate(be);
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("BE-CRUD-003", "Failed in Validating...");
    }
  }

  public void processRequest(APIMsg msg) throws XException {
    BeCustomerCreate dbService = new BeCustomerCreate();
    try {
      dbService.process(db, txnCtxt);
    } catch (XException xe) {
      throw xe;
    } catch (Exception ex) {
      throw new XException("BE-CRUD-004", "Failed in XDM Processing");
    }
  }

  public void processResponse(APIMsg msg) throws XException {
    try {
      // Response JSON Object
      msg.res.json = Utils.getJsonFrmObject(be);
    } catch (Exception ex) {
      throw new XException("BE-CRUD-005", "Failed in Processing Respoonse");
    }
  }
}
