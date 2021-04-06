var linkElements = [];
var previousSelctValue;
var uiUtil = flexiciousNmsp.UIUtils;
var flxConstants = flexiciousNmsp.Constants;
var XEL_DATA_GRID_ANGULAR_CUSTOM_COMPONENT_REF={};
/**
 * Function to create the Data grid
 * 
 * @param data -
 *            json data
 * @param profileId -
 *            profile Id of the screen
 * @param config -
 *            Grid configuration
 * @param divId -
 *            data grid container div id
 */


function getTreeGrid(data, profileId, blockId, config, divId, changeEventFields, clickEventFields, hierarchyName,gridTheme,mode) {
	grid = new flexiciousNmsp.FlexDataGrid(document.getElementById(divId), {
		configuration: config,
		dataProvider: data,
		styles: flexiciousNmsp.UIUtils.getThemeById('viewTemplate').styles
	});
	//grid.setFilterVisible(false);	
	var subAction = 'ENTRY';
	// var jsonData = getInitialData(grid, '&gridId=' + divId + '&blockId=' + blockId + '&previousAction=' + nmsp.previousAction);
	// grid.maxAutoAdjustHeight = getContentAreaHeight() - 100;
	grid.getBodyContainer().verticalMask = 150;
	grid.getBodyContainer().enableHorizontalRecycling = false;
	grid.profileId = profileId;
	grid.blockId = blockId;
	grid.mode = mode;
	grid.subAction = subAction;
	grid.themeId='viewTemplate';
	// grid.setVerticalScrollPolicy("on");
	// grid.setHorizontalScrollPolicy("on");
	grid.autoSelection = 'Y';
	grid.hierarchyName = hierarchyName;
	grid.changeEventFields = changeEventFields;
	grid.clickEventFields = clickEventFields;
	grid.openedLinkDetailsList = [];
	grid.errorList={};
	grid.toolbarImagesRoot = "assets/css/images/";
	// flexiciousNmsp.Constants.IMAGE_PATH = "/xelerate/datagrid/flexicious/css/images/";
	createNameSapceObject(profileId, blockId, subAction, mode, changeEventFields, clickEventFields);
	grid.validateNow();
	var nmsp = getDataGridNameSpace(profileId, blockId, subAction, mode);
	expandGridToLevel(grid);
	$(":focus").blur();
	// columnGroupCreate(grid);
	// nmsp.dynamicFieldVariation = (jsonData && jsonData.dynamicVariation) ? jsonData.dynamicVariation : [];
	// if (nmsp.errorListArray && nmsp.errorListArray.length > 0) {
	// dataGridErrorHighlight($(grid.domElement).closest('form'), nmsp.errorListArray, true);
	// }
	var gridDiv = divId;
	var gridblockId = blockId;
	// createSnapShot(profileId, blockId, subAction, mode);
	return grid;
}

function generateNameSpaceObjectName(profileId, blockId, subAction, mode) {
	if (!profileId) {
		profileId = '';
	}
	if (!blockId) {
		blockId = '';
	}
	if (!subAction) {
		subAction = '';
	}
	if (!mode) {
		mode = '';
	}
	return (profileId.toUpperCase() + "_" + blockId.toUpperCase() + "_" + subAction.toUpperCase() + "_" + mode.toUpperCase() + "_NameSpace");
}

function createNameSapceObject(profileId, blockId, subAction, mode, changeEventFields, clickEventFields) {
	var DATA_GRID_NAME_SPACE = getComponentConstantName('DATA_GRID_NAME_SPACE');
	if (DATA_GRID_NAME_SPACE) {
		var nameSpaceObjectName = generateNameSpaceObjectName(profileId, blockId, subAction, mode);
		var nameSpaceObject = {};
		nameSpaceObject.grids = [];
		nameSpaceObject.previousValues = [];
		nameSpaceObject.autoSelectedItems = [];
		nameSpaceObject.changeEventFields = changeEventFields;
		nameSpaceObject.clickEventFields = clickEventFields;
		nameSpaceObject.rowEditableColumnMap = new Object();
		nameSpaceObject.isTabbed = false;
		nameSpaceObject.postionAttributes = '';
		nameSpaceObject.grid = grid;
		nameSpaceObject.grid.blockId = blockId;
		nameSpaceObject.grids.push(grid);
		window[DATA_GRID_NAME_SPACE][nameSpaceObjectName] = nameSpaceObject;
	}
}

function getDataGridNameSpace(profileId, blockId, subAction, mode) {
	var DATA_GRID_NAME_SPACE = getComponentConstantName('DATA_GRID_NAME_SPACE');
	if (DATA_GRID_NAME_SPACE) {
		var nameSpaceObjectName = generateNameSpaceObjectName(profileId, blockId, subAction, mode);
		if (window[DATA_GRID_NAME_SPACE]) {
			return window[DATA_GRID_NAME_SPACE][nameSpaceObjectName];
		}
	}
	return null;
}

function createSnapShot(profileId, blockId, subAction, mode) {
	setTimeout(function () {
		var nmsp = getDataGridNameSpace(profileId, blockId, subAction, mode);
		if (null !== nmsp && nmsp.grid.isParallelActionRequired) {
			var snapshot = Defiant.getSnapshot(nmsp.grid.getDataProvider());
			nmsp.snapshot = snapshot;
		}
	}, 500);
}

/**
 * Expands the grid to level configured in the profile
 * @param grid
 */
function expandGridToLevel(grid) {
	if (grid.getDataProvider() && grid.getDataProvider().length > 0) {
		if (grid.expandLevel !== undefined && null !== grid.expandLevel && grid.expandLevel < grid.getMaxDepth()) {
			grid.expandToLevel(grid.expandLevel);
		} else {
			grid.expandAll();
		}
	}
}

/**
 * Label function to implement custom logic in the column(Redirects to the label function written in the screen specific js file)
 */
labelFunction = function (item, column) {
	var grid = column.getOwner();
	if (grid) {
		var _profileID = grid.profileId;
		var _blockID = grid.blockId;
		if (_blockID) {
			var fieldName = column.dataField.replace('dynamicField.', '');
			var value = $(item).attr(column.dataField);
			var dataField = _profileID + "_" + _blockID + "_" + fieldName;
			
			if (column && column.controlType && column.controlType==='LINK') {
				let linkLabel=value;
				if(column.label && column.label.length>0)
					linkLabel=column.label;
                if(linkLabel && linkLabel.length>0)					
					return "<a class='link'>" + linkLabel + "</a>";
			} else {
				var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
				if (xelDataGridComponentRef) {
					try {
						if (typeof (column.staticItemDes) != 'undefined') {
							var data = $(item).attr(column.dataField);
							var selectList = column.staticItemDes.split("::");
							for (var i = 0; i < selectList.length; i++) {
								if (selectList[i].split("||")[0] == data) {
									data = selectList[i].split("||")[1];
									break;
								}
							}
							value= data;
						} 
						var output = window[xelDataGridComponentRef][getDataGridComponentName(grid)].component.xelDataGrid_LabelFunction(item, column, value, fieldName);
						if (output) {
							return output;
						}
						
					} catch (e) {
						// added for format mask link type
						if (column.currencyFormat && column.currencyFormat.length > 0) {
							data = currencyFormatterLabelFunction(item, column);
						}
						if ($(item).attr(column.dataField) && $(item).attr(column.dataField).length > 0) {
							return "<a class='link'>" + data + "</a>";
						}
						else {
							return "";
						}
					}
				}
			}
		}
	}
};

/**
 * Item click handler(Redirects to the click handler written in the screen specific js file)
 */
itemClickHandler = function (evt) {
	var grid = evt.target;
	if (evt.column.typeName == "FlexDataGridCheckBoxColumn" && evt.target.autoSelection === 'Y') {
		var nmsp = getDataGridNameSpace(grid.profileId, grid.blockId, grid.subAction, grid.mode);
		var pathId = evt.item.objectPathId; // To obtain the path Id of the selected item in datagrid
		var keyField = nmsp.grid.getSelectedKeyField(); // Obtain the key field configured for this datagrid
		var selectedKeyMap = storeSelectedKeysToMap(keyField, nmsp);
		if (evt.isItemSelected == true) {
			var checkedKeys = [];
			checkedKeys = checkedKeys.concat(nmsp.grid.getSelectedKeys());
			var insertCount = 0;
			var parentPathIds = new Array();
			var varParent = pathId;
			while (varParent) {
				varParent = varParent.substring(0, varParent.lastIndexOf("."));
				if (varParent) {
					parentPathIds[insertCount] = varParent;
				}
				insertCount++;
			}
			checkedKeys = searchAndAppendParentKey(nmsp.grid.getDataProvider(), parentPathIds, keyField, checkedKeys, grid.hierarchyName);
			nmsp.grid.setSelectedKeys(checkedKeys);
		} else if (evt.isItemSelected == false) {
			unselectParentCheckBox(pathId, nmsp, selectedKeyMap);
		}
	}
	if (evt.target.clickEventFields.indexOf(evt.column.getDataField()) > -1) {
		var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
		if (xelDataGridComponentRef) {
			var fieldName = evt.column.dataField.replace('dynamicField.', '');
			var value = $(evt.item).attr(evt.column.dataField);
			try {
				window[xelDataGridComponentRef][getDataGridComponentName(evt.grid)].component.xelDataGrid_ItemClickHandler(evt, value, fieldName);
			} catch (e) {
				console.log(e);
			}
		}
	}
};

/**
 * Method configured for setting the column background programmatically
 */
programmaticCellFormatting_getColumnBackground = function (cell) {
	var dataValue = flexiciousNmsp.UIUtils.resolveExpression(cell.getRowInfo().getData(), cell.getColumn().dataField);
	var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
	if (xelDataGridComponentRef) {
		try {
			return window[xelDataGridComponentRef][getDataGridComponentName(cell.getGrid())].component.xelDataGrid_ColumnBackground(dataValue, cell);
		} catch (e) {
		}
	}
};

/**
 * Method configured for setting the row background programmatically
 */
programmaticCellFormatting_getRowBackground = function (cell) {
	var dataValue = cell.rowInfo.getData();
	var background = '';
	var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
	if (xelDataGridComponentRef) {
		try {
			background = window[xelDataGridComponentRef][getDataGridComponentName(cell.getGrid())].component.xelDataGrid_RowBackground(dataValue, cell);
		} catch (e) {
		}
	}
	if (background && background.length > 0) {
		return background;
	}
};

/**
 * Handler for server side Paging,Sorting and Filtering(Redirects to the paging/sorting/filtering handler written in the screen specific js file)
 * 
 * @param evt
 */
filterPageSortChangeHandler = function (evt) {
	if (evt.cause === "sortChange") {
		//_resolveDataGridFunctionCall(evt, "_SortChangeHandler");
	} else if ("pageChange" === evt.cause || "filterChange" === evt.cause) {
		filterChangeHandler(evt);
	}
};

function filterChangeHandler(evt) {
	if (evt.target.getEnablePaging() && "server"===evt.target.getFilterPageSortMode()) {
		var pageIndex = evt.filter.pageIndex;
		var pageSize = evt.filter.pageSize;
		var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
		if (xelDataGridComponentRef) {
			try {
				window[xelDataGridComponentRef][getDataGridComponentName(evt.target)].component.xelDataGrid_FilterChangeHandler(evt, pageIndex, pageSize);
			} catch (e) {
				console.log(e);
			}
		}
	}
}

/**
 * Function to resolve and invoke the grid function based on profile id and events
 */
function _resolveDataGridFunctionCall(evt, event) {
	var _profileID = evt.target.profileId;
	var _blockID = evt.target.blockId;
	if (_profileID && _blockID) {
		var strFun = _profileID + "_" + _blockID + event;
		try {
			window[strFun](evt);
		} catch (e) {
			// window.console.log('function: '+strFun+' doesnot exist!');
		}
	}
}

/**
 * Function invoked after the creation of the grid
 * @param evt
 */
creationComplete = function (evt) {
	var grid = evt.target;
	grid.setVerticalScrollPolicy("auto");
	grid.setHorizontalScrollPolicy("auto");
	//_resolveDataGridFunctionCall(evt, "_CreationComplete");
	var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
	try {
		window[xelDataGridComponentRef][getDataGridComponentName(grid)].component.xelDataGrid_CreationComplete(event);

		setTimeout(function () {
			var columns = grid._columnLevel.getColumnsByLockMode('none');
			if (columns && columns.length > 0
				&& columns[columns.length - 1]._naturalLastColWidth <
				columns[columns.length - 1]._width && columns[columns.length - 1]._width -
				columns[columns.length - 1]._naturalLastColWidth >= 30) {
					let dummyCol=new flexiciousNmsp.FlexDataGridColumn;
					dummyCol.cellBackgroundColorFunction=programmaticCellFormatting_getColumnBackground;
				grid.addColumn(dummyCol);
				grid.reDraw();
			}

			$(":focus").blur();
			resetScroll(evt.target);
			setTimeout(function () {
				evt.target.getBodyContainer().domElement.onscroll = function () {
					$('.bootstrap-select.nameField.scriptField.open').removeClass('open');
				}
				// if (nmsp && nmsp.postionAttributes) {
				// 	if (Number(nmsp.grid.getBodyContainer().maxVerticalScrollPosition) >= Number(nmsp.postionAttributes.split(",")[0])) {
				// 		evt.target.setVerticalScrollPosition(Number(nmsp.postionAttributes.split(",")[0]));
				// 	}
				// 	evt.target.setHorizontalScrollPosition(Number(nmsp.postionAttributes.split(",")[1]));
				// }
			}, 100);
		}, 500);
	} catch (e) { }
};

/**
 * To enable or disable the custom toolbar items based on condition
 * 
 * @param action
 * @param currentTarget
 * @param extendedPager
 * @returns {Boolean}
 */
isValidToolbarAction = function (action, currentTarget, extendedPager) {
	if (extendedPager.grid.isParallelActionRequired && action.code === "approve_all") {
		return true;
	} else if (extendedPager.grid.isParallelActionRequired && action.code === "reject_all") {
		return true;
	} else if (extendedPager.grid.isParallelActionRequired && action.code === "bulk_Comment") {
		return true;
	} else if (extendedPager.grid.customFilter && action.code === "search") {
		return true;
	}
	return false;
};

/**
 * To execute the toolbar function
 * 
 * @param action
 * @param currentTarget
 * @param extendedPager
 */
onExecuteToolbarAction = function (action, currentTarget, extendedPager) {
	if (extendedPager.grid.customFilter && action.code === "search") {
		var filterId = extendedPager.grid.customFilterId;
		$('div#' + filterId + "_Search").parent().css({
			'position': 'relative'
		});
		$(currentTarget).addClass("gridCustomFilterActive");
		$('div#' + filterId + "_Search").css({
			'position': 'absolute',
			'right': '3px',
			'top': '49px'
		}).show("slow");
		$('#' + filterId + '_xel_gridsearch_type_dropdown').focus();
		$("#" + filterId + "_vertical_xel_filter_cancel").keydown(function (e) {
			if (e.which == 9) {
				$("#" + filterId + "_xel_gridsearch_type_dropdown").focus();
				e.preventDefault();
			}

		});
	} else if (extendedPager.grid.isParallelActionRequired && action.code === "approve_all") {
		var _pendingRecordLock = $(extendedPager.grid.domElement).closest("form").attr("pendingRecordLock");
		if (!_pendingRecordLock || !"N" == _pendingRecordLock) {
			showWaitCursor();
			var form = $(extendedPager.grid.domElement).closest('form');
			var nmspPanel = window[$(form).attr("ProfileId") + "_" + getSubAction(form) + "_" + getMode(form) + "_NameSpace"];
			nmspPanel.checkerStatusChanged = true;
			setTimeout(function () {
				var nmsp = getNameSpace($(extendedPager.grid.domElement).closest('form'), extendedPager.grid.blockId);
				// var nmsp = getNameSpace($(extendedPager.grid.domElement).closest('form'),grid.blockId);
				var searchList = JSON.search(nmsp.snapshot, '//*[contains(MAKER_CHECKER_ELEMENT,"Y")]');
				var profileId = form.attr('profileid');
				var strFun = profileId + "_bulkApprove";
				var obj = extendedPager.grid.domElement;
				try {
					window[strFun](obj, searchList, currentTarget, extendedPager);// To provide facility to override this method.
				} catch (e) {
					if ("template2" == document.getElementById('uxTemplateId').value || $(currentTarget).attr('isApproved') === 'N') {
						$(currentTarget).attr('isApproved', 'Y');
						$(currentTarget).css('background', 'transparent url(/xelerate/common/images/approve_all_hover.png) no-repeat left center');
						$(currentTarget).closest('.flexiciousGrid').find('.rejectAll').css('background', 'transparent url(/xelerate/common/images/reject_all_normal.png) no-repeat left center');
						searchList.forEach(function (item) {
							if (item) {
								if ("template2" == document.getElementById('uxTemplateId').value && (null == item.CheckerStatus || "" == item.CheckerStatus)) {
									item.dynamicField.CHECKER_STATUS = 'Approve';
								} else {
									if (null == item.CheckerStatus || "" == item.CheckerStatus) {
										item.dynamicField.CHECKER_STATUS = 'A';
									}
								}
							}
						});
					} else {
						$(currentTarget).css('background', 'transparent url(/xelerate/common/images/inputgroup/checkbox-normal.png) no-repeat left center');
						$(currentTarget).attr('isApproved', 'N');

						searchList.forEach(function (item) {
							if (item) {
								if ("template2" == document.getElementById('uxTemplateId').value && (null == item.CheckerStatus || "" == item.CheckerStatus)) {
									item.dynamicField.CHECKER_STATUS = 'Reject';
								} else {
									if (null == item.CheckerStatus || "" == item.CheckerStatus) {
										item.dynamicField.CHECKER_STATUS = 'R';
									}
								}
							}
						});

					}
					extendedPager.grid.refreshCells();
					// nmsp.grid.refreshCells();
					hideWaitCursor();
				}
			}, 20);
		}

	} else if (extendedPager.grid.isParallelActionRequired && action.code === "bulk_Comment") {
		var _pendingRecordLock = $(extendedPager.grid.domElement).closest("form").attr("pendingRecordLock");
		if (!_pendingRecordLock || !"N" == _pendingRecordLock) {
			$(currentTarget).css('background', 'transparent url(/xelerate/common/images/CommentNormal.png) no-repeat left center');
			var bulkCommentId = extendedPager.grid.bulkCommentId;
			var isContentDragable = $("#" + bulkCommentId + "_Comment").hasClass('ui-draggable');
			var isHandleBound = $("#" + bulkCommentId + "_CommentHeader").hasClass('ui-draggable-handle');
			if (!isContentDragable && !isHandleBound) {
				$("#" + bulkCommentId + "_Comment").draggable({
					handle: '#' + bulkCommentId + "_CommentHeader",
					containment: $('html')
				});
			}
			var formNmsp = window[$(extendedPager.grid.domElement).closest("form").attr("ProfileId") + "_" + getSubAction($(extendedPager.grid.domElement).closest("form")) + "_" + getMode($(extendedPager.grid.domElement).closest("form")) + "_NameSpace"];
			if (formNmsp[extendedPager.grid.blockId + "_checkerComment"] && formNmsp[extendedPager.grid.blockId + "_checkerComment"].length > 0) {
				$('#' + bulkCommentId + 'xel_popup_textArea').val(formNmsp[extendedPager.grid.blockId + "_checkerComment"]);
			}

			$('div#' + bulkCommentId + "_Comment").parent().css({
				'position': 'relative'
			});
			$(currentTarget).addClass("gridBulkComment");
			$('div#' + bulkCommentId + "_Comment").css({
				'position': 'absolute',
				'right': '3px',
				'top': '49px',
				'display': 'table'
			}).show("slow");
			$('#' + bulkCommentId + 'xel_popup_textArea').focus();

			$("#" + bulkCommentId + "_vertical_xel_comment_cancel").keydown(function (e) {
				if (e.which == 9) {
					$("#" + bulkCommentId + "xel_popup_textArea").focus();
					e.preventDefault();
				}
			});
		}
	} else if (extendedPager.grid.isParallelActionRequired && action.code === "reject_all") {
		var _pendingRecordLock = $(extendedPager.grid.domElement).closest("form").attr("pendingRecordLock");
		if (!_pendingRecordLock || !"N" == _pendingRecordLock) {
			showWaitCursor();
			var form = $(extendedPager.grid.domElement).closest('form');
			var nmspPanel = window[$(form).attr("ProfileId") + "_" + getSubAction(form) + "_" + getMode(form) + "_NameSpace"];
			nmspPanel.checkerStatusChanged = true;
			setTimeout(function () {
				var nmsp = getNameSpace($(extendedPager.grid.domElement).closest('form'), extendedPager.grid.blockId);
				// var nmsp = getNameSpace($(extendedPager.grid.domElement).closest('form'),grid.blockId);
				var searchList = JSON.search(nmsp.snapshot, '//*[contains(MAKER_CHECKER_ELEMENT,"Y")]');
				var profileId = form.attr('profileid');
				var strFun = profileId + "_bulkReject";
				var obj = extendedPager.grid.domElement;
				try {
					window[strFun](obj, searchList, currentTarget, extendedPager);// To provide facility to override this method.
				} catch (e) {
					$(currentTarget).attr('isRejected', 'Y');
					$(currentTarget).css('background', 'transparent url(/xelerate/common/images/reject_all_hover.png) no-repeat left center');
					$(currentTarget).closest('.flexiciousGrid').find('.approveAll').css('background', 'transparent url(/xelerate/common/images/approve_all_normal.png) no-repeat left center');
					searchList.forEach(function (item) {
						if (item) {
							if ("template2" == document.getElementById('uxTemplateId').value && (null == item.CheckerStatus || "" == item.CheckerStatus)) {
								item.dynamicField.CHECKER_STATUS = 'Reject';
							} else {
								if (null == item.CheckerStatus || "" == item.CheckerStatus) {
									item.dynamicField.CHECKER_STATUS = 'R';
								}
							}
						}
					});
					extendedPager.grid.refreshCells();
					// nmsp.grid.refreshCells();
					hideWaitCursor();
				}
			}, 20);
		}

	}
};

/**
 * \ Function invoked after loading the grid.
 * 
 * @param evt
 */
itemLoadHandler = function (event) {
	ajaxForLazyLoading(event, "");

};

onComponentsCreated = function (event) {
}
var timeoutId;

function onGridSearchKeyUp(obj, namespace, event) {
	clearTimeout(timeoutId);
	timeoutId = setTimeout(function () {
		if (event.keyCode == 27) {
			hideCustomFilter(obj, namespace);
		} else {
			handleSearch(obj, namespace);
		}
	}, 500);
}

/**
 * To handle the custom search
 * 
 * @param grid
 */
function handleSearch(obj, namespace) {
	namespace.filterVals = [];
	var toFilter = true;
	var filterId = namespace.grid.customFilterId;
	if ($(obj).prop('nodeName') == 'SELECT' && $("#" + namespace.grid.customFilterId + "_grid_filter_box").val().length < 1) {
		toFilter = false;
	}
	if (toFilter) {
		var andCriteria = '';
		if ($("#" + namespace.grid.customFilterId + "_xel_gridsearch_type_dropdown").val() == 'All') {

		} else {
			andCriteria = '  and hierarchyItemType= "' + $("#" + namespace.grid.customFilterId + "_xel_gridsearch_type_dropdown").val() + '"';
		}
		namespace.filterFields.forEach(function (field) {
			var snapshot = Defiant.getSnapshot(namespace.grid.getDataProvider());
			var searchList = JSON.search(snapshot, '//*[contains(' + field + ',"' + $("#" + namespace.grid.customFilterId + "_grid_filter_box").val() + '") or text()="' + $("#" + namespace.grid.customFilterId + "_grid_filter_box").val() + '" ' + andCriteria + ']');
			namespace.filterVals = namespace.filterVals.concat(searchList);
		});
		namespace.grid.processFilter();
		namespace.grid.expandAll();
		resetScroll(namespace.grid);
	}
}

/**
 * To call the batchHierarchy method and set the data in the grid.
 * 
 * @param event
 * @param _parameter
 */
