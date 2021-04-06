package com.xelerate.customer01.be.attr;

import java.util.ArrayList;
import java.util.Date;
import java.math.BigDecimal;
import com.xelerate.core.XException;
import com.xelerate.be.contracts.NodeIface;
import com.xelerate.be.contracts.Node;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.xelerate.be.contracts.Element;

public class AttrEnt extends Node implements NodeIface {

  public void init() {
    super.init();
  }

  @JsonIgnore protected int noOfElms = 0;

  public Integer getNoOfElms() {
    return this.noOfElms;
  }

  @JsonIgnore protected int noOfNodes = 0;

  public Integer getNoOfNodes() {
    return this.noOfNodes;
  }
}
