(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eliminar-matricula-eliminar-matricula-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-matricula/eliminar-matricula.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-matricula/eliminar-matricula.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Eliminar matricula</ion-title>\n    <ion-back-button defaultHref=\"/admin-alumno\" slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Curso</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getIdCur($event)\" [(ngModel)]=\"curso\">\n      <ion-select-option *ngFor=\"let cur of cursos\" value=\"{{cur.Nombre}}\">{{cur.NombreSolvam}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"curso !== undefined\">\n    <ion-label>Asignaturas</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getIdAsig($event)\">\n      <div *ngFor=\"let asig of asignaturas\">\n        <ion-select-option *ngIf=\"asig.ProfesorId === userId && userType === 'Profesor'\" value=\"{{asig.id}}\">{{asig.NombreAsig}}</ion-select-option>\n        <ion-select-option *ngIf=\"userType === 'ProfAdmin' || userType === 'Administrativo'\" value=\"{{asig.id}}\">{{asig.NombreAsig}}</ion-select-option>\n      </div>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"asignatura !== undefined\">\n    <ion-label>Alumno</ion-label>\n    <ion-select placeholder=\"Selecciona uno\" (ionChange)=\"getId($event)\" [(ngModel)]=\"matriculado\">\n      <ion-select-option *ngFor=\"let mat of matriculas\" value=\"{{mat.Id}}\">{{mat.Apellido1}} ,{{mat.Nombre}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-button expand=\"block\" class=\"iconDeleteMatriculado\" color=\"danger\" (click)=\"deleteMatriculado()\" *ngIf=\"matriculado !== undefined\">\n    <ion-icon name=\"trash-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n");

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

/***/ "./src/app/eliminar-matricula/eliminar-matricula-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/eliminar-matricula/eliminar-matricula-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EliminarMatriculaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarMatriculaPageRoutingModule", function() { return EliminarMatriculaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _eliminar_matricula_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eliminar-matricula.page */ "./src/app/eliminar-matricula/eliminar-matricula.page.ts");




var routes = [
    {
        path: '',
        component: _eliminar_matricula_page__WEBPACK_IMPORTED_MODULE_3__["EliminarMatriculaPage"]
    }
];
var EliminarMatriculaPageRoutingModule = /** @class */ (function () {
    function EliminarMatriculaPageRoutingModule() {
    }
    EliminarMatriculaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EliminarMatriculaPageRoutingModule);
    return EliminarMatriculaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/eliminar-matricula/eliminar-matricula.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/eliminar-matricula/eliminar-matricula.module.ts ***!
  \*****************************************************************/
/*! exports provided: EliminarMatriculaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarMatriculaPageModule", function() { return EliminarMatriculaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _eliminar_matricula_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eliminar-matricula-routing.module */ "./src/app/eliminar-matricula/eliminar-matricula-routing.module.ts");
/* harmony import */ var _eliminar_matricula_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eliminar-matricula.page */ "./src/app/eliminar-matricula/eliminar-matricula.page.ts");







var EliminarMatriculaPageModule = /** @class */ (function () {
    function EliminarMatriculaPageModule() {
    }
    EliminarMatriculaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _eliminar_matricula_routing_module__WEBPACK_IMPORTED_MODULE_5__["EliminarMatriculaPageRoutingModule"]
            ],
            declarations: [_eliminar_matricula_page__WEBPACK_IMPORTED_MODULE_6__["EliminarMatriculaPage"]]
        })
    ], EliminarMatriculaPageModule);
    return EliminarMatriculaPageModule;
}());



/***/ }),

