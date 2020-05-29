(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"navigation()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"titleFloat\">\n      Horarios y sesiones\n    </ion-title>\n    <ion-buttons slot=\"end\" color=\"danger\">\n      <ion-button (click)=\"closeSession()\" color=\"danger\">\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Pasar lista -->\n  <ion-list>\n    <ng-container *ngFor=\"let a of asignaturas\">\n      <ion-item class=\"items\"  *ngIf=\"a.ProfesorId === idUsu && (profTipo === 'Profesor' || profTipo === 'ProfAdmin')\">\n        <ion-title class=\"asigTitle\">{{a.NombreAsig}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"showAlumnos(a.NombreAsig)\" color=\"primary\">\n            <ion-icon src=\"./assets/clipboard-list-solid.svg\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"showAlumnosFaltas(a.NombreAsig)\" color=\"danger\">\n            <ion-icon name=\"trash-bin-outline\"></ion-icon>\n          </ion-button>\n          <ion-button (click)=\"showAlumnosFaltasTotales(a.NombreAsig)\" color=\"danger\">\n            <ion-icon src=\"./assets/filter-solid.svg\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-item>\n\n      <ng-container *ngIf=\"comp === true && a.NombreAsig === nombAsig && comp2 === false\">\n        <ion-item>\n          <ion-datetime [(ngModel)]=\"today\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today3}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Horas</ion-label>\n          <ion-select [(ngModel)]=\"hours\" okText=\"Ok\" cancelText=\"Cancelar\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"0.33\">R</ion-select-option>\n            <ion-select-option value=\"0\">E</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngFor=\"let m of matriculados\">\n          <ion-label class=\"alumno\">{{m.Apellido1}}, {{m.Nombre}}</ion-label>\n          <ion-checkbox class=\"checkboxLeft\" (click)=\"selectAlumno(m)\" slot=\"start\"></ion-checkbox>\n        </ion-item>\n        <ion-button color=\"success\" (click)=\"saveFaltasAlumnos()\" class=\"sendButton\" expand=\"block\">\n          <ion-icon src=\"./assets/paper-plane-solid.svg\"></ion-icon>\n        </ion-button>\n      </ng-container>\n      <ng-container *ngIf=\"comp === true && a.NombreAsig === nombAsig && comp2 === true\">\n        <ion-item>\n          <ion-title>\n            No hay alumnos\n          </ion-title>\n        </ion-item>\n      </ng-container>\n\n      <!-- Pasar filtro -->\n      <ng-container *ngIf=\"compFiltro === true && a.NombreAsig === nombAsig && compAlumnos === false\">\n        <ion-item>\n          <ion-label>Fecha inicio: </ion-label>\n          <ion-datetime [(ngModel)]=\"today\" (change)=\"fechaIniComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today3}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fecha fin: </ion-label>\n          <ion-datetime [(ngModel)]=\"today2\" (change)=\"fechaFinComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today4}}\"></ion-datetime>\n        </ion-item>\n\n        <ion-button color=\"success\" (click)=\"sendQueryFaltas()\" class=\"sendButton\" expand=\"block\">\n          <ion-icon name=\"search-circle-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n\n        <ion-item *ngFor=\"let af of alumnosFaltas\" >\n          <ion-label *ngIf=\"af.HorasFaltadas !== '0.00' && af.HorasFaltadas !== '0.33'\">{{af.Apellido1}}, {{af.Nombre}} - {{af.prueba}} - {{af.fecha}}</ion-label>\n          <ion-label *ngIf=\"af.HorasFaltadas === '0.33'\" color=\"primary\">{{af.Apellido1}}, {{af.Nombre}} - {{af.fecha}} R</ion-label>\n          <ion-label *ngIf=\"af.HorasFaltadas === '0.00'\" color=\"danger\">{{af.Apellido1}}, {{af.Nombre}} - {{af.fecha}} E</ion-label>\n          <!--<ion-checkbox class=\"checkboxLeft\" (click)=\"selectAlumno2(af)\" slot=\"start\"></ion-checkbox>-->\n          <ion-button color=\"danger\" (click)=\"iscompDelete(af)\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ng-container>\n      <ng-container *ngIf=\"compFiltro === true && a.NombreAsig === nombAsig && compAlumnos === true\">\n        <ion-item>\n          <ion-label>Fecha inicio: </ion-label>\n          <ion-datetime [(ngModel)]=\"today\" (change)=\"fechaIniComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today3}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fecha fin: </ion-label>\n          <ion-datetime [(ngModel)]=\"today2\" (change)=\"fechaFinComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today4}}\"></ion-datetime>\n        </ion-item>\n\n        <ion-button color=\"success\" (click)=\"sendQueryFaltas()\" class=\"sendButton\" expand=\"block\">\n          <ion-icon name=\"search-circle-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-item>\n          <ion-title>\n            No hay faltas\n          </ion-title>\n        </ion-item>\n      </ng-container>\n      <!-- filtro faltas -->\n      <ng-container *ngIf=\"compFiltro2 === true && a.NombreAsig === nombAsig && compAlumnos2 === false\">\n        <ion-item>\n          <ion-label>Fecha inicio: </ion-label>\n          <ion-datetime [(ngModel)]=\"today\" (change)=\"fechaIniComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today3}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fecha fin: </ion-label>\n          <ion-datetime [(ngModel)]=\"today2\" (change)=\"fechaFinComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today4}}\"></ion-datetime>\n        </ion-item>\n\n        <ion-button color=\"success\" (click)=\"sendQueryFaltasTotales()\" class=\"sendButton\" expand=\"block\">\n          <ion-icon name=\"search-circle-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n\n        <ion-item *ngFor=\"let af of alumnosFaltas\" >\n          <ion-label>{{af.Apellido1}}, {{af.Nombre}} - {{af.horasTotales}} Horas</ion-label>\n          <!--<ion-checkbox class=\"checkboxLeft\" (click)=\"selectAlumno2(af)\" slot=\"start\"></ion-checkbox>-->\n        </ion-item>\n      </ng-container>\n      <ng-container *ngIf=\"compFiltro2 === true && a.NombreAsig === nombAsig && compAlumnos2 === true\">\n        <ion-item>\n          <ion-label>Fecha inicio: </ion-label>\n          <ion-datetime [(ngModel)]=\"today\" (change)=\"fechaIniComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today3}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>Fecha fin: </ion-label>\n          <ion-datetime [(ngModel)]=\"today2\" (change)=\"fechaFinComp()\" displayFormat=\"DD MMM de YYYY\" monthShortNames=\"Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre\" max=\"{{today4}}\"></ion-datetime>\n        </ion-item>\n\n        <ion-button color=\"success\" (click)=\"sendQueryFaltasTotales()\" class=\"sendButton\" expand=\"block\">\n          <ion-icon name=\"search-circle-outline\" size=\"large\"></ion-icon>\n        </ion-button>\n        <ion-item>\n          <ion-title>\n            No hay faltas\n          </ion-title>\n        </ion-item>\n      </ng-container>\n    </ng-container>\n  </ion-list>\n</ion-content>");

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