function ajaxForLazyLoading(event, _parameter) {
	var form = $(event.target.domElement).closest('form');
	var currentLvl = event.filter.level.getParentLevel();
	var currentItemObj = event.filter.parentObject;
	var nxtLevel = event.filter.level;
	var grid = event.target;
	var levelNum = nxtLevel._nestDepth;
	_parameter = _parameter + "&Action=batchHierarchy" + "&unqueId=" + getUniqueId(event) + "&blockId=" + currentLvl.blockId + "&instanceName=" + currentLvl.childrenField + "&instanceClass=" + currentLvl.blockObjType + "&idName=" + currentLvl.selectedKeyField + "&openlevel=" + levelNum;
	var _mode = getMode(grid.domElement);
	if (_mode) {
		_parameter = _parameter + "&Mode=" + _mode;
	}

	var _profileID = getProfileId(grid.domElement);
	if (_profileID) {
		_parameter = _parameter + "&ProfileId=" + _profileID;
	}

	var _subAction = getSubAction(grid.domElement);
	if (_subAction) {
		_parameter = _parameter + "&subAction=" + _subAction;
	}
	var _activeBreadcrumbOrder = getActiveBreadcrumb(grid.domElement);
	if (_activeBreadcrumbOrder) {
		if (_activeBreadcrumbOrder.attr('order'))
			_parameter = _parameter + "&activeElementOrder=" + _activeBreadcrumbOrder.attr('order');
		if (_activeBreadcrumbOrder.attr('id'))
			_parameter = _parameter + "&activeElementId=" + _activeBreadcrumbOrder.attr('id');
	}
	$.ajax({
		url: $(form).attr("action"),
		dataType: "json",
		method: "POST",
		data: _parameter,
		success: function (response) {

			grid.setChildData(currentItemObj, response.batchList, currentLvl, response.totalCount);
		},
		error: function (msg) {
			grid.hideSpinner();
		}
	});
}

/**
 * To find and return the unique id of the opened item
 * 
 * @param evt
 * @returns unique Id{String}
 */
function getUniqueId(evt) {
	var currentLevel = evt.filter.level.getParentLevel();
	var parenLvl = currentLevel.getParentLevel();
	var id = "";
	if (parenLvl) {
		id = parenLvl.unqId + '_' + $(evt.filter.parentObject).attr(currentLevel.selectedKeyField);
	} else {
		id = $(evt.filter.parentObject).attr(currentLevel.selectedKeyField);
	}
	currentLevel.unqId = id;
	return id;
}

/**
 * To set the row height programmatically
 * 
 * @param item
 * @param level
 * @param rowType
 * @returns {Number}
 */
rowHeightHandler = function (item, level, rowType) {

	// return 25; // this will cause the row to be 20 px.
	if (rowType == flexiciousNmsp.RowPositionInfo.ROW_TYPE_PAGER) {
		// // this is a pager row
		// var levelItem = $(item).attr(level.childrenField);
		// if (levelItem && levelItem.length > 5) {// only if the number of items > page size, show pager row. otherwise return 1(very tiny pager row)
		// 	if ($('#uxTemplateId').attr('value') === "template2")
		// 		return 28;
		// 	else
		// 		return 25;
		// } else {

		// 	return 1;

		// }
		return 1;
	} else {
		return flexiciousNmsp.UIUtils.getThemeById(level.grid.themeId).styles.rowHeight;// let the grid calculate other heights.
	}
};

dynamicHasChildrenHandler = function (item, cell) {
	return true;
}

/**
 * To call the closeInlineFields method and set the data in the grid.
 * 
 * @param event
 * @param _parameter
 */
function commonAjaxCall(event, _parameter, methodName) {
	var form = $(event.target.domElement).closest('form');
	var grid = event.target;
	var _mode = getMode(grid.domElement);
	if (_mode) {
		_parameter = _parameter + "&Mode=" + _mode;
	}

	var _profileID = getProfileId(grid.domElement);
	if (_profileID) {
		_parameter = _parameter + "&ProfileId=" + _profileID;
	}

	var _subAction = getSubAction(grid.domElement);
	if (_subAction) {
		_parameter = _parameter + "&subAction=" + _subAction;
	}
	var _activeBreadcrumbOrder = getActiveBreadcrumb(grid.domElement);
	if (_activeBreadcrumbOrder) {
		if (_activeBreadcrumbOrder.attr('order'))
			_parameter = _parameter + "&activeElementOrder=" + _activeBreadcrumbOrder.attr('order');
		if (_activeBreadcrumbOrder.attr('id'))
			_parameter = _parameter + "&activeElementId=" + _activeBreadcrumbOrder.attr('id');
	}
	ajaxFunctionCall(grid, event, form, _parameter, methodName);
}

/**
 * 
 * @param grid :
 *            grid object
 * @param form
 * @param _parameter :
 *            required parameters
 * @param methodName :
 *            method to be invoked in ajax call after ajax call;
 */
function ajaxFunctionCall(grid, event, form, _parameter, methodName) {

	var formData = AjaxAnywhere.getXelerateSerializedFormData(form);
	var cUrl = $(form).attr("action") + "?Action=" + methodName;
	generalSubmitAjaxMethod({
		url: cUrl,
		data: formData + _parameter,
		method: "POST",
		success: function (response) {
			try {
				window[methodName](grid, response, event);
			} catch (e) {
				// window.console.log('function: '+methodName+' doesnot exist!');
			}
		},
		error: function (msg) {
			hideWaitCursor();
		}
	});

}

function closeRemovedFields(grid, response) {
	response = reformatResponse(grid, response);
	var nmsp = getNameSpace($(grid.domElement).closest('form'), grid.blockId);
	nmsp.manualFocusField = $(':focus');
	compareAndSetJSON(JSON.parse(response), grid._dataProvider);
	grid.refreshCells();
	hideWaitCursor();
	setFocus();
	resetScroll(grid);

	function setFocus() {
		var nmsp = getNameSpace($(grid.domElement).closest('form'), grid.blockId);
		if (nmsp.manualFocusField && nmsp.manualFocusField.length > 0 && !nmsp.tabKeyPressed) {
			var firstVisibleElement = $('#' + $(nmsp.manualFocusField)[0].id)
			firstVisibleElement.focus();
			if ($(firstVisibleElement).setSelectionRange)
				$(firstVisibleElement).setSelectionRange($(firstVisibleElement).val().length, $(firstVisibleElement).val().length);
		} else if (nmsp.targetObj)
			setFocusToNextGridField(nmsp.targetObj, nmsp.fieldEvent, nmsp, false);
		clearOnChangeAttributes(nmsp);
		// var nextGridFieldId = nmsp.focusFieldId;
		// var nextGridElem = $(document.getElementById(nextGridFieldId));
		// if(nextGridElem && nextGridElem.length > 0){
		// $($(nextGridElem).children()[0]).focus();
		// }
	}

}
function clearOnChangeAttributes(nmsp) {
	nmsp.targetObj = null;
	nmsp.fieldEvent = null;
	nmsp.currentObjectPathId = null;
	nmsp.focusFieldId = null;
	nmsp.manualFocusField = null;
	nmsp.tabKeyPressed = null;
}

/**
 * To invoke the page change call.
 * 
 * @param evt
 */
function pageChangeHandler(evt) {
	var _parameters = "";
	var pageIndex = evt.filter.pageIndex;
	var pageSize = evt.filter.pageSize;
	_parameters = "&pageNumber=" + pageIndex + "&pageSize=" + pageSize;
	ajaxForLazyLoading(evt, _parameters);
}

/**
 * Gets the opened link details based on idValue
 * @param grid
 * @param idValue
 * @returns
 */
function getOpenedLinkDetails(grid, idValue) {
	var linkDetail;
	if (idValue && idValue.length > 0) {
		$.map(grid.openedLinkDetailsList, function (openedLinkDetails) {
			if (openedLinkDetails.doubleClickedItemId == idValue || getRowNumberFromCellId(grid, openedLinkDetails.doubleClickedItemId) == getRowNumberFromCellId(grid, idValue)) {
				linkDetail = openedLinkDetails;
			}
		});
	} else {
		if (grid.openedLinkDetailsList.length > 0) {
			linkDetail = grid.openedLinkDetailsList[0];
		}
	}

	return linkDetail;
}

/**
 * Gets the row number from cell id
 * 
 * @param grid
 * @param cellId
 * @returns
 */
function getRowNumberFromCellId(grid, cellId) {
	var gridId = 'grid' + grid.blockId;
	var fullPart = cellId.replace(gridId, "");
	fullPart = fullPart.replace("_cell_", "");
	var split = fullPart.split("_");
	var part1 = split[0];
	return part1;
}

onExpand = function (evt) {

	resetScroll(evt.grid);
	$("#warning_tooltip_img").hide(); // PD5828
	$("#warning_tooltip").hide(); // PD5828
}

onCollapse = function (evt) {
	resetScroll(evt.grid);
	$("#warning_tooltip_img").hide(); // PD5828
	$("#warning_tooltip").hide(); // PD5828
}

onScroll = function (evt) {
	// var gridN= evt.target;
	// evt.preventDefault();
}

onItemOpening = function (evt) {
	//_resolveDataGridFunctionCall(evt, "_ItemOpening");
}

onItemClosing = function (evt) {

}

itemDoubleClickHandler = function (evt) {
	//_resolveDataGridFunctionCall(evt, "_ItemDoubleClickHandler");
}

itemEditValueCommit = function (evt) {
	//_resolveDataGridFunctionCall(evt, "_ItemEditValueCommit");
};

/**
 * 
 * @param evt1
 */
iconClickHandler = function (evt) {
	//_resolveDataGridFunctionCall(evt, "_IconClickHandler");
};

/**
 * Function Called after datagrid popup apply completion.
 * 
 * @param namespace
 */
function afterDataGridApply(namespace) {
	var _profileID = namespace.grid.profileId;
	var _blockID = namespace.grid.blockId;
	if (_profileID && _blockID) {

		var strFun = _profileID + "_" + _blockID + "_AfterDataGridApply";

		try {
			window[strFun](namespace);
		} catch (e) {
			// window.console.log('function: '+strFun+' doesnot exist!');
		}

	}
}

/**
 * To get the selected items in a a grid
 * 
 * @param nmsp
 *            -Namespace
 */
function getSelectedGridItems(nmsp) {

	var selectedObjects = [];
	for (var i = 0; i < nmsp.grids.length; i++) {
		for (var j = 0; j < nmsp.grids[i].getSelectedItems().length; j++) {
			if (nmsp.grids[i].getSelectedItems()[j])
				selectedObjects.push(nmsp.grids[i].getSelectedItems()[j]);
		}
	}
	return selectedObjects;
}

/**
 * Set data into the grid
 * 
 * @param form
 * @param blockID
 * @param data
 */
function setData(form, blockID, data) {
	var nmsp = getNameSpace(form, blockID);
	nmsp.grid.setDataProvider(data);
	nmsp.grid.rebuild();
}

/**
 * Check whether the data is set in data grid.
 * 
 * @param form
 * @param blockID
 * @returns {Boolean}
 */
function isDataGridLoaded(form, blockID) {
	var nmsp = getNameSpace(form, blockID);
	return (nmsp.grid._dataProvider && nmsp.grid._dataProvider.length > 0);
}

/**
 * Get the id of the popup.
 * 
 * @param evt
 * @returns {String}
 */
function getDataGridLinkPopUpId(evt) {
	var form = $(evt.grid.domElement).closest('form');
	var mode = form.attr('mode').toUpperCase();
	var subAction = form.attr('subaction').toUpperCase();
	var profileId = form.attr('profileid');
	var blockId = evt.level.blockId;
	var fieldId = evt.column.dataField;
	if ("itemDoubleClick" == evt.type)
		fieldId = "POPUP";
	return profileId + "_" + blockId + "_" + subAction + "_" + mode + "_" + fieldId + "_div";
}

/**
 * Get the Namespace of the grid.
 * 
 * @param form
 * @param blockID
 * @returns
 */
function getNameSpace(form, blockID) {
	// if (form && form.attr('mode') && form.attr('subaction')) {
	// var mode = form.attr('mode').toUpperCase();
	// var subAction = form.attr('subaction').toUpperCase();
	var mode = 'CREATE';
	var subAction = 'ENTRY';
	// var profileId = form.attr('profileid')
	// return window[profileId + "_" + blockID + "_" + subAction + "_" + mode + "_NameSpace"];
	return window[blockID + "_" + subAction + "_" + mode + "_NameSpace"];
	// }
	// return null;
}

function getFormNameSpace(form) {
	if (form && form.attr('mode') && form.attr('subaction')) {
		var mode = form.attr('mode');
		var subAction = form.attr('subaction');
		var profileId = form.attr('profileid')
		return window[profileId + "_" + subAction + "_" + mode + "_NameSpace"];
	}
	return null;
}
/**
 * Sets the height of the popup
 * 
 * @param divID
 */
function formatDataGridPopUpContentHeight(divID) {

	if ($("#" + divID).hasClass("windowPopUp"))
		formatWindowPopupHeightForDataGrid(divID);
	else if ($("#" + divID + "_div").hasClass("relativePopup"))
		formatRelativePopupHeightForDataGrid(divID);

	else {

		var parentWindowPopupDiv = $("#" + divID).closest('.windowPopUp');
		if (parentWindowPopupDiv && parentWindowPopupDiv.length > 0) {
			var parentWindowPopupId = $(parentWindowPopupDiv).attr('id');
			parentWindowPopupId = parentWindowPopupId.replace('_div', '');
			formatWindowPopupHeight(parentWindowPopupId);
		}
	}

}

function formatRelativePopupHeightForDataGrid(divID) {// To set max-height to relative popup content div.

	var elementID = $("#" + divID).parent().find("div");
	var xel_windowHeight = $(window).height();
	var relativePopupContentMaxHeight;

	relativePopupContentMaxHeight = ((40 / 100) * xel_windowHeight);

	$("#" + divID).find(".popupContent").css({
		'max-height': relativePopupContentMaxHeight + 'px'
	});

}

function formatWindowPopupHeightForDataGrid(divID) {

	var xel_windowHeight = $(window).height();
	var windowPopupContentHeight = $("#" + divID).find(".popupContent").height();
	var popupHeaderPanelHeight = $("#" + divID).find(".popupHeaderPanel").height();
	var popupButtonDivHeight = $("#" + divID).find(".popupButton").outerHeight() + 15;
	var windowPopupMaxHeight = (77 / 100) * xel_windowHeight;

	var windowPopupHeight = popupHeaderPanelHeight + windowPopupContentHeight + popupButtonDivHeight;
	if ("template2" == document.getElementById('uxTemplateId').value) {
		if (windowPopupHeight < windowPopupMaxHeight) {
			$("#" + divID).css({
				'height': windowPopupHeight + 'px',
				'max-height': windowPopupMaxHeight + 'px'
			});
		} else {
			$("#" + divID).css({
				'height': windowPopupMaxHeight + 'px',
				'max-height': windowPopupMaxHeight + 'px'

			});
		}
	} else {
		$("#" + divID).css({
			'max-height': windowPopupMaxHeight + 'px'
		});
	}

	var windowPopupContentMaxHeight = (windowPopupMaxHeight - popupHeaderPanelHeight - popupButtonDivHeight) * 95 / 100;

	$("#" + divID).find(".popupContent").css({
		'max-height': windowPopupContentMaxHeight + 'px'
	});

}

/**
 * Sets the width of the popup content
 * 
 * @param divID
 */
function formatDataGridPopUpContentWidth(divID) {

	if ($("#" + divID) && $("#" + divID).length > 0) {
		if ($("#" + divID).hasClass("relativePopup")) {

			var xel_windowWidth = $(window).width();
			var relativeWidth = xel_windowWidth * (60 / 100);

			$("#" + divID).css({
				'width': relativeWidth + 'px'
			});

		}

	}

}
/**
 * To set an element's position relative to another element.
 * 
 * @param ele
 *            Original element form which the event occurs.
 * @param componentId
 *            Id of the element need to show relative to ele.
 * @param leftOffset
 *            No of offset pixels from left
 * @param topOffset
 *            No of Offset pixels from top.
 */
function setDataGridRelativePosition(ele, componentId, leftOffset, topOffset) {

	var xel_windowHeight = $(window).height(); // Height of the window
	var xel_windowWidth = $(window).width(); // Width of the window
	var topLoc = $(ele).offset().top;
	var leftLoc = $(ele).parent().parent().offset().left;
	var xel_componentHeight = $('#' + componentId).height();
	var xel_componentWidth = $('#' + componentId).width();

	var eleHeight = $(ele).height();
	var eleWidth = $(ele).width();

	var isAlignComponentMiddle = false;

	// Condtion to align the LOV component top or bottom of the parent text box
	if (topLoc + xel_componentHeight > xel_windowHeight) { // Component cant be placed at bottom
		if (topLoc > xel_componentHeight) { // If there is space at top then place component at top
			topLoc = topLoc - xel_componentHeight - 9;
		} else {// Place the component at sides with component at middle
			// topLoc = topLoc - (xel_componentHeight/2) - 15;
			topLoc = xel_windowHeight - xel_componentHeight - topOffset;
			isAlignComponentMiddle = true;
		}
	} else {
		topLoc = topLoc + topOffset;
	}

	if (isAlignComponentMiddle)
		leftLoc = leftLoc;
	else
		leftLoc = leftLoc - leftOffset;

	setPosition(topLoc, leftLoc, componentId);

	/**
	 * Set the top and left attribute of the lov component
	 */
	function setPosition(y, x, id) {

		$('#' + id).css({
			top: y + 'px',
			left: x + 'px'
		});
	}
}

/**
 * Method configured for getting the row disabled programmatically
 * 
 * @param cell
 * @param data
 * @returns {Boolean}
 */
programmaticCellFormatting_getRowDisabled = function (cell, data) {
	// if (cell) {
	// 	if (cell.getGrid().recordLocked == true // for disabling the row when record lock/underverification is true
	// 		|| cell.getGrid().underVerification == true) {
	// 		return true;
	// 	}
	// 	var _profileID = cell.getGrid().profileId;
	// 	if (_profileID) {
	// 		if ("Query" === getMode(cell.getGrid().domElement) && (cell.getColumn() && cell.getColumn().dataField != "dynamicField.COMMENT")) {
	// 			return true;
	// 		}
	// 		var strFun = _profileID + "_RowDisabled";
	// 		var disable = _resolveDataGridProgramaticCellFunctionCall(_profileID, data, cell, "Row", "Disable");
	// 		if (!disable) {
	// 			return false;
	// 		} else {
	// 			return true;
	// 		}
	// 	}
	// } else {
	// 	return false;
	// }
	if (cell) {
		//var dataValue = cell.rowInfo.getData();
		var disabled = false;
		var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
		if (xelDataGridComponentRef) {
			try {
				disabled = window[xelDataGridComponentRef][getDataGridComponentName(cell.getGrid())].component.xelDataGrid_RowDisable(data, cell);
				if (!disabled) {
					return false;
				} else {
					return true;
				}
			} catch (e) {
			}
		}
	}
	return false;
};

/**
 * Method configured for setting the row text color programmatically
 * 
 * @param cell
 * @returns
 */
programmaticCellFormatting_getRowTextColor = function (cell) {

	var data = cell.rowInfo.getData();
	var _profileID = cell.getGrid().profileId;
	if (_profileID) {
		return _resolveDataGridProgramaticCellFunctionCall(_profileID, data, cell, "Row", "TextColor");
	}
};

var rowBackGround = {
	"1": "0xA6A6A6",
	"2": "0xB3B3B3",
	"3": "0xC1C1C1",
	"4": "0xCECECE",
	"5": "0xDBDBDB",
	"6": "0xE9E9E9",
	"7": "0xF2F2F2",
	"8": "0xFAFAFA"
};

/**
 * Method configured for setting the column text color programmatically
 * 
 * @param cell
 * @returns {Number}
 */
programmaticCellFormatting_getColumnTextColor = function (cell) {
	var _profileID = cell.getGrid().profileId;
	var val = flexiciousNmsp.UIUtils.resolveExpression(cell.getRowInfo().getData(), cell.getColumn().dataField);
	if (_profileID) {

		var color = _resolveDataGridProgramaticCellFunctionCall(_profileID, val, cell, "Column", "TextColor");
		if (!color)
			color = 0x22356B;
		return color;
	}
};

/**
 * Display the popup configured for the link
 * 
 * @param evt
 */
function displayPopUp(evt, _parameter) {
	isPopupOpen = true;
	var targetId = getDataGridLinkPopUpTargetId(evt);
	var popupDivId = targetId.replace("dynamicField.", "") + "_div";
	var gridTarget = getDataGridTargetId(evt);
	var ele = evt.cell.domElement;
	linkElements[popupDivId] = $(ele).attr('id');
	var dataField = null;
	var nmsp = getNameSpace($(evt.grid.domElement).closest('form'), evt.grid.blockId);
	if ("itemDoubleClick" == evt.type && "template1" == document.getElementById('uxTemplateId').value) {

		dataField = evt.grid.profileId + "_" + evt.level.blockId + "_POPUP";
		var propObj = $(nmsp).attr(dataField);
		evt.column.targetdiv = $(propObj).attr("targetdiv");
		evt.column.targetdisplaydiagramid = $(propObj).attr("targetdisplaydiagramid");
		evt.column.targetdisplaypageid = $(propObj).attr("targetdisplaypageid");
		$("#blanket").show();
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$(".container").css({
				'position': 'static'
			});
			$(ele).closest(".xel-panel.tabular .xel-panel-content").css({
				'overflow': 'visible'
			});
		}
		// formatDataGridPopUpContentHeight(popupDivId);
		formatDataGridPopUpContentWidth(popupDivId);
		if ($("#" + popupDivId).hasClass("relativePopup")) {
			var topOffset = $(".popupHeaderPanel").height();
			setDataGridRelativePosition(ele, popupDivId, 0, topOffset);
		}
		// makeContentDragable(popupDivId);
		$("#" + targetId).empty();
		$(":focus").blur();
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$("#" + popupDivId).css({
				'display': 'block',
				'min-height': 136 + 'px'
			});
		} else {
			$("#" + popupDivId).css({
				'display': 'table',// Commented to fix the issue in Popup - while error is thrown, buttons are appearing outside the popup
				'min-height': 136 + 'px'
			});
		}
	} else {
		dataField = evt.grid.profileId + "_" + evt.level.blockId + "_" + evt.column.dataField.replace("dynamicField.", "");
		var propObj = $(nmsp).attr(dataField);
		evt.column.targetdiv = $(propObj).attr("targetdiv");

		$("#blanket").show();
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$(".container").css({
				'position': 'static'
			});
			$(ele).closest(".xel-panel.tabular .xel-panel-content").css({
				'overflow': 'visible'
			});
		}
		formatDataGridPopUpContentHeight(popupDivId);
		formatDataGridPopUpContentWidth(popupDivId);
		if ($("#" + popupDivId).hasClass("relativePopup")) {
			var topOffset = $(".popupHeaderPanel").height();
			setDataGridRelativePosition(ele, popupDivId, 0, topOffset);
		}
		makeContentDragable(popupDivId);
		$("#" + targetId).empty();
		$(":focus").blur();
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$("#" + popupDivId).css({
				'display': 'block',
				'min-height': 136 + 'px'
			});
		} else {
			$("#" + popupDivId).css({
				'display': 'table',// Commented to fix the issue in Popup - while error is thrown, buttons are appearing outside the popup
				'min-height': 136 + 'px'
			});
		}
	}

	var _refreashZones = targetId.replace("dynamicField.", "");
	_parameter = _parameter + "&popuprequest=y";
	_parameter = _parameter + "&focusFieldId=" + evt.column.dataField;
	submitAjaxForDataGrid(evt.column, evt, _refreashZones, "openLink", _parameter);
}

/**
 * Get the id of the popup.
 * 
 * @param evt
 * @returns {String}
 */
