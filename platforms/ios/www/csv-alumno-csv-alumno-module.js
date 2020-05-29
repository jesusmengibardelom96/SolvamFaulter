(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["csv-alumno-csv-alumno-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/csv-alumno/csv-alumno.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/csv-alumno/csv-alumno.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Subir csv alumnos</ion-title>\n    <ion-back-button defaultHref=\"/admin-alumno\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n      <ion-label class=\"labelAdminAlumnoItem\"><input type=\"file\" (change)=\"changeListener($event)\"\n          [(ngModel)]=\"valueInptuFileCsv\"></ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cursos</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getCurso($event)\" [(ngModel)]=\"curso\">\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button class=\"iconAdminAlumnoCSVSaveItem\" (click)=\"csvInsertAlumnos()\" color=\"success\" expand=\"block\">\n    <ion-icon name=\"cloud-upload-outline\" (click)=\"csvInsertAlumnos()\" size=\"small\"></ion-icon>\n  </ion-button>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/csv-alumno/csv-alumno-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/csv-alumno/csv-alumno-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CsvAlumnoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvAlumnoPageRoutingModule", function() { return CsvAlumnoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _csv_alumno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./csv-alumno.page */ "./src/app/csv-alumno/csv-alumno.page.ts");




var routes = [
    {
        path: '',
        component: _csv_alumno_page__WEBPACK_IMPORTED_MODULE_3__["CsvAlumnoPage"]
    }
];
var CsvAlumnoPageRoutingModule = /** @class */ (function () {
    function CsvAlumnoPageRoutingModule() {
    }
    CsvAlumnoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CsvAlumnoPageRoutingModule);
    return CsvAlumnoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/csv-alumno/csv-alumno.module.ts":
/*!*************************************************!*\
  !*** ./src/app/csv-alumno/csv-alumno.module.ts ***!
  \*************************************************/
/*! exports provided: CsvAlumnoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvAlumnoPageModule", function() { return CsvAlumnoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _csv_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csv-alumno-routing.module */ "./src/app/csv-alumno/csv-alumno-routing.module.ts");
/* harmony import */ var _csv_alumno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./csv-alumno.page */ "./src/app/csv-alumno/csv-alumno.page.ts");







var CsvAlumnoPageModule = /** @class */ (function () {
    function CsvAlumnoPageModule() {
    }
    CsvAlumnoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _csv_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__["CsvAlumnoPageRoutingModule"]
            ],
            declarations: [_csv_alumno_page__WEBPACK_IMPORTED_MODULE_6__["CsvAlumnoPage"]]
        })
    ], CsvAlumnoPageModule);
    return CsvAlumnoPageModule;
}());



/***/ }),

/***/ "./src/app/csv-alumno/csv-alumno.page.scss":
/*!*************************************************!*\
  !*** ./src/app/csv-alumno/csv-alumno.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconAdminAlumnoCSVSaveItem {\n  margin: 5%;\n}\n\n.labelAdminAlumnoItem {\n  font-size: small;\n}\n\n.itemSeparador {\n  margin-top: 10%;\n  margin-bottom: 10%;\n}\n\n.centeredO {\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3N2LWFsdW1uby9GOlxcREFXXFxwcm95ZWN0b0ZpbmFsXFxTb2x2YW1GYXVsdGVyL3NyY1xcYXBwXFxjc3YtYWx1bW5vXFxjc3YtYWx1bW5vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3N2LWFsdW1uby9jc3YtYWx1bW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jc3YtYWx1bW5vL2Nzdi1hbHVtbm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25BZG1pbkFsdW1ub0NTVlNhdmVJdGVte1xyXG4gICAgbWFyZ2luOjUlO1xyXG59XHJcblxyXG4ubGFiZWxBZG1pbkFsdW1ub0l0ZW17XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uaXRlbVNlcGFyYWRvcntcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmNlbnRlcmVkT3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn0iLCIuaWNvbkFkbWluQWx1bW5vQ1NWU2F2ZUl0ZW0ge1xuICBtYXJnaW46IDUlO1xufVxuXG4ubGFiZWxBZG1pbkFsdW1ub0l0ZW0ge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uaXRlbVNlcGFyYWRvciB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uY2VudGVyZWRPIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/csv-alumno/csv-alumno.page.ts":
/*!***********************************************!*\
  !*** ./src/app/csv-alumno/csv-alumno.page.ts ***!
  \***********************************************/
