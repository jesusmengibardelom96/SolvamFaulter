(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asociar-profesor-asociar-profesor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-profesor/asociar-profesor.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-profesor/asociar-profesor.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Asociar profesor</ion-title>\n    <ion-back-button defaultHref=\"/admin-profesor\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Nombre</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getNombre($event)\" [(ngModel)]=\"profNombre\">\n      <ion-select-option *ngFor=\"let usu of usuarios\" value=\"{{usu.id}}\">{{usu.NombreUsuario}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"comp\">\n    <ion-label>Curso</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getCurso($event)\" [(ngModel)]=\"profCurso\">\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"comp2\">\n    <ion-label>Asignatura</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getAsignatura($event)\" [(ngModel)]=\"profAsignatura\">\n      <ion-select-option *ngFor=\"let asig of asignaturas\" value=\"{{asig.NombreAsig}}\">{{asig.NombreAsig}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ng-container *ngIf=\"comp3\">\n    <ion-button expand=\"block\" class=\"iconAsociarProfesor\" color=\"success\" (click)=\"asociarProfesor()\">\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n    </ion-button>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/Services/asociar-profesor.service.ts":
/*!**************************************************!*\
  !*** ./src/Services/asociar-profesor.service.ts ***!
  \**************************************************/
/*! exports provided: AsociarProfesorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarProfesorService", function() { return AsociarProfesorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AsociarProfesorService = /** @class */ (function () {
    function AsociarProfesorService(http) {
        this.http = http;
    }
    AsociarProfesorService.prototype.refillUsuarios = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_usuarios.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Usuarios", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsociarProfesorService.prototype.refillCursos = function () {
        this.http.get('https://www.solvam.es/app/php/db_select_curso.php', { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Cursos", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsociarProfesorService.prototype.refillAsignaturas = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_select_asignaturas_curso.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Asignaturas", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AsociarProfesorService.prototype.asociarProfAsig = function (json) {
        this.http.post('https://www.solvam.es/app/php/db_asociar_prof_asig.php', JSON.stringify(json), { observe: 'body' })
            .subscribe(function (res) {
        }, function (err) {
            console.log("Error!");
        });
    };
    AsociarProfesorService.prototype.clearStorageUsu = function () {
        localStorage.removeItem("Usuarios");
    };
    AsociarProfesorService.prototype.clearStorageCur = function () {
        localStorage.removeItem("Cursos");
    };
    AsociarProfesorService.prototype.clearStorageAsig = function () {
        localStorage.removeItem("Asignaturas");
    };
    AsociarProfesorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AsociarProfesorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AsociarProfesorService);
    return AsociarProfesorService;
}());



/***/ }),

/***/ "./src/app/asociar-profesor/asociar-profesor-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/asociar-profesor/asociar-profesor-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AsociarProfesorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarProfesorPageRoutingModule", function() { return AsociarProfesorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _asociar_profesor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asociar-profesor.page */ "./src/app/asociar-profesor/asociar-profesor.page.ts");




var routes = [
    {
        path: '',
        component: _asociar_profesor_page__WEBPACK_IMPORTED_MODULE_3__["AsociarProfesorPage"]
    }
];
var AsociarProfesorPageRoutingModule = /** @class */ (function () {
    function AsociarProfesorPageRoutingModule() {
    }
    AsociarProfesorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AsociarProfesorPageRoutingModule);
    return AsociarProfesorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/asociar-profesor/asociar-profesor.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/asociar-profesor/asociar-profesor.module.ts ***!
  \*************************************************************/
/*! exports provided: AsociarProfesorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarProfesorPageModule", function() { return AsociarProfesorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _asociar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asociar-profesor-routing.module */ "./src/app/asociar-profesor/asociar-profesor-routing.module.ts");
/* harmony import */ var _asociar_profesor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asociar-profesor.page */ "./src/app/asociar-profesor/asociar-profesor.page.ts");







var AsociarProfesorPageModule = /** @class */ (function () {
    function AsociarProfesorPageModule() {
    }
    AsociarProfesorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _asociar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__["AsociarProfesorPageRoutingModule"]
            ],
            declarations: [_asociar_profesor_page__WEBPACK_IMPORTED_MODULE_6__["AsociarProfesorPage"]]
        })
    ], AsociarProfesorPageModule);
    return AsociarProfesorPageModule;
}());



/***/ }),

