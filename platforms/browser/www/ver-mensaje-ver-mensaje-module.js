(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-mensaje-ver-mensaje-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ver-mensaje/ver-mensaje.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ver-mensaje/ver-mensaje.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"mensajes\" slot=\"start\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Mensajes\n    </ion-title>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>{{fecha}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-textarea value=\"{{textMess}}\" rows=\"5\"></ion-textarea>\n      </ion-card-content>\n      <ion-item>\n        <ion-button slot=\"end\" (click)=\"sendMailP()\" *ngIf=\"compMailP\"><ion-icon name=\"mail-outline\"></ion-icon> Padre</ion-button>\n        <ion-button slot=\"end\" (click)=\"sendMailM()\" *ngIf=\"compMailM\"><ion-icon name=\"mail-outline\"></ion-icon> Madre</ion-button>\n        <ion-button slot=\"end\" (click)=\"sendMailA()\" *ngIf=\"compMailA\"><ion-icon name=\"mail-outline\"></ion-icon> Alumno</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" (click)=\"sendWhatsP()\" color=\"success\" *ngIf=\"compTlfP\"><ion-icon name=\"logo-whatsapp\"></ion-icon> Padre</ion-button>\n        <ion-button slot=\"end\" (click)=\"sendWhatsM()\" color=\"success\" *ngIf=\"compTlfM\"><ion-icon name=\"logo-whatsapp\"></ion-icon> Madre</ion-button>\n        <ion-button slot=\"end\" (click)=\"sendWhatsA()\" color=\"success\" *ngIf=\"compTlfA\"><ion-icon name=\"logo-whatsapp\"></ion-icon> Alumno</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" (click)=\"goToMensajes()\">Volver a Mensajes</ion-button>\n        <ion-button slot=\"end\" (click)=\"goToMensajesEnviados()\">Ir a Enviados</ion-button>\n      </ion-item>\n      <ion-item>\n        <ion-button slot=\"end\" (click)=\"archivarMensaje()\" color=\"success\">Archivar</ion-button>\n      </ion-item>\n    </ion-card>\n  </ng-container>\n</ion-content>\n");

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

/***/ "./src/app/ver-mensaje/ver-mensaje-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ver-mensaje/ver-mensaje-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VerMensajePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerMensajePageRoutingModule", function() { return VerMensajePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ver_mensaje_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-mensaje.page */ "./src/app/ver-mensaje/ver-mensaje.page.ts");




var routes = [
    {
        path: '',
        component: _ver_mensaje_page__WEBPACK_IMPORTED_MODULE_3__["VerMensajePage"]
    }
];
var VerMensajePageRoutingModule = /** @class */ (function () {
    function VerMensajePageRoutingModule() {
    }
    VerMensajePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VerMensajePageRoutingModule);
    return VerMensajePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/ver-mensaje/ver-mensaje.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ver-mensaje/ver-mensaje.module.ts ***!
  \***************************************************/
/*! exports provided: VerMensajePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerMensajePageModule", function() { return VerMensajePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ver_mensaje_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-mensaje-routing.module */ "./src/app/ver-mensaje/ver-mensaje-routing.module.ts");
/* harmony import */ var _ver_mensaje_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-mensaje.page */ "./src/app/ver-mensaje/ver-mensaje.page.ts");







var VerMensajePageModule = /** @class */ (function () {
    function VerMensajePageModule() {
    }
    VerMensajePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _ver_mensaje_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerMensajePageRoutingModule"]
            ],
            declarations: [_ver_mensaje_page__WEBPACK_IMPORTED_MODULE_6__["VerMensajePage"]]
        })
    ], VerMensajePageModule);
    return VerMensajePageModule;
}());



/***/ }),

/***/ "./src/app/ver-mensaje/ver-mensaje.page.scss":
/*!***************************************************!*\
  !*** ./src/app/ver-mensaje/ver-mensaje.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zlci1tZW5zYWplL3Zlci1tZW5zYWplLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ver-mensaje/ver-mensaje.page.ts":
/*!*************************************************!*\
  !*** ./src/app/ver-mensaje/ver-mensaje.page.ts ***!
  \*************************************************/
/*! exports provided: VerMensajePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerMensajePage", function() { return VerMensajePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var src_Services_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/messages.service */ "./src/Services/messages.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");







