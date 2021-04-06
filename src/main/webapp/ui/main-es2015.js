(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/config.json */ "./src/assets/config.json");
var _assets_config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/config.json */ "./src/assets/config.json", 1);
/* harmony import */ var _assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/LabelCodes.json */ "./src/assets/LabelCodes.json");
var _assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/LabelCodes.json */ "./src/assets/LabelCodes.json", 1);
/* harmony import */ var _assets_Messages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Messages.json */ "./src/assets/Messages.json");
var _assets_Messages_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/Messages.json */ "./src/assets/Messages.json", 1);
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/launcher.directive */ "./src/shared/directives/launcher.directive.ts");







class AppComponent {
    constructor(xelerate) {
        this.xelerate = xelerate;
        this.title = "Xelerate App";
        xelerate.initAppConfig(_assets_config_json__WEBPACK_IMPORTED_MODULE_1__);
        xelerate.initLabelsMap(_assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2__);
        xelerate.initMessagesMap(_assets_Messages_json__WEBPACK_IMPORTED_MODULE_3__);
    }
    ngAfterViewInit() {
        this.xelerate.loadComponent({ compName: this.xelerate.appConfig.firstPage });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["launcher", "xelerateLauncher1", 1, "xelerate-wrapper", "layout1"], ["launcher", "xelerateLauncher2", 1, "xelerate-wrapper", "layout1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
    } }, directives: [_shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_5__["LauncherDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.components.ts":
/*!***********************************!*\
  !*** ./src/app/app.components.ts ***!
  \***********************************/
/*! exports provided: ComponentsProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsProvider", function() { return ComponentsProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/utility.service */ "./src/shared/services/utility.service.ts");




class ComponentsProvider {
    getComponent(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let component = null;
            //// Look for internal components vailable
            let module = yield this.importComponent(param);
            if (module) {
                component = module[param.compName];
            }
            else if (param.customImport) {
                //// If no internal components found, get component from user implementation
                component = yield src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].invokeMethod(param, "customImport");
            }
            return component;
        });
    }
    importComponent(param) {
        //// Should be listed with all screens developed, TBD - Have a export option from Designer or manual update?
        switch (param.compName) {
            case 'CustomerQuery_xelerate': return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./customerquery_xelerate/customerquery_xelerate.component */ "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts"));
            case 'Login': return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./login/login.component */ "./src/app/login/login.component.ts"));
        }
        return null;
    }
}
ComponentsProvider.ɵfac = function ComponentsProvider_Factory(t) { return new (t || ComponentsProvider)(); };
ComponentsProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ComponentsProvider, factory: ComponentsProvider.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerquery_xelerate/customerquery_xelerate.component */ "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuery_xelerate"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_7__["Login"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuery_xelerate"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["Login"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/customerquery_xelerate/customerquery_xelerate-info.json":
/*!*************************************************************************!*\
  !*** ./src/app/customerquery_xelerate/customerquery_xelerate-info.json ***!
  \*************************************************************************/
/*! exports provided: table, rootName, category, entities, services, dataStructure, containers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"table\":[{\"id\":\"CustomerQuery_xelerate_000000045\",\"columns\":[{},{\"title\":\"addrLn1\",\"data\":\"addrLn1\",\"type\":\"text\"},{\"title\":\"addrLn2\",\"data\":\"addrLn2\",\"type\":\"text\"},{\"title\":\"addrLn3\",\"data\":\"addrLn3\",\"type\":\"text\"},{\"title\":\"city\",\"data\":\"city\",\"type\":\"text\"},{\"title\":\"state\",\"data\":\"state\",\"type\":\"text\"},{\"title\":\"country\",\"data\":\"country\",\"type\":\"text\"},{\"title\":\"zipCode\",\"data\":\"zipCode\",\"type\":\"text\"},{\"title\":\"addrType\",\"data\":\"addrType\",\"type\":\"text\"}],\"editInfo\":{\"inputTypes\":[{\"column\":1,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000046',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn1','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":2,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000047',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn2','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":3,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000048',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn3','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":4,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000049',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'city','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":5,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000050',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'state','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":6,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000051',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'country','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":7,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000052',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'zipCode','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":8,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000053',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrType','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"}]},\"filterFields\":[],\"sPaginationType\":\"full_numbers\",\"dom\":\"Bfrtip\",\"columnDefs\":[{\"defaultContent\":\"\",\"targets\":\"_all\"},{\"targets\":0,\"className\":\"select-checkbox\",\"orderable\":false,\"searchable\":false}],\"nodeStructure\":[\"CustomerQuery_ip.customerDetails.addresses\"],\"searching\":false,\"paging\":false,\"info\":false,\"ordering\":false,\"order\":[],\"select\":{\"style\":\"multi\",\"selector\":\"td:first-child\"},\"buttons\":[{\"text\":\"<i class=\\\"fa fa-fw fa-plus\\\"></i>\",\"name\":\"addrow\",\"className\":\"btn btn-outline-info btn-sm\"},{\"text\":\"<i class=\\\"fa fa-fw fa-minus\\\"></i>\",\"name\":\"removerow\",\"className\":\"btn btn-outline-warning btn-sm\"}],\"editable\":\"Y\",\"nodeName\":\"addresses\",\"parentName\":\"customerDetails\",\"serviceName\":\"CustomerQuery_ip\"},{\"id\":\"CustomerQuery_xelerate_000000088\",\"columns\":[{},{\"title\":\"addrLn1\",\"data\":\"addrLn1\",\"type\":\"text\"},{\"title\":\"addrLn2\",\"data\":\"addrLn2\",\"type\":\"text\"},{\"title\":\"addrLn3\",\"data\":\"addrLn3\",\"type\":\"text\"},{\"title\":\"city\",\"data\":\"city\",\"type\":\"text\"},{\"title\":\"state\",\"data\":\"state\",\"type\":\"text\"},{\"title\":\"country\",\"data\":\"country\",\"type\":\"text\"},{\"title\":\"zipCode\",\"data\":\"zipCode\",\"type\":\"text\"},{\"title\":\"addrType\",\"data\":\"addrType\",\"type\":\"text\"}],\"editInfo\":{\"inputTypes\":[{\"column\":0,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000089',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn1','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":1,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000090',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn2','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":2,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000091',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn3','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":3,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000092',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'city','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":4,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000093',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'state','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":5,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000094',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'country','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":6,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000095',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'zipCode','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":7,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000096',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrType','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"}]},\"filterFields\":[],\"sPaginationType\":\"full_numbers\",\"dom\":\"Bfrtip\",\"columnDefs\":[{\"defaultContent\":\"\",\"targets\":\"_all\"},{\"targets\":0,\"className\":\"select-checkbox\",\"orderable\":false,\"searchable\":false}],\"nodeStructure\":[\"CustomerQuery_op.customerDetails.addresses\"],\"searching\":false,\"paging\":false,\"info\":false,\"ordering\":false,\"order\":[],\"select\":{\"style\":\"multi\",\"selector\":\"td:first-child\"},\"buttons\":[],\"nodeName\":\"addresses\",\"parentName\":\"customerDetails\",\"serviceName\":\"CustomerQuery_op\"}],\"rootName\":\"CustomerQuery\",\"category\":\"XELERATE\",\"entities\":[\"beCustomer\"],\"services\":[\"CustomerQuery_ip\",\"CustomerQuery_op\"],\"dataStructure\":{\"CustomerQuery_ip\":{\"customerDetails\":{\"custNumber\":\"\",\"basicDetails\":{\"custId\":\"\",\"custSince\":\"\",\"custStatus\":\"\"},\"personalDetails\":{\"custDoB\":\"\",\"custProfession\":\"\",\"gender\":\"\",\"maritalStatus\":\"\",\"custName\":{\"personTitle\":\"\",\"firstName\":\"\",\"middleName\":\"\",\"lastName\":\"\"}},\"addresses\":[{\"addrLn1\":\"\",\"addrLn2\":\"\",\"addrLn3\":\"\",\"city\":\"\",\"state\":\"\",\"country\":\"\",\"zipCode\":\"\",\"addrType\":\"\"}]}},\"CustomerQuery_op\":{\"customerDetails\":{\"custNumber\":\"\",\"basicDetails\":{\"custId\":\"\",\"custSince\":\"\",\"custStatus\":\"\"},\"personalDetails\":{\"custDoB\":\"\",\"custProfession\":\"\",\"gender\":\"\",\"maritalStatus\":\"\",\"custName\":{\"personTitle\":\"\",\"firstName\":\"\",\"middleName\":\"\",\"lastName\":\"\"}},\"addresses\":[{\"addrLn1\":\"\",\"addrLn2\":\"\",\"addrLn3\":\"\",\"city\":\"\",\"state\":\"\",\"country\":\"\",\"zipCode\":\"\",\"addrType\":\"\"}]}}},\"containers\":[{\"id\":\"CustomerQuery_xelerate_000000045\",\"info\":[\"TABLE\",\"full_numbers\",\"\"],\"nodes\":[\"addresses\"],\"parNodes\":[\"customerDetails\"],\"service\":\"CustomerQuery_ip\"},{\"id\":\"CustomerQuery_xelerate_000000088\",\"info\":[\"TABLE\",\"full_numbers\",\"\"],\"nodes\":[\"addresses\"],\"parNodes\":[\"customerDetails\"],\"service\":\"CustomerQuery_op\"}]}");

/***/ }),

/***/ "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/customerquery_xelerate/customerquery_xelerate.component.ts ***!
  \****************************************************************************/
/*! exports provided: CustomerQuery_xelerate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerQuery_xelerate", function() { return CustomerQuery_xelerate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/templates/SimpleBaseClass.component */ "./src/shared/templates/SimpleBaseClass.component.ts");
/* harmony import */ var _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerquery_xelerate-info.json */ "./src/app/customerquery_xelerate/customerquery_xelerate-info.json");
var _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./customerquery_xelerate-info.json */ "./src/app/customerquery_xelerate/customerquery_xelerate-info.json", 1);
/* harmony import */ var src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/maintenance.service */ "./src/shared/services/maintenance.service.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-text/xelerate-text.component */ "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
/* harmony import */ var _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/simple/directives/non-filter-fields.directive */ "./src/shared/simple/directives/non-filter-fields.directive.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-button/xelerate-button.component */ "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/directives/datatable.directive */ "./src/shared/directives/datatable.directive.ts");
/* harmony import */ var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/launcher.directive */ "./src/shared/directives/launcher.directive.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-input/xelerate-input.component */ "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
/* harmony import */ var _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives/datepicker.directive */ "./src/shared/directives/datepicker.directive.ts");
/* harmony import */ var _shared_directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/formcontrols.directive */ "./src/shared/directives/formcontrols.directive.ts");


















const _c0 = function () { return []; };
const _c1 = function () { return {}; };
const _c2 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000054", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1)))("fc", ctx_r0.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].custNumber);
} }
const _c3 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000022", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c4 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000023", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control XDTPCKR", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "isDate": true, "type": "text" }; };
const _c5 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000024", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](22, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custSince);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](33, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custStatus);
} }
const _c6 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000041", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control XDTPCKR", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "isDate": true, "type": "text" }; };
const _c7 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000042", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c8 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000043", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c9 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000044", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "xelerate-input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custDoB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custProfession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].maritalStatus);
} }
const _c10 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000037", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "personTitle", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c11 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000038", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "firstName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c12 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000039", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "middleName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c13 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000040", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "lastName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "xelerate-input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].personTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].middleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].lastName);
} }
const _c14 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000097", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](7, _c14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1)))("fc", ctx_r4.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].custNumber);
} }
const _c15 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000065", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c16 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000066", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control XDTPCKR", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "isDate": true, "type": "text" }; };
const _c17 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000067", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](11, _c15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](22, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custSince);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](33, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custStatus);
} }
const _c18 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000084", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control XDTPCKR", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "isDate": true, "type": "text" }; };
const _c19 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000085", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c20 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000086", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c21 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000087", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Attribute", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "xelerate-input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custDoB);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custProfession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].maritalStatus);
} }
const _c22 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000080", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "personTitle", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c23 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000081", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "firstName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c24 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000082", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "middleName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
const _c25 = function (a2, a3, a4, a22, a23) { return { "id": "CustomerQuery_xelerate_000000083", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": true, "wrapclass": "form-group ronly", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "lastName", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "text" }; };
function CustomerQuery_xelerate_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "xelerate-input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "xelerate-input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "xelerate-input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].personTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].middleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].lastName);
} }
const _c26 = function () { return { "width": "100%" }; };
const _c27 = function (a2, a3, a4, a22, a23) { return { "id": "headerTitle", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box", "ctrlclass": "", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "", "wType": "TEXT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "tooltiptrigger": "", "tooltipposition": "", "type": "h5" }; };
const _c28 = function () { return { "max-width": "35px" }; };
const _c29 = function (a3, a4, a5, a23, a24) { return { "id": "querybtn", "click": "query", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box inlineblock m-0", "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "fa fa-search", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
const _c30 = function (a3, a4, a5, a23, a24) { return { "id": "newbtn", "click": "create", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box inlineblock m-0", "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "fa fa-plus", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
const _c31 = function (a3, a4, a5, a23, a24) { return { "id": "savebtn", "click": "modify", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box inlineblock m-0", "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "fa fa-save", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
const _c32 = function (a3, a4, a5, a23, a24) { return { "id": "deletebtn", "click": "delete", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box inlineblock m-0", "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "fa fa-trash", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
const _c33 = function (a3, a4, a5, a23, a24) { return { "id": "clearbtn", "click": "clear", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box inlineblock m-0", "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "N", "iconclass": "fa fa-remove", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
class CustomerQuery_xelerate extends src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__["SimpleBaseClass"] {
    constructor(xelerate, cp, changeDetectorRef, elmRef, maintenance) {
        super(xelerate, _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3__);
        this.xelerate = xelerate;
        this.cp = cp;
        this.changeDetectorRef = changeDetectorRef;
        this.elmRef = elmRef;
        this.maintenance = maintenance;
        this.name = "CustomerQuery_xelerate";
    }
    ngAfterViewInit() {
        this.personalizeView();
    }
    personalizeView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prefs = yield this.xelerate.server.getContent({ url: "assets/" + this.name + "_prefs.json" });
            this.xelerate.personalizeWidgets(this);
        });
    }
}
CustomerQuery_xelerate.ɵfac = function CustomerQuery_xelerate_Factory(t) { return new (t || CustomerQuery_xelerate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["Maintenance"])); };
CustomerQuery_xelerate.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerQuery_xelerate, selectors: [["app-customerquery_xelerate"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 119, vars: 80, consts: [[1, "pagehtml"], ["id", "body", 1, "main-section", "p-3"], ["id", "CustomerQuery_xelerate_000000001", 1, "panel-tabs"], ["id", "tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-default"], [1, "nav-item"], ["id", "CustomerQuery_xelerate_000000002_title", "data-toggle", "tab", "href", "#CustomerQuery_xelerate_000000002", 1, "nav-link", "active"], ["id", "CustomerQuery_xelerate_000000055_title", "data-toggle", "tab", "href", "#CustomerQuery_xelerate_000000055", 1, "nav-link"], ["id", "tabcontent", 1, "tab-content"], ["id", "CustomerQuery_xelerate_000000002", "role", "tabpanel", "aria-labelledby", "tabpage", 1, "tab-pane", "active"], ["id", "CustomerQuery_xelerate_000000004", 1, "navbar-tsp"], ["id", "navbarcontent", 1, ""], ["id", "grids", 1, "xle-grid"], ["id", "CustomerQuery_xelerate_000000006", 1, "grid-item", "xle-sm-col2", "xle-ti-col2", "xle-lg-col2", "xle-md-col2", "xle-xl-col4"], ["id", "headerTitlewrap", "filterFields", "N", 1, "form-group", 2, "width", "100%", 3, "info"], ["id", "CustomerQuery_xelerate_000000008", 1, "grid-item", "xle-sm-col10", "xle-ti-col10", "xle-lg-col10", "xle-md-col10", "xle-xl-col8", "xle-h-right", "xle-el-h"], ["id", "querybtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "newbtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "savebtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "deletebtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "clearbtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "CustomerQuery_xelerate_000000014", 1, "form-horizontal", "pb-4"], [1, "form-header"], ["id", "CustomerQuery_xelerate_000000014_lbl", 1, "form-title"], [4, "ngIf"], ["id", "CustomerQuery_xelerate_000000017", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000017_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000025", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000025_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000031", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000031_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000045", 1, "table-data"], [1, "table-header"], ["id", "CustomerQuery_xelerate_000000045_lbl", 1, "table-title"], ["id", "CustomerQuery_xelerate_000000045", 1, "table", "table-hover", "dataTable"], ["type", "checkbox", 1, "selectAll"], ["id", "CustomerQuery_xelerate_000000055", "role", "tabpanel", "aria-labelledby", "tabpage", 1, "tab-pane"], ["id", "CustomerQuery_xelerate_000000057", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000057_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000060", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000060_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000068", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000068_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000074", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000074_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000088", 1, "table-data"], ["id", "CustomerQuery_xelerate_000000088_lbl", 1, "table-title"], ["id", "CustomerQuery_xelerate_000000088", 1, "table", "table-hover", "dataTable"], ["id", "launcherdiv", "launcher", "CustomerQuery_xelerate"], ["id", "CustomerQuery_xelerate_000000016", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000054wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000019", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000022wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000020", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000023wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000021", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000024wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000027", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000041wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000028", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000042wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000029", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000043wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000030", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000044wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000033", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000037wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000034", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000038wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000035", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000039wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000036", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000040wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000059", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000097wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000062", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000065wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000063", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000066wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000064", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000067wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000070", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000084wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000071", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000085wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000072", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000086wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000073", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000087wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000076", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000080wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000077", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000081wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000078", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000082wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000079", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000083wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"]], template: function CustomerQuery_xelerate_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nav", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "xelerate-text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "xelerate-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "xelerate-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "xelerate-button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "xelerate-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "xelerate-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CustomerQuery_xelerate_ng_container_29_Template, 4, 13, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CustomerQuery_xelerate_ng_container_34_Template, 8, 39, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CustomerQuery_xelerate_ng_container_39_Template, 10, 52, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CustomerQuery_xelerate_ng_container_44_Template, 10, 52, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "addrLn1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "addrLn2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "addrLn3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "zipCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "addrType");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CustomerQuery_xelerate_ng_container_76_Template, 4, 13, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CustomerQuery_xelerate_ng_container_81_Template, 8, 39, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CustomerQuery_xelerate_ng_container_86_Template, 10, 52, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h2", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, CustomerQuery_xelerate_ng_container_91_Template, 10, 52, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "table", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "addrLn1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "addrLn2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "addrLn3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "state");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "zipCode");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "addrType");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](19, _c27, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c26), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](30, _c29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c28), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](41, _c30, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c28), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](52, _c31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](47, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](48, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c28), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](63, _c32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](59, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](60, _c28), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](61, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](62, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](74, _c33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](69, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](70, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](71, _c28), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"] && ctx.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"] && ctx.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"]);
    } }, directives: [_shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_7__["XelerateTextComponent"], _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_8__["NonFilterFields"], _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_9__["XelerateButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_11__["XelerateDatatableDirective"], _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__["LauncherDirective"], _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_13__["XelerateInputComponent"], _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_14__["XelerateDatepickerDirective"], _shared_directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_15__["XelerateFormControlsDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerQuery_xelerate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-customerquery_xelerate",
                templateUrl: "./customerquery_xelerate.component.html",
                providers: [src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"] }, { type: src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["Maintenance"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login-info.json":
/*!***************************************!*\
  !*** ./src/app/login/login-info.json ***!
  \***************************************/
/*! exports provided: services, containers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"services\":[],\"containers\":[]}");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/templates/SimpleBaseClass.component */ "./src/shared/templates/SimpleBaseClass.component.ts");
/* harmony import */ var _login_info_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-info.json */ "./src/app/login/login-info.json");
var _login_info_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./login-info.json */ "./src/app/login/login-info.json", 1);
/* harmony import */ var src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-image/xelerate-image.component */ "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts");
/* harmony import */ var _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/simple/directives/non-filter-fields.directive */ "./src/shared/simple/directives/non-filter-fields.directive.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-text/xelerate-text.component */ "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-input/xelerate-input.component */ "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
/* harmony import */ var _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/datepicker.directive */ "./src/shared/directives/datepicker.directive.ts");
/* harmony import */ var _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/xelerate-elements/xelerate-button/xelerate-button.component */ "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
/* harmony import */ var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/launcher.directive */ "./src/shared/directives/launcher.directive.ts");















