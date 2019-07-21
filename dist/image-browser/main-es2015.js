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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>\n    {{title}}\n  </h1>\n  <p>{{introduction}}</p>\n  <div class=\"arrow-down\"></div>\n</div>\n\n<div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollUpDistance]=\"1.5\" [infiniteScrollThrottle]=\"50\" (scrolled)=\"onScrollDown()\">\n  <div class=\"row\">\n    <div class=\"column container\" *ngFor=\"let image of images\">\n      <a href={{image.url}} target=\"_blank\">\n        <img class=\"center-cropped\" src={{image.url}} />\n        <div class=\"overlay\">\n          <div class=\"image-text\">\n            {{image.text}}\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  font-family: \"Helvetica Neue\";\n}\n\na {\n  color: white;\n  text-decoration: none;\n  margin-top: 10px;\n}\n\np {\n  padding: 20px;\n  font-size: 18px;\n  color: steelblue;\n}\n\nh1 {\n  font-size: 40px;\n  font-weight: 200;\n  color: mediumpurple;\n}\n\n.header {\n  text-align: center;\n  align-items: center;\n  font-weight: 200;\n  padding: 40px;\n  margin: 0;\n}\n\n.arrow-down {\n  content: url('arrow-down.png');\n  text-align: center;\n  width: 60px;\n  margin: auto;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.column {\n  flex: 25%;\n  max-width: 25%;\n}\n\n.column img {\n  vertical-align: middle;\n  width: 100%;\n  height: 200px;\n}\n\n.image-text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-weight: 200;\n  font-size: 18px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: mediumpurple;\n}\n\n.column.container {\n  position: relative;\n  width: 50%;\n}\n\n.column.container:hover .overlay {\n  opacity: 0.8;\n}\n\n.center-cropped {\n  -o-object-fit: none;\n     object-fit: none;\n  -o-object-position: center;\n     object-position: center;\n}\n\n@media screen and (max-width: 800px) {\n  .column {\n    flex: 50%;\n    max-width: 50%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .column {\n    flex: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJvbGlpbmFsYWFudGVlL0RldmVsb3BtZW50L0VBX2Fzc2lnbm1lbnQvRnJvbnQtZW5kL2ltYWdlLWJyb3dzZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxTQUFBO0VBQ0EsNkJBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNDRDs7QURFQTtFQUNDLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLFNBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FEQ0M7RUFDQyxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FER0E7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7QUNBRDs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNBRDs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsVUFBQTtBQ0FEOztBREdBO0VBQ0MsWUFBQTtBQ0FEOztBREdBO0VBQ0MsbUJBQUE7S0FBQSxnQkFBQTtFQUNBLDBCQUFBO0tBQUEsdUJBQUE7QUNBRDs7QURFQTtFQUNDO0lBQ0MsU0FBQTtJQUNBLGNBQUE7RUNDQTtBQUNGOztBRENBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsZUFBQTtFQ0NBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIjtcbn1cblxuYSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5wIHtcblx0cGFkZGluZzogMjBweDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogc3RlZWxibHVlO1xufVxuXG5oMSB7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0Y29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmhlYWRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0cGFkZGluZzogNDBweDtcblx0bWFyZ2luOiAwO1xufVxuXG4uYXJyb3ctZG93biB7XG5cdGNvbnRlbnQ6IHVybChcIi4uL2Fzc2V0cy9hcnJvdy1kb3duLnBuZ1wiKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogNjBweDtcblx0bWFyZ2luOiBhdXRvO1xufVxuXG4ucm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29sdW1uIHtcblx0ZmxleDogMjUlO1xuXHRtYXgtd2lkdGg6IDI1JTtcblxuXHRpbWcge1xuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAyMDBweDtcblx0fVxufVxuXG4uaW1hZ2UtdGV4dCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdGZvbnQtd2VpZ2h0OiAyMDA7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3ZlcmxheSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRvcGFjaXR5OiAwO1xuXHR0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG5cdGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmNvbHVtbi5jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiA1MCU7XG59XG5cbi5jb2x1bW4uY29udGFpbmVyOmhvdmVyIC5vdmVybGF5IHtcblx0b3BhY2l0eTogMC44O1xufVxuXG4uY2VudGVyLWNyb3BwZWQge1xuXHRvYmplY3QtZml0OiBub25lO1xuXHRvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogODAwcHgpIHtcblx0LmNvbHVtbiB7XG5cdFx0ZmxleDogNTAlO1xuXHRcdG1heC13aWR0aDogNTAlO1xuXHR9XG59XG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5jb2x1bW4ge1xuXHRcdGZsZXg6IDEwMCU7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHR9XG59XG4iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIjtcbn1cblxuYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5wIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6IG1lZGl1bXB1cnBsZTtcbn1cblxuLmhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXJyb3ctZG93biB7XG4gIGNvbnRlbnQ6IHVybChcIi4uL2Fzc2V0cy9hcnJvdy1kb3duLnBuZ1wiKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY29sdW1uIHtcbiAgZmxleDogMjUlO1xuICBtYXgtd2lkdGg6IDI1JTtcbn1cbi5jb2x1bW4gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5pbWFnZS10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWVkaXVtcHVycGxlO1xufVxuXG4uY29sdW1uLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbHVtbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jZW50ZXItY3JvcHBlZCB7XG4gIG9iamVjdC1maXQ6IG5vbmU7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29sdW1uIHtcbiAgICBmbGV4OiA1MCU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIGZsZXg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://api.unsplash.com/';
        this.APPLICATION_ID = '8b1386cf2284bdb4a35742505a7280672f37ad0468897857b5b89d7290dd3bfa';
        this.ENDPOINT = '/photos/random/';
        this.title = 'Caroliina\'s Image Browser';
        this.introduction = 'Scroll down to lazy load random images from Unsplash';
        this.images = [];
        this.addItems();
    }
    addItems() {
        this.httpClient.get(this.API_URL + this.ENDPOINT + '?client_id=' + this.APPLICATION_ID + '&count=10').subscribe((res) => {
            var images_res = [];
            Object.values(res).forEach(function (image) {
                images_res.push({ url: image.urls.regular, text: image.alt_description });
            });
            this.images.push(images_res);
            this.images = [].concat(...this.images);
        });
    }
    onScrollDown() {
        this.addItems();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/caroliinalaantee/Development/EA_assignment/Front-end/image-browser/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map