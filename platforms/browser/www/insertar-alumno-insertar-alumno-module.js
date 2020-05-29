(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insertar-alumno-insertar-alumno-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/insertar-alumno/insertar-alumno.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/insertar-alumno/insertar-alumno.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Insertar alumno</ion-title>\n    <ion-back-button defaultHref=\"/admin-alumno\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">NIA<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"nia\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Nombre<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"nombreAlumno\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Apellido1<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"apellidoAlumno1\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Apellido2<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"apellidoAlumno2\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cursos<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getCurso2($event)\" [(ngModel)]=\"curso2\" required>\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Telefono alumno<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"tlfAlumno\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Telefono padre</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"tlfPadre\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Telefono madre</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"tlfMadre\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Correo alumno<ion-text color=\"danger\">*</ion-text></ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"mailAlumno\" required></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Correo padre</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"mailPadre\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Correo madre</ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"mailMadre\"></ion-input>\n  </ion-item>\n  <ion-button class=\"iconAdminAlumnoCSVSaveItem\" (click)=\"InsertAlumno()\" color=\"success\" expand=\"block\">\n    <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/insertar-alumno/insertar-alumno-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/insertar-alumno/insertar-alumno-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: InsertarAlumnoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarAlumnoPageRoutingModule", function() { return InsertarAlumnoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _insertar_alumno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insertar-alumno.page */ "./src/app/insertar-alumno/insertar-alumno.page.ts");




var routes = [
    {
        path: '',
        component: _insertar_alumno_page__WEBPACK_IMPORTED_MODULE_3__["InsertarAlumnoPage"]
    }
];
var InsertarAlumnoPageRoutingModule = /** @class */ (function () {
    function InsertarAlumnoPageRoutingModule() {
    }
    InsertarAlumnoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InsertarAlumnoPageRoutingModule);
    return InsertarAlumnoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/insertar-alumno/insertar-alumno.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/insertar-alumno/insertar-alumno.module.ts ***!
  \***********************************************************/
/*! exports provided: InsertarAlumnoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarAlumnoPageModule", function() { return InsertarAlumnoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _insertar_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insertar-alumno-routing.module */ "./src/app/insertar-alumno/insertar-alumno-routing.module.ts");
/* harmony import */ var _insertar_alumno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insertar-alumno.page */ "./src/app/insertar-alumno/insertar-alumno.page.ts");







var InsertarAlumnoPageModule = /** @class */ (function () {
    function InsertarAlumnoPageModule() {
    }
    InsertarAlumnoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _insertar_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertarAlumnoPageRoutingModule"]
            ],
            declarations: [_insertar_alumno_page__WEBPACK_IMPORTED_MODULE_6__["InsertarAlumnoPage"]]
        })
    ], InsertarAlumnoPageModule);
    return InsertarAlumnoPageModule;
}());



/***/ }),

/***/ "./src/app/insertar-alumno/insertar-alumno.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/insertar-alumno/insertar-alumno.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconAdminAlumnoCSVSaveItem {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zZXJ0YXItYWx1bW5vL0Y6XFxEQVdcXHByb3llY3RvRmluYWxcXFNvbHZhbUZhdWx0ZXIvc3JjXFxhcHBcXGluc2VydGFyLWFsdW1ub1xcaW5zZXJ0YXItYWx1bW5vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zZXJ0YXItYWx1bW5vL2luc2VydGFyLWFsdW1uby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbnNlcnRhci1hbHVtbm8vaW5zZXJ0YXItYWx1bW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uQWRtaW5BbHVtbm9DU1ZTYXZlSXRlbXtcclxuICAgIG1hcmdpbjo1JTtcclxufVxyXG4iLCIuaWNvbkFkbWluQWx1bW5vQ1NWU2F2ZUl0ZW0ge1xuICBtYXJnaW46IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/insertar-alumno/insertar-alumno.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/insertar-alumno/insertar-alumno.page.ts ***!
  \*********************************************************/
/*! exports provided: InsertarAlumnoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertarAlumnoPage", function() { return InsertarAlumnoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/upload-csv.service */ "./src/Services/upload-csv.service.ts");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");