const _c0 = function () { return []; };
const _c1 = function () { return { "max-width": "230px" }; };
const _c2 = function () { return {}; };
const _c3 = function (a2, a3, a4, a22, a23) { return { "id": "wt_tab_041_000000317", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "assets/img/logo-bancolombia.png", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box", "ctrlclass": " img-fluid", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "Y", "iconclass": "", "wType": "IMAGE", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "tooltiptrigger": "hover", "tooltipposition": "top", src: "assets/img/logo-bancolombia.png", "type": "image" }; };
const _c4 = function (a2, a3, a4, a22, a23) { return { "id": "wt_tab_041_000000320", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "Welcome To Xelerate", "disabled": false, "readonly": false, "wrapclass": "form-group", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box", "ctrlclass": "", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "Y", "iconclass": "", "wType": "TEXT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "tooltiptrigger": "", "tooltipposition": "", "type": "h5" }; };
const _c5 = function () { return { "max-width": "250px" }; };
const _c6 = function (a2, a3, a4, a22, a23) { return { "id": "customerId", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "Customer Id", "value": "Admin", "disabled": false, "readonly": false, "wrapclass": "form-group mb-0", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "hover", "tooltipposition": "top", "type": "text" }; };
const _c7 = function (a2, a3, a4, a22, a23) { return { "id": "password", "form": "Y", "options": a2, "tags": a3, "styles": a4, "placeholder": "", "value": "admin", "disabled": false, "readonly": false, "wrapclass": "form-group mb-0", "lblwrapclass": "form-control-label hidden ", "ctrlwrapclass": "form-control-box", "ctrlclass": "form-control", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "", "labelReq": "Y", "iconclass": "", "wType": "INPUT", "tooltiptext": "", "directives": a22, "refs": a23, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "hover", "tooltipposition": "top", "type": "password" }; };
const _c8 = function () { return { "width": "230px" }; };
const _c9 = function (a3, a4, a5, a23, a24) { return { "id": "wt_tab_041_000000326", "click": "usrExt.launchLanding", "form": "Y", "options": a3, "tags": a4, "styles": a5, "placeholder": "", "value": "Login", "disabled": false, "readonly": false, "wrapclass": "form-group  inlineblock", "lblwrapclass": "form-control-label", "ctrlwrapclass": "form-control-box", "ctrlclass": "btn btn-info btn-round btn-block", "optclass": "", "optwrapclass": "", "tagCtrlWrpCls": "", "lblclass": "", "title": "Login", "labelReq": "Y", "iconclass": "", "wType": "BUTTON", "tooltiptext": "", "directives": a23, "refs": a24, "tooltiptitle": "", "iconposition": "RIGHT", "iconsize": " ", "tooltiptrigger": "", "tooltipposition": "", "type": "button" }; };
class Login extends src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__["SimpleBaseClass"] {
    constructor(xelerate, cp, changeDetectorRef, elmRef) {
        super(xelerate, _login_info_json__WEBPACK_IMPORTED_MODULE_3__);
        this.xelerate = xelerate;
        this.cp = cp;
        this.changeDetectorRef = changeDetectorRef;
        this.elmRef = elmRef;
        this.name = "Login";
    }
    ngAfterViewInit() {
        this.personalizeView();
    }
    personalizeView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prefs = yield this.xelerate.server.getContent({ url: "assets/" + this.name + "_prefs.json" });
            this.xelerate.personalizeWidgets(this);
        });
    }
    launchLanding() {
        // this.xlmx.loadComponent({compClass:custEnt_detailed});
        let usrId = this.xelerate.getValue("customerId");
        let password = this.xelerate.getValue("password");
        let req = { header: { userId: usrId, reqType: "Login" }, body: { userId: usrId, password: password } };
        let params = { callback: this.loginCB, context: this };
        params['reqObj'] = req;
        this.xelerate.server.postRequest(params);
    }
    loginCB(params) {
        console.log(params);
        if (params.resObj.header.status == "SUCCESS") {
            this.xelerate.data.transferData.set("userId", params.resObj.header.userId);
            this.xelerate.loadComponent({ compName: "CustomerQuery_xelerate" });
        }
    }
}
Login.ɵfac = function Login_Factory(t) { return new (t || Login)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
Login.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Login, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 60, consts: [[1, "pagehtml"], ["id", "body", 1, "main-section"], ["id", "wt_tab_041_000000310", 1, "spanel-tsp", 2, "height", "100vh", "background-image", "url(\"assets/img/login-banner.jpg\")", "background-size", "cover"], ["id", "grids", 1, "xle-grid"], ["id", "wt_tab_041_000000312", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col6", "xle-md-col6", "xle-xl-col6"], ["id", "wt_tab_041_000000313", 1, "spanel-tsp", "pt-5"], ["id", "login_form", 1, "form-vertical", "pt-5", 2, "max-width", "500px"], ["id", "wt_tab_041_000000316", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "mb-3", "xle-h-center"], ["id", "wt_tab_041_000000317wrap", "filterFields", "N", 1, "form-group", 2, "max-width", "230px", 3, "info"], ["id", "wt_tab_041_000000319", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center", "xle-v-center"], ["id", "wt_tab_041_000000320wrap", "filterFields", "N", 1, "form-group", 3, "info"], ["id", "wt_tab_041_000000321", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "customerIdwrap", "filterFields", "N", 1, "form-group", "mb-0", 2, "max-width", "250px", 3, "info"], ["id", "wt_tab_041_000000323", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "passwordwrap", "filterFields", "N", 1, "form-group", "mb-0", 2, "max-width", "250px", 3, "info"], ["id", "wt_tab_041_000000325", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "wt_tab_041_000000326wrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "width", "230px", 3, "info"], ["id", "launcherdiv", "launcher", "Login"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "xelerate-image", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "xelerate-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "xelerate-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "xelerate-input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "xelerate-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](10, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](21, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](32, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](43, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c2)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](54, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](49, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](50, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c2)));
    } }, directives: [_shared_xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_6__["XelerateImageComponent"], _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_7__["NonFilterFields"], _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_8__["XelerateTextComponent"], _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_9__["XelerateInputComponent"], _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_10__["XelerateDatepickerDirective"], _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_11__["XelerateButtonComponent"], _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__["LauncherDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Login, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                providers: [src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"] }, { type: src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/LabelCodes.json":
/*!************************************!*\
  !*** ./src/assets/LabelCodes.json ***!
  \************************************/
/*! exports provided: en, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"USER_ID\":\"User Id\",\"PASSWORD\":\"Password\"}}");

/***/ }),

/***/ "./src/assets/Messages.json":
/*!**********************************!*\
  !*** ./src/assets/Messages.json ***!
  \**********************************/
/*! exports provided: en, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"en\":{\"CO-CUST-001\":\"Customer Id is mandatory\",\"CO-CUST-002\":\"Successfully saved the customer details\"}}");

/***/ }),

/***/ "./src/assets/config.json":
/*!********************************!*\
  !*** ./src/assets/config.json ***!
  \********************************/
/*! exports provided: url, firstPage, dateFormat, pageClasses, language, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"url\":\"\",\"firstPage\":\"Login\",\"dateFormat\":\"Y-m-d\",\"pageClasses\":\"\",\"language\":\"en\"}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/directives/datatable.directive.ts":
/*!******************************************************!*\
  !*** ./src/shared/directives/datatable.directive.ts ***!
  \******************************************************/
/*! exports provided: XelerateDatatableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateDatatableDirective", function() { return XelerateDatatableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lib_celledit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/celledit */ "./src/shared/lib/celledit.ts");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");






