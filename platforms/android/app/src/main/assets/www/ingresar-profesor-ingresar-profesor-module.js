(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ingresar-profesor-ingresar-profesor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ingresar-profesor/ingresar-profesor.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ingresar-profesor/ingresar-profesor.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Ingresar nuevo profesor</ion-title>\n    <ion-back-button defaultHref=\"/admin-profesor\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"{{inputColorName}}\">\n    <ion-label position=\"floating\">Nombre</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"userName\" (ionChange)=\"getComp($event)\" ></ion-input>\n  </ion-item>\n  <ion-item *ngIf=\"comp\" color=\"{{inputColorPass}}\">\n    <ion-label position=\"floating\">Contraseña</ion-label>\n    <ion-input type=\"{{inputType}}\" [(ngModel)]=\"password\" (ionChange)=\"getComp2($event)\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"seePassField()\">\n        <ion-icon name=\"{{iconName}}\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  <ion-item *ngIf=\"comp && password !== ''\" color=\"{{inputColorPass2}}\">\n    <ion-label position=\"floating\">Repita Contraseña</ion-label>\n    <ion-input type=\"{{inputType2}}\" [(ngModel)]=\"password2\" (ionChange)=\"getComp3($event)\"></ion-input>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"seePassField2()\">\n        <ion-icon name=\"{{iconName2}}\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-item>\n  <ion-item *ngIf=\"comp2\">\n    <ion-label>Tipo</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getTipo($event)\" [(ngModel)]=\"profTipo\">\n      <ion-select-option value=\"Profesor\">Profesor</ion-select-option>\n      <ion-select-option value=\"ProfAdmin\">ProfAdmin</ion-select-option>\n      <ion-select-option value=\"Administrativo\">Administrativo</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"comp3\">\n    <ion-label>¿Es tutor?</ion-label>\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"comp4\"></ion-checkbox>\n  </ion-item>\n  <ion-item *ngIf=\"comp4\">\n    <ion-label>Curso</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getCurso($event)\" [(ngModel)]=\"profCurso\">\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  \n  <ng-container *ngIf=\"comp5\">\n    <ion-button expand=\"block\" class=\"iconIngresarProfesor\" color=\"success\" (click)=\"ingresarProfesor()\">\n      <ion-icon name=\"cloud-upload-outline\"></ion-icon>\n    </ion-button>\n  </ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ingresar-profesor/ingresar-profesor-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ingresar-profesor/ingresar-profesor-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: IngresarProfesorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarProfesorPageRoutingModule", function() { return IngresarProfesorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ingresar_profesor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingresar-profesor.page */ "./src/app/ingresar-profesor/ingresar-profesor.page.ts");




var routes = [
    {
        path: '',
        component: _ingresar_profesor_page__WEBPACK_IMPORTED_MODULE_3__["IngresarProfesorPage"]
    }
];
var IngresarProfesorPageRoutingModule = /** @class */ (function () {
    function IngresarProfesorPageRoutingModule() {
    }
    IngresarProfesorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IngresarProfesorPageRoutingModule);
    return IngresarProfesorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/ingresar-profesor/ingresar-profesor.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ingresar-profesor/ingresar-profesor.module.ts ***!
  \***************************************************************/
/*! exports provided: IngresarProfesorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarProfesorPageModule", function() { return IngresarProfesorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ingresar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingresar-profesor-routing.module */ "./src/app/ingresar-profesor/ingresar-profesor-routing.module.ts");
/* harmony import */ var _ingresar_profesor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingresar-profesor.page */ "./src/app/ingresar-profesor/ingresar-profesor.page.ts");







var IngresarProfesorPageModule = /** @class */ (function () {
    function IngresarProfesorPageModule() {
    }
    IngresarProfesorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ingresar_profesor_routing_module__WEBPACK_IMPORTED_MODULE_5__["IngresarProfesorPageRoutingModule"]
            ],
            declarations: [_ingresar_profesor_page__WEBPACK_IMPORTED_MODULE_6__["IngresarProfesorPage"]]
        })
    ], IngresarProfesorPageModule);
    return IngresarProfesorPageModule;
}());



