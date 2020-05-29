(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eliminar-profesor-eliminar-profesor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-profesor/eliminar-profesor.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-profesor/eliminar-profesor.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> Eliminar profesor </ion-title>\n    <ion-back-button defaultHref=\"/admin-profesor\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Profesor</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getId($event)\" [(ngModel)]=\"usuario\">\n      <ion-select-option *ngFor=\"let usu of usuarios\" value=\"{{usu.id}}\">{{usu.NombreUsuario}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button expand=\"block\" class=\"iconDeleteProfesor\" color=\"danger\" (click)=\"deleteProfesor()\">\n    <ion-icon name=\"trash-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n");

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

/***/ "./src/Services/asignaturas.service.ts":
/*!*********************************************!*\
  !*** ./src/Services/asignaturas.service.ts ***!
  \*********************************************/
/*! exports provided: AsignaturasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturasService", function() { return AsignaturasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");




var AsignaturasService = /** @class */ (function () {
    function AsignaturasService(http, matService) {
        this.http = http;
        this.matService = matService;
    }
    AsignaturasService.prototype.refillAsignaturas = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_asignaturas.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Asignaturas", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsignaturasService.prototype.refillAsignaturasCurso = function (CursoAsig) {
        var jsonCursoAsig = {
            Grupo: CursoAsig
        };
        console.log(jsonCursoAsig);
        this.http.post('https://www.solvam.es/app/php/db_select_asignaturas_curso.php', JSON.stringify(jsonCursoAsig), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Asignaturas", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsignaturasService.prototype.refillMessages = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_message.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Messages", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsignaturasService.prototype.clearStorageAsig = function () {
        localStorage.removeItem("Asignaturas");
    };
    AsignaturasService.prototype.clearStorageMess = function () {
        localStorage.removeItem("Messages");
    };
    AsignaturasService.prototype.getCompAsig = function (NombreAsig) {
        this.matService.setStorageComp(NombreAsig);
    };
    AsignaturasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoMatriculaService"] }
    ]; };
    AsignaturasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoMatriculaService"]])
    ], AsignaturasService);
    return AsignaturasService;
}());



/***/ }),

/***/ "./src/app/eliminar-profesor/eliminar-profesor-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/eliminar-profesor/eliminar-profesor-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: EliminarProfesorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarProfesorPageRoutingModule", function() { return EliminarProfesorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eliminar_profesor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eliminar-profesor.page */ "./src/app/eliminar-profesor/eliminar-profesor.page.ts");




var routes = [
    {
        path: '',
        component: _eliminar_profesor_page__WEBPACK_IMPORTED_MODULE_3__["EliminarProfesorPage"]
    }
];
var EliminarProfesorPageRoutingModule = /** @class */ (function () {
    function EliminarProfesorPageRoutingModule() {
    }
    EliminarProfesorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EliminarProfesorPageRoutingModule);
    return EliminarProfesorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/eliminar-profesor/eliminar-profesor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/eliminar-profesor/eliminar-profesor.module.ts ***!
  \***************************************************************/
/*! exports provided: EliminarProfesorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarProfesorPageModule", function() { return EliminarProfesorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _eliminar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eliminar-profesor-routing.module */ "./src/app/eliminar-profesor/eliminar-profesor-routing.module.ts");
/* harmony import */ var _eliminar_profesor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eliminar-profesor.page */ "./src/app/eliminar-profesor/eliminar-profesor.page.ts");







var EliminarProfesorPageModule = /** @class */ (function () {
    function EliminarProfesorPageModule() {
    }
    EliminarProfesorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _eliminar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__["EliminarProfesorPageRoutingModule"]
            ],
            declarations: [_eliminar_profesor_page__WEBPACK_IMPORTED_MODULE_6__["EliminarProfesorPage"]]
        })
    ], EliminarProfesorPageModule);
    return EliminarProfesorPageModule;
}());



/***/ }),

