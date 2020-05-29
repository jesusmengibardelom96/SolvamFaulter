(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Perfil\n    </ion-title>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Inicio formulario edicion usuario -->\n  <ng-container *ngIf=\"ableEdit; else elseBlock\">\n    <ng-container class=\"formulario\">\n      <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"userName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"{{inputType}}\" [(ngModel)]=\"password\"></ion-input>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"seePassField()\">\n            <ion-icon name=\"{{iconName}}\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n      <ion-item *ngIf=\"password !== ''\">\n        <ion-label position=\"floating\">Repita Contraseña</ion-label>\n        <ion-input type=\"{{inputType2}}\" [(ngModel)]=\"password2\"></ion-input>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"seePassField2()\">\n            <ion-icon name=\"{{iconName2}}\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ng-container>\n    <ng-container class=\"edicionCampos\">\n      <a (click)=\"enableFields()\">Deshabilitar edicion</a>\n      <ion-button class=\"buttonAcceptChanges\" color=\"success\" (click)=\"presentChangeAlert()\">\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ng-container>\n  </ng-container>\n  <ng-template #elseBlock>\n    <ng-container class=\"formulario\">\n      <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input type=\"text\" disabled [(ngModel)]=\"userName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input type=\"password\" disabled [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"password !== ''\">\n        <ion-label position=\"floating\">Repita Contraseña</ion-label>\n        <ion-input type=\"password\" disabled [(ngModel)]=\"password2\"></ion-input>\n      </ion-item>\n    </ng-container>\n    <ng-container class=\"edicionCampos\">\n      <a (click)=\"enableFields()\">Editar campos</a>\n    </ng-container>\n  </ng-template>\n  <!-- Fin formulario edicion usuario -->\n  <!-- Inicio administracion -->\n  <ng-container>\n    <ion-item class=\"adminAlumnosItem\" button (click)=\"showOptionsAdminAlumno()\">\n      <ion-title>\n        <ion-label class=\"labelAdminAlumnoItem\"> Administrar alumnos </ion-label>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"iconAdminAlumnoItem\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n    <ion-item class=\"adminAlumnosItem\" *ngIf=\"userType === 'ProfAdmin'\" button (click)=\"showOptionsAdminProf()\">\n      <ion-title>\n        <ion-label class=\"labelAdminAlumnoItem\"> Administrar profesores </ion-label>\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button class=\"iconAdminAlumnoItem\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n  </ng-container>\n  <!-- Fin administracion-->\n</ion-content>");

/***/ }),

/***/ "./src/app/perfil/perfil-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");




var routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
var PerfilPageRoutingModule = /** @class */ (function () {
    function PerfilPageRoutingModule() {
    }
    PerfilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PerfilPageRoutingModule);
    return PerfilPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/perfil/perfil.page.ts");







var PerfilPageModule = /** @class */ (function () {
    function PerfilPageModule() {
    }
    PerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
            ],
            declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
        })
    ], PerfilPageModule);
    return PerfilPageModule;
}());



/***/ }),

