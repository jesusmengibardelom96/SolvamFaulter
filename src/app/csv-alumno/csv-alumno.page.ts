import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Papa } from 'ngx-papaparse';
import { UploadCSVService } from 'src/Services/upload-csv.service';
import { HttpClient } from '@angular/common/http';
import { AlumnosService } from 'src/Services/alumnos.service';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csv-alumno',
  templateUrl: './csv-alumno.page.html',
  styleUrls: ['./csv-alumno.page.scss'],
})
export class CsvAlumnoPage implements OnInit {

  //Variables de gestion de csv de alumnos
  csvData: any[] = [];
  headerRow: any[] = [];
  typeOfFile: string = "";
  valueInptuFileCsv: string = "";

  //Variable que recoge el path temporal del archivo
  tmpPath: string = "";

  //Variable matriculas
  alumnos: any[] = [];
  cursos: any[] = [];
  asignaturas: any[] = [];
  matriculas: any[] = [];

  //Variable id matricula
  idAlumno: any;
  nombreCurso: any;
  idAsignatura: any;

  //Variable reset select
  alumno: any;
  curso: any;
  asignatura: any;


  //Variable error
  error: any;
  userType: any;

  constructor(
    private alertController: AlertController,
    private loaderCtrl: LoadingController,
    private toast: ToastController,
    private papa: Papa,
    private aluService: AlumnosService,
    private csvService: UploadCSVService,
    private asigService: AsignaturasService,
    private matService: AlumnoMatriculaService,
    private http: HttpClient,
    private route: Router
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
      
      this.aluService.clearStorageAlumnos();
      this.aluService.clearStorageCurso();
      this.matService.clearStorageMat();

    }, 500);
  }

  getCurso($event) {
    this.asigService.refillAsignaturasCurso($event.detail.value);
    setTimeout(() => {

      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.asigService.clearStorageAsig();
      console.log(this.asignaturas);
    }, 500);
  }



  //Recoge el path del fichero y el tipo del fichero
  changeListener($event) {
    this.tmpPath = URL.createObjectURL($event.target.files[0]);
    this.typeOfFile = $event.target.files[0].type;
  }

  //Recoge un archivo csv
  csvInsertAlumnos() {
    if (this.tmpPath === "") {
      this.showToast("csvErrorFileEmpty");
    } else if (this.typeOfFile !== "application/vnd.ms-excel") {
      this.showToast("csvErrorTypeFile");
    } else if (this.curso === undefined) {
      this.showToast("noCourseError");
    } else {
      this.http
        .get(this.tmpPath, {
          responseType: 'text'
        })
        .subscribe(
          data => {
            this.csvToBbdd(data)
          },
          err => this.showToast("csvErrorInserction")
        );
    }
  }

  //Lee dentro del csv e inserta los datos en la BBDD
  csvToBbdd(res) {
    let msg = "";
    let csvData = res || '';
    let cont = 1;
    let contAlumno = 1;
    let jsonAlumnos;

    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0, 1)[0];
        this.csvData = parsedData.data;
      }
    });
    for (let i = 0; i < this.csvData.length; i++) {
      if ((this.csvData[i][4] + "") !== this.curso) msg = "courseError";
      else {
        //console.log(parseInt(this.matriculas[this.matriculas.length - 1].Id) + 1);
        let jsonAlumnos = {
          NIA: parseInt(this.csvData[i][0]),
        }

        //console.log(jsonAlumnos);
        let jsonMat = {
          alumnoId: jsonAlumnos.NIA
        }
        this.matService.deleteMatAlumno(jsonMat);
      }
    }
    this.matService.setStorageMat();
    setTimeout(() => {
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
      //console.log(this.matriculas);
      this.matService.clearStorageMat();
    }, 500);
    
    for (let i = 0; i < this.csvData.length; i++) {
      if ((this.csvData[i][4] + "") !== this.curso) {
        msg = "courseError";
        console.log(msg);
      } else {
        jsonAlumnos = {
          NIA: parseInt(this.csvData[i][0]),
          Nombre: this.csvData[i][1] + "",
          Apellido1: this.csvData[i][2] + "",
          Apellido2: this.csvData[i][3] + "",
          Grupo: this.csvData[i][4] + "",
          TlfA: parseInt(this.csvData[i][5]),
          TlfM: parseInt(this.csvData[i][6]),
          TlfP: parseInt(this.csvData[i][7]),
          CorreoA: this.csvData[i][8] + "",
          CorreoM: this.csvData[i][9] + "",
          CorreoP: this.csvData[i][10] + ""
        }
        if (isNaN(jsonAlumnos.TlfA)) jsonAlumnos.TlfA = 0;
        if (isNaN(jsonAlumnos.TlfM)) jsonAlumnos.TlfM = 0;
        if (isNaN(jsonAlumnos.TlfP)) jsonAlumnos.TlfP = 0;
        this.csvService.upload(jsonAlumnos);
        for (let j of this.asignaturas) {
          if (this.matriculas.length === 0) {
            jsonAlumnos = {
              NIA: parseInt(this.csvData[i][0]),
              Asignatura: parseInt(j.id),
              Matricula: cont
            }
            this.csvService.uploadMatricula(jsonAlumnos);
            
            msg = "csvSuccess";

            ++cont;

          } else {
            jsonAlumnos = {
              NIA: parseInt(this.csvData[i][0]),
              Asignatura: parseInt(j.id),
              Matricula: parseInt(this.matriculas[this.matriculas.length - 1].Id) + cont
            }
            this.csvService.uploadMatricula(jsonAlumnos);
            msg = "csvSuccess";

            ++cont;

          }
          
        }
      }
      contAlumno++;
    }
    if(msg === "csvSuccess") this.presentLoading("csvSuccess");
    else this.presentLoading2(msg);
  }



  //Alerta para cuando se desee guardar los cambios en el formulario
  async presentChangeAlert() {
    const alert = await this.alertController.create({
      header: 'Cambios realizados',
      subHeader: 'Usted ha realizado cambios',
      message: '¿Desea usted guardar dichos cambios?',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });

    await alert.present();
  }

  //Loader para subir alumnos
  async presentLoading(type:any) {

    const loading = await this.loaderCtrl.create({
      message: 'Subiendo estudiantes, por favor espere...',
      duration: 2000
    });
    await loading.present();
    
    const { role, data } = await loading.onDidDismiss();
    this.valueInptuFileCsv = null;
    this.tmpPath = "";
    this.typeOfFile = "";
    this.curso = null;
    this.showToast("csvSuccess");
    this.matService.clearStorageMat();
    this.route.navigate(['/admin-alumno', { userType: this.userType }]);
    console.log('Loading dismissed!');
  }

  //Loader para subir alumnos
  async presentLoading2(msg) {

    const loading = await this.loaderCtrl.create({
      message: 'Subiendo estudiantes, por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.valueInptuFileCsv = null;
    this.tmpPath = "";
    this.typeOfFile = "";
    this.curso = null;
    this.showToast(msg);
    console.log('Loading dismissed!');
  }

  //Enseña un toast de success si subes los alumnos correctamente
  async showToast(type: any) {
    let toast;
    if (type === "csvSuccess") {
      toast = await this.toast.create({
        message: "Alumnos subidos",
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
    } else if (type === "csvErrorFileEmpty") {
      toast = await this.toast.create({
        message: "Seleccione un fichero primero",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "csvErrorTypeFile") {
      toast = await this.toast.create({
        message: "Seleccione un fichero csv",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "csvErrorInserction") {
      toast = await this.toast.create({
        message: "Hubo un error al insertar los alumnos",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "noCourseError") {
      toast = await this.toast.create({
        message: "Seleccione el curso a matricular dichos alumnos",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "courseError") {
      toast = await this.toast.create({
        message: "El curso de los alumnos no concuerda, reviselo",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "matriculaError") {
      toast = await this.toast.create({
        message: "Los alumnos ya estan matriculados",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
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
