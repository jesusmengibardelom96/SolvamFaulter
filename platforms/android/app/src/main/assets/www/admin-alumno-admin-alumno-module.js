(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-alumno-admin-alumno-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-alumno/admin-alumno.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-alumno/admin-alumno.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Administrar alumnos</ion-title>\n    <ion-back-button defaultHref=\"perfil\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let adminList of adminAlumnosList\">\n    <ion-item *ngIf=\"adminList.title === 'Eliminar matricula' && userType === 'Profesor'; else elseBlock\" button (click)=\"showOptionsAdminAlumno(adminList)\">\n      <ion-title>\n        <ion-label class=\"labelAdminAlumnoItem\">{{adminList.title}}</ion-label>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"iconAdminAlumnoItem\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ng-template #elseBlock>\n      <ion-item *ngIf=\"userType === 'ProfAdmin' || userType === 'Administrativo'\" button (click)=\"showOptionsAdminAlumno(adminList)\">\n          <ion-label class=\"labelAdminAlumnoItem\">{{adminList.title}}</ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button class=\"iconAdminAlumnoItem\">\n            <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ng-template>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin-alumno/admin-alumno-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin-alumno/admin-alumno-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminAlumnoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAlumnoPageRoutingModule", function() { return AdminAlumnoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_alumno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-alumno.page */ "./src/app/admin-alumno/admin-alumno.page.ts");




var routes = [
    {
        path: '',
        component: _admin_alumno_page__WEBPACK_IMPORTED_MODULE_3__["AdminAlumnoPage"]
    }
];
var AdminAlumnoPageRoutingModule = /** @class */ (function () {
    function AdminAlumnoPageRoutingModule() {
    }
    AdminAlumnoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminAlumnoPageRoutingModule);
    return AdminAlumnoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin-alumno/admin-alumno.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-alumno/admin-alumno.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminAlumnoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAlumnoPageModule", function() { return AdminAlumnoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _admin_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-alumno-routing.module */ "./src/app/admin-alumno/admin-alumno-routing.module.ts");
/* harmony import */ var _admin_alumno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-alumno.page */ "./src/app/admin-alumno/admin-alumno.page.ts");







var AdminAlumnoPageModule = /** @class */ (function () {
    function AdminAlumnoPageModule() {
    }
    AdminAlumnoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _admin_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminAlumnoPageRoutingModule"]
            ],
            declarations: [_admin_alumno_page__WEBPACK_IMPORTED_MODULE_6__["AdminAlumnoPage"]]
        })
    ], AdminAlumnoPageModule);
    return AdminAlumnoPageModule;
}());



/***/ }),

/***/ "./src/app/admin-alumno/admin-alumno.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin-alumno/admin-alumno.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFsdW1uby9hZG1pbi1hbHVtbm8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin-alumno/admin-alumno.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-alumno/admin-alumno.page.ts ***!
  \***************************************************/
/*! exports provided: AdminAlumnoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAlumnoPage", function() { return AdminAlumnoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminAlumnoPage = /** @class */ (function () {
    function AdminAlumnoPage(route, activeRoute) {
        this.route = route;
        this.activeRoute = activeRoute;
        //Variables para componentes
        this.adminAlumnosList = [{ title: "Subir csv alumnos" }, { title: "Eliminar matricula" }, { title: "Eliminar Alumno" }, { title: "Insertar Alumno" }];
        this.titles = "";
    }
    AdminAlumnoPage.prototype.ngOnInit = function () {
        this.userType = this.activeRoute.snapshot.paramMap.get('userType');
        console.log(this.userType);
    };
    AdminAlumnoPage.prototype.showOptionsAdminAlumno = function (adminList) {
        if (adminList.title === "Subir csv alumnos") {
            this.route.navigate(['/csv-alumno', { userType: this.userType }]);
        }
        else if (adminList.title === "Eliminar matricula") {
            this.route.navigate(['/eliminar-matricula', { userType: this.userType }]);
        }
        else if (adminList.title === "Eliminar Alumno") {
            this.route.navigate(['/eliminar-alumno', { userType: this.userType }]);
        }
        else if (adminList.title === "Insertar Alumno") {
            this.route.navigate(['/insertar-alumno', { userType: this.userType }]);
        }
    };
    AdminAlumnoPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    AdminAlumnoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    AdminAlumnoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-alumno',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-alumno.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-alumno/admin-alumno.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-alumno.page.scss */ "./src/app/admin-alumno/admin-alumno.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AdminAlumnoPage);
    return AdminAlumnoPage;
}());



/***/ })

}]);
//# sourceMappingURL=admin-alumno-admin-alumno-module.js.map