function getDataGridLinkPopUpTargetId(evt) {
	var form = $(evt.grid.domElement).closest('form');
	var mode = form.attr('mode').toUpperCase();
	var subAction = form.attr('subaction').toUpperCase();
	var profileId = form.attr('profileid');
	var blockId = evt.level.blockId;
	var fieldId = evt.column.dataField;
	if ("template1" == document.getElementById('uxTemplateId').value) {
		if ("itemDoubleClick" == evt.type || (evt.target.inlineEditable && evt.column.typeName == "FlexDataGridCheckBoxColumn"))
			fieldId = "POPUP";
	}
	return profileId + "_" + blockId + "_" + subAction + "_" + mode + "_" + fieldId;
}

/**
 * Get the id of the grid for refresh.
 * 
 * @param evt
 * @returns {String}
 */
function getDataGridTargetId(evt) {
	var form = $(evt.grid.domElement).closest('form');
	var mode = form.attr('mode');
	var subAction = form.attr('subaction');
	var profileId = form.attr('profileid');
	var blockId = evt.level.blockId;
	return profileId + "_" + subAction + "_" + mode + "_" + blockId;
}

/**
 * Get the id of the grid session.
 * 
 * @param evt
 * @returns {String}
 */
function getDataGridSessionId(evt) {
	var form = $(evt.grid.domElement).closest('form');
	var mode = form.attr('mode');
	var subAction = form.attr('subaction');
	var profileId = form.attr('profileid');
	var blockId = evt.level.blockId;
	return profileId + "_" + blockId + "_" + subAction.toUpperCase() + "_" + mode.toUpperCase();
}

function submitAjaxForDataGrid(_obj, event, _refreashZones, _action, _parameter) {
	var formObj = $(event.grid.domElement).closest("form");
	if (event)
		event.preventDefault();

	if (_parameter) {
		_parameter = _parameter + "&Action=" + _action;
	} else {
		_parameter = "Action=" + _action;
	}

	var _mode = getMode(event.grid.domElement);
	if (_mode) {
		_parameter = _parameter + "&Mode=" + _mode;
	}

	var _profileID = getProfileId(event.grid.domElement);
	if (_profileID) {
		_parameter = _parameter + "&ProfileId=" + _profileID;
	}

	var _subAction = getSubAction(event.grid.domElement);
	if (_subAction) {
		_parameter = _parameter + "&subAction=" + _subAction;
	}
	var _activeBreadcrumbOrder = getActiveBreadcrumb(event.grid.domElement);
	if (_activeBreadcrumbOrder) {
		if (_activeBreadcrumbOrder.attr('order'))
			_parameter = _parameter + "&activeElementOrder=" + _activeBreadcrumbOrder.attr('order');
		if (_activeBreadcrumbOrder.attr('id'))
			_parameter = _parameter + "&activeElementId=" + _activeBreadcrumbOrder.attr('id');
	}
	var _isPopup = $(_obj).attr("uniquepathid");
	var popupParentTargetDisplay = getAllParentPopups(event.grid.domElement);
	var _uniquePathID;
	if (_isPopup || popupParentTargetDisplay && popupParentTargetDisplay.length > 0) {
		_parameter = _parameter + "&popuprequest=y";
		_uniquePathID = _isPopup;
		var popupTargetDisplay = null;

		if (_obj.targetdiv && _obj.targetdiv.length > 0) {
			popupTargetDisplay = _obj.targetdiv;
		}
		_parameter = _parameter + "&popupTargetDisplay=" + popupTargetDisplay;
		if (null != popupParentTargetDisplay)
			_parameter = _parameter + "&popupParentTargetDisplay=" + popupParentTargetDisplay;
		var popupContent = $(event.grid.domElement).closest(".popupContent");
		if (popupContent && popupContent.length > 0) {
			var linkid = popupContent.find("#linkid");
			if (linkid && linkid.length > 0) {
				_parameter = _parameter + "&linkId=" + linkid.val();
			}
		}
	}

	var _popupPath = $(_obj).attr("pathid");
	if (_popupPath) {
		_parameter = _parameter + "&pathId=" + _popupPath;
	}
	var _displayDiagramId = $(_obj).attr("targetdisplaydiagramid"); // Link Dispaly Diagram id
	if (_displayDiagramId)
		_parameter = _parameter + "&displayDiagramId=" + _displayDiagramId;

	var _displayPageId = $(_obj).attr("targetdisplaypageid"); // Dispaly Page id (Submenu)
	if (_displayPageId)
		_parameter = _parameter + "&displayPageId=" + _displayPageId;

	var _isRecordLocked = $(event.grid.domElement).closest("form").attr("recordLock");
	if (_isRecordLocked)
		_parameter = _parameter + "&recordLock=" + _isRecordLocked;

	var _pendingRecordLock = $(event.grid.domElement).closest("form").attr("pendingRecordLock");
	if (_pendingRecordLock)
		_parameter = _parameter + "&pendingRecordLock=" + _pendingRecordLock;

	var _lockedByStaff = $(event.grid.domElement).closest("form").attr("lockedByStaff");
	if (_lockedByStaff)
		_parameter = _parameter + "&lockedByStaff=" + _lockedByStaff;
	var isUnderVerificaton = $(event.grid.domElement).closest('form').attr('isUnderVerification');
	if (isUnderVerificaton && isUnderVerificaton.length > 0)
		_parameter = _parameter + "&isUnderVerificaton=" + isUnderVerificaton;

	var blockId = event.level.blockId;
	var fieldId = $(_obj).attr("targetdiv");
	_parameter = _parameter + "&resolvedPathIdKey=" + blockId + "_" + fieldId;

	if (!_refreashZones)
		_refreashZones = $(event.grid.domElement).closest("form").attr('refreashZones');
	else if (!isUnderVerificaton && !_isRecordLocked && !_pendingRecordLock)
		_refreashZones = _refreashZones + ',' + getUserInfoZone(_profileID + "_" + _subAction + "_" + _mode, _uniquePathID);
	var nmspF = getFormNameSpace($(formObj));
	if (null != nmspF) {
		nmspF.action = _action;
		nmspF.refreashZones = _refreashZones;
		nmspF.popupAction = "N";
		nmspF.profileId = _profileID;
		nmspF.referenceProfileId = $(formObj).attr("referenceprofileid");
		var autoRefreshEnabled = $(formObj).attr('autoRefresh');
		if ("Y" === autoRefreshEnabled && ("saveRecord" === _action || "saveToDrafts" === _action /* ||"sendForVerification" === _action */)) {
			autoRefreshEnabled = $(formObj).find(".autorefreshEnabledInForm"); // Override the enabling of auto refresh facility by function
			nmspF.autoRefresh = ("Y" === autoRefreshEnabled) ? "Y" : "N";
		}
	}
	beforeSubmit();
	setTimeout(function () {
		AjaxAnywhere.submitAjaxAnywhereForm($(formObj), _refreashZones, null, "POST", _parameter);
	}, 4);
}

function linkObject() {
	this.label = '';
	this.targetdisplaydiagramid = '';
	this.targetdiv = '';
}

function inlineObject() {
	this.targetDivId = '';
	this.targetDisplayDiagramId = '';
	this.popupDivId = '';
	this.doubleClickedItemId = '';
	this.cancelButtonClass = '';
	this.pathIdKey = '';
	this.gridSessionId = '';
}

function hideDataGridPopup(obj, event) {
	isPopupOpen = false;
	showWaitCursor();
	var targetDivId = $(obj).attr("target-div");
	var parameters = "displayDiagramId=" + $(obj).attr("target-displaydiagram-id");
	if ($(obj).attr("doubleClickedItemId") && $(obj).attr("doubleClickedItemId").length > 0) {
		parameters = parameters + "&doubleClickedItemId=" + $(obj).attr("doubleClickedItemId");
	}

	var blockId = targetDivId.split('_' + getSubAction(obj).toUpperCase() + '_')[0];
	blockId = blockId.replace(getProfileId(obj) + '_', '');
	var nmsp = getNameSpace($(obj).closest("form"), blockId);
	if (nmsp && nmsp.grid.inlinePopupId)
		targetDivId = targetDivId + ',' + nmsp.grid.inlinePopupId;
	parameters = parameters + "&PopupId=" + targetDivId + "_div";
	parameters = parameters + "&isLinkRefresh=y";
	submitAjax(obj, event, targetDivId, "closeLink", parameters);
}

function applyDataGridPopup(obj, event) {
	showWaitCursor();
	var _profileID = getProfileId(obj);
	var targetDivId = $(obj).attr("target-div");
	var parameters = "displayDiagramId=" + $(obj).attr("target-displaydiagram-id");
	parameters = parameters + "&PopupId=" + targetDivId + "_div";
	parameters = parameters + "&isLinkRefresh=y";
	if ($(obj).attr("doubleClickedItemId") && $(obj).attr("doubleClickedItemId").length > 0) {
		parameters = parameters + "&doubleClickedItemId=" + $(obj).attr("doubleClickedItemId");
	}
	if (_profileID) {
		var strFun = _profileID + "_applyPopup";
		parameters = parameters + "&objname=" + $(obj).attr("objname");
		parameters = parameters + "&ProfileId=" + _profileID;
		try {
			window[strFun](obj, event, targetDivId, "applyPopUpLink", parameters);
		} catch (e) {
			submitAjax(obj, event, targetDivId, "applyPopUpLink", parameters);
		}
	}
	event.preventDefault();
}

function openDataGridReferencePopup(event, _parameter) {

	showWaitCursor();
	var obj = event.column;
	var targetDiv = $(obj).attr("targetId");
	var actionUrl = $(obj).attr("refActionUrl") + '?Mode=' + $(obj).attr("refMode") + '&subAction=' + $(obj).attr("subAction") + '&ProfileId=' + $(obj).attr("refProfileId") + _parameter;// Url of screen to be opened using reference link.
	var targetDivId = targetDiv + "_div";
	actionUrl = actionUrl + '&referenceWindowPopupId=' + targetDivId;
	var popupContentDiv = targetDiv + "_ReferencePopupContent";// Div within reference window popup that holds the content.
	var ele = event.cell.domElement;
	$("#blanket").removeClass("relative-popup");
	$("#blanket").addClass("window-popup");
	$("#blanket").show();
	if ("template2" == document.getElementById('uxTemplateId').value) {
		$(".container").css({
			'position': 'static'
		});
		$(ele).closest(".xel-panel.tabular .xel-panel-content").css({
			'overflow': 'visible'
		});
	}

	var isReferenceWindowPopupField = $(obj).closest(".ReferenceWindowPopup");// To indicate whether link field lies within a reference window popup.
	var referenceWindowPopupId = $(isReferenceWindowPopupField).attr("id");
	// To open blanket for normal popup within a reference window popup.

	if (isReferenceWindowPopupField && (isReferenceWindowPopupField.length) > 0) {

		var innerBlanketMode = $("#" + referenceWindowPopupId).find(".ReferencePopupInnerBlanket").attr("innerBlanketMode");
		if (innerBlanketMode && innerBlanketMode.length > 0) {

			$("#" + referenceWindowPopupId + "_" + innerBlanketMode + "_ReferencePopupInnerBlanket").css({
				'display': 'block',
				'z-index': 500
			});
		}
	}

	if ($("#" + targetDivId) && $("#" + targetDivId).length > 0) {
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$("#" + targetDivId).css({
				'display': 'block'
			});

		} else {
			$("#" + targetDivId).css({
				'display': 'table'// Commented to fix the issue in Popup - while error is thrown, buttons are appearing outside the popup
			});
		}

		var hiddenItem = $("#" + targetDivId).find("#hasSubMenu");// To check whether screen opened in reference window popup is a sub-menu type screen.
		if (hiddenItem && hiddenItem.length > 0) {
			var val = hiddenItem.val();
			if ("Y" == val) {// To resize the reference window popup for sub-menu type screens.
				$("#" + targetDivId).css({
					'left': 2 + '%',
					'width': 96 + '%'
				});
			}
		}

		// makeContentDragable(targetDivId);
		// To load content onto reference window popup content div.
		$("#" + targetDivId).find("#" + popupContentDiv).load(contextPath + "/" + actionUrl, {}, function () {

			setContainerDivSize(targetDivId);
			initaliseUIComponents(targetDivId);
			hideWaitCursor();
		});
	}
}

function openDataGridReferenceTab(event, _parameter) {
	var obj = event.column;
	var targetTabId = $(obj).attr("targetId");
	var actionUrl = $(obj).attr("refActionUrl") + '?openAsTab=y&Mode=' + $(obj).attr("refMode") + '&subAction=' + $(obj).attr("subAction") + '&ProfileId=' + $(obj).attr("refProfileId");
	actionUrl = actionUrl + _parameter;
	addXelerateTabAfterCurrentTab(actionUrl, $(obj).attr("profileLabel"), targetTabId, null);

}

// To hide reference window popups and blankets.
function hideDataGridReferencePopup(obj, event) {

	showWaitCursor();
	var targetDivId = $(obj).attr("target-div");

	if ($("#" + targetDivId) && $("#" + targetDivId).length > 0) {
		$("#" + targetDivId).css({
			'display': 'none'
		});
	}

	// var hiddenLinkFieldName = $("#"+targetDivId).find("#parentLinkFieldName");
	var hiddenLinkFieldName = $(obj).attr("parentFieldName");// Name of the parent link field of links within normal popups. 'null' for 1st level links.
	var isReferenceWindowPopupField = $("#" + targetDivId).parent().closest(".ReferenceWindowPopup");// To indicate whether link field lies within a reference window popup.
	var referenceWindowPopupId = $(isReferenceWindowPopupField).attr("id");
	if (hiddenLinkFieldName && hiddenLinkFieldName.length > 0) {
		var value = hiddenLinkFieldName.val();
		var targetBlanketId = value + "_blanket";// To close blankets for multiple level normal popups. Blankets written within parent popups will be closed.

		var innerBlanketMode = $("#" + targetDivId + "_div").find(".innerBlanket").attr("innerBlanketMode");
		if (innerBlanketMode && innerBlanketMode.length > 0) {
			targetBlanketId = linkFieldName + "_" + innerBlanketMode + "_blanket";
		}

		if ($("#" + targetBlanketId) && $("#" + targetBlanketId).length > 0) {
			$("#" + targetBlanketId).css({
				'display': 'none'
			});
		}
	} else if (isReferenceWindowPopupField && (isReferenceWindowPopupField.length) > 0) {// To close blanket for normal popup within a reference window popup.

		var innerBlanketMode = $("#" + referenceWindowPopupId).find(".ReferencePopupInnerBlanket").attr("innerBlanketMode");
		if (innerBlanketMode && innerBlanketMode.length > 0) {

			$("#" + referenceWindowPopupId + "_" + innerBlanketMode + "_ReferencePopupInnerBlanket").css({
				'display': 'none'
			});
		}

	} else {// To close normal blanket for a reference window popup.
		$("#blanket").css({
			'display': 'none'
		});
		if ("template2" == document.getElementById('uxTemplateId').value) {
			$(".container").css({
				'position': 'relative'
			});
			$(obj).closest(".xel-panel.tabular .xel-panel-content").css({
				'overflow': 'auto'
			});
		}
	}

	hideWaitCursor();

}

function getImageTextStyle(item, column, imageUrl) {
	var value = $(item).attr(column.dataField);
	return '<span> <img class="dataLegendImageStyle" src="' + imageUrl + '" style="padding-left:5px;float:left;"><i id = "' + item.userDefinedUniqueId + '" title="' + value + '" style=" padding-left:5px; font-style: normal;display:inline-block;">' + value + '</i></span>';
}

function getImageTextStyleWithTooltip(item, column, imageUrl, tooltip) {
	var value = $(item).attr(column.dataField);
	return '<span><img class="dataLegendImageStyle" src="' + imageUrl + '" title="' + tooltip + '" style="padding-left:5px;float:left;"><i id = "' + item.userDefinedUniqueId + '" title="' + value + '"  style=" padding-left:5px; font-style: normal;display:inline-block;">' + value + '</i></span>';
}
function applyBulkComment(obj, commentId, nmsp) {
	var formNmsp = window[$(obj).closest("form").attr("ProfileId") + "_" + getSubAction($(obj).closest("form")) + "_" + getMode($(obj).closest("form")) + "_NameSpace"];
	var comment = $("#" + commentId + "xel_popup_textArea").val();
	var form = $(obj).closest("form");
	var profileId = form.attr('profileid');
	var strFun = profileId + "_applyBulkComment";
	var searchList = JSON.search(nmsp.snapshot, '//*[contains(MAKER_CHECKER_ELEMENT,"Y")]');
	searchList.forEach(function (item) {
		if (item) {
			var key = item.objectPathId + "_" + "COMMENT";
			if (!formNmsp.changeFields[key])
				item.dynamicField.COMMENT = comment;

			try {
				window[strFun](obj, comment, nmsp, item);// To provide facility to override this method.
			} catch (e) {

			}
		}
	});
	formNmsp[nmsp.grid.blockId + "_checkerComment"] = comment;
	nmsp.grid.refreshCells();
	if (comment && comment.length > 0) {
		$("div#" + nmsp.grid.domElement.id + " .gridBulkComment").removeClass('gridBulkCommentNormal').addClass("gridBulkCommentActive");
	} else {
		$("div#" + nmsp.grid.domElement.id + " .gridBulkComment").removeClass("gridBulkCommentActive").addClass('gridBulkCommentNormal');
	}
	hideBulkComment(obj, nmsp);
}
function hideCustomFilter(obj, nmsp) {

	$('div#' + $(obj).attr('searchdiv')).hide("slow", "swing", function () {
		$('div#' + $(obj).attr('searchdiv')).parent().css({
			'position': 'static'
		});
	});
	$("div#" + nmsp.grid.domElement.id + " .gridCustomFilterActive").removeClass("gridCustomFilterActive");
}
function hideBulkComment(obj, nmsp) {

	$('div#' + $(obj).attr('commentdiv')).hide("slow", "swing", function () {
		$('div#' + $(obj).attr('commentdiv')).parent().css({
			'position': 'static'
		});
	});
}
function clearBulkComment(obj, commentId, nmsp) {

	var comment = $("#" + commentId + "xel_popup_textArea").val();

	$("#" + commentId + "xel_popup_textArea").val("");

}
function clearCustomFilter(obj, searchId, nmsp, searchBox) {
	if ("#" + searchId + searchBox && $("#" + searchId + searchBox)) {
		$("#" + searchId + searchBox).val("All");
	}
	var searchItem = $("#" + searchId + "_grid_filter_box").val();
	$("#" + searchId + "_grid_filter_box").val("");
	if (searchItem.length > 0) {
		handleSearch(obj, nmsp);
	}

}

function createInlineDomElement(fieldId) {
	var div = document.createElement('div');
	$(div).addClass('inlineFieldDivHeight');
	return div;
}
function formatPathId(pathId){

	var formattedId = "";
	if(pathId){
		for(var i=0; i<pathId.length; i++){

			if("[" !== pathId.charAt(i) && "]" !== pathId.charAt(i) && "." !== pathId.charAt(i))
				formattedId += pathId.charAt(i);

			if("." === pathId.charAt(i))
				formattedId += "__";
		}
	}
	
	return formattedId;
}
function setPopupLink(obj,val,uiEntity){
	let componentRef= getDataGridComponentRef(obj.parent.getGrid());
	var htmlData=''
	let linkLabel='';
	let style='';
	let fieldtype = uiEntity.dataType.type.toLowerCase() === 'number'? 'number':'text';
	if(fieldtype === 'number' && (typeof val[uiEntity.name]==="number" || (typeof val[uiEntity.name]==="string" && val[uiEntity.name].length>0))){
		val[uiEntity.name] =parseFloat(val[uiEntity.name]);
		uiEntity.dataType.scale!= undefined ? val[uiEntity.name] = (val[uiEntity.name]).toFixed(uiEntity.dataType.scale):'';
	}
	let groupingRequired=componentRef.uiMetaDataService.isGroupingRequiredField(uiEntity);
	if(val[uiEntity.name]){
		linkLabel=val[uiEntity.name];
		if(groupingRequired){
			let formattedValue = componentRef.formatValue(linkLabel,uiEntity);
			style="text-align: right ; display: block; padding-right:2px";
			linkLabel =formattedValue;
		}
	}
	// if(uiEntity.label && uiEntity.label.length>0)
	// 	linkLabel=uiEntity.label;
	let customStyleClass='';
	if(uiEntity.customStyleClass && uiEntity.customStyleClass.length>0){
		customStyleClass=uiEntity.customStyleClass;
	}
	htmlData= '<a class="link '+customStyleClass+'"  popupTarget="'+uiEntity.targetDisplay+'" style="'+style+'">' + linkLabel + '</a>';
	let eventTarget = 'a';
	
	if (uiEntity.events && uiEntity.events.indexOf('LF') > -1) {
		let imagesPath = window['CONSTANT_NAMES']['IMAGES_PATH'];
		var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
		if (xelDataGridComponentRef) {
			try {
				var imageUrl = window[xelDataGridComponentRef][getDataGridComponentName(obj.parent.getGrid())].component.xelDataGrid_ImageFunction(val, obj.parent.getColumn(), linkLabel, uiEntity.name);
			} catch (e) { }
			if (imageUrl && imageUrl.length > 0) {
				htmlData = '<span class="dataLegendPopupSpan" ><img class="dataLegendPopupImageStyle" title="'+linkLabel+'" src="' + (imagesPath + imageUrl) + '" ></img><span>';
				eventTarget = 'img';
			}
		}
	}
	obj.domElement.innerHTML=htmlData;	
	var clickField = $(obj.domElement).find(eventTarget);
	$(clickField).click(function (event) {
		var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
		if (xelDataGridComponentRef) {

			window[xelDataGridComponentRef][getDataGridComponentName(obj.parent.getGrid())].component.xelDataGrid_ItemClickHandler(event, val, uiEntity.name,uiEntity,obj);
		}

	});
}
function getDynamicGridFieldVariation(fieldId, val) {

	var variation = null;
	if (val.fieldVariationList && val.fieldVariationList.length>0) {
		$.each(val.fieldVariationList, function (key, value) {
			if (value.fieldName === fieldId) {
				variation = value;
			}
		});
	}
	return variation;
}

function setInlineEditCheckBox(obj,val,uiEntity){
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	let componentRef= getDataGridComponentRef(obj.parent.getGrid());
	let value='';
	if(val[uiEntity.name] && val[uiEntity.name].length>0){
		value=val[uiEntity.name];
	}
	let htmlData='';	
	let variationObj = getDynamicGridFieldVariation(uiEntity.name,val);
	if(!variationObj || variationObj.isVisible){
		htmlData='<span class="inlineCheckBoxParent"><input class="regular-checkbox" type="checkbox"';
		if('Y' === value || 'y' === value){
			htmlData+=' checked';
		}
		htmlData += ' fieldid="' + uiEntity.name + '" ';
	let pathId= val['objectPathId'];
	let id=uiEntity.name
	if(pathId && pathId.length > 0){ 		
 	 	id= formatPathId(pathId) +'__' + uiEntity.name; 	 	
 	}
 	htmlData += ' id="' + id+ '"';	 
	htmlData +=' ><label class="regular-checkbox-label" for="'+id+'"></label></span>';
	obj.domElement.innerHTML=htmlData;		
	setInputFieldEvents(obj,val,uiEntity);
	//	htmlData += 
	}else{
		obj.domElement.innerHTML='<span></span> ';
	}
	
	function setInputFieldEvents(obj,val,uiEntity){
		var onChangeEnabled = false;
		let checkBox = $(obj.domElement).find('input[type=checkbox]');
		if(uiEntity.events){
			var events =uiEntity.events.split(',');
	 		var ivEnabled = false;
			for(var i = 0;i<events.length;i++){
				if("OC"== events[i] ){				
					onChangeEnabled = true;
				}else if("OK"== events[i] ){
					$(checkBox).click(function (event) {
						if(componentRef){
							componentRef.clickEvent(event,val,uiEntity);
						}
					});					
				}
			}
		}
		$(checkBox).change(function (event) {
			onCheckBoxOnChange(obj,event,uiEntity,onChangeEnabled,ivEnabled);
		});
	}
	
	function onCheckBoxOnChange(obj, event,val,uiEntity,onChangeEnabled) {
		if ($(event.target).prop('checked')){
			val[uiEntity.name]='Y';
		}else{
			val[uiEntity.name]='N';
		}
			if(componentRef && onChangeEnabled){
				componentRef.onChange(event,val,uiEntity);
			}
	}
}

