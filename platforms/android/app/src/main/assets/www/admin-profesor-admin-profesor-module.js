(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-profesor-admin-profesor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-profesor/admin-profesor.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-profesor/admin-profesor.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Administrar profesores</ion-title>\n    <ion-back-button defaultHref=\"perfil\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let adminList of adminProfesoresList\">\n    <ion-item button (click)=\"showOptionsAdminProf(adminList)\">\n        <ion-label>{{adminList.title}}</ion-label>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin-profesor/admin-profesor-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin-profesor/admin-profesor-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminProfesorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfesorPageRoutingModule", function() { return AdminProfesorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_profesor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-profesor.page */ "./src/app/admin-profesor/admin-profesor.page.ts");




var routes = [
    {
        path: '',
        component: _admin_profesor_page__WEBPACK_IMPORTED_MODULE_3__["AdminProfesorPage"]
    }
];
var AdminProfesorPageRoutingModule = /** @class */ (function () {
    function AdminProfesorPageRoutingModule() {
    }
    AdminProfesorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminProfesorPageRoutingModule);
    return AdminProfesorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin-profesor/admin-profesor.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin-profesor/admin-profesor.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminProfesorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfesorPageModule", function() { return AdminProfesorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _admin_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-profesor-routing.module */ "./src/app/admin-profesor/admin-profesor-routing.module.ts");
/* harmony import */ var _admin_profesor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-profesor.page */ "./src/app/admin-profesor/admin-profesor.page.ts");







var AdminProfesorPageModule = /** @class */ (function () {
    function AdminProfesorPageModule() {
    }
    AdminProfesorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _admin_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminProfesorPageRoutingModule"]
            ],
            declarations: [_admin_profesor_page__WEBPACK_IMPORTED_MODULE_6__["AdminProfesorPage"]]
        })
    ], AdminProfesorPageModule);
    return AdminProfesorPageModule;
}());



/***/ }),

/***/ "./src/app/admin-profesor/admin-profesor.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin-profesor/admin-profesor.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLXByb2Zlc29yL2FkbWluLXByb2Zlc29yLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin-profesor/admin-profesor.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-profesor/admin-profesor.page.ts ***!
  \*******************************************************/
/*! exports provided: AdminProfesorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfesorPage", function() { return AdminProfesorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminProfesorPage = /** @class */ (function () {
    function AdminProfesorPage(route, activeRoute) {
        this.route = route;
        this.activeRoute = activeRoute;
        //Variables para componentes
        this.adminProfesoresList = [{ title: "Asociar profesor" }, { title: "Ingresar nuevo profesor" }, { title: "Eliminar profesor" }];
        this.titles = "";
    }
    AdminProfesorPage.prototype.ngOnInit = function () {
        this.userType = this.activeRoute.snapshot.paramMap.get('userType');
        console.log(this.userType);
    };
    AdminProfesorPage.prototype.showOptionsAdminProf = function (adminList) {
        if (adminList.title === "Asociar profesor") {
            this.route.navigateByUrl('/asociar-profesor');
        }
        else if (adminList.title === "Ingresar nuevo profesor") {
            this.route.navigateByUrl('/ingresar-profesor');
        }
        else if (adminList.title === "Eliminar profesor") {
            this.route.navigateByUrl('/eliminar-profesor');
        }
    };
    AdminProfesorPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    AdminProfesorPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AdminProfesorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-profesor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-profesor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-profesor/admin-profesor.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-profesor.page.scss */ "./src/app/admin-profesor/admin-profesor.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminProfesorPage);
    return AdminProfesorPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-profesor-admin-profesor-module.js.map