class XelerateDatatableDirective {
    constructor(table, cp, xelerate) {
        this.table = table;
        this.cp = cp;
        this.xelerate = xelerate;
    }
    ngOnInit() {
        let elm = this.table.nativeElement;
        let tables = this.cp.view.metaInfo.table;
        this.id = elm.id;
        for (let i = 0; i < tables.length; i++) {
            if (tables[i].id == this.id) {
                this.metaData = tables[i];
                let containerInfo = this.cp.view.metaInfo.containersMap[this.id];
                let nodesInfo = containerInfo.nodesObj[0];
                if (nodesInfo) {
                    this.nodeName = nodesInfo.name;
                    this.nodeId = nodesInfo.id;
                    this.serviceName = nodesInfo.serviceName;
                }
                if (jQuery(elm).hasClass('dataTable')) {
                    let param = Object.assign({ elm }, this.metaData);
                    this.dataTableInstance = this.initDataTable(param);
                    this.subscribeToParentUpdates();
                    this.subscribeToWindowResize();
                    this.adddTEvents();
                }
            }
        }
    }
    adddTEvents() {
        jQuery(".selectAll").on("change", (evt) => {
            if (jQuery(evt.target).prop("checked")) {
                this.dataTableInstance.rows().select();
            }
            else {
                this.dataTableInstance.rows().deselect();
            }
        });
        this.dataTableInstance.on('user-select', (e, dt, type, cell, origEvt) => {
            let currRow = cell.index().row;
            let scrComponent = this.dataTableInstance.xelerateDirInstance.cp.view;
            let tableId = jQuery(dt.table().container()).find("table").attr("id");
            this.xelerate.rowAction(scrComponent, tableId, currRow);
            let selectInfo = this.dataTableInstance.xelerateDirInstance.metaData.select;
            if (selectInfo && selectInfo.style == "multi" && !jQuery(origEvt.target).hasClass("select-checkbox")) {
                e.preventDefault();
            }
        });
        this.dataTableInstance.on('page', (e, settings) => {
            let currRow = this.dataTableInstance.cell(':eq(0)', null, { page: 'current' }).index().row;
            let scrComponent = this.dataTableInstance.xelerateDirInstance.cp.view;
            let tableId = jQuery(this.dataTableInstance.table().container()).find("table").attr("id");
            this.xelerate.rowAction(scrComponent, tableId, currRow);
        });
    }
    subscribeToWindowResize() {
        this.xelerate.winResize.asObservable().subscribe((params) => {
            this.dataTableInstance.columns.adjust();
        });
    }
    initDataTable(param) {
        param.columnDefs.map(obj => {
            if (obj.render) {
                obj.render = this.dataTableBukRender;
            }
        });
        param.columns.map(obj => {
            if (obj.title) {
                obj.title = this.xelerate.getLabelDescription(obj.title, this.xelerate.language);
            }
        });
        param.buttons.map(obj => {
            if (obj.name == "add" && !obj.action) {
                obj.action = (e, dt, node, config) => {
                    this.cp.view.newRecord();
                };
            }
            else if (obj.name == "addrow" && !obj.action) {
                obj.action = (e, dt, node, config) => {
                    this.addRow(e, dt, node, config);
                };
            }
            else if (obj.name == "removerow" && !obj.action) {
                obj.action = (e, dt, node, config) => {
                    this.removeRow(e, dt, node, config);
                };
            }
        });
        param.drawCallback = this.drawCallBack;
        let dataTable = jQuery(param.elm).DataTable(param);
        if (param.editable == "Y") {
            let cellEditObj = new _lib_celledit__WEBPACK_IMPORTED_MODULE_1__["CellEdit"](this.xelerate);
            cellEditObj.makeCellsEditable(param.editInfo, dataTable);
        }
        //// Keep xelerate datatable directive instance for any operation based on dom or datatable instance
        dataTable.xelerateDirInstance = this;
        return dataTable;
    }
    removeRow(e, dt, node, config) {
        dt.rows('.selected').remove().draw(false);
    }
    addRow(e, dt, node, config) {
        dt.row.add({}).draw(false);
    }
    drawCallBack(settings) {
        const api = new jQuery.fn.dataTable.Api(settings);
        const pageCount = api.page.info().pages;
        const wrapper = jQuery('#' + settings.sTableId).closest('.dataTables_wrapper');
        const pagination = wrapper.find('.dataTables_paginate');
        const info = wrapper.find('.dataTables_info');
        pagination.toggle(pageCount > 0);
        info.toggle(pageCount > 0);
    }
    dataTableBukRender(data, type, full, meta) {
        return '<a class=\"BUKCLASS\" href=\"JavaScript:void(0);\">' + data + '</a>';
    }
    subscribeToParentUpdates() {
        let data = this.cp.view.ifaceData;
        let dmlStruct = this.metaData.nodeStructure[0];
        let nodeName = dmlStruct;
        let recInd = nodeName.lastIndexOf("[");
        //// Check if it has parent multi rec nodes
        if (recInd > -1) {
            nodeName = nodeName.substr(0, recInd);
            let nodeNameBegining = nodeName.lastIndexOf(".");
            //// extract multirec parent node name
            if (nodeNameBegining > -1) {
                nodeName = nodeName.substr(nodeNameBegining + 1);
            }
            let nodeInfo = this.cp.view.metaInfo.nodesMap[nodeName];
            ///// subscribe to parent record number changes
            if (nodeInfo) {
                this.subscriber = nodeInfo['recordUpdates'].subscribe(() => {
                    //// Re Render table
                    this.renderData(data.getRawValue());
                });
            }
        }
    }
    getTableData(data) {
        let dataObj = this.xelerate.getParentPointer(this.cp.view, this.nodeId, data);
        if (dataObj) {
            dataObj = dataObj[this.nodeName];
        }
        if (_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].isNull(dataObj))
            dataObj = [];
        return dataObj;
    }
    renderData(data) {
        let tblData = this.getTableData(data);
        this.dataTableInstance.clear();
        this.dataTableInstance.rows.add(tblData);
        this.dataTableInstance.draw();
        jQuery(this.table.nativeElement).css('width', '');
        this.dataTableInstance.columns.adjust().responsive.recalc();
        //// Attaching rowAction to update metaInfo required for childs
        this.dataTableInstance.on('select', (e, dt, type, indexes) => {
            if ((type === 'row') && (indexes[0] !== this.xelerate.getCurRec(this.nodeId, this.cp.view))) {
                this.xelerate.rowAction(this.cp.view, this.id, indexes[0], null);
            }
        });
    }
    retrieveData(data) {
        let tblData = this.dataTableInstance.rows().data().toArray();
        if (data) {
            let parentDataPtr = this.xelerate.getParentPointer(this.cp.view, this.nodeId, data);
            parentDataPtr[this.nodeName] = tblData;
        }
        return tblData;
    }
    ngOnDestroy() {
        this.metaData = null;
        if (this.dataTableInstance) {
            this.dataTableInstance.xelerateDirInstance = null;
            this.dataTableInstance.destroy();
        }
        if (this.subscriber) {
            this.subscriber.unsubscribe();
        }
    }
}
XelerateDatatableDirective.ɵfac = function XelerateDatatableDirective_Factory(t) { return new (t || XelerateDatatableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"])); };
XelerateDatatableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: XelerateDatatableDirective, selectors: [["", 8, "datatable"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDatatableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '.dataTable'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"] }, { type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/directives/datepicker.directive.ts":
/*!*******************************************************!*\
  !*** ./src/shared/directives/datepicker.directive.ts ***!
  \*******************************************************/
/*! exports provided: XelerateDatepickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateDatepickerDirective", function() { return XelerateDatepickerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr */ "../../../../../node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../xelerate-elements/xelerate-input/xelerate-input.component */ "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");





class XelerateDatepickerDirective {
    constructor(component, xelerate, renderer) {
        this.component = component;
        this.xelerate = xelerate;
        this.renderer = renderer;
        this.selectorClass = 'XDTPCKR';
    }
    ngAfterViewInit() {
        this.ctrlObj = this.component.control.nativeElement;
        if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.enrich();
            let appDateFormat = this.xelerate.appConfig.dateFormat;
            let inpDateFormat = this.info.dateformat ? this.info.dateformat : this.xelerate.appConfig.dateFormat;
            this.defaultParams = {
                dateFormat: inpDateFormat,
                allowInput: this.info.allowinput ? this.info.allowinput : true,
                enableTime: this.info.timepickerreq == 'Y' ? true : false,
                altInput: appDateFormat != inpDateFormat ? true : false,
                altFormat: appDateFormat,
                wrap: true,
                mode: this.info.rangepicker ? "range" : "single",
                minDate: "1000-01-01",
                maxDate: "9999-12-31"
            };
            this.initDate();
        }
    }
    enrich() {
        /// Include to directive arrays for later utility access
        this.component.info.directives.push(this);
        /// Registring for state changes as altInput might need propagation of change
        this.stateChanges = this.component.getStateChangesObservable().subscribe((state) => {
            if (this.pickrInstance && this.pickrInstance.altInput) {
                if (state === "ENABLED") {
                    this.renderer.removeAttribute(this.pickrInstance.altInput, 'disabled');
                }
                else {
                    this.renderer.setAttribute(this.pickrInstance.altInput, 'disabled', 'true');
                }
            }
        });
        /// Register for value changes as datepicker should be updated in programatical value setting
        this.valueChanges = this.component.fc.valueChanges.subscribe((value) => {
            this.pickrInstance.setDate(value, false);
        });
    }
    initDate(initParams) {
        let finalParams = Object.assign(Object.assign({}, this.defaultParams), initParams);
        if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.pickrInstance = flatpickr__WEBPACK_IMPORTED_MODULE_1___default()(jQuery(this.ctrlObj).parent()[0], finalParams);
            if (jQuery(this.ctrlObj).prop("readonly"))
                this.pickrInstance._input.setAttribute("disabled", "disabled");
        }
    }
    cleanupEnrichment() {
        let index = this.component.info.directives.indexOf(this);
        if (index > -1) {
            this.component.info.directives.splice(index, 1);
        }
        if (this.stateChanges) {
            this.stateChanges.unsubscribe();
        }
        if (this.valueChanges) {
            this.valueChanges.unsubscribe();
        }
    }
    destroyDate() {
        if (this.pickrInstance) {
            this.pickrInstance.destroy();
        }
    }
    ngOnDestroy() {
        this.cleanupEnrichment();
        this.destroyDate();
    }
}
XelerateDatepickerDirective.ɵfac = function XelerateDatepickerDirective_Factory(t) { return new (t || XelerateDatepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__["XelerateInputComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
XelerateDatepickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: XelerateDatepickerDirective, selectors: [["xelerate-input"]], inputs: { info: "info" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDatepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'xelerate-input'
            }]
    }], function () { return [{ type: _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__["XelerateInputComponent"] }, { type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/directives/dropdown.directive.ts":
/*!*****************************************************!*\
  !*** ./src/shared/directives/dropdown.directive.ts ***!
  \*****************************************************/
/*! exports provided: XelerateDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateDropdownDirective", function() { return XelerateDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xelerate-elements/xelerate-select/xelerate-select.component */ "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");




class XelerateDropdownDirective {
    constructor(component, xelerate) {
        this.component = component;
        this.xelerate = xelerate;
        this.selectorClass = 'show-tick';
    }
    ngAfterViewInit() {
        this.jQCtrlObj = jQuery(this.component.control.nativeElement);
        this.component.info.directives.push(this);
        this.initSelect();
        this.optionUpdates = this.component.getOptionUpdatesObservable().subscribe(() => {
            //// Should we reinitialize the dropdown plugin? Its working without re initialization also now
        });
        //// Register for value changes and update select2 instance value to render in UI
        this.valueChanges = this.component.fc.valueChanges.subscribe((val) => {
            this.jQCtrlObj.trigger('change.select2');
        });
    }
    initSelect(initParams) {
        let directive = this;
        let multiple = this.component.info.multiple == "Y" ? true : false;
        let finalParams = Object.assign({ theme: 'bootstrap4', multiple: multiple, width: '99%' }, initParams);
        if (this.jQCtrlObj.hasClass(this.selectorClass)) {
            this.jQCtrlObj.select2(finalParams);
            this.jQCtrlObj.on('select2:select', function (e) {
                // var data = e.params.data;	Is it required?
                let val = this.value;
                directive.component.fc.setValue(val);
                directive.component.control.nativeElement.dispatchEvent(directive.xelerate.createEvent('change'));
            });
        }
    }
    ngOnDestroy() {
        if (this.jQCtrlObj.hasClass(this.selectorClass)) {
            this.jQCtrlObj.select2('destroy');
        }
        this.optionUpdates.unsubscribe();
        this.valueChanges.unsubscribe();
    }
}
XelerateDropdownDirective.ɵfac = function XelerateDropdownDirective_Factory(t) { return new (t || XelerateDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__["XelerateSelectComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"])); };
XelerateDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: XelerateDropdownDirective, selectors: [["xelerate-select"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'xelerate-select'
            }]
    }], function () { return [{ type: _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__["XelerateSelectComponent"] }, { type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/directives/formcontrols.directive.ts":
/*!*********************************************************!*\
  !*** ./src/shared/directives/formcontrols.directive.ts ***!
  \*********************************************************/
/*! exports provided: XelerateFormControlsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateFormControlsDirective", function() { return XelerateFormControlsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xelerate-elements/abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");



class XelerateFormControlsDirective {
    constructor(vcr, component) {
        this.vcr = vcr;
        this.component = component;
    }
}
XelerateFormControlsDirective.ɵfac = function XelerateFormControlsDirective_Factory(t) { return new (t || XelerateFormControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"])); };
XelerateFormControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: XelerateFormControlsDirective, selectors: [["", "fc", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateFormControlsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[fc]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/directives/launcher.directive.ts":
/*!*****************************************************!*\
  !*** ./src/shared/directives/launcher.directive.ts ***!
  \*****************************************************/
/*! exports provided: LauncherDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LauncherDirective", function() { return LauncherDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");



class LauncherDirective {
    constructor(vcr, xelerate) {
        this.vcr = vcr;
        this.xelerate = xelerate;
    }
    ngOnInit() {
        this.xelerate.launcherRefs.push(this);
    }
    ngOnDestroy() {
        let index = this.xelerate.launcherRefs.indexOf(this);
        if (index > -1) {
            this.xelerate.launcherRefs.splice(index, 1);
        }
    }
}
LauncherDirective.ɵfac = function LauncherDirective_Factory(t) { return new (t || LauncherDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"])); };
LauncherDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LauncherDirective, selectors: [["", "launcher", ""]], inputs: { launcher: "launcher" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LauncherDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[launcher]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"] }]; }, { launcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/directives/popover.directive.ts":
/*!****************************************************!*\
  !*** ./src/shared/directives/popover.directive.ts ***!
  \****************************************************/
/*! exports provided: XeleratePopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XeleratePopoverDirective", function() { return XeleratePopoverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");



class XeleratePopoverDirective {
    constructor(popover, xelerate, renderer) {
        this.popover = popover;
        this.xelerate = xelerate;
        this.renderer = renderer;
        this.selectorClass = 'popover-pnl';
    }
    ngAfterViewInit() {
        this.ctrlObj = this.popover.nativeElement;
        if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            let jQElm = jQuery(this.ctrlObj);
            let triggerInfo = this.xpopover;
            let triggerBehaviour = triggerInfo.triggerBehaviour == "CLICK" ? "click" : "hover";
            this.defaultParams = {
                content: this.ctrlObj,
                hideOnClick: 'toggle',
                trigger: triggerBehaviour,
                interactive: true,
                theme: 'light-border',
                maxWidth: '100vw',
                animate: 'shift-toward',
                onCreate: (instance) => {
                    jQuery(instance.popper).find(".XSELECT").each((ind, elm) => {
                        let parentElm = jQuery(elm).parents(".popover-pnl")[0];
                        jQuery(elm).select2({ "dropdownParent": parentElm });
                    });
                }
            };
            this.initPopover();
        }
    }
    initPopover(initParams) {
        let finalParams = Object.assign(Object.assign({}, this.defaultParams), initParams);
        if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.xelerate.tippy(document.getElementById(this.xpopover.triggerId), finalParams);
        }
    }
    ngOnDestroy() {
    }
}
XeleratePopoverDirective.ɵfac = function XeleratePopoverDirective_Factory(t) { return new (t || XeleratePopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
XeleratePopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: XeleratePopoverDirective, selectors: [["", "xpopover", ""]], inputs: { xpopover: "xpopover" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XeleratePopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[xpopover]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { xpopover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/directives/validator.directive.ts":
/*!******************************************************!*\
  !*** ./src/shared/directives/validator.directive.ts ***!
  \******************************************************/
/*! exports provided: xelerateElmValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xelerateElmValidator", function() { return xelerateElmValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

function xelerateElmValidator(elm, additionalValidators) {
    let validators = [];
    if (elm.info.wrapclass.indexOf("required") > -1) {
        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
    }
    validators.push((control) => {
        if (control.value == "R") {
            return { 'customErr': true };
        }
        return null;
    });
    validators = validators.concat(additionalValidators);
    return validators;
    /* return (control: AbstractControl): {[key: string]: boolean} | null => {
        if(Validators.maxLength(2)){
            return {'customErr': true};
        }
        return null;
    } */
}


/***/ }),

/***/ "./src/shared/lib/celledit.ts":
/*!************************************!*\
  !*** ./src/shared/lib/celledit.ts ***!
  \************************************/
/*! exports provided: CellEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellEdit", function() { return CellEdit; });
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "../../../../../node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);

class CellEdit {
    constructor(xelerate) {
        this.xelerate = xelerate;
    }
    makeCellsEditable(settings, dtInst) {
        var table = dtInst.table();
        var currRow;
        this.xelerate.jQuery.fn.extend({
            // UPDATE
            updateEditableCell: (callingElement) => {
                // Need to redeclare table here for situations where we have more than one datatable on the page. See issue6 on github
                var table = this.xelerate.jQuery(callingElement).closest("table").DataTable().table();
                var row = table.row(this.xelerate.jQuery(callingElement).parents('tr'));
                var cell = table.cell(this.xelerate.jQuery(callingElement).parents('td, th'));
                var columnIndex = cell.index().column;
                var inputField = this.getInputField(callingElement);
                // Update
                var newValue = inputField.val();
                //Krish changes - Update checked/unchecked value incase of a checkbox//
                if (inputField.attr("type") == "checkbox") {
                    if (inputField.prop("checked"))
                        newValue = inputField.attr("checkedValue");
                    else
                        newValue = inputField.attr("uncheckedValue");
                }
                if (!newValue && ((settings.allowNulls) && settings.allowNulls != true)) {
                    // If columns specified
                    if (settings.allowNulls.columns) {
                        // If current column allows nulls
                        if (settings.allowNulls.columns.indexOf(columnIndex) > -1) {
                            _update(newValue);
                        }
                        else {
                            _addValidationCss();
                        }
                        // No columns allow null
                    }
                    else if (!newValue) {
                        _addValidationCss();
                    }
                    //All columns allow null
                }
                else if (newValue && settings.onValidate) {
                    if (settings.onValidate(cell, row, newValue)) {
                        _update(newValue);
                    }
                    else {
                        _addValidationCss();
                    }
                }
                else {
                    _update(newValue, inputField);
                }
                function _addValidationCss() {
                    // Show validation error
                    if (settings.allowNulls.errorClass) {
                        this.xelerate.jQuery(inputField).addClass(settings.allowNulls.errorClass);
                    }
                    else {
                        this.xelerate.jQuery(inputField).css({ "border": "red solid 1px" });
                    }
                }
                function _update(newValue, inputObj) {
                    var oldValue = cell.data();
                    var desc;
                    var parentTd;
                    /*  if(inputObj && inputObj.length > 0 && inputObj[0].tagName == "SELECT"){
                        desc = inputObj.find("[value="+newValue+"]").text();
                        parentTd = inputObj.parent();
                     } */
                    cell.data(newValue);
                    /*  if(inputObj && inputObj.length > 0 && inputObj[0].tagName == "SELECT"){
                         parentTd.text(desc);
                     } */
                    //Return cell & row.
                    // settings.onUpdate(cell, row, oldValue);
                }
                // Get current page
                var currentPageIndex = table.page.info().page;
                //Redraw table
                table.page(currentPageIndex).draw(false);
            },
            // CANCEL
            cancelEditableCell: (callingElement) => {
                var table = this.xelerate.jQuery(callingElement.closest("table")).DataTable().table();
                var cell = table.cell(this.xelerate.jQuery(callingElement).parents('td, th'));
                // Set cell to it's original value
                cell.data(cell.data());
                // Redraw table
                table.draw();
            }
        });
        // Destroy
        if (settings === "destroy") {
            this.xelerate.jQuery(table.body()).off("click", "td");
            table = null;
        }
        if (table != null) {
            // On cell click
            // Krish changes to invoke editable on double click //
            this.xelerate.jQuery(table.body()).on('dblclick', 'tr', (evt) => {
                var tds = this.xelerate.jQuery(evt.currentTarget).children("td");
                this.xelerate.jQuery.each(tds, (index, pThis, val) => {
                    var currentColumnIndex = table.cell(pThis).index().column;
                    // DETERMINE WHAT COLUMNS CAN BE EDITED
                    if ((settings.columns && settings.columns.indexOf(currentColumnIndex) > -1) || (!settings.columns)) {
                        var row = table.row(this.xelerate.jQuery(pThis).parents('tr'));
                        //editableCellsRow = row;
                        var cell = table.cell(pThis).node();
                        var oldValue = table.cell(pThis).data();
                        // Sanitize value
                        oldValue = this.sanitizeCellValue(oldValue);
                        // Show input
                        if (!this.xelerate.jQuery(cell).find('input').length && !this.xelerate.jQuery(cell).find('select').length && !this.xelerate.jQuery(cell).find('textarea').length && this.xelerate.jQuery(cell).css("display") != "none") {
                            // Input CSS
                            //if(settings.inputTypes && settings.inputTypes[0].column != 0)
                            //	currentColumnIndex = currentColumnIndex + 1;
                            var input = this.getInputHtml(currentColumnIndex, settings, oldValue);
                            this.xelerate.jQuery(cell).html(input.html);
                            if (this.xelerate.jQuery(input.html).find("input").hasClass("datepicker")) {
                                let appDateFormat = this.xelerate.appConfig.dateFormat;
                                let settingsObj = settings.inputTypes.filter((inpObj) => {
                                    if (inpObj.column == currentColumnIndex) {
                                        return inpObj;
                                    }
                                });
                                let inputSetting = settingsObj[0];
                                let inpDateFormat = inputSetting.options.dateformat ? inputSetting.options.dateformat : this.xelerate.appConfig.dateFormat;
                                let defaultParams = {
                                    dateFormat: inpDateFormat,
                                    allowInput: inputSetting.options.allowinput ? inputSetting.options.allowinput : true,
                                    enableTime: inputSetting.options.timepickerreq == 'Y' ? true : false,
                                    altInput: appDateFormat != inpDateFormat ? true : false,
                                    altFormat: appDateFormat
                                };
                                let finalParams = Object.assign(Object.assign({}, defaultParams), inputSetting.options.userSettings);
                                var self = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()(this.xelerate.jQuery('.datepicker')[0], finalParams);
                            }
                            else if (this.xelerate.jQuery(input.html).find("select").hasClass('select2init')) {
                                this.xelerate.jQuery(".select2init").select2({ 'width': '100%' });
                            }
                            if (input.focus) {
                                this.xelerate.jQuery('#ejbeatycelledit').focus();
                            }
                        }
                    }
                });
            });
            //Krish changes..update the edited row on click of some other row only.
            this.xelerate.jQuery(this.xelerate.jQuery(table.container()).find("table")).on('click', (evt) => {
                let tbl = this.xelerate.jQuery(".tbl_edit").parents("table:first");
                if (tbl[0] != undefined) {
                    let editInst = tbl.DataTable();
                    let curCell = this.xelerate.jQuery(evt.target).closest("td").not(".dataTables_empty")[0];
                    currRow = curCell ? editInst.table().cell(curCell).index().row : -1;
                    let editRow = editInst.table().cell(this.xelerate.jQuery(".tbl_edit").parents("td:first")[0]).index().row;
                    //let editRowObj = editRowObjMap[this.xelerate.jQuery(".tbl_edit").parents("table:first").attr("id")];
                    //Darshan changes: added event on container to allow save on header click
                    //currRow = table.cell(this.xelerate.jQuery(evt.currentTarget).children("td")[0]).index().row;
                    if (editRow != undefined && editRow != currRow) {
                        let editRowObj = this.xelerate.jQuery(".tbl_edit").parents("tr:first");
                        var tds = editRowObj.children("td");
                        this.xelerate.jQuery.each(tds, (index, pThis, val) => {
                            if (this.xelerate.jQuery(pThis).find('input').length > 0) {
                                let inpElm = this.xelerate.jQuery(pThis).find('input')[0];
                                this.xelerate.jQuery(inpElm).updateEditableCell(inpElm);
                            }
                            else if (this.xelerate.jQuery(pThis).find('select').length > 0) {
                                let ddnObj = this.xelerate.jQuery(pThis).find('select')[0];
                                this.xelerate.jQuery(ddnObj).updateEditableCell(ddnObj);
                            }
                        });
                    }
                    evt.stopPropagation();
                }
            });
        }
    }
    getInputHtml(currentColumnIndex, settings, oldValue) {
        var inputSetting, inputType, input, inputCss, confirmCss, cancelCss, startWrapperHtml = '', endWrapperHtml = '', listenToKeys = false;
        input = { "focus": true, "html": null };
        if (settings.inputTypes) {
            this.xelerate.jQuery.each(settings.inputTypes, function (index, setting) {
                if (setting.column == currentColumnIndex) {
                    inputSetting = setting;
                    inputType = inputSetting.type.toLowerCase();
                }
            });
        }
        if (settings.inputCss) {
            inputCss = settings.inputCss;
        }
        if (settings.wrapperHtml) {
            var elements = settings.wrapperHtml.split('{content}');
            if (elements.length === 2) {
                startWrapperHtml = elements[0];
                endWrapperHtml = elements[1];
            }
        }
        if (settings.confirmationButton) {
            if (settings.confirmationButton.listenToKeys) {
                listenToKeys = settings.confirmationButton.listenToKeys;
            }
            confirmCss = settings.confirmationButton.confirmCss;
            cancelCss = settings.confirmationButton.cancelCss;
            inputType = inputType + "-confirm";
        }
        //Krish changes -- addition of checkbox control //
        if (inputSetting) {
            switch (inputType) {
                case "list":
                    input.html = this.getDropdown(inputSetting.info, oldValue);
                    input.focus = false;
                    break;
                case "list-confirm": // List w/ confirm
                    input.html = startWrapperHtml + "<select class='" + inputCss + "'>";
                    this.xelerate.jQuery.each(inputSetting.options, function (index, option) {
                        if (oldValue == option.value) {
                            input.html = input.html + "<option value='" + option.value + "' selected>" + option.display + "</option>";
                        }
                        else {
                            input.html = input.html + "<option value='" + option.value + "' >" + option.display + "</option>";
                        }
                    });
                    input.html = input.html + "</select>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this);'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                    input.focus = false;
                    break;
                case "datepicker": //Both datepicker options work best when confirming the values
                case "datepicker-confirm":
                    input.html = this.getInputBox(inputSetting.info, oldValue, inputSetting.type);
                    break;
                case "text-confirm": // text input w/ confirm
                    input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {this.xelerate.jQuery(this).updateEditableCell(this);} else if (event.keyCode===27) {this.xelerate.jQuery(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                    break;
                case "undefined-confirm": // text input w/ confirm
                    input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {this.xelerate.jQuery(this).updateEditableCell(this);} else if (event.keyCode===27) {this.xelerate.jQuery(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                    break;
                case "textarea":
                case "textarea-confirm":
                    input.html = startWrapperHtml + "<textarea id='ejbeatycelledit' class='" + inputCss + "'>" + oldValue + "</textarea><a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                    break;
                case "checkbox":
                    input.html = this.getCheckBox(inputSetting.info, oldValue);
                    break;
                case "number-confirm":
                    input.html = startWrapperHtml + "<input id='ejbeatycelledit' type='number' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {this.xelerate.jQuery(this).updateEditableCell(this);} else if (event.keyCode===27) {this.xelerate.jQuery(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                    break;
                case "number":
                    input.html = this.getInputBox(inputSetting.info, oldValue, inputSetting.type);
                    break;
                default: // text input
                    input.html = this.getInputBox(inputSetting.info, oldValue, inputSetting.type);
                    break;
            }
        }
        return input;
    }
    getInputField(callingElement) {
        // Update datatables cell value
        var inputField;
        switch (this.xelerate.jQuery(callingElement).prop('nodeName').toLowerCase()) {
            case 'a': // This means they're using confirmation buttons
                if (this.xelerate.jQuery(callingElement).siblings('input').length > 0) {
                    inputField = this.xelerate.jQuery(callingElement).siblings('input');
                }
                if (this.xelerate.jQuery(callingElement).siblings('select').length > 0) {
                    inputField = this.xelerate.jQuery(callingElement).siblings('select');
                }
                if (this.xelerate.jQuery(callingElement).siblings('textarea').length > 0) {
                    inputField = this.xelerate.jQuery(callingElement).siblings('textarea');
                }
                break;
            default:
                inputField = this.xelerate.jQuery(callingElement);
        }
        return inputField;
    }
    sanitizeCellValue(cellValue) {
        if (typeof (cellValue) === 'undefined' || cellValue === null || cellValue.length < 1) {
            return "";
        }
        // If not a number
        if (isNaN(cellValue)) {
            // escape single quote
            cellValue = cellValue.replace(/'/g, "&#39;");
        }
        return cellValue;
    }
    getInputBox(paramsObj, oldVal, inputType) {
        paramsObj = paramsObj.replace(/'/g, "\"");
        paramsObj = JSON.parse(paramsObj);
        let html;
        let mainWrapClass = "", mainWrapId = "", labelWrapClass = "", labelWrapId = "", labelClass = "", labelId = "", labelFor = "", ctrlWrapClass = "", ctrlWrapId = "", ctrlId = "", ctrlClass = "", ctrlType = "", ctrlPlaceHolder = "", ctrlReadonly = "";
        if (paramsObj.wrapClass)
            mainWrapClass = " class='" + paramsObj.wrapClass + "'";
        if (paramsObj.lblwrapclass)
            labelWrapClass = " class='" + paramsObj.lblwrapclass + "'";
        if (paramsObj.lblclass)
            labelClass = " class='" + paramsObj.lblclass + "'";
        if (paramsObj.ctrlwrapclass)
            ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
        if (inputType == "datepicker")
            paramsObj.ctrlclass = paramsObj.ctrlclass + " datepicker tbl_edit";
        else
            paramsObj.ctrlclass = paramsObj.ctrlclass + " tbl_edit";
        if (paramsObj.ctrlclass)
            ctrlClass = " class='" + paramsObj.ctrlclass + "'";
        if (paramsObj.type)
            ctrlType = " type='" + paramsObj.type + "'";
        if (paramsObj.placeholder)
            ctrlPlaceHolder = " placeholder='" + paramsObj.placeholder + "'";
        if (paramsObj.readonly)
            ctrlReadonly = " readonly='" + paramsObj.readonly + "'";
        if (paramsObj.id) {
            mainWrapId = " id='" + paramsObj.id + "wrap'";
            labelWrapId = " id='" + paramsObj.id + "labelwrap'";
            labelId = " id='" + paramsObj.id + "label'";
            labelFor = " for='" + paramsObj.id + "'";
            ctrlWrapId = " id='" + paramsObj.id + "controlwrap'";
            ctrlId = " id='" + paramsObj.id + "'";
        }
        html = "<div" + mainWrapId + mainWrapClass + ">";
        /*  html = html + "<div"+ labelWrapId + labelWrapClass +">";
         html = html + "<label"+ labelId + labelClass + labelFor +">";
         if(paramsObj.title)
             html = html + paramsObj.title;
         html = html + "</label>";
         html = html + "</div>"; */
        html = html + "<div" + ctrlWrapId + ctrlWrapClass + ">";
        if (paramsObj.iconclass) {
            let iconWrapClass = " class='input-group'";
            let iconClass = " class='" + paramsObj.iconclass + "'";
            if (paramsObj.iconsize)
                iconWrapClass = " class='input-group " + paramsObj.iconsize + "'";
            html = html + "<div" + iconWrapClass + ">";
            if (paramsObj.iconposition == "LEFT") {
                html = html + "<div class='input-group-prepend'>";
                html = html + "<span class='input-group-text'>";
                html = html + "<i " + iconClass + "></i>";
                html = html + "</span>";
                html = html + "</div>";
            }
            html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + "/>";
            if (paramsObj.iconposition == "RIGHT") {
                html = html + "<div class='input-group-append'>";
                html = html + "<span class='input-group-text'>";
                html = html + "<i " + iconClass + "></i>";
                html = html + "</span>";
                html = html + "</div>";
            }
        }
        else {
            html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + " value='" + oldVal + "'/></div></div>";
        }
        return html;
    }
    getCheckBox(paramsObj, oldVal) {
        paramsObj = paramsObj.replace(/'/g, "\"");
        paramsObj = JSON.parse(paramsObj);
        let html;
        let mainWrapClass = "", mainWrapId = "", labelClass = "", labelId = "", labelFor = "", ctrlWrapClass = "", ctrlWrapId = "", ctrlId = "", ctrlClass = "", ctrlType = "", ctrlPlaceHolder = "", ctrlReadonly = "", ctrlCheckedVal = "", ctrlUncheckedVal = "", ctrlIndeterminateVal = "";
        ctrlType = " type='checkbox'";
        ctrlCheckedVal = " checkedValue='" + paramsObj.checkedVal + "'";
        ctrlUncheckedVal = " uncheckedValue='" + paramsObj.unCheckedVal + "'";
        ctrlIndeterminateVal = " indeterminateValue='" + paramsObj.indeterminateVal + "'";
        if (paramsObj.wrapClass)
            mainWrapClass = " class='" + paramsObj.wrapClass + "'";
        if (paramsObj.lblclass)
            labelClass = " class='" + paramsObj.lblclass + "'";
        if (paramsObj.ctrlwrapclass)
            ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
        if (paramsObj.ctrlclass)
            ctrlClass = " class='" + paramsObj.ctrlclass + " tbl_edit'";
        else
            ctrlClass = " class='tbl_edit'";
        if (paramsObj.placeholder)
            ctrlPlaceHolder = " placeholder='" + paramsObj.placeholder + "'";
        if (paramsObj.readonly)
            ctrlReadonly = " readonly='" + paramsObj.readonly + "'";
        if (paramsObj.id) {
            mainWrapId = " id='" + paramsObj.id + "wrap'";
            labelId = " id='" + paramsObj.id + "label'";
            labelFor = " for='" + paramsObj.id + "'";
            ctrlWrapId = " id='" + paramsObj.id + "controlwrap'";
            ctrlId = " id='" + paramsObj.id + "'";
        }
        html = "<div" + mainWrapId + mainWrapClass + ">";
        html = html + "<div" + ctrlWrapId + ctrlWrapClass + ">";
        html = html + "<div class='custom-control custom-checkbox'>";
        if (paramsObj.checkedVal == oldVal)
            html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + ctrlCheckedVal + ctrlUncheckedVal + ctrlIndeterminateVal + " checked/>";
        else
            html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + ctrlCheckedVal + ctrlUncheckedVal + ctrlIndeterminateVal + "/>";
        html = html + "<label" + labelId + labelClass + labelFor + ">";
        /* if(paramsObj.title)
            html = html + paramsObj.title; */
        html = html + "</label>";
        html = html + "</div>";
        html = html + "</div>";
        html = html + "</div>";
        return html;
    }
    getDropdown(paramsObj, oldVal) {
        paramsObj = paramsObj.replace(/'/g, "\"");
        paramsObj = JSON.parse(paramsObj);
        paramsObj.ctrlclass = paramsObj.ctrlclass + " select2init  tbl_edit";
        let html;
        let mainWrapClass = "", mainWrapId = "", labelWrapClass = "", labelWrapId = "", labelClass = "", labelId = "", labelFor = "", ctrlWrapClass = "", ctrlWrapId = "", ctrlId = "", ctrlClass = "";
        if (paramsObj.wrapClass)
            mainWrapClass = " class='" + paramsObj.wrapClass + "'";
        if (paramsObj.lblwrapclass)
            labelWrapClass = " class='" + paramsObj.lblwrapclass + "'";
        if (paramsObj.lblclass)
            labelClass = " class='" + paramsObj.lblclass + "'";
        if (paramsObj.ctrlwrapclass)
            ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
        if (paramsObj.ctrlclass)
            ctrlClass = " class='" + paramsObj.ctrlclass + "'";
        if (paramsObj.id) {
            mainWrapId = " id='" + paramsObj.id + "wrap'";
            labelWrapId = " id='" + paramsObj.id + "labelwrap'";
            labelId = " id='" + paramsObj.id + "label'";
            labelFor = " for='" + paramsObj.id + "'";
            ctrlWrapId = " id='" + paramsObj.id + "controlwrap'";
            ctrlId = " id='" + paramsObj.id + "'";
        }
        html = "<div" + mainWrapId + mainWrapClass + ">";
        /*   html = html + "<div"+ labelWrapId + labelWrapClass +">";
          html = html + "<label"+ labelId + labelClass + labelFor +">";
          if(paramsObj.title)
              html = html + paramsObj.title;
          html = html + "</label>";
          html = html + "</div>"; */
        html = html + "<div" + ctrlWrapId + ctrlWrapClass + ">";
        html = html + "<select" + ctrlId + ctrlClass + ">";
        let options = paramsObj.options.length;
        for (let i = 0; i < options; i++) {
            let option = paramsObj.options[i];
            let optionVal = " value='" + option.val + "'";
            if (option.val == oldVal)
                html = html + "<option" + optionVal + " selected>";
            else
                html = html + "<option" + optionVal + ">";
            html = html + option.desc;
            html = html + "</option>";
        }
        html = html + "</select>";
        html = html + "</div>";
        html = html + "</div>";
        return html;
    }
}


/***/ }),

/***/ "./src/shared/pipes/cardslimit.pipe.ts":
/*!*********************************************!*\
  !*** ./src/shared/pipes/cardslimit.pipe.ts ***!
  \*********************************************/
/*! exports provided: CardsLimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsLimitPipe", function() { return CardsLimitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class CardsLimitPipe extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"] {
    constructor() {
        super(...arguments);
        this.cardsLimit = 30;
    }
    transform(value, start = 0, end = this.cardsLimit) {
        if (value == null)
            return value;
        if (!this.supported(value)) {
            throw invalidPipeArgumentError(_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], value);
        }
        return value.slice(start, end);
    }
    supported(obj) { return typeof obj === 'string' || Array.isArray(obj); }
}
CardsLimitPipe.ɵfac = function CardsLimitPipe_Factory(t) { return ɵCardsLimitPipe_BaseFactory(t || CardsLimitPipe); };
CardsLimitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cardslimit", type: CardsLimitPipe, pure: true });
const ɵCardsLimitPipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CardsLimitPipe);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsLimitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'cardslimit'
            }]
    }], null, null); })();
function invalidPipeArgumentError(type, value) {
    return Error(`InvalidPipeArgument: '${value}' for pipe '${type}'`);
}


/***/ }),

/***/ "./src/shared/services/context-provider.service.ts":
/*!*********************************************************!*\
  !*** ./src/shared/services/context-provider.service.ts ***!
  \*********************************************************/
/*! exports provided: ContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextProvider", function() { return ContextProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContextProvider {
    constructor() {
        this.elms = new Array();
        this.elmsMap = new Map();
    }
}
ContextProvider.ɵfac = function ContextProvider_Factory(t) { return new (t || ContextProvider)(); };
ContextProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContextProvider, factory: ContextProvider.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/shared/services/data.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/services/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class DataService {
    constructor(fb) {
        this.fb = fb;
        this.dataGroup = new Map();
        this.transferData = new Map();
    }
    setXelerateObj(xelerateObj) {
        this.xelerate = xelerateObj;
    }
    getServiceData(serviceName) {
        let ifaceDataGroup = this.dataGroup.get(serviceName);
        return ifaceDataGroup.getRawValue();
    }
    loadServiceData(scrComponent, serviceName, data) {
        //// Reset curRec and other metadata
        this.xelerate.traverseNodeChilds(scrComponent, serviceName, null, serviceName, this.xelerate.resetCurRec);
        this.xelerate.traverseNodeChilds(scrComponent, serviceName, null, serviceName, this.xelerate.resetCurPage);
        let servStruct = scrComponent.metaInfo.dataStructure[serviceName];
        let servDataGrp = scrComponent.ifaceData.get(serviceName);
        this.updateDataGroup(servStruct, servDataGrp, data);
        let scrData = this.xelerate.getScrData(scrComponent);
        scrComponent.dataTableDirs.forEach(dtInst => {
            if (dtInst.serviceName == serviceName) {
                dtInst.renderData(scrData);
            }
        });
        this.xelerate.propagateChangeDetection(scrComponent);
    }
    loadScrData(scrComponent, data) {
        //// Reset curRec and other metadata
        let services = scrComponent.metaInfo.services;
        for (let s = 0; s < services.length; s++) {
            const service = services[s];
            this.xelerate.traverseNodeChilds(scrComponent, service, null, service, this.xelerate.resetCurRec);
            this.xelerate.traverseNodeChilds(scrComponent, service, null, service, this.xelerate.resetCurPage);
        }
        // this.xelerate.traverseNodeChilds(scrComponent, scrComponent.metaInfo.rootName, this.xelerate.resetCurRec);
        // this.xelerate.traverseNodeChilds(scrComponent, scrComponent.metaInfo.rootName, this.xelerate.resetCurPage);
        this.updateScrData(scrComponent, data);
        scrComponent.dataTableDirs.forEach(dtInst => {
            dtInst.renderData(data);
        });
        this.xelerate.propagateChangeDetection(scrComponent);
    }
    buildScrData(component) {
        let viewData = component.ifaceData.getRawValue();
        component.dataTableDirs.forEach(dtInst => {
            dtInst.retrieveData(viewData);
        });
        return viewData;
    }
    createScrData(scrName, dataStructure) {
        let ifaceData = {};
        let ifaceDataGroup = this.fb.group({});
        let ifaceStruct = dataStructure ? dataStructure : {};
        this.updateDataGroup(ifaceStruct, ifaceDataGroup, ifaceData);
        this.dataGroup.set(scrName, ifaceDataGroup);
        return ifaceDataGroup;
    }
    updateScrData(scrComponent, scrData, scrStruct) {
        scrStruct = scrStruct ? scrStruct : scrComponent.metaInfo.dataStructure;
        this.updateDataGroup(scrStruct, scrComponent.ifaceData, scrData);
    }
    updateDataGroup(struct, fg, data) {
        for (let c = 0; c < Object.keys(struct).length; c++) {
            const key = Object.keys(struct)[c];
            var cStruct = struct[key];
            var cData = data[key];
            var ufc = fg.get(key);
            if (Array.isArray(cStruct)) {
                var cfa = ufc;
                cfa = this.createFormArray(cStruct, cfa, cData);
                if (!ufc) {
                    fg.addControl(key, cfa);
                }
            }
            else if (typeof cStruct == "object") {
                var cfg = ufc;
                cfg = this.createFormGroup(cStruct, cfg, cData);
                if (!ufc) {
                    fg.addControl(key, cfg);
                }
            }
            else {
                if (ufc) {
                    fg.get(key).setValue(cData);
                }
                else {
                    fg.addControl(key, this.createFormControl(cData, struct, key));
                }
            }
        }
        return fg;
    }
    createFormArray(struct, fa, datas) {
        var cfa = fa ? fa : this.fb.array([]);
        /*
    Dont clear as if childs are formGroup considering performance, so how to clear for premitives?
    cfa.clear();
    */
        datas = datas ? datas : [];
        datas.forEach((elm, index) => {
            if (typeof elm == "object") {
                var cfg = cfa.at(index);
                if (cfg) {
                    //// Update if form group exists already at that index
                    this.createFormGroup(struct[0], cfg, elm);
                }
                else {
                    cfa.push(this.createFormGroup(struct[0], null, elm));
                }
            }
            else {
                cfa.push(this.createFormControl(elm, struct, elm));
            }
        });
        if (cfa.length > datas.length) {
            ///// Remove extra records previously existing
            let cfaLength = cfa.length;
            //// Should be removed from last to avoid array index mismatch
            for (let r = cfaLength - 1; r >= datas.length; r--) {
                cfa.removeAt(r);
            }
        }
        return cfa;
    }
    createFormGroup(struct, fg, data) {
        var cfg = fg ? fg : this.fb.group({});
        data = data ? data : {};
        this.updateDataGroup(struct, cfg, data);
        return cfg;
    }
    createFormControl(value, struct, key) {
        var fc = this.fb.control(value);
        /*  Change listener for each control level required?
    fc.valueChanges.subscribe((v) => {
      console.log("Changed : "+v)
    });
    */
        return fc;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/services/http.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/services/http.service.ts ***!
  \*********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../../../../node_modules/rxjs/_esm2015/operators/index.js");






const xelerateHttpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
class HttpService {
    constructor(httpCli) {
        this.httpCli = httpCli;
        this.url = 'http://localhost:7330/CustGroupBS/';
    }
    setXelerateObj(xelerateObj) {
        this.xelerate = xelerateObj;
    }
    getHeader() {
        let header = {};
        ////// build header required
        return header;
    }
    getHttpOptions(param) {
        let httpOptions = xelerateHttpOptions;
        if (param.httpOptions) {
            httpOptions = Object.assign({ httpOptions }, param.httpOptions);
        }
        return httpOptions;
    }
    postRequest(param) {
        let url = this.url;
        if (param.url) {
            url = param.url;
        }
        /* let req = {};
        req['header'] = this.getHeader();
        req['body'] = param.reqObj; */
        let httpOptions = this.getHttpOptions(param);
        return this.httpCli.post(url, param.reqObj, httpOptions).subscribe((response) => {
            param.resObj = response;
            this.xelerate.invokeCallback(param);
            return response;
        }, (httpError) => {
            if (httpError.error instanceof ProgressEvent) {
                param.error = httpError;
            }
            else {
                param.error = httpError.error;
            }
            this.xelerate.invokeCallback(param);
            return param.error;
        });
    }
    getContent(param) {
        let url = param.url;
        return this.httpCli.get(url, param.options)
            .toPromise().then((response) => {
            param.resObj = response;
            this.xelerate.invokeCallback(param);
            return response;
        }).catch((err) => {
            param.errpr = err;
            this.xelerate.invokeCallback(param);
            return null;
        });
    }
    requestSubscriber(param) {
        let url = this.url;
        if (param.url) {
            url = param.url;
        }
        let req = {};
        req['header'] = this.getHeader();
        req['body'] = param.reqObj;
        let httpOptions = this.getHttpOptions(param);
        return this.httpCli.post(url, param.reqObj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            let key = Object.keys(res)[0];
            return res[key];
        }));
    }
    filterErrorsCB(param) {
        let error = param.error;
        if (!error) {
            let res = param.resObj;
            if (res.errorList.length == 0) {
                if (param.userCB) {
                    param.context = param.userContext;
                    _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].invokeMethod(param, "userCB");
                }
            }
            else {
                error = res.errorList[0];
            }
        }
        if (error) {
            let errorObj = error;
            if (error.errorList) {
                errorObj = error.errorList[0];
            }
            this.xelerate.displayPopup({ type: 'error', text: errorObj.message });
        }
    }
    updateFilterCB(param) {
        param.userCB = param.callback;
        param.userContext = param.context;
        param.callback = this.filterErrorsCB;
        param.context = this;
    }
    findAll(param) {
        param.url = this.url + 'findAll';
        param.reqId = 'findAll';
        param.reqObj = {};
        if (param.filterErrors) {
            this.updateFilterCB(param);
        }
        // let param = {customCB: this.findCB, callback: this.commonCB, context:this, url:this.url+'findAll'};
        this.xelerate.server.postRequest(param);
    }
    findByKey(param) {
        // let param = {customCB: this.findCB, callback: this.filterErrorsCB, context:this, url:this.url+'findByKey'};
        param.url = this.url + 'findByKey';
        param.reqId = 'findByKey';
        param.reqObj = {
            "context": {
                "context-parameters": param.filters
            }
        };
        if (param.filterErrors) {
            this.updateFilterCB(param);
        }
        this.xelerate.server.postRequest(param);
    }
    save(param) {
        param.url = this.url + 'save';
        param.reqObj = {};
        param.reqObj[param.nodeName] = param.records;
        if (param.filterErrors) {
            this.updateFilterCB(param);
        }
        this.xelerate.server.postRequest(param);
    }
    delete(param) {
        param.url = this.url + 'delete';
        param.reqObj = {};
        param.reqObj[param.nodeName] = param.records;
        if (param.filterErrors) {
            this.updateFilterCB(param);
        }
        this.xelerate.server.postRequest(param);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/services/maintenance.service.ts":
/*!****************************************************!*\
  !*** ./src/shared/services/maintenance.service.ts ***!
  \****************************************************/
/*! exports provided: Maintenance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maintenance", function() { return Maintenance; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var _xelerate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xelerate.service */ "./src/shared/services/xelerate.service.ts");




class Maintenance {
    constructor(xelerate) {
        this.xelerate = xelerate;
    }
    query(scrComponent) {
        let scrData = this.xelerate.data.buildScrData(scrComponent);
        let serviceName = scrComponent.metaInfo.entities[0];
        let rootReqNode = scrComponent.metaInfo.rootName + "_ip";
        let rootData = scrData[rootReqNode];
        rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
        let masterKey = Object.keys(rootData)[0];
        // let masterData = UtilityServices.copyJSON(scrData);
        let masterData = rootData[masterKey];
        /* for (const col in masterData) {
            if (masterData.hasOwnProperty(col)) {
                const colVal = masterData[col];
                if(!colVal || typeof(colVal) != "string"){
                    delete masterData[col];
                }
            }
        } */
        let userId = this.xelerate.data.transferData.get("userId");
        let reqObj = {
            "header": { "userId": userId, "reqType": serviceName + "_Query" },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_Query" },
            "body": rootData,
        };
        let params = { callback: this.queryCB, context: this, scrComponent: scrComponent, reqObj: reqObj };
        this.xelerate.server.postRequest(params);
    }
    queryCB(params) {
        let res = params.resObj;
        if (res.header.status == "SUCCESS") {
            let serviceName = params.scrComponent.metaInfo.rootName + "_op";
            this.xelerate.data.loadServiceData(params.scrComponent, serviceName, res.body);
            this.xelerate.jQuery(".nav-item:last").children().click();
        }
        else {
            this.xelerate.displayPopup({ type: 'error', msg: res.header.errMsg });
        }
    }
    delete(scrComponent) {
        let scrData = this.xelerate.data.buildScrData(scrComponent);
        let serviceName = scrComponent.metaInfo.entities[0];
        let rootReqNode = scrComponent.metaInfo.rootName + "_ip";
        let rootData = scrData[rootReqNode];
        rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
        let userId = this.xelerate.data.transferData.get("userId");
        let reqObj = {
            "header": { "userId": userId, "reqType": serviceName + "_Delete" },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_Delete" },
            "body": rootData,
        };
        let params = { callback: this.deleteCB, context: this, reqObj: reqObj };
        this.xelerate.server.postRequest(params);
    }
    deleteCB(params) {
        let resHeader = params.resObj.header;
        if (resHeader.status == "SUCCESS") {
            this.xelerate.displayPopup({ msg: "Successfully deleted" });
        }
        else {
            this.xelerate.displayPopup({ type: 'error', msg: resHeader.errMsg });
        }
    }
    create(scrComponent) {
        this.save(scrComponent, "Create");
    }
    modify(scrComponent) {
        this.save(scrComponent, "Modify");
    }
    save(scrComponent, action) {
        let scrData = this.xelerate.data.buildScrData(scrComponent);
        let serviceName = scrComponent.metaInfo.entities[0];
        let rootReqNode = scrComponent.metaInfo.rootName + "_ip";
        let rootData = scrData[rootReqNode];
        rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
        let userId = this.xelerate.data.transferData.get("userId");
        let reqObj = {
            "header": { "userId": userId, "reqType": serviceName + "_" + action },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_"+action },
            "body": rootData,
        };
        let params = { callback: this.saveCB, context: this, reqObj: reqObj };
        this.xelerate.server.postRequest(params);
    }
    saveCB(params) {
        let resHeader = params.resObj.header;
        if (resHeader.status == "SUCCESS") {
            this.xelerate.displayPopup({ msg: "Successfully saved" });
        }
        else {
            this.xelerate.displayPopup({ type: 'error', msg: resHeader.errMsg });
        }
    }
}
Maintenance.ɵfac = function Maintenance_Factory(t) { return new (t || Maintenance)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"])); };
Maintenance.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Maintenance, factory: Maintenance.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Maintenance, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/services/utility.service.ts":
/*!************************************************!*\
  !*** ./src/shared/services/utility.service.ts ***!
  \************************************************/
/*! exports provided: UtilityServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityServices", function() { return UtilityServices; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UtilityServices {
    static invokeMethod(param, methodName) {
        let method = methodName ? param[methodName] : param[param.methodName];
        if (method) {
            if (param.context) {
                return method.call(param.context, param);
            }
            else {
                return method(param);
            }
        }
        else {
            this.log("Invokation Method Not Found");
        }
    }
    static log(param) {
        //// Check log level and write respectively, Yet to implement
        console.log(param.msg);
        if (param.trace) {
            console.trace();
        }
    }
    static isNull(param) {
        let res = false;
        if ((param === null) || (param === undefined) || (param === "") || (param === "undefined"))
            res = true;
        return res;
    }
    static copyJSON(object) {
        return JSON.parse(JSON.stringify(object));
    }
    static isFunction(param) {
        return typeof (param) === "function";
    }
    static startLoader(domElm) {
        let loader = `<div class="xle-loader-box"><div class="xle-loader"></div></div>`;
        jQuery(domElm).addClass("xle-loader-parent");
        jQuery(domElm).append(loader);
    }
    static stopLoader(domElm) {
        jQuery(domElm).removeClass("xle-loader-parent");
        jQuery(domElm).find(".xle-loader-box").remove();
    }
}
UtilityServices.ɵfac = function UtilityServices_Factory(t) { return new (t || UtilityServices)(); };
UtilityServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityServices, factory: UtilityServices.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shared/services/xelerate.service.ts":
/*!*************************************************!*\
  !*** ./src/shared/services/xelerate.service.ts ***!
  \*************************************************/
/*! exports provided: XelerateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateService", function() { return XelerateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var _directives_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/validator.directive */ "./src/shared/directives/validator.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../../../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/shared/services/data.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ "./src/shared/services/http.service.ts");
/* harmony import */ var _app_app_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../app/app.components */ "./src/app/app.components.ts");










class XelerateService {
    constructor(data, server, compProvider, resolver, injector, rf) {
        this.data = data;
        this.server = server;
        this.compProvider = compProvider;
        this.resolver = resolver;
        this.injector = injector;
        this.rf = rf;
        this.scrHierarchy = { xChilds: [], xId: "root", xParent: null };
        this.launcherRefs = new Array();
        this.screens = new Map();
        this.jQuery = jQuery;
        this.tippy = tippy;
        this.window = window;
        this.winResize = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        //// Yet another reference for elements in all screens
        this.elms = new Array();
        this.elmsMap = new Map();
        //Hierarchy level
        this.currentExpandLevel = 2;
        this.currentCollapseLevel = 2;
        // Constants
        this.separator = "~";
        window.xelerate = this;
        server.setXelerateObj(this);
        data.setXelerateObj(this);
        this.renderer = rf.createRenderer(null, null);
    }
    isEqual(obj1, obj2) {
        if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
            return true;
        }
        else {
            return false;
        }
    }
    /*
    Input : param - red from assets folder consisting of app configurations
    */
    initAppConfig(param) {
        this.appConfig = param;
        this.language = param.language ? param.language : "en";
        this.server.url = param.url ? param.url : window.location.href;
        if (param.pageClasses) {
            jQuery('body').addClass(param.pageClasses);
        }
        this.initAppEvents();
    }
    initLabelsMap(param) {
        this.labelsMap = param;
        //// Create empty object to avoid errors in renderer
        if (!this.labelsMap[this.language]) {
            console.log("Provided labels not found with the current language!!!");
            this.labelsMap[this.language] = {};
        }
    }
    initMessagesMap(param) {
        this.msgsMap = param;
        //// Create empty object to avoid errors in renderer
        if (!this.msgsMap[this.language]) {
            console.log("Provided message codes not found with current language!!!");
            this.msgsMap[this.language] = {};
        }
    }
    initAppEvents() {
        jQuery(window).on("resize", (e) => {
            this.winResize.next();
        });
    }
    initScreen(scrComponent) {
        //// Keep screen obj in map for any global reference
        let hierarchy = scrComponent.hierarchy;
        this.screens.set(hierarchy.xId, scrComponent);
        //// component reference to cp for access in directives
        scrComponent.cp.view = scrComponent;
        //// create empty data model
        scrComponent.ifaceData = this.data.createScrData(hierarchy.xId, scrComponent.metaInfo.dataStructure);
        this.initNodesMap(scrComponent);
        this.initContainersMap(scrComponent);
        this.initLayout(scrComponent);
        this.addGlobalEvents();
        //	this.initPopovers(scrComponent);
        //// Add class and property for dom filter and reference
        if (scrComponent.screenType == "MAIN")
            this.renderer.addClass(scrComponent.elmRef.nativeElement, "mainScr");
        else
            this.renderer.removeClass(jQuery(scrComponent.elmRef.nativeElement).find(".pagehtml")[0], "pagehtml");
        this.renderer.addClass(scrComponent.elmRef.nativeElement, "xelerateScr");
        this.renderer.setProperty(scrComponent.elmRef.nativeElement, "xelerateScrInst", scrComponent);
        //// Remove page specific class for subscreens
        if (hierarchy.xParent) {
            let pageBody = scrComponent.elmRef.nativeElement.querySelector("section");
            this.renderer.removeClass(pageBody, "main-section");
        }
    }
    addGlobalEvents() {
        jQuery(document).on("click", (evt) => {
            if (jQuery(".tbl_edit")[0] != undefined && !jQuery(evt.target).hasClass("tbl_edit")) {
                jQuery(".tbl_edit").parents("table:first").trigger("click");
            }
        });
    }
    initLayout(scrComponent) {
        let isHeaderCollapse = scrComponent.metaInfo.headerCollapse;
        if (isHeaderCollapse)
            this.makeHeaderCollapse();
    }
    initPopovers(scrComponent) {
        let jQscr = jQuery(scrComponent.elmRef.nativeElement);
        jQscr.find(".popover-pnl").each((ind, elm) => {
            let jQElm = jQuery(elm);
            let triggerInfo = jQElm.data("x-triggerinfo");
            let triggerBehaviour = triggerInfo.triggerBehaviour == "CLICK" ? "click" : "hover";
            this.tippy(document.getElementById(triggerInfo.triggerId), {
                content: elm,
                hideOnClick: 'toggle',
                trigger: triggerBehaviour,
                interactive: true,
                theme: 'light-border',
                maxWidth: '100vw',
                animate: 'shift-toward',
                onCreate: (instance) => {
                    jQuery(instance.popper).find(".XSELECT").each((ind, elm) => {
                        let parentElm = jQuery(elm).parents(".popover-pnl")[0];
                        jQuery(elm).select2({ "dropdownParent": parentElm });
                    });
                }
            });
        });
    }
    initContainersMap(scrComponent) {
        scrComponent.metaInfo.containersMap = {};
        let cntrs = scrComponent.metaInfo.containers ? scrComponent.metaInfo.containers : [];
        for (let c = 0; c < cntrs.length; c++) {
            const cntr = cntrs[c];
            let cntrObj = { id: cntr.id, curPage: 0 };
            let info = cntr.info;
            if (info) {
                cntrObj['type'] = info[0];
                cntrObj['pageType'] = info[1];
                cntrObj['pageSize'] = info[2] ? parseInt(info[2]) : 99999;
            }
            let nodes = cntr.nodes;
            if (nodes) {
                cntrObj['nodes'] = nodes;
                cntrObj['nodesObj'] = [];
                for (let n = 0; n < nodes.length; n++) {
                    let nodeName = nodes[n];
                    let parNodeName = cntr.parNodes[n];
                    let nodeId = this.getNodeId(nodeName, cntr.parNodes[n], cntr.service);
                    let nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
                    nodeObj.cntrObj = cntrObj;
                    cntrObj['nodesObj'].push(nodeObj);
                }
            }
            scrComponent.metaInfo.containersMap[cntr.id] = cntrObj;
        }
    }
    initNodesMap(scrComponent) {
        //// create nodes map to hold curRec, multiRec etc..
        scrComponent.metaInfo.nodesMap = {};
        let struct = scrComponent.metaInfo.dataStructure;
        let services = scrComponent.metaInfo.services;
        this.createNodesMap(scrComponent, struct, [], null, null);
    }
    createNodesMap(scrComponent, struct, parents, serviceName, mrParent) {
        let childs = [];
        let immediateParent = parents[parents.length - 1];
        if (Array.isArray(struct)) {
            struct.forEach((elm, index) => {
                if (typeof elm == "object") {
                    childs = this.createNodesMap(scrComponent, elm, parents, serviceName, immediateParent);
                }
            });
        }
        else if (typeof struct == "object") {
            let isRootNode = serviceName ? false : true;
            for (let c = 0; c < Object.keys(struct).length; c++) {
                const key = Object.keys(struct)[c];
                if (isRootNode) {
                    serviceName = key;
                }
                var elm = struct[key];
                if (typeof elm == "object") {
                    let nodeId = serviceName + this.separator + key;
                    let parentName = immediateParent;
                    if (immediateParent) {
                        let splits = immediateParent.split(this.separator);
                        if (splits.length > 2) {
                            parentName = immediateParent.split(this.separator)[2];
                            nodeId = serviceName + this.separator + parentName + this.separator + key;
                        }
                        else {
                            nodeId = serviceName + this.separator + serviceName + this.separator + key;
                        }
                    }
                    let curParents = [...parents, nodeId];
                    let nodeInfo = { id: nodeId, name: key, parentName, parents, serviceName, curRec: 0 };
                    //// Update nodes map at begining as childs can access for parent rec updates
                    scrComponent.metaInfo.nodesMap[nodeId] = nodeInfo;
                    if (Array.isArray(elm)) {
                        nodeInfo['multiRec'] = "Y";
                        nodeInfo['mrParent'] = mrParent;
                        //// Private variable for observable subject
                        nodeInfo['_recordUpdates'] = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
                        //// Public variable for observars registration
                        nodeInfo['recordUpdates'] = nodeInfo['_recordUpdates'].asObservable();
                        //// Default registeration if mrParent is not null to clear filterData
                        if (mrParent) {
                            let mrNodeInfo = scrComponent.metaInfo.nodesMap[mrParent];
                            // mrNodeInfo['recordUpdates'].subscribe(this.mrParentRecUpdated);
                            mrNodeInfo['recordUpdates'].subscribe((p) => {
                                nodeInfo['filteredData'] = null;
                            });
                        }
                    }
                    else {
                        nodeInfo['multiRec'] = "N";
                    }
                    nodeInfo['childs'] = this.createNodesMap(scrComponent, elm, curParents, serviceName, mrParent);
                    childs.push(key);
                }
            }
        }
        return childs;
    }
    traverseNodeChilds(scrComponent, nodeName, parNodeName, serviceName, executer) {
        let nodeId = this.getNodeId(nodeName, parNodeName, serviceName);
        let nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
        executer(scrComponent, nodeObj);
        if (nodeObj.childs.length > 0) {
            for (let c = 0; c < nodeObj.childs.length; c++) {
                const childNodeName = nodeObj.childs[c];
                this.traverseNodeChilds(scrComponent, childNodeName, nodeName, serviceName, executer);
            }
        }
    }
    destroyContainersMap(scrComponent) {
        let cntrsMap = scrComponent.metaInfo.containersMap;
        for (const cntrName in cntrsMap) {
            if (cntrsMap.hasOwnProperty(cntrName)) {
                const cntrObj = cntrsMap[cntrName];
                cntrObj['nodesObj'] = [];
                cntrsMap[cntrName] = null;
            }
        }
    }
    destroyNodesMap(scrComponent) {
        let nodesMap = scrComponent.metaInfo.nodesMap;
        for (const nodeId in nodesMap) {
            if (nodesMap.hasOwnProperty(nodeId)) {
                const nodeObj = nodesMap[nodeId];
                nodeObj.cntrObj = null;
                if (nodeObj.multiRec == "Y") {
                    nodeObj['_recordUpdates'].complete();
                }
                nodesMap[nodeId] = null;
            }
        }
    }
    destroyScreen(scrComponent) {
        let hierarchy = scrComponent.hierarchy;
        let scrId = hierarchy.xId;
        try {
            ////// Clean up Hierarchy references
            let parentHierarchy = hierarchy.xParent ? hierarchy.xParent : this.scrHierarchy;
            let chIndex = parentHierarchy.xChilds.indexOf(hierarchy);
            /// Clean up from parent hierarchy
            if (chIndex > -1) {
                parentHierarchy.xChilds.splice(chIndex, 1);
            }
            delete parentHierarchy[scrComponent.name];
            /// Nullify circular references
            hierarchy.xInstance = null;
            hierarchy.xParent = null;
            scrComponent.cp.view = null;
            this.destroyNodesMap(scrComponent);
            this.destroyContainersMap(scrComponent);
            ////// Clean up global references
            this.screens.delete(scrId);
            this.data.dataGroup.delete(scrId);
        }
        catch (_a) {
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({ msg: ("Failed to get component : " + scrComponent.name) });
        }
        //// Non mandatory content clean up
        if (this.data.transferData.has(scrId)) {
            this.data.transferData.delete(scrId);
        }
    }
    /*navigateBack(){
        this.router.navigate(["../"], { skipLocationChange: true });
        this.currentScreen = this.previousScreen;
        this.previousScreen = "";
    }
    
    navigateToScreen(scrName) {
        this.previousScreen = this.currentScreen;
        this.router.navigate([scrName], { skipLocationChange: true });
        this.currentScreen = scrName;
    }*/
    invokeScrCleanUp(parentDOM, clearHtml) {
        // clear xelerate screens launched in this dom
        let childScrs = jQuery(parentDOM).find(".xelerateScr");
        for (let s = 0; s < childScrs.length; s++) {
            const childScrInst = childScrs[s].xelerateScrInst;
            childScrInst.compRef.destroy();
            // childScrInst.ngOnDestroy();
        }
        if (clearHtml) {
            let childLength = parentDOM.children.length;
            for (let c = childLength; c > 0; c--) {
                this.renderer.removeChild(parentDOM, parentDOM.children[c - 1]);
            }
        }
    }
    createHierarchy(launchType, parentDOM, compInstance) {
        let hierarchy = { xChilds: [], xInstance: compInstance };
        if (launchType == "SUB") {
            let parent = jQuery(parentDOM).closest(".xelerateScr")[0].xelerateScrInst;
            let parentHierarchy = parent.hierarchy;
            hierarchy.xParent = parentHierarchy;
            hierarchy.xId = parentHierarchy.xId + "." + compInstance.name;
            parentHierarchy[compInstance.name] = hierarchy;
            parentHierarchy.xChilds.push(hierarchy);
        }
        else {
            hierarchy.xParent = null;
            hierarchy.xId = compInstance.name;
            this.scrHierarchy[compInstance.name] = hierarchy;
        }
        return hierarchy;
    }
    changeLanguage(param) {
        //// Avoid errors if lang code not found in provided langs map by keeping empty obj
        if (this.labelsMap[param.language]) {
            this.language = param.language;
            this.propagateChangeDetection(param.component);
        }
        else {
            this.displayPopup({ type: 'error', msg: "Labels not maintained for provided langauge!!!" });
        }
    }
    getNodeId(nodeName, parNodeName, serviceName) {
        return parNodeName ? serviceName + this.separator + parNodeName + this.separator + nodeName : serviceName + this.separator + nodeName;
    }
    getLabelDescription(code, language) {
        let langObj = this.labelsMap[language];
        return langObj[code] ? langObj[code] : code;
    }
    getMessageCodeDescription(code, language) {
        let msgsMap = this.msgsMap[language];
        return msgsMap[code] ? msgsMap[code] : code;
    }
    /*
    Input : param - consists of the following...
        compName: Name of the component as in Class name
        refId: viewcontainer reference id available in xelerate.launcherRefs array
        parentDOM: parent dom object to place the child component ()
        customImport: method for customised developer import returning a module
        clearContainer: clear the previous content of the reference container
    */
    loadComponent(param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let componentClass;
            if (!param.compClass) {
                componentClass = yield this.compProvider.getComponent(param);
            }
            else {
                componentClass = param.compClass;
            }
            //// Proceed if component class found
            if (componentClass) {
                let component;
                let parentDOM = param.parentDOM;
                if (parentDOM) {
                    //// If parent dom is provided to load component
                    const factory = this.resolver.resolveComponentFactory(componentClass);
                    component = factory.create(this.injector);
                    if (param.clearContainer != false) {
                        this.invokeScrCleanUp(parentDOM, true);
                    }
                    this.renderer.appendChild(parentDOM, component.location.nativeElement);
                }
                else {
                    let refId = param.refId;
                    //// If refId not provided, use default refId
                    if (!refId) {
                        refId = "xelerateLauncher1";
                    }
                    //// If veiw container ref is provided to load component
                    for (let r = 0; r < this.launcherRefs.length; r++) {
                        const launcher = this.launcherRefs[r];
                        if (launcher.launcher == refId) {
                            // let ref = this.launcherRefs.get(param.refId);
                            let vcr = launcher.vcr;
                            parentDOM = vcr.element.nativeElement;
                            let factory = this.resolver.resolveComponentFactory(componentClass);
                            component = factory.create(this.injector);
                            if (param.clearContainer != false) {
                                //// Check if any plain dom screen launch had happened in vcr for clean up
                                let vcrDom = vcr.element.nativeElement;
                                let cleanUpDom = vcrDom;
                                for (let v = 0; v < vcr.length; v++) {
                                    cleanUpDom = jQuery(cleanUpDom).next()[0];
                                    this.invokeScrCleanUp(cleanUpDom, false);
                                }
                                vcr.clear();
                            }
                            vcr.insert(component.hostView);
                            // component = vcr.createComponent(factory);
                            break;
                        }
                    }
                }
                component.instance.hierarchy = this.createHierarchy(param.launchType, parentDOM, component.instance);
                if (param.launchType == "SUB")
                    component.instance.screenType = "SUB";
                else
                    component.instance.screenType = "MAIN";
                component.instance.compRef = component;
                component.instance.transData = param.transData;
                component.changeDetectorRef.detectChanges();
            }
            else {
                _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({ msg: "Failed to get component : " + param.compName, trace: true });
            }
        });
    }
    loadSubComponent(param) {
        //// Should it call loadComponent method as its also doing same thing?
        param.launchType = "SUB";
        this.loadComponent(param);
    }
    /*
    Input : param - consists of the following...
        callback: method to be called on each menu click
        context: context to be applied for the callback method
    */
    invokeCallback(param) {
        if (param.callback) {
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].invokeMethod(param, "callback");
        }
    }
    propagateChangeDetection(component) {
        component.changeDetectorRef.detectChanges();
    }
    /*
    Input : param - consists of the following...
        msg: message to be displayed in popup
        type: type of message. Ex : info, success, error
        callback: method to be called on each menu click
        context: context to be applied for the callback method
        ... As same object is passed to sweat alert, all sweat alert options can also be passed
    */
    displayPopup(param) {
        if (param.msg) {
            param.text = param.msg;
        }
        else if (param.code) {
            param.text = this.getMessageCodeDescription(param.code, this.language);
        }
        Swal.fire(param).then((res) => {
            param.popupState = res;
            this.invokeCallback(param);
        });
    }
    personalizeWidgets(scrComponent) {
        if (scrComponent.prefs) {
            try {
                for (let e = 0; e < scrComponent.cp.elms.length; e++) {
                    const elm = scrComponent.cp.elms[e];
                    let pref = scrComponent.prefs[elm.info.id];
                    if (pref) {
                        pref.widgetType = "ELEMENT";
                        this.personalizeWidget(pref, elm);
                    }
                }
                for (const key in scrComponent.prefs) {
                    if (scrComponent.prefs.hasOwnProperty(key)) {
                        const pref = scrComponent.prefs[key];
                        if (pref.widgetType != "ELEMENT") {
                            this.personalizeWidget(pref);
                        }
                    }
                }
                this.propagateChangeDetection(scrComponent);
            }
            catch (e) {
                _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({ msg: "Failed in personalization of screen : " + scrComponent.name, trace: true });
            }
        }
    }
    personalizeWidget(elmPref, elmObj) {
        if (elmPref) {
            for (let a = 0; a < elmPref.actions.length; a++) {
                const action = elmPref.actions[a];
                if (action == "LBLCHANGE") {
                    let langDesc = this.getLabelDescription(elmPref.lblCode, this.language);
                    if (elmObj) {
                        elmObj.title = langDesc;
                    }
                    else {
                        let lblObj = document.getElementById(elmPref.ctrlId + "_lbl");
                        if (lblObj) {
                            lblObj.textContent = langDesc;
                        }
                    }
                }
                else if (action == "REARRANGE") {
                    let parObj = document.getElementById(elmPref.parentId);
                    if (elmObj) {
                        this.renderer.appendChild(parObj, elmObj.elmRef.nativeElement);
                    }
                    else {
                        this.renderer.appendChild(parObj, document.getElementById(elmPref.ctrlId));
                    }
                }
                else if (action == "VISIBILITY") {
                    if (elmPref.visible == "N") {
                        if (elmObj) {
                            elmObj.hide();
                        }
                        else {
                            this.renderer.addClass(document.getElementById(elmPref.ctrlId), "hidden");
                        }
                    }
                    else {
                        if (elmObj) {
                            elmObj.show();
                        }
                        else {
                            this.renderer.removeClass(document.getElementById(elmPref.ctrlId), "hidden");
                        }
                    }
                }
            }
        }
    }
    /*
    Input : param - consists of the following...
        menus: Array of menu objects to be created
        parentId: dom Id to inject the menu created
        callback: method to be called on each menu click
        context: context to be applied for the callback method
    */
    initMenu_old(param) {
        let initObj = { core: {}, plugins: ["themes", "types"] };
        initObj.core.themes = {};
        initObj.core.data = param.menus;
        initObj.core.dblclick_toggle = false;
        initObj.core.themes.dots = false;
        initObj.types = {
            "child": {
                "icon": false
            }
        };
        let parentDom = jQuery("#" + param.parentId);
        parentDom.jstree(initObj);
        parentDom.bind("select_node.jstree", jQuery.proxy(function (e, data) {
            if (data.node.children && data.node.children.length > 0) {
                parentDom.jstree("toggle_node", data.node);
            }
            else {
                this.invokeCallback(Object.assign(Object.assign({}, param), { e, data }));
            }
        }, this));
        jQuery(".sidebar").on({
            mouseenter: () => {
                jQuery(".sidebar").addClass("hover-active");
                if (jQuery(".jstree-node[aria-selected=true]>ul")[0] != undefined)
                    jQuery(".jstree-node[aria-selected=true]>ul").slideDown();
                else
                    jQuery(".jstree-node[aria-selected=true]").parent().slideDown();
            },
            mouseleave: () => {
                jQuery(".sidebar").removeClass("hover-active");
                jQuery(".jstree-children").not(".jstree-container-ul").slideUp();
            }
        });
    }
    /*
    called on each multi record click, updates meta info and notifies child node to render
        scrComponent: Screen component object
        containerId: acted multirec containerId
        recNo: acted record number in container
    */
    rowAction(scrComponent, containerId, recNo, nodeObj) {
        let lskip = false;
        if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.preRowAction)) {
            lskip = scrComponent.preRowAction(containerId, recNo, nodeObj);
        }
        if (!lskip) {
            let cntrInfo = scrComponent.metaInfo.containersMap[containerId];
            //// Loop to get multi nodes mapping info?
            let nodeInfo = cntrInfo.nodesObj[0];
            let nodeName = nodeInfo.name;
            let curRec = this.getCurRec(nodeInfo.id, scrComponent);
            if (recNo != curRec) {
                this.setCurRec(scrComponent, containerId, recNo);
                //// Keep propagating change detection as rowAction might be called by non angular widgets also
                this.propagateChangeDetection(scrComponent);
                this.traverseNodeChilds(scrComponent, nodeName, nodeInfo.parentName, nodeInfo.serviceName, this.emitRecordUpdates);
            }
        }
        if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.postRowAction)) {
            scrComponent.postRowAction(containerId, recNo, nodeObj);
        }
    }
    emitRecordUpdates(scrComponent, nodeObj) {
        if (nodeObj.multiRec == "Y") {
            nodeObj['_recordUpdates'].next(nodeObj);
        }
    }
    setCurRec(scrComponent, containerId, recNo) {
        let cntrInfo = scrComponent.metaInfo.containersMap[containerId];
        //// Loop to get multi nodes mapping info?
        let nodeInfo = cntrInfo.nodesObj[0];
        let nodeName = nodeInfo.name;
        this.traverseNodeChilds(scrComponent, nodeName, nodeInfo.parentName, nodeInfo.serviceName, this.resetCurRec);
        if (cntrInfo.curPage) {
            nodeInfo.curRec = (cntrInfo.curPage * cntrInfo.pageSize) + recNo;
        }
        else {
            nodeInfo.curRec = recNo;
        }
        cntrInfo.curRec = nodeInfo.curRec;
    }
    getCurRec(nodeId, component) {
        let recNo = 0;
        if (component.metaInfo.nodesMap[nodeId]) {
            recNo = component.metaInfo.nodesMap[nodeId].curRec;
        }
        return recNo;
    }
    getPageRecords(scrComponent, dataArray, containerId) {
        let cntrInfo = scrComponent.metaInfo.containersMap[containerId];
        let pageData = dataArray;
        if (cntrInfo.pageType) {
            let pageStart = cntrInfo.pageSize * cntrInfo.curPage;
            let pageEnd = pageStart + cntrInfo.pageSize;
            pageData = dataArray.slice(pageStart, pageEnd);
        }
        return pageData;
    }
    getParentPointer(scrComponent, nodeId, data) {
        let nodesMap = scrComponent.metaInfo.nodesMap;
        let nodeInfo = nodesMap[nodeId];
        let dataObj = data;
        if (nodeInfo) {
            let parents = nodeInfo.parents;
            for (let p = 0; p < parents.length; p++) {
                if (!dataObj) {
                    break;
                }
                const parentId = parents[p];
                let parentNode = nodesMap[parentId];
                if (parentNode.multiRec == "Y") {
                    let currRec = this.getCurRec(parentId, scrComponent);
                    dataObj = dataObj[parentNode.name][currRec];
                }
                else {
                    dataObj = dataObj[parentNode.name];
                }
            }
        }
        return dataObj;
    }
    getParentDataGroup(scrComponent, nodeId, data) {
        let nodesMap = scrComponent.metaInfo.nodesMap;
        let nodeInfo = nodesMap[nodeId];
        let dataGroup = data ? data : scrComponent.ifaceData;
        if (nodeInfo) {
            let parents = nodeInfo.parents;
            for (let p = 0; p < parents.length; p++) {
                if (!dataGroup) {
                    break;
                }
                const parentId = parents[p];
                let parentNode = nodesMap[parentId];
                if (parentNode.multiRec == "Y") {
                    let currRec = this.getCurRec(parentId, scrComponent);
                    dataGroup = dataGroup.controls[parentNode.name].controls[currRec];
                }
                else {
                    dataGroup = dataGroup.controls[parentNode.name];
                }
            }
        }
        return dataGroup;
    }
    getDataGroup(scrComponent, nodeId, data) {
        let dataGrp = null;
        let nodesMap = scrComponent.metaInfo.nodesMap;
        let nodeInfo = nodesMap[nodeId];
        let parentGrp = this.getParentDataGroup(scrComponent, nodeId, data);
        if (parentGrp) {
            dataGrp = parentGrp.controls[nodeInfo.name];
        }
        return dataGrp;
    }
    resetCurRec(scrComponent, nodeObj) {
        if (nodeObj.multiRec == "Y") {
            nodeObj.curRec = 0;
            nodeObj.cntrObj.curRec = 0;
        }
    }
    resetCurPage(scrComponent, nodeObj) {
        if (nodeObj.multiRec == "Y") {
            nodeObj.cntrObj.curPage = 0;
        }
    }
    initMenu(param) {
        var menuVal = param.menus;
        let jQParent = jQuery("#" + param.menuId);
        //jQParent.append(`<ul class='side-menu'></ul>`);
        if (menuVal) {
            let arrLen = menuVal.length;
            let elmLabel, elmIcon, href, menuParent, uniqId;
            for (let i = 0; i < arrLen; i++) {
                elmLabel = menuVal[i].text;
                elmIcon = menuVal[i].icon;
                href = menuVal[i].a_attr;
                menuParent = menuVal[i].parent;
                uniqId = menuVal[i].id;
                if (!_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(href)) {
                    href = menuVal[i].a_attr["href"];
                }
                if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(href)) {
                    href = "javascript:void(0)";
                }
                if (menuParent == "#") {
                    jQuery(".xle-menu").append(`<li class="${uniqId}">
													<a class="xle-menu-item" href="${href}"></a>`);
                    let anchorElm = jQuery("." + uniqId).children('a');
                    if (!_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(elmIcon)) {
                        anchorElm.append(`<span class="icon-spacer-left"><i class="fa-2x ${elmIcon}"></i></span><span class="menu-value">${elmLabel}</span>`);
                    }
                    else {
                        //Check with tiji
                        anchorElm.append(`<span class="icon-spacer-left"></span><span class="menu-value">${elmLabel}</span>`);
                    }
                    //anchorElm.append(`<span class="icon icon-chevron"></span>`);
                }
                else {
                    if (jQuery("." + menuParent + "_ul").length == 0)
                        jQuery("." + menuParent).append(`<ul class="child-menu ${menuParent}_ul"></ul>`);
                    jQuery("." + menuParent + "_ul").append(`<li class="${uniqId}"><a class="xle-menu-item" href="${href}"></a></li>`);
                    let anchorElm = jQuery("." + uniqId).children('a');
                    if (!_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(elmIcon)) {
                        anchorElm.append(`<span class="icon-spacer-left"><i class="fa-2x ${elmIcon}"></i></span><span class="menu-value">${elmLabel}</span>`);
                    }
                    else {
                        //Check with tiji
                        anchorElm.append(`<span class="icon-spacer-left"></span><span class="menu-value">${elmLabel}</span>`);
                    }
                    if (jQuery("." + menuParent).find('.fa-fw.fa-angle-down').length == 0)
                        jQuery("." + menuParent).children('a').append(`<span class="icon-spacer-right"><i class="fa fa-fw fa-angle-down"></i></span>`);
                }
            }
        }
        if (param.callback) {
            jQParent.on('click', 'a', (ev) => {
                this.invokeCallback(Object.assign(Object.assign({}, param), { ev }));
            });
        }
        this.addMenuEvtListener(param);
    }
    addMenuEvtListener(param) {
        /* 	jQuery(".sidebar").on({
                mouseenter: () => {
                    jQuery(".sidebar").addClass("hover-active");
                    jQuery(".active >.child_menu").slideDown();
                },
                mouseleave: () => {
                    jQuery(".sidebar").removeClass("hover-active");
                    jQuery(".child_menu").slideUp();
                }
            }); */
        jQuery("#" + param.menuId + " li >a").on('click', function (ev) {
            var $li = jQuery(this).parent();
            if ($li.is('.active')) {
                $li.removeClass('active');
                jQuery('ul:first', $li).slideUp();
            }
            else {
                // prevent closing menu if we are on child menu
                if (!$li.parent().is('.child-menu')) {
                    jQuery(this).parents(".xle-menu").find('li').removeClass('active');
                    jQuery(this).parents(".xle-menu").find('li ul').slideUp();
                }
                else {
                }
                $li.addClass('active');
                if ($li.parent() && $li.parent().hasClass("child-menu")) {
                    $li.siblings().removeClass("active");
                    jQuery(this).parents(".xle-menu").find('li ul').slideUp();
                    jQuery('aside').removeClass("hover-active");
                }
                jQuery('ul:first', $li).slideDown();
            }
        });
    }
    populateSelectOptions(options, elmId, screenName) {
        if (screenName) {
            //// Multiple elms with same id in diff screens, Should this be possible? As Angular supports it?
        }
        else {
            let selObj = this.elmsMap.get(elmId);
            this.populateSelectElmOptions(selObj, options);
        }
    }
    populateSelectElmOptions(selElm, options) {
        selElm.updateOptions(options);
    }
    getValue(elmId) {
        return this.getElmValue(this.elmsMap.get(elmId));
    }
    getElmValue(elm) {
        let value = "";
        if (elm) {
            value = elm.getValue();
        }
        return value;
    }
    setValue(elmId, value) {
        this.setElmValue(this.elmsMap.get(elmId), value);
    }
    setElmValue(elm, value) {
        elm.setValue(value);
    }
    setValidators(elmId, additionalValidators) {
        this.setElmValidators(this.elmsMap.get(elmId), additionalValidators);
    }
    setElmValidators(elm, additionalValidators) {
        /// How to keep previous validators and update new?
        elm.fc.setValidators(Object(_directives_validator_directive__WEBPACK_IMPORTED_MODULE_4__["xelerateElmValidator"])(elm, additionalValidators));
        elm.fc.updateValueAndValidity();
    }
    getScrData(scrComponent) {
        let scrData = null;
        if (scrComponent) {
            scrData = scrComponent.ifaceData.getRawValue();
        }
        return scrData;
    }
    /*
    Data to display for a given container, called multiple times on rerender cycle, implement it cautiously (including hooks)
    scrComponent 	- Screen Component
    dataGrp			- data group array containing form group
    containerId		- html Id of container provided in Designer
    */
    getDataToRender(scrComponent, dataGrp, containerId) {
        let cntrInfo = scrComponent.metaInfo.containersMap[containerId];
        //// Loop to get multi nodes mapping info?
        let nodeObj = cntrInfo.nodesObj[0];
        let renderData = dataGrp;
        let userData = null;
        if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.preDataToRender)) {
            userData = scrComponent.preDataToRender(renderData, containerId);
        }
        if (userData) {
            renderData = userData;
        }
        else {
            if (nodeObj.filteredData) {
                renderData = nodeObj.filteredData;
            }
            renderData = this.getPageRecords(scrComponent, renderData, containerId);
        }
        if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.postDataToRender)) {
            userData = scrComponent.postDataToRender(renderData, containerId);
            if (userData) {
                renderData = userData;
            }
        }
        return renderData;
    }
    /*
    Input : param - consists of the following...
        scrComponent: Screen component object
        nodeName: multirec nodename to be filtered
        filter: string or object,
                string: value to be available in any of the columns
                object: Key value pair {columnName: value to be available in this column}
        render: boolean flag to rerender the ui;
    */
    filterData(param) {
        let scrComponent = param.scrComponent;
        let nodeId = param.nodeId ? param.nodeId : this.getNodeId(param.nodeName, param.parNodeName, param.serviceName);
        let nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
        let dataGrp = this.getDataGroup(scrComponent, nodeId);
        let filter = param.filter;
        if (dataGrp instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
            dataGrp = dataGrp.controls.filter((item, i) => {
                if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                    for (const key in item.controls) {
                        if (item.controls.hasOwnProperty(key)) {
                            let control = item.controls[key];
                            let expectedVal = "";
                            if (typeof (filter) == 'object') {
                                expectedVal = filter[key];
                            }
                            else {
                                expectedVal = filter.toLowerCase();
                            }
                            if ((control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) && control.value && (control.value.toLowerCase().indexOf(expectedVal) > -1)) {
                                return true;
                            }
                        }
                    }
                }
            });
        }
        if (param.render) {
            nodeObj.filteredData = dataGrp;
            this.propagateChangeDetection(scrComponent);
        }
        return dataGrp;
    }
    createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    //update element props..
    updateProp(elmId, propName, propVal) {
        this.updateElmProp(this.elmsMap.get(elmId), propName, propVal);
    }
    updateElmProp(elm, propName, propVal) {
        elm.updateProp(propName, propVal);
    }
    //table related fns..
    createEditRenderers() {
        if (true)
            return this.dateRenderer;
    }
    createToolBarEvts(evt) {
        let inst = jQuery(evt.currentTarget.domElement).data("directiveInst");
        inst.treeTable.createToolBarEvts(evt);
        inst.treeTable.createEditRenderers();
    }
    onExecuteToolbarAction(action, currentTarget, extendedPager) {
        let inst = jQuery(extendedPager.grid.domElement).data("directiveInst");
        inst.treeTable.onExecuteToolbarAction(action, currentTarget, extendedPager);
    }
    rowClicked(evt) {
        let inst = jQuery(evt.currentTarget.domElement).data("directiveInst");
        inst.treeTable.rowClicked(evt);
        //console.log("called");
    }
    getJSDataType(obj) {
        var dataType = "NULL";
        if (obj) {
            dataType = "STRING"; //Default
            if (typeof obj === "object") {
                dataType = "OBJECT";
                if (Array.isArray(obj)) {
                    dataType = "ARRAY";
                }
            }
            else {
                ////Other Data Types like Number, Date etc.. Not Reqd Now...
            }
        }
        dataType = dataType.toUpperCase();
        return dataType;
    }
    getFlatObjCopy(object) {
        let newObj = {};
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const value = object[key];
                if (this.getJSDataType(value) == "STRING") {
                    newObj[key] = value;
                }
            }
        }
        return newObj;
    }
    openSideBar() {
        jQuery("aside").addClass("hover-active");
        jQuery("aside").find('.active >.child-menu').slideDown();
    }
    closeSideBar() {
        jQuery("aside").removeClass("hover-active");
        jQuery("aside").find('.child-menu').slideUp();
    }
    makeHeaderCollapse() {
        jQuery(window).scroll(function () {
            jQuery('html,body').animate(10000);
            let scroll = jQuery(window).scrollTop();
            if (scroll >= 5) {
                jQuery("body").addClass("head-up");
            }
            else {
                jQuery("body").removeClass("head-up");
            }
        });
    }
}
XelerateService.ɵfac = function XelerateService_Factory(t) { return new (t || XelerateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_app_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"])); };
XelerateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: XelerateService, factory: XelerateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XelerateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }, { type: _app_app_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsProvider"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModules", function() { return SharedModules; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-custom-checkbox-values */ "../../../../../node_modules/ng-custom-checkbox-values/__ivy_ngcc__/fesm2015/ng-custom-checkbox-values.js");
/* harmony import */ var _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple/directives/filter-fields.directive */ "./src/shared/simple/directives/filter-fields.directive.ts");
/* harmony import */ var _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple/directives/non-filter-fields.directive */ "./src/shared/simple/directives/non-filter-fields.directive.ts");
/* harmony import */ var _xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xelerate-elements/xelerate-badge/xelerate-badge.component */ "./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xelerate-elements/xelerate-button/xelerate-button.component */ "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xelerate-elements/xelerate-checkbox/xelerate-checkbox.component */ "./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component */ "./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./xelerate-elements/xelerate-icon/xelerate-icon.component */ "./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xelerate-elements/xelerate-image/xelerate-image.component */ "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xelerate-elements/xelerate-input/xelerate-input.component */ "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./xelerate-elements/xelerate-radio/xelerate-radio.component */ "./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xelerate-elements/xelerate-select/xelerate-select.component */ "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xelerate-elements/xelerate-textarea/xelerate-textarea.component */ "./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts");
/* harmony import */ var _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xelerate-elements/xelerate-text/xelerate-text.component */ "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/datepicker.directive */ "./src/shared/directives/datepicker.directive.ts");
/* harmony import */ var _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/launcher.directive */ "./src/shared/directives/launcher.directive.ts");
/* harmony import */ var _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/datatable.directive */ "./src/shared/directives/datatable.directive.ts");
/* harmony import */ var _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/formcontrols.directive */ "./src/shared/directives/formcontrols.directive.ts");
/* harmony import */ var _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pipes/cardslimit.pipe */ "./src/shared/pipes/cardslimit.pipe.ts");
/* harmony import */ var _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./xelerate-elements/xelerate-tags/xelerate-tags.component */ "./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts");
/* harmony import */ var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/maintenance.service */ "./src/shared/services/maintenance.service.ts");
/* harmony import */ var _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/popover.directive */ "./src/shared/directives/popover.directive.ts");



























