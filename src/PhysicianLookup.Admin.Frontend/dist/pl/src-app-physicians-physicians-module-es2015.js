(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-physicians-physicians-module"],{

/***/ "./src/app/physicians/edit-physician/edit-physician.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/physicians/edit-physician/edit-physician.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPhysicianComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPhysicianComponent", function() { return EditPhysicianComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _physicians_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../physicians.service */ "./src/app/physicians/physicians.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function EditPhysicianComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Create Physician");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditPhysicianComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Physician");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditPhysicianComponent {
    constructor(activatedRoute, physiciansService, router) {
        this.activatedRoute = activatedRoute;
        this.physiciansService = physiciansService;
        this.router = router;
        this.physician = {};
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.street, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.city, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.province, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.postalCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.phoneNumber, []),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.emailAddress, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            website: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.physician.website, []),
        });
    }
    ngOnInit() {
        this.physician.physicianId = this.activatedRoute.snapshot.params.id;
        if (this.physician.physicianId) {
            this.physiciansService.getById({ physicianId: this.activatedRoute.snapshot.params.id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => {
                this.form.patchValue({
                    firstname: x.firstname,
                    lastname: x.lastname,
                    street: x.street,
                    city: x.city,
                    province: x.province,
                    postalCode: x.postalCode,
                    phoneNumber: x.phoneNumber,
                    emailAddress: x.emailAddress,
                    website: x.website
                });
            })).subscribe();
        }
    }
    handleSaveClick() {
        const physician = {};
        this.physician.firstname = this.form.value.firstname;
        this.physician.lastname = this.form.value.lastname;
        this.physician.street = this.form.value.street;
        this.physician.city = this.form.value.city;
        this.physician.province = this.form.value.province;
        this.physician.postalCode = this.form.value.postalCode;
        this.physician.phoneNumber = this.form.value.phoneNumber;
        this.physician.emailAddress = this.form.value.emailAddress;
        this.physician.website = this.form.value.website;
        this.physiciansService.save({ physician: this.physician }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroyed)).subscribe(() => this.form.reset(), errorResponse => {
            // handle error
        });
    }
    handleCancelClick() {
        this.router.navigateByUrl('/');
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
EditPhysicianComponent.ɵfac = function EditPhysicianComponent_Factory(t) { return new (t || EditPhysicianComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_physicians_service__WEBPACK_IMPORTED_MODULE_5__["PhysiciansService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditPhysicianComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditPhysicianComponent, selectors: [["pl-edit-physician"]], decls: 26, vars: 3, consts: [[4, "ngIf"], ["novalidate", "", "autocomplete", "off", "spellcheck", "false", 3, "formGroup"], ["matInput", "", "placeholder", "Firstname", "id", "firstname", "formControlName", "firstname"], ["matInput", "", "placeholder", "Lastname", "id", "lastname", "formControlName", "lastname"], ["matInput", "", "placeholder", "Street", "id", "street", "formControlName", "street"], ["matInput", "", "placeholder", "City", "id", "city", "formControlName", "city"], ["matInput", "", "placeholder", "Province", "id", "province", "formControlName", "province"], ["matInput", "", "placeholder", "Postal Code", "id", "postalCode", "formControlName", "postalCode"], ["matInput", "", "placeholder", "Phone Number", "id", "phoneNumber", "formControlName", "phoneNumber"], ["matInput", "", "placeholder", "Email Address", "id", "emailAddress", "formControlName", "emailAddress"], ["matInput", "", "placeholder", "Website", "id", "website", "formControlName", "website"], [1, "physicianEditor__actions"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"]], template: function EditPhysicianComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPhysicianComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPhysicianComponent_h1_1_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhysicianComponent_Template_button_click_22_listener() { return ctx.handleSaveClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPhysicianComponent_Template_button_click_24_listener() { return ctx.handleCancelClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.physician.physicianId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.physician.physicianId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["h1[_ngcontent-%COMP%] {\n  padding: 28px 0px 28px 28px;\n  margin: 0px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\nform[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n  padding: 0px 0px 25px 30px;\n}\n\n.physicianEditor__actions[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0px 0px 30px 30px;\n  gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYmFzZS9fcGxhY2Vob2xkZXJzLnNjc3MiLCJzcmMvYXBwL3BoeXNpY2lhbnMvZWRpdC1waHlzaWNpYW4vZWRpdC1waHlzaWNpYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QUNDSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvcGh5c2ljaWFucy9lZGl0LXBoeXNpY2lhbi9lZGl0LXBoeXNpY2lhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVwYWdlLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogMjhweCAwcHggMjhweCAyOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0iLCJoMSB7XG4gIHBhZGRpbmc6IDI4cHggMHB4IDI4cHggMjhweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwcHggMHB4IDI1cHggMzBweDtcbn1cblxuLnBoeXNpY2lhbkVkaXRvcl9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAwcHggMzBweCAzMHB4O1xuICBnYXA6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPhysicianComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-edit-physician',
                templateUrl: './edit-physician.component.html',
                styleUrls: ['./edit-physician.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _physicians_service__WEBPACK_IMPORTED_MODULE_5__["PhysiciansService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/physicians/physicians-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/physicians/physicians-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PhysiciansRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysiciansRoutingModule", function() { return PhysiciansRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _physicians_physicians_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicians/physicians.component */ "./src/app/physicians/physicians/physicians.component.ts");
/* harmony import */ var _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-physician/edit-physician.component */ "./src/app/physicians/edit-physician/edit-physician.component.ts");






const routes = [
    { path: "", component: _physicians_physicians_component__WEBPACK_IMPORTED_MODULE_2__["PhysiciansComponent"] },
    { path: "physicians/create", component: _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_3__["EditPhysicianComponent"] },
    { path: "physicians/edit/:id", component: _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_3__["EditPhysicianComponent"] }
];
class PhysiciansRoutingModule {
}
PhysiciansRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PhysiciansRoutingModule });
PhysiciansRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PhysiciansRoutingModule_Factory(t) { return new (t || PhysiciansRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PhysiciansRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhysiciansRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/physicians/physicians.module.ts":
/*!*************************************************!*\
  !*** ./src/app/physicians/physicians.module.ts ***!
  \*************************************************/
/*! exports provided: PhysiciansModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysiciansModule", function() { return PhysiciansModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _physicians_physicians_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physicians/physicians.component */ "./src/app/physicians/physicians/physicians.component.ts");
/* harmony import */ var _physicians_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physicians-routing.module */ "./src/app/physicians/physicians-routing.module.ts");
/* harmony import */ var _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-physician/edit-physician.component */ "./src/app/physicians/edit-physician/edit-physician.component.ts");
/* harmony import */ var _physicians_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./physicians.service */ "./src/app/physicians/physicians.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/shared.module */ "./src/app/_shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class PhysiciansModule {
}
PhysiciansModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PhysiciansModule });
PhysiciansModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PhysiciansModule_Factory(t) { return new (t || PhysiciansModule)(); }, providers: [
        _physicians_service__WEBPACK_IMPORTED_MODULE_5__["PhysiciansService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _physicians_routing_module__WEBPACK_IMPORTED_MODULE_3__["PhysiciansRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PhysiciansModule, { declarations: [_physicians_physicians_component__WEBPACK_IMPORTED_MODULE_2__["PhysiciansComponent"], _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_4__["EditPhysicianComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _physicians_routing_module__WEBPACK_IMPORTED_MODULE_3__["PhysiciansRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhysiciansModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_physicians_physicians_component__WEBPACK_IMPORTED_MODULE_2__["PhysiciansComponent"], _edit_physician_edit_physician_component__WEBPACK_IMPORTED_MODULE_4__["EditPhysicianComponent"]],
                providers: [
                    _physicians_service__WEBPACK_IMPORTED_MODULE_5__["PhysiciansService"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _physicians_routing_module__WEBPACK_IMPORTED_MODULE_3__["PhysiciansRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/physicians/physicians.service.ts":
/*!**************************************************!*\
  !*** ./src/app/physicians/physicians.service.ts ***!
  \**************************************************/
/*! exports provided: PhysiciansService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysiciansService", function() { return PhysiciansService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_core/constants */ "./src/app/_core/constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PhysiciansService {
    constructor(_baseUrl, _client) {
        this._baseUrl = _baseUrl;
        this._client = _client;
    }
    getNearest(options) {
        return this._client.get(`${this._baseUrl}api/physicians/nearest/${options.longitude}/${options.latitude}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.physicians));
    }
    searc(options) {
        return this._client.get(`${this._baseUrl}api/physicians/${options.query}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.physicians));
    }
    get() {
        return this._client.get(`${this._baseUrl}api/physicians`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.physicians));
    }
    getById(options) {
        return this._client.get(`${this._baseUrl}api/physicians/${options.physicianId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.physician));
    }
    remove(options) {
        return this._client.delete(`${this._baseUrl}api/physicians/${options.physician.physicianId}`);
    }
    save(options) {
        return this._client.post(`${this._baseUrl}api/physicians`, { physician: options.physician });
    }
}
PhysiciansService.ɵfac = function PhysiciansService_Factory(t) { return new (t || PhysiciansService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_constants__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PhysiciansService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PhysiciansService, factory: PhysiciansService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhysiciansService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_constants__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/physicians/physicians/physicians.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/physicians/physicians/physicians.component.ts ***!
  \***************************************************************/
/*! exports provided: PhysiciansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysiciansComponent", function() { return PhysiciansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _physicians_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../physicians.service */ "./src/app/physicians/physicians.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");











function PhysiciansComponent_table_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Firstname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physician_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", physician_r16.firstname, " ");
} }
function PhysiciansComponent_table_4_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lastname ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physician_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", physician_r17.lastname, " ");
} }
function PhysiciansComponent_table_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physician_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", physician_r18.street, " ");
} }
function PhysiciansComponent_table_4_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physician_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", physician_r19.phoneNumber, " ");
} }
function PhysiciansComponent_table_4_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const physician_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", physician_r20.emailAddress, " ");
} }
function PhysiciansComponent_table_4_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
} }
function PhysiciansComponent_table_4_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhysiciansComponent_table_4_td_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const physician_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.handleEditClick(physician_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PhysiciansComponent_table_4_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function PhysiciansComponent_table_4_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function PhysiciansComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhysiciansComponent_table_4_th_2_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PhysiciansComponent_table_4_td_3_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PhysiciansComponent_table_4_th_5_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PhysiciansComponent_table_4_td_6_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PhysiciansComponent_table_4_th_8_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PhysiciansComponent_table_4_td_9_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PhysiciansComponent_table_4_th_11_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhysiciansComponent_table_4_td_12_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PhysiciansComponent_table_4_th_14_Template, 2, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PhysiciansComponent_table_4_td_15_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PhysiciansComponent_table_4_th_17_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PhysiciansComponent_table_4_td_18_Template, 4, 0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PhysiciansComponent_table_4_tr_19_Template, 1, 0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PhysiciansComponent_table_4_tr_20_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataSource_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", dataSource_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.columnsToDisplay);
} }
class PhysiciansComponent {
    constructor(physiciansService, router) {
        this.physiciansService = physiciansService;
        this.router = router;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.columnsToDisplay = [
            'firstname',
            'lastname',
            'street',
            'emailAddress',
            'phoneNumber',
            'edit'
        ];
        this.dataSource$ = this.physiciansService.get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](x)));
    }
    handleEditClick(physician) {
        this.router.navigateByUrl(`physicians/edit/${physician.physicianId}`);
    }
    handleCreateClick() {
        this.router.navigateByUrl('physicians/create');
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
PhysiciansComponent.ɵfac = function PhysiciansComponent_Factory(t) { return new (t || PhysiciansComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_physicians_service__WEBPACK_IMPORTED_MODULE_4__["PhysiciansService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
PhysiciansComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhysiciansComponent, selectors: [["pl-physicians"]], decls: 6, vars: 3, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "firstname"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastname"], ["matColumnDef", "street"], ["matColumnDef", "phoneNumber"], ["matColumnDef", "emailAddress"], ["matColumnDef", "edit"], ["style", "width:100px", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 2, "width", "100px"], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function PhysiciansComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Physicians");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhysiciansComponent_Template_button_click_2_listener() { return ctx.handleCreateClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PhysiciansComponent_table_4_Template, 21, 3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.dataSource$));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n  padding: 28px 0px 28px 28px;\n  margin: 0px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 15px 0px 15px 30px;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 0px 0px 0px 30px;\n  width: calc(100% - 60px );\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvYmFzZS9fcGxhY2Vob2xkZXJzLnNjc3MiLCJzcmMvYXBwL3BoeXNpY2lhbnMvcGh5c2ljaWFucy9waHlzaWNpYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FBS0E7RUFDSSwwQkFBQTtBQUZKOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvcGh5c2ljaWFucy9waHlzaWNpYW5zL3BoeXNpY2lhbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlcGFnZS1oZWFkaW5nIHtcclxuICAgIHBhZGRpbmc6IDI4cHggMHB4IDI4cHggMjhweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59IiwiaDEge1xuICBwYWRkaW5nOiAyOHB4IDBweCAyOHB4IDI4cHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDE1cHggMHB4IDE1cHggMzBweDtcbn1cblxudGFibGUge1xuICBtYXJnaW46IDBweCAwcHggMHB4IDMwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4ICk7XG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BoeXNpY2lhbnMvcGh5c2ljaWFucy9mb28uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhysiciansComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pl-physicians',
                templateUrl: './physicians.component.html',
                styleUrls: ['./physicians.component.scss', './foo.component.scss']
            }]
    }], function () { return [{ type: _physicians_service__WEBPACK_IMPORTED_MODULE_4__["PhysiciansService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-physicians-physicians-module-es2015.js.map