/***/ "./src/app/perfil/perfil.page.scss":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edicionCampos {\n  margin-top: 3%;\n  margin-left: 5%;\n}\n\n.buttonAcceptChanges {\n  margin-left: 30%;\n}\n\n.adminAlumnosItem {\n  margin-top: 5%;\n}\n\n.iconAdminAlumnoItem {\n  float: left;\n}\n\n.labelAdminAlumnoItem {\n  float: left;\n  margin-top: 0.8%;\n  margin-right: 5%;\n  font-size: smaller;\n}\n\n.iconAdminAlumnoCSVItem {\n  float: left;\n}\n\n.iconAdminAlumnoCSVSaveItem {\n  width: 100%;\n}\n\n.itemFixed {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL0Y6XFxEQVdcXHByb3llY3RvRmluYWxcXFNvbHZhbUZhdWx0ZXIvc3JjXFxhcHBcXHBlcmZpbFxccGVyZmlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURTQTtFQUNJLGNBQUE7QUNOSjs7QURRQTtFQUNJLFdBQUE7QUNMSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURNQTtFQUNJLFdBQUE7QUNISjs7QURXQTtFQUNJLHNCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZm9ybXVsYXJpbyBkZSBlZGljaW9uIGRlIHVzdWFyaW9cclxuXHJcblxyXG4uZWRpY2lvbkNhbXBvc3tcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uYnV0dG9uQWNjZXB0Q2hhbmdlc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbn1cclxuLy9maW4gZm9ybXVsYXJpbyBkZSBlZGljaW9uIGRlIHVzdWFyaW9cclxuXHJcbi8vaXRlbXMgZGUgYWRtaW5pc3RyYWNpb25cclxuXHJcbi8vYWRtaW5pc3RyYWNpb24gZGUgYWx1bW5vXHJcbi5hZG1pbkFsdW1ub3NJdGVte1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmljb25BZG1pbkFsdW1ub0l0ZW17XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcbi5sYWJlbEFkbWluQWx1bW5vSXRlbXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMC44JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuLy9pbmljaW8gc3ViaXIgY3N2XHJcbi5pY29uQWRtaW5BbHVtbm9DU1ZJdGVte1xyXG4gICAgZmxvYXQ6bGVmdDtcclxufVxyXG4uaWNvbkFkbWluQWx1bW5vQ1NWU2F2ZUl0ZW17XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbi8vZmluIHN1YmlyIGNzdlxyXG5cclxuLy9maW4gZGUgYWRtaW5pc3RyYWNpb24gZGUgYWx1bW5vXHJcblxyXG4vL2ZpbiBkZSBpdGVtcyBkZSBhZG1pbmlzdHJhY2lvblxyXG5cclxuLml0ZW1GaXhlZHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufSIsIi5lZGljaW9uQ2FtcG9zIHtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmJ1dHRvbkFjY2VwdENoYW5nZXMge1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uYWRtaW5BbHVtbm9zSXRlbSB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uaWNvbkFkbWluQWx1bW5vSXRlbSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubGFiZWxBZG1pbkFsdW1ub0l0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogMC44JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4uaWNvbkFkbWluQWx1bW5vQ1NWSXRlbSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaWNvbkFkbWluQWx1bW5vQ1NWU2F2ZUl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW1GaXhlZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/perfil/perfil.page.ts":
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/usaurios.service */ "./src/Services/usaurios.service.ts");
/* harmony import */ var src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/insertar-profesor.service */ "./src/Services/insertar-profesor.service.ts");