class SharedModules {
}
SharedModules.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModules });
SharedModules.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModules_Factory(t) { return new (t || SharedModules)(); }, providers: [_services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__["Maintenance"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModules, { declarations: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"],
        _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"],
        _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"],
        _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"],
        _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"],
        _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"],
        _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"],
        _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"],
        _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"],
        _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"],
        _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"],
        _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"],
        _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"],
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"],
        _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"],
        _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"],
        _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"],
        _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"],
        _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"],
        _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"],
        _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]], exports: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"],
        _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"],
        _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"],
        _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"],
        _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"],
        _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"],
        _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"],
        _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"],
        _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"],
        _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"],
        _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"],
        _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"],
        _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"],
        _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"],
        _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"],
        _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"],
        _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"],
        _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"],
        _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"],
        _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"],
        _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModules, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"],
                    _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"],
                    _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"],
                    _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"],
                    _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"],
                    _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"],
                    _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"],
                    _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"],
                    _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"],
                    _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"],
                    _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"],
                    _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"],
                    _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"],
                    _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"],
                    _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"],
                    _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"],
                    _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"],
                    _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"],
                    _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"],
                    _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"],
                    _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]
                ],
                exports: [
                    _xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"],
                    _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"],
                    _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"],
                    _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"],
                    _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"],
                    _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"],
                    _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"],
                    _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"],
                    _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"],
                    _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"],
                    _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"],
                    _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"],
                    _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"],
                    _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"],
                    _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"],
                    _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"],
                    _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"],
                    _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"],
                    _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"],
                    _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"],
                    _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]
                ],
                providers: [_services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__["Maintenance"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/shared/simple/directives/filter-fields.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/simple/directives/filter-fields.directive.ts ***!
  \*****************************************************************/
/*! exports provided: FilterFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFields", function() { return FilterFields; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
///// Directive to access fielter filed native objects


class FilterFields {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.ctrl = this.elRef.nativeElement.querySelector("#" + this.info.id);
    }
    get value() {
        return this.ctrl.value;
    }
    enable() {
        if (this.fc) {
            this.fc.enable();
        }
        else {
            this.renderer.removeAttribute(this.ctrl, 'disabled');
        }
    }
    disable() {
        if (this.fc) {
            this.fc.enable();
        }
        else {
            this.renderer.setAttribute(this.ctrl, 'disabled', 'true');
        }
    }
}
FilterFields.ɵfac = function FilterFields_Factory(t) { return new (t || FilterFields)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FilterFields.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilterFields, selectors: [["", "filterFields", "y"]], inputs: { fc: "fc", info: "info" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterFields, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[filterFields="Y"]',
                providers: []
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { fc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/simple/directives/non-filter-fields.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/simple/directives/non-filter-fields.directive.ts ***!
  \*********************************************************************/
/*! exports provided: NonFilterFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonFilterFields", function() { return NonFilterFields; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
///// Directive to access non fielter filed native objects


class NonFilterFields {
    constructor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.ctrl = this.elRef.nativeElement.querySelector("#" + this.info.id);
    }
    enable() {
        if (this.fc) {
            this.fc.enable();
        }
        else {
            this.renderer.removeAttribute(this.ctrl, 'disabled');
        }
    }
    disable() {
        if (this.fc) {
            this.fc.enable();
        }
        else {
            this.renderer.setAttribute(this.ctrl, 'disabled', 'true');
        }
    }
}
NonFilterFields.ɵfac = function NonFilterFields_Factory(t) { return new (t || NonFilterFields)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NonFilterFields.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NonFilterFields, selectors: [["", "filterFields", "n"]], inputs: { fc: "fc", info: "info" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonFilterFields, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[filterFields="N"]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { fc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/shared/templates/SimpleBaseClass.component.ts":
/*!***********************************************************!*\
  !*** ./src/shared/templates/SimpleBaseClass.component.ts ***!
  \***********************************************************/
/*! exports provided: SimpleBaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBaseClass", function() { return SimpleBaseClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/directives/datatable.directive */ "./src/shared/directives/datatable.directive.ts");
/* harmony import */ var src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/services/utility.service */ "./src/shared/services/utility.service.ts");