/*! exports provided: CsvAlumnoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvAlumnoPage", function() { return CsvAlumnoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/upload-csv.service */ "./src/Services/upload-csv.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var CsvAlumnoPage = /** @class */ (function () {
    function CsvAlumnoPage(alertController, loaderCtrl, toast, papa, aluService, csvService, asigService, matService, http, route) {
        this.alertController = alertController;
        this.loaderCtrl = loaderCtrl;
        this.toast = toast;
        this.papa = papa;
        this.aluService = aluService;
        this.csvService = csvService;
        this.asigService = asigService;
        this.matService = matService;
        this.http = http;
        this.route = route;
        //Variables de gestion de csv de alumnos
        this.csvData = [];
        this.headerRow = [];
        this.typeOfFile = "";
        this.valueInptuFileCsv = "";
        //Variable que recoge el path temporal del archivo
        this.tmpPath = "";
        //Variable matriculas
        this.alumnos = [];
        this.cursos = [];
        this.asignaturas = [];
        this.matriculas = [];
    }
    CsvAlumnoPage.prototype.ngOnInit = function () {
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
            _this.aluService.clearStorageAlumnos();
            _this.aluService.clearStorageCurso();
            _this.matService.clearStorageMat();
        }, 2000);
    };
    CsvAlumnoPage.prototype.getCurso = function ($event) {
        var _this = this;
        this.asigService.refillAsignaturasCurso($event.detail.value);
        setTimeout(function () {
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            _this.asigService.clearStorageAsig();
            console.log(_this.asignaturas);
        }, 500);
    };
    //Recoge el path del fichero y el tipo del fichero
    CsvAlumnoPage.prototype.changeListener = function ($event) {
        this.tmpPath = URL.createObjectURL($event.target.files[0]);
        this.typeOfFile = $event.target.files[0].type;
    };
    //Recoge un archivo csv
    CsvAlumnoPage.prototype.csvInsertAlumnos = function () {
        var _this = this;
        if (this.tmpPath === "") {
            this.showToast("csvErrorFileEmpty");
        }
        else if (this.typeOfFile !== "application/vnd.ms-excel") {
            this.showToast("csvErrorTypeFile");
        }
        else if (this.curso === undefined) {
            this.showToast("noCourseError");
        }
        else {
            this.http
                .get(this.tmpPath, {
                responseType: 'text'
            })
                .subscribe(function (data) {
                _this.csvToBbdd(data);
            }, function (err) { return _this.showToast("csvErrorInserction"); });
        }
    };
    //Lee dentro del csv e inserta los datos en la BBDD
    CsvAlumnoPage.prototype.csvToBbdd = function (res) {
        var _this = this;
        var msg = "";
        var csvData = res || '';
        var cont = 1;
        var contAlumno = 1;
        var jsonAlumnos;
        this.papa.parse(csvData, {
            complete: function (parsedData) {
                _this.headerRow = parsedData.data.splice(0, 1)[0];
                _this.csvData = parsedData.data;
            }
        });
        var _loop_1 = function (i) {
            if ((this_1.csvData[i][4] + "") !== this_1.curso) {
                msg = "courseError";
            }
            else {
                jsonAlumnos = {
                    NIA: parseInt(this_1.csvData[i][0]),
                    Nombre: this_1.csvData[i][1] + "",
                    Apellido1: this_1.csvData[i][2] + "",
                    Apellido2: this_1.csvData[i][3] + "",
                    Grupo: this_1.csvData[i][4] + "",
                    TlfA: parseInt(this_1.csvData[i][5]),
                    TlfM: parseInt(this_1.csvData[i][6]),
                    TlfP: parseInt(this_1.csvData[i][7]),
                    CorreoA: this_1.csvData[i][8] + "",
                    CorreoM: this_1.csvData[i][9] + "",
                    CorreoP: this_1.csvData[i][10] + ""
                };
                if (isNaN(jsonAlumnos.TlfA))
                    jsonAlumnos.TlfA = 0;
                if (isNaN(jsonAlumnos.TlfM))
                    jsonAlumnos.TlfM = 0;
                if (isNaN(jsonAlumnos.TlfP))
                    jsonAlumnos.TlfP = 0;
                this_1.csvService.upload(jsonAlumnos);
                msg = "csvSuccess";
                setTimeout(function () {
                    for (var _i = 0, _a = _this.asignaturas; _i < _a.length; _i++) {
                        var j = _a[_i];
                        if (_this.matriculas.length === 0) {
                            jsonAlumnos = {
                                NIA: parseInt(_this.csvData[i][0]),
                                Asignatura: parseInt(j.id),
                                Matricula: cont
                            };
                            _this.csvService.uploadMatricula(jsonAlumnos);
                            ++cont;
                        }
                        else {
                            jsonAlumnos = {
                                NIA: parseInt(_this.csvData[i][0]),
                                Asignatura: parseInt(j.id),
                                Matricula: parseInt(_this.matriculas[_this.matriculas.length - 1].Id) + cont
                            };
                            _this.csvService.uploadMatricula(jsonAlumnos);
                            ++cont;
                        }
                    }
                }, 1000);
            }
            contAlumno++;
        };
        var this_1 = this;
        for (var i = 0; i < this.csvData.length; i++) {
            _loop_1(i);
        }
        if (msg === "csvSuccess")
            this.presentLoading("csvSuccess");
        else
            this.presentLoading2(msg);
    };
    //Alerta para cuando se desee guardar los cambios en el formulario
    CsvAlumnoPage.prototype.presentChangeAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cambios realizados',
                            subHeader: 'Usted ha realizado cambios',
                            message: '¿Desea usted guardar dichos cambios?',
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }, {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Loader para subir alumnos
    CsvAlumnoPage.prototype.presentLoading = function (type) {
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
                        this.valueInptuFileCsv = null;
                        this.tmpPath = "";
                        this.typeOfFile = "";
                        this.curso = null;
                        this.showToast("csvSuccess");
                        this.matService.clearStorageMat();
                        this.route.navigate(['/admin-alumno', { userType: this.userType }]);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    //Loader para subir alumnos
    CsvAlumnoPage.prototype.presentLoading2 = function (msg) {
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
                        this.valueInptuFileCsv = null;
                        this.tmpPath = "";
                        this.typeOfFile = "";
                        this.curso = null;
                        this.showToast(msg);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    CsvAlumnoPage.prototype.presentLoading3 = function () {
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
    //Enseña un toast de success si subes los alumnos correctamente
    CsvAlumnoPage.prototype.showToast = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === "csvSuccess")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.create({
                                message: "Alumnos subidos",
                                duration: 3000,
                                position: 'bottom',
                                color: 'success'
                            })];
                    case 1:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 2:
                        if (!(type === "csvErrorFileEmpty")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.create({
                                message: "Seleccione un fichero primero",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 3:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 4:
                        if (!(type === "csvErrorTypeFile")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.create({
                                message: "Seleccione un fichero csv",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 5:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 6:
                        if (!(type === "csvErrorInserction")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toast.create({
                                message: "Hubo un error al insertar los alumnos",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 7:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 8:
                        if (!(type === "noCourseError")) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toast.create({
                                message: "Seleccione el curso a matricular dichos alumnos",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 9:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 10:
                        if (!(type === "courseError")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toast.create({
                                message: "El curso de los alumnos no concuerda, reviselo",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 11:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 12:
                        if (!(type === "matriculaError")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.toast.create({
                                message: "Los alumnos ya estan matriculados",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 13:
                        toast = _a.sent();
                        return [3 /*break*/, 16];
                    case 14:
                        if (!(type === "Error")) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.toast.create({
                                message: "Revise los campos del formulario",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 15:
                        toast = _a.sent();
                        _a.label = 16;
                    case 16:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CsvAlumnoPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    CsvAlumnoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"] },
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_6__["AlumnosService"] },
        { type: src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_4__["UploadCSVService"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_7__["AsignaturasService"] },
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_8__["AlumnoMatriculaService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    CsvAlumnoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csv-alumno',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./csv-alumno.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/csv-alumno/csv-alumno.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./csv-alumno.page.scss */ "./src/app/csv-alumno/csv-alumno.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_3__["Papa"],
            src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_6__["AlumnosService"],
            src_Services_upload_csv_service__WEBPACK_IMPORTED_MODULE_4__["UploadCSVService"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_7__["AsignaturasService"],
            src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_8__["AlumnoMatriculaService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CsvAlumnoPage);
    return CsvAlumnoPage;
}());



/***/ })

}]);
//# sourceMappingURL=csv-alumno-csv-alumno-module.js.map