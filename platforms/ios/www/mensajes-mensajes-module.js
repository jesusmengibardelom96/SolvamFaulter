(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mensajes-mensajes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"resetArray()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mensajes\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"filters()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"comp2\">\n    <ion-item>\n      <ion-searchbar animated placeholder=\"Buscar...\" [(ngModel)]=\"search\" (ionChange)=\"findMessage()\"></ion-searchbar>\n    </ion-item>\n    <ion-item>\n      <ion-datetime [(ngModel)]=\"today\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today2}}\"></ion-datetime>\n    </ion-item>\n    <ion-button (click)=\"findByFecha()\" expand=\"block\">Buscar fecha</ion-button>\n    <ion-button (click)=\"deleteFilters()\" expand=\"block\" color=\"danger\">Borrar filtros</ion-button>\n  </ng-container>\n  <ng-container *ngIf=\"messages2.length === 0; else ElseBlock\">\n    <ion-item>\n      <ion-title> No hay mensajes </ion-title>\n    </ion-item>\n  </ng-container>\n  <ng-template #ElseBlock>\n    <ion-card *ngFor=\"let m of messages2\">\n      <ion-item>\n        <ion-label>{{m.fecha}}</ion-label>\n        <ion-button slot=\"end\" (click)=\"seeMessage(m)\">Detalles</ion-button>\n      </ion-item>\n\n      <ion-card-content>{{m.textoMensaje}}</ion-card-content>\n\n      <ion-item>\n        <!--<ion-button slot=\"end\" (click)=\"seeMessage(m)\">Detalles</ion-button>-->\n        <ion-button slot=\"end\" (click)=\"deleteMessage(m)\" color=\"danger\">Borrar</ion-button>\n        <ion-button slot=\"end\" (click)=\"archivarMensaje(m)\" color=\"success\">Archivar</ion-button>\n      </ion-item>\n    </ion-card>\n  </ng-template>\n</ion-content>");

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

/***/ "./src/app/mensajes/mensajes-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mensajes/mensajes-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MensajesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageRoutingModule", function() { return MensajesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/mensajes/mensajes.page.ts");




var routes = [
    {
        path: '',
        component: _mensajes_page__WEBPACK_IMPORTED_MODULE_3__["MensajesPage"]
    }
];
var MensajesPageRoutingModule = /** @class */ (function () {
    function MensajesPageRoutingModule() {
    }
    MensajesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MensajesPageRoutingModule);
    return MensajesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/mensajes/mensajes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/mensajes/mensajes.module.ts ***!
  \*********************************************/
/*! exports provided: MensajesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageModule", function() { return MensajesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mensajes-routing.module */ "./src/app/mensajes/mensajes-routing.module.ts");
/* harmony import */ var _mensajes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensajes.page */ "./src/app/mensajes/mensajes.page.ts");







var MensajesPageModule = /** @class */ (function () {
    function MensajesPageModule() {
    }
    MensajesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _mensajes_routing_module__WEBPACK_IMPORTED_MODULE_5__["MensajesPageRoutingModule"]
            ],
            declarations: [_mensajes_page__WEBPACK_IMPORTED_MODULE_6__["MensajesPage"]]
        })
    ], MensajesPageModule);
    return MensajesPageModule;
}());



/***/ }),

/***/ "./src/app/mensajes/mensajes.page.scss":
/*!*********************************************!*\
  !*** ./src/app/mensajes/mensajes.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  float: left;\n  margin-right: 5%;\n}\n\n.itemFixed {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVuc2FqZXMvRjpcXERBV1xccHJveWVjdG9GaW5hbFxcU29sdmFtRmF1bHRlci9zcmNcXGFwcFxcbWVuc2FqZXNcXG1lbnNhamVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVuc2FqZXMvbWVuc2FqZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbWVuc2FqZXMvbWVuc2FqZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuLml0ZW1GaXhlZHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxufSIsImlvbi1sYWJlbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuXG4uaXRlbUZpeGVkIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mensajes/mensajes.page.ts":
/*!*******************************************!*\
  !*** ./src/app/mensajes/mensajes.page.ts ***!
  \*******************************************/
/*! exports provided: MensajesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPage", function() { return MensajesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_Services_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/messages.service */ "./src/Services/messages.service.ts");
/* harmony import */ var src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/insertar-faltas.service */ "./src/Services/insertar-faltas.service.ts");
/* harmony import */ var src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/delete-faltas.service */ "./src/Services/delete-faltas.service.ts");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/Services/usaurios.service */ "./src/Services/usaurios.service.ts");










