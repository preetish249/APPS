(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "../../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************************************************************!*\
    !*** C:/Work/Apps/customerapps/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!C:/Work/Apps/customerapps/node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/* @import \"~bootstrap/dist/css/bootstrap.css\";*/\r\n.flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  box-sizing: border-box;\n  touch-action: manipulation;\n  background: #fff;\n  box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\r\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\r\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\r\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\r\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\r\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\r\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\r\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  box-shadow: none !important;\n}\r\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\r\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\r\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\r\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\r\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\r\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\r\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\r\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\r\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\r\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\r\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\r\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\r\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\r\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\r\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\r\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\r\n.flatpickr-calendar:focus {\n  outline: 0;\n}\r\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\r\n.flatpickr-months {\n  display: flex;\n}\r\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  flex: 1;\n}\r\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n}\r\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\r\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\r\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\r\n/*\n      /*rtl:begin:ignore*/\r\n/*\n      /*rtl:end:ignore*/\r\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\r\n/*\n      /*rtl:begin:ignore*/\r\n/*\n      /*rtl:end:ignore*/\r\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\r\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\r\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\r\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\r\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\r\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\r\n.numInputWrapper input {\n  width: 100%;\n}\r\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\r\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\r\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.15);\n  box-sizing: border-box;\n}\r\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\r\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\r\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\r\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\r\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n  top: 26%;\n}\r\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\r\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n  top: 40%;\n}\r\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\r\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\r\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\r\n.numInputWrapper:hover span {\n  opacity: 1;\n}\r\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  transform: translate3d(0px, 0px, 0px);\n}\r\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\r\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\r\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\r\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\r\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\r\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\r\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\r\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\r\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\r\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\r\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\r\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\r\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 28px;\n}\r\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: flex;\n  flex: 1;\n}\r\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  flex: 1;\n  font-weight: bolder;\n}\r\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\r\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  width: 307.875px;\n}\r\n.flatpickr-days:focus {\n  outline: 0;\n}\r\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: flex;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  justify-content: space-around;\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\r\n.dayContainer + .dayContainer {\n  box-shadow: -1px 0 0 #e6e6e6;\n}\r\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\r\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\r\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\r\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\r\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\r\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\r\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\r\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #569ff7;\n}\r\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\r\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\r\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\r\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57,57,57,0.1);\n}\r\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\r\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\r\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\r\n.flatpickr-weekwrapper {\n  float: left;\n}\r\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  box-shadow: 1px 0 0 #e6e6e6;\n}\r\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\r\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\r\n.flatpickr-innerContainer {\n  display: block;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n}\r\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\r\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n}\r\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\r\n.flatpickr-time .numInputWrapper {\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\r\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\r\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\r\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\r\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\r\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\r\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\r\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\r\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\r\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  align-self: center;\n}\r\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\r\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\r\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\r\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\r\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\r\n.group{\r\n    border: solid 0.5px black;\r\n    padding: 2px 2px 2px 12px;\r\n}\r\nh4{\r\n    margin: 0;\r\n}\r\nh5{\r\n    margin: 0;\r\n}\r\ntextarea{\r\n    width: 100%;\r\n}\r\n/* Change required for datatables on window resize issue */\r\ntable.dataTable {\r\n    width: 100% !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFLGdEQUFnRDtBQ0RoRDtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHVCQUF1QjtVQUNmLGVBQWU7RUFDdkIsY0FBYztFQUNkLFNBQVM7RUFDVCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRVIsc0JBQXNCO0VBRTFCLDBCQUEwQjtFQUM5QixnQkFBZ0I7RUFFUiw2R0FBNkc7QUFDdkg7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9FQUFvRTtVQUM1RCw0REFBNEQ7QUFDdEU7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUNBO0VBRVUsMkJBQTJCO0FBQ3JDO0FBQ0E7RUFFVSw2Q0FBNkM7QUFDdkQ7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7QUFDWjtBQUNBOzs7O0VBSUUsVUFBVTtF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O0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUVWLHNCQUFzQjtFQUM5Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QseUJBQXlCO0tBQ3RCLHNCQUFzQjtVQUVqQixpQkFBaUI7RUFHakIsa0JBQWtCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7Ozs7RUFJRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUVGLG1DQUFtQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVGLCtCQUErQjtFQUN6QztBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFFRixtQ0FBbUM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFRiwrQkFBK0I7RUFDekM7QUFDRjtBRGx4QkE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUEsMERBQTBEO0FBQzFEO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4vKiBAaW1wb3J0IFwifmJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7Ki9cclxuQGltcG9ydCBcIn5mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuY3NzXCI7IFxyXG5cclxuLmdyb3Vwe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDJweCAycHggMnB4IDEycHg7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmg1e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgcmVxdWlyZWQgZm9yIGRhdGF0YWJsZXMgb24gd2luZG93IHJlc2l6ZSBpc3N1ZSAqL1xyXG50YWJsZS5kYXRhVGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5mbGF0cGlja3ItY2FsZW5kYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDcuODc1cHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMCAwICNlNmU2ZTYsIC0xcHggMCAwICNlNmU2ZTYsIDAgMXB4IDAgI2U2ZTZlNiwgMCAtMXB4IDAgI2U2ZTZlNiwgMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgI2U2ZTZlNiwgLTFweCAwIDAgI2U2ZTZlNiwgMCAxcHggMCAjZTZlNmU2LCAwIC0xcHggMCAjZTZlNmU2LCAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4sXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XG4gIG9wYWNpdHk6IDE7XG4gIG1heC1oZWlnaHQ6IDY0MHB4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB6LWluZGV4OiA5OTk5OTtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYy5vcGVuIHtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIubXVsdGlNb250aCAuZmxhdHBpY2tyLWRheXMgLmRheUNvbnRhaW5lcjpudGgtY2hpbGQobisxKSAuZmxhdHBpY2tyLWRheS5pblJhbmdlOm50aC1jaGlsZCg3bis3KSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIubXVsdGlNb250aCAuZmxhdHBpY2tyLWRheXMgLmRheUNvbnRhaW5lcjpudGgtY2hpbGQobisyKSAuZmxhdHBpY2tyLWRheS5pblJhbmdlOm50aC1jaGlsZCg3bisxKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAwIDAgI2U2ZTZlNiwgNXB4IDAgMCAjZTZlNmU2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC0ycHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIsXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIge1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUsXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBsZWZ0OiAyMnB4O1xufVxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YmVmb3JlLFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1JpZ2h0OmJlZm9yZSxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyLFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1JpZ2h0OmFmdGVyIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDIycHg7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Q2VudGVyOmJlZm9yZSxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dDZW50ZXI6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBtYXJnaW46IDAgLTVweDtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDRweDtcbiAgbWFyZ2luOiAwIC00cHg7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xuICBib3R0b206IDEwMCU7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlNmU2ZTY7XG59XG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlLFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XG4gIHRvcDogMTAwJTtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xufVxuLmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG4uZmxhdHBpY2tyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mbGF0cGlja3ItbW9udGhzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW1vbnRoIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XG4gIGZpbGw6IHJnYmEoMCwwLDAsMC45KTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG59XG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGgsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGgge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogMztcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcbiAgZmlsbDogcmdiYSgwLDAsMCwwLjkpO1xufVxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1kaXNhYmxlZCxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmZsYXRwaWNrci1tb250aHMgLmZsYXRwaWNrci1wcmV2LW1vbnRoIGksXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XG4vKlxuICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cbi8qXG4gICAgICAqL1xuICBsZWZ0OiAwO1xuLypcbiAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xuLypcbiAgICAgICovXG59XG4vKlxuICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cbi8qXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCB7XG4vKlxuICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cbi8qXG4gICAgICAqL1xuICByaWdodDogMDtcbi8qXG4gICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cbi8qXG4gICAgICAqL1xufVxuLypcbiAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXG4vKlxuICAgICAgLypydGw6ZW5kOmlnbm9yZSovXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIge1xuICBjb2xvcjogIzk1OWVhOTtcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlciBzdmcsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcbiAgZmlsbDogI2Y2NDc0Nztcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXG4uZmxhdHBpY2tyLW1vbnRocyAuZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItcHJldi1tb250aCBzdmcgcGF0aCxcbi5mbGF0cGlja3ItbW9udGhzIC5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXM7XG4gIGZpbGw6IGluaGVyaXQ7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0LFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm51bUlucHV0V3JhcHBlciBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm51bUlucHV0V3JhcHBlciBpbnB1dDo6LW1zLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTRweDtcbiAgcGFkZGluZzogMCA0cHggMCAycHg7XG4gIGhlaWdodDogNTAlO1xuICBsaW5lLWhlaWdodDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsNTcsNTcsMC4xNSk7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcCB7XG4gIHRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDU3LDU3LDU3LDAuNik7XG4gIHRvcDogMjYlO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XG4gIHRvcDogNTAlO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO1xuICB0b3A6IDQwJTtcbn1cbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyBwYXRoIHtcbiAgZmlsbDogcmdiYSgwLDAsMCwwLjUpO1xufVxuLm51bUlucHV0V3JhcHBlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG59XG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW4ge1xuICBvcGFjaXR5OiAxO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHtcbiAgZm9udC1zaXplOiAxMzUlO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc1JTtcbiAgbGVmdDogMTIuNSU7XG4gIHBhZGRpbmc6IDcuNDhweCAwIDAgMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGhlaWdodDogMzRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVjaDtcbiAgcGFkZGluZzogMDtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG59XG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XG4gIHdpZHRoOiA2Y2g7XG4gIHdpZHRoOiA3Y2hcXDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiB0ZXh0O1xuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRocyB7XG4gIGFwcGVhcmFuY2U6IG1lbnVsaXN0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogMzAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IC0xcHggMCAwIDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbWVudWxpc3Q7XG4gIC1tb3otYXBwZWFyYW5jZTogbWVudWxpc3Q7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHM6Zm9jdXMsXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoczphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5mbGF0cGlja3ItbW9udGhEcm9wZG93bi1tb250aHMgLmZsYXRwaWNrci1tb250aERyb3Bkb3duLW1vbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMjhweDtcbn1cbi5mbGF0cGlja3Itd2Vla2RheXMgLmZsYXRwaWNrci13ZWVrZGF5Y29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG59XG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDkwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmRheUNvbnRhaW5lcixcbi5mbGF0cGlja3Itd2Vla3Mge1xuICBwYWRkaW5nOiAxcHggMCAwIDA7XG59XG4uZmxhdHBpY2tyLWRheXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAzMDcuODc1cHg7XG59XG4uZmxhdHBpY2tyLWRheXM6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmRheUNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAzMDcuODc1cHg7XG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xuICBtYXgtd2lkdGg6IDMwNy44NzVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XG4gIG9wYWNpdHk6IDE7XG59XG4uZGF5Q29udGFpbmVyICsgLmRheUNvbnRhaW5lciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwIDAgI2U2ZTZlNjtcbiAgICAgICAgICBib3gtc2hhZG93OiAtMXB4IDAgMCAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1kYXkge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogIzM5MzkzOTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aWR0aDogMTQuMjg1NzE0MyU7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XG4gICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTQuMjg1NzE0MyU7XG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XG4gIG1heC13aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzOXB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgYm9yZGVyLWNvbG9yOiAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xuICBib3JkZXItY29sb3I6ICM5NTllYTk7XG59XG4uZmxhdHBpY2tyLWRheS50b2RheTpob3Zlcixcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTU5ZWE5O1xuICBiYWNrZ3JvdW5kOiAjOTU5ZWE5O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmluUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpmb2N1cyxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3Zlcixcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmhvdmVyLFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5wcmV2TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLm5leHRNb250aERheSB7XG4gIGJhY2tncm91bmQ6ICM1NjlmZjc7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuZW5kUmFuZ2UsXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSksXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2U6bm90KDpudGgtY2hpbGQoN24rMSkpLFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZTpub3QoOm50aC1jaGlsZCg3bisxKSkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjNTY5ZmY3O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC0xMHB4IDAgMCAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgI2U2ZTZlNiwgNXB4IDAgMCAjZTZlNmU2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlNmU2ZTYsIDVweCAwIDAgI2U2ZTZlNjtcbn1cbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3Zlcixcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcbiAgY29sb3I6IHJnYmEoNTcsNTcsNTcsMC4zKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZCxcbi5mbGF0cGlja3ItZGF5LmZsYXRwaWNrci1kaXNhYmxlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGNvbG9yOiByZ2JhKDU3LDU3LDU3LDAuMSk7XG59XG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjNTY5ZmY3LCA1cHggMCAwICM1NjlmZjc7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzU2OWZmNywgNXB4IDAgMCAjNTY5ZmY3O1xufVxuLmZsYXRwaWNrci1kYXkuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheSB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIge1xuICBmbG9hdDogbGVmdDtcbn1cbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrcyB7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMCAwICNlNmU2ZTY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMCAjZTZlNmU2O1xufVxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtkYXkge1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXksXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHNwYW4uZmxhdHBpY2tyLWRheTpob3ZlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBjb2xvcjogcmdiYSg1Nyw1Nyw1NywwLjMpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBib3JkZXI6IG5vbmU7XG59XG4uZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mbGF0cGlja3ItckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uZmxhdHBpY2tyLXRpbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxhdHBpY2tyLXRpbWU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzkzOTM5O1xufVxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMzkzOTM5O1xufVxuLmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlciB7XG4gIHdpZHRoOiAyNiU7XG59XG4uZmxhdHBpY2tyLXRpbWUudGltZTI0aHIgLm51bUlucHV0V3JhcHBlciB7XG4gIHdpZHRoOiA0OSU7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMzkzOTM5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbn1cbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6ICMzOTM5Mzk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMiU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcbiAgb3V0bGluZTogMDtcbiAgd2lkdGg6IDE4JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6aG92ZXIsXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3Zlcixcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuIl19 */", '', '']];
    /***/
  },

  /***/
  "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************************************!*\
    !*** C:/Work/Apps/customerapps/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../../../node_modules/postcss-loader/src??embedded!./styles.css */
    "../../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Work\Apps\customerapps\Customer01\exec\rYKU7zJ9Do\source\ui\src\styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map