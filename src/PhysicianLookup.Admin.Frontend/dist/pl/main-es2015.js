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

/***/ "./src/app/_core/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/_core/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/_core/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(_router) {
        this._router = _router;
    }
    canActivate(next, state) {
        const token = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["accessTokenKey"]) || '';
        if (token) {
            return true;
        }
        this._router.navigateByUrl('/login');
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_core/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/_core/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/app/_core/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AuthService {
    constructor(_baseUrl, _httpClient) {
        this._baseUrl = _baseUrl;
        this._httpClient = _httpClient;
    }
    logout() {
        localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["accessTokenKey"], null);
    }
    tryToLogin(options) {
        return this._httpClient.post(`${this._baseUrl}api/users/token`, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => {
            localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["accessTokenKey"], response.accessToken);
            return response.accessToken;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_constants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_constants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_core/constants.ts":
/*!************************************!*\
  !*** ./src/app/_core/constants.ts ***!
  \************************************/
/*! exports provided: baseUrl, storageKey, currentUserKey, accessTokenKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageKey", function() { return storageKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentUserKey", function() { return currentUserKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessTokenKey", function() { return accessTokenKey; });
const baseUrl = 'baseUrl';
const storageKey = 'PhysicianLookup';
const currentUserKey = `${storageKey}:currentUser`;
const accessTokenKey = `${storageKey}:accessToken`;


/***/ }),

/***/ "./src/app/_core/core.module.ts":
/*!**************************************!*\
  !*** ./src/app/_core/core.module.ts ***!
  \**************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/_core/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_core/jwt.interceptor.ts");
/* harmony import */ var _headers_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headers.interceptor */ "./src/app/_core/headers.interceptor.ts");








class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _headers_interceptor__WEBPACK_IMPORTED_MODULE_6__["HeadersInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
            multi: true
        },
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _headers_interceptor__WEBPACK_IMPORTED_MODULE_6__["HeadersInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
                        multi: true
                    },
                    _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_core/headers.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_core/headers.interceptor.ts ***!
  \**********************************************/
/*! exports provided: HeadersInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersInterceptor", function() { return HeadersInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/_core/constants.ts");



class HeadersInterceptor {
    intercept(request, next) {
        const token = localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_1__["accessTokenKey"]) || '';
        return next.handle(request.clone({
            headers: request.headers.set('Authorization', `Bearer ${token}`)
        }));
    }
}
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) { return new (t || HeadersInterceptor)(); };
HeadersInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeadersInterceptor, factory: HeadersInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadersInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/_core/jwt.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/_core/jwt.interceptor.ts ***!
  \******************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/_core/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class JwtInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((httpEvent) => httpEvent, error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
                localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__["accessTokenKey"], null);
                this.router.navigateByUrl('/login');
            }
        }));
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
JwtInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/_shared/shared.module.ts":
/*!******************************************!*\
  !*** ./src/app/_shared/shared.module.ts ***!
  \******************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_core/core.module */ "./src/app/_core/core.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
                ],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-container.component.ts":
/*!********************************************!*\
  !*** ./src/app/app-container.component.ts ***!
  \********************************************/
/*! exports provided: AppContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContainerComponent", function() { return AppContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppContainerComponent {
}
AppContainerComponent.ɵfac = function AppContainerComponent_Factory(t) { return new (t || AppContainerComponent)(); };
AppContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppContainerComponent, selectors: [["pl-app-container"]], decls: 1, vars: 0, template: function AppContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-app-container',
                templateUrl: './app-container.component.html',
                styleUrls: ['./app-container.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/login/login-page.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/auth.guard */ "./src/app/_core/auth.guard.ts");







const routes = [
    { path: "login", component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"] },
    {
        path: "",
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: "",
                canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | src-app-physicians-physicians-module */ "src-app-physicians-physicians-module").then(__webpack_require__.bind(null, /*! src/app/physicians/physicians.module */ "./src/app/physicians/physicians.module.ts")).then(m => m.PhysiciansModule)
            },
        ],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["pl-app"]], decls: 17, vars: 0, consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-icon-button", "", 3, "click"], ["mode", "side", 3, "click"], ["drawer", ""], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/login"], [1, "router-outlet-container"], ["router", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tik Doc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-sidenav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_sidenav_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Physicians");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-rows: -webkit-max-content 1fr;\n  grid-template-rows: max-content 1fr;\n  height: 100vh;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: -webkit-max-content 1fr;\n  grid-template-columns: max-content 1fr;\n  z-index: 2;\n  position: relative;\n}\n\nmat-sidenav-container[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  min-width: 200px;\n}\n\nbutton[routerLink][_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n\n.router-outlet-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0VBQUEsbUNBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFBQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgcGFkZGluZy10b3A6MzBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5idXR0b25bcm91dGVyTGlua10ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yb3V0ZXItb3V0bGV0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-app',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _app_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-container.component */ "./src/app/app-container.component.ts");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_core/constants */ "./src/app/_core/constants.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_shared/shared.module */ "./src/app/_shared/shared.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_container_component__WEBPACK_IMPORTED_MODULE_6__["AppContainerComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _core_constants__WEBPACK_IMPORTED_MODULE_7__["baseUrl"],
            useValue: "https://localhost:5001/"
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _app_container_component__WEBPACK_IMPORTED_MODULE_6__["AppContainerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _app_container_component__WEBPACK_IMPORTED_MODULE_6__["AppContainerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
                ],
                providers: [{
                        provide: _core_constants__WEBPACK_IMPORTED_MODULE_7__["baseUrl"],
                        useValue: "https://localhost:5001/"
                    }],
                bootstrap: [_app_container_component__WEBPACK_IMPORTED_MODULE_6__["AppContainerComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login/login-page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-page.component.ts ***!
  \***********************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_core/auth.service */ "./src/app/_core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");







class LoginPageComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    handleTryToLogin($event) {
        this.authService
            .tryToLogin({
            username: $event.username,
            password: $event.password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this._destroyed))
            .subscribe(() => {
            this.router.navigateByUrl('/');
        }, errorResponse => {
            // handle error response
        });
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["pl-login-page"]], decls: 1, vars: 0, consts: [[3, "tryToLogin"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pl-login", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tryToLogin", function LoginPageComponent_Template_pl_login_tryToLogin_0_listener($event) { return ctx.handleTryToLogin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\npl-login[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucGwtbG9naW4ge1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class LoginComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.tryToLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterContentInit() { this.renderer.selectRootElement('#username').focus(); }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["pl-login"]], outputs: { tryToLogin: "tryToLogin" }, decls: 10, vars: 2, consts: [["novalidate", "", "autocomplete", "off", "spellcheck", "false", 3, "formGroup"], ["matInput", "", "placeholder", "Username", "id", "username", "formControlName", "username", "required", ""], ["matInput", "", "placeholder", "Password", "id", "password", "formControlName", "password", "type", "password", "required", ""], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Sign in to Tik Doc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() { return ctx.tryToLogin.emit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmat-card-title[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9hc3NldHMvYmFzZS9wbGFjZWhvbGRlcnMnO1xyXG5AaW1wb3J0ICcuLi8uLi9hc3NldHMvYmFzZS92YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSwgZm9ybSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { tryToLogin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-page.component */ "./src/app/login/login-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
        _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"],
                    _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\PhysicianLookup\src\PhysicianLookup.Admin.Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map