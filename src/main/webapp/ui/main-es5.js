function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../assets/config.json */
    "./src/assets/config.json");

    var _assets_config_json__WEBPACK_IMPORTED_MODULE_1___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../assets/config.json */
    "./src/assets/config.json", 1);
    /* harmony import */


    var _assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../assets/LabelCodes.json */
    "./src/assets/LabelCodes.json");

    var _assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../assets/LabelCodes.json */
    "./src/assets/LabelCodes.json", 1);
    /* harmony import */


    var _assets_Messages_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assets/Messages.json */
    "./src/assets/Messages.json");

    var _assets_Messages_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../assets/Messages.json */
    "./src/assets/Messages.json", 1);
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/directives/launcher.directive */
    "./src/shared/directives/launcher.directive.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(xelerate) {
        _classCallCheck(this, AppComponent);

        this.xelerate = xelerate;
        this.title = "Xelerate App";
        xelerate.initAppConfig(_assets_config_json__WEBPACK_IMPORTED_MODULE_1__);
        xelerate.initLabelsMap(_assets_LabelCodes_json__WEBPACK_IMPORTED_MODULE_2__);
        xelerate.initMessagesMap(_assets_Messages_json__WEBPACK_IMPORTED_MODULE_3__);
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.xelerate.loadComponent({
            compName: this.xelerate.appConfig.firstPage
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [["launcher", "xelerateLauncher1", 1, "xelerate-wrapper", "layout1"], ["launcher", "xelerateLauncher2", 1, "xelerate-wrapper", "layout1"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 1);
        }
      },
      directives: [_shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_5__["LauncherDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.css"]
        }]
      }], function () {
        return [{
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.components.ts":
  /*!***********************************!*\
    !*** ./src/app/app.components.ts ***!
    \***********************************/

  /*! exports provided: ComponentsProvider */

  /***/
  function srcAppAppComponentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsProvider", function () {
      return ComponentsProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../../../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/services/utility.service */
    "./src/shared/services/utility.service.ts");

    var ComponentsProvider =
    /*#__PURE__*/
    function () {
      function ComponentsProvider() {
        _classCallCheck(this, ComponentsProvider);
      }

      _createClass(ComponentsProvider, [{
        key: "getComponent",
        value: function getComponent(param) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var component, module;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    component = null; //// Look for internal components vailable

                    _context.next = 3;
                    return this.importComponent(param);

                  case 3:
                    module = _context.sent;

                    if (!module) {
                      _context.next = 8;
                      break;
                    }

                    component = module[param.compName];
                    _context.next = 12;
                    break;

                  case 8:
                    if (!param.customImport) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 11;
                    return src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].invokeMethod(param, "customImport");

                  case 11:
                    component = _context.sent;

                  case 12:
                    return _context.abrupt("return", component);

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "importComponent",
        value: function importComponent(param) {
          //// Should be listed with all screens developed, TBD - Have a export option from Designer or manual update?
          switch (param.compName) {
            case 'CustomerQuery_xelerate':
              return Promise.resolve().then(__webpack_require__.bind(null,
              /*! ./customerquery_xelerate/customerquery_xelerate.component */
              "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts"));

            case 'Login':
              return Promise.resolve().then(__webpack_require__.bind(null,
              /*! ./login/login.component */
              "./src/app/login/login.component.ts"));
          }

          return null;
        }
      }]);

      return ComponentsProvider;
    }();

    ComponentsProvider.ɵfac = function ComponentsProvider_Factory(t) {
      return new (t || ComponentsProvider)();
    };

    ComponentsProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ComponentsProvider,
      factory: ComponentsProvider.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/shared/shared.module */
    "./src/shared/shared.module.ts");
    /* harmony import */


    var _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customerquery_xelerate/customerquery_xelerate.component */
    "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuery_xelerate"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["Login"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _customerquery_xelerate_customerquery_xelerate_component__WEBPACK_IMPORTED_MODULE_6__["CustomerQuery_xelerate"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["Login"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModules"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/customerquery_xelerate/customerquery_xelerate-info.json":
  /*!*************************************************************************!*\
    !*** ./src/app/customerquery_xelerate/customerquery_xelerate-info.json ***!
    \*************************************************************************/

  /*! exports provided: table, rootName, category, entities, services, dataStructure, containers, default */

  /***/
  function srcAppCustomerquery_xelerateCustomerquery_xelerateInfoJson(module) {
    module.exports = JSON.parse("{\"table\":[{\"id\":\"CustomerQuery_xelerate_000000045\",\"columns\":[{},{\"title\":\"addrLn1\",\"data\":\"addrLn1\",\"type\":\"text\"},{\"title\":\"addrLn2\",\"data\":\"addrLn2\",\"type\":\"text\"},{\"title\":\"addrLn3\",\"data\":\"addrLn3\",\"type\":\"text\"},{\"title\":\"city\",\"data\":\"city\",\"type\":\"text\"},{\"title\":\"state\",\"data\":\"state\",\"type\":\"text\"},{\"title\":\"country\",\"data\":\"country\",\"type\":\"text\"},{\"title\":\"zipCode\",\"data\":\"zipCode\",\"type\":\"text\"},{\"title\":\"addrType\",\"data\":\"addrType\",\"type\":\"text\"}],\"editInfo\":{\"inputTypes\":[{\"column\":1,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000046',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn1','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":2,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000047',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn2','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":3,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000048',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn3','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":4,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000049',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'city','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":5,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000050',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'state','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":6,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000051',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'country','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":7,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000052',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'zipCode','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":8,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000053',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':false, 'wrapclass':'form-group','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrType','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"}]},\"filterFields\":[],\"sPaginationType\":\"full_numbers\",\"dom\":\"Bfrtip\",\"columnDefs\":[{\"defaultContent\":\"\",\"targets\":\"_all\"},{\"targets\":0,\"className\":\"select-checkbox\",\"orderable\":false,\"searchable\":false}],\"nodeStructure\":[\"CustomerQuery_ip.customerDetails.addresses\"],\"searching\":false,\"paging\":false,\"info\":false,\"ordering\":false,\"order\":[],\"select\":{\"style\":\"multi\",\"selector\":\"td:first-child\"},\"buttons\":[{\"text\":\"<i class=\\\"fa fa-fw fa-plus\\\"></i>\",\"name\":\"addrow\",\"className\":\"btn btn-outline-info btn-sm\"},{\"text\":\"<i class=\\\"fa fa-fw fa-minus\\\"></i>\",\"name\":\"removerow\",\"className\":\"btn btn-outline-warning btn-sm\"}],\"editable\":\"Y\",\"nodeName\":\"addresses\",\"parentName\":\"customerDetails\",\"serviceName\":\"CustomerQuery_ip\"},{\"id\":\"CustomerQuery_xelerate_000000088\",\"columns\":[{},{\"title\":\"addrLn1\",\"data\":\"addrLn1\",\"type\":\"text\"},{\"title\":\"addrLn2\",\"data\":\"addrLn2\",\"type\":\"text\"},{\"title\":\"addrLn3\",\"data\":\"addrLn3\",\"type\":\"text\"},{\"title\":\"city\",\"data\":\"city\",\"type\":\"text\"},{\"title\":\"state\",\"data\":\"state\",\"type\":\"text\"},{\"title\":\"country\",\"data\":\"country\",\"type\":\"text\"},{\"title\":\"zipCode\",\"data\":\"zipCode\",\"type\":\"text\"},{\"title\":\"addrType\",\"data\":\"addrType\",\"type\":\"text\"}],\"editInfo\":{\"inputTypes\":[{\"column\":0,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000089',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn1','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":1,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000090',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn2','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":2,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000091',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrLn3','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":3,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000092',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'city','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":4,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000093',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'state','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":5,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000094',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'country','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":6,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000095',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'zipCode','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"},{\"column\":7,\"type\":\"text\",\"options\":\"[]\",\"info\":\"{'id':'CustomerQuery_xelerate_000000096',  'form':'Y',    'options':[], 'tags':[],'styles':{}, 'placeholder':'','value':'','disabled':false,'readonly':true, 'wrapclass':'form-group ronly','lblwrapclass':'form-control-label','ctrlwrapclass':'form-control-box', 'ctrlclass':'form-control','optclass':'','optwrapclass':'','tagCtrlWrpCls':'','lblclass':'','title':'addrType','labelReq':'N','iconclass':'','wType':'INPUT', 'tooltiptext':'', 'directives':[], 'refs':{}, 'tooltiptitle':'','iconsize':' ',  'tooltiptrigger':'', 'tooltipposition':'',  'type':'text'}\"}]},\"filterFields\":[],\"sPaginationType\":\"full_numbers\",\"dom\":\"Bfrtip\",\"columnDefs\":[{\"defaultContent\":\"\",\"targets\":\"_all\"},{\"targets\":0,\"className\":\"select-checkbox\",\"orderable\":false,\"searchable\":false}],\"nodeStructure\":[\"CustomerQuery_op.customerDetails.addresses\"],\"searching\":false,\"paging\":false,\"info\":false,\"ordering\":false,\"order\":[],\"select\":{\"style\":\"multi\",\"selector\":\"td:first-child\"},\"buttons\":[],\"nodeName\":\"addresses\",\"parentName\":\"customerDetails\",\"serviceName\":\"CustomerQuery_op\"}],\"rootName\":\"CustomerQuery\",\"category\":\"XELERATE\",\"entities\":[\"beCustomer\"],\"services\":[\"CustomerQuery_ip\",\"CustomerQuery_op\"],\"dataStructure\":{\"CustomerQuery_ip\":{\"customerDetails\":{\"custNumber\":\"\",\"basicDetails\":{\"custId\":\"\",\"custSince\":\"\",\"custStatus\":\"\"},\"personalDetails\":{\"custDoB\":\"\",\"custProfession\":\"\",\"gender\":\"\",\"maritalStatus\":\"\",\"custName\":{\"personTitle\":\"\",\"firstName\":\"\",\"middleName\":\"\",\"lastName\":\"\"}},\"addresses\":[{\"addrLn1\":\"\",\"addrLn2\":\"\",\"addrLn3\":\"\",\"city\":\"\",\"state\":\"\",\"country\":\"\",\"zipCode\":\"\",\"addrType\":\"\"}]}},\"CustomerQuery_op\":{\"customerDetails\":{\"custNumber\":\"\",\"basicDetails\":{\"custId\":\"\",\"custSince\":\"\",\"custStatus\":\"\"},\"personalDetails\":{\"custDoB\":\"\",\"custProfession\":\"\",\"gender\":\"\",\"maritalStatus\":\"\",\"custName\":{\"personTitle\":\"\",\"firstName\":\"\",\"middleName\":\"\",\"lastName\":\"\"}},\"addresses\":[{\"addrLn1\":\"\",\"addrLn2\":\"\",\"addrLn3\":\"\",\"city\":\"\",\"state\":\"\",\"country\":\"\",\"zipCode\":\"\",\"addrType\":\"\"}]}}},\"containers\":[{\"id\":\"CustomerQuery_xelerate_000000045\",\"info\":[\"TABLE\",\"full_numbers\",\"\"],\"nodes\":[\"addresses\"],\"parNodes\":[\"customerDetails\"],\"service\":\"CustomerQuery_ip\"},{\"id\":\"CustomerQuery_xelerate_000000088\",\"info\":[\"TABLE\",\"full_numbers\",\"\"],\"nodes\":[\"addresses\"],\"parNodes\":[\"customerDetails\"],\"service\":\"CustomerQuery_op\"}]}");
    /***/
  },

  /***/
  "./src/app/customerquery_xelerate/customerquery_xelerate.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/customerquery_xelerate/customerquery_xelerate.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CustomerQuery_xelerate */

  /***/
  function srcAppCustomerquery_xelerateCustomerquery_xelerateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerQuery_xelerate", function () {
      return CustomerQuery_xelerate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../../../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/templates/SimpleBaseClass.component */
    "./src/shared/templates/SimpleBaseClass.component.ts");
    /* harmony import */


    var _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customerquery_xelerate-info.json */
    "./src/app/customerquery_xelerate/customerquery_xelerate-info.json");

    var _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./customerquery_xelerate-info.json */
    "./src/app/customerquery_xelerate/customerquery_xelerate-info.json", 1);
    /* harmony import */


    var src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/shared/services/maintenance.service */
    "./src/shared/services/maintenance.service.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-text/xelerate-text.component */
    "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
    /* harmony import */


    var _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/simple/directives/non-filter-fields.directive */
    "./src/shared/simple/directives/non-filter-fields.directive.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-button/xelerate-button.component */
    "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/directives/datatable.directive */
    "./src/shared/directives/datatable.directive.ts");
    /* harmony import */


    var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/directives/launcher.directive */
    "./src/shared/directives/launcher.directive.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-input/xelerate-input.component */
    "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
    /* harmony import */


    var _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/directives/datepicker.directive */
    "./src/shared/directives/datepicker.directive.ts");
    /* harmony import */


    var _shared_directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/directives/formcontrols.directive */
    "./src/shared/directives/formcontrols.directive.ts");

    var _c0 = function _c0() {
      return [];
    };

    var _c1 = function _c1() {
      return {};
    };

    var _c2 = function _c2(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000054",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](7, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1)))("fc", ctx_r0.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].custNumber);
      }
    }

    var _c3 = function _c3(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000022",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c4 = function _c4(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000023",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control XDTPCKR",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "isDate": true,
        "type": "text"
      };
    };

    var _c5 = function _c5(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000024",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](11, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](22, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custSince);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](33, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1)))("fc", ctx_r1.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].basicDetails["controls"].custStatus);
      }
    }

    var _c6 = function _c6(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000041",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control XDTPCKR",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "isDate": true,
        "type": "text"
      };
    };

    var _c7 = function _c7(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000042",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c8 = function _c8(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000043",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c9 = function _c9(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000044",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_39_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custDoB);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custProfession);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r2.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].maritalStatus);
      }
    }

    var _c10 = function _c10(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000037",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "personTitle",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c11 = function _c11(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000038",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "firstName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c12 = function _c12(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000039",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "middleName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c13 = function _c13(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000040",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "lastName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].personTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].middleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r3.ifaceData["controls"].CustomerQuery_ip["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].lastName);
      }
    }

    var _c14 = function _c14(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000097",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "xelerate-input", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](7, _c14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1)))("fc", ctx_r4.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].custNumber);
      }
    }

    var _c15 = function _c15(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000065",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c16 = function _c16(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000066",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control XDTPCKR",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "isDate": true,
        "type": "text"
      };
    };

    var _c17 = function _c17(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000067",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_81_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](11, _c15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custId);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](22, _c16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custSince);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](33, _c17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1)))("fc", ctx_r5.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].basicDetails["controls"].custStatus);
      }
    }

    var _c18 = function _c18(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000084",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control XDTPCKR",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "isDate": true,
        "type": "text"
      };
    };

    var _c19 = function _c19(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000085",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c20 = function _c20(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000086",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c21 = function _c21(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000087",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Attribute",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_86_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custDoB);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custProfession);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].gender);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r6.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].maritalStatus);
      }
    }

    var _c22 = function _c22(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000080",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "personTitle",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c23 = function _c23(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000081",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "firstName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c24 = function _c24(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000082",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "middleName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    var _c25 = function _c25(a2, a3, a4, a22, a23) {
      return {
        "id": "CustomerQuery_xelerate_000000083",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": true,
        "wrapclass": "form-group ronly",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "lastName",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "text"
      };
    };

    function CustomerQuery_xelerate_ng_container_91_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](13, _c22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].personTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](24, _c23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](35, _c24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].middleName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("info", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](46, _c25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](44, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](45, _c1)))("fc", ctx_r7.ifaceData["controls"].CustomerQuery_op["controls"].customerDetails["controls"].personalDetails["controls"].custName["controls"].lastName);
      }
    }

    var _c26 = function _c26() {
      return {
        "width": "100%"
      };
    };

    var _c27 = function _c27(a2, a3, a4, a22, a23) {
      return {
        "id": "headerTitle",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "",
        "wType": "TEXT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "h5"
      };
    };

    var _c28 = function _c28() {
      return {
        "max-width": "35px"
      };
    };

    var _c29 = function _c29(a3, a4, a5, a23, a24) {
      return {
        "id": "querybtn",
        "click": "query",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box inlineblock m-0",
        "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "fa fa-search",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var _c30 = function _c30(a3, a4, a5, a23, a24) {
      return {
        "id": "newbtn",
        "click": "create",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box inlineblock m-0",
        "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "fa fa-plus",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var _c31 = function _c31(a3, a4, a5, a23, a24) {
      return {
        "id": "savebtn",
        "click": "modify",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box inlineblock m-0",
        "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "fa fa-save",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var _c32 = function _c32(a3, a4, a5, a23, a24) {
      return {
        "id": "deletebtn",
        "click": "delete",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box inlineblock m-0",
        "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "fa fa-trash",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var _c33 = function _c33(a3, a4, a5, a23, a24) {
      return {
        "id": "clearbtn",
        "click": "clear",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box inlineblock m-0",
        "ctrlclass": "btn btn-primary btn-sm btn-round btn-shadow mr-1",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "N",
        "iconclass": "fa fa-remove",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var CustomerQuery_xelerate =
    /*#__PURE__*/
    function (_src_shared_templates) {
      _inherits(CustomerQuery_xelerate, _src_shared_templates);

      var _super = _createSuper(CustomerQuery_xelerate);

      function CustomerQuery_xelerate(xelerate, cp, changeDetectorRef, elmRef, maintenance) {
        var _this;

        _classCallCheck(this, CustomerQuery_xelerate);

        _this = _super.call(this, xelerate, _customerquery_xelerate_info_json__WEBPACK_IMPORTED_MODULE_3__);
        _this.xelerate = xelerate;
        _this.cp = cp;
        _this.changeDetectorRef = changeDetectorRef;
        _this.elmRef = elmRef;
        _this.maintenance = maintenance;
        _this.name = "CustomerQuery_xelerate";
        return _this;
      }

      _createClass(CustomerQuery_xelerate, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.personalizeView();
        }
      }, {
        key: "personalizeView",
        value: function personalizeView() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.xelerate.server.getContent({
                      url: "assets/" + this.name + "_prefs.json"
                    });

                  case 2:
                    this.prefs = _context2.sent;
                    this.xelerate.personalizeWidgets(this);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CustomerQuery_xelerate;
    }(src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__["SimpleBaseClass"]);

    CustomerQuery_xelerate.ɵfac = function CustomerQuery_xelerate_Factory(t) {
      return new (t || CustomerQuery_xelerate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["Maintenance"]));
    };

    CustomerQuery_xelerate.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CustomerQuery_xelerate,
      selectors: [["app-customerquery_xelerate"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 119,
      vars: 80,
      consts: [[1, "pagehtml"], ["id", "body", 1, "main-section", "p-3"], ["id", "CustomerQuery_xelerate_000000001", 1, "panel-tabs"], ["id", "tab", "role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-default"], [1, "nav-item"], ["id", "CustomerQuery_xelerate_000000002_title", "data-toggle", "tab", "href", "#CustomerQuery_xelerate_000000002", 1, "nav-link", "active"], ["id", "CustomerQuery_xelerate_000000055_title", "data-toggle", "tab", "href", "#CustomerQuery_xelerate_000000055", 1, "nav-link"], ["id", "tabcontent", 1, "tab-content"], ["id", "CustomerQuery_xelerate_000000002", "role", "tabpanel", "aria-labelledby", "tabpage", 1, "tab-pane", "active"], ["id", "CustomerQuery_xelerate_000000004", 1, "navbar-tsp"], ["id", "navbarcontent", 1, ""], ["id", "grids", 1, "xle-grid"], ["id", "CustomerQuery_xelerate_000000006", 1, "grid-item", "xle-sm-col2", "xle-ti-col2", "xle-lg-col2", "xle-md-col2", "xle-xl-col4"], ["id", "headerTitlewrap", "filterFields", "N", 1, "form-group", 2, "width", "100%", 3, "info"], ["id", "CustomerQuery_xelerate_000000008", 1, "grid-item", "xle-sm-col10", "xle-ti-col10", "xle-lg-col10", "xle-md-col10", "xle-xl-col8", "xle-h-right", "xle-el-h"], ["id", "querybtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "newbtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "savebtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "deletebtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "clearbtnwrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "max-width", "35px", 3, "info"], ["id", "CustomerQuery_xelerate_000000014", 1, "form-horizontal", "pb-4"], [1, "form-header"], ["id", "CustomerQuery_xelerate_000000014_lbl", 1, "form-title"], [4, "ngIf"], ["id", "CustomerQuery_xelerate_000000017", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000017_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000025", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000025_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000031", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000031_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000045", 1, "table-data"], [1, "table-header"], ["id", "CustomerQuery_xelerate_000000045_lbl", 1, "table-title"], ["id", "CustomerQuery_xelerate_000000045", 1, "table", "table-hover", "dataTable"], ["type", "checkbox", 1, "selectAll"], ["id", "CustomerQuery_xelerate_000000055", "role", "tabpanel", "aria-labelledby", "tabpage", 1, "tab-pane"], ["id", "CustomerQuery_xelerate_000000057", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000057_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000060", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000060_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000068", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000068_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000074", 1, "form-horizontal", "pb-4"], ["id", "CustomerQuery_xelerate_000000074_lbl", 1, "form-title"], ["id", "CustomerQuery_xelerate_000000088", 1, "table-data"], ["id", "CustomerQuery_xelerate_000000088_lbl", 1, "table-title"], ["id", "CustomerQuery_xelerate_000000088", 1, "table", "table-hover", "dataTable"], ["id", "launcherdiv", "launcher", "CustomerQuery_xelerate"], ["id", "CustomerQuery_xelerate_000000016", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000054wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000019", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000022wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000020", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000023wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000021", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000024wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000027", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000041wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000028", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000042wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000029", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000043wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000030", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000044wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000033", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000037wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000034", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000038wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000035", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000039wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000036", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000040wrap", "filterFields", "N", 1, "form-group", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000059", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000097wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000062", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000065wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000063", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000066wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000064", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000067wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000070", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000084wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000071", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000085wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000072", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000086wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000073", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000087wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000076", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000080wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000077", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000081wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000078", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000082wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"], ["id", "CustomerQuery_xelerate_000000079", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col4"], ["id", "CustomerQuery_xelerate_000000083wrap", "filterFields", "N", 1, "form-group", "ronly", 3, "info", "fc"]],
      template: function CustomerQuery_xelerate_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_7__["XelerateTextComponent"], _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_8__["NonFilterFields"], _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_9__["XelerateButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_11__["XelerateDatatableDirective"], _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__["LauncherDirective"], _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_13__["XelerateInputComponent"], _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_14__["XelerateDatepickerDirective"], _shared_directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_15__["XelerateFormControlsDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerQuery_xelerate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-customerquery_xelerate",
          templateUrl: "./customerquery_xelerate.component.html",
          providers: [src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]
        }, {
          type: src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: src_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_6__["Maintenance"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login-info.json":
  /*!***************************************!*\
    !*** ./src/app/login/login-info.json ***!
    \***************************************/

  /*! exports provided: services, containers, default */

  /***/
  function srcAppLoginLoginInfoJson(module) {
    module.exports = JSON.parse("{\"services\":[],\"containers\":[]}");
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: Login */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../../../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/templates/SimpleBaseClass.component */
    "./src/shared/templates/SimpleBaseClass.component.ts");
    /* harmony import */


    var _login_info_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-info.json */
    "./src/app/login/login-info.json");

    var _login_info_json__WEBPACK_IMPORTED_MODULE_3___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ./login-info.json */
    "./src/app/login/login-info.json", 1);
    /* harmony import */


    var src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-image/xelerate-image.component */
    "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts");
    /* harmony import */


    var _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/simple/directives/non-filter-fields.directive */
    "./src/shared/simple/directives/non-filter-fields.directive.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-text/xelerate-text.component */
    "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-input/xelerate-input.component */
    "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
    /* harmony import */


    var _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/directives/datepicker.directive */
    "./src/shared/directives/datepicker.directive.ts");
    /* harmony import */


    var _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/xelerate-elements/xelerate-button/xelerate-button.component */
    "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
    /* harmony import */


    var _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/directives/launcher.directive */
    "./src/shared/directives/launcher.directive.ts");

    var _c0 = function _c0() {
      return [];
    };

    var _c1 = function _c1() {
      return {
        "max-width": "230px"
      };
    };

    var _c2 = function _c2() {
      return {};
    };

    var _c3 = function _c3(a2, a3, a4, a22, a23) {
      return {
        "id": "wt_tab_041_000000317",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "assets/img/logo-bancolombia.png",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": " img-fluid",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "IMAGE",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "tooltiptrigger": "hover",
        "tooltipposition": "top",
        src: "assets/img/logo-bancolombia.png",
        "type": "image"
      };
    };

    var _c4 = function _c4(a2, a3, a4, a22, a23) {
      return {
        "id": "wt_tab_041_000000320",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "Welcome To Xelerate",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "TEXT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "h5"
      };
    };

    var _c5 = function _c5() {
      return {
        "max-width": "250px"
      };
    };

    var _c6 = function _c6(a2, a3, a4, a22, a23) {
      return {
        "id": "customerId",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "Customer Id",
        "value": "Admin",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group mb-0",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "hover",
        "tooltipposition": "top",
        "type": "text"
      };
    };

    var _c7 = function _c7(a2, a3, a4, a22, a23) {
      return {
        "id": "password",
        "form": "Y",
        "options": a2,
        "tags": a3,
        "styles": a4,
        "placeholder": "",
        "value": "admin",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group mb-0",
        "lblwrapclass": "form-control-label hidden ",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "form-control",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "INPUT",
        "tooltiptext": "",
        "directives": a22,
        "refs": a23,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "hover",
        "tooltipposition": "top",
        "type": "password"
      };
    };

    var _c8 = function _c8() {
      return {
        "width": "230px"
      };
    };

    var _c9 = function _c9(a3, a4, a5, a23, a24) {
      return {
        "id": "wt_tab_041_000000326",
        "click": "usrExt.launchLanding",
        "form": "Y",
        "options": a3,
        "tags": a4,
        "styles": a5,
        "placeholder": "",
        "value": "Login",
        "disabled": false,
        "readonly": false,
        "wrapclass": "form-group  inlineblock",
        "lblwrapclass": "form-control-label",
        "ctrlwrapclass": "form-control-box",
        "ctrlclass": "btn btn-info btn-round btn-block",
        "optclass": "",
        "optwrapclass": "",
        "tagCtrlWrpCls": "",
        "lblclass": "",
        "title": "Login",
        "labelReq": "Y",
        "iconclass": "",
        "wType": "BUTTON",
        "tooltiptext": "",
        "directives": a23,
        "refs": a24,
        "tooltiptitle": "",
        "iconposition": "RIGHT",
        "iconsize": " ",
        "tooltiptrigger": "",
        "tooltipposition": "",
        "type": "button"
      };
    };

    var Login =
    /*#__PURE__*/
    function (_src_shared_templates2) {
      _inherits(Login, _src_shared_templates2);

      var _super2 = _createSuper(Login);

      function Login(xelerate, cp, changeDetectorRef, elmRef) {
        var _this2;

        _classCallCheck(this, Login);

        _this2 = _super2.call(this, xelerate, _login_info_json__WEBPACK_IMPORTED_MODULE_3__);
        _this2.xelerate = xelerate;
        _this2.cp = cp;
        _this2.changeDetectorRef = changeDetectorRef;
        _this2.elmRef = elmRef;
        _this2.name = "Login";
        return _this2;
      }

      _createClass(Login, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.personalizeView();
        }
      }, {
        key: "personalizeView",
        value: function personalizeView() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.xelerate.server.getContent({
                      url: "assets/" + this.name + "_prefs.json"
                    });

                  case 2:
                    this.prefs = _context3.sent;
                    this.xelerate.personalizeWidgets(this);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "launchLanding",
        value: function launchLanding() {
          // this.xlmx.loadComponent({compClass:custEnt_detailed});
          var usrId = this.xelerate.getValue("customerId");
          var password = this.xelerate.getValue("password");
          var req = {
            header: {
              userId: usrId,
              reqType: "Login"
            },
            body: {
              userId: usrId,
              password: password
            }
          };
          var params = {
            callback: this.loginCB,
            context: this
          };
          params['reqObj'] = req;
          this.xelerate.server.postRequest(params);
        }
      }, {
        key: "loginCB",
        value: function loginCB(params) {
          console.log(params);

          if (params.resObj.header.status == "SUCCESS") {
            this.xelerate.data.transferData.set("userId", params.resObj.header.userId);
            this.xelerate.loadComponent({
              compName: "CustomerQuery_xelerate"
            });
          }
        }
      }]);

      return Login;
    }(src_shared_templates_SimpleBaseClass_component__WEBPACK_IMPORTED_MODULE_2__["SimpleBaseClass"]);

    Login.ɵfac = function Login_Factory(t) {
      return new (t || Login)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    Login.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Login,
      selectors: [["app-login"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 20,
      vars: 60,
      consts: [[1, "pagehtml"], ["id", "body", 1, "main-section"], ["id", "wt_tab_041_000000310", 1, "spanel-tsp", 2, "height", "100vh", "background-image", "url(\"assets/img/login-banner.jpg\")", "background-size", "cover"], ["id", "grids", 1, "xle-grid"], ["id", "wt_tab_041_000000312", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col6", "xle-md-col6", "xle-xl-col6"], ["id", "wt_tab_041_000000313", 1, "spanel-tsp", "pt-5"], ["id", "login_form", 1, "form-vertical", "pt-5", 2, "max-width", "500px"], ["id", "wt_tab_041_000000316", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "mb-3", "xle-h-center"], ["id", "wt_tab_041_000000317wrap", "filterFields", "N", 1, "form-group", 2, "max-width", "230px", 3, "info"], ["id", "wt_tab_041_000000319", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center", "xle-v-center"], ["id", "wt_tab_041_000000320wrap", "filterFields", "N", 1, "form-group", 3, "info"], ["id", "wt_tab_041_000000321", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "customerIdwrap", "filterFields", "N", 1, "form-group", "mb-0", 2, "max-width", "250px", 3, "info"], ["id", "wt_tab_041_000000323", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "passwordwrap", "filterFields", "N", 1, "form-group", "mb-0", 2, "max-width", "250px", 3, "info"], ["id", "wt_tab_041_000000325", 1, "grid-item", "xle-sm-col12", "xle-ti-col12", "xle-lg-col12", "xle-md-col12", "xle-xl-col12", "xle-h-center"], ["id", "wt_tab_041_000000326wrap", "filterFields", "N", 1, "form-group", "inlineblock", 2, "width", "230px", 3, "info"], ["id", "launcherdiv", "launcher", "Login"]],
      template: function Login_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_6__["XelerateImageComponent"], _shared_simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_7__["NonFilterFields"], _shared_xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_8__["XelerateTextComponent"], _shared_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_9__["XelerateInputComponent"], _shared_directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_10__["XelerateDatepickerDirective"], _shared_xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_11__["XelerateButtonComponent"], _shared_directives_launcher_directive__WEBPACK_IMPORTED_MODULE_12__["LauncherDirective"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Login, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-login",
          templateUrl: "./login.component.html",
          providers: [src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]
        }, {
          type: src_shared_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/LabelCodes.json":
  /*!************************************!*\
    !*** ./src/assets/LabelCodes.json ***!
    \************************************/

  /*! exports provided: en, default */

  /***/
  function srcAssetsLabelCodesJson(module) {
    module.exports = JSON.parse("{\"en\":{\"USER_ID\":\"User Id\",\"PASSWORD\":\"Password\"}}");
    /***/
  },

  /***/
  "./src/assets/Messages.json":
  /*!**********************************!*\
    !*** ./src/assets/Messages.json ***!
    \**********************************/

  /*! exports provided: en, default */

  /***/
  function srcAssetsMessagesJson(module) {
    module.exports = JSON.parse("{\"en\":{\"CO-CUST-001\":\"Customer Id is mandatory\",\"CO-CUST-002\":\"Successfully saved the customer details\"}}");
    /***/
  },

  /***/
  "./src/assets/config.json":
  /*!********************************!*\
    !*** ./src/assets/config.json ***!
    \********************************/

  /*! exports provided: url, firstPage, dateFormat, pageClasses, language, default */

  /***/
  function srcAssetsConfigJson(module) {
    module.exports = JSON.parse("{\"url\":\"\",\"firstPage\":\"Login\",\"dateFormat\":\"Y-m-d\",\"pageClasses\":\"\",\"language\":\"en\"}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/shared/directives/datatable.directive.ts":
  /*!******************************************************!*\
    !*** ./src/shared/directives/datatable.directive.ts ***!
    \******************************************************/

  /*! exports provided: XelerateDatatableDirective */

  /***/
  function srcSharedDirectivesDatatableDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateDatatableDirective", function () {
      return XelerateDatatableDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lib_celledit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../lib/celledit */
    "./src/shared/lib/celledit.ts");
    /* harmony import */


    var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/utility.service */
    "./src/shared/services/utility.service.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var XelerateDatatableDirective =
    /*#__PURE__*/
    function () {
      function XelerateDatatableDirective(table, cp, xelerate) {
        _classCallCheck(this, XelerateDatatableDirective);

        this.table = table;
        this.cp = cp;
        this.xelerate = xelerate;
      }

      _createClass(XelerateDatatableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var elm = this.table.nativeElement;
          var tables = this.cp.view.metaInfo.table;
          this.id = elm.id;

          for (var i = 0; i < tables.length; i++) {
            if (tables[i].id == this.id) {
              this.metaData = tables[i];
              var containerInfo = this.cp.view.metaInfo.containersMap[this.id];
              var nodesInfo = containerInfo.nodesObj[0];

              if (nodesInfo) {
                this.nodeName = nodesInfo.name;
                this.nodeId = nodesInfo.id;
                this.serviceName = nodesInfo.serviceName;
              }

              if (jQuery(elm).hasClass('dataTable')) {
                var param = Object.assign({
                  elm: elm
                }, this.metaData);
                this.dataTableInstance = this.initDataTable(param);
                this.subscribeToParentUpdates();
                this.subscribeToWindowResize();
                this.adddTEvents();
              }
            }
          }
        }
      }, {
        key: "adddTEvents",
        value: function adddTEvents() {
          var _this3 = this;

          jQuery(".selectAll").on("change", function (evt) {
            if (jQuery(evt.target).prop("checked")) {
              _this3.dataTableInstance.rows().select();
            } else {
              _this3.dataTableInstance.rows().deselect();
            }
          });
          this.dataTableInstance.on('user-select', function (e, dt, type, cell, origEvt) {
            var currRow = cell.index().row;
            var scrComponent = _this3.dataTableInstance.xelerateDirInstance.cp.view;
            var tableId = jQuery(dt.table().container()).find("table").attr("id");

            _this3.xelerate.rowAction(scrComponent, tableId, currRow);

            var selectInfo = _this3.dataTableInstance.xelerateDirInstance.metaData.select;

            if (selectInfo && selectInfo.style == "multi" && !jQuery(origEvt.target).hasClass("select-checkbox")) {
              e.preventDefault();
            }
          });
          this.dataTableInstance.on('page', function (e, settings) {
            var currRow = _this3.dataTableInstance.cell(':eq(0)', null, {
              page: 'current'
            }).index().row;

            var scrComponent = _this3.dataTableInstance.xelerateDirInstance.cp.view;
            var tableId = jQuery(_this3.dataTableInstance.table().container()).find("table").attr("id");

            _this3.xelerate.rowAction(scrComponent, tableId, currRow);
          });
        }
      }, {
        key: "subscribeToWindowResize",
        value: function subscribeToWindowResize() {
          var _this4 = this;

          this.xelerate.winResize.asObservable().subscribe(function (params) {
            _this4.dataTableInstance.columns.adjust();
          });
        }
      }, {
        key: "initDataTable",
        value: function initDataTable(param) {
          var _this5 = this;

          param.columnDefs.map(function (obj) {
            if (obj.render) {
              obj.render = _this5.dataTableBukRender;
            }
          });
          param.columns.map(function (obj) {
            if (obj.title) {
              obj.title = _this5.xelerate.getLabelDescription(obj.title, _this5.xelerate.language);
            }
          });
          param.buttons.map(function (obj) {
            if (obj.name == "add" && !obj.action) {
              obj.action = function (e, dt, node, config) {
                _this5.cp.view.newRecord();
              };
            } else if (obj.name == "addrow" && !obj.action) {
              obj.action = function (e, dt, node, config) {
                _this5.addRow(e, dt, node, config);
              };
            } else if (obj.name == "removerow" && !obj.action) {
              obj.action = function (e, dt, node, config) {
                _this5.removeRow(e, dt, node, config);
              };
            }
          });
          param.drawCallback = this.drawCallBack;
          var dataTable = jQuery(param.elm).DataTable(param);

          if (param.editable == "Y") {
            var cellEditObj = new _lib_celledit__WEBPACK_IMPORTED_MODULE_1__["CellEdit"](this.xelerate);
            cellEditObj.makeCellsEditable(param.editInfo, dataTable);
          } //// Keep xelerate datatable directive instance for any operation based on dom or datatable instance


          dataTable.xelerateDirInstance = this;
          return dataTable;
        }
      }, {
        key: "removeRow",
        value: function removeRow(e, dt, node, config) {
          dt.rows('.selected').remove().draw(false);
        }
      }, {
        key: "addRow",
        value: function addRow(e, dt, node, config) {
          dt.row.add({}).draw(false);
        }
      }, {
        key: "drawCallBack",
        value: function drawCallBack(settings) {
          var api = new jQuery.fn.dataTable.Api(settings);
          var pageCount = api.page.info().pages;
          var wrapper = jQuery('#' + settings.sTableId).closest('.dataTables_wrapper');
          var pagination = wrapper.find('.dataTables_paginate');
          var info = wrapper.find('.dataTables_info');
          pagination.toggle(pageCount > 0);
          info.toggle(pageCount > 0);
        }
      }, {
        key: "dataTableBukRender",
        value: function dataTableBukRender(data, type, full, meta) {
          return '<a class=\"BUKCLASS\" href=\"JavaScript:void(0);\">' + data + '</a>';
        }
      }, {
        key: "subscribeToParentUpdates",
        value: function subscribeToParentUpdates() {
          var _this6 = this;

          var data = this.cp.view.ifaceData;
          var dmlStruct = this.metaData.nodeStructure[0];
          var nodeName = dmlStruct;
          var recInd = nodeName.lastIndexOf("["); //// Check if it has parent multi rec nodes

          if (recInd > -1) {
            nodeName = nodeName.substr(0, recInd);
            var nodeNameBegining = nodeName.lastIndexOf("."); //// extract multirec parent node name

            if (nodeNameBegining > -1) {
              nodeName = nodeName.substr(nodeNameBegining + 1);
            }

            var nodeInfo = this.cp.view.metaInfo.nodesMap[nodeName]; ///// subscribe to parent record number changes

            if (nodeInfo) {
              this.subscriber = nodeInfo['recordUpdates'].subscribe(function () {
                //// Re Render table
                _this6.renderData(data.getRawValue());
              });
            }
          }
        }
      }, {
        key: "getTableData",
        value: function getTableData(data) {
          var dataObj = this.xelerate.getParentPointer(this.cp.view, this.nodeId, data);

          if (dataObj) {
            dataObj = dataObj[this.nodeName];
          }

          if (_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].isNull(dataObj)) dataObj = [];
          return dataObj;
        }
      }, {
        key: "renderData",
        value: function renderData(data) {
          var _this7 = this;

          var tblData = this.getTableData(data);
          this.dataTableInstance.clear();
          this.dataTableInstance.rows.add(tblData);
          this.dataTableInstance.draw();
          jQuery(this.table.nativeElement).css('width', '');
          this.dataTableInstance.columns.adjust().responsive.recalc(); //// Attaching rowAction to update metaInfo required for childs

          this.dataTableInstance.on('select', function (e, dt, type, indexes) {
            if (type === 'row' && indexes[0] !== _this7.xelerate.getCurRec(_this7.nodeId, _this7.cp.view)) {
              _this7.xelerate.rowAction(_this7.cp.view, _this7.id, indexes[0], null);
            }
          });
        }
      }, {
        key: "retrieveData",
        value: function retrieveData(data) {
          var tblData = this.dataTableInstance.rows().data().toArray();

          if (data) {
            var parentDataPtr = this.xelerate.getParentPointer(this.cp.view, this.nodeId, data);
            parentDataPtr[this.nodeName] = tblData;
          }

          return tblData;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.metaData = null;

          if (this.dataTableInstance) {
            this.dataTableInstance.xelerateDirInstance = null;
            this.dataTableInstance.destroy();
          }

          if (this.subscriber) {
            this.subscriber.unsubscribe();
          }
        }
      }]);

      return XelerateDatatableDirective;
    }();

    XelerateDatatableDirective.ɵfac = function XelerateDatatableDirective_Factory(t) {
      return new (t || XelerateDatatableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]));
    };

    XelerateDatatableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: XelerateDatatableDirective,
      selectors: [["", 8, "datatable"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDatatableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '.dataTable'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]
        }, {
          type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/directives/datepicker.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/shared/directives/datepicker.directive.ts ***!
    \*******************************************************/

  /*! exports provided: XelerateDatepickerDirective */

  /***/
  function srcSharedDirectivesDatepickerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateDatepickerDirective", function () {
      return XelerateDatepickerDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var flatpickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! flatpickr */
    "../../../../../node_modules/flatpickr/dist/flatpickr.js");
    /* harmony import */


    var flatpickr__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../xelerate-elements/xelerate-input/xelerate-input.component */
    "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var XelerateDatepickerDirective =
    /*#__PURE__*/
    function () {
      function XelerateDatepickerDirective(component, xelerate, renderer) {
        _classCallCheck(this, XelerateDatepickerDirective);

        this.component = component;
        this.xelerate = xelerate;
        this.renderer = renderer;
        this.selectorClass = 'XDTPCKR';
      }

      _createClass(XelerateDatepickerDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ctrlObj = this.component.control.nativeElement;

          if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.enrich();
            var appDateFormat = this.xelerate.appConfig.dateFormat;
            var inpDateFormat = this.info.dateformat ? this.info.dateformat : this.xelerate.appConfig.dateFormat;
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
      }, {
        key: "enrich",
        value: function enrich() {
          var _this8 = this;

          /// Include to directive arrays for later utility access
          this.component.info.directives.push(this); /// Registring for state changes as altInput might need propagation of change

          this.stateChanges = this.component.getStateChangesObservable().subscribe(function (state) {
            if (_this8.pickrInstance && _this8.pickrInstance.altInput) {
              if (state === "ENABLED") {
                _this8.renderer.removeAttribute(_this8.pickrInstance.altInput, 'disabled');
              } else {
                _this8.renderer.setAttribute(_this8.pickrInstance.altInput, 'disabled', 'true');
              }
            }
          }); /// Register for value changes as datepicker should be updated in programatical value setting

          this.valueChanges = this.component.fc.valueChanges.subscribe(function (value) {
            _this8.pickrInstance.setDate(value, false);
          });
        }
      }, {
        key: "initDate",
        value: function initDate(initParams) {
          var finalParams = Object.assign(Object.assign({}, this.defaultParams), initParams);

          if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.pickrInstance = flatpickr__WEBPACK_IMPORTED_MODULE_1___default()(jQuery(this.ctrlObj).parent()[0], finalParams);
            if (jQuery(this.ctrlObj).prop("readonly")) this.pickrInstance._input.setAttribute("disabled", "disabled");
          }
        }
      }, {
        key: "cleanupEnrichment",
        value: function cleanupEnrichment() {
          var index = this.component.info.directives.indexOf(this);

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
      }, {
        key: "destroyDate",
        value: function destroyDate() {
          if (this.pickrInstance) {
            this.pickrInstance.destroy();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.cleanupEnrichment();
          this.destroyDate();
        }
      }]);

      return XelerateDatepickerDirective;
    }();

    XelerateDatepickerDirective.ɵfac = function XelerateDatepickerDirective_Factory(t) {
      return new (t || XelerateDatepickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__["XelerateInputComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    XelerateDatepickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: XelerateDatepickerDirective,
      selectors: [["xelerate-input"]],
      inputs: {
        info: "info"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDatepickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'xelerate-input'
        }]
      }], function () {
        return [{
          type: _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_2__["XelerateInputComponent"]
        }, {
          type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/directives/dropdown.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/shared/directives/dropdown.directive.ts ***!
    \*****************************************************/

  /*! exports provided: XelerateDropdownDirective */

  /***/
  function srcSharedDirectivesDropdownDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateDropdownDirective", function () {
      return XelerateDropdownDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../xelerate-elements/xelerate-select/xelerate-select.component */
    "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var XelerateDropdownDirective =
    /*#__PURE__*/
    function () {
      function XelerateDropdownDirective(component, xelerate) {
        _classCallCheck(this, XelerateDropdownDirective);

        this.component = component;
        this.xelerate = xelerate;
        this.selectorClass = 'show-tick';
      }

      _createClass(XelerateDropdownDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          this.jQCtrlObj = jQuery(this.component.control.nativeElement);
          this.component.info.directives.push(this);
          this.initSelect();
          this.optionUpdates = this.component.getOptionUpdatesObservable().subscribe(function () {//// Should we reinitialize the dropdown plugin? Its working without re initialization also now
          }); //// Register for value changes and update select2 instance value to render in UI

          this.valueChanges = this.component.fc.valueChanges.subscribe(function (val) {
            _this9.jQCtrlObj.trigger('change.select2');
          });
        }
      }, {
        key: "initSelect",
        value: function initSelect(initParams) {
          var directive = this;
          var multiple = this.component.info.multiple == "Y" ? true : false;
          var finalParams = Object.assign({
            theme: 'bootstrap4',
            multiple: multiple,
            width: '99%'
          }, initParams);

          if (this.jQCtrlObj.hasClass(this.selectorClass)) {
            this.jQCtrlObj.select2(finalParams);
            this.jQCtrlObj.on('select2:select', function (e) {
              // var data = e.params.data;	Is it required?
              var val = this.value;
              directive.component.fc.setValue(val);
              directive.component.control.nativeElement.dispatchEvent(directive.xelerate.createEvent('change'));
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.jQCtrlObj.hasClass(this.selectorClass)) {
            this.jQCtrlObj.select2('destroy');
          }

          this.optionUpdates.unsubscribe();
          this.valueChanges.unsubscribe();
        }
      }]);

      return XelerateDropdownDirective;
    }();

    XelerateDropdownDirective.ɵfac = function XelerateDropdownDirective_Factory(t) {
      return new (t || XelerateDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__["XelerateSelectComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"]));
    };

    XelerateDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: XelerateDropdownDirective,
      selectors: [["xelerate-select"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'xelerate-select'
        }]
      }], function () {
        return [{
          type: _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_1__["XelerateSelectComponent"]
        }, {
          type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/directives/formcontrols.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/shared/directives/formcontrols.directive.ts ***!
    \*********************************************************/

  /*! exports provided: XelerateFormControlsDirective */

  /***/
  function srcSharedDirectivesFormcontrolsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateFormControlsDirective", function () {
      return XelerateFormControlsDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../xelerate-elements/abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");

    var XelerateFormControlsDirective = function XelerateFormControlsDirective(vcr, component) {
      _classCallCheck(this, XelerateFormControlsDirective);

      this.vcr = vcr;
      this.component = component;
    };

    XelerateFormControlsDirective.ɵfac = function XelerateFormControlsDirective_Factory(t) {
      return new (t || XelerateFormControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]));
    };

    XelerateFormControlsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: XelerateFormControlsDirective,
      selectors: [["", "fc", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateFormControlsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[fc]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _xelerate_elements_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/directives/launcher.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/shared/directives/launcher.directive.ts ***!
    \*****************************************************/

  /*! exports provided: LauncherDirective */

  /***/
  function srcSharedDirectivesLauncherDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LauncherDirective", function () {
      return LauncherDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var LauncherDirective =
    /*#__PURE__*/
    function () {
      function LauncherDirective(vcr, xelerate) {
        _classCallCheck(this, LauncherDirective);

        this.vcr = vcr;
        this.xelerate = xelerate;
      }

      _createClass(LauncherDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.xelerate.launcherRefs.push(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var index = this.xelerate.launcherRefs.indexOf(this);

          if (index > -1) {
            this.xelerate.launcherRefs.splice(index, 1);
          }
        }
      }]);

      return LauncherDirective;
    }();

    LauncherDirective.ɵfac = function LauncherDirective_Factory(t) {
      return new (t || LauncherDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"]));
    };

    LauncherDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LauncherDirective,
      selectors: [["", "launcher", ""]],
      inputs: {
        launcher: "launcher"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LauncherDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[launcher]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"]
        }];
      }, {
        launcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/directives/popover.directive.ts":
  /*!****************************************************!*\
    !*** ./src/shared/directives/popover.directive.ts ***!
    \****************************************************/

  /*! exports provided: XeleratePopoverDirective */

  /***/
  function srcSharedDirectivesPopoverDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XeleratePopoverDirective", function () {
      return XeleratePopoverDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var XeleratePopoverDirective =
    /*#__PURE__*/
    function () {
      function XeleratePopoverDirective(popover, xelerate, renderer) {
        _classCallCheck(this, XeleratePopoverDirective);

        this.popover = popover;
        this.xelerate = xelerate;
        this.renderer = renderer;
        this.selectorClass = 'popover-pnl';
      }

      _createClass(XeleratePopoverDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ctrlObj = this.popover.nativeElement;

          if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            var jQElm = jQuery(this.ctrlObj);
            var triggerInfo = this.xpopover;
            var triggerBehaviour = triggerInfo.triggerBehaviour == "CLICK" ? "click" : "hover";
            this.defaultParams = {
              content: this.ctrlObj,
              hideOnClick: 'toggle',
              trigger: triggerBehaviour,
              interactive: true,
              theme: 'light-border',
              maxWidth: '100vw',
              animate: 'shift-toward',
              onCreate: function onCreate(instance) {
                jQuery(instance.popper).find(".XSELECT").each(function (ind, elm) {
                  var parentElm = jQuery(elm).parents(".popover-pnl")[0];
                  jQuery(elm).select2({
                    "dropdownParent": parentElm
                  });
                });
              }
            };
            this.initPopover();
          }
        }
      }, {
        key: "initPopover",
        value: function initPopover(initParams) {
          var finalParams = Object.assign(Object.assign({}, this.defaultParams), initParams);

          if (jQuery(this.ctrlObj).hasClass(this.selectorClass)) {
            this.xelerate.tippy(document.getElementById(this.xpopover.triggerId), finalParams);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }]);

      return XeleratePopoverDirective;
    }();

    XeleratePopoverDirective.ɵfac = function XeleratePopoverDirective_Factory(t) {
      return new (t || XeleratePopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    XeleratePopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: XeleratePopoverDirective,
      selectors: [["", "xpopover", ""]],
      inputs: {
        xpopover: "xpopover"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XeleratePopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[xpopover]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _services_xelerate_service__WEBPACK_IMPORTED_MODULE_1__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        xpopover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/directives/validator.directive.ts":
  /*!******************************************************!*\
    !*** ./src/shared/directives/validator.directive.ts ***!
    \******************************************************/

  /*! exports provided: xelerateElmValidator */

  /***/
  function srcSharedDirectivesValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "xelerateElmValidator", function () {
      return xelerateElmValidator;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function xelerateElmValidator(elm, additionalValidators) {
      var validators = [];

      if (elm.info.wrapclass.indexOf("required") > -1) {
        validators.push(_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
      }

      validators.push(function (control) {
        if (control.value == "R") {
          return {
            'customErr': true
          };
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
    /***/

  },

  /***/
  "./src/shared/lib/celledit.ts":
  /*!************************************!*\
    !*** ./src/shared/lib/celledit.ts ***!
    \************************************/

  /*! exports provided: CellEdit */

  /***/
  function srcSharedLibCelleditTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellEdit", function () {
      return CellEdit;
    });
    /* harmony import */


    var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! flatpickr */
    "../../../../../node_modules/flatpickr/dist/flatpickr.js");
    /* harmony import */


    var flatpickr__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);

    var CellEdit =
    /*#__PURE__*/
    function () {
      function CellEdit(xelerate) {
        _classCallCheck(this, CellEdit);

        this.xelerate = xelerate;
      }

      _createClass(CellEdit, [{
        key: "makeCellsEditable",
        value: function makeCellsEditable(settings, dtInst) {
          var _this10 = this;

          var table = dtInst.table();
          var currRow;
          this.xelerate.jQuery.fn.extend({
            // UPDATE
            updateEditableCell: function updateEditableCell(callingElement) {
              // Need to redeclare table here for situations where we have more than one datatable on the page. See issue6 on github
              var table = _this10.xelerate.jQuery(callingElement).closest("table").DataTable().table();

              var row = table.row(_this10.xelerate.jQuery(callingElement).parents('tr'));
              var cell = table.cell(_this10.xelerate.jQuery(callingElement).parents('td, th'));
              var columnIndex = cell.index().column;

              var inputField = _this10.getInputField(callingElement); // Update


              var newValue = inputField.val(); //Krish changes - Update checked/unchecked value incase of a checkbox//

              if (inputField.attr("type") == "checkbox") {
                if (inputField.prop("checked")) newValue = inputField.attr("checkedValue");else newValue = inputField.attr("uncheckedValue");
              }

              if (!newValue && settings.allowNulls && settings.allowNulls != true) {
                // If columns specified
                if (settings.allowNulls.columns) {
                  // If current column allows nulls
                  if (settings.allowNulls.columns.indexOf(columnIndex) > -1) {
                    _update(newValue);
                  } else {
                    _addValidationCss();
                  } // No columns allow null

                } else if (!newValue) {
                  _addValidationCss();
                } //All columns allow null

              } else if (newValue && settings.onValidate) {
                if (settings.onValidate(cell, row, newValue)) {
                  _update(newValue);
                } else {
                  _addValidationCss();
                }
              } else {
                _update(newValue, inputField);
              }

              function _addValidationCss() {
                // Show validation error
                if (settings.allowNulls.errorClass) {
                  this.xelerate.jQuery(inputField).addClass(settings.allowNulls.errorClass);
                } else {
                  this.xelerate.jQuery(inputField).css({
                    "border": "red solid 1px"
                  });
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
              } // Get current page


              var currentPageIndex = table.page.info().page; //Redraw table

              table.page(currentPageIndex).draw(false);
            },
            // CANCEL
            cancelEditableCell: function cancelEditableCell(callingElement) {
              var table = _this10.xelerate.jQuery(callingElement.closest("table")).DataTable().table();

              var cell = table.cell(_this10.xelerate.jQuery(callingElement).parents('td, th')); // Set cell to it's original value

              cell.data(cell.data()); // Redraw table

              table.draw();
            }
          }); // Destroy

          if (settings === "destroy") {
            this.xelerate.jQuery(table.body()).off("click", "td");
            table = null;
          }

          if (table != null) {
            // On cell click
            // Krish changes to invoke editable on double click //
            this.xelerate.jQuery(table.body()).on('dblclick', 'tr', function (evt) {
              var tds = _this10.xelerate.jQuery(evt.currentTarget).children("td");

              _this10.xelerate.jQuery.each(tds, function (index, pThis, val) {
                var currentColumnIndex = table.cell(pThis).index().column; // DETERMINE WHAT COLUMNS CAN BE EDITED

                if (settings.columns && settings.columns.indexOf(currentColumnIndex) > -1 || !settings.columns) {
                  var row = table.row(_this10.xelerate.jQuery(pThis).parents('tr')); //editableCellsRow = row;

                  var cell = table.cell(pThis).node();
                  var oldValue = table.cell(pThis).data(); // Sanitize value

                  oldValue = _this10.sanitizeCellValue(oldValue); // Show input

                  if (!_this10.xelerate.jQuery(cell).find('input').length && !_this10.xelerate.jQuery(cell).find('select').length && !_this10.xelerate.jQuery(cell).find('textarea').length && _this10.xelerate.jQuery(cell).css("display") != "none") {
                    // Input CSS
                    //if(settings.inputTypes && settings.inputTypes[0].column != 0)
                    //	currentColumnIndex = currentColumnIndex + 1;
                    var input = _this10.getInputHtml(currentColumnIndex, settings, oldValue);

                    _this10.xelerate.jQuery(cell).html(input.html);

                    if (_this10.xelerate.jQuery(input.html).find("input").hasClass("datepicker")) {
                      var appDateFormat = _this10.xelerate.appConfig.dateFormat;
                      var settingsObj = settings.inputTypes.filter(function (inpObj) {
                        if (inpObj.column == currentColumnIndex) {
                          return inpObj;
                        }
                      });
                      var inputSetting = settingsObj[0];
                      var inpDateFormat = inputSetting.options.dateformat ? inputSetting.options.dateformat : _this10.xelerate.appConfig.dateFormat;
                      var defaultParams = {
                        dateFormat: inpDateFormat,
                        allowInput: inputSetting.options.allowinput ? inputSetting.options.allowinput : true,
                        enableTime: inputSetting.options.timepickerreq == 'Y' ? true : false,
                        altInput: appDateFormat != inpDateFormat ? true : false,
                        altFormat: appDateFormat
                      };
                      var finalParams = Object.assign(Object.assign({}, defaultParams), inputSetting.options.userSettings);
                      var self = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()(_this10.xelerate.jQuery('.datepicker')[0], finalParams);
                    } else if (_this10.xelerate.jQuery(input.html).find("select").hasClass('select2init')) {
                      _this10.xelerate.jQuery(".select2init").select2({
                        'width': '100%'
                      });
                    }

                    if (input.focus) {
                      _this10.xelerate.jQuery('#ejbeatycelledit').focus();
                    }
                  }
                }
              });
            }); //Krish changes..update the edited row on click of some other row only.

            this.xelerate.jQuery(this.xelerate.jQuery(table.container()).find("table")).on('click', function (evt) {
              var tbl = _this10.xelerate.jQuery(".tbl_edit").parents("table:first");

              if (tbl[0] != undefined) {
                var editInst = tbl.DataTable();

                var curCell = _this10.xelerate.jQuery(evt.target).closest("td").not(".dataTables_empty")[0];

                currRow = curCell ? editInst.table().cell(curCell).index().row : -1;
                var editRow = editInst.table().cell(_this10.xelerate.jQuery(".tbl_edit").parents("td:first")[0]).index().row; //let editRowObj = editRowObjMap[this.xelerate.jQuery(".tbl_edit").parents("table:first").attr("id")];
                //Darshan changes: added event on container to allow save on header click
                //currRow = table.cell(this.xelerate.jQuery(evt.currentTarget).children("td")[0]).index().row;

                if (editRow != undefined && editRow != currRow) {
                  var editRowObj = _this10.xelerate.jQuery(".tbl_edit").parents("tr:first");

                  var tds = editRowObj.children("td");

                  _this10.xelerate.jQuery.each(tds, function (index, pThis, val) {
                    if (_this10.xelerate.jQuery(pThis).find('input').length > 0) {
                      var inpElm = _this10.xelerate.jQuery(pThis).find('input')[0];

                      _this10.xelerate.jQuery(inpElm).updateEditableCell(inpElm);
                    } else if (_this10.xelerate.jQuery(pThis).find('select').length > 0) {
                      var ddnObj = _this10.xelerate.jQuery(pThis).find('select')[0];

                      _this10.xelerate.jQuery(ddnObj).updateEditableCell(ddnObj);
                    }
                  });
                }

                evt.stopPropagation();
              }
            });
          }
        }
      }, {
        key: "getInputHtml",
        value: function getInputHtml(currentColumnIndex, settings, oldValue) {
          var inputSetting,
              inputType,
              input,
              inputCss,
              confirmCss,
              cancelCss,
              startWrapperHtml = '',
              endWrapperHtml = '',
              listenToKeys = false;
          input = {
            "focus": true,
            "html": null
          };

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
          } //Krish changes -- addition of checkbox control //


          if (inputSetting) {
            switch (inputType) {
              case "list":
                input.html = this.getDropdown(inputSetting.info, oldValue);
                input.focus = false;
                break;

              case "list-confirm":
                // List w/ confirm
                input.html = startWrapperHtml + "<select class='" + inputCss + "'>";
                this.xelerate.jQuery.each(inputSetting.options, function (index, option) {
                  if (oldValue == option.value) {
                    input.html = input.html + "<option value='" + option.value + "' selected>" + option.display + "</option>";
                  } else {
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

              case "text-confirm":
                // text input w/ confirm
                input.html = startWrapperHtml + "<input id='ejbeatycelledit' class='" + inputCss + "' value='" + oldValue + "'" + (listenToKeys ? " onkeyup='if(event.keyCode==13) {this.xelerate.jQuery(this).updateEditableCell(this);} else if (event.keyCode===27) {this.xelerate.jQuery(this).cancelEditableCell(this);}'" : "") + "></input>&nbsp;<a href='javascript:void(0);' class='" + confirmCss + "' onclick='this.xelerate.jQuery(this).updateEditableCell(this)'>Confirm</a> <a href='javascript:void(0);' class='" + cancelCss + "' onclick='this.xelerate.jQuery(this).cancelEditableCell(this)'>Cancel</a>" + endWrapperHtml;
                break;

              case "undefined-confirm":
                // text input w/ confirm
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

              default:
                // text input
                input.html = this.getInputBox(inputSetting.info, oldValue, inputSetting.type);
                break;
            }
          }

          return input;
        }
      }, {
        key: "getInputField",
        value: function getInputField(callingElement) {
          // Update datatables cell value
          var inputField;

          switch (this.xelerate.jQuery(callingElement).prop('nodeName').toLowerCase()) {
            case 'a':
              // This means they're using confirmation buttons
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
      }, {
        key: "sanitizeCellValue",
        value: function sanitizeCellValue(cellValue) {
          if (typeof cellValue === 'undefined' || cellValue === null || cellValue.length < 1) {
            return "";
          } // If not a number


          if (isNaN(cellValue)) {
            // escape single quote
            cellValue = cellValue.replace(/'/g, "&#39;");
          }

          return cellValue;
        }
      }, {
        key: "getInputBox",
        value: function getInputBox(paramsObj, oldVal, inputType) {
          paramsObj = paramsObj.replace(/'/g, "\"");
          paramsObj = JSON.parse(paramsObj);
          var html;
          var mainWrapClass = "",
              mainWrapId = "",
              labelWrapClass = "",
              labelWrapId = "",
              labelClass = "",
              labelId = "",
              labelFor = "",
              ctrlWrapClass = "",
              ctrlWrapId = "",
              ctrlId = "",
              ctrlClass = "",
              ctrlType = "",
              ctrlPlaceHolder = "",
              ctrlReadonly = "";
          if (paramsObj.wrapClass) mainWrapClass = " class='" + paramsObj.wrapClass + "'";
          if (paramsObj.lblwrapclass) labelWrapClass = " class='" + paramsObj.lblwrapclass + "'";
          if (paramsObj.lblclass) labelClass = " class='" + paramsObj.lblclass + "'";
          if (paramsObj.ctrlwrapclass) ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
          if (inputType == "datepicker") paramsObj.ctrlclass = paramsObj.ctrlclass + " datepicker tbl_edit";else paramsObj.ctrlclass = paramsObj.ctrlclass + " tbl_edit";
          if (paramsObj.ctrlclass) ctrlClass = " class='" + paramsObj.ctrlclass + "'";
          if (paramsObj.type) ctrlType = " type='" + paramsObj.type + "'";
          if (paramsObj.placeholder) ctrlPlaceHolder = " placeholder='" + paramsObj.placeholder + "'";
          if (paramsObj.readonly) ctrlReadonly = " readonly='" + paramsObj.readonly + "'";

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
            var iconWrapClass = " class='input-group'";
            var iconClass = " class='" + paramsObj.iconclass + "'";
            if (paramsObj.iconsize) iconWrapClass = " class='input-group " + paramsObj.iconsize + "'";
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
          } else {
            html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + " value='" + oldVal + "'/></div></div>";
          }

          return html;
        }
      }, {
        key: "getCheckBox",
        value: function getCheckBox(paramsObj, oldVal) {
          paramsObj = paramsObj.replace(/'/g, "\"");
          paramsObj = JSON.parse(paramsObj);
          var html;
          var mainWrapClass = "",
              mainWrapId = "",
              labelClass = "",
              labelId = "",
              labelFor = "",
              ctrlWrapClass = "",
              ctrlWrapId = "",
              ctrlId = "",
              ctrlClass = "",
              ctrlType = "",
              ctrlPlaceHolder = "",
              ctrlReadonly = "",
              ctrlCheckedVal = "",
              ctrlUncheckedVal = "",
              ctrlIndeterminateVal = "";
          ctrlType = " type='checkbox'";
          ctrlCheckedVal = " checkedValue='" + paramsObj.checkedVal + "'";
          ctrlUncheckedVal = " uncheckedValue='" + paramsObj.unCheckedVal + "'";
          ctrlIndeterminateVal = " indeterminateValue='" + paramsObj.indeterminateVal + "'";
          if (paramsObj.wrapClass) mainWrapClass = " class='" + paramsObj.wrapClass + "'";
          if (paramsObj.lblclass) labelClass = " class='" + paramsObj.lblclass + "'";
          if (paramsObj.ctrlwrapclass) ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
          if (paramsObj.ctrlclass) ctrlClass = " class='" + paramsObj.ctrlclass + " tbl_edit'";else ctrlClass = " class='tbl_edit'";
          if (paramsObj.placeholder) ctrlPlaceHolder = " placeholder='" + paramsObj.placeholder + "'";
          if (paramsObj.readonly) ctrlReadonly = " readonly='" + paramsObj.readonly + "'";

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
          if (paramsObj.checkedVal == oldVal) html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + ctrlCheckedVal + ctrlUncheckedVal + ctrlIndeterminateVal + " checked/>";else html = html + "<input" + ctrlId + ctrlClass + ctrlReadonly + ctrlType + ctrlPlaceHolder + ctrlCheckedVal + ctrlUncheckedVal + ctrlIndeterminateVal + "/>";
          html = html + "<label" + labelId + labelClass + labelFor + ">";
          /* if(paramsObj.title)
              html = html + paramsObj.title; */

          html = html + "</label>";
          html = html + "</div>";
          html = html + "</div>";
          html = html + "</div>";
          return html;
        }
      }, {
        key: "getDropdown",
        value: function getDropdown(paramsObj, oldVal) {
          paramsObj = paramsObj.replace(/'/g, "\"");
          paramsObj = JSON.parse(paramsObj);
          paramsObj.ctrlclass = paramsObj.ctrlclass + " select2init  tbl_edit";
          var html;
          var mainWrapClass = "",
              mainWrapId = "",
              labelWrapClass = "",
              labelWrapId = "",
              labelClass = "",
              labelId = "",
              labelFor = "",
              ctrlWrapClass = "",
              ctrlWrapId = "",
              ctrlId = "",
              ctrlClass = "";
          if (paramsObj.wrapClass) mainWrapClass = " class='" + paramsObj.wrapClass + "'";
          if (paramsObj.lblwrapclass) labelWrapClass = " class='" + paramsObj.lblwrapclass + "'";
          if (paramsObj.lblclass) labelClass = " class='" + paramsObj.lblclass + "'";
          if (paramsObj.ctrlwrapclass) ctrlWrapClass = " class='" + paramsObj.ctrlwrapclass + "'";
          if (paramsObj.ctrlclass) ctrlClass = " class='" + paramsObj.ctrlclass + "'";

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
          var options = paramsObj.options.length;

          for (var i = 0; i < options; i++) {
            var option = paramsObj.options[i];
            var optionVal = " value='" + option.val + "'";
            if (option.val == oldVal) html = html + "<option" + optionVal + " selected>";else html = html + "<option" + optionVal + ">";
            html = html + option.desc;
            html = html + "</option>";
          }

          html = html + "</select>";
          html = html + "</div>";
          html = html + "</div>";
          return html;
        }
      }]);

      return CellEdit;
    }();
    /***/

  },

  /***/
  "./src/shared/pipes/cardslimit.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/shared/pipes/cardslimit.pipe.ts ***!
    \*********************************************/

  /*! exports provided: CardsLimitPipe */

  /***/
  function srcSharedPipesCardslimitPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsLimitPipe", function () {
      return CardsLimitPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CardsLimitPipe =
    /*#__PURE__*/
    function (_angular_common__WEBP) {
      _inherits(CardsLimitPipe, _angular_common__WEBP);

      var _super3 = _createSuper(CardsLimitPipe);

      function CardsLimitPipe() {
        var _this11;

        _classCallCheck(this, CardsLimitPipe);

        _this11 = _super3.apply(this, arguments);
        _this11.cardsLimit = 30;
        return _this11;
      }

      _createClass(CardsLimitPipe, [{
        key: "transform",
        value: function transform(value) {
          var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.cardsLimit;
          if (value == null) return value;

          if (!this.supported(value)) {
            throw invalidPipeArgumentError(_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], value);
          }

          return value.slice(start, end);
        }
      }, {
        key: "supported",
        value: function supported(obj) {
          return typeof obj === 'string' || Array.isArray(obj);
        }
      }]);

      return CardsLimitPipe;
    }(_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]);

    CardsLimitPipe.ɵfac = function CardsLimitPipe_Factory(t) {
      return ɵCardsLimitPipe_BaseFactory(t || CardsLimitPipe);
    };

    CardsLimitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "cardslimit",
      type: CardsLimitPipe,
      pure: true
    });

    var ɵCardsLimitPipe_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CardsLimitPipe);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsLimitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'cardslimit'
        }]
      }], null, null);
    })();

    function invalidPipeArgumentError(type, value) {
      return Error("InvalidPipeArgument: '".concat(value, "' for pipe '").concat(type, "'"));
    }
    /***/

  },

  /***/
  "./src/shared/services/context-provider.service.ts":
  /*!*********************************************************!*\
    !*** ./src/shared/services/context-provider.service.ts ***!
    \*********************************************************/

  /*! exports provided: ContextProvider */

  /***/
  function srcSharedServicesContextProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContextProvider", function () {
      return ContextProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContextProvider = function ContextProvider() {
      _classCallCheck(this, ContextProvider);

      this.elms = new Array();
      this.elmsMap = new Map();
    };

    ContextProvider.ɵfac = function ContextProvider_Factory(t) {
      return new (t || ContextProvider)();
    };

    ContextProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContextProvider,
      factory: ContextProvider.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/services/data.service.ts":
  /*!*********************************************!*\
    !*** ./src/shared/services/data.service.ts ***!
    \*********************************************/

  /*! exports provided: DataService */

  /***/
  function srcSharedServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(fb) {
        _classCallCheck(this, DataService);

        this.fb = fb;
        this.dataGroup = new Map();
        this.transferData = new Map();
      }

      _createClass(DataService, [{
        key: "setXelerateObj",
        value: function setXelerateObj(xelerateObj) {
          this.xelerate = xelerateObj;
        }
      }, {
        key: "getServiceData",
        value: function getServiceData(serviceName) {
          var ifaceDataGroup = this.dataGroup.get(serviceName);
          return ifaceDataGroup.getRawValue();
        }
      }, {
        key: "loadServiceData",
        value: function loadServiceData(scrComponent, serviceName, data) {
          //// Reset curRec and other metadata
          this.xelerate.traverseNodeChilds(scrComponent, serviceName, null, serviceName, this.xelerate.resetCurRec);
          this.xelerate.traverseNodeChilds(scrComponent, serviceName, null, serviceName, this.xelerate.resetCurPage);
          var servStruct = scrComponent.metaInfo.dataStructure[serviceName];
          var servDataGrp = scrComponent.ifaceData.get(serviceName);
          this.updateDataGroup(servStruct, servDataGrp, data);
          var scrData = this.xelerate.getScrData(scrComponent);
          scrComponent.dataTableDirs.forEach(function (dtInst) {
            if (dtInst.serviceName == serviceName) {
              dtInst.renderData(scrData);
            }
          });
          this.xelerate.propagateChangeDetection(scrComponent);
        }
      }, {
        key: "loadScrData",
        value: function loadScrData(scrComponent, data) {
          //// Reset curRec and other metadata
          var services = scrComponent.metaInfo.services;

          for (var s = 0; s < services.length; s++) {
            var service = services[s];
            this.xelerate.traverseNodeChilds(scrComponent, service, null, service, this.xelerate.resetCurRec);
            this.xelerate.traverseNodeChilds(scrComponent, service, null, service, this.xelerate.resetCurPage);
          } // this.xelerate.traverseNodeChilds(scrComponent, scrComponent.metaInfo.rootName, this.xelerate.resetCurRec);
          // this.xelerate.traverseNodeChilds(scrComponent, scrComponent.metaInfo.rootName, this.xelerate.resetCurPage);


          this.updateScrData(scrComponent, data);
          scrComponent.dataTableDirs.forEach(function (dtInst) {
            dtInst.renderData(data);
          });
          this.xelerate.propagateChangeDetection(scrComponent);
        }
      }, {
        key: "buildScrData",
        value: function buildScrData(component) {
          var viewData = component.ifaceData.getRawValue();
          component.dataTableDirs.forEach(function (dtInst) {
            dtInst.retrieveData(viewData);
          });
          return viewData;
        }
      }, {
        key: "createScrData",
        value: function createScrData(scrName, dataStructure) {
          var ifaceData = {};
          var ifaceDataGroup = this.fb.group({});
          var ifaceStruct = dataStructure ? dataStructure : {};
          this.updateDataGroup(ifaceStruct, ifaceDataGroup, ifaceData);
          this.dataGroup.set(scrName, ifaceDataGroup);
          return ifaceDataGroup;
        }
      }, {
        key: "updateScrData",
        value: function updateScrData(scrComponent, scrData, scrStruct) {
          scrStruct = scrStruct ? scrStruct : scrComponent.metaInfo.dataStructure;
          this.updateDataGroup(scrStruct, scrComponent.ifaceData, scrData);
        }
      }, {
        key: "updateDataGroup",
        value: function updateDataGroup(struct, fg, data) {
          for (var c = 0; c < Object.keys(struct).length; c++) {
            var key = Object.keys(struct)[c];
            var cStruct = struct[key];
            var cData = data[key];
            var ufc = fg.get(key);

            if (Array.isArray(cStruct)) {
              var cfa = ufc;
              cfa = this.createFormArray(cStruct, cfa, cData);

              if (!ufc) {
                fg.addControl(key, cfa);
              }
            } else if (typeof cStruct == "object") {
              var cfg = ufc;
              cfg = this.createFormGroup(cStruct, cfg, cData);

              if (!ufc) {
                fg.addControl(key, cfg);
              }
            } else {
              if (ufc) {
                fg.get(key).setValue(cData);
              } else {
                fg.addControl(key, this.createFormControl(cData, struct, key));
              }
            }
          }

          return fg;
        }
      }, {
        key: "createFormArray",
        value: function createFormArray(struct, fa, datas) {
          var _this12 = this;

          var cfa = fa ? fa : this.fb.array([]);
          /*
          Dont clear as if childs are formGroup considering performance, so how to clear for premitives?
          cfa.clear();
          */

          datas = datas ? datas : [];
          datas.forEach(function (elm, index) {
            if (typeof elm == "object") {
              var cfg = cfa.at(index);

              if (cfg) {
                //// Update if form group exists already at that index
                _this12.createFormGroup(struct[0], cfg, elm);
              } else {
                cfa.push(_this12.createFormGroup(struct[0], null, elm));
              }
            } else {
              cfa.push(_this12.createFormControl(elm, struct, elm));
            }
          });

          if (cfa.length > datas.length) {
            ///// Remove extra records previously existing
            var cfaLength = cfa.length; //// Should be removed from last to avoid array index mismatch

            for (var r = cfaLength - 1; r >= datas.length; r--) {
              cfa.removeAt(r);
            }
          }

          return cfa;
        }
      }, {
        key: "createFormGroup",
        value: function createFormGroup(struct, fg, data) {
          var cfg = fg ? fg : this.fb.group({});
          data = data ? data : {};
          this.updateDataGroup(struct, cfg, data);
          return cfg;
        }
      }, {
        key: "createFormControl",
        value: function createFormControl(value, struct, key) {
          var fc = this.fb.control(value);
          /*  Change listener for each control level required?
          fc.valueChanges.subscribe((v) => {
          console.log("Changed : "+v)
          });
          */

          return fc;
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/services/http.service.ts":
  /*!*********************************************!*\
    !*** ./src/shared/services/http.service.ts ***!
    \*********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcSharedServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utility.service */
    "./src/shared/services/utility.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../../../../node_modules/rxjs/_esm2015/operators/index.js");

    var xelerateHttpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var HttpService =
    /*#__PURE__*/
    function () {
      function HttpService(httpCli) {
        _classCallCheck(this, HttpService);

        this.httpCli = httpCli;
        this.url = 'http://localhost:7330/CustGroupBS/';
      }

      _createClass(HttpService, [{
        key: "setXelerateObj",
        value: function setXelerateObj(xelerateObj) {
          this.xelerate = xelerateObj;
        }
      }, {
        key: "getHeader",
        value: function getHeader() {
          var header = {}; ////// build header required

          return header;
        }
      }, {
        key: "getHttpOptions",
        value: function getHttpOptions(param) {
          var httpOptions = xelerateHttpOptions;

          if (param.httpOptions) {
            httpOptions = Object.assign({
              httpOptions: httpOptions
            }, param.httpOptions);
          }

          return httpOptions;
        }
      }, {
        key: "postRequest",
        value: function postRequest(param) {
          var _this13 = this;

          var url = this.url;

          if (param.url) {
            url = param.url;
          }
          /* let req = {};
          req['header'] = this.getHeader();
          req['body'] = param.reqObj; */


          var httpOptions = this.getHttpOptions(param);
          return this.httpCli.post(url, param.reqObj, httpOptions).subscribe(function (response) {
            param.resObj = response;

            _this13.xelerate.invokeCallback(param);

            return response;
          }, function (httpError) {
            if (httpError.error instanceof ProgressEvent) {
              param.error = httpError;
            } else {
              param.error = httpError.error;
            }

            _this13.xelerate.invokeCallback(param);

            return param.error;
          });
        }
      }, {
        key: "getContent",
        value: function getContent(param) {
          var _this14 = this;

          var url = param.url;
          return this.httpCli.get(url, param.options).toPromise().then(function (response) {
            param.resObj = response;

            _this14.xelerate.invokeCallback(param);

            return response;
          })["catch"](function (err) {
            param.errpr = err;

            _this14.xelerate.invokeCallback(param);

            return null;
          });
        }
      }, {
        key: "requestSubscriber",
        value: function requestSubscriber(param) {
          var url = this.url;

          if (param.url) {
            url = param.url;
          }

          var req = {};
          req['header'] = this.getHeader();
          req['body'] = param.reqObj;
          var httpOptions = this.getHttpOptions(param);
          return this.httpCli.post(url, param.reqObj, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var key = Object.keys(res)[0];
            return res[key];
          }));
        }
      }, {
        key: "filterErrorsCB",
        value: function filterErrorsCB(param) {
          var error = param.error;

          if (!error) {
            var res = param.resObj;

            if (res.errorList.length == 0) {
              if (param.userCB) {
                param.context = param.userContext;

                _utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].invokeMethod(param, "userCB");
              }
            } else {
              error = res.errorList[0];
            }
          }

          if (error) {
            var errorObj = error;

            if (error.errorList) {
              errorObj = error.errorList[0];
            }

            this.xelerate.displayPopup({
              type: 'error',
              text: errorObj.message
            });
          }
        }
      }, {
        key: "updateFilterCB",
        value: function updateFilterCB(param) {
          param.userCB = param.callback;
          param.userContext = param.context;
          param.callback = this.filterErrorsCB;
          param.context = this;
        }
      }, {
        key: "findAll",
        value: function findAll(param) {
          param.url = this.url + 'findAll';
          param.reqId = 'findAll';
          param.reqObj = {};

          if (param.filterErrors) {
            this.updateFilterCB(param);
          } // let param = {customCB: this.findCB, callback: this.commonCB, context:this, url:this.url+'findAll'};


          this.xelerate.server.postRequest(param);
        }
      }, {
        key: "findByKey",
        value: function findByKey(param) {
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
      }, {
        key: "save",
        value: function save(param) {
          param.url = this.url + 'save';
          param.reqObj = {};
          param.reqObj[param.nodeName] = param.records;

          if (param.filterErrors) {
            this.updateFilterCB(param);
          }

          this.xelerate.server.postRequest(param);
        }
      }, {
        key: "delete",
        value: function _delete(param) {
          param.url = this.url + 'delete';
          param.reqObj = {};
          param.reqObj[param.nodeName] = param.records;

          if (param.filterErrors) {
            this.updateFilterCB(param);
          }

          this.xelerate.server.postRequest(param);
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/services/maintenance.service.ts":
  /*!****************************************************!*\
    !*** ./src/shared/services/maintenance.service.ts ***!
    \****************************************************/

  /*! exports provided: Maintenance */

  /***/
  function srcSharedServicesMaintenanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Maintenance", function () {
      return Maintenance;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./utility.service */
    "./src/shared/services/utility.service.ts");
    /* harmony import */


    var _xelerate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var Maintenance =
    /*#__PURE__*/
    function () {
      function Maintenance(xelerate) {
        _classCallCheck(this, Maintenance);

        this.xelerate = xelerate;
      }

      _createClass(Maintenance, [{
        key: "query",
        value: function query(scrComponent) {
          var scrData = this.xelerate.data.buildScrData(scrComponent);
          var serviceName = scrComponent.metaInfo.entities[0];
          var rootReqNode = scrComponent.metaInfo.rootName + "_ip";
          var rootData = scrData[rootReqNode];
          rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
          var masterKey = Object.keys(rootData)[0]; // let masterData = UtilityServices.copyJSON(scrData);

          var masterData = rootData[masterKey];
          /* for (const col in masterData) {
              if (masterData.hasOwnProperty(col)) {
                  const colVal = masterData[col];
                  if(!colVal || typeof(colVal) != "string"){
                      delete masterData[col];
                  }
              }
          } */

          var userId = this.xelerate.data.transferData.get("userId");
          var reqObj = {
            "header": {
              "userId": userId,
              "reqType": serviceName + "_Query"
            },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_Query" },
            "body": rootData
          };
          var params = {
            callback: this.queryCB,
            context: this,
            scrComponent: scrComponent,
            reqObj: reqObj
          };
          this.xelerate.server.postRequest(params);
        }
      }, {
        key: "queryCB",
        value: function queryCB(params) {
          var res = params.resObj;

          if (res.header.status == "SUCCESS") {
            var serviceName = params.scrComponent.metaInfo.rootName + "_op";
            this.xelerate.data.loadServiceData(params.scrComponent, serviceName, res.body);
            this.xelerate.jQuery(".nav-item:last").children().click();
          } else {
            this.xelerate.displayPopup({
              type: 'error',
              msg: res.header.errMsg
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete(scrComponent) {
          var scrData = this.xelerate.data.buildScrData(scrComponent);
          var serviceName = scrComponent.metaInfo.entities[0];
          var rootReqNode = scrComponent.metaInfo.rootName + "_ip";
          var rootData = scrData[rootReqNode];
          rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
          var userId = this.xelerate.data.transferData.get("userId");
          var reqObj = {
            "header": {
              "userId": userId,
              "reqType": serviceName + "_Delete"
            },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_Delete" },
            "body": rootData
          };
          var params = {
            callback: this.deleteCB,
            context: this,
            reqObj: reqObj
          };
          this.xelerate.server.postRequest(params);
        }
      }, {
        key: "deleteCB",
        value: function deleteCB(params) {
          var resHeader = params.resObj.header;

          if (resHeader.status == "SUCCESS") {
            this.xelerate.displayPopup({
              msg: "Successfully deleted"
            });
          } else {
            this.xelerate.displayPopup({
              type: 'error',
              msg: resHeader.errMsg
            });
          }
        }
      }, {
        key: "create",
        value: function create(scrComponent) {
          this.save(scrComponent, "Create");
        }
      }, {
        key: "modify",
        value: function modify(scrComponent) {
          this.save(scrComponent, "Modify");
        }
      }, {
        key: "save",
        value: function save(scrComponent, action) {
          var scrData = this.xelerate.data.buildScrData(scrComponent);
          var serviceName = scrComponent.metaInfo.entities[0];
          var rootReqNode = scrComponent.metaInfo.rootName + "_ip";
          var rootData = scrData[rootReqNode];
          rootData = _utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityServices"].copyJSON(rootData);
          var userId = this.xelerate.data.transferData.get("userId");
          var reqObj = {
            "header": {
              "userId": userId,
              "reqType": serviceName + "_" + action
            },
            // "header": { "userId": userId, "reqType": scrComponent.metaInfo.rootName+"_"+action },
            "body": rootData
          };
          var params = {
            callback: this.saveCB,
            context: this,
            reqObj: reqObj
          };
          this.xelerate.server.postRequest(params);
        }
      }, {
        key: "saveCB",
        value: function saveCB(params) {
          var resHeader = params.resObj.header;

          if (resHeader.status == "SUCCESS") {
            this.xelerate.displayPopup({
              msg: "Successfully saved"
            });
          } else {
            this.xelerate.displayPopup({
              type: 'error',
              msg: resHeader.errMsg
            });
          }
        }
      }]);

      return Maintenance;
    }();

    Maintenance.ɵfac = function Maintenance_Factory(t) {
      return new (t || Maintenance)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"]));
    };

    Maintenance.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Maintenance,
      factory: Maintenance.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Maintenance, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _xelerate_service__WEBPACK_IMPORTED_MODULE_2__["XelerateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/services/utility.service.ts":
  /*!************************************************!*\
    !*** ./src/shared/services/utility.service.ts ***!
    \************************************************/

  /*! exports provided: UtilityServices */

  /***/
  function srcSharedServicesUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityServices", function () {
      return UtilityServices;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UtilityServices =
    /*#__PURE__*/
    function () {
      function UtilityServices() {
        _classCallCheck(this, UtilityServices);
      }

      _createClass(UtilityServices, null, [{
        key: "invokeMethod",
        value: function invokeMethod(param, methodName) {
          var method = methodName ? param[methodName] : param[param.methodName];

          if (method) {
            if (param.context) {
              return method.call(param.context, param);
            } else {
              return method(param);
            }
          } else {
            this.log("Invokation Method Not Found");
          }
        }
      }, {
        key: "log",
        value: function log(param) {
          //// Check log level and write respectively, Yet to implement
          console.log(param.msg);

          if (param.trace) {
            console.trace();
          }
        }
      }, {
        key: "isNull",
        value: function isNull(param) {
          var res = false;
          if (param === null || param === undefined || param === "" || param === "undefined") res = true;
          return res;
        }
      }, {
        key: "copyJSON",
        value: function copyJSON(object) {
          return JSON.parse(JSON.stringify(object));
        }
      }, {
        key: "isFunction",
        value: function isFunction(param) {
          return typeof param === "function";
        }
      }, {
        key: "startLoader",
        value: function startLoader(domElm) {
          var loader = "<div class=\"xle-loader-box\"><div class=\"xle-loader\"></div></div>";
          jQuery(domElm).addClass("xle-loader-parent");
          jQuery(domElm).append(loader);
        }
      }, {
        key: "stopLoader",
        value: function stopLoader(domElm) {
          jQuery(domElm).removeClass("xle-loader-parent");
          jQuery(domElm).find(".xle-loader-box").remove();
        }
      }]);

      return UtilityServices;
    }();

    UtilityServices.ɵfac = function UtilityServices_Factory(t) {
      return new (t || UtilityServices)();
    };

    UtilityServices.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UtilityServices,
      factory: UtilityServices.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilityServices, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/services/xelerate.service.ts":
  /*!*************************************************!*\
    !*** ./src/shared/services/xelerate.service.ts ***!
    \*************************************************/

  /*! exports provided: XelerateService */

  /***/
  function srcSharedServicesXelerateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateService", function () {
      return XelerateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../../../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utility.service */
    "./src/shared/services/utility.service.ts");
    /* harmony import */


    var _directives_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../directives/validator.directive */
    "./src/shared/directives/validator.directive.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data.service */
    "./src/shared/services/data.service.ts");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./http.service */
    "./src/shared/services/http.service.ts");
    /* harmony import */


    var _app_app_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../app/app.components */
    "./src/app/app.components.ts");

    var XelerateService =
    /*#__PURE__*/
    function () {
      function XelerateService(data, server, compProvider, resolver, injector, rf) {
        _classCallCheck(this, XelerateService);

        this.data = data;
        this.server = server;
        this.compProvider = compProvider;
        this.resolver = resolver;
        this.injector = injector;
        this.rf = rf;
        this.scrHierarchy = {
          xChilds: [],
          xId: "root",
          xParent: null
        };
        this.launcherRefs = new Array();
        this.screens = new Map();
        this.jQuery = jQuery;
        this.tippy = tippy;
        this.window = window;
        this.winResize = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //// Yet another reference for elements in all screens

        this.elms = new Array();
        this.elmsMap = new Map(); //Hierarchy level

        this.currentExpandLevel = 2;
        this.currentCollapseLevel = 2; // Constants

        this.separator = "~";
        window.xelerate = this;
        server.setXelerateObj(this);
        data.setXelerateObj(this);
        this.renderer = rf.createRenderer(null, null);
      }

      _createClass(XelerateService, [{
        key: "isEqual",
        value: function isEqual(obj1, obj2) {
          if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
            return true;
          } else {
            return false;
          }
        }
        /*
        Input : param - red from assets folder consisting of app configurations
        */

      }, {
        key: "initAppConfig",
        value: function initAppConfig(param) {
          this.appConfig = param;
          this.language = param.language ? param.language : "en";
          this.server.url = param.url ? param.url : window.location.href;

          if (param.pageClasses) {
            jQuery('body').addClass(param.pageClasses);
          }

          this.initAppEvents();
        }
      }, {
        key: "initLabelsMap",
        value: function initLabelsMap(param) {
          this.labelsMap = param; //// Create empty object to avoid errors in renderer

          if (!this.labelsMap[this.language]) {
            console.log("Provided labels not found with the current language!!!");
            this.labelsMap[this.language] = {};
          }
        }
      }, {
        key: "initMessagesMap",
        value: function initMessagesMap(param) {
          this.msgsMap = param; //// Create empty object to avoid errors in renderer

          if (!this.msgsMap[this.language]) {
            console.log("Provided message codes not found with current language!!!");
            this.msgsMap[this.language] = {};
          }
        }
      }, {
        key: "initAppEvents",
        value: function initAppEvents() {
          var _this15 = this;

          jQuery(window).on("resize", function (e) {
            _this15.winResize.next();
          });
        }
      }, {
        key: "initScreen",
        value: function initScreen(scrComponent) {
          //// Keep screen obj in map for any global reference
          var hierarchy = scrComponent.hierarchy;
          this.screens.set(hierarchy.xId, scrComponent); //// component reference to cp for access in directives

          scrComponent.cp.view = scrComponent; //// create empty data model

          scrComponent.ifaceData = this.data.createScrData(hierarchy.xId, scrComponent.metaInfo.dataStructure);
          this.initNodesMap(scrComponent);
          this.initContainersMap(scrComponent);
          this.initLayout(scrComponent);
          this.addGlobalEvents(); //	this.initPopovers(scrComponent);
          //// Add class and property for dom filter and reference

          if (scrComponent.screenType == "MAIN") this.renderer.addClass(scrComponent.elmRef.nativeElement, "mainScr");else this.renderer.removeClass(jQuery(scrComponent.elmRef.nativeElement).find(".pagehtml")[0], "pagehtml");
          this.renderer.addClass(scrComponent.elmRef.nativeElement, "xelerateScr");
          this.renderer.setProperty(scrComponent.elmRef.nativeElement, "xelerateScrInst", scrComponent); //// Remove page specific class for subscreens

          if (hierarchy.xParent) {
            var pageBody = scrComponent.elmRef.nativeElement.querySelector("section");
            this.renderer.removeClass(pageBody, "main-section");
          }
        }
      }, {
        key: "addGlobalEvents",
        value: function addGlobalEvents() {
          jQuery(document).on("click", function (evt) {
            if (jQuery(".tbl_edit")[0] != undefined && !jQuery(evt.target).hasClass("tbl_edit")) {
              jQuery(".tbl_edit").parents("table:first").trigger("click");
            }
          });
        }
      }, {
        key: "initLayout",
        value: function initLayout(scrComponent) {
          var isHeaderCollapse = scrComponent.metaInfo.headerCollapse;
          if (isHeaderCollapse) this.makeHeaderCollapse();
        }
      }, {
        key: "initPopovers",
        value: function initPopovers(scrComponent) {
          var _this16 = this;

          var jQscr = jQuery(scrComponent.elmRef.nativeElement);
          jQscr.find(".popover-pnl").each(function (ind, elm) {
            var jQElm = jQuery(elm);
            var triggerInfo = jQElm.data("x-triggerinfo");
            var triggerBehaviour = triggerInfo.triggerBehaviour == "CLICK" ? "click" : "hover";

            _this16.tippy(document.getElementById(triggerInfo.triggerId), {
              content: elm,
              hideOnClick: 'toggle',
              trigger: triggerBehaviour,
              interactive: true,
              theme: 'light-border',
              maxWidth: '100vw',
              animate: 'shift-toward',
              onCreate: function onCreate(instance) {
                jQuery(instance.popper).find(".XSELECT").each(function (ind, elm) {
                  var parentElm = jQuery(elm).parents(".popover-pnl")[0];
                  jQuery(elm).select2({
                    "dropdownParent": parentElm
                  });
                });
              }
            });
          });
        }
      }, {
        key: "initContainersMap",
        value: function initContainersMap(scrComponent) {
          scrComponent.metaInfo.containersMap = {};
          var cntrs = scrComponent.metaInfo.containers ? scrComponent.metaInfo.containers : [];

          for (var c = 0; c < cntrs.length; c++) {
            var cntr = cntrs[c];
            var cntrObj = {
              id: cntr.id,
              curPage: 0
            };
            var info = cntr.info;

            if (info) {
              cntrObj['type'] = info[0];
              cntrObj['pageType'] = info[1];
              cntrObj['pageSize'] = info[2] ? parseInt(info[2]) : 99999;
            }

            var nodes = cntr.nodes;

            if (nodes) {
              cntrObj['nodes'] = nodes;
              cntrObj['nodesObj'] = [];

              for (var n = 0; n < nodes.length; n++) {
                var nodeName = nodes[n];
                var parNodeName = cntr.parNodes[n];
                var nodeId = this.getNodeId(nodeName, cntr.parNodes[n], cntr.service);
                var nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
                nodeObj.cntrObj = cntrObj;
                cntrObj['nodesObj'].push(nodeObj);
              }
            }

            scrComponent.metaInfo.containersMap[cntr.id] = cntrObj;
          }
        }
      }, {
        key: "initNodesMap",
        value: function initNodesMap(scrComponent) {
          //// create nodes map to hold curRec, multiRec etc..
          scrComponent.metaInfo.nodesMap = {};
          var struct = scrComponent.metaInfo.dataStructure;
          var services = scrComponent.metaInfo.services;
          this.createNodesMap(scrComponent, struct, [], null, null);
        }
      }, {
        key: "createNodesMap",
        value: function createNodesMap(scrComponent, struct, parents, serviceName, mrParent) {
          var _this17 = this;

          var childs = [];
          var immediateParent = parents[parents.length - 1];

          if (Array.isArray(struct)) {
            struct.forEach(function (elm, index) {
              if (typeof elm == "object") {
                childs = _this17.createNodesMap(scrComponent, elm, parents, serviceName, immediateParent);
              }
            });
          } else if (typeof struct == "object") {
            var isRootNode = serviceName ? false : true;

            for (var c = 0; c < Object.keys(struct).length; c++) {
              var key = Object.keys(struct)[c];

              if (isRootNode) {
                serviceName = key;
              }

              var elm = struct[key];

              if (typeof elm == "object") {
                (function () {
                  var nodeId = serviceName + _this17.separator + key;
                  var parentName = immediateParent;

                  if (immediateParent) {
                    var splits = immediateParent.split(_this17.separator);

                    if (splits.length > 2) {
                      parentName = immediateParent.split(_this17.separator)[2];
                      nodeId = serviceName + _this17.separator + parentName + _this17.separator + key;
                    } else {
                      nodeId = serviceName + _this17.separator + serviceName + _this17.separator + key;
                    }
                  }

                  var curParents = [].concat(_toConsumableArray(parents), [nodeId]);
                  var nodeInfo = {
                    id: nodeId,
                    name: key,
                    parentName: parentName,
                    parents: parents,
                    serviceName: serviceName,
                    curRec: 0
                  }; //// Update nodes map at begining as childs can access for parent rec updates

                  scrComponent.metaInfo.nodesMap[nodeId] = nodeInfo;

                  if (Array.isArray(elm)) {
                    nodeInfo['multiRec'] = "Y";
                    nodeInfo['mrParent'] = mrParent; //// Private variable for observable subject

                    nodeInfo['_recordUpdates'] = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"](); //// Public variable for observars registration

                    nodeInfo['recordUpdates'] = nodeInfo['_recordUpdates'].asObservable(); //// Default registeration if mrParent is not null to clear filterData

                    if (mrParent) {
                      var mrNodeInfo = scrComponent.metaInfo.nodesMap[mrParent]; // mrNodeInfo['recordUpdates'].subscribe(this.mrParentRecUpdated);

                      mrNodeInfo['recordUpdates'].subscribe(function (p) {
                        nodeInfo['filteredData'] = null;
                      });
                    }
                  } else {
                    nodeInfo['multiRec'] = "N";
                  }

                  nodeInfo['childs'] = _this17.createNodesMap(scrComponent, elm, curParents, serviceName, mrParent);
                  childs.push(key);
                })();
              }
            }
          }

          return childs;
        }
      }, {
        key: "traverseNodeChilds",
        value: function traverseNodeChilds(scrComponent, nodeName, parNodeName, serviceName, executer) {
          var nodeId = this.getNodeId(nodeName, parNodeName, serviceName);
          var nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
          executer(scrComponent, nodeObj);

          if (nodeObj.childs.length > 0) {
            for (var c = 0; c < nodeObj.childs.length; c++) {
              var childNodeName = nodeObj.childs[c];
              this.traverseNodeChilds(scrComponent, childNodeName, nodeName, serviceName, executer);
            }
          }
        }
      }, {
        key: "destroyContainersMap",
        value: function destroyContainersMap(scrComponent) {
          var cntrsMap = scrComponent.metaInfo.containersMap;

          for (var cntrName in cntrsMap) {
            if (cntrsMap.hasOwnProperty(cntrName)) {
              var cntrObj = cntrsMap[cntrName];
              cntrObj['nodesObj'] = [];
              cntrsMap[cntrName] = null;
            }
          }
        }
      }, {
        key: "destroyNodesMap",
        value: function destroyNodesMap(scrComponent) {
          var nodesMap = scrComponent.metaInfo.nodesMap;

          for (var nodeId in nodesMap) {
            if (nodesMap.hasOwnProperty(nodeId)) {
              var nodeObj = nodesMap[nodeId];
              nodeObj.cntrObj = null;

              if (nodeObj.multiRec == "Y") {
                nodeObj['_recordUpdates'].complete();
              }

              nodesMap[nodeId] = null;
            }
          }
        }
      }, {
        key: "destroyScreen",
        value: function destroyScreen(scrComponent) {
          var hierarchy = scrComponent.hierarchy;
          var scrId = hierarchy.xId;

          try {
            ////// Clean up Hierarchy references
            var parentHierarchy = hierarchy.xParent ? hierarchy.xParent : this.scrHierarchy;
            var chIndex = parentHierarchy.xChilds.indexOf(hierarchy); /// Clean up from parent hierarchy

            if (chIndex > -1) {
              parentHierarchy.xChilds.splice(chIndex, 1);
            }

            delete parentHierarchy[scrComponent.name]; /// Nullify circular references

            hierarchy.xInstance = null;
            hierarchy.xParent = null;
            scrComponent.cp.view = null;
            this.destroyNodesMap(scrComponent);
            this.destroyContainersMap(scrComponent); ////// Clean up global references

            this.screens["delete"](scrId);
            this.data.dataGroup["delete"](scrId);
          } catch (_a) {
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({
              msg: "Failed to get component : " + scrComponent.name
            });
          } //// Non mandatory content clean up


          if (this.data.transferData.has(scrId)) {
            this.data.transferData["delete"](scrId);
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

      }, {
        key: "invokeScrCleanUp",
        value: function invokeScrCleanUp(parentDOM, clearHtml) {
          // clear xelerate screens launched in this dom
          var childScrs = jQuery(parentDOM).find(".xelerateScr");

          for (var s = 0; s < childScrs.length; s++) {
            var childScrInst = childScrs[s].xelerateScrInst;
            childScrInst.compRef.destroy(); // childScrInst.ngOnDestroy();
          }

          if (clearHtml) {
            var childLength = parentDOM.children.length;

            for (var c = childLength; c > 0; c--) {
              this.renderer.removeChild(parentDOM, parentDOM.children[c - 1]);
            }
          }
        }
      }, {
        key: "createHierarchy",
        value: function createHierarchy(launchType, parentDOM, compInstance) {
          var hierarchy = {
            xChilds: [],
            xInstance: compInstance
          };

          if (launchType == "SUB") {
            var parent = jQuery(parentDOM).closest(".xelerateScr")[0].xelerateScrInst;
            var parentHierarchy = parent.hierarchy;
            hierarchy.xParent = parentHierarchy;
            hierarchy.xId = parentHierarchy.xId + "." + compInstance.name;
            parentHierarchy[compInstance.name] = hierarchy;
            parentHierarchy.xChilds.push(hierarchy);
          } else {
            hierarchy.xParent = null;
            hierarchy.xId = compInstance.name;
            this.scrHierarchy[compInstance.name] = hierarchy;
          }

          return hierarchy;
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(param) {
          //// Avoid errors if lang code not found in provided langs map by keeping empty obj
          if (this.labelsMap[param.language]) {
            this.language = param.language;
            this.propagateChangeDetection(param.component);
          } else {
            this.displayPopup({
              type: 'error',
              msg: "Labels not maintained for provided langauge!!!"
            });
          }
        }
      }, {
        key: "getNodeId",
        value: function getNodeId(nodeName, parNodeName, serviceName) {
          return parNodeName ? serviceName + this.separator + parNodeName + this.separator + nodeName : serviceName + this.separator + nodeName;
        }
      }, {
        key: "getLabelDescription",
        value: function getLabelDescription(code, language) {
          var langObj = this.labelsMap[language];
          return langObj[code] ? langObj[code] : code;
        }
      }, {
        key: "getMessageCodeDescription",
        value: function getMessageCodeDescription(code, language) {
          var msgsMap = this.msgsMap[language];
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

      }, {
        key: "loadComponent",
        value: function loadComponent(param) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var componentClass, component, parentDOM, factory, refId, r, launcher, vcr, _factory, vcrDom, cleanUpDom, v;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (param.compClass) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 3;
                    return this.compProvider.getComponent(param);

                  case 3:
                    componentClass = _context4.sent;
                    _context4.next = 7;
                    break;

                  case 6:
                    componentClass = param.compClass;

                  case 7:
                    if (!componentClass) {
                      _context4.next = 39;
                      break;
                    }

                    parentDOM = param.parentDOM;

                    if (!parentDOM) {
                      _context4.next = 16;
                      break;
                    }

                    //// If parent dom is provided to load component
                    factory = this.resolver.resolveComponentFactory(componentClass);
                    component = factory.create(this.injector);

                    if (param.clearContainer != false) {
                      this.invokeScrCleanUp(parentDOM, true);
                    }

                    this.renderer.appendChild(parentDOM, component.location.nativeElement);
                    _context4.next = 32;
                    break;

                  case 16:
                    refId = param.refId; //// If refId not provided, use default refId

                    if (!refId) {
                      refId = "xelerateLauncher1";
                    } //// If veiw container ref is provided to load component


                    r = 0;

                  case 19:
                    if (!(r < this.launcherRefs.length)) {
                      _context4.next = 32;
                      break;
                    }

                    launcher = this.launcherRefs[r];

                    if (!(launcher.launcher == refId)) {
                      _context4.next = 29;
                      break;
                    }

                    // let ref = this.launcherRefs.get(param.refId);
                    vcr = launcher.vcr;
                    parentDOM = vcr.element.nativeElement;
                    _factory = this.resolver.resolveComponentFactory(componentClass);
                    component = _factory.create(this.injector);

                    if (param.clearContainer != false) {
                      //// Check if any plain dom screen launch had happened in vcr for clean up
                      vcrDom = vcr.element.nativeElement;
                      cleanUpDom = vcrDom;

                      for (v = 0; v < vcr.length; v++) {
                        cleanUpDom = jQuery(cleanUpDom).next()[0];
                        this.invokeScrCleanUp(cleanUpDom, false);
                      }

                      vcr.clear();
                    }

                    vcr.insert(component.hostView); // component = vcr.createComponent(factory);

                    return _context4.abrupt("break", 32);

                  case 29:
                    r++;
                    _context4.next = 19;
                    break;

                  case 32:
                    component.instance.hierarchy = this.createHierarchy(param.launchType, parentDOM, component.instance);
                    if (param.launchType == "SUB") component.instance.screenType = "SUB";else component.instance.screenType = "MAIN";
                    component.instance.compRef = component;
                    component.instance.transData = param.transData;
                    component.changeDetectorRef.detectChanges();
                    _context4.next = 40;
                    break;

                  case 39:
                    _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({
                      msg: "Failed to get component : " + param.compName,
                      trace: true
                    });

                  case 40:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "loadSubComponent",
        value: function loadSubComponent(param) {
          //// Should it call loadComponent method as its also doing same thing?
          param.launchType = "SUB";
          this.loadComponent(param);
        }
        /*
        Input : param - consists of the following...
            callback: method to be called on each menu click
            context: context to be applied for the callback method
        */

      }, {
        key: "invokeCallback",
        value: function invokeCallback(param) {
          if (param.callback) {
            _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].invokeMethod(param, "callback");
          }
        }
      }, {
        key: "propagateChangeDetection",
        value: function propagateChangeDetection(component) {
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

      }, {
        key: "displayPopup",
        value: function displayPopup(param) {
          var _this18 = this;

          if (param.msg) {
            param.text = param.msg;
          } else if (param.code) {
            param.text = this.getMessageCodeDescription(param.code, this.language);
          }

          Swal.fire(param).then(function (res) {
            param.popupState = res;

            _this18.invokeCallback(param);
          });
        }
      }, {
        key: "personalizeWidgets",
        value: function personalizeWidgets(scrComponent) {
          if (scrComponent.prefs) {
            try {
              for (var e = 0; e < scrComponent.cp.elms.length; e++) {
                var elm = scrComponent.cp.elms[e];
                var pref = scrComponent.prefs[elm.info.id];

                if (pref) {
                  pref.widgetType = "ELEMENT";
                  this.personalizeWidget(pref, elm);
                }
              }

              for (var key in scrComponent.prefs) {
                if (scrComponent.prefs.hasOwnProperty(key)) {
                  var _pref = scrComponent.prefs[key];

                  if (_pref.widgetType != "ELEMENT") {
                    this.personalizeWidget(_pref);
                  }
                }
              }

              this.propagateChangeDetection(scrComponent);
            } catch (e) {
              _utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].log({
                msg: "Failed in personalization of screen : " + scrComponent.name,
                trace: true
              });
            }
          }
        }
      }, {
        key: "personalizeWidget",
        value: function personalizeWidget(elmPref, elmObj) {
          if (elmPref) {
            for (var a = 0; a < elmPref.actions.length; a++) {
              var action = elmPref.actions[a];

              if (action == "LBLCHANGE") {
                var langDesc = this.getLabelDescription(elmPref.lblCode, this.language);

                if (elmObj) {
                  elmObj.title = langDesc;
                } else {
                  var lblObj = document.getElementById(elmPref.ctrlId + "_lbl");

                  if (lblObj) {
                    lblObj.textContent = langDesc;
                  }
                }
              } else if (action == "REARRANGE") {
                var parObj = document.getElementById(elmPref.parentId);

                if (elmObj) {
                  this.renderer.appendChild(parObj, elmObj.elmRef.nativeElement);
                } else {
                  this.renderer.appendChild(parObj, document.getElementById(elmPref.ctrlId));
                }
              } else if (action == "VISIBILITY") {
                if (elmPref.visible == "N") {
                  if (elmObj) {
                    elmObj.hide();
                  } else {
                    this.renderer.addClass(document.getElementById(elmPref.ctrlId), "hidden");
                  }
                } else {
                  if (elmObj) {
                    elmObj.show();
                  } else {
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

      }, {
        key: "initMenu_old",
        value: function initMenu_old(param) {
          var initObj = {
            core: {},
            plugins: ["themes", "types"]
          };
          initObj.core.themes = {};
          initObj.core.data = param.menus;
          initObj.core.dblclick_toggle = false;
          initObj.core.themes.dots = false;
          initObj.types = {
            "child": {
              "icon": false
            }
          };
          var parentDom = jQuery("#" + param.parentId);
          parentDom.jstree(initObj);
          parentDom.bind("select_node.jstree", jQuery.proxy(function (e, data) {
            if (data.node.children && data.node.children.length > 0) {
              parentDom.jstree("toggle_node", data.node);
            } else {
              this.invokeCallback(Object.assign(Object.assign({}, param), {
                e: e,
                data: data
              }));
            }
          }, this));
          jQuery(".sidebar").on({
            mouseenter: function mouseenter() {
              jQuery(".sidebar").addClass("hover-active");
              if (jQuery(".jstree-node[aria-selected=true]>ul")[0] != undefined) jQuery(".jstree-node[aria-selected=true]>ul").slideDown();else jQuery(".jstree-node[aria-selected=true]").parent().slideDown();
            },
            mouseleave: function mouseleave() {
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

      }, {
        key: "rowAction",
        value: function rowAction(scrComponent, containerId, recNo, nodeObj) {
          var lskip = false;

          if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.preRowAction)) {
            lskip = scrComponent.preRowAction(containerId, recNo, nodeObj);
          }

          if (!lskip) {
            var cntrInfo = scrComponent.metaInfo.containersMap[containerId]; //// Loop to get multi nodes mapping info?

            var nodeInfo = cntrInfo.nodesObj[0];
            var nodeName = nodeInfo.name;
            var curRec = this.getCurRec(nodeInfo.id, scrComponent);

            if (recNo != curRec) {
              this.setCurRec(scrComponent, containerId, recNo); //// Keep propagating change detection as rowAction might be called by non angular widgets also

              this.propagateChangeDetection(scrComponent);
              this.traverseNodeChilds(scrComponent, nodeName, nodeInfo.parentName, nodeInfo.serviceName, this.emitRecordUpdates);
            }
          }

          if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.postRowAction)) {
            scrComponent.postRowAction(containerId, recNo, nodeObj);
          }
        }
      }, {
        key: "emitRecordUpdates",
        value: function emitRecordUpdates(scrComponent, nodeObj) {
          if (nodeObj.multiRec == "Y") {
            nodeObj['_recordUpdates'].next(nodeObj);
          }
        }
      }, {
        key: "setCurRec",
        value: function setCurRec(scrComponent, containerId, recNo) {
          var cntrInfo = scrComponent.metaInfo.containersMap[containerId]; //// Loop to get multi nodes mapping info?

          var nodeInfo = cntrInfo.nodesObj[0];
          var nodeName = nodeInfo.name;
          this.traverseNodeChilds(scrComponent, nodeName, nodeInfo.parentName, nodeInfo.serviceName, this.resetCurRec);

          if (cntrInfo.curPage) {
            nodeInfo.curRec = cntrInfo.curPage * cntrInfo.pageSize + recNo;
          } else {
            nodeInfo.curRec = recNo;
          }

          cntrInfo.curRec = nodeInfo.curRec;
        }
      }, {
        key: "getCurRec",
        value: function getCurRec(nodeId, component) {
          var recNo = 0;

          if (component.metaInfo.nodesMap[nodeId]) {
            recNo = component.metaInfo.nodesMap[nodeId].curRec;
          }

          return recNo;
        }
      }, {
        key: "getPageRecords",
        value: function getPageRecords(scrComponent, dataArray, containerId) {
          var cntrInfo = scrComponent.metaInfo.containersMap[containerId];
          var pageData = dataArray;

          if (cntrInfo.pageType) {
            var pageStart = cntrInfo.pageSize * cntrInfo.curPage;
            var pageEnd = pageStart + cntrInfo.pageSize;
            pageData = dataArray.slice(pageStart, pageEnd);
          }

          return pageData;
        }
      }, {
        key: "getParentPointer",
        value: function getParentPointer(scrComponent, nodeId, data) {
          var nodesMap = scrComponent.metaInfo.nodesMap;
          var nodeInfo = nodesMap[nodeId];
          var dataObj = data;

          if (nodeInfo) {
            var parents = nodeInfo.parents;

            for (var p = 0; p < parents.length; p++) {
              if (!dataObj) {
                break;
              }

              var parentId = parents[p];
              var parentNode = nodesMap[parentId];

              if (parentNode.multiRec == "Y") {
                var currRec = this.getCurRec(parentId, scrComponent);
                dataObj = dataObj[parentNode.name][currRec];
              } else {
                dataObj = dataObj[parentNode.name];
              }
            }
          }

          return dataObj;
        }
      }, {
        key: "getParentDataGroup",
        value: function getParentDataGroup(scrComponent, nodeId, data) {
          var nodesMap = scrComponent.metaInfo.nodesMap;
          var nodeInfo = nodesMap[nodeId];
          var dataGroup = data ? data : scrComponent.ifaceData;

          if (nodeInfo) {
            var parents = nodeInfo.parents;

            for (var p = 0; p < parents.length; p++) {
              if (!dataGroup) {
                break;
              }

              var parentId = parents[p];
              var parentNode = nodesMap[parentId];

              if (parentNode.multiRec == "Y") {
                var currRec = this.getCurRec(parentId, scrComponent);
                dataGroup = dataGroup.controls[parentNode.name].controls[currRec];
              } else {
                dataGroup = dataGroup.controls[parentNode.name];
              }
            }
          }

          return dataGroup;
        }
      }, {
        key: "getDataGroup",
        value: function getDataGroup(scrComponent, nodeId, data) {
          var dataGrp = null;
          var nodesMap = scrComponent.metaInfo.nodesMap;
          var nodeInfo = nodesMap[nodeId];
          var parentGrp = this.getParentDataGroup(scrComponent, nodeId, data);

          if (parentGrp) {
            dataGrp = parentGrp.controls[nodeInfo.name];
          }

          return dataGrp;
        }
      }, {
        key: "resetCurRec",
        value: function resetCurRec(scrComponent, nodeObj) {
          if (nodeObj.multiRec == "Y") {
            nodeObj.curRec = 0;
            nodeObj.cntrObj.curRec = 0;
          }
        }
      }, {
        key: "resetCurPage",
        value: function resetCurPage(scrComponent, nodeObj) {
          if (nodeObj.multiRec == "Y") {
            nodeObj.cntrObj.curPage = 0;
          }
        }
      }, {
        key: "initMenu",
        value: function initMenu(param) {
          var _this19 = this;

          var menuVal = param.menus;
          var jQParent = jQuery("#" + param.menuId); //jQParent.append(`<ul class='side-menu'></ul>`);

          if (menuVal) {
            var arrLen = menuVal.length;
            var elmLabel, elmIcon, href, menuParent, uniqId;

            for (var i = 0; i < arrLen; i++) {
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
                jQuery(".xle-menu").append("<li class=\"".concat(uniqId, "\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"xle-menu-item\" href=\"").concat(href, "\"></a>"));
                var anchorElm = jQuery("." + uniqId).children('a');

                if (!_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(elmIcon)) {
                  anchorElm.append("<span class=\"icon-spacer-left\"><i class=\"fa-2x ".concat(elmIcon, "\"></i></span><span class=\"menu-value\">").concat(elmLabel, "</span>"));
                } else {
                  //Check with tiji
                  anchorElm.append("<span class=\"icon-spacer-left\"></span><span class=\"menu-value\">".concat(elmLabel, "</span>"));
                } //anchorElm.append(`<span class="icon icon-chevron"></span>`);

              } else {
                if (jQuery("." + menuParent + "_ul").length == 0) jQuery("." + menuParent).append("<ul class=\"child-menu ".concat(menuParent, "_ul\"></ul>"));
                jQuery("." + menuParent + "_ul").append("<li class=\"".concat(uniqId, "\"><a class=\"xle-menu-item\" href=\"").concat(href, "\"></a></li>"));

                var _anchorElm = jQuery("." + uniqId).children('a');

                if (!_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isNull(elmIcon)) {
                  _anchorElm.append("<span class=\"icon-spacer-left\"><i class=\"fa-2x ".concat(elmIcon, "\"></i></span><span class=\"menu-value\">").concat(elmLabel, "</span>"));
                } else {
                  //Check with tiji
                  _anchorElm.append("<span class=\"icon-spacer-left\"></span><span class=\"menu-value\">".concat(elmLabel, "</span>"));
                }

                if (jQuery("." + menuParent).find('.fa-fw.fa-angle-down').length == 0) jQuery("." + menuParent).children('a').append("<span class=\"icon-spacer-right\"><i class=\"fa fa-fw fa-angle-down\"></i></span>");
              }
            }
          }

          if (param.callback) {
            jQParent.on('click', 'a', function (ev) {
              _this19.invokeCallback(Object.assign(Object.assign({}, param), {
                ev: ev
              }));
            });
          }

          this.addMenuEvtListener(param);
        }
      }, {
        key: "addMenuEvtListener",
        value: function addMenuEvtListener(param) {
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
            } else {
              // prevent closing menu if we are on child menu
              if (!$li.parent().is('.child-menu')) {
                jQuery(this).parents(".xle-menu").find('li').removeClass('active');
                jQuery(this).parents(".xle-menu").find('li ul').slideUp();
              } else {}

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
      }, {
        key: "populateSelectOptions",
        value: function populateSelectOptions(options, elmId, screenName) {
          if (screenName) {//// Multiple elms with same id in diff screens, Should this be possible? As Angular supports it?
          } else {
            var selObj = this.elmsMap.get(elmId);
            this.populateSelectElmOptions(selObj, options);
          }
        }
      }, {
        key: "populateSelectElmOptions",
        value: function populateSelectElmOptions(selElm, options) {
          selElm.updateOptions(options);
        }
      }, {
        key: "getValue",
        value: function getValue(elmId) {
          return this.getElmValue(this.elmsMap.get(elmId));
        }
      }, {
        key: "getElmValue",
        value: function getElmValue(elm) {
          var value = "";

          if (elm) {
            value = elm.getValue();
          }

          return value;
        }
      }, {
        key: "setValue",
        value: function setValue(elmId, value) {
          this.setElmValue(this.elmsMap.get(elmId), value);
        }
      }, {
        key: "setElmValue",
        value: function setElmValue(elm, value) {
          elm.setValue(value);
        }
      }, {
        key: "setValidators",
        value: function setValidators(elmId, additionalValidators) {
          this.setElmValidators(this.elmsMap.get(elmId), additionalValidators);
        }
      }, {
        key: "setElmValidators",
        value: function setElmValidators(elm, additionalValidators) {
          /// How to keep previous validators and update new?
          elm.fc.setValidators(Object(_directives_validator_directive__WEBPACK_IMPORTED_MODULE_4__["xelerateElmValidator"])(elm, additionalValidators));
          elm.fc.updateValueAndValidity();
        }
      }, {
        key: "getScrData",
        value: function getScrData(scrComponent) {
          var scrData = null;

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

      }, {
        key: "getDataToRender",
        value: function getDataToRender(scrComponent, dataGrp, containerId) {
          var cntrInfo = scrComponent.metaInfo.containersMap[containerId]; //// Loop to get multi nodes mapping info?

          var nodeObj = cntrInfo.nodesObj[0];
          var renderData = dataGrp;
          var userData = null;

          if (_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityServices"].isFunction(scrComponent.preDataToRender)) {
            userData = scrComponent.preDataToRender(renderData, containerId);
          }

          if (userData) {
            renderData = userData;
          } else {
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

      }, {
        key: "filterData",
        value: function filterData(param) {
          var scrComponent = param.scrComponent;
          var nodeId = param.nodeId ? param.nodeId : this.getNodeId(param.nodeName, param.parNodeName, param.serviceName);
          var nodeObj = scrComponent.metaInfo.nodesMap[nodeId];
          var dataGrp = this.getDataGroup(scrComponent, nodeId);
          var filter = param.filter;

          if (dataGrp instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
            dataGrp = dataGrp.controls.filter(function (item, i) {
              if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                for (var key in item.controls) {
                  if (item.controls.hasOwnProperty(key)) {
                    var control = item.controls[key];
                    var expectedVal = "";

                    if (typeof filter == 'object') {
                      expectedVal = filter[key];
                    } else {
                      expectedVal = filter.toLowerCase();
                    }

                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] && control.value && control.value.toLowerCase().indexOf(expectedVal) > -1) {
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
      }, {
        key: "createEvent",
        value: function createEvent(name) {
          var e = document.createEvent("Event");
          e.initEvent(name, true, true);
          return e;
        } //update element props..

      }, {
        key: "updateProp",
        value: function updateProp(elmId, propName, propVal) {
          this.updateElmProp(this.elmsMap.get(elmId), propName, propVal);
        }
      }, {
        key: "updateElmProp",
        value: function updateElmProp(elm, propName, propVal) {
          elm.updateProp(propName, propVal);
        } //table related fns..

      }, {
        key: "createEditRenderers",
        value: function createEditRenderers() {
          if (true) return this.dateRenderer;
        }
      }, {
        key: "createToolBarEvts",
        value: function createToolBarEvts(evt) {
          var inst = jQuery(evt.currentTarget.domElement).data("directiveInst");
          inst.treeTable.createToolBarEvts(evt);
          inst.treeTable.createEditRenderers();
        }
      }, {
        key: "onExecuteToolbarAction",
        value: function onExecuteToolbarAction(action, currentTarget, extendedPager) {
          var inst = jQuery(extendedPager.grid.domElement).data("directiveInst");
          inst.treeTable.onExecuteToolbarAction(action, currentTarget, extendedPager);
        }
      }, {
        key: "rowClicked",
        value: function rowClicked(evt) {
          var inst = jQuery(evt.currentTarget.domElement).data("directiveInst");
          inst.treeTable.rowClicked(evt); //console.log("called");
        }
      }, {
        key: "getJSDataType",
        value: function getJSDataType(obj) {
          var dataType = "NULL";

          if (obj) {
            dataType = "STRING"; //Default

            if (typeof obj === "object") {
              dataType = "OBJECT";

              if (Array.isArray(obj)) {
                dataType = "ARRAY";
              }
            } else {////Other Data Types like Number, Date etc.. Not Reqd Now...
            }
          }

          dataType = dataType.toUpperCase();
          return dataType;
        }
      }, {
        key: "getFlatObjCopy",
        value: function getFlatObjCopy(object) {
          var newObj = {};

          for (var key in object) {
            if (object.hasOwnProperty(key)) {
              var value = object[key];

              if (this.getJSDataType(value) == "STRING") {
                newObj[key] = value;
              }
            }
          }

          return newObj;
        }
      }, {
        key: "openSideBar",
        value: function openSideBar() {
          jQuery("aside").addClass("hover-active");
          jQuery("aside").find('.active >.child-menu').slideDown();
        }
      }, {
        key: "closeSideBar",
        value: function closeSideBar() {
          jQuery("aside").removeClass("hover-active");
          jQuery("aside").find('.child-menu').slideUp();
        }
      }, {
        key: "makeHeaderCollapse",
        value: function makeHeaderCollapse() {
          jQuery(window).scroll(function () {
            jQuery('html,body').animate(10000);
            var scroll = jQuery(window).scrollTop();

            if (scroll >= 5) {
              jQuery("body").addClass("head-up");
            } else {
              jQuery("body").removeClass("head-up");
            }
          });
        }
      }]);

      return XelerateService;
    }();

    XelerateService.ɵfac = function XelerateService_Factory(t) {
      return new (t || XelerateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_app_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]));
    };

    XelerateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: XelerateService,
      factory: XelerateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](XelerateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }, {
          type: _app_app_components__WEBPACK_IMPORTED_MODULE_8__["ComponentsProvider"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/shared.module.ts":
  /*!*************************************!*\
    !*** ./src/shared/shared.module.ts ***!
    \*************************************/

  /*! exports provided: SharedModules */

  /***/
  function srcSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModules", function () {
      return SharedModules;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-custom-checkbox-values */
    "../../../../../node_modules/ng-custom-checkbox-values/__ivy_ngcc__/fesm2015/ng-custom-checkbox-values.js");
    /* harmony import */


    var _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./simple/directives/filter-fields.directive */
    "./src/shared/simple/directives/filter-fields.directive.ts");
    /* harmony import */


    var _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./simple/directives/non-filter-fields.directive */
    "./src/shared/simple/directives/non-filter-fields.directive.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-badge/xelerate-badge.component */
    "./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-button/xelerate-button.component */
    "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-checkbox/xelerate-checkbox.component */
    "./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component */
    "./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-icon/xelerate-icon.component */
    "./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-image/xelerate-image.component */
    "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-input/xelerate-input.component */
    "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-radio/xelerate-radio.component */
    "./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-select/xelerate-select.component */
    "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-textarea/xelerate-textarea.component */
    "./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-text/xelerate-text.component */
    "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts");
    /* harmony import */


    var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./directives/dropdown.directive */
    "./src/shared/directives/dropdown.directive.ts");
    /* harmony import */


    var _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./directives/datepicker.directive */
    "./src/shared/directives/datepicker.directive.ts");
    /* harmony import */


    var _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./directives/launcher.directive */
    "./src/shared/directives/launcher.directive.ts");
    /* harmony import */


    var _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./directives/datatable.directive */
    "./src/shared/directives/datatable.directive.ts");
    /* harmony import */


    var _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./directives/formcontrols.directive */
    "./src/shared/directives/formcontrols.directive.ts");
    /* harmony import */


    var _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/cardslimit.pipe */
    "./src/shared/pipes/cardslimit.pipe.ts");
    /* harmony import */


    var _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./xelerate-elements/xelerate-tags/xelerate-tags.component */
    "./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts");
    /* harmony import */


    var _services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/maintenance.service */
    "./src/shared/services/maintenance.service.ts");
    /* harmony import */


    var _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./directives/popover.directive */
    "./src/shared/directives/popover.directive.ts");

    var SharedModules = function SharedModules() {
      _classCallCheck(this, SharedModules);
    };

    SharedModules.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModules
    });
    SharedModules.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModules_Factory(t) {
        return new (t || SharedModules)();
      },
      providers: [_services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__["Maintenance"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModules, {
        declarations: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"], _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"], _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"], _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"], _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"], _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"], _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"], _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"], _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"], _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"], _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"], _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"], _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"], _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"], _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"], _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"], _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"], _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"], _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"], _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]],
        exports: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"], _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"], _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"], _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"], _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"], _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"], _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"], _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"], _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"], _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"], _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"], _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"], _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"], _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"], _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"], _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"], _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"], _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"], _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"], _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModules, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"], _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"], _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"], _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"], _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"], _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"], _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"], _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"], _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"], _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"], _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"], _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"], _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"], _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"], _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"], _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"], _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"], _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"], _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"], _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_3__["CustomCheckboxValuesModule"]],
          exports: [_xelerate_elements_xelerate_badge_xelerate_badge_component__WEBPACK_IMPORTED_MODULE_6__["XelerateBadgeComponent"], _xelerate_elements_xelerate_button_xelerate_button_component__WEBPACK_IMPORTED_MODULE_7__["XelerateButtonComponent"], _xelerate_elements_xelerate_checkbox_xelerate_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["XelerateCheckboxComponent"], _xelerate_elements_xelerate_hyperlink_xelerate_hyperlink_component__WEBPACK_IMPORTED_MODULE_9__["XelerateHyperlinkComponent"], _xelerate_elements_xelerate_icon_xelerate_icon_component__WEBPACK_IMPORTED_MODULE_10__["XelerateIconComponent"], _xelerate_elements_xelerate_image_xelerate_image_component__WEBPACK_IMPORTED_MODULE_11__["XelerateImageComponent"], _xelerate_elements_xelerate_input_xelerate_input_component__WEBPACK_IMPORTED_MODULE_12__["XelerateInputComponent"], _xelerate_elements_xelerate_radio_xelerate_radio_component__WEBPACK_IMPORTED_MODULE_13__["XelerateRadioComponent"], _xelerate_elements_xelerate_select_xelerate_select_component__WEBPACK_IMPORTED_MODULE_14__["XelerateSelectComponent"], _xelerate_elements_xelerate_tags_xelerate_tags_component__WEBPACK_IMPORTED_MODULE_23__["XelerateTagsComponent"], _xelerate_elements_xelerate_text_xelerate_text_component__WEBPACK_IMPORTED_MODULE_16__["XelerateTextComponent"], _xelerate_elements_xelerate_textarea_xelerate_textarea_component__WEBPACK_IMPORTED_MODULE_15__["XelerateTextareaComponent"], _directives_launcher_directive__WEBPACK_IMPORTED_MODULE_19__["LauncherDirective"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_17__["XelerateDropdownDirective"], _directives_datepicker_directive__WEBPACK_IMPORTED_MODULE_18__["XelerateDatepickerDirective"], _directives_datatable_directive__WEBPACK_IMPORTED_MODULE_20__["XelerateDatatableDirective"], _directives_formcontrols_directive__WEBPACK_IMPORTED_MODULE_21__["XelerateFormControlsDirective"], _directives_popover_directive__WEBPACK_IMPORTED_MODULE_25__["XeleratePopoverDirective"], _pipes_cardslimit_pipe__WEBPACK_IMPORTED_MODULE_22__["CardsLimitPipe"], _simple_directives_filter_fields_directive__WEBPACK_IMPORTED_MODULE_4__["FilterFields"], _simple_directives_non_filter_fields_directive__WEBPACK_IMPORTED_MODULE_5__["NonFilterFields"]],
          providers: [_services_maintenance_service__WEBPACK_IMPORTED_MODULE_24__["Maintenance"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/shared/simple/directives/filter-fields.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/shared/simple/directives/filter-fields.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: FilterFields */

  /***/
  function srcSharedSimpleDirectivesFilterFieldsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterFields", function () {
      return FilterFields;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); ///// Directive to access fielter filed native objects


    var FilterFields =
    /*#__PURE__*/
    function () {
      function FilterFields(elRef, renderer) {
        _classCallCheck(this, FilterFields);

        this.elRef = elRef;
        this.renderer = renderer;
      }

      _createClass(FilterFields, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ctrl = this.elRef.nativeElement.querySelector("#" + this.info.id);
        }
      }, {
        key: "enable",
        value: function enable() {
          if (this.fc) {
            this.fc.enable();
          } else {
            this.renderer.removeAttribute(this.ctrl, 'disabled');
          }
        }
      }, {
        key: "disable",
        value: function disable() {
          if (this.fc) {
            this.fc.enable();
          } else {
            this.renderer.setAttribute(this.ctrl, 'disabled', 'true');
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.ctrl.value;
        }
      }]);

      return FilterFields;
    }();

    FilterFields.ɵfac = function FilterFields_Factory(t) {
      return new (t || FilterFields)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    FilterFields.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FilterFields,
      selectors: [["", "filterFields", "y"]],
      inputs: {
        fc: "fc",
        info: "info"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterFields, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[filterFields="Y"]',
          providers: []
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        fc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/simple/directives/non-filter-fields.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/shared/simple/directives/non-filter-fields.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: NonFilterFields */

  /***/
  function srcSharedSimpleDirectivesNonFilterFieldsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NonFilterFields", function () {
      return NonFilterFields;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); ///// Directive to access non fielter filed native objects


    var NonFilterFields =
    /*#__PURE__*/
    function () {
      function NonFilterFields(elRef, renderer) {
        _classCallCheck(this, NonFilterFields);

        this.elRef = elRef;
        this.renderer = renderer;
      }

      _createClass(NonFilterFields, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ctrl = this.elRef.nativeElement.querySelector("#" + this.info.id);
        }
      }, {
        key: "enable",
        value: function enable() {
          if (this.fc) {
            this.fc.enable();
          } else {
            this.renderer.removeAttribute(this.ctrl, 'disabled');
          }
        }
      }, {
        key: "disable",
        value: function disable() {
          if (this.fc) {
            this.fc.enable();
          } else {
            this.renderer.setAttribute(this.ctrl, 'disabled', 'true');
          }
        }
      }]);

      return NonFilterFields;
    }();

    NonFilterFields.ɵfac = function NonFilterFields_Factory(t) {
      return new (t || NonFilterFields)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    NonFilterFields.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NonFilterFields,
      selectors: [["", "filterFields", "n"]],
      inputs: {
        fc: "fc",
        info: "info"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonFilterFields, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[filterFields="N"]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        fc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/shared/templates/SimpleBaseClass.component.ts":
  /*!***********************************************************!*\
    !*** ./src/shared/templates/SimpleBaseClass.component.ts ***!
    \***********************************************************/

  /*! exports provided: SimpleBaseClass */

  /***/
  function srcSharedTemplatesSimpleBaseClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleBaseClass", function () {
      return SimpleBaseClass;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/shared/directives/datatable.directive */
    "./src/shared/directives/datatable.directive.ts");
    /* harmony import */


    var src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/shared/services/utility.service */
    "./src/shared/services/utility.service.ts");

    var SimpleBaseClass =
    /*#__PURE__*/
    function () {
      /* Mandatory properties ends */
      function SimpleBaseClass(xelerate, infoJSON) {
        _classCallCheck(this, SimpleBaseClass);

        this.xelerate = xelerate;
        this.name = "Default";
        this.metaInfo = src_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].copyJSON(infoJSON);
      }

      _createClass(SimpleBaseClass, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.xelerate.initScreen(this);
        }
      }, {
        key: "query",
        value: function query() {
          this.maintenance.query(this);
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.maintenance["delete"](this);
        }
      }, {
        key: "create",
        value: function create() {
          this.maintenance.create(this);
        }
      }, {
        key: "modify",
        value: function modify() {
          this.maintenance.modify(this);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.xelerate.data.loadScrData(this, {});
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.xelerate.destroyScreen(this);
        }
      }]);

      return SimpleBaseClass;
    }();

    SimpleBaseClass.ɵfac = function SimpleBaseClass_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
    };

    SimpleBaseClass.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: SimpleBaseClass,
      viewQuery: function SimpleBaseClass_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_shared_directives_datatable_directive__WEBPACK_IMPORTED_MODULE_1__["XelerateDatatableDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dataTableDirs = _t);
        }
      },
      inputs: {
        heirarchy: "heirarchy",
        compRef: "compRef",
        transData: "transData"
      }
    });
    /***/
  },

  /***/
  "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/shared/xelerate-elements/abstract-xelerate-element.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AbstractXelerateElement */

  /***/
  function srcSharedXelerateElementsAbstractXelerateElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractXelerateElement", function () {
      return AbstractXelerateElement;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/utility.service */
    "./src/shared/services/utility.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "../../../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var _services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");

    var _c0 = ["control"];

    var AbstractXelerateElement =
    /*#__PURE__*/
    function () {
      function AbstractXelerateElement(cp, xelerate, elmRef) {
        _classCallCheck(this, AbstractXelerateElement);

        this.cp = cp;
        this.xelerate = xelerate;
        this.elmRef = elmRef;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(AbstractXelerateElement, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var aplyDefaults = false;

          if (!this.fc) {
            aplyDefaults = true;
          }

          this.enrich(); //// Apply Default Properties

          if (aplyDefaults) {
            this.fc.setValue(this.value);

            if (this.info.disabled) {
              this.disable();
            }
          }
        }
      }, {
        key: "enrich",
        value: function enrich() {
          //// Attach new form control if not provided
          if (!this.fc) {
            this.fc = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          } else {// console.log("Mapped ");
          } //// Update element list and map for later access


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
          } //// Create directives array for ease of access of utilities
          // this.info.directives = [];	/// Move it to generation as @Inputs are immutable
          //// Attach this component for directive references


          if (this.info.refs) {
            this.info.refs.instanceObj = this;
          } //// Multi Language Variables Assignment


          this.title = this.xelerate.getLabelDescription(this.info.title, this.xelerate.language);
          this.value = this.xelerate.getLabelDescription(this.info.value, this.xelerate.language);
          this.placeHolder = this.xelerate.getLabelDescription(this.info.placeholder, this.xelerate.language);
          this.tooltipTitle = this.xelerate.getLabelDescription(this.info.tooltiptitle, this.xelerate.language);
          this.tooltipText = this.xelerate.getLabelDescription(this.info.tooltiptext, this.xelerate.language);
        }
      }, {
        key: "updateId",
        value: function updateId() {
          //// Construct id if provided by user
          var id = this.info.id;

          if (id) {
            if (!_services_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityServices"].isNull(this.recNo)) {
              this.id = id + "_" + this.recNo;
            } else {
              this.id = id;
            }
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var prefs = this.cp.view.prefs;

          if (prefs) {
            this.xelerate.personalizeWidget(prefs[this.info.id], this);
          }
        }
      }, {
        key: "setValue",
        value: function setValue(value) {
          this.fc.setValue(value);
        }
      }, {
        key: "getValue",
        value: function getValue() {
          return this.fc.value;
        } //// register to notifivation for enabled or disabled states

      }, {
        key: "getStateChangesObservable",
        value: function getStateChangesObservable() {
          return this.stateChanges.asObservable();
        }
      }, {
        key: "disable",
        value: function disable() {
          this.fc.disable();
          this.stateChanges.next("DISABLED");
        }
      }, {
        key: "enable",
        value: function enable() {
          this.fc.enable();
          this.stateChanges.next("ENABLED");
        }
      }, {
        key: "hide",
        value: function hide() {
          this.xelerate.renderer.addClass(this.elmRef.nativeElement, "hidden");
        }
      }, {
        key: "show",
        value: function show() {
          this.xelerate.renderer.removeClass(this.elmRef.nativeElement, "hidden");
        }
      }, {
        key: "setEventContext",
        value: function setEventContext(eventType, eventMethod) {
          var contexts = eventMethod.split('.');
          var contextObj = contexts[0] == 'window' ? window : this.cp.view;
          var method = contexts[0];

          if (contexts.length > 1) {
            for (var c = 0; c < contexts.length - 1; c++) {
              var context = contexts[c];

              if (contextObj[context]) {
                contextObj = contextObj[context];
              }
            }

            method = contexts[contexts.length - 1];
          }

          this.info[eventType] = method;
          this.info[eventType + "Context"] = contextObj;
        } ///// Generic Events

      }, {
        key: "clickAction",
        value: function clickAction(event) {
          if (this.info.click) {
            var params = {
              event: event
            }; // Finding context based on dots in function and storing in info for consecutive use

            if (!this.info.clickContext) {
              this.setEventContext("click", this.info.click);
            }

            this.info.clickContext[this.info.click](params);
          }
        }
      }, {
        key: "changeAction",
        value: function changeAction(event) {
          if (this.info.change) {
            var params = {
              event: event
            };

            if (!this.info.changeContext) {
              this.setEventContext("change", this.info.change);
            }

            this.info.changeContext[this.info.change](params);
          }
        }
      }, {
        key: "focusAction",
        value: function focusAction(event) {
          if (this.info.focus) {
            var params = {
              event: event
            };

            if (!this.info.focusContext) {
              this.setEventContext("focus", this.info.focus);
            }

            this.info.focusContext[this.info.focus](params);
          }
        }
      }, {
        key: "blurAction",
        value: function blurAction(event) {
          if (this.info.blur) {
            var params = {
              event: event
            };

            if (!this.info.blurContext) {
              this.setEventContext("blur", this.info.blur);
            }

            this.info.blurContext[this.info.blur](params);
          }
        }
      }, {
        key: "mouseoverAction",
        value: function mouseoverAction(event) {
          if (this.info.mouseover) {
            var params = {
              event: event
            };

            if (!this.info.mouseoverContext) {
              this.setEventContext("mouseover", this.info.mouseover);
            }

            this.info.mouseoverContext[this.info.mouseover](params);
          }
        }
      }, {
        key: "mouseoutAction",
        value: function mouseoutAction(event) {
          if (this.info.mouseout) {
            var params = {
              event: event
            };

            if (!this.info.mouseoutContext) {
              this.setEventContext("mouseout", this.info.mouseout);
            }

            this.info.mouseoutContext[this.info.mouseout](params);
          }
        }
      }, {
        key: "updateProp",
        value: function updateProp(propName, propValue) {
          if (!this.info[propName]) this.info[propName] = "";
          this.info[propName] = propValue;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //// Clear element list and map to avoid memory leak
          var index = this.cp.elms.indexOf(this);

          if (index > -1) {
            this.cp.elms.splice(index, 1);
            this.xelerate.elms.splice(index, 1);
          }

          if (this.info.id) {
            this.cp.elmsMap["delete"](this.info.id);
            this.xelerate.elmsMap["delete"](this.info.id);
          }

          this.stateChanges.complete(); //// nullify circular refernce for faster garbage collection

          if (this.info.refs) {
            this.info.refs.instanceObj = null;
            this.info.refs = null;
          }
        }
      }]);

      return AbstractXelerateElement;
    }();

    AbstractXelerateElement.ɵfac = function AbstractXelerateElement_Factory(t) {
      return new (t || AbstractXelerateElement)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_4__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_xelerate_service__WEBPACK_IMPORTED_MODULE_5__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    AbstractXelerateElement.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AbstractXelerateElement,
      viewQuery: function AbstractXelerateElement_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
        }
      },
      inputs: {
        info: "info",
        fc: "fc",
        recNo: "recNo"
      }
    });
    /***/
  },

  /***/
  "./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-badge/xelerate-badge.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: XelerateBadgeComponent */

  /***/
  function srcSharedXelerateElementsXelerateBadgeXelerateBadgeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateBadgeComponent", function () {
      return XelerateBadgeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateBadgeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.info.lblwrapclass ? ctx_r12.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r12.id ? ctx_r12.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.info.lblclass ? ctx_r12.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r12.id ? ctx_r12.id : "")("id", ctx_r12.id ? ctx_r12.id + "label" : "");
      }
    }

    var XelerateBadgeComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el) {
      _inherits(XelerateBadgeComponent, _abstract_xelerate_el);

      var _super4 = _createSuper(XelerateBadgeComponent);

      function XelerateBadgeComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateBadgeComponent);

        return _super4.call(this, cp, xelerate, elmRef);
      }

      return XelerateBadgeComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateBadgeComponent.ɵfac = function XelerateBadgeComponent_Factory(t) {
      return new (t || XelerateBadgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateBadgeComponent,
      selectors: [["xelerate-badge"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateBadgeComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 15,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click"], ["control", ""], [3, "for", "id"]],
      template: function XelerateBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateBadgeComponent_div_0_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateBadgeComponent_Template_span_click_2_listener($event) {
            return ctx.clickAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'xelerate-badge',
          templateUrl: './xelerate-badge.component.html',
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateBadgeComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-button/xelerate-button.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: XelerateButtonComponent */

  /***/
  function srcSharedXelerateElementsXelerateButtonXelerateButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateButtonComponent", function () {
      return XelerateButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateButtonComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.info.lblwrapclass ? ctx_r14.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r14.id ? ctx_r14.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r14.info.lblclass ? ctx_r14.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r14.id ? ctx_r14.id : "")("id", ctx_r14.id ? ctx_r14.id + "label" : "");
      }
    }

    function XelerateButtonComponent_i_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r16.info.iconclass ? ctx_r16.info.iconclass + ctx_r16.info.iconsize : null);
      }
    }

    function XelerateButtonComponent_i_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r17.info.iconclass ? ctx_r17.info.iconclass + ctx_r17.info.iconsize : null);
      }
    }

    var XelerateButtonComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el2) {
      _inherits(XelerateButtonComponent, _abstract_xelerate_el2);

      var _super5 = _createSuper(XelerateButtonComponent);

      function XelerateButtonComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateButtonComponent);

        return _super5.call(this, cp, xelerate, elmRef);
      }

      return XelerateButtonComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateButtonComponent.ɵfac = function XelerateButtonComponent_Factory(t) {
      return new (t || XelerateButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateButtonComponent,
      selectors: [["xelerate-button"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateButtonComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 18,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "type", "ngStyle", "click"], ["control", ""], [3, "class", 4, "ngIf"], [3, "for", "id"]],
      template: function XelerateButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateButtonComponent_div_0_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateButtonComponent_Template_button_click_2_listener($event) {
            return ctx.clickAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateButtonComponent_i_4_Template, 1, 2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, XelerateButtonComponent_i_6_Template, 1, 2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'xelerate-button',
          templateUrl: './xelerate-button.component.html',
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateButtonComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-checkbox/xelerate-checkbox.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: XelerateCheckboxComponent */

  /***/
  function srcSharedXelerateElementsXelerateCheckboxXelerateCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateCheckboxComponent", function () {
      return XelerateCheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-custom-checkbox-values */
    "../../../../../node_modules/ng-custom-checkbox-values/__ivy_ngcc__/fesm2015/ng-custom-checkbox-values.js");

    function XelerateCheckboxComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r18.info.lblwrapclass ? ctx_r18.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r18.id ? ctx_r18.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r18.id ? ctx_r18.id : "")("id", ctx_r18.id ? ctx_r18.id + "labelgrp" : "");
      }
    }

    var XelerateCheckboxComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el3) {
      _inherits(XelerateCheckboxComponent, _abstract_xelerate_el3);

      var _super6 = _createSuper(XelerateCheckboxComponent);

      function XelerateCheckboxComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateCheckboxComponent);

        return _super6.call(this, cp, xelerate, elmRef);
      }

      return XelerateCheckboxComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateCheckboxComponent.ɵfac = function XelerateCheckboxComponent_Factory(t) {
      return new (t || XelerateCheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateCheckboxComponent,
      selectors: [["xelerate-checkbox"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateCheckboxComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 7,
      vars: 27,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["type", "checkbox", 3, "id", "placeholder", "readonly", "ngStyle", "formControl", "customCheckboxValues", "checkedValue", "uncheckedValue", "indeterminateValue", "click", "change"], ["control", ""], [3, "for", "id"]],
      template: function XelerateCheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateCheckboxComponent_div_0_Template, 2, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateCheckboxComponent_Template_input_click_3_listener($event) {
            return ctx.clickAction($event);
          })("change", function XelerateCheckboxComponent_Template_input_change_3_listener($event) {
            return ctx.changeAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], ng_custom_checkbox_values__WEBPACK_IMPORTED_MODULE_6__["CustomCheckboxValuesDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-checkbox",
          templateUrl: "./xelerate-checkbox.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateCheckboxComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-hyperlink/xelerate-hyperlink.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: XelerateHyperlinkComponent */

  /***/
  function srcSharedXelerateElementsXelerateHyperlinkXelerateHyperlinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateHyperlinkComponent", function () {
      return XelerateHyperlinkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateHyperlinkComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r20.info.lblwrapclass ? ctx_r20.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r20.id ? ctx_r20.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r20.info.lblclass ? ctx_r20.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r20.id ? ctx_r20.id : "")("id", ctx_r20.id ? ctx_r20.id + "label" : "");
      }
    }

    function XelerateHyperlinkComponent_i_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r22.info.iconclass + ctx_r22.info.iconsize);
      }
    }

    var XelerateHyperlinkComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el4) {
      _inherits(XelerateHyperlinkComponent, _abstract_xelerate_el4);

      var _super7 = _createSuper(XelerateHyperlinkComponent);

      function XelerateHyperlinkComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateHyperlinkComponent);

        return _super7.call(this, cp, xelerate, elmRef);
      }

      return XelerateHyperlinkComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateHyperlinkComponent.ɵfac = function XelerateHyperlinkComponent_Factory(t) {
      return new (t || XelerateHyperlinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateHyperlinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateHyperlinkComponent,
      selectors: [["xelerate-hyperlink"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateHyperlinkComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 18,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click", "mouseover", "mouseout"], ["control", ""], [3, "class", 4, "ngIf"], [3, "for", "id"]],
      template: function XelerateHyperlinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateHyperlinkComponent_div_0_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateHyperlinkComponent_Template_a_click_2_listener($event) {
            return ctx.clickAction($event);
          })("mouseover", function XelerateHyperlinkComponent_Template_a_mouseover_2_listener($event) {
            return ctx.mouseoverAction($event);
          })("mouseout", function XelerateHyperlinkComponent_Template_a_mouseout_2_listener($event) {
            return ctx.mouseoutAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, XelerateHyperlinkComponent_i_5_Template, 1, 2, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateHyperlinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'xelerate-hyperlink',
          templateUrl: './xelerate-hyperlink.component.html',
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateHyperlinkComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-icon/xelerate-icon.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: XelerateIconComponent */

  /***/
  function srcSharedXelerateElementsXelerateIconXelerateIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateIconComponent", function () {
      return XelerateIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateIconComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.info.lblwrapclass ? ctx_r23.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r23.id ? ctx_r23.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.info.lblclass ? ctx_r23.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r23.id ? ctx_r23.id : "")("id", ctx_r23.id ? ctx_r23.id + "label" : "");
      }
    }

    var XelerateIconComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el5) {
      _inherits(XelerateIconComponent, _abstract_xelerate_el5);

      var _super8 = _createSuper(XelerateIconComponent);

      function XelerateIconComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateIconComponent);

        return _super8.call(this, cp, xelerate, elmRef);
      }

      return XelerateIconComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateIconComponent.ɵfac = function XelerateIconComponent_Factory(t) {
      return new (t || XelerateIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateIconComponent,
      selectors: [["xelerate-icon"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 14,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "click"], ["control", ""], [3, "for", "id"]],
      template: function XelerateIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateIconComponent_div_0_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateIconComponent_Template_i_click_2_listener($event) {
            return ctx.clickAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.iconclass + ctx.info.iconsize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.tooltipText ? "tooltip" : null)("data-container", ctx.tooltipText ? "body" : null)("data-original-title", ctx.tooltipText ? ctx.tooltipTitle : null)("data-content", ctx.tooltipText ? ctx.tooltipText : null)("data-trigger", ctx.tooltipText ? ctx.info.tooltiptrigger : null)("data-placement", ctx.tooltipText ? ctx.info.tooltipposition : null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'xelerate-icon',
          templateUrl: './xelerate-icon.component.html'
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-image/xelerate-image.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: XelerateImageComponent */

  /***/
  function srcSharedXelerateElementsXelerateImageXelerateImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateImageComponent", function () {
      return XelerateImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateImageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r25.info.lblwrapclass ? ctx_r25.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r25.id ? ctx_r25.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r25.info.lblclass ? ctx_r25.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r25.id ? ctx_r25.id : "")("id", ctx_r25.id ? ctx_r25.id + "label" : "");
      }
    }

    var XelerateImageComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el6) {
      _inherits(XelerateImageComponent, _abstract_xelerate_el6);

      var _super9 = _createSuper(XelerateImageComponent);

      function XelerateImageComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateImageComponent);

        return _super9.call(this, cp, xelerate, elmRef);
      }

      return XelerateImageComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateImageComponent.ɵfac = function XelerateImageComponent_Factory(t) {
      return new (t || XelerateImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateImageComponent,
      selectors: [["xelerate-image"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateImageComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 15,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["alt", "Image Not found", 3, "id", "ngStyle", "src", "click"], ["control", ""], [3, "for", "id"]],
      template: function XelerateImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateImageComponent_div_0_Template, 2, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateImageComponent_Template_img_click_2_listener($event) {
            return ctx.clickAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("ngStyle", ctx.info.styles ? ctx.info.styles : null)("src", ctx.fc.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.info.tooltiptext ? "tooltip" : null)("data-container", ctx.info.tooltiptext ? "body" : null)("data-original-title", ctx.info.tooltiptext ? ctx.info.tooltiptitle : null)("data-content", ctx.info.tooltiptext ? ctx.info.tooltiptext : null)("data-trigger", ctx.info.tooltiptext ? ctx.info.tooltiptrigger : null)("data-placement", ctx.info.tooltiptext ? ctx.info.tooltipposition : null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'xelerate-image',
          templateUrl: './xelerate-image.component.html',
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateImageComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-input/xelerate-input.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: XelerateInputComponent */

  /***/
  function srcSharedXelerateElementsXelerateInputXelerateInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateInputComponent", function () {
      return XelerateInputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function XelerateInputComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r27.info.lblwrapclass ? ctx_r27.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r27.id ? ctx_r27.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r27.info.lblclass ? ctx_r27.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r27.id ? ctx_r27.id : "")("id", ctx_r27.id ? ctx_r27.id + "label" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.title);
      }
    }

    function XelerateInputComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r32.info.iconclass);
      }
    }

    function XelerateInputComponent_div_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function XelerateInputComponent_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r34.info.isDate ? true : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r34.info.iconclass);
      }
    }

    function XelerateInputComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, XelerateInputComponent_div_2_div_1_Template, 3, 2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, XelerateInputComponent_div_2_ng_container_2_Template, 1, 0, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateInputComponent_div_2_div_3_Template, 3, 3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r28.info.iconsize ? "input-group " + ctx_r28.info.iconsize : "input-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.info.iconposition == "LEFT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.info.iconposition == "RIGHT");
      }
    }

    function XelerateInputComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function XelerateInputComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function XelerateInputComponent_ng_template_4_Template_input_focus_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.focusAction($event);
        })("blur", function XelerateInputComponent_ng_template_4_Template_input_blur_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.blurAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r31.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r31.id ? ctx_r31.id : "")("type", ctx_r31.info.type)("placeholder", ctx_r31.placeHolder)("readonly", ctx_r31.info.readonly)("ngStyle", ctx_r31.info.styles ? ctx_r31.info.styles : null)("formControl", ctx_r31.fc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r31.tooltipText ? "tooltip" : null)("data-container", ctx_r31.tooltipText ? "body" : null)("data-original-title", ctx_r31.tooltipText ? ctx_r31.tooltipTitle : null)("data-content", ctx_r31.tooltipText ? ctx_r31.tooltipText : null)("data-trigger", ctx_r31.tooltipText ? ctx_r31.info.tooltiptrigger : null)("data-placement", ctx_r31.tooltipText ? ctx_r31.info.tooltipposition : null)("data-input", ctx_r31.info.isDate ? true : null);
      }
    }

    var XelerateInputComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el7) {
      _inherits(XelerateInputComponent, _abstract_xelerate_el7);

      var _super10 = _createSuper(XelerateInputComponent);

      function XelerateInputComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateInputComponent);

        return _super10.call(this, cp, xelerate, elmRef);
      }

      return XelerateInputComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateInputComponent.ɵfac = function XelerateInputComponent_Factory(t) {
      return new (t || XelerateInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateInputComponent,
      selectors: [["xelerate-input"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateInputComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 6,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["controlTmpl", ""], [3, "for", "id"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "input-group-append"], [3, "id", "type", "placeholder", "readonly", "ngStyle", "formControl", "focus", "blur"], ["control", ""]],
      template: function XelerateInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateInputComponent_div_0_Template, 3, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, XelerateInputComponent_div_2_Template, 4, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateInputComponent_ng_container_3_Template, 1, 0, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateInputComponent_ng_template_4_Template, 2, 15, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass ? ctx.info.ctrlwrapclass : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.iconclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", !ctx.info.iconclass ? _r30 : "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-input",
          templateUrl: "./xelerate-input.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateInputComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-radio/xelerate-radio.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: XelerateRadioComponent */

  /***/
  function srcSharedXelerateElementsXelerateRadioXelerateRadioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateRadioComponent", function () {
      return XelerateRadioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function XelerateRadioComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r39.info.lblwrapclass ? ctx_r39.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r39.id ? ctx_r39.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r39.id ? ctx_r39.id : "")("id", ctx_r39.id ? ctx_r39.id + "label" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.title);
      }
    }

    function XelerateRadioComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateRadioComponent_div_3_Template_input_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.clickAction($event);
        })("change", function XelerateRadioComponent_div_3_Template_input_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.changeAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r42 = ctx.$implicit;

        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
      }
    }

    var XelerateRadioComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el8) {
      _inherits(XelerateRadioComponent, _abstract_xelerate_el8);

      var _super11 = _createSuper(XelerateRadioComponent);

      function XelerateRadioComponent(cp, xelerate, elmRef) {
        var _this20;

        _classCallCheck(this, XelerateRadioComponent);

        _this20 = _super11.call(this, cp, xelerate, elmRef);
        _this20.optionUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this20;
      }

      _createClass(XelerateRadioComponent, [{
        key: "getOptionUpdatesObservable",
        value: function getOptionUpdatesObservable() {
          return this.optionUpdates.asObservable();
        }
      }, {
        key: "updateOptions",
        value: function updateOptions(options) {
          //// Creating new options array just in case to ease the change detection for any custom code
          this.info.options = _toConsumableArray(options);
          this.optionUpdates.next(options);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.optionUpdates.complete();

          _get(_getPrototypeOf(XelerateRadioComponent.prototype), "ngOnDestroy", this).call(this);
        }
      }]);

      return XelerateRadioComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateRadioComponent.ɵfac = function XelerateRadioComponent_Factory(t) {
      return new (t || XelerateRadioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateRadioComponent,
      selectors: [["xelerate-radio"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateRadioComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 5,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], ["control", ""], [3, "class", 4, "ngFor", "ngForOf"], [3, "for", "id"], ["type", "radio", 3, "id", "value", "name", "readonly", "ngStyle", "formControl", "click", "change"]],
      template: function XelerateRadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateRadioComponent_div_0_Template, 3, 6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, XelerateRadioComponent_div_3_Template, 4, 21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.options);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-radio",
          templateUrl: "./xelerate-radio.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateRadioComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-select/xelerate-select.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: XelerateSelectComponent */

  /***/
  function srcSharedXelerateElementsXelerateSelectXelerateSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateSelectComponent", function () {
      return XelerateSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function XelerateSelectComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.info.lblwrapclass ? ctx_r8.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.id ? ctx_r8.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.info.lblclass ? ctx_r8.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r8.id ? ctx_r8.id : "")("id", ctx_r8.id ? ctx_r8.id + "label" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.title);
      }
    }

    function XelerateSelectComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r11 = ctx.$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r11.val);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.xelerate.labelsMap[ctx_r10.xelerate.language][option_r11.desc] ? ctx_r10.xelerate.labelsMap[ctx_r10.xelerate.language][option_r11.desc] : option_r11.desc, " ");
      }
    }

    var XelerateSelectComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el9) {
      _inherits(XelerateSelectComponent, _abstract_xelerate_el9);

      var _super12 = _createSuper(XelerateSelectComponent);

      function XelerateSelectComponent(cp, xelerate, elmRef) {
        var _this21;

        _classCallCheck(this, XelerateSelectComponent);

        _this21 = _super12.call(this, cp, xelerate, elmRef);
        _this21.optionUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this21;
      }

      _createClass(XelerateSelectComponent, [{
        key: "getOptionUpdatesObservable",
        value: function getOptionUpdatesObservable() {
          return this.optionUpdates.asObservable();
        }
      }, {
        key: "updateOptions",
        value: function updateOptions(options) {
          //// Creating new options array just in case to ease the change detection for any custom code
          this.info.options = _toConsumableArray(options);
          this.optionUpdates.next(options);
          /* this.info.options.length = 0;
          this.info.options.push(...options); */
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.optionUpdates.complete();

          _get(_getPrototypeOf(XelerateSelectComponent.prototype), "ngOnDestroy", this).call(this);
        }
      }]);

      return XelerateSelectComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateSelectComponent.ɵfac = function XelerateSelectComponent_Factory(t) {
      return new (t || XelerateSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateSelectComponent,
      selectors: [["xelerate-select"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateSelectComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 16,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle", "formControl", "change"], ["control", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "for", "id"], [3, "value"]],
      template: function XelerateSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateSelectComponent_div_0_Template, 3, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function XelerateSelectComponent_Template_select_change_2_listener($event) {
            return ctx.changeAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, XelerateSelectComponent_option_4_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-select",
          templateUrl: "./xelerate-select.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateSelectComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-tags/xelerate-tags.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: XelerateTagsComponent */

  /***/
  function srcSharedXelerateElementsXelerateTagsXelerateTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateTagsComponent", function () {
      return XelerateTagsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../../../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateTagsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r78.info.lblwrapclass ? ctx_r78.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r78.id ? ctx_r78.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r78.info.lblclass ? ctx_r78.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r78.id ? ctx_r78.id : "")("id", ctx_r78.id ? ctx_r78.id + "label" : "");
      }
    }

    function XelerateTagsComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTagsComponent_span_7_Template_span_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r83.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tag_r81 = ctx.$implicit;
        var t_r82 = ctx.index;

        var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r80.info.optclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r80.id ? ctx_r80.id + "_" + t_r82 : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tagId", tag_r81.tagId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r80.xelerate.labelsMap[ctx_r80.xelerate.language][tag_r81.tagName] ? ctx_r80.xelerate.labelsMap[ctx_r80.xelerate.language][tag_r81.tagName] : tag_r81.tagName, " ");
      }
    }

    var XelerateTagsComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el10) {
      _inherits(XelerateTagsComponent, _abstract_xelerate_el10);

      var _super13 = _createSuper(XelerateTagsComponent);

      function XelerateTagsComponent(cp, xelerate, elmRef) {
        var _this22;

        _classCallCheck(this, XelerateTagsComponent);

        _this22 = _super13.call(this, cp, xelerate, elmRef);
        _this22.tagListUpdates = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        return _this22;
      }

      _createClass(XelerateTagsComponent, [{
        key: "getOptionUpdatesObservable",
        value: function getOptionUpdatesObservable() {
          return this.tagListUpdates.asObservable();
        }
      }, {
        key: "updateTagList",
        value: function updateTagList(tags) {
          //// Creating new options array just in case to ease the change detection for any custom code
          this.info.tags = _toConsumableArray(tags);
          this.tagListUpdates.next(tags);
          /* this.info.options.length = 0;
          this.info.options.push(...options); */
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tagListUpdates.complete();

          _get(_getPrototypeOf(XelerateTagsComponent.prototype), "ngOnDestroy", this).call(this);
        }
      }]);

      return XelerateTagsComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateTagsComponent.ɵfac = function XelerateTagsComponent_Factory(t) {
      return new (t || XelerateTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateTagsComponent,
      selectors: [["xelerate-tags"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateTagsComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 8,
      vars: 20,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "ngStyle"], ["control", ""], [3, "id", "class", "click", 4, "ngFor", "ngForOf"], [3, "for", "id"], [3, "id", "click"]],
      template: function XelerateTagsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-tags",
          templateUrl: "./xelerate-tags.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateTagsComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_3__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_4__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-text/xelerate-text.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: XelerateTextComponent */

  /***/
  function srcSharedXelerateElementsXelerateTextXelerateTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateTextComponent", function () {
      return XelerateTextComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function XelerateTextComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.info.lblwrapclass ? ctx_r49.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r49.id ? ctx_r49.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r49.info.lblclass ? ctx_r49.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r49.id ? ctx_r49.id : "")("id", ctx_r49.id ? ctx_r49.id + "label" : "");
      }
    }

    function XelerateTextComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_p_2_Template_p_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r50.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r50.id ? ctx_r50.id : "")("ngStyle", ctx_r50.info.styles ? ctx_r50.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r50.tooltipText ? "tooltip" : null)("data-container", ctx_r50.tooltipText ? "body" : null)("data-original-title", ctx_r50.tooltipText ? ctx_r50.tooltipTitle : null)("data-content", ctx_r50.tooltipText ? ctx_r50.tooltipText : null)("data-trigger", ctx_r50.tooltipText ? ctx_r50.info.tooltiptrigger : null)("data-placement", ctx_r50.tooltipText ? ctx_r50.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.fc.value, " ");
      }
    }

    function XelerateTextComponent_h1_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h1_3_Template_h1_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r61.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r51.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r51.id ? ctx_r51.id : "")("ngStyle", ctx_r51.info.styles ? ctx_r51.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r51.tooltipText ? "tooltip" : null)("data-container", ctx_r51.tooltipText ? "body" : null)("data-original-title", ctx_r51.tooltipText ? ctx_r51.tooltipTitle : null)("data-content", ctx_r51.tooltipText ? ctx_r51.tooltipText : null)("data-trigger", ctx_r51.tooltipText ? ctx_r51.info.tooltiptrigger : null)("data-placement", ctx_r51.tooltipText ? ctx_r51.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r51.fc.value, " ");
      }
    }

    function XelerateTextComponent_h2_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h2_4_Template_h2_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r52.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r52.id ? ctx_r52.id : "")("ngStyle", ctx_r52.info.styles ? ctx_r52.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r52.tooltipText ? "tooltip" : null)("data-container", ctx_r52.tooltipText ? "body" : null)("data-original-title", ctx_r52.tooltipText ? ctx_r52.tooltipTitle : null)("data-content", ctx_r52.tooltipText ? ctx_r52.tooltipText : null)("data-trigger", ctx_r52.tooltipText ? ctx_r52.info.tooltiptrigger : null)("data-placement", ctx_r52.tooltipText ? ctx_r52.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.fc.value, " ");
      }
    }

    function XelerateTextComponent_h3_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h3_5_Template_h3_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r53.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r53.id ? ctx_r53.id : "")("ngStyle", ctx_r53.info.styles ? ctx_r53.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r53.tooltipText ? "tooltip" : null)("data-container", ctx_r53.tooltipText ? "body" : null)("data-original-title", ctx_r53.tooltipText ? ctx_r53.tooltipTitle : null)("data-content", ctx_r53.tooltipText ? ctx_r53.tooltipText : null)("data-trigger", ctx_r53.tooltipText ? ctx_r53.info.tooltiptrigger : null)("data-placement", ctx_r53.tooltipText ? ctx_r53.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r53.fc.value, " ");
      }
    }

    function XelerateTextComponent_h4_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h4_6_Template_h4_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r54.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r54.id ? ctx_r54.id : "")("ngStyle", ctx_r54.info.styles ? ctx_r54.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r54.tooltipText ? "tooltip" : null)("data-container", ctx_r54.tooltipText ? "body" : null)("data-original-title", ctx_r54.tooltipText ? ctx_r54.tooltipTitle : null)("data-content", ctx_r54.tooltipText ? ctx_r54.tooltipText : null)("data-trigger", ctx_r54.tooltipText ? ctx_r54.info.tooltiptrigger : null)("data-placement", ctx_r54.tooltipText ? ctx_r54.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r54.fc.value, " ");
      }
    }

    function XelerateTextComponent_h5_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h5_7_Template_h5_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r73.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r55.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r55.id ? ctx_r55.id : "")("ngStyle", ctx_r55.info.styles ? ctx_r55.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r55.tooltipText ? "tooltip" : null)("data-container", ctx_r55.tooltipText ? "body" : null)("data-original-title", ctx_r55.tooltipText ? ctx_r55.tooltipTitle : null)("data-content", ctx_r55.tooltipText ? ctx_r55.tooltipText : null)("data-trigger", ctx_r55.tooltipText ? ctx_r55.info.tooltiptrigger : null)("data-placement", ctx_r55.tooltipText ? ctx_r55.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r55.fc.value, " ");
      }
    }

    function XelerateTextComponent_h6_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function XelerateTextComponent_h6_8_Template_h6_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.clickAction($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r56.info.ctrlclass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r56.id ? ctx_r56.id : "")("ngStyle", ctx_r56.info.styles ? ctx_r56.info.styles : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx_r56.tooltipText ? "tooltip" : null)("data-container", ctx_r56.tooltipText ? "body" : null)("data-original-title", ctx_r56.tooltipText ? ctx_r56.tooltipTitle : null)("data-content", ctx_r56.tooltipText ? ctx_r56.tooltipText : null)("data-trigger", ctx_r56.tooltipText ? ctx_r56.info.tooltiptrigger : null)("data-placement", ctx_r56.tooltipText ? ctx_r56.info.tooltipposition : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r56.fc.value, " ");
      }
    }

    var XelerateTextComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el11) {
      _inherits(XelerateTextComponent, _abstract_xelerate_el11);

      var _super14 = _createSuper(XelerateTextComponent);

      function XelerateTextComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateTextComponent);

        return _super14.call(this, cp, xelerate, elmRef);
      }

      return XelerateTextComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateTextComponent.ɵfac = function XelerateTextComponent_Factory(t) {
      return new (t || XelerateTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateTextComponent,
      selectors: [["xelerate-text"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateTextComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 11,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "class", "ngStyle", "click", 4, "ngIf"], [3, "for", "id"], [3, "id", "ngStyle", "click"], ["control", ""]],
      template: function XelerateTextComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-text",
          templateUrl: "./xelerate-text.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateTextComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/shared/xelerate-elements/xelerate-textarea/xelerate-textarea.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: XelerateTextareaComponent */

  /***/
  function srcSharedXelerateElementsXelerateTextareaXelerateTextareaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XelerateTextareaComponent", function () {
      return XelerateTextareaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../abstract-xelerate-element.component */
    "./src/shared/xelerate-elements/abstract-xelerate-element.component.ts");
    /* harmony import */


    var _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/context-provider.service */
    "./src/shared/services/context-provider.service.ts");
    /* harmony import */


    var src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/shared/services/xelerate.service */
    "./src/shared/services/xelerate.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../../../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function XelerateTextareaComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r47.info.lblwrapclass ? ctx_r47.info.lblwrapclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r47.id ? ctx_r47.id + "labelwrap" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r47.info.lblclass ? ctx_r47.info.lblclass : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r47.id ? ctx_r47.id : "")("id", ctx_r47.id ? ctx_r47.id + "label" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.title);
      }
    }

    var XelerateTextareaComponent =
    /*#__PURE__*/
    function (_abstract_xelerate_el12) {
      _inherits(XelerateTextareaComponent, _abstract_xelerate_el12);

      var _super15 = _createSuper(XelerateTextareaComponent);

      function XelerateTextareaComponent(cp, xelerate, elmRef) {
        _classCallCheck(this, XelerateTextareaComponent);

        return _super15.call(this, cp, xelerate, elmRef);
      }

      return XelerateTextareaComponent;
    }(_abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"]);

    XelerateTextareaComponent.ɵfac = function XelerateTextareaComponent_Factory(t) {
      return new (t || XelerateTextareaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    XelerateTextareaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: XelerateTextareaComponent,
      selectors: [["xelerate-textarea"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return XelerateTextareaComponent;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 19,
      consts: [[3, "class", "id", 4, "ngIf"], [3, "id"], [3, "id", "placeholder", "readonly", "ngStyle", "rows", "cols", "formControl", "blur"], ["control", ""], [3, "for", "id"]],
      template: function XelerateTextareaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, XelerateTextareaComponent_div_0_Template, 3, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function XelerateTextareaComponent_Template_textarea_blur_2_listener($event) {
            return ctx.blurAction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.labelReq == "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlwrapclass ? ctx.info.ctrlwrapclass : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id + "controlwrap" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.info.ctrlclass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id ? ctx.id : "")("placeholder", ctx.info.placeholder)("readonly", ctx.info.readonly)("ngStyle", ctx.info.styles ? ctx.info.styles : null)("rows", ctx.info.rows)("cols", ctx.info.cols)("formControl", ctx.fc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-toggle", ctx.info.tooltiptext ? "tooltip" : null)("data-container", ctx.info.tooltiptext ? "body" : null)("data-original-title", ctx.info.tooltiptext ? ctx.info.tooltiptitle : null)("data-content", ctx.info.tooltiptext ? ctx.info.tooltiptext : null)("data-trigger", ctx.info.tooltiptext ? ctx.info.tooltiptrigger : null)("data-placement", ctx.info.tooltiptext ? ctx.info.tooltipposition : null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XelerateTextareaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "xelerate-textarea",
          templateUrl: "./xelerate-textarea.component.html",
          providers: [{
            provide: _abstract_xelerate_element_component__WEBPACK_IMPORTED_MODULE_1__["AbstractXelerateElement"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return XelerateTextareaComponent;
            })
          }]
        }]
      }], function () {
        return [{
          type: _services_context_provider_service__WEBPACK_IMPORTED_MODULE_2__["ContextProvider"]
        }, {
          type: src_shared_services_xelerate_service__WEBPACK_IMPORTED_MODULE_3__["XelerateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Work\Apps\customerapps\Customer01\exec\rYKU7zJ9Do\source\ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map