/***/ "./src/app/eliminar-matricula/eliminar-matricula.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/eliminar-matricula/eliminar-matricula.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".iconDeleteMatriculado {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpbWluYXItbWF0cmljdWxhL0Y6XFxEQVdcXHByb3llY3RvRmluYWxcXFNvbHZhbUZhdWx0ZXIvc3JjXFxhcHBcXGVsaW1pbmFyLW1hdHJpY3VsYVxcZWxpbWluYXItbWF0cmljdWxhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZWxpbWluYXItbWF0cmljdWxhL2VsaW1pbmFyLW1hdHJpY3VsYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lbGltaW5hci1tYXRyaWN1bGEvZWxpbWluYXItbWF0cmljdWxhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uRGVsZXRlTWF0cmljdWxhZG97XHJcbiAgICBtYXJnaW46NSU7XHJcbn0iLCIuaWNvbkRlbGV0ZU1hdHJpY3VsYWRvIHtcbiAgbWFyZ2luOiA1JTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/eliminar-matricula/eliminar-matricula.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/eliminar-matricula/eliminar-matricula.page.ts ***!
  \***************************************************************/
/*! exports provided: EliminarMatriculaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EliminarMatriculaPage", function() { return EliminarMatriculaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var EliminarMatriculaPage = /** @class */ (function () {
    function EliminarMatriculaPage(matService, aluService, asigService, alertController, loadCtrl, toastCtrl, route, activeRoute) {
        this.matService = matService;
        this.aluService = aluService;
        this.asigService = asigService;
        this.alertController = alertController;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.activeRoute = activeRoute;
        //Variable matriculas
        this.matriculas = [];
        this.asignaturas = [];
        this.cursos = [];
    }
    EliminarMatriculaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.users = JSON.parse(sessionStorage.getItem("User"));
        this.userId = this.users.id;
        console.log(this.userId);
        this.userType = this.activeRoute.snapshot.paramMap.get('userType');
        console.log(this.userType);
        this.aluService.refillCurso();
        setTimeout(function () {
            _this.cursos = JSON.parse(localStorage.getItem("Cursos"));
            _this.aluService.clearStorageCurso();
        }, 500);
    };
    EliminarMatriculaPage.prototype.getId = function ($event) {
        console.log($event.detail.value);
        this.idMatriculado = parseInt($event.detail.value);
    };
    EliminarMatriculaPage.prototype.getIdCur = function ($event) {
        var _this = this;
        this.idCurso = $event.detail.value;
        console.log(this.curso);
        this.asigService.refillAsignaturasCurso(this.curso);
        setTimeout(function () {
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            console.log(_this.asignaturas);
            _this.asigService.clearStorageAsig();
        }, 500);
    };
    EliminarMatriculaPage.prototype.getIdAsig = function ($event) {
        var _this = this;
        this.idAsig = $event.detail.value;
        console.log(this.idAsig);
        for (var _i = 0, _a = this.asignaturas; _i < _a.length; _i++) {
            var i = _a[_i];
            if (this.idAsig === i.id) {
                this.asignatura = i.NombreAsig;
                break;
            }
        }
        console.log(this.asignatura);
        this.matService.setStorageComp(this.asignatura);
        setTimeout(function () {
            _this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
            console.log(_this.matriculas);
            _this.matService.clearStorageMat();
        }, 500);
    };
    EliminarMatriculaPage.prototype.deleteMatriculado = function () {
        if (this.idMatriculado === undefined) {
            this.presentErrorToast();
        }
        else {
            var json = {
                IdMatricula: this.idMatriculado,
                idAsig: this.idAsig
            };
            this.matService.deleteMensajeMat(json);
            this.presentAlertConfirm();
        }
    };
    EliminarMatriculaPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmacion de eliminacion',
                            message: '¿Quiere usted eliminar esta matricula?',
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
                                        _this.matService.deleteMat(_this.idMatriculado);
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
    EliminarMatriculaPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadCtrl.create({
                            message: 'Borrando la matricula. Por favor espere...',
                            duration: 2000
                        })];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        this.matService.setStorageComp(this.asignatura);
                        setTimeout(function () {
                            _this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
                            console.log(_this.matriculas);
                            _this.matService.clearStorageMat();
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _b.sent(), role = _a.role, data = _a.data;
                        this.presentToast();
                        this.asignatura = undefined;
                        this.matriculado = undefined;
                        this.curso = undefined;
                        this.route.navigate(['/admin-alumno', { userType: this.userType }]);
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    EliminarMatriculaPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La matricula fue eliminada.',
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
    EliminarMatriculaPage.prototype.presentCancelToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'La matricula no fue eliminada.',
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
    EliminarMatriculaPage.prototype.presentErrorToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Seleccione primero una matricula.',
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
    EliminarMatriculaPage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        sessionStorage.removeItem("User");
    };
    EliminarMatriculaPage.ctorParameters = function () { return [
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoMatriculaService"] },
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_5__["AlumnosService"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    EliminarMatriculaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eliminar-matricula',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./eliminar-matricula.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eliminar-matricula/eliminar-matricula.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./eliminar-matricula.page.scss */ "./src/app/eliminar-matricula/eliminar-matricula.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_3__["AlumnoMatriculaService"],
            src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_5__["AlumnosService"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_2__["AsignaturasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EliminarMatriculaPage);
    return EliminarMatriculaPage;
}());



/***/ })

}]);
//# sourceMappingURL=eliminar-matricula-eliminar-matricula-module.js.map