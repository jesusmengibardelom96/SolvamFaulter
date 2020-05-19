import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/Services/alumnos.service';
import { UploadCSVService } from 'src/Services/upload-csv.service';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';


@Component({
  selector: 'app-insertar-alumno',
  templateUrl: './insertar-alumno.page.html',
  styleUrls: ['./insertar-alumno.page.scss'],
})
export class InsertarAlumnoPage implements OnInit {

  curso2: any;
  nia: number;
  nombreAlumno: string;
  apellidoAlumno1: string;
  apellidoAlumno2: string;
  tlfAlumno: number;
  tlfPadre: number;
  tlfMadre: number;
  mailAlumno: string;
  mailPadre: string;
  mailMadre: string;
  userType: any;
  alumnos: any;
  cursos: any;
  matriculas: any;
  asignaturas: any;

  constructor(private route: Router,
    private alertController: AlertController,
    private loaderCtrl: LoadingController,
    private toast: ToastController,
    private aluService: AlumnosService,
    private csvService: UploadCSVService,
    private asigService: AsignaturasService,
    private matService: AlumnoMatriculaService
  ) { }

  ngOnInit() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userType = users.type;
    this.aluService.refillAlumnos();
    this.aluService.refillCurso();
    this.matService.setStorageMat();

    setTimeout(() => {
      this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
      this.cursos = JSON.parse(localStorage.getItem("Cursos"));
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));

      console.log(this.alumnos);
      console.log(this.matriculas);
      this.aluService.clearStorageAlumnos();
      this.aluService.clearStorageCurso();
      this.matService.clearStorageMat();

    }, 500);
  }

  getCurso2($event) {
    this.asigService.refillAsignaturasCurso($event.detail.value);
    setTimeout(() => {

      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.asigService.clearStorageAsig();
      console.log(this.asignaturas);
    }, 500);
  }

  InsertAlumno() {
    let msg = "";
    let cont = 1;
    if (this.nia === undefined || this.nia === 0) {
      msg = "Error";
    } else {
      if (this.nombreAlumno === "" || this.nombreAlumno === undefined) msg = "Error";
      else {
        if (this.apellidoAlumno1 === "" || this.apellidoAlumno1 === undefined) msg = "Error";
        else {
          if (this.apellidoAlumno2 === "" || this.apellidoAlumno2 === undefined) msg = "Error";
          else {
            if (this.curso2 === undefined) msg = "Error";
            else {
              for (let j of this.asignaturas) {

                if (this.matriculas.length === 0) {
                  let jsonAlumnos = {
                    NIA: this.nia,
                    Nombre: this.nombreAlumno,
                    Apellido1: this.apellidoAlumno1,
                    Apellido2: this.apellidoAlumno2,
                    Grupo: this.curso2,
                    TlfA: this.tlfAlumno,
                    TlfM: this.tlfMadre,
                    TlfP: this.tlfPadre,
                    CorreoA: this.mailAlumno,
                    CorreoM: this.mailMadre,
                    CorreoP: this.mailPadre,
                    Asignatura: parseInt(j.id),
                    Matricula: cont
                  }

                  if (isNaN(jsonAlumnos.TlfA)) jsonAlumnos.TlfA = 0;
                  if (isNaN(jsonAlumnos.TlfM)) jsonAlumnos.TlfM = 0;
                  if (isNaN(jsonAlumnos.TlfP)) jsonAlumnos.TlfP = 0;
                  if (this.mailAlumno === undefined) this.mailAlumno = "";
                  if (this.mailMadre === undefined) this.mailMadre = "";
                  if (this.mailPadre === undefined) this.mailPadre = "";
                  console.log(jsonAlumnos);
                  this.csvService.uploadMatricula(jsonAlumnos);
                  this.csvService.upload(jsonAlumnos);
                  msg = "success";
                  ++cont;
                } else {
                  let jsonAlumnos = {
                    NIA: this.nia,
                    Nombre: this.nombreAlumno,
                    Apellido1: this.apellidoAlumno1,
                    Apellido2: this.apellidoAlumno2,
                    Grupo: this.curso2,
                    TlfA: this.tlfAlumno,
                    TlfM: this.tlfMadre,
                    TlfP: this.tlfPadre,
                    CorreoA: this.mailAlumno,
                    CorreoM: this.mailMadre,
                    CorreoP: this.mailPadre,
                    Asignatura: parseInt(j.id),
                    Matricula: parseInt(this.matriculas[this.matriculas.length - 1].Id) + cont
                  }

                  if (isNaN(jsonAlumnos.TlfA)) jsonAlumnos.TlfA = 0;
                  if (isNaN(jsonAlumnos.TlfM)) jsonAlumnos.TlfM = 0;
                  if (isNaN(jsonAlumnos.TlfP)) jsonAlumnos.TlfP = 0;
                  if (this.mailAlumno === undefined) this.mailAlumno = "";
                  if (this.mailMadre === undefined) this.mailMadre = "";
                  if (this.mailPadre === undefined) this.mailPadre = "";
                  console.log(jsonAlumnos);
                  this.csvService.uploadMatricula(jsonAlumnos);
                  this.csvService.upload(jsonAlumnos);
                  msg = "success";

                  ++cont;
                }

              }
            }
          }
        }
      }
    }
    if (msg === "success") {
      this.presentLoading(msg);
    } else this.presentLoading2(msg);
  }

  async presentLoading(type: any) {

    const loading = await this.loaderCtrl.create({
      message: 'Subiendo estudiantes, por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();



    this.curso2 = null;
    this.nia = null;
    this.nombreAlumno = null;
    this.apellidoAlumno1 = null;
    this.apellidoAlumno2 = null;
    this.tlfAlumno = null;
    this.tlfPadre = null;
    this.tlfMadre = null;
    this.mailAlumno = null;
    this.mailPadre = null;
    this.mailMadre = null;
    this.showToast(type);
    this.route.navigate(['/admin-alumno', { userType: this.userType }]);
    console.log('Loading dismissed!');
  }

  async presentLoading2(msg) {

    const loading = await this.loaderCtrl.create({
      message: 'Subiendo estudiantes, por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.curso2 = null;
    this.nia = null;
    this.nombreAlumno = null;
    this.apellidoAlumno1 = null;
    this.apellidoAlumno2 = null;
    this.tlfAlumno = null;
    this.tlfPadre = null;
    this.tlfMadre = null;
    this.mailAlumno = null;
    this.mailPadre = null;
    this.mailMadre = null;
    this.showToast(msg);
    console.log('Loading dismissed!');
  }

  async showToast(type: any) {
    let toast;
    if (type === "success") {
      toast = await this.toast.create({
        message: "Alumno subido",
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
    } else if (type === "Error") {
      toast = await this.toast.create({
        message: "Revise los campos del formulario",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    }
    toast.present();
  }

  closeSession() {
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }

}