/***/ "./src/app/asociar-profesor/asociar-profesor.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/asociar-profesor/asociar-profesor.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconAsociarProfesor {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNvY2lhci1wcm9mZXNvci9GOlxcREFXXFxwcm95ZWN0b0ZpbmFsXFxTb2x2YW1GYXVsdGVyL3NyY1xcYXBwXFxhc29jaWFyLXByb2Zlc29yXFxhc29jaWFyLXByb2Zlc29yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXNvY2lhci1wcm9mZXNvci9hc29jaWFyLXByb2Zlc29yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fzb2NpYXItcHJvZmVzb3IvYXNvY2lhci1wcm9mZXNvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbkFzb2NpYXJQcm9mZXNvcntcclxuICAgIG1hcmdpbjo1JTtcclxufSIsIi5pY29uQXNvY2lhclByb2Zlc29yIHtcbiAgbWFyZ2luOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/asociar-profesor/asociar-profesor.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/asociar-profesor/asociar-profesor.page.ts ***!
  \***********************************************************/
/*! exports provided: AsociarProfesorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociarProfesorPage", function() { return AsociarProfesorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_Services_asociar_profesor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/asociar-profesor.service */ "./src/Services/asociar-profesor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AsociarProfesorPage = /** @class */ (function () {
    function AsociarProfesorPage(asigProfService, loadCtrl, toastCtrl, alertController, route) {
        this.asigProfService = asigProfService;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.route = route;
        //variable comprobante
        this.comp = false;
        this.comp2 = false;
        this.comp3 = false;
    }
    AsociarProfesorPage.prototype.ngOnInit = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userType = users.type;
        this.asigProfService.refillUsuarios();
        setTimeout(function () {
            _this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
            _this.asigProfService.clearStorageUsu();
        }, 500);
    };
    AsociarProfesorPage.prototype.getNombre = function ($event) {
        var _this = this;
        this.profNombre = $event.detail.value;
        this.asigProfService.refillCursos();
        setTimeout(function () {
            _this.cursos = JSON.parse(localStorage.getItem("Cursos"));
            _this.asigProfService.clearStorageCur();
            _this.comp = true;
        }, 500);
    };
    AsociarProfesorPage.prototype.getCurso = function ($event) {
        var _this = this;
        this.profCurso = $event.detail.value;
        this.asigProfService.refillAsignaturas({ Grupo: this.profCurso });
        setTimeout(function () {
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            _this.asigProfService.clearStorageAsig();
            _this.comp2 = true;
        }, 500);
    };
    AsociarProfesorPage.prototype.getAsignatura = function ($event) {
        this.profAsignatura = $event.detail.value;
        this.comp3 = true;
    };
    AsociarProfesorPage.prototype.asociarProfesor = function () {
        this.presentAlertConfirm();
    };
    AsociarProfesorPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de insercion',
                            message: '¿Quiere usted asociar este profesor? <br>Puede que la asignatura ya tenga uno asignado.',
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
                                        var jsonAsociarProfesor = {
                                            idProf: _this.profNombre,
                                            Curso: _this.profCurso,
                                            Asignatura: _this.profAsignatura
                                        };
                                        _this.asigProfService.asociarProfAsig(jsonAsociarProfesor);
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
    AsociarProfesorPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Asociando al profesor. Por favor espere...',
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
                        this.asigProfService.refillUsuarios();
                        setTimeout(function () {
                            _this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
                            _this.asigProfService.clearStorageUsu();
                        }, 500);
                        this.profNombre = "";
                        this.profCurso = "";
                        this.profAsignatura = "";
                        this.presentToast();
                        this.route.navigate(['/admin-profesor', { userType: this.userType }]);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    AsociarProfesorPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor fue asociado a ' + this.profAsignatura + '.',
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
    AsociarProfesorPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La asociciacion fue cancelada.',
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
    AsociarProfesorPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    AsociarProfesorPage.ctorParameters = function () { return [
        { type: src_Services_asociar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["AsociarProfesorService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AsociarProfesorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asociar-profesor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asociar-profesor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/asociar-profesor/asociar-profesor.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./asociar-profesor.page.scss */ "./src/app/asociar-profesor/asociar-profesor.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_Services_asociar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["AsociarProfesorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AsociarProfesorPage);
    return AsociarProfesorPage;
}());



/***/ })

}]);
//# sourceMappingURL=asociar-profesor-asociar-profesor-module.js.map