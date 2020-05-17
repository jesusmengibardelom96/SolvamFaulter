import { Component, OnInit } from '@angular/core';
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/Services/alumnos.service';
import { parse } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-alumno',
  templateUrl: './eliminar-alumno.page.html',
  styleUrls: ['./eliminar-alumno.page.scss'],
})
export class EliminarAlumnoPage implements OnInit {

  //Variable matriculas
  alumnos: any[] = [];
  matriculas: any[] = [];
  cursos:any = [];
  userType:any;

  //Variable id matricula
  idAlumno: any;
  idMatricula:any;
  curso:any;

  //Variable reset select
  alumno: any;

  //Variable error
  error: any;

  constructor(
    private aluService: AlumnosService,
    private matService: AlumnoMatriculaService,
    private alertController: AlertController,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private route: Router
  ) { }

  ngOnInit() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userType = users.type;
    this.matService.setStorageMat();
    this.aluService.refillCurso();
    setTimeout(() => {
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
      console.log(this.matriculas);
      this.cursos = JSON.parse(localStorage.getItem("Cursos"));
      this.aluService.clearStorageCurso();
      this.matService.clearStorageMat();
    }, 500);
    
    
  }

  getId($event) {
    console.log($event.detail.value);
    this.idAlumno = parseInt($event.detail.value);
    console.log(this.idAlumno);
  }

  getIdCur($event){
    this.curso = $event.detail.value;
    let jsonAluCur = {
      curso: this.curso
    }
    this.aluService.refillAlumnosCur(jsonAluCur);
    setTimeout(() => {
      this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
      this.aluService.clearStorageAlumnos();
    }, 500);

  }

  deleteAlumno() {
    if (this.idAlumno === undefined) {
      this.presentErrorToast();
    } else {
      this.presentAlertConfirm();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de eliminacion',
      message: '¿Quiere usted eliminar este alumno? <br>Puede tener matriculas asociadas',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.presentCancelToast();
          }
        }, {
          text: 'Okay',
          handler: () => {
            
            this.matService.deleteMensaje({idAlumno:this.idAlumno});
            this.presentLoading();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Borrando el alumno. Por favor espere...',
      duration: 2000
    });
    await loading.present();
    let json = {
      alumnoId:parseInt(this.idAlumno)
    };
    console.log(json);
    this.matService.deleteMatAlumno(json);
    this.aluService.deleteAlumno(this.idAlumno);
    this.aluService.refillAlumnosCur({curso:this.curso});
    this.matService.setStorageMat();
    setTimeout(() => {
      this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
      console.log(this.alumnos);
      console.log(this.matriculas);
      this.aluService.clearStorageAlumnos();
      this.matService.clearStorageMat();
    }, 500);
    this.alumno = null;
    const { role, data } = await loading.onDidDismiss();
    this.curso = undefined;
    this.alumno = undefined;
    this.route.navigate(['/admin-alumno', { userType: this.userType }]);
    this.presentToast();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'El alumno fue eliminado.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'El alumno no fue eliminado.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Seleccione primero un alumno.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  closeSession(){
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }

}