var MensajesPage = /** @class */ (function () {
    function MensajesPage(menu, messService, delFalta, matService, faltasService, loadingController, asigService, usuService, alertController, toastController, router) {
        this.menu = menu;
        this.messService = messService;
        this.delFalta = delFalta;
        this.matService = matService;
        this.faltasService = faltasService;
        this.loadingController = loadingController;
        this.asigService = asigService;
        this.usuService = usuService;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.edit = false;
        this.messages2 = [];
        this.comp = false;
        this.search = "";
        this.comp2 = false;
    }
    MensajesPage.prototype.ionViewWillEnter = function () {
        this.rechargeArrayOFMessages();
        this.today = new Date().toISOString().substring(0, 10);
        this.today2 = new Date().toISOString().substring(0, 10);
    };
    MensajesPage.prototype.ngOnInit = function () {
    };
    MensajesPage.prototype.filters = function () {
        if (this.comp2) {
            this.comp2 = false;
        }
        else {
            this.comp2 = true;
        }
    };
    MensajesPage.prototype.editMessages = function () {
        if (this.edit === false)
            this.edit = true;
        else
            this.edit = false;
    };
    MensajesPage.prototype.deleteMessage = function (mess) {
        this.presentAlertConfirm(mess);
    };
    MensajesPage.prototype.findMessage = function () {
        this.resetArrayFindField();
        var messagesFind = this.messages2;
        this.messages2 = [];
        console.log(this.search);
        if (this.search.trim() === '') {
            this.resetArrayFindField();
        }
        else {
            for (var _i = 0, messagesFind_1 = messagesFind; _i < messagesFind_1.length; _i++) {
                var m = messagesFind_1[_i];
                if (m.textoMensaje.toLowerCase().includes(this.search.toLowerCase()))
                    this.messages2.push(m);
            }
        }
    };
    MensajesPage.prototype.findByFecha = function () {
        this.resetArrayFindField();
        var messagesFind = this.messages2;
        this.messages2 = [];
        var dateToday = this.parseDate(this.today);
        for (var _i = 0, messagesFind_2 = messagesFind; _i < messagesFind_2.length; _i++) {
            var m = messagesFind_2[_i];
            if (m.fecha === dateToday)
                this.messages2.push(m);
        }
    };
    MensajesPage.prototype.resetArray = function () {
        this.comp2 = false;
        this.messages2 = [];
        this.messages2 = this.recoverMess;
        this.search = "";
        this.today = new Date().toISOString().substring(0, 10);
    };
    MensajesPage.prototype.deleteFilters = function () {
        this.messages2 = [];
        this.messages2 = this.recoverMess;
        this.search = "";
        this.today = new Date().toISOString().substring(0, 10);
    };
    MensajesPage.prototype.resetArrayFindField = function () {
        this.messages2 = [];
        this.messages2 = this.recoverMess;
    };
    MensajesPage.prototype.rechargeArrayOFMessages = function () {
        var _this = this;
        this.messages2 = [];
        this.user = JSON.parse(sessionStorage.getItem("User"));
        this.userType = this.user.type;
        this.matService.setStorageMat();
        this.messService.refillMessagesNoEnv();
        this.asigService.refillAsignaturas();
        this.usuService.refillUsuarios();
        this.presentLoading3();
        setTimeout(function () {
            _this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            _this.messages = JSON.parse(localStorage.getItem("Mensajes"));
            _this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
            _this.matService.clearStorageMat();
            _this.messService.clearStorageMess();
            _this.usuService.clearStorageUsu();
            _this.asigService.clearStorageAsig();
            if (_this.messages.length !== 0) {
                for (var _i = 0, _a = _this.messages; _i < _a.length; _i++) {
                    var m = _a[_i];
                    m.fecha = _this.parseDate(m.fecha);
                }
                for (var _b = 0, _c = _this.messages; _b < _c.length; _b++) {
                    var m = _c[_b];
                    for (var _d = 0, _e = _this.asignaturas; _d < _e.length; _d++) {
                        var a = _e[_d];
                        if (a.ProfesorId === _this.user.id && _this.user.type === "Profesor") {
                            console.log("Entro 1");
                            if (a.id === m.idAsig) {
                                console.log("Entro 2");
                                var json = {
                                    fecha: m.fecha,
                                    textoMensaje: m.textoMensaje,
                                    idAlumno: m.idAlumno,
                                    MensajeId: m.MensajeId,
                                    idAsig: m.idAsig,
                                    HorasFaltadas: m.HorasFaltadas
                                };
                                _this.messages2.push(json);
                            }
                        }
                        else if (_this.user.type === "ProfAdmin") {
                            _this.messages2 = _this.messages;
                        }
                    }
                }
            }
            _this.recoverMess = _this.messages2;
        }, 1500);
    };
    //Agrega 0 en caso de que el dia u el mes no supere las 2 cifras
    MensajesPage.prototype.padLeft = function (n) {
        return ("00" + n).slice(-2);
    };
    //Parsea la fecha para que se vea en el formato español
    MensajesPage.prototype.parseDate = function (date) {
        var d = new Date(date), dformat = [this.padLeft(d.getDate()),
            this.padLeft(d.getMonth() + 1),
            d.getFullYear()
        ].join('/');
        return dformat;
    };
    MensajesPage.prototype.seeMessage = function (m) {
        this.router.navigate(['/ver-mensaje', { mess: JSON.stringify(m) }]);
    };
    MensajesPage.prototype.presentAlertConfirm = function (mess) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Desea eliminar este mensaje?',
                            message: 'Al eliminar este mensaje se actualizaran las horas del matriculado en cuestion ¿Continuar?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.presentCancelToast();
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        for (var _i = 0, _a = _this.matriculados; _i < _a.length; _i++) {
                                            var i = _a[_i];
                                            if (i.Id_Alumno === mess.idAlumno && i.Id_Asignatura === mess.idAsig) {
                                                console.log("Mensaje Eliminado " + (parseInt(i.HorasFaltadasTotales) - parseInt(mess.HorasFaltadas)));
                                                var horasResta = parseInt(i.HorasFaltadasTotales) - parseInt(mess.HorasFaltadas);
                                                var json = {
                                                    horasTotales: horasResta,
                                                    idAlumno: mess.idAlumno,
                                                    idAsig: mess.idAsig
                                                };
                                                _this.faltasService.insertFaltas(json);
                                                _this.delFalta.deleteFaltas({ MensajeId: mess.MensajeId });
                                                break;
                                            }
                                        }
                                        _this.presentLoadingWithOptions();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MensajesPage.prototype.presentLoadingWithOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            duration: 2000,
                            message: 'Borrando el mensaje, por favor espere...',
                            translucent: true,
                            cssClass: 'custom-class custom-loading',
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        this.rechargeArrayOFMessages();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.presentToast();
                        return [2 /*return*/];
                }
            });
        });
    };
    MensajesPage.prototype.archivarMensaje = function (m) {
        this.messService.sendMessage({ idMess: m.MensajeId });
        this.presentLoading4();
    };
    MensajesPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Este mensaje fue eliminado',
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
    MensajesPage.prototype.presentArchiveToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Este mensaje fue archivado',
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
    MensajesPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Este mensaje no fue eliminado.',
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
    MensajesPage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    MensajesPage.prototype.showNavOption = function () {
        if (!this.comp)
            this.comp = true;
        else
            this.comp = false;
    };
    MensajesPage.prototype.goToMensajesEnviados = function () {
        this.router.navigateByUrl("/mensajes-enviados");
        this.comp = false;
    };
    MensajesPage.prototype.goToPerfil = function () {
        this.router.navigateByUrl("/perfil");
        this.comp = false;
    };
    MensajesPage.prototype.presentLoading3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
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
    MensajesPage.prototype.presentLoading4 = function () {
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
                        this.rechargeArrayOFMessages();
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        console.log('Loading dismissed!');
                        this.presentArchiveToast();
                        return [2 /*return*/];
                }
            });
        });
    };
    MensajesPage.prototype.closeSession = function () {
        this.router.navigateByUrl("/login");
        sessionStorage.removeItem("User");
        this.search = "";
        this.today = new Date().toISOString().substring(0, 10);
        this.comp2 = false;
    };
    MensajesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_Services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
        { type: src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_5__["DeleteFaltasService"] },
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_6__["AlumnoMatriculaService"] },
        { type: src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_4__["InsertarFaltasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_8__["AsignaturasService"] },
        { type: src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_9__["UsauriosService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    MensajesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensajes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mensajes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/mensajes.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mensajes.page.scss */ "./src/app/mensajes/mensajes.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_Services_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_5__["DeleteFaltasService"],
            src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_6__["AlumnoMatriculaService"],
            src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_4__["InsertarFaltasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_8__["AsignaturasService"],
            src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_9__["UsauriosService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], MensajesPage);
    return MensajesPage;
}());



/***/ })

}]);
//# sourceMappingURL=mensajes-mensajes-module.js.map