class SimpleBaseClass {
    /* Mandatory properties ends */ constructor(xelerate, infoJSON) {
        this.xelerate = xelerate;
        this.name = "Default";
        this.metaInfo = src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].copyJSON(infoJSON);
    }
    ngOnInit() {
        this.xelerate.initScreen(this);
    }
    query() {
        this.maintenance.query(this);
    }
    delete() {
        this.maintenance.delete(this);
    }
    create() {
        this.maintenance.create(this);
    }
    modify() {
        this.maintenance.modify(this);
    }
    clear() {
        this.xelerate.data.loadScrData(this, {});
    }
    ngOnDestroy() {
        this.xelerate.destroyScreen(this);
    }
}
SimpleBaseClass.ɵfac = function SimpleBaseClass_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"](); };
SimpleBaseClass.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SimpleBaseClass, viewQuery: function SimpleBaseClass_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_1__["XelerateDatatableDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataTableDirs = _t);
    } }, inputs: { heirarchy: "heirarchy", compRef: "compRef", transData: "transData" } });


/***/ }),

/***/ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/xelerate-elements/abstract-xelerate-element.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AbstractXelerateElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractXelerateElement", function() { return AbstractXelerateElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utility.service */ "./src/shared/services/utility.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../../../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/xelerate.service */ "./src/shared/services/xelerate.service.ts");