var InsertarAlumnoPage = /** @class */ (function () {
    function InsertarAlumnoPage(route, alertController, loaderCtrl, toast, aluService, csvService, asigService, matService) {
        this.route = route;
        this.alertController = alertController;
        this.loaderCtrl = loaderCtrl;
        this.toast = toast;
        this.aluService = aluService;
        this.csvService = csvService;
        this.asigService = asigService;
        this.matService = matService;
    }
    InsertarAlumnoPage.prototype.ngOnInit = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userType = users.type;
        this.aluService.refillAlumnos();
        this.aluService.refillCurso();
        this.matService.setStorageMat();
        this.presentLoading3();
        setTimeout(function () {
            _this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
            _this.cursos = JSON.parse(localStorage.getItem("Cursos"));
            _this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
            console.log(_this.matriculas);
            _this.aluService.clearStorageAlumnos();
            _this.aluService.clearStorageCurso();
            _this.matService.clearStorageMat();
        }, 2000);
    };
    InsertarAlumnoPage.prototype.getCurso2 = function ($event) {
        var _this = this;
        this.asigService.refillAsignaturasCurso($event.detail.value);
        setTimeout(function () {
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            _this.asigService.clearStorageAsig();
        }, 500);
    };
    InsertarAlumnoPage.prototype.InsertAlumno = function () {
        var msg = "";
        var cont = 1;
        if (this.nia === undefined || this.nia === 0) {
            msg = "niaError";
        }
        else {
            if (this.nombreAlumno === "" || this.nombreAlumno === undefined)
                msg = "nameError";
            else {
                if (this.apellidoAlumno1 === "" || this.apellidoAlumno1 === undefined)
                    msg = "surname1Error";
                else {
                    if (this.apellidoAlumno2 === "" || this.apellidoAlumno2 === undefined)
                        msg = "surname2Error";
                    else {
                        if (this.curso2 === undefined)
                            msg = "courseError";
                        else {
                            if (isNaN(this.tlfAlumno) && isNaN(this.tlfPadre) && isNaN(this.tlfMadre) || this.mailAlumno === undefined && this.mailPadre === undefined && this.mailMadre === undefined)
                                msg = "mailOrTlfError";
                            else {
                                var jsonAlumnos = {
                                    NIA: this.nia,
                                    Nombre: this.nombreAlumno,
                                    Apellido1: this.apellidoAlumno1,
                                    Apellido2: this.apellidoAlumno2,
                                    Grupo: this.curso2,
                                    TlfA: this.tlfAlumno,
                                    TlfM: this.tlfMadre,
                                    TlfP: this.tlfPadre,
                                    CorreoA: this.mailAlumno,
                                    CorreoM: this.mailMadre,
                                    CorreoP: this.mailPadre
                                };
                                if (isNaN(jsonAlumnos.TlfA))
                                    jsonAlumnos.TlfA = 0;
                                if (isNaN(jsonAlumnos.TlfM))
                                    jsonAlumnos.TlfM = 0;
                                if (isNaN(jsonAlumnos.TlfP))
                                    jsonAlumnos.TlfP = 0;
                                if (this.mailAlumno === undefined)
                                    this.mailAlumno = "";
                                if (this.mailMadre === undefined)
                                    this.mailMadre = "";
                                if (this.mailPadre === undefined)
                                    this.mailPadre = "";
                                this.csvService.upload(jsonAlumnos);
                                msg = "success";
                                for (var _i = 0, _a = this.asignaturas; _i < _a.length; _i++) {
                                    var j = _a[_i];
                                    if (this.matriculas.length === 0) {
                                        var jsonAlumnos_1 = {
                                            NIA: this.nia,
                                            Asignatura: parseInt(j.id),
                                            Matricula: cont
                                        };
                                        this.csvService.uploadMatricula(jsonAlumnos_1);
                                        ++cont;
                                    }
                                    else {
                                        var jsonAlumnos_2 = {
                                            NIA: this.nia,
                                            Asignatura: parseInt(j.id),
                                            Matricula: parseInt(this.matriculas[this.matriculas.length - 1].Id) + cont
                                        };
                                        this.csvService.uploadMatricula(jsonAlumnos_2);
                                        ++cont;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (msg === "success") {
            this.presentLoading(msg);
        }
        else
            this.presentLoading2(msg);
    };
    InsertarAlumnoPage.prototype.presentLoading = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            message: 'Subiendo estudiantes, por favor espere...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.curso2 = null;
                        this.nia = null;
                        this.nombreAlumno = null;
                        this.apellidoAlumno1 = null;
                        this.apellidoAlumno2 = null;
                        this.tlfAlumno = null;
                        this.tlfPadre = null;
                        this.tlfMadre = null;
                        this.mailAlumno = null;
                        this.mailPadre = null;
                        this.mailMadre = null;
                        this.showToast(type);
                        this.route.navigate(['/admin-alumno', { userType: this.userType }]);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarAlumnoPage.prototype.presentLoading2 = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            message: 'Subiendo estudiantes, por favor espere...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.showToast(msg);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarAlumnoPage.prototype.showToast = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(type);
                        if (!(type === "success")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.create({
                                message: "Alumno subido",
                                duration: 3000,
                                position: 'bottom',
                                color: 'success'
                            })];
                    case 1:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 2:
                        if (!(type === "courseError")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.create({
                                message: "Escoja un curso",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 3:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 4:
                        if (!(type === "surname1Error")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.create({
                                message: "El campo Apellido1 no puede estar vacio",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 5:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 6:
                        if (!(type === "surname2Error")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toast.create({
                                message: "El campo Apellido2 no puede estar vacio",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 7:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 8:
                        if (!(type === "nameError")) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toast.create({
                                message: "El campo name no puede estar vacio",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 9:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 10:
                        if (!(type === "mailOrTlfError")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toast.create({
                                message: "Debe rellenar algun telefono y mail",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 11:
                        toast = _a.sent();
                        return [3 /*break*/, 14];
                    case 12:
                        if (!(type === "niaError")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.toast.create({
                                message: "El campo NIA del formulario debe contener numeros y no estar vacio",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 13:
                        toast = _a.sent();
                        _a.label = 14;
                    case 14:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarAlumnoPage.prototype.presentLoading3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loaderCtrl.create({
                            message: 'Cargando datos, por favor espere...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    InsertarAlumnoPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    InsertarAlumnoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__["AlumnosService"] },
        { type: src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_5__["UploadCSVService"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturasService"] },
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_7__["AlumnoMatriculaService"] }
    ]; };
    InsertarAlumnoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insertar-alumno',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./insertar-alumno.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/insertar-alumno/insertar-alumno.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./insertar-alumno.page.scss */ "./src/app/insertar-alumno/insertar-alumno.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__["AlumnosService"],
            src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_5__["UploadCSVService"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_6__["AsignaturasService"],
            src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_7__["AlumnoMatriculaService"]])
    ], InsertarAlumnoPage);
    return InsertarAlumnoPage;
}());



/***/ })

}]);
//# sourceMappingURL=insertar-alumno-insertar-alumno-module.js.map