function setInlineEditTextBox(obj,val,uiEntity){
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	let componentRef= getDataGridComponentRef(obj.parent.getGrid());
	let value='';
	let style='';
	let fieldtype = uiEntity.dataType.type.toLowerCase() === 'number'? 'number':'text';
	if(fieldtype === 'number' && (typeof val[uiEntity.name]==="number" || (typeof val[uiEntity.name]==="string" && val[uiEntity.name].length>0))){
		val[uiEntity.name] =parseFloat(val[uiEntity.name]);
		uiEntity.dataType.scale!= undefined ? val[uiEntity.name] = (val[uiEntity.name]).toFixed(uiEntity.dataType.scale):'';
	}
	let groupingRequired=componentRef.uiMetaDataService.isGroupingRequiredField(uiEntity);
	if(val[uiEntity.name]){
		value=val[uiEntity.name];
		if(groupingRequired){
			let formattedValue = componentRef.formatValue(value,uiEntity);
			fieldtype="text";
			style ="text-align: right ; display: block; padding-right:2px";
			value =formattedValue;
		}
	}	
	let variationObj = getDynamicGridFieldVariation(uiEntity.name,val);
	if(!variationObj || variationObj.isVisible){
		
		obj.domElement.innerHTML='<input  class="xel-inline-textbox" style="'+style+'" type="'+fieldtype+'" maxlength="'+uiEntity.dataType.length+'"  value="'+value+'">';	
		
		setInputFieldEvents(obj,val,uiEntity);
		var field = $(obj.domElement).find('input');
		let grid = obj.parent.getGrid();
		if(grid.errorList.hasOwnProperty(val.objectPathId+"."+uiEntity['name'])){
			bindErrorFieldProperty(field,grid.errorList[val.objectPathId+"."+uiEntity['name']],"",false)
		}
	}else{
		obj.domElement.innerHTML='<span style="'+style+'" >'+value+'</span> '
	}

	function setInputFieldEvents(obj,val,uiEntity){
		let field = $(obj.domElement).find('input')[0];
		var onChangeEnabled = false;
		if(uiEntity.events){
			var events =uiEntity.events.split(',');
	 		var ivEnabled = false;
			for(var i = 0;i<events.length;i++){
				if("OC"== events[i] ){				
					onChangeEnabled = true;
				}else if("OK"== events[i] ){
					$(field).click(function (event) {
						if(componentRef){
							componentRef.clickEvent(event,val,uiEntity);
						}
					});					
				}else if("KP"== events[i] ){
				}else if("MO"== events[i]){
					$(field).mouseover(function (event) {
						if(componentRef){
							componentRef.mouseOverEvent(event,val,uiEntity);
						}
					});						
				}else if("KD"== events[i]){
				}else if("KU"== events[i]){
					$(field).keyup(function (event) {
						if(componentRef){
							componentRef.keyUpEvent(event,val,uiEntity);
						}
					});	
				}else if("IV"== events[i]){
					ivEnabled = true;
			   }
			}
		}
		$(field).change(function (event) {
			val[uiEntity.name] = event.target.value;
			onInputOnChange(obj,val, event,uiEntity,onChangeEnabled,ivEnabled);
		});
		$(field).blur(function (event) {			
			onInputBlur(obj,val, event,uiEntity,onChangeEnabled,ivEnabled);
		});
		$(field).focus(function (event) {			
			let componentRef= getDataGridComponentRef(obj.parent.getGrid());
			if(componentRef){
				componentRef.onFocus(event,val,uiEntity);
			}
		});
	}
	
	function onInputOnChange(obj,val, event,uiEntity,onChangeEnabled,ivEnabled){
		let componentRef= getDataGridComponentRef(obj.parent.getGrid());
		if(componentRef){
			componentRef.validateField(event.target,val,uiEntity);
			if(onChangeEnabled){
				componentRef.onChange(event,val,uiEntity);
			}
		}
	}
	function onInputBlur(obj,val, event,uiEntity){
		let componentRef= getDataGridComponentRef(obj.parent.getGrid());
		if(componentRef){
			componentRef.blurEvent(event,val,uiEntity);
		}
	}	
}

function setInlineSelectBox(obj,val,uiEntity){
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	let componentRef= getDataGridComponentRef(obj.parent.getGrid());
	let value='';
	if(val[uiEntity.name] && val[uiEntity.name].length>0){
		value=val[uiEntity.name];
	}
	// obj.domElement.innerHTML='<input  class="mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-valid ng-star-inserted ng-touched" matinput="" ng-reflect-maxlength="'+uiEntity.dataType.length+'" type="text" ng-reflect-placeholder="'+uiEntity.description+'" ng-reflect-type="" maxlength="'+uiEntity.dataType.length+'" id="mat-input-2" placeholder="'+uiEntity.description+'" aria-invalid="false" aria-required="false" value="'+value+'">';
	//select starts

	var INPUT_GROUP_CLASS = "selectInputGroupImage";

	if(value){
		originalValue = value;
	}else{
		originalValue = '';
	}

	let variationObj = getDynamicGridFieldVariation(uiEntity.name,val);
	if(!variationObj || variationObj.isVisible){
		var htmlData = "<select data-live-search='true' data-size='10' " +
				"data-container='body' originalValue='" + originalValue+"'";

	htmlData += "' fieldid='" + uiEntity.name + "' ";
	let pathId= val['objectPathId'];
	if(pathId && pathId.length > 0){
 		htmlData += " pathId='" + pathId + "'";
 	 	htmlData += " id='" + formatPathId(pathId) + "__" + uiEntity.name + "'"; 	 	
 	}else{
 		htmlData += " id='" + uiEntity.name+ "'"; 	
 	}
	//htmlData = htmlData+ "mandatory='"+profileFieldObj.isMandatory+"' required='"+profileFieldObj.isRequired +"' ";

	// if(isFieldDisplayAsLabel(profileFieldObj, currentVariationObj, form)){

	// 	var displayValue = objVal;
	// 	var  title = null;
	// 	htmlData = "";

	// 	//Other than View page, tooltip is configured as label of the field. For view page it is value.
	// 	if(!isViewPage(form)) 
	// 		title = getFieldTooltip(profileFieldObj,currentVariationObj);

	// 	htmlData += createReadOnlyField(form, displayValue, pathId, getType(profileFieldObj), title, "text" , profileFieldObj, null);
	// 	return htmlData;
	// }

	
	// if(isMultiSelect()){
	// 	htmlData += "multiple='true' ";
	// }

	// htmlData += "prevValue=''";//TODO

	//cutom style
	//key value - custom attributes pending

	var cssClass = " class='nameField selectpicker ";

	// if(isFieldNonEditable(form, currentVariationObj, profileFieldObj)
	// 	|| (fieldName =="CHECKER_STATUS" && null!=objVal && null!=val && null!=val.CheckerStatus)){
	// 	cssClass += "disabledInput";
	// 	htmlData += " readonly='true' ";
	// }

	//Class to identify script field
	cssClass += " scriptField";
	
	// if(null != getTextTransformProperty(profileFieldObj))
	// 	cssClass = cssClass+ getTextTransformProperty(profileFieldObj)

	htmlData += cssClass +"' ";

	writeEvents(uiEntity);
	htmlData += ">";	

	let optionBeans;
	if(uiEntity.lovData)
		optionBeans =uiEntity.lovData;
	// if(currentVariationObj){
	// 	optionBeans = excludeOptionsFromDropDown();
	// 	optionBeans = removeHiddenItemFromOptions();
	// 	optionBeans = includeOptionsInDropDown(currentVariationObj);
	// 	optionBeans = removeHiddenItemFromOptions();
	// }
	
	// if(isNullValue(objVal) && !isNullValue(profileFieldObj.defaultValue)){
	// 	objVal = profileFieldObj.defaultValue;
	// }

	$(optionBeans).each(function(){
		if(this.code.length>0)
		 htmlData += "<option value='" + this.code + "' ";
		else
		 htmlData += "<option value ";
		if(value === this.code)
			htmlData += "selected='selected'";

		htmlData += " >";
		htmlData += this.description;
		htmlData += "</option>";
	});

	htmlData += "</select>";

	writeInputGroup();
	
	obj.domElement.innerHTML=htmlData;

	var field = $(obj.domElement).find('select');

	initialiseDatagridSelectPicker(obj.domElement);
	setInputFieldEvents(obj,val,uiEntity);
	}else{
		let optionBeans;
		if(uiEntity.lovData)
			optionBeans =uiEntity.lovData;
		$(optionBeans).each(function(){
			if(value === this.code && value.length>0)
				value = this.description;
		});	
		obj.domElement.innerHTML='<span>'+value+'</span> '
	}
	function setInputFieldEvents(obj,val,uiEntity){
		// let field = $(obj.domElement).find('select')[0];
		let selectButton = $(obj.domElement).find('button')[0];
		var onChangeEnabled = false;
		if(uiEntity.events){
			var events =uiEntity.events.split(',');	 
	 		var ivEnabled = false;
			for(var i = 0;i<events.length;i++){
				if("OC"== events[i] ){				
					onChangeEnabled = true;
				}else if("OK"== events[i] ){
					$(selectButton).click(function (event) {
						if(componentRef){
							componentRef.clickEvent(event,val,uiEntity);
						}
					});		
				}else if("KP"== events[i] ){
				}else if("MO"== events[i]){
					$(selectButton).mouseover(function (event) {
						if(componentRef){
							componentRef.mouseOverEvent(event,val,uiEntity);
						}
					});		
				}else if("KD"== events[i]){
				}else if("KU"== events[i]){	
					$(selectButton).keyup(function (event) {
						if(componentRef){
							componentRef.keyUpEvent(event,val,uiEntity);
						}
					});				   
				}else if("IV"== events[i]){
					ivEnabled = true;
			   }
			}
		}
		$(field).change(function (event) {
			onSelectOnChange(obj, event,uiEntity,onChangeEnabled);
		});
		
		$(selectButton).blur(function (event) {			
			if(componentRef && !($(selectButton).closest('.bootstrap-select').hasClass('open'))){
				//componentRef.validateField(selectButton,val,uiEntity);
			}
		});		
	}
	function onSelectOnChange(obj, event,uiEntity,onChangeEnabled) {
		$(obj.data).attr(uiEntity.name, $(obj.domElement).find('select').val());
			if(componentRef && onChangeEnabled){
				componentRef.onChange(event,val,uiEntity);
			}
	}
	function isMultiSelect(){
		if("M" == profileFieldObj.staticListType || (currentVariationObj && "M" == currentVariationObj.staticListType))
			return true;
		return false;
	}

	function excludeOptionsFromDropDown(){
		var dynamicList = currentVariationObj.staticList;
		if(dynamicList && dynamicList.length>0){
			$(dynamicList).each(function(){
				for(var x=0; x<optionBeans.length;x++){
					if(optionBeans[x].code === this.code && ("H" === this.mode || "" === this.mode))
						optionBeans[x].mode = "H";
				}
			});
		}
		return optionBeans;
	}

	function includeOptionsInDropDown(){

		var dynamicList = currentVariationObj.staticList;
		if(dynamicList && dynamicList.length>0){
			$(dynamicList).each(function(){
				var countIfNotPresent= 0;
				for(var x=0; x<optionBeans.length;x++){
					if(optionBeans[x].code === this.code){
						if((("H" === optionBeans[x].mode || "" === optionBeans[x].mode)) && "A" === this.mode)
						optionBeans[x].mode = "A";
					}
					else
						countIfNotPresent++;
				}
				if(countIfNotPresent === optionBeans.length)
					optionBeans[optionBeans.length] = this;
			});
		}
		return optionBeans;
	}

	function removeHiddenItemFromOptions(){
		var newList=[];
		var newListCount = 0;
		for(var j=0; j<optionBeans.length; j++){
			if(optionBeans[j] && "A" === optionBeans[j].mode){
				newList[newListCount] = optionBeans[j];
				newListCount++;
			}
		}
		return newList;
	}

	//Currency dependent attributes pending
	//error field
	//link field name
	// path id and unique path id
	//Dynamic call attributes
	//is filter field


	function writeEvents(uiEntity){

		var evnts = uiEntity.events;
		if(evnts){
			var events = evnts.split(",");
			htmlData += " events='";

			for(var i = 0;i<events.length;i++){
				 if("OC"== events[i] ){
					 htmlData += "OC";
					 //htmlData = htmlData+ " onchange='onFieldOnChange(this,event)'  "; 
					 onChangeEnabled = true;
				 }
			}
			htmlData += "'";
		}
	}

	function writeInputGroup(){
		// if(isFieldNonEditable(form, currentVariationObj, profileFieldObj))
		// 	return;
		// else{
			var inputGrp = "<span ";
			inputGrp += " class='selectInputGroupImage'";
			//inputGrp += " onclick=''";
			inputGrp += " />";

			htmlData += inputGrp;
		// }
	}
}

function setInlineDateBox(obj,val,uiEntity){
	let componentRef= getDataGridComponentRef(obj.parent.getGrid());
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	let value='';
	if(val[uiEntity.name] && val[uiEntity.name].length>0){
		value=val[uiEntity.name];
	}
	let variationObj = getDynamicGridFieldVariation(uiEntity.name,val);
	if(!variationObj || variationObj.isVisible){
		var htmlData = '<input ';
 	let pathId = val['objectPathId'];
 	if(pathId && pathId.length > 0){
 		htmlData += " pathId='" + pathId + "'";
 	 	htmlData += " id='" + formatPathId(pathId) + "__" + uiEntity.name + "'"; 	 	
 	 	//errorField = checkIfErrorField(nmsp,formatPathId(pathId) + "__" + uiEntity.name);
 	}
 	else{
 		htmlData += " id='" + uiEntity.name + "'"; 		
 	} 	

	// if(profileFieldObj.formatType && profileFieldObj.formatType.length>0){
	// 	htmlData = htmlData+ " fTypePresent='true' ";
	// }
	// var formatMask = "";
	// if(currentVariationObj && currentVariationObj.formatMask && currentVariationObj.formatMask.length>0){
	// 	formatMask = currentVariationObj.formatMask;
	// }else if(profileFieldObj.strModifiedFormatMask && profileFieldObj.strModifiedFormatMask.length>0)
	// 	formatMask = profileFieldObj.strModifiedFormatMask;
	// else
	// 	formatMask = profileFieldObj.strFormatMask;
	// if(formatMask)
	// 	htmlData = htmlData+ " maskformat='" + formatMask + "' ";
	// if(dataType == "3"){
		
		htmlData+="type='text' ";
		htmlData+="dateField='true' ";
		htmlData+="dateFormat='mm/dd/yyyy' ";
		let formm='mm/dd/yyyy';
		htmlData+="dateMask='"+(formm&&formm.length>0 ? formm.replace(new RegExp("[A-Za-z]", 'g'), '9') +"' ":"'");
		// if(!isNullValue(placeholder) && placeholder!==(xel_session_var.strClientDateFormat!=null?xel_session_var.strClientDateFormat.toUpperCase():xel_session_var.strClientDateFormat))
			htmlData+="maskInclude='n' ";
		//
	//	htmlData+="placeholder='"+formm.toUpperCase()+"' "; 
			//htmlData+="maskInclude='y' ";
	 	
	// }else if(dataType == "2"){
	// 	htmlData+="type='text' ";
	// 	if(profileFieldObj.formatType && profileFieldObj.formatType.length>0){
	// 		htmlData = htmlData+ " fType='"+profileFieldObj.formatType+"' ";
	// 		var maxLength = getMaxLengthforNumberField(profileFieldObj,true);
	// 		if(maxLength && maxLength.length>0)
	// 			htmlData = htmlData+ " maxlength='"+maxLength+"' ";
	// 	}

	// 	if("Y"== profileFieldObj.autoPrecision)
	// 		htmlData = htmlData+ " autoprecision='Y' ";
	// 	else
	// 		htmlData = htmlData+ " autoprecision='N' ";
		
	// 	if(profileFieldObj.tierRange){
	// 		htmlData = htmlData+ " tierrange='"+profileFieldObj.tierRange+"' ";
	// 	}
	// }else{
	// 	htmlData+="type='text' ";
	// 	var maxLength = getMaxLengthforNumberField(profileFieldObj,false);
	// 	if(maxLength && null!= maxLength)
	// 		htmlData = htmlData+ " maxlength='"+maxLength+"' ";
	// }
	 htmlData = htmlData+ "dataType='3' displayType='1' ";

	// htmlData = htmlData+ "mandatory='"+profileFieldObj.isMandatory+"' required='"+profileFieldObj.isRequired +"' ";
	// htmlData = htmlData + addPreferenceAttributes();//To add decimal separator, group separator and group size

	
		cssClass = "datePicker nameField ";
	
	//Class to identify script field
	cssClass += " scriptField";
	
	// if("G" === orgin)
	// 	cssClass += " gridField";
	// else if("P" === orgin)
	// 	cssClass += " panelField";
	
	// if("true" === errorField)
	// 	cssClass += " errorField";
	
	// if(currentVariationObj && currentVariationObj.styleClass)
	// 	cssClass += " "+currentVariationObj.styleClass;
	
	// if(profileFieldObj.formatType && profileFieldObj.formatType.length>0){
	// 	if("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType || "INTEGER" == profileFieldObj.formatType){
	// 		var currencySymbol = profileFieldObj.currencySymbol;
	// 		if(!currencySymbol || null === currencySymbol || undefined === currencySymbol)
	// 			currencySymbol = '';
	// 		var currencyPrecision = profileFieldObj.currencyPrecision;
	// 		if(!currencyPrecision || null === currencyPrecision || undefined === currencyPrecision)
	// 			currencyPrecision = '';
	// 		if("INTEGER" == profileFieldObj.formatType){
	// 		htmlData += " onkeypress=\"return formatInteger(this,'" + maxLength + "',event)\" ";
	// 		}else{
	// 			htmlData += " onkeypress=\"return formatNumber(this,'"+ currencySymbol + "','" +
	// 			currencyPrecision + "','" + grpSymbol + "','" + decSymbol +"','" +
	// 				grpSize + "','" + maxLength + "',event)\" ";
	// 		}
	// 		/*htmlData += " onkeyup=\"formatCurrency(this,'"+ currencySymbol + "','" +
	// 			currencyPrecision + "','" + grpSymbol + "','" + decSymbol +"','" +
	// 				grpSize + "','" + maxLength + "',event)\" ";*/
			
	// 		htmlData += " curSymbol='" + currencySymbol + "' ";
	// 		htmlData += " curPrecision='" + currencyPrecision + "'";
	// 		if("INTEGER" != prsetDAofileFieldObj.formatType){
	// 			cssClass = cssClass +" rightAlignInput";
	// 		}
	// 	}
	// }



	// var isNonEditable = isFieldNonEditable(form, currentVariationObj, profileFieldObj);

	// if(isNonEditable){
	// 	cssClass = cssClass +" disabledInput";
	// 	htmlData = htmlData+ " readonly='readonly' tabindex='-1' ";
	// }

	// var tooltip = getFieldTooltip(profileFieldObj,currentVariationObj);

	htmlData = htmlData+ " fieldId='"+uiEntity.name+"' title='"+uiEntity.description+"' prevvalue='' ";

	htmlData = htmlData+ " class='"+ cssClass +"' ";
	// var placeholder  = getFieldPlaceHolderForGrid(profileFieldObj,currentVariationObj);
	// if(null != placeholder)
	// 	htmlData = htmlData+ " placeholder='"+ placeholder +"' ";

	var evnts = uiEntity.events;
	// if(immediateValidationRequiredForGrid(profileFieldObj,currentVariationObj)){
	// 	if(evnts && evnts.length>0)
	// 		evnts = evnts+",IV";
	// 	else
	// 		evnts = "IV";

	// 	if(profileFieldObj.strParentBlockName && profileFieldObj.strParentBlockName.length>0)
	// 		htmlData = htmlData+ " blockId='"+ profileFieldObj.strParentBlockName +"' ";
	// }

	// evnts = checkCurrencyOnChange(fieldName,nmsp,evnts);
	// if(evnts && evnts.length>0){
	// 	htmlData = htmlData+ " events='"+ evnts +"' ";
	// }
	//  var value = objVal;
	//  var roundRequired = true;
	//  if(nmsp && nmsp.sActionType && ("Add" == nmsp.sActionType || "Delete" == nmsp.sActionType ) ){
	// 	 roundRequired = false;
	//  }
	//  if(roundRequired && value && null != value && value.length>0 && !isNaN(value) && !errorField && profileFieldObj.autoPrecision!="Y" && profileFieldObj.autoPrecision!="y"){
		 
	// 	 if(formatMask && formatMask.length>0  && ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType)){
	// 		 if(formatMask.indexOf('D') != -1){
	// 			 precision = formatMask.substring(formatMask.indexOf('D')+1, formatMask.length);
	// 			 value = parseFloat(value).toFixed(precision.length);
	// 		 }
	// 	 }
	//  }
	//  if("P" === orgin && value && null != value && value.length>0 && !isNaN(value) && ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType )){
	// 	 value = formatCurrencyImpl(value,currencySymbol,currencyPrecision,grpSymbol,decSymbol,grpSize,maxLength,null);
	//  }
	 if(value && value.length>0)
		 htmlData = htmlData+" value='"+value+"' ";
	 htmlData = htmlData+" >";

	 //if(dataType == "3" && !isFieldNonEditable(form, currentVariationObj, profileFieldObj)){
		 htmlData = writeDateImage(htmlData);
	//  }
	 
	//  return htmlData;

	 obj.domElement.innerHTML=htmlData;

	initialiseAllDatePickers($(obj.domElement), true);
	setInputFieldEvents(obj,val,uiEntity);
	}else{
		obj.domElement.innerHTML='<span>'+value+'</span> '
	}
	function setInputFieldEvents(obj,val,uiEntity){
		// let field = $(obj.domElement).find('select')[0];
		let field = $(obj.domElement).find('input');
		var onChangeEnabled = false;
		if(uiEntity.events){
			var events =uiEntity.events.split(',');
		 	
	 		var ivEnabled = false;
			for(var i = 0;i<events.length;i++){
				if("OC"== events[i] ){				
					onChangeEnabled = true;
				}else if("OK"== events[i] ){
					$(field).click(function (event) {
						if(componentRef){
							componentRef.clickEvent(event,val,uiEntity);
						}
					});		
				}else if("KP"== events[i] ){
				}else if("MO"== events[i]){
					$(field).mouseover(function (event) {
						if(componentRef){
							componentRef.mouseOverEvent(event,val,uiEntity);
						}
					});		
				}else if("KD"== events[i]){
				}else if("KU"== events[i]){	
					$(field).keyup(function (event) {
						if(componentRef){
							componentRef.keyUpEvent(event,val,uiEntity);
						}
					});				   
				}else if("IV"== events[i]){
					ivEnabled = true;
			   }
			}
		}
		
			$(field).change(function (event) {
				onDateFieldOnChange(obj, event,uiEntity,onChangeEnabled);
			});
			var buttonField = $(obj.domElement).find('button');
			$(buttonField).click(function (event) {				
				$(obj.domElement).find('input').click();
				$(obj.domElement).find('input').focus();
			});		
		$(field).blur(function (event) {			
			if(componentRef && !$('.datepicker-dropdown').is(':visible') ){
				componentRef.validateField(event.target,val,uiEntity);
			}
		});		
	}
	function onDateFieldOnChange(obj, event,uiEntity,onChangeEnabled) {
		event.target = obj.domElement.firstChild;
		$(obj.data).attr(uiEntity.name, obj.domElement.firstChild.value);
		if(componentRef && onChangeEnabled){
			componentRef.onChange(event,val,uiEntity);
		}

	}
	 function writeDateImage(htmlData){
			htmlData+= '<span ';
			var classVal = 'xel_inputGroup dateInputGroupImage';
			
			htmlData+= 'class="'+classVal+'" >';
			htmlData+='<div class="mat-form-field-suffix ng-tns-c8-50 ng-star-inserted"><mat-datepicker-toggle _ngcontent-wth-c75="" class="mat-datepicker-toggle" matsuffix="" ng-reflect-datepicker="[object Object]" tabindex="-1"><button mat-icon-button="" type="button" class="mat-icon-button mat-button-base" ng-reflect-disabled="false" aria-haspopup="dialog" aria-label="Open calendar" tabindex="0"><span class="mat-button-wrapper"><svg class="mat-datepicker-toggle-default-icon ng-star-inserted" fill="currentColor" focusable="false" height="24px" viewBox="0 0 24 24" width="24px"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg></span><div class="mat-button-ripple mat-ripple mat-button-ripple-round" matripple="" ng-reflect-centered="true" ng-reflect-disabled="false" ng-reflect-trigger="[object HTMLButtonElement]"></div><div class="mat-button-focus-overlay"></div></button></mat-datepicker-toggle></div>'
				htmlData+= '</span>';
			return htmlData;
		}

	 function addPreferenceAttributes(){
	 	//var prefAttr = nmsp.preferenceAttributes;
	 	var htmlData ="";
	 	decSymbol = xel_session_var.dec_sep;
	 	grpSymbol = xel_session_var.grp_sep;
	 	grpSize = xel_session_var.grp_size;
	 	if(decSymbol && grpSymbol && grpSize)
	 		htmlData += " decimalsep='" + decSymbol + "' grpsep='" + grpSymbol + "' grpsize='" + grpSize + "' ";
	 	return htmlData;
	 }
}
function onFieldOnClick(obj,event){

}

