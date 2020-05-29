(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eliminar-alumno-eliminar-alumno-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-alumno/eliminar-alumno.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-alumno/eliminar-alumno.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Eliminar alumno</ion-title>\n    <ion-back-button defaultHref=\"/admin-alumno\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Curso</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getIdCur($event)\" [(ngModel)]=\"curso\">\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"curso !== undefined\">\n    <ion-label>Alumnos</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getId($event)\" [(ngModel)]=\"alumno\">\n      <ion-select-option *ngFor=\"let alu of alumnos\" value=\"{{alu.NIA}}\">{{alu.Apellido1}}, {{alu.Nombre}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button expand=\"block\" class=\"iconDeleteAlumno\" color=\"danger\" (click)=\"deleteAlumno()\" *ngIf=\"alumno !== undefined\">\n    <ion-icon name=\"trash-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/Services/alumno-matricula.service.ts":
/*!**************************************************!*\
  !*** ./src/Services/alumno-matricula.service.ts ***!
  \**************************************************/
/*! exports provided: AlumnoMatriculaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnoMatriculaService", function() { return AlumnoMatriculaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AlumnoMatriculaService = /** @class */ (function () {
    function AlumnoMatriculaService(http) {
        this.http = http;
    }
    AlumnoMatriculaService.prototype.setStorageComp = function (nombreAsignatura) {
        localStorage.removeItem("Matriculados");
        var jsonAsig = {
            nombre: nombreAsignatura
        };
        this.http.post('https://www.solvam.es/app/php/db_select_matricula.php', JSON.stringify(jsonAsig), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Matriculados", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnoMatriculaService.prototype.setStorageMat = function () {
        localStorage.removeItem("Matriculados");
        this.http.get('https://www.solvam.es/app/php/db_select_matricula_normal.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Matriculados", JSON.stringify(res));
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.setStorageMatCur = function (json) {
        var jsonCursoMat = {
            Grupo: json
        };
        this.http.post('https://www.solvam.es/app/php/db_matricula_curso.php', JSON.stringify(jsonCursoMat), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Matriculados", JSON.stringify(res));
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.setStorageCompMat = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_select_matricula_alumno_asignatura.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("compMatricula", JSON.stringify(res));
            //console.log(res);
            //this.response = res;
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.deleteMat = function (idMatricula) {
        var jsonMat = {
            Id: idMatricula
        };
        this.http.post('https://www.solvam.es/app/php/db_delete_matricula.php', JSON.stringify(jsonMat), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.deleteMatAlumno = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_delete_matricula_alumno.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.deleteMensajeMat = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_delete_mensaje_matricula.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.deleteMensaje = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_delete_mensaje.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    AlumnoMatriculaService.prototype.clearStorageMat = function () {
        localStorage.removeItem("Matriculados");
    };
    AlumnoMatriculaService.prototype.clearStorageCompMat = function () {
        localStorage.removeItem("compMatricula");
    };
    AlumnoMatriculaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AlumnoMatriculaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlumnoMatriculaService);
    return AlumnoMatriculaService;
}());



/***/ }),

/***/ "./src/Services/alumnos.service.ts":
/*!*****************************************!*\
  !*** ./src/Services/alumnos.service.ts ***!
  \*****************************************/
/*! exports provided: AlumnosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosService", function() { return AlumnosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AlumnosService = /** @class */ (function () {
    function AlumnosService(http) {
        this.http = http;
    }
    AlumnosService.prototype.refillAlumnos = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_alumnos.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Alumnos", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnosService.prototype.refillAlumnosCur = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_select_alumnos_curso.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Alumnos", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnosService.prototype.refillCurso = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_curso.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Cursos", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnosService.prototype.deleteAlumno = function (idAlumno) {
        var jsonMat = {
            Id: idAlumno
        };
        console.log(jsonMat);
        this.http.post('https://www.solvam.es/app/php/db_delete_alumno.php', JSON.stringify(jsonMat), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
            localStorage.setItem("Error", JSON.stringify({ msg: err.error.text }));
        });
    };
    AlumnosService.prototype.clearStorageAlumnos = function () {
        localStorage.removeItem("Alumnos");
    };
    AlumnosService.prototype.clearStorageCurso = function () {
        localStorage.removeItem("Cursos");
    };
    AlumnosService.prototype.clearStorageErrors = function () {
        localStorage.removeItem("Error");
    };
    AlumnosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AlumnosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlumnosService);
    return AlumnosService;
}());



/***/ }),

/***/ "./src/app/eliminar-alumno/eliminar-alumno-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/eliminar-alumno/eliminar-alumno-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EliminarAlumnoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarAlumnoPageRoutingModule", function() { return EliminarAlumnoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eliminar_alumno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eliminar-alumno.page */ "./src/app/eliminar-alumno/eliminar-alumno.page.ts");




var routes = [
    {
        path: '',
        component: _eliminar_alumno_page__WEBPACK_IMPORTED_MODULE_3__["EliminarAlumnoPage"]
    }
];
var EliminarAlumnoPageRoutingModule = /** @class */ (function () {
    function EliminarAlumnoPageRoutingModule() {
    }
    EliminarAlumnoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EliminarAlumnoPageRoutingModule);
    return EliminarAlumnoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/eliminar-alumno/eliminar-alumno.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/eliminar-alumno/eliminar-alumno.module.ts ***!
  \***********************************************************/
/*! exports provided: EliminarAlumnoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarAlumnoPageModule", function() { return EliminarAlumnoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _eliminar_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eliminar-alumno-routing.module */ "./src/app/eliminar-alumno/eliminar-alumno-routing.module.ts");
/* harmony import */ var _eliminar_alumno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eliminar-alumno.page */ "./src/app/eliminar-alumno/eliminar-alumno.page.ts");