const _c0 = ["control"];
class AbstractXelerateElement {
    constructor(cp, xelerate, elmRef) {
        this.cp = cp;
        this.xelerate = xelerate;
        this.elmRef = elmRef;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        let aplyDefaults = false;
        if (!this.fc) {
            aplyDefaults = true;
        }
        this.enrich();
        //// Apply Default Properties
        if (aplyDefaults) {
            this.fc.setValue(this.value);
            if (this.info.disabled) {
                this.disable();
            }
        }
    }
    enrich() {
        //// Attach new form control if not provided
        if (!this.fc) {
            this.fc = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        }
        else {
            // console.log("Mapped ");
        }
        //// Update element list and map for later access
        this.updateId();
        this.cp.elms.push(this);
        this.xelerate.elms.push(this);
        if (this.id) {
            if (!this.cp.elmsMap.has(this.id)) {
                this.cp.elmsMap.set(this.id, this);
            }
            if (!this.xelerate.elmsMap.has(this.id)) {
                this.xelerate.elmsMap.set(this.id, this);
            }
        }
        //// Create directives array for ease of access of utilities
        // this.info.directives = [];	/// Move it to generation as @Inputs are immutable
        //// Attach this component for directive references
        if (this.info.refs) {
            this.info.refs.instanceObj = this;
        }
        //// Multi Language Variables Assignment
        this.title = this.xelerate.getLabelDescription(this.info.title, this.xelerate.language);
        this.value = this.xelerate.getLabelDescription(this.info.value, this.xelerate.language);
        this.placeHolder = this.xelerate.getLabelDescription(this.info.placeholder, this.xelerate.language);
        this.tooltipTitle = this.xelerate.getLabelDescription(this.info.tooltiptitle, this.xelerate.language);
        this.tooltipText = this.xelerate.getLabelDescription(this.info.tooltiptext, this.xelerate.language);
    }
    updateId() {
        //// Construct id if provided by user
        let id = this.info.id;
        if (id) {
            if (!_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].isNull(this.recNo)) {
                this.id = id + "_" + this.recNo;
            }
            else {
                this.id = id;
            }
        }
    }
    ngAfterViewInit() {
        let prefs = this.cp.view.prefs;
        if (prefs) {
            this.xelerate.personalizeWidget(prefs[this.info.id], this);
        }
    }
    setValue(value) {
        this.fc.setValue(value);
    }
    getValue() {
        return this.fc.value;
    }
    //// register to notifivation for enabled or disabled states
    getStateChangesObservable() {
        return this.stateChanges.asObservable();
    }
    disable() {
        this.fc.disable();
        this.stateChanges.next("DISABLED");
    }
    enable() {
        this.fc.enable();
        this.stateChanges.next("ENABLED");
    }
    hide() {
        this.xelerate.renderer.addClass(this.elmRef.nativeElement, "hidden");
    }
    show() {
        this.xelerate.renderer.removeClass(this.elmRef.nativeElement, "hidden");
    }
    setEventContext(eventType, eventMethod) {
        let contexts = eventMethod.split('.');
        let contextObj = (contexts[0] == 'window') ? window : this.cp.view;
        let method = contexts[0];
        if (contexts.length > 1) {
            for (let c = 0; c < contexts.length - 1; c++) {
                const context = contexts[c];
                if (contextObj[context]) {
                    contextObj = contextObj[context];
                }
            }
            method = contexts[contexts.length - 1];
        }
        this.info[eventType] = method;
        this.info[eventType + "Context"] = contextObj;
    }
    ///// Generic Events
    clickAction(event) {
        if (this.info.click) {
            let params = { event };
            // Finding context based on dots in function and storing in info for consecutive use
            if (!this.info.clickContext) {
                this.setEventContext("click", this.info.click);
            }
            this.info.clickContext[this.info.click](params);
        }
    }
    changeAction(event) {
        if (this.info.change) {
            let params = { event };
            if (!this.info.changeContext) {
                this.setEventContext("change", this.info.change);
            }
            this.info.changeContext[this.info.change](params);
        }
    }
    focusAction(event) {
        if (this.info.focus) {
            let params = { event };
            if (!this.info.focusContext) {
                this.setEventContext("focus", this.info.focus);
            }
            this.info.focusContext[this.info.focus](params);
        }
    }
    blurAction(event) {
        if (this.info.blur) {
            let params = { event };
            if (!this.info.blurContext) {
                this.setEventContext("blur", this.info.blur);
            }
            this.info.blurContext[this.info.blur](params);
        }
    }
    mouseoverAction(event) {
        if (this.info.mouseover) {
            let params = { event };
            if (!this.info.mouseoverContext) {
                this.setEventContext("mouseover", this.info.mouseover);
            }
            this.info.mouseoverContext[this.info.mouseover](params);
        }
    }
    mouseoutAction(event) {
        if (this.info.mouseout) {
            let params = { event };
            if (!this.info.mouseoutContext) {
                this.setEventContext("mouseout", this.info.mouseout);
            }
            this.info.mouseoutContext[this.info.mouseout](params);
        }
    }
    updateProp(propName, propValue) {
        if (!this.info[propName])
            this.info[propName] = "";
        this.info[propName] = propValue;
    }
    ngOnDestroy() {
        //// Clear element list and map to avoid memory leak
        let index = this.cp.elms.indexOf(this);
        if (index > -1) {
            this.cp.elms.splice(index, 1);
            this.xelerate.elms.splice(index, 1);
        }
        if (this.info.id) {
            this.cp.elmsMap.delete(this.info.id);
            this.xelerate.elmsMap.delete(this.info.id);
        }
        this.stateChanges.complete();
        //// nullify circular refernce for faster garbage collection
        if (this.info.refs) {
            this.info.refs.instanceObj = null;
            this.info.refs = null;
        }
    }
}
AbstractXelerateElement.ɵfac = function AbstractXelerateElement_Factory(t) { return new (t || AbstractXelerateElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AbstractXelerateElement.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractXelerateElement, viewQuery: function AbstractXelerateElement_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
    } }, inputs: { info: "info", fc: "fc", recNo: "recNo" } });


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts ***!
  \*********************************************************************************/