function initialiseAllDatePickers($ele,initDateMask){			// This will initialize all the date pickers inside the element

	//$(".datePicker").mask("99/99/9999");/** old masked input.js not in use.Now used maskedinput-co.js*/
	var dateMask;
	var placeHolder;
	var dateFormat;
	var maskInclude;
	var readOnly;
	var showDatePicker = true;
	var valuePresent;
	var showOnFocusFlag;
	$ele.find('.datePicker').each(function() {
		 showOnFocusFlag=true;
		showDatePicker = true;
		if( $(this).attr("readonly") =='readonly'){
			showDatePicker = false;
		}
		dateFormat =  $(this).attr('dateFormat');
		dateMask =  $(this).attr('dateMask');
		placeHolder = $(this).attr('placeHolder');
		maskInclude = $(this).attr('maskInclude');
		valuePresent = $(this).attr('value');
		if(null !=valuePresent  && valuePresent.length > 0)
			{
			showOnFocusFlag=false;
			}
		if("y"== maskInclude && initDateMask)
			$(this).mask(dateMask, {placeholder:placeHolder});

		if(showDatePicker){
			$(this).datepicker({
				format:dateFormat,
				showOnFocus:showOnFocusFlag,
				autoclose:true,
				todayBtn: 'linked',
				todayHighlight:true,
				forceParse: false,
				placeHolder:placeHolder
			});
		}

	});
}

function setDataInInlineTextField(obj, val) {
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	var aplit = obj.typeName.split('__');
	var form = $(obj.domElement).closest("form");
	var fieldId = aplit[1];// .replace("Renderer", "");
	var isVisible = "Y";
	var tooltip = null;
	var placeholder = null;
	var nmsp = getNameSpace(form, aplit[0]);
	var currentVariationObj = getDynamicFieldVariation(nmsp, fieldId, val);
	if (currentVariationObj) {
		isVisible = currentVariationObj.isApplicable;
		tooltip = currentVariationObj.tooltip;
		placeholder = currentVariationObj.placeHolder;
	}
	var gridId = "grid" + aplit[0];
	var fullPart = $(obj.domElement).attr('id').replace(gridId, "");
	fullPart = fullPart.replace("_cell_", "");
	var idSplit = fullPart.split("_");
	var rowNum = idSplit[0];
	var tabAllowedFieldTypes = ['1', '2', '-3', '-4'];
	// if(!nmsp.rowEditableColumnMap[rowNum]){
	var editableFieldsList = [];
	// var dynamicFieldVariationList = val.dynamicUserModel.dynamicFieldVariation;
	var dynamicFieldVariationList = '';
	if (val.dynamicUserModel && null !== val.dynamicUserModel)
		dynamicFieldVariationList = val.dynamicUserModel.dynamicFieldVariation;
	var fObj = nmsp.fieldList[0];
	var pos = 0;
	var count = 0;
	for (var k in fObj) {
		if (fObj.hasOwnProperty(k)) {
			++count;
		}
	}
	for (var fieldIdVal in fObj) {
		var isDynamicVariationAvailable = false;
		var fieldVariation = getDynamicFieldVariation(nmsp, fieldIdVal, val);
		if (fieldVariation) {
			if ("N" !== fieldVariation.isApplicable && ("A" !== fieldVariation.nonEditable && "Y" !== fieldVariation.nonEditable)) {
				if (nmsp.grid) {
					var column = nmsp.grid.getColumnByDataField(fieldIdVal);
					if (column && null != column) {
						editableFieldsList.push(column._headerText);
					}
				} else {
					editableFieldsList.push($(fObj).attr(fieldIdVal).field.strRefferedLabel);
				}
			}
			isDynamicVariationAvailable = true;
		}
		if (!isDynamicVariationAvailable) {
			if (nmsp.grid) {
				var column = nmsp.grid.getColumnByDataField(fieldIdVal);
				if (column && null != column) {
					editableFieldsList.push(column._headerText);
				}
			} else {
				editableFieldsList.push($(fObj).attr(fieldIdVal).field.strRefferedLabel);
			}
		}
	}
	nmsp.rowEditableColumnMap[rowNum] = editableFieldsList;
	// }

	// if(nmsp.rowEditableColumnMap[rowNum] && nmsp.rowEditableColumnMap[rowNum].indexOf(profileFieldObj.strRefferedLabel)<0)
	// nmsp.rowEditableColumnMap[rowNum].push(profileFieldObj.strRefferedLabel);
	// else
	// nmsp.rowEditableColumnMap[rowNum]=[profileFieldObj.strRefferedLabel];
	var txtVal = '';

	var pathId = $(val).attr('objectPathId');
	var fieldObject = $(nmsp.fieldList[0]).attr(aplit[1]);
	var profileFieldObj = $(fieldObject).attr('field');
	var isDynamicField = false;
	if (profileFieldObj && profileFieldObj.isDynamicField) {
		isDynamicField = true;
	}
	if ("N" !== isVisible && obj.domElement) {
		$(obj.domElement).empty();

		var isDynamicField = false;
		var spanClass = 'nameField';
		var id = formatPathId(pathId) + "__" + profileFieldObj.attrName;

		if (profileFieldObj && profileFieldObj.isDynamicField) {
			isDynamicField = true;
		}

		if (profileFieldObj && profileFieldObj.dataType == "2" && profileFieldObj.formatType && profileFieldObj.formatType.length > 0) {
			if ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType) {
				spanClass = spanClass + ' rightAlignInput';
			}
		}

		if (isDynamicField && val.dynamicField && undefined != $(val.dynamicField).attr(fieldId)) {
			txtVal = $(val.dynamicField).attr(fieldId);
		} else {
			if (undefined === $(val).attr(fieldId) || $(val).attr(fieldId) === 'null' || null === $(val).attr(fieldId)) {
				txtVal = '';
			} else {
				txtVal = $(val).attr(fieldId);
			}
		}

		if ((!tooltip || null === tooltip || undefined === tooltip) && profileFieldObj && profileFieldObj.resolvedTooltip && null !== profileFieldObj.resolvedTooltip && undefined !== profileFieldObj.resolvedTooltip && profileFieldObj.resolvedTooltip.length > 0)
			tooltip = profileFieldObj.resolvedTooltip;

		if ((!placeholder || null === placeholder || undefined === placeholder) && profileFieldObj && profileFieldObj.strPlaceHolder && null !== profileFieldObj.strPlaceHolder && undefined !== profileFieldObj.strPlaceHolder && profileFieldObj.strPlaceHolder.length > 0)
			placeholder = profileFieldObj.strPlaceHolder;

		var txtColor = '#555';
		txtColor = ''
		var childField;
		var isPlaceHolderVisible = false;
		var isWarningField = false;
		var isErrorField = checkIfErrorField(nmsp, id);
		if (isErrorField) {
			spanClass += " errorField isErrorField ";
		} else {
			isWarningField = checkIfWarningField(nmsp, id);
		}

		if (isFieldNonEditable(form, currentVariationObj, profileFieldObj)) {
			spanClass = spanClass + " disabledInput";
		}
		if (profileFieldObj.isGroupField) {

			childField = creatDataGridXelOtherFields(obj, obj.typeName, val, form);
			$(obj.domElement).empty();
			obj.domElement.innerHTML = childField;

			// To format field values if amount or rate field
			if ("AMOUNT" == $(obj.domElement.children[0]).attr('ftype') || "RATE" == $(obj.domElement.children[0]).attr('ftype')) {
				var currencySymbol;
				var precision = 0;
				if (profileFieldObj.precision)
					precision = profileFieldObj.precision;
				if (!profileFieldObj.currencySymbol)
					currencySymbol = '';
				else
					currencySymbol = profileFieldObj.currencySymbol;

				if (txtVal.length !== 0) {
					txtVal = getDecimalParsedValueValue(profileFieldObj, currentVariationObj, txtVal);
					$(obj.domElement.children[0]).val(txtVal);
					formatCurrency(obj.domElement.children[0], currencySymbol, precision, $(obj.domElement.children[0]).attr('grpSep'), $(obj.domElement.children[0]).attr('decimalSep'), $(obj.domElement.children[0]).attr('grpSize'), getMaxLengthforNumberField(obj.domElement.children[0], true), null);
				}
			}
			setFieldBasedFormat(obj.domElement.children[0], val, profileFieldObj, txtVal);

		} else if (profileFieldObj.dataType == "3") {
			childField = creatDataGridXelOtherFields(obj, obj.typeName, val, form);
			$(obj.domElement).empty();
			obj.domElement.innerHTML = childField;
			initialiseAllDatePickers($(obj.domElement), true);
			var changeField = $(obj.domElement).find('input');
			$(changeField).change(function (event) {
				onTextFieldOnChange(obj, event);
			});
		} else {
			if (txtVal.length === 0 && placeholder !== undefined && placeholder !== null && placeholder.length > 0) {
				txtVal = placeholder;
				txtColor = '#ccc';
				isPlaceHolderVisible = true;
			}
			if (!isPlaceHolderVisible) {
				txtVal = getCurrencyFormattedValue(profileFieldObj, currentVariationObj, txtVal);
				txtVal = getFieldBasedFormat(val, profileFieldObj, txtVal);
			}

			// To format field values if amount or rate field

			if ((fieldId == 'COMMENT' && isDynamicField == false) || (fieldId !== 'APPROVAL_REASON' && fieldId !== 'COMMENT' && fieldId != 'CHECKER_STATUS')) {
				childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">   <a href="#" style="color:' + txtColor
					+ '; cursor: text;" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">' + txtVal + '</a></span>';
				obj.domElement.innerHTML = childField;
			} else if ((fieldId == 'COMMENT' && isDynamicField == true)) {
				if ((null != val.MAKER_CHECKER_ELEMENT && "Y" == val.MAKER_CHECKER_ELEMENT) || null != val.CheckerComment) {
					if ((val.CheckerComment && null != val.CheckerComment) || "template2" == document.getElementById('uxTemplateId').value) {
						txtVal = val.CheckerComment ? val.CheckerComment : "";
						spanClass = "readonly='readonly' " + spanClass + " disabledInput";
						tooltip = txtVal;

					}
					if (spanClass.indexOf('disabledInput') >= 0) {
						childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" > ' + txtVal + '</span>';
					} else {
						childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">   <a href="#" style="color:' + txtColor
							+ '; cursor: text;" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">' + txtVal + '</a></span>';
					}
					obj.domElement.innerHTML = childField;
					/*
					 * $(obj.domElement).removeAttr('disabled'); $(obj.domElement).parent().removeAttr('disabled');
					 */
				}
			} else if ((fieldId == 'CHECKER_STATUS' && isDynamicField == true)) {
				if ((null != val.MAKER_CHECKER_ELEMENT && "Y" == val.MAKER_CHECKER_ELEMENT) || null != val.CheckerStatus) {
					if (val.CheckerStatus && null != val.CheckerStatus) {
						txtVal = val.CheckerStatus
						spanClass = "readonly='readonly' " + spanClass + " disabledInput";
						tooltip = txtVal;

					}
					if (spanClass.indexOf('disabledInput') >= 0) {
						childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" > ' + txtVal + '</span>';
					} else {
						childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">   <a href="#" style="color:' + txtColor
							+ '; cursor: text;" onfocus="createDataGridXelTextField(this,\'' + obj.typeName + '\',\'' + pathId + '\',\'' + tooltip + '\',\'' + placeholder + '\',\'' + isPlaceHolderVisible + '\',\'' + isErrorField + '\')">' + txtVal + '</a></span>';
					}
					obj.domElement.innerHTML = childField;
					/*
					 * $(obj.domElement).removeAttr('disabled'); $(obj.domElement).parent().removeAttr('disabled');
					 */
				}
			} else if ((fieldId == 'APPROVAL_REASON' && isDynamicField == true)) {
				if ((val.approvalReason && null != val.approvalReason)) {
					// if(val.approvalReason && null!= val.approvalReason){
					txtVal = val.approvalReason
					spanClass = "readonly='readonly' " + spanClass + " disabledInput";
					tooltip = txtVal;

					// }
					// if(spanClass.indexOf('disabledInput') >= 0){
					childField = '<span class="' + spanClass + '" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "' + tooltip + '" > ' + txtVal + '</span>';
					/*
					 * }else{ childField= '<span class="'+spanClass+'" id="' + id + '" style="display: list-item;list-style: none;" tabindex="-1" title= "'+tooltip+'" onfocus="createDataGridXelTextField(this,\''+obj.typeName+'\',\''+pathId+'\',\''+tooltip+'\',\''+placeholder+'\',\''+isPlaceHolderVisible+'\',\'' + isErrorField + '\')"> <a href="#" style="color:'+txtColor+'; cursor: text;"
					 * onfocus="createDataGridXelTextField(this,\''+obj.typeName+'\',\''+pathId+'\',\''+tooltip+'\',\''+placeholder+'\',\''+isPlaceHolderVisible+'\',\'' + isErrorField + '\')">'+txtVal+'</a></span>'; }
					 */
					obj.domElement.innerHTML = childField;
					/*
					 * $(obj.domElement).removeAttr('disabled'); $(obj.domElement).parent().removeAttr('disabled');
					 */
				}
			}

		}

		if (isWarningField) {
			var warningField = getElementById(id);
			var msg = $(nmsp.warningFieldMessage).attr(id);
			$(warningField).addClass("warningField");
			$(warningField).bind('mouseenter', function (event) {
				showMessageAsToolTip(warningField, msg, id, "W");
			});
			$(warningField).bind('mouseleave', function (event) {
				hideErrorToolTip(warningField, msg);
			});
			manageWarningTooltipOnScrolling();
		}

		if (isErrorField) {
			var msg = $(nmsp.errorFieldMessage).attr(id);
			var errorField = getElementById(id);
			if ($(errorField).hasClass("warningField"))
				resetWarningFieldProperty(errorField)
			$(errorField).addClass("errorField");
			$(errorField).bind('mouseenter', function (event) {
				showMessageAsToolTip(errorField, msg, id, "E");
			});
			$(errorField).bind('mouseleave', function (event) {
				hideErrorToolTip(errorField, msg);
			});
			manageErrorTooltipOnScrolling();
		}

	} else if (obj.domElement) {
		if (isDynamicField && val.dynamicField && undefined != $(val.dynamicField).attr(fieldId)) {
			txtVal = $(val.dynamicField).attr(fieldId);
		} else {
			if (undefined === $(val).attr(fieldId) || $(val).attr(fieldId) === 'null' || null === $(val).attr(fieldId)) {
				txtVal = '';
			} else {
				txtVal = $(val).attr(fieldId);
			}
		}
		var spanClass = '';

		// To format field values if amount or rate field
		txtVal = getCurrencyFormattedValue(profileFieldObj, currentVariationObj, txtVal);
		var spanClass = "";
		if (profileFieldObj && profileFieldObj.dataType == "2" && profileFieldObj.formatType && profileFieldObj.formatType.length > 0) {
			if ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType) {
				spanClass = spanClass + ' rightAlignInput';
				if (profileFieldObj && profileFieldObj.currencyType && profileFieldObj.currencyType.length > 0 && profileFieldObj.currencyCode && profileFieldObj.currencyCode.length > 0) {
					if (obj && obj.parent && obj.parent.getGrid() && txtVal.length > 0) {
						currencySymbol = obj.parent.getGrid().getColumnByDataField(fieldId).formatterCurrencySymbol;
						txtVal = ((currencySymbol && currencySymbol.length > 0) ? currencySymbol : '') + txtVal;
					}

				}
			}
		}
		txtVal = getFieldBasedFormat(val, profileFieldObj, txtVal);
		if (currentVariationObj && currentVariationObj.styleClass)
			spanClass = spanClass + ' ' + currentVariationObj.styleClass;

		$(obj.domElement).empty();
		var childField = '<span  class="' + spanClass + '" style="display: list-item;list-style: none;" tabindex="-1" >   <a href="#" style="cursor: none;" >' + txtVal + '</a></span>';
		if ("template2" == document.getElementById('uxTemplateId').value) {
			childField = '<span  class="' + spanClass + '" style="display: list-item;list-style: none;" tabindex="-1" >   <a  style="cursor: none;color: #000;font-weight: 500; width: 113px;height: 34px;white-space: nowrap;text-overflow: clip;text-align: right;" >' + txtVal + '</a></span>';
		}

		obj.domElement.innerHTML = childField;
	}

}

function setFieldBasedFormat(obj, data, profileFieldObj, txtVal) {
	$(obj).val(getFieldBasedFormat(data, profileFieldObj, txtVal));
}
function getFieldBasedFormat(data, profileFieldObj, txtVal) {
	var formatedValue = txtVal;
	if ('FIELD' === profileFieldObj.formatType && profileFieldObj.formatField && profileFieldObj.formatField.length > 0) {
		if ($(data).attr(profileFieldObj.formatField) === 'P' && txtVal.length > 0 && !isNaN(txtVal)) {
			formatedValue = formatedValue + '%';
		}
	} else if ('PERCENTAGE' === profileFieldObj.formatType) {
		formatedValue = formatedValue + '%';
	}
	return formatedValue;
}

function getCurrencyFormattedValue(profileFieldObj, currentVariationObj, txtVal) {
	// To format field values if amount or rate field
	if ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType) {

		txtVal = getDecimalParsedValueValue(profileFieldObj, currentVariationObj, txtVal);
		var currencySymbol;
		var precision = 0;
		if (profileFieldObj.precision)
			precision = profileFieldObj.precision;
		if (!profileFieldObj.currencySymbol)
			currencySymbol = '';
		else
			currencySymbol = profileFieldObj.currencySymbol;

		if (txtVal.length !== 0) {
			txtVal = formatCurrencyImpl(txtVal, currencySymbol, precision, xel_session_var.grp_sep, xel_session_var.dec_sep, xel_session_var.grp_size, getMaxLengthforNumberField(profileFieldObj, true), null);
		}

	}
	return txtVal;
}
function getDecimalParsedValueValue(profileFieldObj, currentVariationObj, txtVal) {
	var formatMask = "";
	if (currentVariationObj && currentVariationObj.formatMask && currentVariationObj.formatMask.length > 0) {
		formatMask = currentVariationObj.formatMask;
	} else if (profileFieldObj.strModifiedFormatMask && profileFieldObj.strModifiedFormatMask.length > 0)
		formatMask = profileFieldObj.strModifiedFormatMask;
	else
		formatMask = profileFieldObj.strFormatMask;

	if (txtVal && null != txtVal && txtVal.length > 0 && !isNaN(txtVal) && profileFieldObj.autoPrecision != "Y" && profileFieldObj.autoPrecision != "y") {

		if (formatMask && formatMask.length > 0 && ("AMOUNT" == profileFieldObj.formatType || "RATE" == profileFieldObj.formatType)) {
			if (formatMask.indexOf('D') != -1) {
				var precision = formatMask.substring(formatMask.indexOf('D') + 1, formatMask.length);
				txtVal = parseFloat(txtVal).toFixed(precision.length);
			}
		}
	}
	return txtVal;
}

function onTextFieldOnChange(obj, event,uiEntity) {
	event.target = obj.domElement.firstChild;
	$(obj.data).attr(uiEntity.name, obj.domElement.firstChild.value);
}

function removeFieldBasedFormat(data, profileFieldObj, txtVal) {
	var formatedValue = txtVal;
	if ('FIELD' === profileFieldObj.formatType && profileFieldObj.formatField && profileFieldObj.formatField.length > 0) {
		if ($(data).attr(profileFieldObj.formatField) === 'P' && formatedValue.length > 0) {
			formatedValue = formatedValue.replace('%', '');
		}
	} else if ('PERCENTAGE' === profileFieldObj.formatType) {
		formatedValue = formatedValue.replace('%', '');
	}
	return formatedValue;
}

function setDataInInlineCheckBox(obj, val) {
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	// var child = '<div id="customCheckBox" style="text-align: center"><input type="checkbox" value="Y" id="productServiceHierarchyList0__ECH_UN_PRICE_Y_Entry" class="xel_checkbox" style="width:auto;" fieldid="ECH_UN_PRICE" ><label id="productServiceHierarchyList0__ECH_UN_PRICE_Y_Entry_label" for="productServiceHierarchyList0__ECH_UN_PRICE_Y_Entry" class="xel-checkbox-lbl "></label><input
	// type="hidden" name="_productServiceHierarchyList[0].ECH_UN_PRICE"></div>';
	var form = $(obj.domElement).closest("form");
	var aplit = obj.typeName.split('__');
	var fieldId = aplit[1]// .replace("Renderer", "");
	obj.fieldId = fieldId;
	var isVisible = "Y";
	var nmsp = getNameSpace(form, aplit[0]);
	var currentVariationObj = getDynamicFieldVariation(nmsp, fieldId, val);
	if (currentVariationObj) {
		isVisible = currentVariationObj.isApplicable;
	}

	var child = creatDataGridXelOtherFields(obj, obj.typeName, val, form);
	if ("N" !== isVisible && obj.domElement) {
		$(obj.domElement).empty();
		obj.domElement.innerHTML = child;

	} else if (obj.domElement) {
		$(obj.domElement).empty();
	}
}

function setDataInInlineSelectBox(obj, val) {
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	var form = $(obj.domElement).closest("form");
	// var child ='<select data-live-search="true" data-size="10" events="OC" class="nameField selectpicker" data-container="body"><option value="">Select</option><option value="1">L1</option><option value="2">L2</option><option value="3">L3</option><option value="4" selected="selected">L4</option></select>'; // HTML string
	var aplit = obj.typeName.split('__');
	var fieldId = aplit[1];// .replace("Renderer", "");
	obj.fieldId = fieldId;
	var isVisible = "Y";
	var nmsp = getNameSpace(form, aplit[0]);
	var currentVariationObj = getDynamicFieldVariation(nmsp, fieldId, val);
	if (currentVariationObj) {
		isVisible = currentVariationObj.isApplicable;
	}
	var txtVal = '';

	var fieldObject = $(nmsp.fieldList[0]).attr(aplit[1]); // JSON.search(nmsp.fieldList[0], '//'+aplit[1]);
	var profileFieldObj = $(fieldObject).attr('field'); // JSON.search(fieldObject, '//field');
	var isDynamicField = false;
	if (profileFieldObj && profileFieldObj.isDynamicField)
		isDynamicField = true;

	if (isDynamicField && val.dynamicField && undefined != $(val.dynamicField).attr(fieldId)) {
		txtVal = $(val.dynamicField).attr(fieldId);
	} else {
		if (undefined === $(val).attr(fieldId) || $(val).attr(fieldId) === 'null' || null === $(val).attr(fieldId)) {
			txtVal = '';
		} else {
			txtVal = $(val).attr(fieldId);
		}
	}
	if ("N" !== isVisible && obj.domElement) {
		$(obj.domElement).empty();

		var childField;
		var child;
		if (fieldId.endsWith("CHECKER_STATUS")) {
			if ((null != val.MAKER_CHECKER_ELEMENT && "Y" == val.MAKER_CHECKER_ELEMENT) || null != val.CheckerStatus) {
				child = creatDataGridXelOtherFields(obj, obj.typeName, val, form);
			}
		} else {
			child = creatDataGridXelOtherFields(obj, obj.typeName, val, form);
		}

		if (val.dynamicUserModel && val.dynamicUserModel.dynamicFieldVariation && child)
			childField = child;
		else {
			if (child) {
				childField = child;
			}
		}

		if (childField) {
			obj.domElement.innerHTML = childField;
		}

		var changeField = $(obj.domElement).find('select');
		$(changeField).change(function (event) {
			onSelectOnChange(obj, event);
		});

	} else if (obj.domElement) {
		var optionBeans;
		if (profileFieldObj.staticList)
			optionBeans = profileFieldObj.staticList;

		$(optionBeans).each(function () {
			if (!isNullValue(txtVal) && txtVal === this.code)
				txtVal = this.description;
		});

		$(obj.domElement).empty();
		var childField = '<span style="display: list-item;list-style: none;" tabindex="-1" >   <a href="#" style="cursor: none;" >' + txtVal + '</a></span>';
		obj.domElement.innerHTML = childField;
	}

	initialiseDatagridSelectPicker(obj.domElement);
}