/***/ "./src/Services/alumnos-faltas.service.ts":
/*!************************************************!*\
  !*** ./src/Services/alumnos-faltas.service.ts ***!
  \************************************************/
/*! exports provided: AlumnosFaltasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlumnosFaltasService", function() { return AlumnosFaltasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AlumnosFaltasService = /** @class */ (function () {
    function AlumnosFaltasService(http) {
        this.http = http;
    }
    AlumnosFaltasService.prototype.getFaltasAlumno = function (date1, date2, nombreAsig) {
        localStorage.removeItem("Faltas");
        var jsonAsig = {
            fechaInicio: date1,
            fechaFin: date2,
            nombAsig: nombreAsig
        };
        this.http.post('https://www.solvam.es/app/php/db_comp_faltas.php', JSON.stringify(jsonAsig), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Faltas", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnosFaltasService.prototype.getFaltasAlumnoTotales = function (date1, date2, nombreAsig) {
        localStorage.removeItem("Faltas");
        var jsonAsig = {
            fechaInicio: date1,
            fechaFin: date2,
            nombAsig: nombreAsig
        };
        this.http.post('https://www.solvam.es/app/php/db_comp_faltasTotales.php', JSON.stringify(jsonAsig), { observe: 'body' })
            .subscribe(function (res) {
            localStorage.setItem("Faltas", JSON.stringify(res));
        }, function (err) {
            console.log("Error!");
        });
    };
    AlumnosFaltasService.prototype.clearStorageFal = function () {
        localStorage.removeItem("Faltas");
    };
    AlumnosFaltasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AlumnosFaltasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AlumnosFaltasService);
    return AlumnosFaltasService;
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

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-datetime {\n  text-align: center;\n}\n\n.asigTitle {\n  text-align: left;\n  -webkit-padding-start: 10px !important;\n          padding-inline-start: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcREFXXFxwcm95ZWN0b0ZpbmFsXFxTb2x2YW1GYXVsdGVyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZGF0ZXRpbWV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXNpZ1RpdGxle1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuIiwiaW9uLWRhdGV0aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYXNpZ1RpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/alumnos.service */ "./src/Services/alumnos.service.ts");
/* harmony import */ var src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/asignaturas.service */ "./src/Services/asignaturas.service.ts");
/* harmony import */ var src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/Services/alumno-matricula.service */ "./src/Services/alumno-matricula.service.ts");
/* harmony import */ var src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/Services/usaurios.service */ "./src/Services/usaurios.service.ts");
/* harmony import */ var src_Services_alumnos_faltas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/Services/alumnos-faltas.service */ "./src/Services/alumnos-faltas.service.ts");
/* harmony import */ var src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Services/insertar-faltas.service */ "./src/Services/insertar-faltas.service.ts");
/* harmony import */ var src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/Services/delete-faltas.service */ "./src/Services/delete-faltas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//Controladores y servicios