/*! exports provided: XelerateBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateBadgeComponent", function() { return XelerateBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateBadgeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.info.lblwrapclass ? ctx_r12.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r12.id ? ctx_r12.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.info.lblclass ? ctx_r12.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r12.id ? ctx_r12.id : "")("id", ctx_r12.id ? ctx_r12.id + "label" : "");
} }
class XelerateBadgeComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateBadgeComponent.ɵfac = function XelerateBadgeComponent_Factory(t) { return new (t || XelerateBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateBadgeComponent, selectors: [["xelerate-badge"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateBadgeComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 15, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click"], ["control", ""], [3, "for", "id"]], template: function XelerateBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateBadgeComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateBadgeComponent_Template_span_click_2_listener($event) { return ctx.clickAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fc.value, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xelerate-badge',
                templateUrl: './xelerate-badge.component.html',
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateBadgeComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts ***!
  \***********************************************************************************/
/*! exports provided: XelerateButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateButtonComponent", function() { return XelerateButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.info.lblwrapclass ? ctx_r14.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r14.id ? ctx_r14.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.info.lblclass ? ctx_r14.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r14.id ? ctx_r14.id : "")("id", ctx_r14.id ? ctx_r14.id + "label" : "");
} }
function XelerateButtonComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r16.info.iconclass ? ctx_r16.info.iconclass + ctx_r16.info.iconsize : null);
} }
function XelerateButtonComponent_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r17.info.iconclass ? ctx_r17.info.iconclass + ctx_r17.info.iconsize : null);
} }
class XelerateButtonComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateButtonComponent.ɵfac = function XelerateButtonComponent_Factory(t) { return new (t || XelerateButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateButtonComponent, selectors: [["xelerate-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateButtonComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 18, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "type", "ngStyle", "click"], ["control", ""], [3, "class", 4, "ngIf"], [3, "for", "id"]], template: function XelerateButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateButtonComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateButtonComponent_Template_button_click_2_listener($event) { return ctx.clickAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateButtonComponent_i_4_Template, 1, 2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, XelerateButtonComponent_i_6_Template, 1, 2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("type", ctx.info.type)("ngStyle", ctx.info.styles ? ctx.info.styles : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.iconposition == "LEFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fc.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.iconposition == "RIGHT");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xelerate-button',
                templateUrl: './xelerate-button.component.html',
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateButtonComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts ***!
  \***************************************************************************************/
/*! exports provided: XelerateCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateCheckboxComponent", function() { return XelerateCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-custom-checkbox-values */ "../../../../../node_modules/ng-custom-checkbox-values/__ivy_ngcc__/fesm2015/ng-custom-checkbox-values.js");








function XelerateCheckboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r18.info.lblwrapclass ? ctx_r18.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r18.id ? ctx_r18.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r18.id ? ctx_r18.id : "")("id", ctx_r18.id ? ctx_r18.id + "labelgrp" : "");
} }
class XelerateCheckboxComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateCheckboxComponent.ɵfac = function XelerateCheckboxComponent_Factory(t) { return new (t || XelerateCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateCheckboxComponent, selectors: [["xelerate-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateCheckboxComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 27, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["type", "checkbox", 3, "id", "placeholder", "readonly", "ngStyle", "formControl", "customCheckboxValues", "checkedValue", "uncheckedValue", "indeterminateValue", "click", "change"], ["control", ""], [3, "for", "id"]], template: function XelerateCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateCheckboxComponent_div_0_Template, 2, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateCheckboxComponent_Template_input_click_3_listener($event) { return ctx.clickAction($event); })("change", function XelerateCheckboxComponent_Template_input_change_3_listener($event) { return ctx.changeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("custom-control custom-checkbox " + ctx.info.ctrlelmwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("placeholder", ctx.info.placeholder)("readonly", ctx.info.readonly)("ngStyle", ctx.info.styles ? ctx.info.styles : null)("formControl", ctx.fc)("checkedValue", ctx.info.checkedVal)("uncheckedValue", ctx.info.unCheckedVal)("indeterminateValue", ctx.info.indeterminateVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.lblclass ? ctx.info.lblclass : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id ? ctx.id : "")("id", ctx.id ? ctx.id + "label" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_6__["CustomCheckboxValuesDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-checkbox",
                templateUrl: "./xelerate-checkbox.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateCheckboxComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: XelerateHyperlinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateHyperlinkComponent", function() { return XelerateHyperlinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateHyperlinkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r20.info.lblwrapclass ? ctx_r20.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r20.id ? ctx_r20.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r20.info.lblclass ? ctx_r20.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r20.id ? ctx_r20.id : "")("id", ctx_r20.id ? ctx_r20.id + "label" : "");
} }
function XelerateHyperlinkComponent_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r22.info.iconclass + ctx_r22.info.iconsize);
} }
class XelerateHyperlinkComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateHyperlinkComponent.ɵfac = function XelerateHyperlinkComponent_Factory(t) { return new (t || XelerateHyperlinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateHyperlinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateHyperlinkComponent, selectors: [["xelerate-hyperlink"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateHyperlinkComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 18, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click", "mouseover", "mouseout"], ["control", ""], [3, "class", 4, "ngIf"], [3, "for", "id"]], template: function XelerateHyperlinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateHyperlinkComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateHyperlinkComponent_Template_a_click_2_listener($event) { return ctx.clickAction($event); })("mouseover", function XelerateHyperlinkComponent_Template_a_mouseover_2_listener($event) { return ctx.mouseoverAction($event); })("mouseout", function XelerateHyperlinkComponent_Template_a_mouseout_2_listener($event) { return ctx.mouseoutAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, XelerateHyperlinkComponent_i_5_Template, 1, 2, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx.info.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", ctx.info.target)("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fc.value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.iconclass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateHyperlinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xelerate-hyperlink',
                templateUrl: './xelerate-hyperlink.component.html',
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateHyperlinkComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts ***!
  \*******************************************************************************/
/*! exports provided: XelerateIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateIconComponent", function() { return XelerateIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateIconComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.info.lblwrapclass ? ctx_r23.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r23.id ? ctx_r23.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.info.lblclass ? ctx_r23.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r23.id ? ctx_r23.id : "")("id", ctx_r23.id ? ctx_r23.id + "label" : "");
} }
class XelerateIconComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateIconComponent.ɵfac = function XelerateIconComponent_Factory(t) { return new (t || XelerateIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateIconComponent, selectors: [["xelerate-icon"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 14, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click"], ["control", ""], [3, "for", "id"]], template: function XelerateIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateIconComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateIconComponent_Template_i_click_2_listener($event) { return ctx.clickAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.iconclass + ctx.info.iconsize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xelerate-icon',
                templateUrl: './xelerate-icon.component.html'
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: XelerateImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateImageComponent", function() { return XelerateImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r25.info.lblwrapclass ? ctx_r25.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r25.id ? ctx_r25.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r25.info.lblclass ? ctx_r25.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r25.id ? ctx_r25.id : "")("id", ctx_r25.id ? ctx_r25.id + "label" : "");
} }
class XelerateImageComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateImageComponent.ɵfac = function XelerateImageComponent_Factory(t) { return new (t || XelerateImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateImageComponent, selectors: [["xelerate-image"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateImageComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 15, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["alt", "Image Not found", 3, "id", "ngStyle", "src", "click"], ["control", ""], [3, "for", "id"]], template: function XelerateImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateImageComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateImageComponent_Template_img_click_2_listener($event) { return ctx.clickAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null)("src", ctx.fc.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.info.tooltiptext ? "tooltip" : null)("data-container", ctx.info.tooltiptext ? "body" : null)("data-original-title", ctx.info.tooltiptext ? ctx.info.tooltiptitle : null)("data-content", ctx.info.tooltiptext ? ctx.info.tooltiptext : null)("data-trigger", ctx.info.tooltiptext ? ctx.info.tooltiptrigger : null)("data-placement", ctx.info.tooltiptext ? ctx.info.tooltipposition : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'xelerate-image',
                templateUrl: './xelerate-image.component.html',
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateImageComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts ***!
  \*********************************************************************************/
/*! exports provided: XelerateInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateInputComponent", function() { return XelerateInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function XelerateInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r27.info.lblwrapclass ? ctx_r27.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r27.id ? ctx_r27.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r27.info.lblclass ? ctx_r27.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r27.id ? ctx_r27.id : "")("id", ctx_r27.id ? ctx_r27.id + "label" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.title);
} }
function XelerateInputComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r32.info.iconclass);
} }
function XelerateInputComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function XelerateInputComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r34.info.isDate ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r34.info.iconclass);
} }
function XelerateInputComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, XelerateInputComponent_div_2_div_1_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, XelerateInputComponent_div_2_ng_container_2_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateInputComponent_div_2_div_3_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r28.info.iconsize ? "input-group " + ctx_r28.info.iconsize : "input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.info.iconposition == "LEFT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.info.iconposition == "RIGHT");
} }
function XelerateInputComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function XelerateInputComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function XelerateInputComponent_ng_template_4_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.focusAction($event); })("blur", function XelerateInputComponent_ng_template_4_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.blurAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r31.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r31.id ? ctx_r31.id : "")("type", ctx_r31.info.type)("placeholder", ctx_r31.placeHolder)("readonly", ctx_r31.info.readonly)("ngStyle", ctx_r31.info.styles ? ctx_r31.info.styles : null)("formControl", ctx_r31.fc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r31.tooltipText ? "tooltip" : null)("data-container", ctx_r31.tooltipText ? "body" : null)("data-original-title", ctx_r31.tooltipText ? ctx_r31.tooltipTitle : null)("data-content", ctx_r31.tooltipText ? ctx_r31.tooltipText : null)("data-trigger", ctx_r31.tooltipText ? ctx_r31.info.tooltiptrigger : null)("data-placement", ctx_r31.tooltipText ? ctx_r31.info.tooltipposition : null)("data-input", ctx_r31.info.isDate ? true : null);
} }
class XelerateInputComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateInputComponent.ɵfac = function XelerateInputComponent_Factory(t) { return new (t || XelerateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateInputComponent, selectors: [["xelerate-input"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateInputComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 6, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["controlTmpl", ""], [3, "for", "id"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "input-group-append"], [3, "id", "type", "placeholder", "readonly", "ngStyle", "formControl", "focus", "blur"], ["control", ""]], template: function XelerateInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateInputComponent_div_0_Template, 3, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, XelerateInputComponent_div_2_Template, 4, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateInputComponent_ng_container_3_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateInputComponent_ng_template_4_Template, 2, 15, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass ? ctx.info.ctrlwrapclass : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.iconclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !ctx.info.iconclass ? _r30 : "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-input",
                templateUrl: "./xelerate-input.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateInputComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts ***!
  \*********************************************************************************/
/*! exports provided: XelerateRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateRadioComponent", function() { return XelerateRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function XelerateRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r39.info.lblwrapclass ? ctx_r39.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r39.id ? ctx_r39.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r39.id ? ctx_r39.id : "")("id", ctx_r39.id ? ctx_r39.id + "label" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.title);
} }
function XelerateRadioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateRadioComponent_div_3_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.clickAction($event); })("change", function XelerateRadioComponent_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.changeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("custom-control custom-radio " + ctx_r41.info.ctrlelmwrapclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r41.info.ctrlclass ? ctx_r41.info.ctrlclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r41.id ? ctx_r41.id + "_" + option_r42.val : "")("value", option_r42.val)("name", ctx_r41.id)("readonly", ctx_r41.info.readonly)("ngStyle", ctx_r41.info.styles ? ctx_r41.info.styles : null)("formControl", ctx_r41.fc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r41.tooltipText ? "tooltip" : null)("data-container", ctx_r41.tooltipText ? "body" : null)("data-original-title", ctx_r41.tooltipText ? ctx_r41.tooltipTitle : null)("data-content", ctx_r41.tooltipText ? ctx_r41.tooltipText : null)("data-trigger", ctx_r41.tooltipText ? ctx_r41.info.tooltiptrigger : null)("data-placement", ctx_r41.tooltipText ? ctx_r41.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r41.info.lblclass ? ctx_r41.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r41.id ? ctx_r41.id + "_" + option_r42.val : "")("id", ctx_r41.id ? ctx_r41.id + "_" + option_r42.val + "label" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r41.xelerate.labelsMap[ctx_r41.xelerate.language][option_r42.desc] ? ctx_r41.xelerate.labelsMap[ctx_r41.xelerate.language][option_r42.desc] : option_r42.desc, " ");
} }
class XelerateRadioComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
        this.optionUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getOptionUpdatesObservable() {
        return this.optionUpdates.asObservable();
    }
    updateOptions(options) {
        //// Creating new options array just in case to ease the change detection for any custom code
        this.info.options = [...options];
        this.optionUpdates.next(options);
    }
    ngOnDestroy() {
        this.optionUpdates.complete();
        super.ngOnDestroy();
    }
}
XelerateRadioComponent.ɵfac = function XelerateRadioComponent_Factory(t) { return new (t || XelerateRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateRadioComponent, selectors: [["xelerate-radio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateRadioComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 5, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["control", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "for", "id"], ["type", "radio", 3, "id", "value", "name", "readonly", "ngStyle", "formControl", "click", "change"]], template: function XelerateRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateRadioComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateRadioComponent_div_3_Template, 4, 21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-radio",
                templateUrl: "./xelerate-radio.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateRadioComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts ***!
  \***********************************************************************************/
/*! exports provided: XelerateSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateSelectComponent", function() { return XelerateSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function XelerateSelectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.info.lblwrapclass ? ctx_r8.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.id ? ctx_r8.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.info.lblclass ? ctx_r8.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r8.id ? ctx_r8.id : "")("id", ctx_r8.id ? ctx_r8.id + "label" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.title);
} }
function XelerateSelectComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r11.val);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.xelerate.labelsMap[ctx_r10.xelerate.language][option_r11.desc] ? ctx_r10.xelerate.labelsMap[ctx_r10.xelerate.language][option_r11.desc] : option_r11.desc, " ");
} }
class XelerateSelectComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
        this.optionUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getOptionUpdatesObservable() {
        return this.optionUpdates.asObservable();
    }
    updateOptions(options) {
        //// Creating new options array just in case to ease the change detection for any custom code
        this.info.options = [...options];
        this.optionUpdates.next(options);
        /* this.info.options.length = 0;
        this.info.options.push(...options); */
    }
    ngOnDestroy() {
        this.optionUpdates.complete();
        super.ngOnDestroy();
    }
}
XelerateSelectComponent.ɵfac = function XelerateSelectComponent_Factory(t) { return new (t || XelerateSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateSelectComponent, selectors: [["xelerate-select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateSelectComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 16, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "formControl", "change"], ["control", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "for", "id"], [3, "value"]], template: function XelerateSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateSelectComponent_div_0_Template, 3, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function XelerateSelectComponent_Template_select_change_2_listener($event) { return ctx.changeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateSelectComponent_option_4_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass ? ctx.info.ctrlwrapclass : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null)("formControl", ctx.fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-select",
                templateUrl: "./xelerate-select.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateSelectComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts ***!
  \*******************************************************************************/
/*! exports provided: XelerateTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateTagsComponent", function() { return XelerateTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function XelerateTagsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r78.info.lblwrapclass ? ctx_r78.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r78.id ? ctx_r78.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r78.info.lblclass ? ctx_r78.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r78.id ? ctx_r78.id : "")("id", ctx_r78.id ? ctx_r78.id + "label" : "");
} }
function XelerateTagsComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTagsComponent_span_7_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r81 = ctx.$implicit;
    const t_r82 = ctx.index;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r80.info.optclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r80.id ? ctx_r80.id + "_" + t_r82 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tagId", tag_r81.tagId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r80.xelerate.labelsMap[ctx_r80.xelerate.language][tag_r81.tagName] ? ctx_r80.xelerate.labelsMap[ctx_r80.xelerate.language][tag_r81.tagName] : tag_r81.tagName, " ");
} }
class XelerateTagsComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
        this.tagListUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getOptionUpdatesObservable() {
        return this.tagListUpdates.asObservable();
    }
    updateTagList(tags) {
        //// Creating new options array just in case to ease the change detection for any custom code
        this.info.tags = [...tags];
        this.tagListUpdates.next(tags);
        /* this.info.options.length = 0;
        this.info.options.push(...options); */
    }
    ngOnDestroy() {
        this.tagListUpdates.complete();
        super.ngOnDestroy();
    }
}
XelerateTagsComponent.ɵfac = function XelerateTagsComponent_Factory(t) { return new (t || XelerateTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateTagsComponent, selectors: [["xelerate-tags"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTagsComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 20, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle"], ["control", ""], [3, "id", "class", "click", 4, "ngFor", "ngForOf"], [3, "for", "id"], [3, "id", "click"]], template: function XelerateTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateTagsComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, XelerateTagsComponent_span_7_Template, 2, 5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.tagCtrlWrpCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "_controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.optwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "_optwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-tags",
                templateUrl: "./xelerate-tags.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTagsComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: XelerateTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateTextComponent", function() { return XelerateTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function XelerateTextComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.info.lblwrapclass ? ctx_r49.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r49.id ? ctx_r49.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.info.lblclass ? ctx_r49.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r49.id ? ctx_r49.id : "")("id", ctx_r49.id ? ctx_r49.id + "label" : "");
} }
function XelerateTextComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_p_2_Template_p_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r50.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r50.id ? ctx_r50.id : "")("ngStyle", ctx_r50.info.styles ? ctx_r50.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r50.tooltipText ? "tooltip" : null)("data-container", ctx_r50.tooltipText ? "body" : null)("data-original-title", ctx_r50.tooltipText ? ctx_r50.tooltipTitle : null)("data-content", ctx_r50.tooltipText ? ctx_r50.tooltipText : null)("data-trigger", ctx_r50.tooltipText ? ctx_r50.info.tooltiptrigger : null)("data-placement", ctx_r50.tooltipText ? ctx_r50.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.fc.value, " ");
} }
function XelerateTextComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h1_3_Template_h1_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r51.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r51.id ? ctx_r51.id : "")("ngStyle", ctx_r51.info.styles ? ctx_r51.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r51.tooltipText ? "tooltip" : null)("data-container", ctx_r51.tooltipText ? "body" : null)("data-original-title", ctx_r51.tooltipText ? ctx_r51.tooltipTitle : null)("data-content", ctx_r51.tooltipText ? ctx_r51.tooltipText : null)("data-trigger", ctx_r51.tooltipText ? ctx_r51.info.tooltiptrigger : null)("data-placement", ctx_r51.tooltipText ? ctx_r51.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r51.fc.value, " ");
} }
function XelerateTextComponent_h2_4_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h2_4_Template_h2_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r52.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r52.id ? ctx_r52.id : "")("ngStyle", ctx_r52.info.styles ? ctx_r52.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r52.tooltipText ? "tooltip" : null)("data-container", ctx_r52.tooltipText ? "body" : null)("data-original-title", ctx_r52.tooltipText ? ctx_r52.tooltipTitle : null)("data-content", ctx_r52.tooltipText ? ctx_r52.tooltipText : null)("data-trigger", ctx_r52.tooltipText ? ctx_r52.info.tooltiptrigger : null)("data-placement", ctx_r52.tooltipText ? ctx_r52.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.fc.value, " ");
} }
function XelerateTextComponent_h3_5_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h3_5_Template_h3_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r53.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r53.id ? ctx_r53.id : "")("ngStyle", ctx_r53.info.styles ? ctx_r53.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r53.tooltipText ? "tooltip" : null)("data-container", ctx_r53.tooltipText ? "body" : null)("data-original-title", ctx_r53.tooltipText ? ctx_r53.tooltipTitle : null)("data-content", ctx_r53.tooltipText ? ctx_r53.tooltipText : null)("data-trigger", ctx_r53.tooltipText ? ctx_r53.info.tooltiptrigger : null)("data-placement", ctx_r53.tooltipText ? ctx_r53.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r53.fc.value, " ");
} }
function XelerateTextComponent_h4_6_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h4_6_Template_h4_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r54.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r54.id ? ctx_r54.id : "")("ngStyle", ctx_r54.info.styles ? ctx_r54.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r54.tooltipText ? "tooltip" : null)("data-container", ctx_r54.tooltipText ? "body" : null)("data-original-title", ctx_r54.tooltipText ? ctx_r54.tooltipTitle : null)("data-content", ctx_r54.tooltipText ? ctx_r54.tooltipText : null)("data-trigger", ctx_r54.tooltipText ? ctx_r54.info.tooltiptrigger : null)("data-placement", ctx_r54.tooltipText ? ctx_r54.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.fc.value, " ");
} }
function XelerateTextComponent_h5_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h5_7_Template_h5_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r55.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r55.id ? ctx_r55.id : "")("ngStyle", ctx_r55.info.styles ? ctx_r55.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r55.tooltipText ? "tooltip" : null)("data-container", ctx_r55.tooltipText ? "body" : null)("data-original-title", ctx_r55.tooltipText ? ctx_r55.tooltipTitle : null)("data-content", ctx_r55.tooltipText ? ctx_r55.tooltipText : null)("data-trigger", ctx_r55.tooltipText ? ctx_r55.info.tooltiptrigger : null)("data-placement", ctx_r55.tooltipText ? ctx_r55.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.fc.value, " ");
} }
function XelerateTextComponent_h6_8_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h6_8_Template_h6_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.clickAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r56.info.ctrlclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r56.id ? ctx_r56.id : "")("ngStyle", ctx_r56.info.styles ? ctx_r56.info.styles : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r56.tooltipText ? "tooltip" : null)("data-container", ctx_r56.tooltipText ? "body" : null)("data-original-title", ctx_r56.tooltipText ? ctx_r56.tooltipTitle : null)("data-content", ctx_r56.tooltipText ? ctx_r56.tooltipText : null)("data-trigger", ctx_r56.tooltipText ? ctx_r56.info.tooltiptrigger : null)("data-placement", ctx_r56.tooltipText ? ctx_r56.info.tooltipposition : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.fc.value, " ");
} }
class XelerateTextComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateTextComponent.ɵfac = function XelerateTextComponent_Factory(t) { return new (t || XelerateTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateTextComponent, selectors: [["xelerate-text"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTextComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 11, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "class", "ngStyle", "click", 4, "ngIf"], [3, "for", "id"], [3, "id", "ngStyle", "click"], ["control", ""]], template: function XelerateTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateTextComponent_div_0_Template, 2, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, XelerateTextComponent_p_2_Template, 3, 11, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateTextComponent_h1_3_Template, 3, 11, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateTextComponent_h2_4_Template, 3, 11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, XelerateTextComponent_h3_5_Template, 3, 11, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, XelerateTextComponent_h4_6_Template, 3, 11, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, XelerateTextComponent_h5_7_Template, 3, 11, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, XelerateTextComponent_h6_8_Template, 3, 11, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.type === "h6");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-text",
                templateUrl: "./xelerate-text.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTextComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts ***!
  \***************************************************************************************/
/*! exports provided: XelerateTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XelerateTextareaComponent", function() { return XelerateTextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-xelerate-element.component */ "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
/* harmony import */ var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/context-provider.service */ "./src/shared/services/context-provider.service.ts");
/* harmony import */ var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/xelerate.service */ "./src/shared/services/xelerate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function XelerateTextareaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r47.info.lblwrapclass ? ctx_r47.info.lblwrapclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r47.id ? ctx_r47.id + "labelwrap" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r47.info.lblclass ? ctx_r47.info.lblclass : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r47.id ? ctx_r47.id : "")("id", ctx_r47.id ? ctx_r47.id + "label" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.title);
} }
class XelerateTextareaComponent extends _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"] {
    constructor(cp, xelerate, elmRef) {
        super(cp, xelerate, elmRef);
    }
}
XelerateTextareaComponent.ɵfac = function XelerateTextareaComponent_Factory(t) { return new (t || XelerateTextareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
XelerateTextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: XelerateTextareaComponent, selectors: [["xelerate-textarea"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTextareaComponent) }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 19, consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "placeholder", "readonly", "ngStyle", "rows", "cols", "formControl", "blur"], ["control", ""], [3, "for", "id"]], template: function XelerateTextareaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateTextareaComponent_div_0_Template, 3, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function XelerateTextareaComponent_Template_textarea_blur_2_listener($event) { return ctx.blurAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass ? ctx.info.ctrlwrapclass : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("placeholder", ctx.info.placeholder)("readonly", ctx.info.readonly)("ngStyle", ctx.info.styles ? ctx.info.styles : null)("rows", ctx.info.rows)("cols", ctx.info.cols)("formControl", ctx.fc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.info.tooltiptext ? "tooltip" : null)("data-container", ctx.info.tooltiptext ? "body" : null)("data-original-title", ctx.info.tooltiptext ? ctx.info.tooltiptitle : null)("data-content", ctx.info.tooltiptext ? ctx.info.tooltiptext : null)("data-trigger", ctx.info.tooltiptext ? ctx.info.tooltiptrigger : null)("data-placement", ctx.info.tooltiptext ? ctx.info.tooltipposition : null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTextareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "xelerate-textarea",
                templateUrl: "./xelerate-textarea.component.html",
                providers: [
                    { provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => XelerateTextareaComponent) }
                ]
            }]
    }], function () { return [{ type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"] }, { type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\Apps\customerapps\Customer01\exec\rYKU7zJ9Do\source\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map