function initialiseDatagridSelectPicker(divId) {
	$('.selectpicker').attr("data-container", "body"); // drop down list ul element will added into the body tag only(To avoid overflow issues)
	var select = $(divId).find('.selectpicker');
	$(select).selectpicker('refresh');
	var targetDiv = $(select).siblings("div.nameField");
	if ($(targetDiv) && $(targetDiv).length > 0) {
		$(targetDiv).attr("id", $(select).attr("id") + "_div"); // provide id attribute t the component
		$(targetDiv).find("button.selectpicker").attr("id", $(select).attr("id") + "_button");
		$(targetDiv).css({ // Temporary for hide image
			'width': '100%'
		});
		if ($(select).attr("errorcssClass")) {
			if ($(targetDiv) && $(targetDiv).length > 0) {
				if ("errorField" == $(select).attr("errorcssClass")) {
					$(targetDiv).css({
						'border': 'solid 1px #FF0000'
					});
				}
				if ("warningField" == $(select).attr("errorcssClass")) {
					$(targetDiv).css({
						'border': 'solid 1px #f4b04f'
					});
				}
				$(targetDiv).find("button.selectpicker").attr("onmouseover", $(select).attr("onmouseover"));
				$(targetDiv).find("button.selectpicker").attr("onmouseout", $(select).attr("onmouseout"));
				$(targetDiv).find("button.selectpicker").attr("onfocus", $(select).attr("onfocus"));
			}
		}
	}
	if ($(select).hasClass("disabledInput")) {
		targetDiv = $(select).siblings("div.disabledInput");
		if ($(targetDiv) && $(targetDiv).length > 0) {
			$(targetDiv).find("button.selectpicker").attr("disabled", "disabled");
			$(targetDiv).find("div.dropdown-menu").css({
				'display': 'none'
			});
		}
	}
	// manageDropDownOnScrolling();
}





smoothPopupLabelFunction = function (item, column) {

	var objVal;
	var blockName, fieldName;
	var pathId;
	var val = item;
	var form = $(column.getOwner().domElement).closest('form');
	blockName = column.getOwner().blockId;
	fieldName = column.dataField;
	var currentVariationObj;
	if (item.dynamicUserModel && item.dynamicUserModel.dynamicFieldVariation) {
		$.each(item.dynamicUserModel.dynamicFieldVariation, function (key, value) {
			if (value.fieldId === fieldName) {
				currentVariationObj = value;
			}
		});
	}
	objVal = $(val).attr(fieldName);
	pathId = $(val).attr('objectPathId');

	var nmsp = getNameSpace(form, blockName);
	var fieldObject = $(nmsp.fieldList[0]).attr(fieldName); // JSON.search(nmsp.fieldList[0], '//'+fieldName);
	var profileFieldObj = $(fieldObject).attr('field'); // JSON.search(fieldObject, '//field');
	var checkFieldApplicable = isFieldApplicable(fieldName, nmsp, profileFieldObj, currentVariationObj);
	var displayType = profileFieldObj.iDisplayType;
	var isDetached = isGroupFieldDetached(profileFieldObj, currentVariationObj);
	var disablePopup = isPopUpDisabled(currentVariationObj);
	// dynamic call pending
	// var currentVariationObj = getCurrentFieldVariationObject(dynamicFieldVariation, fieldName);
	var htmlData = "";
	if (checkFieldApplicable && profileFieldObj && objVal && objVal.length > 0 && !disablePopup) {
		htmlData = createDetachedSmoothPopup(val, htmlData, pathId, fieldObject, profileFieldObj, currentVariationObj, form, isDetached);
	} else {
		var strFun = fieldName + "_LabelFunction";

		try {
			return window[strFun](item, column);
		} catch (e) {

			return objVal;
			// window.console.log('function: '+strFun+' doesnot exist!');
		}
	}

	return htmlData;
};

currencyFormatterLabelFunction = function (item, column) {
	var grid = column.getOwner();
	var componentRef = getDataGridComponentRef(grid);
	var text = '';
	text = $(item).attr(column.dataField);
	if(componentRef){
	var componentRef = getDataGridComponentRef(grid);
	let uiEntity= componentRef.gridTemplateService.getFieldMetaData(componentRef.groupJson, column.dataField);
		if (uiEntity && text && text.length > 0){
			let fieldtype = uiEntity.dataType.type.toLowerCase() === 'number'? 'number':'text';
			if(fieldtype === 'number' && (typeof item[uiEntity.name]==="number" || (typeof item[uiEntity.name]==="string" && item[uiEntity.name].length>0))){
				item[uiEntity.name] =parseFloat(item[uiEntity.name]);
				uiEntity.dataType.scale!= undefined ? item[uiEntity.name] = (item[uiEntity.name]).toFixed(uiEntity.dataType.scale):'';
			}
			let groupingRequired=componentRef.uiMetaDataService.isGroupingRequiredField(uiEntity);
			if(item[uiEntity.name]){
				text=item[uiEntity.name];
				if(groupingRequired){
					let formattedValue = componentRef.formatValue(text,uiEntity);					
					text =formattedValue;
				}
			}	
		}
	}
	
	// if (column.dataField.indexOf('dynamicField') > -1) {
	// 	var split = column.dataField.split('.');
	// 	text = $(item.dynamicField).attr(split[1]);
	// } else {
	
	// }
	return text;
};

fieldBasedFormatLabelFunction = function (item, column) {
	var text = '';
	if (column.dataField.indexOf('dynamicField') > -1) {
		var split = column.dataField.split('.');
		text = $(item.dynamicField).attr(split[1]);
	} else {
		text = $(item).attr(column.dataField);
	}
	if (text && text.length > 0) {
		if ('FIELD' === column.formatType && column.formatField && column.formatField.length > 0) {
			if ($(item).attr(column.formatField) === 'P' && text.length > 0 && !isNaN(text)) {
				text = text + '%';
			}
		} else if ('PERCENTAGE' === profileFieldObj.formatType) {
			text = text + '%';
		}
	}
	if (text && text.length > 0 && column.columnTextColor == 9028854) {
		return "<a class='link'>" + text + "</a>";
	} else {
		return text;
	}
}