//Servicio de alumnos

//Servicio de asignaturas

//Servicio de AlumnosMatricula

//Servicio de usuarios (Profesores)

//Servicio de AlumnosFaltas

//Servicio para Insertar faltas



var HomePage = /** @class */ (function () {
    //Fin variables
    function HomePage(menu, alumnoService, asigService, matService, usuService, aluFaltas, alert, toast, insertarFaltas, loadingController, deleteFaltas, route) {
        this.menu = menu;
        this.alumnoService = alumnoService;
        this.asigService = asigService;
        this.matService = matService;
        this.usuService = usuService;
        this.aluFaltas = aluFaltas;
        this.alert = alert;
        this.toast = toast;
        this.insertarFaltas = insertarFaltas;
        this.loadingController = loadingController;
        this.deleteFaltas = deleteFaltas;
        this.route = route;
        //Inicio variables
        //Variables tabla profesores
        this.profesor = "";
        this.idUsu = 0;
        this.profTipo = "";
        this.profesores = [];
        //Variables de alumnos
        this.alumnos = [];
        this.selected = [];
        this.clicked = "";
        //Variables de asignaturas
        this.asignaturas = [];
        this.nombAsig = "";
        //Array de matriculados
        this.matriculados = [];
        //Array de mensajes
        this.messages = [];
        //Comprobantes para pasar falta
        this.comp = false;
        //Comprobantes para ver las faltas
        this.compFiltro = false;
        this.compAlumnos = false;
        this.compFiltro2 = false;
        this.compAlumnos2 = false;
        //Array de alumnos faltados
        this.alumnosFaltas = [];
        this.faltasRegistradas = [];
        //Comprobantes para borrar faltas
        this.compDelete = false;
        this.hours = "2";
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var users = JSON.parse(sessionStorage.getItem("User"));
        this.profesor = users.user;
        this.usuService.refillUsuarios();
        this.alumnoService.refillAlumnos();
        this.asigService.refillAsignaturas();
        this.asigService.refillMessages();
        this.presentLoading3();
        setTimeout(function () {
            _this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
            _this.alumnoService.clearStorageAlumnos();
            _this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
            _this.asigService.clearStorageAsig();
            _this.messages = JSON.parse(localStorage.getItem("Messages"));
            _this.asigService.clearStorageMess();
            _this.profesores = JSON.parse(localStorage.getItem("Usuarios"));
            for (var _i = 0, _a = _this.profesores; _i < _a.length; _i++) {
                var prof = _a[_i];
                if (prof.NombreUsuario === _this.profesor) {
                    _this.idUsu = prof.id;
                    _this.profTipo = prof.Tipo;
                }
            }
            _this.usuService.clearStorageUsu();
            _this.matService.clearStorageMat();
        }, 1500);
        this.today = new Date().toUTCString().substring(0, 10);
        this.today2 = new Date().toUTCString().substring(0, 10);
        this.today3 = new Date().toISOString().substring(0, 10);
        this.today4 = new Date().toISOString().substring(0, 10);
    };
    //Inicio de la aplicacion
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.navigation = function () {
        this.compFiltro = false;
        this.comp = false;
        this.compFiltro2 = false;
    };
    //Abre el menu
    HomePage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    //Inicio pasar lista
    //Muestra a los alumnos para ponerles falta
    HomePage.prototype.showAlumnos = function (nomAsig) {
        var _this = this;
        this.today = new Date().toISOString().substring(0, 10);
        this.today2 = new Date().toISOString().substring(0, 10);
        var i = 0;
        var j = 0;
        //this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
        if (this.comp === false) {
            this.nombAsig = nomAsig;
            this.asigService.getCompAsig(this.nombAsig);
            setTimeout(function () {
                _this.comp = true;
                _this.compFiltro = false;
                _this.compFiltro2 = false;
                _this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
                _this.matriculados = _this.matriculados.slice();
                if (_this.matriculados.length === 0) {
                    _this.comp2 = true;
                }
                else {
                    _this.comp2 = false;
                }
                _this.matService.clearStorageMat();
            }, 500);
        }
        else {
            this.comp = false;
            this.hours = "2";
            this.matService.clearStorageMat();
        }
    };
    //Crea un array de alumnos seleccionados
    HomePage.prototype.selectAlumno = function (item) {
        if (this.messages.length === 0) {
            if (this.selected.length !== 0 && !item.seleccionado) {
                item.seleccionado = true;
                item.MensajeId = parseInt(this.selected[this.selected.length - 1].MensajeId) + 1;
                this.selected.push(item);
                this.messages.push(item);
            }
            else if (this.selected.length !== 0 && item.seleccionado) {
                item.seleccionado = false;
                var index = this.selected.indexOf(item) - this.selected.length;
                this.selected.splice(index, 1);
                this.messages.splice(index, 1);
            }
            else if (this.selected.length === 0) {
                item.seleccionado = true;
                if (this.messages.length === 0) {
                    item.MensajeId = 1;
                    this.messages.push(item);
                }
                else {
                    item.MensajeId = parseInt(this.messages[this.messages.length - 1].MensajeId) + 1;
                    this.messages.push(item);
                }
                this.selected.push(item);
            }
        }
        else {
            if (this.selected.length !== 0 && !item.seleccionado) {
                item.seleccionado = true;
                item.MensajeId = parseInt(this.selected[this.selected.length - 1].MensajeId) + 1;
                this.selected.push(item);
            }
            else if (this.selected.length !== 0 && item.seleccionado) {
                item.seleccionado = false;
                var index = this.selected.indexOf(item) - this.selected.length;
                this.selected.splice(index, 1);
            }
            else if (this.selected.length === 0) {
                item.seleccionado = true;
                item.MensajeId = parseInt(this.messages[this.messages.length - 1].MensajeId) + 1;
                this.selected.push(item);
            }
            console.log(this.selected);
            console.log(this.messages);
        }
    };
    //Inserta la falta de un alumno en la BBDD y un mensaje
    HomePage.prototype.saveFaltasAlumnos = function () {
        var dateToday = new Date(this.today);
        var textMessage = "";
        var date1 = new Date(this.today);
        var date2 = new Date(this.today2);
        if (+date2 < +date1) {
            this.showErrorToast("FutureDate");
            this.today = new Date().toUTCString().substring(0, 10);
        }
        else {
            if (this.selected.length !== 0) {
                for (var _i = 0, _a = this.selected; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (this.hours === "0.33") {
                        console.log(parseFloat(this.hours) + parseInt(i.HorasFaltadasTotales));
                        textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " se ha retrasado en " + i.NombreAsig + " el día " + this.parseDate(dateToday) + "\n \n Centro FP SOLVAM";
                        var json = {
                            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
                            textoMensaje: textMessage,
                            idMatricula: parseInt(i.Id),
                            horasTotales: (parseFloat(this.hours) + parseInt(i.HorasFaltadasTotales)),
                            horas: parseFloat(this.hours),
                            idAlumno: i.Id_Alumno,
                            idAsig: parseInt(i.Id_Asignatura),
                            idMess: parseInt(i.MensajeId)
                        };
                        this.insertarFaltas.insertFaltas(json);
                        this.insertarFaltas.insertMessage(json);
                    }
                    else if (this.hours === "0") {
                        textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " ha sido expulsado en " + i.NombreAsig + " el día " + this.parseDate(dateToday) + "\n \n Centro FP SOLVAM";
                        var json = {
                            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
                            textoMensaje: textMessage,
                            idMatricula: parseInt(i.Id),
                            horasTotales: (parseInt(this.hours) + parseInt(i.HorasFaltadasTotales)),
                            horas: parseInt(this.hours),
                            idAlumno: i.Id_Alumno,
                            idAsig: parseInt(i.Id_Asignatura),
                            idMess: parseInt(i.MensajeId)
                        };
                        this.insertarFaltas.insertFaltas(json);
                        this.insertarFaltas.insertMessage(json);
                    }
                    else {
                        textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " ha faltado a " + i.NombreAsig + " " + this.hours + " horas el día " + this.parseDate(dateToday) + "\n \n Centro FP SOLVAM";
                        var json = {
                            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
                            textoMensaje: textMessage,
                            idMatricula: parseInt(i.Id),
                            horasTotales: (parseInt(this.hours) + parseInt(i.HorasFaltadasTotales)),
                            horas: parseInt(this.hours),
                            idAlumno: i.Id_Alumno,
                            idAsig: parseInt(i.Id_Asignatura),
                            idMess: parseInt(i.MensajeId)
                        };
                        this.insertarFaltas.insertFaltas(json);
                        this.insertarFaltas.insertMessage(json);
                    }
                }
                this.presentLoading("faltaInsertada");
                this.selected = [];
            }
            else {
                console.log(this.selected);
                this.showErrorToast("selectedVoid");
            }
        }
    };
    //Fin pasar lista
    //Inicio ver Faltas
    //Muestra las faltas de los alumnos en esa asignatura
    HomePage.prototype.showAlumnosFaltas = function (nomAsig) {
        this.hours = "2";
        this.alumnosFaltas = [];
        if (this.compFiltro === false) {
            this.nombAsig = nomAsig;
            this.compFiltro = true;
            this.compAlumnos = false;
            this.compFiltro2 = false;
            this.comp = false;
            this.compDelete = false;
            this.today = new Date().toISOString().substring(0, 10);
            this.today2 = new Date().toISOString().substring(0, 10);
        }
        else {
            this.compFiltro = false;
            this.compFiltro2 = false;
            this.compDelete = true;
        }
    };
    //Recoge los datos de BBDD para mostrar las faltas de los alumnos
    HomePage.prototype.sendQueryFaltas = function () {
        var _this = this;
        this.alumnosFaltas = [];
        var date1 = new Date(this.today);
        var date2 = new Date(this.today2);
        if (+date2 < +date1) {
            this.presentErrorDate();
        }
        else {
            this.aluFaltas.getFaltasAlumno(date1.getFullYear() + '-' + ((date1.getMonth() + 1) < 10 ? '0' + (date1.getMonth() + 1) : (date1.getMonth() + 1)) + '-' + ((date1.getDate() + 1) < 10 ? '0' + (date1.getDate()) : (date1.getDate())), date2.getFullYear() + '-' + ((date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)) + '-' + ((date2.getDate() + 1) < 10 ? '0' + (date2.getDate()) : (date2.getDate())), this.nombAsig);
            setTimeout(function () {
                _this.alumnosFaltas = JSON.parse(localStorage.getItem("Faltas"));
                _this.aluFaltas.clearStorageFal();
                for (var _i = 0, _a = _this.alumnosFaltas; _i < _a.length; _i++) {
                    var i = _a[_i];
                    _this.fechaFaltaAlumno = _this.parseDate(i.fecha);
                    console.log(i);
                    i.fecha = _this.parseDate(i.fecha);
                    i.prueba = parseFloat(i.HorasFaltadas);
                    var cadena = i.Apellido1 + ", " + i.Nombre;
                    i.Nombre = cadena.length > 10 ? i.Nombre.substring(0, 5) + "..." : i.Nombre;
                }
                if (_this.alumnosFaltas.length === 0) {
                    _this.compAlumnos = true;
                    _this.compDelete = false;
                }
                else {
                    _this.compAlumnos = false;
                    _this.compDelete = true;
                }
            }, 500);
        }
    };
    //Comprueba que el campo de fecha inicio sea correcto
    HomePage.prototype.fechaIniComp = function () {
        var date1 = new Date(this.today);
        var date2 = new Date(this.today2);
        if (+date1 > +date2) {
            this.presentErrorDate();
            this.today = new Date().toISOString().substring(0, 10);
        }
    };
    //Comprueba que el campo de fecha fin sea correcto
    HomePage.prototype.fechaFinComp = function () {
        var date1 = new Date(this.today);
        var date2 = new Date(this.today2);
        if (+date2 < +date1) {
            this.presentErrorDate();
            this.today2 = new Date().toISOString().substring(0, 10);
        }
    };
    //Agrega 0 en caso de que el dia u el mes no supere las 2 cifras
    HomePage.prototype.padLeft = function (n) {
        return ("00" + n).slice(-2);
    };
    //Parsea la fecha para que se vea en el formato español
    HomePage.prototype.parseDate = function (date) {
        var d = new Date(date), dformat = [this.padLeft(d.getDate()),
            this.padLeft(d.getMonth() + 1),
            d.getFullYear()
        ].join('/');
        return dformat;
    };
    //Fin ver faltas
    HomePage.prototype.iscompDelete = function (item) {
        if (this.alumnosFaltas.length === 0) {
            this.showErrorToast("compDelete");
        }
        else {
            this.presentCompDelete(item);
        }
    };
    //Inicio Eliminar faltas
    HomePage.prototype.deleteFalta = function (item) {
        var dateToday = new Date(item.fecha);
        var json = {
            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate() + 1) : (dateToday.getDate())),
            idMatricula: item.id,
            idAlumno: item.Id_Alumno,
            horasTotales: (parseInt(item.HorasFaltadasTotales) - parseInt(item.HorasFaltadas)),
            MensajeId: item.MensajeId,
            idAsig: item.Id_Asignatura
        };
        console.log(json);
        this.deleteFaltas.deleteFaltas(json);
        this.deleteFaltas.updateHoras(json);
        this.presentLoading("faltasEliminadas");
    };
    //Fin Eliminar faltas
    HomePage.prototype.showAlumnosFaltasTotales = function (NombreAsig) {
        console.log(this.compFiltro2);
        this.hours = "2";
        this.alumnosFaltas = [];
        if (this.compFiltro2 === false) {
            this.nombAsig = NombreAsig;
            this.compFiltro2 = true;
            this.compFiltro = false;
            this.compAlumnos2 = false;
            this.comp = false;
            this.compDelete = false;
            this.today = new Date().toISOString().substring(0, 10);
            this.today2 = new Date().toISOString().substring(0, 10);
        }
        else {
            console.log("Entro");
            this.compFiltro2 = false;
            this.compDelete = true;
        }
    };
    HomePage.prototype.sendQueryFaltasTotales = function () {
        var _this = this;
        this.alumnosFaltas = [];
        var date1 = new Date(this.today);
        var date2 = new Date(this.today2);
        if (+date2 < +date1) {
            this.presentErrorDate();
        }
        else {
            this.aluFaltas.getFaltasAlumnoTotales(date1.getFullYear() + '-' + ((date1.getMonth() + 1) < 10 ? '0' + (date1.getMonth() + 1) : (date1.getMonth() + 1)) + '-' + ((date1.getDate() + 1) < 10 ? '0' + (date1.getDate()) : (date1.getDate())), date2.getFullYear() + '-' + ((date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)) + '-' + ((date2.getDate() + 1) < 10 ? '0' + (date2.getDate()) : (date2.getDate())), this.nombAsig);
            setTimeout(function () {
                _this.alumnosFaltas = JSON.parse(localStorage.getItem("Faltas"));
                _this.aluFaltas.clearStorageFal();
                for (var _i = 0, _a = _this.alumnosFaltas; _i < _a.length; _i++) {
                    var i = _a[_i];
                    _this.fechaFaltaAlumno = _this.parseDate(i.fecha);
                    console.log(i);
                    i.fecha = _this.parseDate(i.fecha);
                }
                if (_this.alumnosFaltas.length === 0) {
                    _this.compAlumnos2 = true;
                    _this.compDelete = false;
                }
                else {
                    _this.compAlumnos2 = false;
                    _this.compDelete = true;
                }
            }, 500);
        }
    };
    //Inicio comprobaciones
    //Presenta un error alert sobre la fecha cuando aplicas el filtro
    HomePage.prototype.presentErrorDate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Error',
                            subHeader: 'Error en las fechas',
                            message: 'La fecha inicial no puede ser mas grande que la fecha final, compruebe que las fechas estan correctas',
                            buttons: ['Ok']
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
    //Presenta una confirmacion antes de borrar las faltas
    HomePage.prototype.presentCompDelete = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Borrar',
                            subHeader: 'Borrar faltas',
                            message: '¿Esta seguro de que quiere eliminar estas faltas?',
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        _this.deleteFalta(item);
                                    }
                                },
                                {
                                    text: 'Cancelar',
                                    handler: function () {
                                        console.log('Cancelado');
                                    }
                                }]
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
    //Muestra toasts de error
    HomePage.prototype.showErrorToast = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type === "ExceedHours")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toast.create({
                                message: "Numero de horas excedido, minimo 1 maximo 5",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 1:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 2:
                        if (!(type === "FutureDate")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toast.create({
                                message: "Fecha incorrecta, maximo dia posible " + this.today,
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 3:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(type === "faltaInsertada")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toast.create({
                                message: "Faltas insertadas",
                                duration: 3000,
                                position: 'bottom',
                                color: 'success'
                            })];
                    case 5:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 6:
                        if (!(type === "faltasEliminadas")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toast.create({
                                message: "Faltas eliminadas",
                                duration: 3000,
                                position: 'bottom',
                                color: 'success'
                            })];
                    case 7:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 8:
                        if (!(type === "compDelete")) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toast.create({
                                message: "No hay alumnos que seleccionar aqui",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 9:
                        toast = _a.sent();
                        return [3 /*break*/, 12];
                    case 10:
                        if (!(type === "selectedVoid")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toast.create({
                                message: "Seleccione al menos un alumno",
                                duration: 3000,
                                position: 'bottom',
                                color: 'danger'
                            })];
                    case 11:
                        toast = _a.sent();
                        _a.label = 12;
                    case 12:
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Presenta un loader cada vez que hago una gestion en la BBDD
    HomePage.prototype.presentLoading = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date1, date2, loading, _a, role, data, loading, _b, role, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        date1 = new Date(this.today);
                        date2 = new Date(this.today2);
                        if (!(type === "faltaInsertada")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Insertando faltas, por favor espere...',
                                duration: 2000
                            })];
                    case 1:
                        loading = _c.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _c.sent();
                        this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
                        this.asigService.getCompAsig(this.nombAsig);
                        this.asigService.refillMessages();
                        setTimeout(function () {
                            _this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
                            _this.matriculados = _this.matriculados.slice();
                            _this.messages = JSON.parse(localStorage.getItem("Messages"));
                            _this.asigService.clearStorageMess();
                        }, 500);
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 3:
                        _a = _c.sent(), role = _a.role, data = _a.data;
                        console.log(this.matriculados);
                        this.showErrorToast("faltaInsertada");
                        console.log('Loading dismissed!');
                        return [3 /*break*/, 8];
                    case 4:
                        if (!(type === "faltasEliminadas")) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Eliminando faltas, por favor espere...',
                                duration: 2000
                            })];
                    case 5:
                        loading = _c.sent();
                        return [4 /*yield*/, loading.present()];
                    case 6:
                        _c.sent();
                        this.sendQueryFaltas();
                        if (this.alumnosFaltas.length === 0)
                            this.comp2 = false;
                        return [4 /*yield*/, loading.onDidDismiss()];
                    case 7:
                        _b = _c.sent(), role = _b.role, data = _b.data;
                        this.showErrorToast("faltasEliminadas");
                        console.log('Loading dismissed!');
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    //Fin comprobaciones
    HomePage.prototype.presentLoading3 = function () {
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
    HomePage.prototype.closeSession = function () {
        this.route.navigateByUrl("/login");
        this.comp = false;
        this.compFiltro = false;
        sessionStorage.removeItem("User");
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__["AlumnosService"] },
        { type: src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_4__["AsignaturasService"] },
        { type: src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_5__["AlumnoMatriculaService"] },
        { type: src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_6__["UsauriosService"] },
        { type: src_Services_alumnos_faltas_service__WEBPACK_IMPORTED_MODULE_7__["AlumnosFaltasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_8__["InsertarFaltasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_9__["DeleteFaltasService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_Services_alumnos_service__WEBPACK_IMPORTED_MODULE_3__["AlumnosService"],
            src_Services_asignaturas_service__WEBPACK_IMPORTED_MODULE_4__["AsignaturasService"],
            src_Services_alumno_matricula_service__WEBPACK_IMPORTED_MODULE_5__["AlumnoMatriculaService"],
            src_Services_usaurios_service__WEBPACK_IMPORTED_MODULE_6__["UsauriosService"],
            src_Services_alumnos_faltas_service__WEBPACK_IMPORTED_MODULE_7__["AlumnosFaltasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_Services_insertar_faltas_service__WEBPACK_IMPORTED_MODULE_8__["InsertarFaltasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            src_Services_delete_faltas_service__WEBPACK_IMPORTED_MODULE_9__["DeleteFaltasService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map