var VerMensajePage = /** @class */ (function () {
    function VerMensajePage(activeRoute, aluService, emailComposer, router, messService, toast, loadingController) {
        this.activeRoute = activeRoute;
        this.aluService = aluService;
        this.emailComposer = emailComposer;
        this.router = router;
        this.messService = messService;
        this.toast = toast;
        this.loadingController = loadingController;
        //flags
        this.compTlfM = true;
        this.compTlfP = true;
        this.compTlfA = true;
        this.compMailM = true;
        this.compMailP = true;
        this.compMailA = true;
    }
    VerMensajePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.message = JSON.parse(this.activeRoute.snapshot.paramMap.get('mess'));
        this.fecha = this.message.fecha;
        this.textMess = this.message.textoMensaje;
        console.log(this.message);
        this.aluService.refillAlumnos();
        setTimeout(function () {
            _this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
            _this.aluService.clearStorageAlumnos();
            console.log(_this.alumnos);
            for (var _i = 0, _a = _this.alumnos; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a.NIA === _this.message.idAlumno) {
                    _this.alumno = a;
                    break;
                }
            }
            console.log(_this.alumno);
            if (_this.alumno.CorreoA === "" || _this.alumno.CorreoA === null)
                _this.compMailA = false;
            if (_this.alumno.CorreoP === "" || _this.alumno.CorreoP === null)
                _this.compMailP = false;
            if (_this.alumno.CorreoM === "" || _this.alumno.CorreoM === null)
                _this.compMailM = false;
            if (_this.alumno.TelefonoA === "" || _this.alumno.TelefonoA === null)
                _this.compTlfA = false;
            if (_this.alumno.TelefonoP === "" || _this.alumno.TelefonoP === null)
                _this.compTlfP = false;
            if (_this.alumno.TelefonoM === "" || _this.alumno.TelefonoM === null)
                _this.compTlfM = false;
        }, 500);
    };
    VerMensajePage.prototype.ngOnInit = function () {
    };
    VerMensajePage.prototype.sendMailP = function () {
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        var email = {
            app: 'gmail',
            to: this.alumno.CorreoP,
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Faltas de asistencia - SOLVAM',
            body: this.textMess,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    VerMensajePage.prototype.sendMailM = function () {
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        var email = {
            app: 'gmail',
            to: this.alumno.CorreoM,
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Faltas de asistencia - SOLVAM',
            body: this.textMess,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    VerMensajePage.prototype.sendMailA = function () {
        this.emailComposer.addAlias('gmail', 'com.google.android.gm');
        var email = {
            app: 'gmail',
            to: this.alumno.CorreoA,
            cc: '',
            bcc: [],
            attachments: [],
            subject: 'Faltas de asistencia - SOLVAM',
            body: this.textMess,
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    VerMensajePage.prototype.sendWhatsP = function () {
        //https://api.whatsapp.com/send?phone=34646849137&text=Mensaje%20de%20Prueba%20-%20Lorenzo.
        window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoP + "&text=" + this.message.textoMensaje);
    };
    VerMensajePage.prototype.sendWhatsM = function () {
        window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoM + "&text=" + this.message.textoMensaje);
    };
    VerMensajePage.prototype.sendWhatsA = function () {
        window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoA + "&text=" + this.message.textoMensaje);
    };
    VerMensajePage.prototype.archivarMensaje = function () {
        this.messService.sendMessage({ idMess: this.message.MensajeId });
        this.presentLoading3();
    };
    VerMensajePage.prototype.goToMensajesEnviados = function () {
        this.router.navigateByUrl('/mensajes-enviados');
    };
    VerMensajePage.prototype.goToMensajes = function () {
        this.router.navigateByUrl('/mensajes');
    };
    //Fin comprobaciones
    VerMensajePage.prototype.presentLoading3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Archivando mensaje, por favor espere...',
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
                        this.showToast();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerMensajePage.prototype.showToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: "Mensaje archivado en mensajes enviados",
                            duration: 3000,
                            position: 'bottom',
                            color: 'success'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerMensajePage.prototype.closeSession = function () {
        this.router.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    VerMensajePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__["AlumnosService"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_Services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
    ]; };
    VerMensajePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-mensaje',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ver-mensaje.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ver-mensaje/ver-mensaje.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ver-mensaje.page.scss */ "./src/app/ver-mensaje/ver-mensaje.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__["AlumnosService"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_Services_messages_service__WEBPACK_IMPORTED_MODULE_5__["MessagesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
    ], VerMensajePage);
    return VerMensajePage;
}());



/***/ })

}]);
//# sourceMappingURL=ver-mensaje-ver-mensaje-module.js.map