/***/ "./src/app/eliminar-profesor/eliminar-profesor.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/eliminar-profesor/eliminar-profesor.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconDeleteProfesor {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpbWluYXItcHJvZmVzb3IvRjpcXERBV1xccHJveWVjdG9GaW5hbFxcU29sdmFtRmF1bHRlci9zcmNcXGFwcFxcZWxpbWluYXItcHJvZmVzb3JcXGVsaW1pbmFyLXByb2Zlc29yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWxpbWluYXItcHJvZmVzb3IvZWxpbWluYXItcHJvZmVzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZWxpbWluYXItcHJvZmVzb3IvZWxpbWluYXItcHJvZmVzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25EZWxldGVQcm9mZXNvcntcclxuICAgIG1hcmdpbjo1JTtcclxufSIsIi5pY29uRGVsZXRlUHJvZmVzb3Ige1xuICBtYXJnaW46IDUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/eliminar-profesor/eliminar-profesor.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/eliminar-profesor/eliminar-profesor.page.ts ***!
  \*************************************************************/
/*! exports provided: EliminarProfesorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarProfesorPage", function() { return EliminarProfesorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/insertar-profesor.service */ "./src/Services/insertar-profesor.service.ts");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EliminarProfesorPage = /** @class */ (function () {
    function EliminarProfesorPage(usuService, asigService, alertController, loadCtrl, toastCtrl, route) {
        this.usuService = usuService;
        this.asigService = asigService;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        //Array asignaturas
        this.asignaturas = [];
        //Array profesores
        this.usuarios = [];
        this.idUsuario = 0;
    }
    EliminarProfesorPage.prototype.ngOnInit = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userType = users.type;
        this.usuService.refillUsuarios();
        this.asigService.refillAsignaturas();
        setTimeout(function () {
            _this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            console.log(_this.usuarios);
            console.log(_this.asignaturas);
            _this.usuService.clearStorageUsu();
            _this.asigService.clearStorageAsig();
        }, 500);
    };
    EliminarProfesorPage.prototype.getId = function ($event) {
        this.idUsuario = parseInt($event.detail.value);
    };
    EliminarProfesorPage.prototype.deleteProfesor = function () {
        this.presentAlertConfirm();
    };
    EliminarProfesorPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de eliminacion',
                            message: '¿Quiere usted eliminar este profesor?',
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
                                        var comp = true;
                                        if (_this.idUsuario === 0) {
                                            console.log("Seleccione primero el profesor");
                                        }
                                        else {
                                            for (var _i = 0, _a = _this.asignaturas; _i < _a.length; _i++) {
                                                var i = _a[_i];
                                                if (_this.idUsuario === parseInt(i.ProfesorId))
                                                    comp = false;
                                            }
                                            if (comp != true) {
                                                _this.presentLoading2();
                                            }
                                            else {
                                                var jsonProfAsig = {
                                                    id: parseInt(_this.idUsuario)
                                                };
                                                _this.usuService.deleteProfWithoutAsig(jsonProfAsig);
                                                _this.presentLoading();
                                            }
                                        }
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
    EliminarProfesorPage.prototype.presentAlertConfirm2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de eliminacion',
                            message: 'Este profesor tiene asignaturas asignadas ¿Continuar?',
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
                                        var jsonProfAsig = {
                                            id: parseInt(_this.idUsuario)
                                        };
                                        _this.usuService.deleteProfWithAsig(jsonProfAsig);
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
    EliminarProfesorPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Eliminando al profesor. Por favor espere...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        this.usuService.refillUsuarios();
                        setTimeout(function () {
                            _this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
                            console.log(_this.usuarios);
                            _this.usuService.clearStorageUsu();
                        }, 500);
                        this.usuario = null;
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.route.navigate(['/admin-profesor', { userType: this.userType }]);
                        this.presentToast();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarProfesorPage.prototype.presentLoading2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Eliminando al profesor. Por favor espere...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.presentAlertConfirm2();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarProfesorPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor fue eliminado.',
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
    EliminarProfesorPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor no fue eliminado.',
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
    EliminarProfesorPage.prototype.presentAsigErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Este profesor tiene una asignatura asignada.',
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
    EliminarProfesorPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    EliminarProfesorPage.ctorParameters = function () { return [
        { type: src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["InsertarProfesorService"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EliminarProfesorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eliminar-profesor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminar-profesor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-profesor/eliminar-profesor.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminar-profesor.page.scss */ "./src/app/eliminar-profesor/eliminar-profesor.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["InsertarProfesorService"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_3__["AsignaturasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EliminarProfesorPage);
    return EliminarProfesorPage;
}());



/***/ })

}]);
//# sourceMappingURL=eliminar-profesor-eliminar-profesor-module.js.map