/***/ }),

/***/ "./src/app/ingresar-profesor/ingresar-profesor.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/ingresar-profesor/ingresar-profesor.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconIngresarProfesor {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVzYXItcHJvZmVzb3IvRjpcXERBV1xccHJveWVjdG9GaW5hbFxcU29sdmFtRmF1bHRlci9zcmNcXGFwcFxcaW5ncmVzYXItcHJvZmVzb3JcXGluZ3Jlc2FyLXByb2Zlc29yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5ncmVzYXItcHJvZmVzb3IvaW5ncmVzYXItcHJvZmVzb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVzYXItcHJvZmVzb3IvaW5ncmVzYXItcHJvZmVzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25JbmdyZXNhclByb2Zlc29ye1xyXG4gICAgbWFyZ2luOjUlO1xyXG59IiwiLmljb25JbmdyZXNhclByb2Zlc29yIHtcbiAgbWFyZ2luOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ingresar-profesor/ingresar-profesor.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/ingresar-profesor/ingresar-profesor.page.ts ***!
  \*************************************************************/
/*! exports provided: IngresarProfesorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresarProfesorPage", function() { return IngresarProfesorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/insertar-profesor.service */ "./src/Services/insertar-profesor.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var IngresarProfesorPage = /** @class */ (function () {
    function IngresarProfesorPage(insertProfesor, alertController, loadCtrl, toastCtrl, route) {
        this.insertProfesor = insertProfesor;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        //Variable comps
        this.comp = false;
        this.comp2 = false;
        this.comp3 = false;
        this.comp4 = false;
        this.comp5 = false;
        //Color variable
        this.inputColorName = "";
        this.inputColorPass = "";
        this.inputColorPass2 = "";
        //input type
        this.inputType = "password";
        this.inputType2 = "password";
        //icon name
        this.iconName = "eye-outline";
        this.iconName2 = "eye-outline";
    }
    IngresarProfesorPage.prototype.ngOnInit = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.userType = users.type;
        this.insertProfesor.refillUsuarios();
        this.insertProfesor.refillCursos();
        setTimeout(function () {
            _this.users = JSON.parse(localStorage.getItem("Usuarios"));
            console.log(_this.users);
            _this.insertProfesor.clearStorageUsu();
            _this.cursos = JSON.parse(localStorage.getItem("Cursos"));
            console.log(_this.cursos);
            _this.insertProfesor.clearStorageCur();
        }, 500);
    };
    IngresarProfesorPage.prototype.getComp = function ($event) {
        this.inputColorName = "";
        if ($event.detail.value !== "") {
            this.comp = true;
            this.userName = $event.detail.value;
        }
        else {
            this.comp = false;
            this.comp2 = false;
            this.comp3 = false;
            this.comp4 = false;
            this.comp5 = false;
            this.inputColorName = "danger";
        }
    };
    IngresarProfesorPage.prototype.seePassField = function () {
        if (this.inputType === "password") {
            this.inputType = "text";
            this.iconName = "eye-off-outline";
        }
        else {
            this.inputType = "password";
            this.iconName = "eye-outline";
        }
    };
    IngresarProfesorPage.prototype.seePassField2 = function () {
        if (this.inputType2 === "password") {
            this.inputType2 = "text";
            this.iconName2 = "eye-off-outline";
        }
        else {
            this.inputType2 = "password";
            this.iconName2 = "eye-outline";
        }
    };
    IngresarProfesorPage.prototype.getComp3 = function ($event) {
        this.inputColorPass = "";
        if ($event.detail.value !== "") {
            this.comp2 = true;
        }
        else {
            this.comp2 = false;
            this.comp3 = false;
            this.comp4 = false;
            this.comp5 = false;
            this.inputColorPass2 = "danger";
        }
    };
    IngresarProfesorPage.prototype.getComp2 = function ($event) {
        this.inputColorPass = "";
        if ($event.detail.value !== "") {
            this.password = $event.detail.value;
        }
        else {
            this.comp2 = false;
            this.comp3 = false;
            this.comp4 = false;
            this.comp5 = false;
            this.inputColorPass = "danger";
        }
    };
    IngresarProfesorPage.prototype.getCurso = function ($event) {
        if ($event.detail.value !== "") {
            this.comp5 = true;
            this.profCurso = $event.detail.value;
        }
        else {
            this.comp5 = false;
        }
    };
    IngresarProfesorPage.prototype.getTipo = function ($event) {
        if ($event.detail.value !== "") {
            this.comp3 = true;
            this.comp5 = true;
            this.profTipo = $event.detail.value;
        }
        else {
            this.comp3 = false;
            this.comp4 = false;
            this.comp5 = false;
        }
    };
    IngresarProfesorPage.prototype.ingresarProfesor = function () {
        this.presentAlertConfirm();
    };
    IngresarProfesorPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de insercion',
                            message: '¿Quiere usted Insertar este profesor?',
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
                                        var comp6 = true;
                                        for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                                            var i = _a[_i];
                                            console.log(_this.userName + " - " + i.NombreUsuario);
                                            if (_this.userName === i.NombreUsuario)
                                                comp6 = false;
                                        }
                                        console.log(comp6);
                                        if (comp6 != true) {
                                            _this.presentLoading2();
                                        }
                                        else {
                                            if (_this.password !== _this.password2)
                                                _this.presentErrorPassToast();
                                            else {
                                                if (_this.comp4) {
                                                    var jsonTutor = {
                                                        id: parseInt(_this.users[_this.users.length - 1].id) + 1,
                                                        usuario: _this.userName,
                                                        pass: _this.password,
                                                        tipo: _this.profTipo,
                                                        tutor: _this.profCurso
                                                    };
                                                    _this.insertProfesor.insertProfWithTutor(jsonTutor);
                                                }
                                                else {
                                                    var jsonSinTutor = {
                                                        id: parseInt(_this.users[_this.users.length - 1].id) + 1,
                                                        usuario: _this.userName,
                                                        pass: _this.password,
                                                        tipo: _this.profTipo
                                                    };
                                                    _this.insertProfesor.insertProfWithoutTutor(jsonSinTutor);
                                                }
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
    IngresarProfesorPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Insertando al profesor. Por favor espere...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        this.insertProfesor.refillUsuarios();
                        setTimeout(function () {
                            _this.users = JSON.parse(localStorage.getItem("Usuarios"));
                            console.log(_this.users);
                            _this.insertProfesor.clearStorageUsu();
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.userName = "";
                        this.password = "";
                        this.password2 = "";
                        this.profTipo = "";
                        this.profCurso = "";
                        this.route.navigate(['/admin-profesor', { userType: this.userType }]);
                        this.presentToast();
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    IngresarProfesorPage.prototype.presentLoading2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Insertando al profesor. Por favor espere...',
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
                        this.presentNameErrorToast();
                        this.inputColorName = "danger";
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    IngresarProfesorPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor fue insertado.',
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
    IngresarProfesorPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor no fue insertado.',
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
    IngresarProfesorPage.prototype.presentNameErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'El profesor ' + this.userName + ' ya existe.',
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
    IngresarProfesorPage.prototype.presentErrorPassToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Las contraseñas no coinciden.',
                            duration: 2000,
                            color: "danger"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.password2 = "";
                        this.inputColorPass2 = "danger";
                        return [2 /*return*/];
                }
            });
        });
    };
    IngresarProfesorPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    IngresarProfesorPage.ctorParameters = function () { return [
        { type: src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["InsertarProfesorService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    IngresarProfesorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingresar-profesor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ingresar-profesor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ingresar-profesor/ingresar-profesor.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ingresar-profesor.page.scss */ "./src/app/ingresar-profesor/ingresar-profesor.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_Services_insertar_profesor_service__WEBPACK_IMPORTED_MODULE_2__["InsertarProfesorService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], IngresarProfesorPage);
    return IngresarProfesorPage;
}());



/***/ })

}]);
//# sourceMappingURL=ingresar-profesor-ingresar-profesor-module.js.map