var EliminarAlumnoPageModule = /** @class */ (function () {
    function EliminarAlumnoPageModule() {
    }
    EliminarAlumnoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _eliminar_alumno_routing_module__WEBPACK_IMPORTED_MODULE_5__["EliminarAlumnoPageRoutingModule"]
            ],
            declarations: [_eliminar_alumno_page__WEBPACK_IMPORTED_MODULE_6__["EliminarAlumnoPage"]]
        })
    ], EliminarAlumnoPageModule);
    return EliminarAlumnoPageModule;
}());



/***/ }),

/***/ "./src/app/eliminar-alumno/eliminar-alumno.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/eliminar-alumno/eliminar-alumno.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconDeleteAlumno {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpbWluYXItYWx1bW5vL0Y6XFxEQVdcXHByb3llY3RvRmluYWxcXFNvbHZhbUZhdWx0ZXIvc3JjXFxhcHBcXGVsaW1pbmFyLWFsdW1ub1xcZWxpbWluYXItYWx1bW5vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWxpbWluYXItYWx1bW5vL2VsaW1pbmFyLWFsdW1uby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbGltaW5hci1hbHVtbm8vZWxpbWluYXItYWx1bW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uRGVsZXRlQWx1bW5ve1xyXG4gICAgbWFyZ2luOjUlO1xyXG59IiwiLmljb25EZWxldGVBbHVtbm8ge1xuICBtYXJnaW46IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/eliminar-alumno/eliminar-alumno.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/eliminar-alumno/eliminar-alumno.page.ts ***!
  \*********************************************************/
/*! exports provided: EliminarAlumnoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarAlumnoPage", function() { return EliminarAlumnoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EliminarAlumnoPage = /** @class */ (function () {
    function EliminarAlumnoPage(aluService, matService, alertController, loadCtrl, toastCtrl, route) {
        this.aluService = aluService;
        this.matService = matService;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        //Variable matriculas
        this.alumnos = [];
        this.matriculas = [];
        this.cursos = [];
    }
    EliminarAlumnoPage.prototype.ngOnInit = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userType = users.type;
        this.matService.setStorageMat();
        this.aluService.refillCurso();
        setTimeout(function () {
            _this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
            console.log(_this.matriculas);
            _this.cursos = JSON.parse(localStorage.getItem("Cursos"));
            _this.aluService.clearStorageCurso();
            _this.matService.clearStorageMat();
        }, 500);
    };
    EliminarAlumnoPage.prototype.getId = function ($event) {
        console.log($event.detail.value);
        this.idAlumno = parseInt($event.detail.value);
        console.log(this.idAlumno);
    };
    EliminarAlumnoPage.prototype.getIdCur = function ($event) {
        var _this = this;
        this.curso = $event.detail.value;
        var jsonAluCur = {
            curso: this.curso
        };
        this.aluService.refillAlumnosCur(jsonAluCur);
        setTimeout(function () {
            _this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
            _this.aluService.clearStorageAlumnos();
        }, 500);
    };
    EliminarAlumnoPage.prototype.deleteAlumno = function () {
        if (this.idAlumno === undefined) {
            this.presentErrorToast();
        }
        else {
            this.presentAlertConfirm();
        }
    };
    EliminarAlumnoPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de eliminacion',
                            message: '¿Quiere usted eliminar este alumno? <br>Puede tener matriculas asociadas',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.presentCancelToast();
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        _this.matService.deleteMensaje({ idAlumno: _this.idAlumno });
                                        _this.presentLoading();
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
    EliminarAlumnoPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, json, _a, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Borrando el alumno. Por favor espere...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        json = {
                            alumnoId: parseInt(this.idAlumno)
                        };
                        console.log(json);
                        this.matService.deleteMatAlumno(json);
                        this.aluService.deleteAlumno(this.idAlumno);
                        this.aluService.refillAlumnosCur({ curso: this.curso });
                        this.matService.setStorageMat();
                        setTimeout(function () {
                            _this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
                            _this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
                            console.log(_this.alumnos);
                            console.log(_this.matriculas);
                            _this.aluService.clearStorageAlumnos();
                            _this.matService.clearStorageMat();
                        }, 500);
                        this.alumno = null;
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.curso = undefined;
                        this.alumno = undefined;
                        this.route.navigate(['/admin-alumno', { userType: this.userType }]);
                        this.presentToast();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarAlumnoPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El alumno fue eliminado.',
                            duration: 2000,
                            color: "success"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarAlumnoPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El alumno no fue eliminado.',
                            duration: 2000,
                            color: "danger"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarAlumnoPage.prototype.presentErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Seleccione primero un alumno.',
                            duration: 2000,
                            color: "danger"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarAlumnoPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    EliminarAlumnoPage.ctorParameters = function () { return [
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__["AlumnosService"] },
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoMatriculaService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EliminarAlumnoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eliminar-alumno',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminar-alumno.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-alumno/eliminar-alumno.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminar-alumno.page.scss */ "./src/app/eliminar-alumno/eliminar-alumno.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_4__["AlumnosService"],
            src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_2__["AlumnoMatriculaService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EliminarAlumnoPage);
    return EliminarAlumnoPage;
}());



/***/ })

}]);
//# sourceMappingURL=eliminar-alumno-eliminar-alumno-module.js.map