var PerfilPage = /** @class */ (function () {
    function PerfilPage(menu, alertController, route, userService, loadCtrl, toastCtrl, cursoService) {
        this.menu = menu;
        this.alertController = alertController;
        this.route = route;
        this.userService = userService;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.cursoService = cursoService;
        this.comp = false;
        this.users = JSON.parse(sessionStorage.getItem("User"));
        //Variables para controlar la edicion de campos
        this.ableEdit = false;
        //Variable que recoge el path temporal del archivo
        this.tmpPath = "";
        //Variables de usuario
        this.userName = this.users.user;
        this.password = "";
        this.userType = "";
        this.password2 = "";
        this.passwordAnt = this.password;
        this.userNameAnt = this.userName;
        //input type
        this.inputType = "password";
        this.inputType2 = "password";
        //icon name
        this.iconName = "eye-outline";
        this.iconName2 = "eye-outline";
    }
    PerfilPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userName = users.user;
        this.userType = users.type;
        this.userNameAnt = this.userName;
        this.passwordAnt = users.pass;
        this.userService.refillUsuarios();
        setTimeout(function () {
            _this.usersBBDD = JSON.parse(localStorage.getItem("Usuarios"));
            _this.userService.clearStorageUsu();
        }, 500);
    };
    PerfilPage.prototype.ngOnInit = function () {
    };
    PerfilPage.prototype.seePassField = function () {
        if (this.inputType === "password") {
            this.inputType = "text";
            this.iconName = "eye-off-outline";
        }
        else {
            this.inputType = "password";
            this.iconName = "eye-outline";
        }
    };
    PerfilPage.prototype.seePassField2 = function () {
        if (this.inputType2 === "password") {
            this.inputType2 = "text";
            this.iconName2 = "eye-off-outline";
        }
        else {
            this.inputType2 = "password";
            this.iconName2 = "eye-outline";
        }
    };
    //Abrir menu
    PerfilPage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    //Habilitar edicion de campos
    PerfilPage.prototype.enableFields = function () {
        this.ableEdit ? this.ableEdit = false : this.ableEdit = true;
    };
    //Muestra las opciones de administracion para alumnos
    PerfilPage.prototype.showOptionsAdminAlumno = function () {
        this.route.navigate(['/admin-alumno', { userType: this.userType }]);
    };
    PerfilPage.prototype.showOptionsAdminProf = function () {
        this.route.navigate(['/admin-profesor', { userType: this.userType }]);
    };
    //Alerta para cuando se desee guardar los cambios en el formulario
    PerfilPage.prototype.presentChangeAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
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
                                        var comp = false;
                                        var opc = "";
                                        if (_this.userName !== _this.userNameAnt && opc === "") {
                                            opc = "N";
                                            console.log(opc);
                                        }
                                        else if (_this.userName !== _this.userNameAnt && opc !== "") {
                                            opc += "yN";
                                            console.log(opc);
                                        }
                                        console.log(_this.password + " - " + _this.passwordAnt);
                                        if (_this.password !== _this.passwordAnt && _this.password !== "" && _this.passwordAnt !== "" && opc === "") {
                                            opc = "P";
                                            console.log(opc);
                                        }
                                        else if (_this.password !== _this.passwordAnt && _this.password !== "" && _this.passwordAnt !== "" && opc !== "") {
                                            opc += "yP";
                                            console.log(opc);
                                        }
                                        for (var _i = 0, _a = _this.usersBBDD; _i < _a.length; _i++) {
                                            var usu = _a[_i];
                                            if (usu.NombreUsuario === _this.userName && opc === "N" || opc === "yN") {
                                                _this.presentLoading2();
                                                comp = true;
                                                break;
                                            }
                                        }
                                        if (_this.password === _this.password2 && comp === false)
                                            _this.presentLoading(opc);
                                        else if (_this.password !== _this.password2 && comp === false)
                                            _this.presentErrorToast();
                                    }
                                }, {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.presentCancelToast();
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
    PerfilPage.prototype.presentLoading = function (opc) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, json, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Cambiando los datos. Por favor espere...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        json = {
                            userName: this.userName,
                            userNameAntiguo: this.userNameAnt,
                            pass: this.password,
                            opc: opc
                        };
                        this.userService.updateUsuario(json);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.presentToast();
                        this.userName = this.userNameAnt;
                        this.password = "";
                        this.inputType = "password";
                        this.iconName = "eye-outline";
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.presentLoading2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Cambiando los datos. Por favor espere...',
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
                        this.presentUserErrorToast();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La edicion fue aceptada, inicie sesion de nuevo.',
                            duration: 2000,
                            color: "success"
                        })];
                    case 1:
                        toast = _b.sent();
                        toast.present();
                        return [4 /*yield*/, toast.onDidDismiss()];
                    case 2:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.route.navigateByUrl("login");
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.presentErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Las contraseñas no son iguales, vuelva a intentarlo.',
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
    PerfilPage.prototype.presentUserErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El usuario' + this.userName + ' ya existe, vuelva a intentarlo.',
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
    PerfilPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La edicion se canceló.',
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
    PerfilPage.prototype.showNavOption = function () {
        if (!this.comp)
            this.comp = true;
        else
            this.comp = false;
    };
    PerfilPage.prototype.goToMensajes = function () {
        this.route.navigateByUrl("/mensajes");
        this.comp = false;
    };
    PerfilPage.prototype.goToMensajesEnviados = function () {
        this.route.navigateByUrl("/mensajes-enviados");
        this.comp = false;
    };
    PerfilPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    PerfilPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_4__["UsauriosService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_5__["InsertarProfesorService"] }
    ]; };
    PerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/perfil/perfil.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perfil.page.scss */ "./src/app/perfil/perfil.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_4__["UsauriosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_5__["InsertarProfesorService"]])
    ], PerfilPage);
    return PerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map