function dataGridCurrencyFormatter(currencySymbol, formatString, autoPrecision, m) {
	if (!formatString.length > 0 || isNaN(+m)) {
		return m;
	}
	var decimalP = m.split(b)[0];
	m = "-" == formatString.charAt(0) ? -m : +m;
	var x = 0 > m ? m = -m : 0, n = formatString.match(/[^\d\-\+#]/g), b = n && n[n.length - 1] || ".", n = n && n[1] && n[0] || ",", p = formatString.split(b);
	if (autoPrecision != 'y' && autoPrecision != 'Y')
		m = m.toFixed(p[1] && p[1].length);
	m = +m + "";
	var y = p[1] && p[1].lastIndexOf("0"), d = m.split(".");
	if ((!d[1] || d[1] && d[1].length <= y) && autoPrecision != 'y' && autoPrecision != 'Y') {
		m = (+m).toFixed(y + 1);
	} else {
		var array = m.split(b);
		if (decimalP && decimalP.length > 0) {
			m = array[0] + decimalP;
		}
	}
	y = p[0].split(n);
	p[0] = y.join("");
	var g = p[0] && p[0].indexOf("0");
	if (-1 < g) {
		for (; d[0].length < p[0].length - g;) {
			d[0] = "0" + d[0];
		}
	} else {
		0 == +d[0] && (d[0] = "");
	}
	m = m.split(".");
	m[0] = d[0];
	if (d = y[1] && y[y.length - 1].length) {
		for (var y = m[0], g = "", h = y.length % d, j = 0, l = y.length; j < l; j++) {
			g += y.charAt(j), !((j - h + 1) % d) && j < l - d && (g += n);
		}
		m[0] = g;
	}
	m[1] = p[1] && m[1] ? b + m[1] : "";
	return currencySymbol + (x ? "-" : "") + m[0] + m[1];
}
function ieSetText(val) {

	var value = val;
}
function gridFieldOnChange(obj, event) {

	showWaitCursor();
	var field = event.target;
	var _parameter = "";
	var _profileID = getCustomJsProfileId(field);
	_parameter += getOnChangeRequestParams(field, event);
	getOnChangeJSONData();

	function getOnChangeJSONData() {

		if (_profileID) {
			var funcName = _profileID + "_gridFieldOnChange";
			try {
				window[funcName](obj, event, _parameter);
			} catch (e) {
				// window.console.log('function: '+ funcName +' doesnot exist!');
			}
		}
	}
}

function getOnChangeRequestParams(field, event) {

	var _parameter = "";
	var _mode = getMode(field);
	if (_mode) {
		_parameter = _parameter + "&Mode=" + _mode;
	}

	_profileID = getProfileId(field);
	if (_profileID) {
		_parameter = _parameter + "&ProfileId=" + _profileID;
	}

	var _subAction = getSubAction(field);
	if (_subAction) {
		_parameter = _parameter + "&subAction=" + _subAction;
	}
	var _activeBreadcrumbOrder = getActiveBreadcrumb(field);
	if (_activeBreadcrumbOrder) {
		if (_activeBreadcrumbOrder.attr('order'))
			_parameter = _parameter + "&activeElementOrder=" + _activeBreadcrumbOrder.attr('order');
		if (_activeBreadcrumbOrder.attr('id'))
			_parameter = _parameter + "&activeElementId=" + _activeBreadcrumbOrder.attr('id');
	}

	var pathId = $(event.target).attr('pathId');
	if (pathId && pathId.length > 0)
		_parameter = _parameter + "&strPathId=" + pathId;

	var fPathId = $(field).attr('pathId');
	if (fPathId && fPathId.length > 0)
		_parameter = _parameter + "&pathId=" + fPathId;

	return _parameter;
}

function ajaxCallForOnChangeGridField(grid, event, methodName, _parameter, keepFilter, isCallbackRequired) {

	var form = $(grid.domElement).closest('form');
	var cUrl = $(form).attr("action") + "?Action=" + methodName;
	var profileId = grid.profileId;
	var strFun = profileId + "_" + methodName;

	if (!keepFilter)
		clearGridFilter();// To clear grid filter in case of delete button call from grid.

	var nmsp = getNameSpace($(event.target).closest('form'), grid.blockId);
	if (nmsp) {
		nmsp.currentObjectPathId = $(event.target).attr('pathId');
		nmsp.fieldEvent = event;
	}
	generalSubmitAjaxMethod({
		url: cUrl,
		data: _parameter,
		method: "POST",
		async: false,
		success: function (response) {

			if (!isCallbackRequired)
				closeRemovedFields(grid, response);
			else
				try {
					window[strFun](grid, response);
				} catch (e) {
					// window.console.log('function: '+ funcName +' doesnot exist!');
				}

		},
		error: function (msg) {
			hideWaitCursor();
		}
	});

	function clearGridFilter() {
		var namespace = getNameSpace($(grid.domElement).closest('form'), grid.blockId);
		var filter = $("#" + namespace.grid.customFilterId + "_grid_filter_box");
		if ($(filter).val() && ($(filter).val()).length > 0) {
			$(filter).val('');
			grid.processFilter()
		}
	}
}

function isOnChangeEnabledField(obj, event) {

	var fieldEvnts = $(event.target).attr('events');
	if (fieldEvnts && fieldEvnts.length > 0) {
		var evnts = fieldEvnts.split(',');
		for (var i = 0; i < evnts.length; i++) {
			if ("OC" === evnts[i] || "OK" === evnts[i])
				return true;
		}
	}
	return false;
}

/**
 * Sets focus to the next field on tab or on change
 * 
 * @param obj
 * @param event
 * @param nmsp
 * @param isTab
 */
function setFocusToNextGridField(obj, event, nmsp, isTab) {
	nmsp.isTabbed = true;
	var gridBlockElem = null;
	var currentCellId = "";
	if (isTab) {
		currentCellId = $(obj).attr('id');
		gridBlockElem = $(obj).closest('.flexiciousGrid').find('.flexDataGridVirtualBodyContainer');
	} else {
		currentCellId = $(obj.domElement).attr('id');
		gridBlockElem = $(obj.domElement).closest('.flexiciousGrid').find('.flexDataGridVirtualBodyContainer');
	}
	var grid = nmsp.grid;
	var blockId = grid.blockId;
	var columnList = grid.getColumns();
	var gridId = "grid" + blockId;
	var fullPart = currentCellId.replace(gridId, "");
	fullPart = fullPart.replace("_cell_", "");
	var idSplit = fullPart.split("_");
	var initRowNum = idSplit[0];
	var rowNum = idSplit[0];
	var currentColTitle = idSplit[1];
	var nextEditableFieldId = "";
	var editableFieldsList = getEditableFieldListInOrder(nmsp, rowNum);
	var nextGridElem = null;
	iterateSucceedingColumns();
	if (event)
		event.preventDefault();

	// function findObjectFromPathId(){
	// if(pathIdList && pathIdList.length>0){
	// if(pathIdList[0] && pathIdList[0].length>0){
	// var objName = pathIdList[0].substring(0,pathIdList[0].indexOf('['));
	// var itemIndex = pathIdList[0].split('[')[1].split(']')[0];
	// var innerObj = $(parentObj).attr(objName);
	// if(innerObj && innerObj.length >0){
	// parentObj = innerObj[itemIndex];
	// pathIdList.splice(0, 1);
	// findObjectFromPathId();
	// }
	// }
	// }
	//
	// }

	/**
	 * finds the next field Id
	 */
	function getNextGridFieldId(row, colTitle) {

		nextEditableFieldId = gridId + "_cell_" + row + "_" + colTitle + "_5_renderer";
		return nextEditableFieldId;
	}

	function isValidId(id) {
		if (id.indexOf("(") != -1 || id.indexOf(")") != -1)
			return false;
		else
			return true;
	}

	function isValidSpan(ele) {
		if ($(ele) && $(ele).hasClass('nameField'))
			return true;
		return false;
	}
	/**
	 * Checks whether the cell with corresponding id is available
	 */
	function isGridElementPresent(id) {
		if ($(document.getElementById(nextEditableFieldId)) && $(document.getElementById(nextEditableFieldId)).length > 0) {
			return true;
		}
		return false;
	}

	function isVisible(id) {
		var field = document.getElementById(nextEditableFieldId);

		if (field && field > 0) {

			return !$(field).is(':visible');
		}
		return false;
	}
	/**
	 * Iterates over succeeding editable colums to set focus
	 */
	function iterateSucceedingColumns() {
		var x = editableFieldsList.indexOf(currentColTitle) + 1;
		var nextEditableCol = editableFieldsList[x];
		if (null === nextEditableCol || undefined === nextEditableCol) {
			getNextEditableRow();
		}
		nextEditableFieldId = getNextGridFieldId(rowNum, nextEditableCol);

		findAndSetFocus();
		function findAndSetFocus() {

			if (!isGridElementPresent(nextEditableFieldId) || isVisible(nextEditableFieldId)) {
				var xpos = 0;
				var nxtEditableFound = false;
				$(columnList).each(function () {
					if ($(this).attr('_headerText') === nextEditableCol) {
						xpos = $(this).attr('_x');
						nxtEditableFound = true;
					}
				});
				if (nxtEditableFound) {
					$(gridBlockElem).animate({
						'scrollLeft': xpos
					}, 500, '', function () {
						setTimeout(function () {
							nextGridElem = $(document.getElementById(nextEditableFieldId));
							if (nextGridElem && nextGridElem.length > 0)
								setFocus();
							else if (grid.getBodyContainer().maxVerticalScrollPosition > $(gridBlockElem).scrollTop()) {
								var ypos = $(gridBlockElem).scrollTop() + grid.getBodyContainer().height - grid.getBodyContainer().verticalMask;
								if (grid.getBodyContainer()._calculatedTotalHeight > ypos) {
									$(gridBlockElem).animate({
										'scrollTop': ypos
									}, 300, '', function () {
										setTimeout(function () {
											if (!isGridElementPresent(nextEditableFieldId)) {
												$(columnList).each(function () {
													if ($(this).attr('_headerText') === nextEditableCol)
														xpos = $(this).attr('_x');
												});
												$(gridBlockElem).animate({
													'scrollLeft': xpos
												}, 300, '', function () {
													setTimeout(function () {

														nextGridElem = $(document.getElementById(nextEditableFieldId));
														if (nextGridElem && nextGridElem.length > 0)
															setFocus();

													}, 400);

												});
											} else {
												nextGridElem = $(document.getElementById(nextEditableFieldId));
												if (nextGridElem && nextGridElem.length > 0)
													setFocus();
											}
										}, 400);

									});
								}
							}

						}, 500);

					});
				} else {
					nmsp.isTabbed = false;
					focusOutFromLastGridField();
				}
			} else {
				nextGridElem = $(document.getElementById(nextEditableFieldId));
				if (nextGridElem && nextGridElem.length > 0)
					setFocus();
			}
		}
		/**
		 * Checks whether there is an editable field in the current row if not finds the net row with editable field
		 */
		function getNextEditableRow() {
			rowNum = parseInt(rowNum) + 1;
			editableFieldsList = getEditableFieldListInOrder(nmsp, rowNum);
			var maxVisibleRowNum = parseInt(grid.getRowCount()) + parseInt(initRowNum);
			if (editableFieldsList && editableFieldsList.length > 0) {
				nextEditableCol = editableFieldsList[0];
				nextEditableFieldId = getNextGridFieldId(rowNum, nextEditableCol);
			} else if (maxVisibleRowNum < rowNum && grid.getBodyContainer().maxVerticalScrollPosition > $(gridBlockElem).scrollTop()) { // if maximum number visible rows exceeded then scroll write the next set
				var ypos = $(gridBlockElem).scrollTop() + grid.getBodyContainer().height - grid.getBodyContainer().verticalMask;
				if (grid.getBodyContainer()._calculatedTotalHeight > ypos) {
					$(gridBlockElem).animate({
						'scrollTop': ypos
					}, 300, '', function () {
						setTimeout(function () {
							rowNum = initRowNum;
							getNextEditableRow();
						}, 400);

					});
				}
			} else if ((grid.getBodyContainer().maxVerticalScrollPosition > $(gridBlockElem).scrollTop()) || (Object.keys(nmsp.rowEditableColumnMap).length > rowNum))
				getNextEditableRow();
		}

	}

	function setFocus() {
		if (!$(nextGridElem).is(':visible')) {
			$(nextGridElem).remove();
			nextGridElem = document.getElementById(nextEditableFieldId);
		}
		var firstVisibleElement = $(nextGridElem).find('button.selectpicker,input[type=text],input[type=checkbox],span,textarea,select,button,a,img').not('[readonly]').filter(':visible:first')
		$(firstVisibleElement).focus();
		nmsp.focusFieldId = nextEditableFieldId;
		if ($(firstVisibleElement).setSelectionRange)
			$(firstVisibleElement).setSelectionRange($(firstVisibleElement).val().length, $(firstVisibleElement).val().length);

		nmsp.isTabbed = false;
	}
	function focusOutFromLastGridField() {

		var focusSet = false;
		var buttonBlock = $(gridBlockElem).closest('td.displayCell').find('.common_head_button');
		focusSet = iterateButtonBlockAndSetFocus(buttonBlock, focusSet);
		if (focusSet)
			return;

		var blocksInDisplayRow = $(grid.domElement).closest('tr.displayRow').find('td.displayCell').filter(':visible');
		var curBlockIndex = $(grid.domElement.closest('td.displayCell')).index();
		if (blocksInDisplayRow && blocksInDisplayRow.length > 0) {
			focusSet = iterateBlocksAndSetFocus(blocksInDisplayRow, focusSet, curBlockIndex + 1);
			if (focusSet)
				return;
		}

		var siblingDisplayRows = $(grid.domElement).closest('table.displayPage').find('tr.displayRow').filter(':visible');
		if (siblingDisplayRows && siblingDisplayRows.length > 0) {
			var curRowIndex = $(grid.domElement.closest('tr.displayRow')).index();
			for (var j = curRowIndex + 1; j < siblingDisplayRows.length; j++) {
				var blocks = $(siblingDisplayRows[j]).find('td.displayCell');
				focusSet = iterateBlocksAndSetFocus(blocks, focusSet, 0);
				if (focusSet)
					break;
			}
			if (focusSet)
				return;
		}

		var commonButtonBlock = $(gridBlockElem).closest('form').find('.common_button');
		iterateButtonBlockAndSetFocus(commonButtonBlock, focusSet);
	}

	function iterateBlocksAndSetFocus(blockList, focusSet, index) {
		for (var i = index; i < blockList.length; i++) {
			if (blockList[i]) {
				var elem = $(blockList[i]).find('button.selectpicker,input[type=text],textarea,select,input[type=checkBox]:not(".defaultCheckbox")').filter(':visible:first');
				if (elem) {
					$(elem).focus();
					focusSet = true;
					break;
				}
			}
		}
		return focusSet;
	}

	function iterateButtonBlockAndSetFocus(buttonBlockElem, focusSet) {
		var visibleButtonList = $(buttonBlockElem).find('button,a').not('[readonly]').not('[disabled]').filter(':visible');
		if (visibleButtonList && visibleButtonList.length > 0) {
			$(visibleButtonList[0]).focus();
			focusSet = true;
		}
		return focusSet;
	}
}

function getEditableFieldListInOrder(nmsp, rowNum) {
	var editableFieldsList = nmsp.rowEditableColumnMap[rowNum];
	var columnList = nmsp.grid.getColumnNames().split('|');
	var temp = [];
	if (editableFieldsList) {
		for (var i = 0; i < editableFieldsList.length; i++) {
			var index = columnList.indexOf(editableFieldsList[i]);
			if (index != -1)
				temp[columnList.indexOf(editableFieldsList[i])] = editableFieldsList[i];
		}
	}
	var temp1 = [];
	for (var i = 0; i < temp.length; i++) {
		if (temp[i])
			temp1.push(temp[i]);
	}
	return temp1;
}
function setFocusToPrevGridField(obj, event, nmsp, isTab) {
	var currentCellId = "";
	if (isTab)
		currentCellId = $(obj).attr('id');
	else
		currentCellId = $(obj.domElement).attr('id');

	var grid = nmsp.grid;
	var blockId = grid.blockId;
	var columnList = grid.getColumns();
	var prevColTitle = "";

	var gridId = "grid" + blockId;
	var fullPart = currentCellId.replace(gridId, "");
	fullPart = fullPart.replace("_cell_", "");
	var idSplit = fullPart.split("_");
	var rowNum = idSplit[0];
	var initRowNum = idSplit[0];
	var currentColTitle = idSplit[1];
	var prevEditableFieldId = "";
	var curColCount = 0;
	var prevGridElem = null;
	var gridBlockElem = $(obj).closest('.flexiciousGrid').find('.flexDataGridVirtualBodyContainer');
	var editableFieldsList = getEditableFieldListInOrder(nmsp, rowNum);

	iteratePreceedingColumns();

	event.preventDefault();

	function setFocus() {
		if (!$(prevGridElem).is(':visible')) {
			$(prevGridElem).remove();
			prevGridElem = document.getElementById(prevEditableFieldId);
		}
		var firstVisibleElement = $(prevGridElem).find('button.selectpicker,input[type=text],input[type=checkbox],span,textarea,select,button,a,img').not('[readonly]').filter(':visible:first')
		$(firstVisibleElement).focus();
		nmsp.focusFieldId = prevEditableFieldId;
		if ($(firstVisibleElement).setSelectionRange)
			$(firstVisibleElement).setSelectionRange($(firstVisibleElement).val().length, $(firstVisibleElement).val().length);

	}
	function getPrevGridFieldId(row, colTitle) {

		prevEditableFieldId = gridId + "_cell_" + row + "_" + colTitle + "_5_renderer";
		return prevEditableFieldId;
	}

	function isValidId(id) {
		if (id.indexOf("(") != -1 || id.indexOf(")") != -1)
			return false;
		else
			return true;
	}

	function isValidSpan(ele) {
		if ($(ele) && $(ele).hasClass('nameField'))
			return true;
		return false;
	}

	function isGridElementPresent(id) {
		if ($(document.getElementById(prevEditableFieldId)) && $(document.getElementById(prevEditableFieldId)).length > 0) {
			return true;
		}
		return false;
	}
	function isVisible(id) {
		var field = document.getElementById(prevEditableFieldId);

		if (field && field > 0) {

			return !$(field).is(':visible');
		}
		return false;
	}
	function iteratePreceedingColumns() {
		var x = editableFieldsList.indexOf(currentColTitle) - 1;
		var prevEditableCol = editableFieldsList[x];
		if (null === prevEditableCol || undefined === prevEditableCol) {
			getPrevEditableRow();
		}
		prevEditableFieldId = getPrevGridFieldId(rowNum, prevEditableCol);

		findAndSetFocus();
		function findAndSetFocus() {
			if (!isGridElementPresent(prevEditableFieldId) || isVisible(prevEditableFieldId)) {
				var xpos = 0;
				var prvEditableFound = false;
				$(columnList).each(function () {
					if ($(this).attr('_headerText') === prevEditableCol) {
						xpos = $(this).attr('_x');
						prvEditableFound = true;
					}
				});
				if (prvEditableFound) {
					$(gridBlockElem).animate({
						'scrollLeft': xpos
					}, 300, '', function () {
						setTimeout(function () {
							prevGridElem = $(document.getElementById(prevEditableFieldId));
							if (prevGridElem && prevGridElem.length > 0)
								setFocus();
							else {
								var ypos = $(gridBlockElem).scrollTop() - grid.getBodyContainer().height;
								if (0 < ypos) {
									$(gridBlockElem).animate({
										'scrollTop': ypos
									}, 300, '', function () {
										setTimeout(function () {
											if (!isGridElementPresent(prevEditableFieldId)) {
												$(columnList).each(function () {
													if ($(this).attr('_headerText') === prevEditableCol)
														xpos = $(this).attr('_x');
												});
												$(gridBlockElem).animate({
													'scrollLeft': xpos
												}, 300, '', function () {
													setTimeout(function () {

														prevGridElem = $(document.getElementById(prevEditableFieldId));
														if (prevGridElem && prevGridElem.length > 0)
															setFocus();

													}, 400);

												});
											} else {
												prevGridElem = $(document.getElementById(prevEditableFieldId));
												if (prevGridElem && prevGridElem.length > 0)
													setFocus();
											}
										}, 400);

									});
								}
							}
						}, 400);

					});
				} else {
					focusOutFromFirstGridField();
				}
			} else {
				prevGridElem = $(document.getElementById(prevEditableFieldId));
				if (prevGridElem && prevGridElem.length > 0)
					setFocus();
			}
		}

		function getPrevEditableRow() {
			rowNum = parseInt(rowNum) - 1;
			var maxVisibleRowNum = parseInt(initRowNum) - parseInt(grid.getRowCount());
			if (rowNum > -1) {
				editableFieldsList = getEditableFieldListInOrder(nmsp, rowNum);
				if (editableFieldsList && editableFieldsList.length > 0) {
					prevEditableCol = editableFieldsList[editableFieldsList.length - 1];
					prevEditableFieldId = getPrevGridFieldId(rowNum, prevEditableCol);
				} else if (maxVisibleRowNum > rowNum && 0 < $(gridBlockElem).scrollTop()) {
					var ypos = $(gridBlockElem).scrollTop() - grid.getBodyContainer().height;
					if (ypos > 0) {
						$(gridBlockElem).animate({
							'scrollTop': ypos
						}, 300, '', function () {
							setTimeout(function () {
								rowNum = initRowNum;
								getPrevEditableRow();
							}, 400);

						});
					}
				} else if (0 < $(gridBlockElem).scrollTop() || rowNum > 0)
					getPrevEditableRow();
			}

		}
	}

	function focusOutFromFirstGridField() {

		var focusSet = false;

		var blocksInDisplayRow = $(grid.domElement).closest('tr.displayRow').find('td.displayCell').filter(':visible');
		var curBlockIndex = $(grid.domElement.closest('td.displayCell')).index();
		if (blocksInDisplayRow && blocksInDisplayRow.length > 0) {
			// Last field/button of previous block
			if (curBlockIndex > 0) {
				focusSet = iterateBlocksAndSetFocus(blocksInDisplayRow, focusSet, curBlockIndex - 1);
				if (focusSet)
					return;
			}
		}

		var siblingDisplayRows = $(grid.domElement).closest('table.displayPage').find('tr.displayRow').filter(':visible');
		if (siblingDisplayRows && siblingDisplayRows.length > 0) {
			var curRowIndex = $(grid.domElement.closest('tr.displayRow')).index();
			for (var j = curRowIndex - 1; j >= 0; j++) {
				var blocks = $(siblingDisplayRows[j]).find('td.displayCell').filter(':visible');
				focusSet = iterateBlocksAndSetFocus(blocks, focusSet, blocks.length - 1);
				if (focusSet)
					break;
			}
			if (focusSet)
				return;
		}
	}

	function iterateBlocksAndSetFocus(blockList, focusSet, index) {
		for (var i = index; i >= 0; i--) {
			if (blockList[i]) {
				var elem = $(blockList[i]).find('a,button,button.selectpicker,input[type=text],textarea,select,input[type=checkBox]:not(".defaultCheckbox")').filter(':visible:last');
				if (elem) {
					$(elem).focus();
					focusSet = true;
					break;
				}
			}
		}
		return focusSet;
	}

	function iterateButtonBlockAndSetFocus(buttonBlockElem, focusSet) {
		var visibleButtonList = $(buttonBlockElem).find('button,a').not('[readonly]').not('[disabled]').filter(':visible');
		if (visibleButtonList && visibleButtonList.length > 0) {
			$(visibleButtonList[0]).focus();
			focusSet = true;
		}
		return focusSet;
	}
}
function formatCurrencyDataGrid(field, curSymbol, precision, groupingSymb, decimalSym, grpSize, maxLength) {

	var valueF = $(field).val();
	var count = 0;
	var validated = false;
	var minussymbolpresent = false;
	var minussymbol = "-";
	if ($(field).attr('currencysymbol')) {
		curSymbol = $(field).attr('currencysymbol');
	}

	if (null != valueF && "+" == valueF.charAt(valueF.length - 1)) {
		$(field).val(valueF.replace("+", ""));
		return;
	}

	if ($(field).val().length == 1 && (($(field).val() == curSymbol) || $(field).val() == "+" || $(field).val() == "-"))
		return;
	if (curSymbol == valueF.charAt(valueF.length - 1)) {
		return;
	}
	if (null != curSymbol && (curSymbol.length == valueF.length) && (field.value == curSymbol)) {
		$(field).val("");
		return;
	}
	if (null != curSymbol && (valueF.charAt(0) == "+" || valueF.charAt(0) == "-")) {
		if (curSymbol.concat(valueF.charAt(0)).length == valueF.length) {
			$(field).val(valueF.replace(curSymbol, ""));
			return;
		}
	}

	if ($(field).val().length == 0)
		return;

	var valueEx = $(field).val();
	var regexp = new RegExp('^[0-9]$');
	var decimalPosition = -1;
	for (var vpos = 0; vpos < valueEx.length;) {
		if (!regexp.test(valueEx.charAt(vpos))) {
			if (valueEx.charAt(0) == "-") {
				minussymbolpresent = true;
			}
			if (valueEx.charAt(vpos) == decimalSym) {
				decimalPosition = vpos;
			}
			valueEx = valueEx.replace(valueEx.charAt(vpos), "");
			count++;
			validated = true;
		} else {
			vpos++;
		}
	}
	var invalidCharssize = count;
	if (valueEx.length == 0) {
		valueF = valueF.replace(valueF, "");
	}
	if (valueEx.length > Number(maxLength)) {
		if (validated) {
			valueEx = valueEx.substr(0, maxLength);
			if (decimalPosition > -1)
				valueF = [valueEx.slice(0, decimalPosition), decimalSym, valueEx.slice(decimalPosition)].join('');

			if (minussymbolpresent && decimalPosition > -1)
				valueF = minussymbol.concat(valueF);

			if (minussymbolpresent && decimalPosition == -1)
				valueF = minussymbol.concat(valueEx);

			if (decimalPosition == -1 && !minussymbolpresent)
				valueF = valueEx;
		} else
			valueF = valueEx.substr(0, maxLength);
	} else if (valueEx.length <= Number(maxLength)) {
		if (decimalPosition > -1)
			valueF = [valueEx.slice(0, decimalPosition), decimalSym, valueEx.slice(decimalPosition)].join('');

		if (minussymbolpresent && decimalPosition > -1)
			valueF = minussymbol.concat(valueF);

		if (minussymbolpresent && decimalPosition == -1)
			valueF = minussymbol.concat(valueEx);

		if (decimalPosition == -1 && !minussymbolpresent)
			valueF = valueEx;
	}
	if (decimalSym != valueF.charAt(valueF.length - 1)) {
		var reg = new RegExp('^[0-9]$');
		if (!reg.test(valueF.charAt(valueF.length - 1))) {
			$(field).val(valueF.replace(valueF.charAt(valueF.length - 1), ""));
			return;
		}
	}

	var array = valueF.split(decimalSym);
	var realPart;
	if (null != array) {
		realPart = array[0];
	}
	var sign;
	if (null !== realPart && realPart !== undefined && "" !== realPart) {
		if (realPart.charAt(0) == '+' || realPart.charAt(0) == '-') {
			sign = realPart.charAt(0);
			realPart = realPart.substring(1);
		}
		valueF = accounting.formatMoney(realPart, curSymbol, precision, groupingSymb, decimalSym, "", grpSize);
	}
	if (null !== array && array.length > 1) {
		if ("" === realPart) {
			valueF = "";
		}
		valueF = valueF.concat(decimalSym).concat(array[1]);
	} else if (decimalSym == valueF.charAt(valueF.length - 1)) {
		valueF = valueF.concat(decimalSym);
	}
	if (valueF.indexOf(curSymbol) == -1) {
		valueF = curSymbol.concat(valueF);
	}
	if (null !== sign && sign !== undefined) {
		valueF = sign.concat(valueF);
	}
	$(field).attr("prevVal", $(field).val()); // sets the prev value to identify that the value has changed to fire onChange.
	$(field).val(valueF);
}

function formatCurrencyDataGridText(val, curSymbol, precision, groupingSymb, decimalSym, grpSize, maxLength) {

	var valueF = val;
	var count = 0;
	var validated = false;
	var minussymbolpresent = false;
	var minussymbol = "-";
	// if($(field).attr('currencysymbol')){
	// curSymbol = $(field).attr('currencysymbol');
	// }

	if (null != valueF && "+" == valueF.charAt(valueF.length - 1)) {
		return valueF.replace("+", "");
	}

	if (val.length == 1 && ((val == curSymbol) || val == "+" || val == "-"))
		return;
	if (curSymbol == valueF.charAt(valueF.length - 1)) {
		return;
	}
	if (null != curSymbol && (curSymbol.length == valueF.length) && (field.value == curSymbol)) {
		valueF = "";
		return;
	}
	if (null != curSymbol && (valueF.charAt(0) == "+" || valueF.charAt(0) == "-")) {
		if (curSymbol.concat(valueF.charAt(0)).length == valueF.length) {
			return valueF.replace(curSymbol, "");
		}
	}

	if (valueF.length == 0)
		return "";

	var valueEx = val;
	var regexp = new RegExp('^[0-9]$');
	var decimalPosition = -1;
	for (var vpos = 0; vpos < valueEx.length;) {
		if (!regexp.test(valueEx.charAt(vpos))) {
			if (valueEx.charAt(0) == "-") {
				minussymbolpresent = true;
			}
			if (valueEx.charAt(vpos) == decimalSym) {
				decimalPosition = vpos;
			}
			valueEx = valueEx.replace(valueEx.charAt(vpos), "");
			count++;
			validated = true;
		} else {
			vpos++;
		}
	}
	var invalidCharssize = count;
	if (valueEx.length == 0) {
		valueF = valueF.replace(valueF, "");
	}
	if (valueEx.length > Number(maxLength)) {
		if (validated) {
			valueEx = valueEx.substr(0, maxLength);
			if (decimalPosition > -1)
				valueF = [valueEx.slice(0, decimalPosition), decimalSym, valueEx.slice(decimalPosition)].join('');

			if (minussymbolpresent && decimalPosition > -1)
				valueF = minussymbol.concat(valueF);

			if (minussymbolpresent && decimalPosition == -1)
				valueF = minussymbol.concat(valueEx);

			if (decimalPosition == -1 && !minussymbolpresent)
				valueF = valueEx;
		} else
			valueF = valueEx.substr(0, maxLength);
	} else if (valueEx.length <= Number(maxLength)) {
		if (decimalPosition > -1)
			valueF = [valueEx.slice(0, decimalPosition), decimalSym, valueEx.slice(decimalPosition)].join('');

		if (minussymbolpresent && decimalPosition > -1)
			valueF = minussymbol.concat(valueF);

		if (minussymbolpresent && decimalPosition == -1)
			valueF = minussymbol.concat(valueEx);

		if (decimalPosition == -1 && !minussymbolpresent)
			valueF = valueEx;
	}
	if (decimalSym != valueF.charAt(valueF.length - 1)) {
		var reg = new RegExp('^[0-9]$');
		if (!reg.test(valueF.charAt(valueF.length - 1))) {
			return valueF.replace(valueF.charAt(valueF.length - 1), "");
		}
	}

	var array = valueF.split(decimalSym);
	var realPart;
	if (null != array) {
		realPart = array[0];
	}
	var sign;
	if (null !== realPart && realPart !== undefined && "" !== realPart) {
		if (realPart.charAt(0) == '+' || realPart.charAt(0) == '-') {
			sign = realPart.charAt(0);
			realPart = realPart.substring(1);
		}
		valueF = accounting.formatMoney(realPart, curSymbol, precision, groupingSymb, decimalSym, "", grpSize);
	}
	if (null !== array && array.length > 1) {
		if ("" === realPart) {
			valueF = "";
		}
		valueF = valueF.concat(decimalSym).concat(array[1]);
	} else if (decimalSym == valueF.charAt(valueF.length - 1)) {
		valueF = valueF.concat(decimalSym);
	}
	if (valueF.indexOf(curSymbol) == -1) {
		valueF = curSymbol.concat(valueF);
	}
	if (null !== sign && sign !== undefined) {
		valueF = sign.concat(valueF);
	}

	return valueF;
}
function checkIfErrorField(nmsp, id) {

	var errorFields = nmsp.errorFields;
	if (errorFields && errorFields.length > 0 && errorFields.indexOf(id) > -1) {
		return true;
	}
	return false;
}

function checkIfWarningField(nmsp, id) {

	var warningFields = nmsp.warningFields;
	if (warningFields && warningFields.length > 0 && warningFields.indexOf(id) > -1) {
		return true;
	}
	return false;
}

/**
 * Method to find the parents of the unselected items in grid and unselect the parents provided no other childs of the item is selected. Called recursively till the last parent.
 * 
 * @param pathId
 * @param nmsp
 */
function unselectParentCheckBox(pathId, nmsp, selectedKeyMap) {
	var parent = pathId.substring(0, pathId.lastIndexOf("."));
	var keyToRemove = searchValueInMap(selectedKeyMap, parent);
	var clearCheckBox = true;
	var selectedObjects = nmsp.grid.getSelectedObjects();
	$.each(selectedObjects, function (key, value) {
		var iterPathId = value.objectPathId;
		var iterParent = iterPathId.substring(0, iterPathId.lastIndexOf("."));
		if (parent == iterParent)
			clearCheckBox = false;

	});
	if (clearCheckBox) {
		var selectedKeys = nmsp.grid.getSelectedKeys();
		selectedKeys = jQuery.grep(selectedKeys, function (value) {
			return value != keyToRemove;
		});
		nmsp.grid.setSelectedKeys(selectedKeys);
		if (parent)
			unselectParentCheckBox(parent, nmsp, selectedKeyMap);
	}
}

/**
 * Method to store all the selected items in datagrid to a map. Returns the map
 */
function storeSelectedKeysToMap(keyField, nmsp) {
	var map = new Object();
	var selectedObjects = nmsp.grid.getSelectedItems();
	$.each(selectedObjects, function (key, value) {
		var pathId = value.objectPathId;
		var key = $(value).attr(keyField);
		map[key] = pathId;
	});
	return map;
}

/**
 * Searches the value passed in the key in the map passed and returns the key corresponding to the value
 * 
 * @param key
 */
function searchValueInMap(map, value) {
	var returnValue = null;
	$.each(map, function (innerKey, innerValue) {
		if (value == innerValue) {
			returnValue = innerKey;
			return false;
		}
	});
	return returnValue;
}

function compareGridImpl(obj, blockName, fieldName) {

	var formObj = $(obj).closest('form');
	var nmspF = getFormNameSpace(formObj);
	var result = true;

	if ("N" === nmspF.isSimulated) {
		result = false;
	}
	var split = fieldName.split(",");
	var nmsp = getNameSpace(formObj, blockName);
	var dataPvder = nmsp.grid.getDataProvider();
	var prevValues = nmsp.previousValues;
	var sfieldName;
	var fieldNamePathID;
	var aSplit;
	var fieldValue;
	var modelObj;
	var index;
	var pathId;
	var finalVal;
	if (result) {
		$.each(prevValues, function (i, value) { // format - pathid.fieldid__value
			if (result) {
				aSplit = value.split("__");
				fieldValue = aSplit[1];
				fieldNamePathID = aSplit[0]; // pathid.fieldid
				aSplit = fieldNamePathID.split(".");
				sfieldName = aSplit[aSplit.length - 1];
				pathId = fieldNamePathID.substring(0, (fieldNamePathID.length - sfieldName.length - 1));
				index = aSplit[0].substring(aSplit[0].indexOf("[") + 1, aSplit[0].length - 1);
				modelObj = JSON.search(dataPvder[index], '//*[objectPathId="' + pathId + '"]');
				finalVal = $(modelObj).attr(sfieldName);
				if (finalVal != fieldValue) {
					result = false;
				}
			}
		});
	}

	return result;
}

function compareGrid(obj, blockName, fieldName) {

	var result = compareGridImpl(obj, blockName, fieldName);
	var formObj = $(obj).closest('form');
	var nmspF = getFormNameSpace(formObj);
	var crumbUserInfoZone = formObj.attr('profileid') + "_" + formObj.attr('subaction') + "_" + formObj.attr('mode') + "_userInfoZone";

	if (!result) {
		hideWaitCursor();
		$("#" + crumbUserInfoZone).html('<div class="formUserInfo" ><table class="alert alert-danger" width="100%"><tbody><tr><td class="error_style"><img src="../common/images/errorMsg.png" class="errorImage"><span class="errorMessageSpan">' + nmspF.simulation_error + '</span><span class="errorLinks"></span></td></tr></tbody></table></div>');
		var _profileID = getCustomJsProfileId(obj);
		var activeLi = $(formObj).find('li.active');
		var displayPageId = $(activeLi.find("a")).attr("id");
		var crumbObj = $(formObj).find('.parentObject');
		if (_profileID) {
			var strFun = displayPageId + "_setGridHeight";
			try {
				window[strFun](crumbObj, event);
			} catch (e) {
				// window.console.log('function: '+strFun+' doesnot exist!');
			}
		}
	} else {
		if ($("#" + crumbUserInfoZone) && $("#" + crumbUserInfoZone).length > 0)
			$("#" + crumbUserInfoZone).html('');
	}

	return result;

}

function reformatResponse(grid, response) {

	var nmsp = getNameSpace($(grid.domElement).closest('form'), grid.blockId);
	var curObjPathId = nmsp.currentObjectPathId;
	var responseObj = JSON.parse(response);
	var fieldList = nmsp.fieldList[0];

	// var prefAttr = nmsp.preferenceAttributes;
	var grpSep = xel_session_var.grp_sep;
	var decSep = xel_session_var.dec_sep;
	var grpSize = xel_session_var.grp_size;
	var obj = null;
	var event = null;

	if (nmsp.fieldEvent) {
		event = nmsp.fieldEvent;
		obj = event.target;
	}
	if (curObjPathId && curObjPathId.length > 0 && event) {

		var pathIdList = curObjPathId.split('.');
		var parentObj;
		var currentObj;
		var curObjfound = false;
		var isParentObjChange = false;

		var objName = pathIdList[0].substring(0, pathIdList[0].indexOf('['));

		var indexList = [];
		for (var k = 0; k < pathIdList.length; k++) {
			indexList.push(pathIdList[k].substring(pathIdList[0].indexOf('[') + 1, pathIdList[0].indexOf(']')));
		}

		$(responseObj).each(function () {
			if ($(this).attr('objectPathId') === pathIdList[0])
				parentObj = this;
			if ($(this).attr('objectPathId') === curObjPathId)
				currentObj = this;
		});

		if (!currentObj && hasChildObjects(parentObj)) {
			currentObj = getCurrentObj(parentObj);
		}

		if (currentObj) {

			if (hasChildObjects(currentObj))
				isParentObjChange = true;

			reformatField(currentObj);
			getFormattedObject(currentObj);
		}

	}
	// clearing temp objects from namespace
	nmsp.currentObjectPathId = '';
	nmsp.curObjFieldId = '';

	return JSON.stringify(responseObj);

	function getCurrentObj(fieldObj) {

		var innerObj;

		innerObj = $(fieldObj).attr(objName);
		for (var k = 0; k < innerObj.length; k++) {

			if (curObjfound)
				break;

			fieldObj = innerObj[k];
			if (fieldObj.objectPathId === curObjPathId) {
				currentObj = fieldObj;
				curObjfound = true;
				break;
			}
			getCurrentObj(fieldObj);
		}
		return currentObj;
	}

	function getFormattedObject(fieldObj) {

		var innerObj;

		if (hasChildObjects(fieldObj)) {
			innerObj = $(fieldObj).attr(objName);
			for (var k = 0; k < innerObj.length; k++) {
				fieldObj = innerObj[k];
				if (isParentObjChange || fieldObj && fieldObj.objectPathId === curObjPathId)
					reformatField(fieldObj);
				if ($(fieldObj).attr(objName) && $(fieldObj).attr(objName).length > 0)
					getFormattedObject(fieldObj);
			}
		}
	}

	function hasChildObjects(fieldObj) {

		if ($(fieldObj).attr(objName) && $(fieldObj).attr(objName).length > 0)
			return true;
		return false;
	}

	function reformatField(fieldObj) {

		for (var k in fieldList) {
			var fieldId = k;
			var fieldVal = "";
			var isDynamicField = false;

			if (fieldId === $(obj).attr('fieldId')) {
				if ($(fieldList).attr(k).field.isDynamicField) {
					fieldVal = $(fieldObj.dynamicField).attr(fieldId);
					isDynamicField = true;
				} else {
					fieldVal = $(fieldObj).attr(fieldId);
				}

				if ($(obj).attr('ftypePresent') && ("AMOUNT" === $(obj).attr('ftype') || "RATE" === $(obj).attr('ftype'))) {

					var curSymbol = $(obj).attr('cursymbol');
					var precision = $(obj).attr('curprecision');
					// fieldVal = formatCurrencyImpl(fieldVal,curSymbol,precision,grpSep,decSep,grpSize,getMaxLengthforNumberField(obj,true),event);

					if (isDynamicField)
						$(fieldObj.dynamicField).attr(fieldId, fieldVal);
					else
						$(fieldObj).attr(fieldId, fieldVal);
				}
			}
		}
	}

}

dynamicLevelsCreated = function (event) {

	if (event.level.getNestDepth() > 1) {

		event.level.forcePagerRow = false;

	}

}

function resetScroll(grid) {
	// if(($(grid.domElement).find('.flexDataGridVirtualBodyContainer').prop('scrollHeight')-12)>$(grid.domElement).find('.flexDataGridVirtualBodyContainer').outerHeight()){ // To enable vertical scrolling if the grid exeeds the limit set
	// $($(grid.domElement).find('.flexDataGridVirtualBodyContainer')).css({
	// overflowY: 'auto',
	// overflowX: 'auto'
	// });
	// }
}
function clearErrorAndWarning(nmsp) {
	nmsp.warningFields = [];
	nmsp.warningFieldMessage = new Object();
	nmsp.errorFields = [];
	nmsp.errorFieldMessage = new Object();
}
function getElementById(id) {
	var field = document.getElementById(id);
	if (!$(field).is(':visible')) {
		$(field).remove();
		field = document.getElementById(id);
	}
	return field;
}

function getDataGridData(form) {
	var activeLi = $(form).find('li.active');
	var displayPageId = $($(activeLi).find("a")).attr("id");
	var displayPage = $(form).find("#div_" + displayPageId);
	var gridBlocks = $(displayPage).find('.flexiciousGrid:visible');
	var parameters = '';
	var blockIds = '';
	for (var i = 0; i < gridBlocks.length; i++) {
		var block = gridBlocks[i];
		var blockId = $(block).attr('blockId');
		var nmsp = getNameSpace(form, blockId);
		var fieldList = [];
		fieldList.push("dynamicField");
		fieldList.push("lovValues");
		fieldList.push("fieldName");
		fieldList.push("code");
		fieldList.push("description");
		fieldList.push(nmsp.grid._columnLevel.childrenField);
		if (nmsp && nmsp.fieldList && nmsp.fieldList.length > 0 && nmsp.grid.getDataProvider() && nmsp.grid.getDataProvider().length > 0 && nmsp.grid.xelerateInterceptorByPassYN != "Y") {
			$.each(nmsp.fieldList[0], function (key, value) {
				var profileFieldObj = $(value).attr('field');
				fieldList.push($(profileFieldObj).attr("attrName"));
			});

			var json = JSON.stringify(nmsp.grid.getDataProvider(), fieldList);
			if (i == 0) {
				blockIds += blockId;
			} else {
				blockIds += '~,~' + blockId;
			}
			parameters += '&' + blockId + '_Data=' + encodeURIComponent(json);
		} else if (nmsp.grid.xelerateInterceptorByPassYN == "Y") {

			var profileId = nmsp.grid.profileId;
			var blockId = nmsp.grid.blockId;
			if (profileId && blockId) {

				var strFun = profileId + "_" + blockId + "_GetData";

				try {
					parameters += window[strFun](nmsp);
				} catch (e) {
				}

			}
		}
	}
	if (blockIds && blockIds.length)
		parameters += '&dataGridBlocks=' + blockIds;
	return parameters;
}
/**
 * To call the closeInlineFields method and set the data in the grid.
 * 
 * @param event
 * @param _parameter
 */
function getInitialData(grid, _parameter) {
	var form = $(grid.domElement).closest('form');
	var _mode = getMode(grid.domElement);
	if (_mode) {
		_parameter = _parameter + "&Mode=" + _mode;
	}

	var _profileID = getProfileId(grid.domElement);
	if (_profileID) {
		_parameter = _parameter + "&ProfileId=" + _profileID;
	}

	var _subAction = getSubAction(grid.domElement);
	if (_subAction) {
		_parameter = _parameter + "&subAction=" + _subAction;
	}

	var _activeBreadcrumbOrder = getActiveBreadcrumb(grid.domElement);
	if (_activeBreadcrumbOrder) {
		if (_activeBreadcrumbOrder.attr('order'))
			_parameter = _parameter + "&activeElementOrder=" + _activeBreadcrumbOrder.attr('order');
		if (_activeBreadcrumbOrder.attr('id'))
			_parameter = _parameter + "&activeElementId=" + _activeBreadcrumbOrder.attr('id');
	}
	return ajaxInitialDataLoad(grid, form, _parameter);
}

/**
 * 
 * @param grid :
 *            grid object
 * @param form
 * @param _parameter :
 *            required parameters
 * @param methodName :
 *            method to be invoked in ajax call after ajax call;
 */

function ajaxInitialDataLoad(grid, form, _parameter) {

	var cUrl = $(form).attr("action") + "?Action=getDataGridAsyncData";
	var data = [];
	generalSubmitAjaxMethod({
		url: cUrl,
		data: _parameter,
		method: "POST",
		async: false,
		success: function (response) {
			try {
				data = JSON.parse(response);
				// grid.setDataProvider(data);
				// return data;
			} catch (e) {
				// window.console.log('function: '+methodName+' doesnot exist!');
			}
		},
		error: function (msg) {
			hideWaitCursor();
		}
	});
	return data;
}
function columnGroupCreate(grid) {
	// added for setting column groups from profile itself
	var nmsp = getNameSpace($(grid.domElement).closest('form'), grid.blockId);
	$.each(nmsp.columnGroup, function (key, columnList) {
		var columnGroup = new flexiciousNmsp.FlexDataGridColumnGroup();
		var columns = [];
		$.each(grid.getColumns(), function (i, column) {
			if (jQuery.inArray(column.dataField, columnList) > -1) {
				columns.push(column);
			}
		});
		// TODO
		// column.cellBackgroundColorFunction = DEAL_ColumnBackground;
		columnGroup.enableExpandCollapse = true;
		columnGroup.headerText = key;
		columnGroup.setColumns(columns);
		grid.getColumnGroups().push(columnGroup);
	});
}
function getDataGridPostion(form) {
	// added for getting grid postion to pass as Ajax parameter
	var activeLi = $(form).find('li.active');
	var gridBlocks = [];
	if (activeLi && activeLi.length > 0) {
		var displayPageId = $($(activeLi).find("a")).attr("id");
		var displayPage = $(form).find("#div_" + displayPageId);
		gridBlocks = $(displayPage).find('.flexiciousGrid:visible');
	} else {
		gridBlocks = $(form).find('.flexiciousGrid:visible');
	}
	var parameters = '';
	var blockIds = '';
	for (var i = 0; i < gridBlocks.length; i++) {
		var block = gridBlocks[i];
		var blockId = $(block).attr('blockId');
		var nmsp = getNameSpace(form, blockId);

		parameters = parameters + "&" + blockId + "_pos=" + encodeURIComponent(nmsp.grid.getVerticalScrollPosition() + "," + nmsp.grid.getHorizontalScrollPosition());
	}
	return parameters;
}
filterConverterFunction = function (item, column) {
	var data = '';
	if (column.currencyFormat) {
		data = currencyFormatterLabelFunction(item, column);
	} else {
		data = $(a).attr(b.dataField);
	}
	return data;
};
var filterConverterFunctionDropDown = function (item, column) {
	if (column && item) {
		var data = $(item).attr(column.dataField);
		var temp = {};
		if ($(column).attr('dropDownObj') && data && data.length > 0) {
			return $(column.dropDownObj).attr(data);
		} else if (typeof (column.staticItemDes) != 'undefined') {
			var selectList = column.staticItemDes.split('::');
			for (var o = 0; o < selectList.length; o++) {
				temp[selectList[o].split('||')[0]] = selectList[o].split('||')[1];
			}
			column.dropDownObj = temp;
			if (data && data.length > 0) {
				data = $(column.dropDownObj).attr(data);
			}
			return data;
		} else {
			return data;
		}
	}
	return null;
};

selectAllChange = function (evt) {

	var _profileID = evt.target.profileId;
	var _blockID = evt.target.blockId;
	if (_profileID && _blockID) {

		var strFun = _profileID + "_" + _blockID + "_SelectAllChange";

		try {
			window[strFun](evt);
		} catch (e) {
		}

	}

};

function getDynamicFieldVariation(nmsp, fieldId, val) {

	var variation = null;
	if (val.dynamicUserModel && val.dynamicUserModel.dynamicFieldVariation) {
		$.each(val.dynamicUserModel.dynamicFieldVariation, function (key, value) {
			if (value.fieldId === fieldId) {
				variation = value;
			}
		});
	}
	var dynamicVariationList = nmsp.dynamicFieldVariation;
	if (!variation && dynamicVariationList && dynamicVariationList.length > 0) {
		dynamicVariationList.forEach(function (item) {
			if (item && item.fieldId == fieldId) {
				variation = item;
			}
		});
	}
	return variation;
}

function searchAndAppendParentKey(jsonData, pathIdArray, keyField, checkedKey, hierarchyName) {
	if (jsonData && pathIdArray) {
		for (let i = 0; i < jsonData.length; i++) {
			let node = jsonData[i];
			if (pathIdArray.includes(node['objectPathId'])) {
				const index = pathIdArray.indexOf(node['objectPathId']);
				if (index > -1) {
					pathIdArray.splice(index, 1);
				}
				checkedKey.push(node[keyField]);
			}
			if (node[hierarchyName] instanceof Array) {
				this.searchAndAppendParentKey(node[hierarchyName], pathIdArray, keyField, checkedKey, hierarchyName);
			}
		}
	}
	return checkedKey;
}

function getElementByText(selector,text){
	var elements= $(selector+':contains('+text+')');
	if(elements.length>0)
	return elements[0];
	return null;
}


function setInlineEditTextAreaImage(obj,val,uiEntity){
	flexiciousNmsp.UIComponent.prototype.setData.apply(obj, [val]);
	let value='';
	if(val[uiEntity.name] && val[uiEntity.name].length>0){
		value=val[uiEntity.name];
	}	
	let variationObj = getDynamicGridFieldVariation(uiEntity.name,val);
	// if(!variationObj || variationObj.isVisible){
	// 	obj.domElement.innerHTML='<input  class="mat-input-element"  type="text" maxlength="'+uiEntity.dataType.length+'"  placeholder="'+uiEntity.description+'" value="'+value+'">';	
	// }else{
	// 	obj.domElement.innerHTML='<span>'+value+'</span> '
	// }
	let imagesPath = window['CONSTANT_NAMES']['IMAGES_PATH'];
	let htmlData = '<img class="dataLegendImageStyle" src="' + (imagesPath + 'technical_pro-normal.png') + '" ></img>';
	// var htmlData= "<span class='xel_inputGroup textAreaInputGroupImage' />";+
	obj.domElement.innerHTML=htmlData;
	$(obj.domElement).click(function (event,obj,val,uiEntity){
		loadPopTextArea(event,obj,val,uiEntity);
	});
}

function loadPopTextArea(event,obj,val,uiEntity){

	event.stopPropagation();
	calculteAndPositionComponent(event.target, 'xel_textAreaDiv');
	setTextAreaHeader(uiEntity);
	displayTextAreatPopAndSetFocus(uiEntity,val);
	changeTextTransform(uiEntity);
	bindOkClickFunction(uiEntity,val);
	bindCancelClickFunction();
	bindCloseBtnFunction();
	bindEscBtnClose();
	bindDocumentClickFunction();
	//bindTextAreaCloseOnClick(ele);
	bindTextAreaClear();

	function setRelativePosition(ele, componentId,leftOffset,topOffset){

		calculateAndSetRelativePosition(ele, '#'+componentId,leftOffset,topOffset);
	}
	
	/**
	* @param ele - Element on which the event is triggered (Text field)
	* @param componentId - Id of the component to be positioned
	*/
	function calculteAndPositionComponent(ele, componentId){
		setRelativePosition(ele, componentId,5,15);
	}

	function calculateAndSetRelativePosition(ele, componentElmt,leftOffset,topOffset){
		var xel_windowHeight = $(window).height(); // Height of the window
		var xel_windowWidth = $(window).width(); //Width of the window
		var topLoc = $(ele).offset().top;
		var leftLoc = $(ele).offset().left;
		var xel_componentHeight = $(componentElmt).height();
		var xel_componentWidth =  $(componentElmt).width();
		var eleHeight =  $(ele).height();
		var eleWidth =  $(ele).width();
		// correction added for open banking 
		var isAlignComponentMiddle = false;
		//Condtion to align the LOV component top or bottom of the parent text box
		if( topLoc + eleHeight + xel_componentHeight > xel_windowHeight  ){ // Component cant be placed at bottom
			if( topLoc > xel_componentHeight){ // If there is space at top then place component at top
				topLoc = topLoc - xel_componentHeight - topOffset;
			}else{//Place the component at sides with component at middle
	//			topLoc = topLoc - (xel_componentHeight/2) - 15;
				topLoc = xel_windowHeight - xel_componentHeight - topOffset;
				isAlignComponentMiddle = true;
			}
		}else{
			topLoc = topLoc + eleHeight + topOffset;
		}
	
	
		//Condtion to align the LOV component left or right of the parent text box
		if( leftLoc + xel_componentWidth > xel_windowWidth && leftLoc + eleWidth > xel_componentWidth ){
			//If left postion + width of the component exceeds the window width
			//and also if left position + width of the txt box is > than componentWidth
			//(ie. if we align the componet to left of the  txt box then the left point of comp will not be negative)
			if(isAlignComponentMiddle)
				leftLoc = leftLoc - xel_componentWidth - leftOffset;
			else
				leftLoc = leftLoc + eleWidth - xel_componentWidth - leftOffset ;
		}else if(leftLoc + xel_componentWidth+ eleWidth > xel_windowWidth){
			if(isAlignComponentMiddle)
				leftLoc = leftLoc - xel_componentWidth - leftOffset;
			else
				leftLoc = leftLoc + eleWidth - xel_componentWidth - leftOffset ;
		}
		else{
			if(isAlignComponentMiddle)
				leftLoc = leftLoc + eleWidth + leftOffset;
			else
				leftLoc = leftLoc + leftOffset;
		}
	}
	

	//removeButtonsForCommentsBox(ele);

	function removeButtonsForCommentsBox(ele){
		if($(ele).hasClass('viewPageComment')){

			$("#xel_textAreaDiv").find('textarea').attr('readOnly',true);//To make content read only

			var textAreaBtns = $("#xel_textAreaDiv").find('button');
			$(textAreaBtns).each(function(){
				if($(this).attr('id') !== 'id_xel_textArea_pop_ok'){
					$(this).css({
						'display' : 'none'
					});
				}
			});
		}
	}


	function changeTextTransform(uiEntity){
		var maxLength =  uiEntity.dataType.length;
		if( maxLength != undefined && maxLength >= 0 ){
			 $('#xel_popup_textArea').prop('maxlength', maxLength);
		}else{
			 $('#xel_popup_textArea').removeAttr('maxLength');
		}
	}
	function setTextAreaHeader(uiEntity){
		var heading =uiEntity['description'];
		$('#xel_textAreaHeading ').html(heading);
	}

	/**
	 * Function to display the pop up text area and set focus
	 */
	function displayTextAreatPopAndSetFocus(uiEntity,val){

		xelPopUpTextAreaDisplayed = true;
		$('#xel_popup_textArea').val(val[uiEntity.name]);
		$('#xel_textAreaDiv').show(function(){
			$('#xel_textAreaDiv').css("display","table");
			$('#xel_textAreaDiv').css("width","auto");
			$('#xel_popup_textArea').focus();
			$('#xel_popup_textArea').caretToEnd();
		});
		setTimeout(function(){$('#xel_textAreaDiv').css("min-height","170px");},2);
	}

	/**
	 * Bind the ok click function
	 */
	function bindOkClickFunction(uiEntity,val){
		//Set the value to text area when we click ok
		$('#id_xel_textArea_pop_ok').unbind( "click" ).click(function(){
			if(val[uiEntity.name]!==$('#xel_popup_textArea').val()){
				val[uiEntity.name]=$('#xel_popup_textArea').val();
				//$(ele).change();
			}
			hidePopTextAreaAndResetFocus();
		});
	}
	function bindCancelClickFunction(){
		//Close the Popup text area when we click Cancel
		$('#id_xel_textArea_pop_cancel').unbind( "click" ).click(function (){
			hidePopTextAreaAndResetFocus();
		});
	}

	/**
	 * Bind the close btn function
	 */
	function bindCloseBtnFunction(){
		$('#xel_popTxtAreaCloseBtn_Id').unbind( "click" ).click(function (){
			hidePopTextAreaAndResetFocus();
		});
	}

	/**
	 * Hide the pop up and set the focus back to the element
	 */
	function hidePopTextAreaAndResetFocus(){
		xelPopUpTextAreaDisplayed = false;
		$('#xel_textAreaDiv').css("min-height","0px");
		$('#xel_textAreaDiv').css("width","300px");
		setTimeout(function(){$('#xel_textAreaDiv').hide();
		$('#xel_popup_textArea').css("height","auto").css("width","auto");},100);
	}



function setCaretPosition(elemId,caretPos) {
var elem = document.getElementById(elemId);
    if(elem != null) {
                elem.setSelectionRange(caretPos, caretPos);
                elem.focus();
        }
}
	/**
	 * Bind the tab btn fucntionality on the text box

	function bindTabBtnFunctionality(ele){
		$( '#xel_popup_textArea' ).off( 'keydown');
		$( '#xel_popup_textArea' ).on( 'keydown', function ( e ) {
			if ( e.keyCode === 9 && xelPopUpTextAreaDisplayed ) { // Tab
				//$(ele).val($('#xel_popup_textArea').val());
				//hidePopTextAreaAndResetFocus(ele);
		    }
		});
	}*/

	/**
	 * Bind the escape btn functionality
	 */
	function bindEscBtnClose(){
		$( document ).on( 'keydown', function ( e ) {
		    if ( e.keyCode === 27 && xelPopUpTextAreaDisplayed) { // ESC
		    	hidePopTextAreaAndResetFocus();
		    }
		});
	}
	/**
	 *  Close the TextArea on outside click
	 */




function bindTextAreaClear(){
 $('#id_xel_textArea_pop_clear').unbind( "click" ).click(function (){
	var tempData =  $('#xel_popup_textArea').val();
 		$('#xel_popup_textArea').val('');
 		if($(e.target).attr("id") == "#id_xel_textArea_pop_cancel"){
		    $('#xel_popup_textArea').val(tempData);
		}

	});

}


	/**
	 * Close Text Area when we click on outside
	 */
	function bindDocumentClickFunction(){
		$(document).on("click", function(e) {
			if ($(e.target).closest("#xel_textAreaDiv").length === 0) {
				 if(xelPopUpTextAreaDisplayed){
					hidePopTextAreaAndResetFocus(ele);
				}
				
			}
		});
	}
	var xelPopUpTextAreaDisplayed=false;
}

function getDataGridComponentName(grid){
	if(grid){		
		var profileId=grid.profileId;
		if(!profileId){
			profileId = '';
	   }
		var blockId= grid.blockId;
		if(!blockId){
			blockId = '';
	   }
		var mode = grid.mode;
		if(!mode){
			 mode = '';
		}
		var subAction =  grid.subAction;		
		if(!subAction){			
		   subAction = '';		
	   }	
		return (profileId.toUpperCase() + "_" + blockId.toUpperCase() + "_" + subAction.toUpperCase() + "_" + mode.toUpperCase() + "_NameSpace");
	}
	  
	return null;  
}
function getDataGridComponentRef(grid){
	var xelDataGridComponentRef = getComponentConstantName('XEL_DATA_GRID_COMPONENT_REF');
	if (xelDataGridComponentRef) {
		let componentObj= window[xelDataGridComponentRef][getDataGridComponentName(grid)];
		if(componentObj.component)
			return componentObj.component;
	}
	return null;
}
function showMessageAsToolTip(ele,message,id,type){
	var errorDiv = $("<div>",{"id":"erro_msgDiv","width":"250px","class":"erro_msgDiv","style":"display: none;"});
	let table = $('<table>',{'id':"error_table", 'class':"error_table_main"});
	let tdObj=$('<td>',{'nowrap':"" ,'id':'errorTd'}).html(message);
	table.append($('<tbody>',{}).append($('<tr>',{}).append(tdObj)));
	errorDiv.append(table);
	$(ele).closest('div').append(errorDiv);
	var tle = $(ele).attr("title");
	if(tle){
		$(ele).attr("orgTitle", tle);
		$(ele).removeAttr("title");
	}
	if('E'==type){
		// document.getElementById('errorTd').innerHTML = message;
		$('#erro_msgDiv').width($('#error_table').width);
		posiotionErrorDiv(ele,"erro_msgDiv");
		$('#erro_msgDiv').show();
	}

		//$("#errorSpan").show();
}
function posiotionErrorDiv(ele, componentId){

	var xel_windowHeight = $(window).height(); // Height of the window
	var xel_windowWidth = $(window).width(); //Width of the window
	var topLoc = $(ele).offset().top;
	var leftLoc = $(ele).offset().left;
	var xel_componentHeight = $('#'+componentId).height();
	var xel_componentWidth = $('#'+componentId).width();

	var eleHeight =  $(ele).height();
	var eleWidth =  $(ele).width();


	//Condtion to align the tooltip component top or bottom of the parent text box
	if( topLoc + eleHeight + xel_componentHeight > xel_windowHeight && topLoc > xel_componentHeight ){
		topLoc = topLoc - xel_componentHeight - 30;
	}else{
		topLoc = topLoc + eleHeight + 8;
	}

	//set the position of tooltip image
	// setPosition(topLoc-13 , leftLoc+(15), componentId+'_img');

	//Condtion to align the tooltip component left or right of the parent text box
	if( leftLoc + xel_componentWidth > xel_windowWidth && leftLoc + eleWidth > xel_componentWidth ){
		//If left postion + width of the component exceeds the window width
		//and also if left position + width of the txt box is > than componentWidth
		//(ie. if we align the componet to left of the  txt box then the left point of comp will not be negative)
		leftLoc = leftLoc + eleWidth - xel_componentWidth - 5 ;
	}else{
		leftLoc = leftLoc + 5;
	}



	setPosition(topLoc , leftLoc, componentId);


	/**
	 * Set the top and left attribute of the lov component
	 */
	function setPosition(y, x, id) {

			$('#'+id).css({
				top : y + 'px',
				left : x + 'px'
			});
		}
}
function hideErrorToolTip(ele,message){


	$('#erro_msgDiv').fadeOut();
	$('.tootTipImg').fadeOut();

	$('#erro_msgDiv').remove();
	$('.tootTipImg').remove();

	//$("#errorSpan").hide();

	var tle = $(ele).attr("orgTitle");
	if(tle){
		$(ele).attr("title", tle);
		$(ele).removeAttr("orgTitle");
	}
}

function resetStyleOnCloseErrorDiv(id,ele){
	$(ele).closest("form").find('#'+id+'_error').fadeOut();
	$(ele).closest("form").find('#'+id+'_error_img').fadeOut();
	//$('#'+id).css("border-color","#ccc");
	//$('#'+id).removeAttr('onmouseover');

	//remove the error div from the page itself
	//$('#'+id+'_error').remove();
	//$('#'+id+'_error_img').remove();
}
function bindErrorFieldProperty(obj,msg,eleId,show){

	$(obj).addClass("errorField");
	if(show)
		showMessageAsToolTip(obj,msg,eleId,"E");
	$(obj).bind('mouseenter', function(event){
		showMessageAsToolTip(obj,msg,eleId,"E");
	});
	$(obj).bind('mouseleave', function(event){
		hideErrorToolTip(obj,msg);
	});

	// manageErrorTooltipOnScrolling();
}

function resetErrorFieldProperty(obj){
	hideErrorToolTip(obj,"");
	$(obj).removeClass("errorField");
	$(obj).unbind('mouseenter mouseleave');
}