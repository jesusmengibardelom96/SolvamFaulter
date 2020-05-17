import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/Services/alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-matricula',
  templateUrl: './eliminar-matricula.page.html',
  styleUrls: ['./eliminar-matricula.page.scss'],
})
export class EliminarMatriculaPage implements OnInit {
  users:any;
  userId: any;
  userType:any;
  //Variable matriculas
  matriculas:any[] = [];
  asignaturas:any[] = [];
  cursos:any = [];

  //Variable id matricula
  idMatriculado:any;

  //Variable reset select
  matriculado:any;
  curso:any;
  asignatura:any;
  idCurso:any;
  idAsig:any;

  constructor(
    private matService: AlumnoMatriculaService,
    private aluService: AlumnosService,
    private asigService: AsignaturasService,
    private alertController : AlertController,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private route : Router,
    private activeRoute : ActivatedRoute
    ) { }

  ngOnInit() {
    this.users = JSON.parse(sessionStorage.getItem("User"));
    this.userId = this.users.id;
    console.log(this.userId);
    this.userType = this.activeRoute.snapshot.paramMap.get('userType');
    console.log(this.userType);
    this.aluService.refillCurso();
    setTimeout(() => {
      this.cursos = JSON.parse(localStorage.getItem("Cursos"));
      this.aluService.clearStorageCurso();
    }, 500);
  }

  getId($event){
    console.log($event.detail.value);
    this.idMatriculado = parseInt($event.detail.value);
  }

  getIdCur($event){
    this.idCurso = $event.detail.value;
    console.log(this.curso);
    this.asigService.refillAsignaturasCurso(this.curso);
    setTimeout(() => {
      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      console.log(this.asignaturas);
      this.asigService.clearStorageAsig();
    }, 500);
  }

  getIdAsig($event){
    this.idAsig = $event.detail.value;
    console.log(this.idAsig);
    for(let i of this.asignaturas){
      if(this.idAsig === i.id){ 
        this.asignatura = i.NombreAsig
        break;
      }
    }
    console.log(this.asignatura);
    this.matService.setStorageComp(this.asignatura);
    setTimeout(() => {
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
      console.log(this.matriculas);
      this.matService.clearStorageMat();
    }, 500);
  }

  deleteMatriculado(){
    if(this.idMatriculado === undefined){
      this.presentErrorToast();
    }else{
      let json = {
        IdMatricula: this.idMatriculado,
        idAsig: this.idAsig
      };
      this.matService.deleteMensajeMat(json);
      this.presentAlertConfirm();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de eliminacion',
      message: '¿Quiere usted eliminar esta matricula?',
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
            this.matService.deleteMat(this.idMatriculado);
            this.presentLoading();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Borrando la matricula. Por favor espere...',
      duration: 2000
    });
    await loading.present();
    this.matService.setStorageComp(this.asignatura);

    setTimeout(() => {
      this.matriculas = JSON.parse(localStorage.getItem("Matriculados"));
      console.log(this.matriculas);
      this.matService.clearStorageMat();
    }, 500);
    const { role, data } = await loading.onDidDismiss();
    this.presentToast();
    this.asignatura = undefined;
    this.matriculado = undefined;
    this.curso = undefined;
    this.route.navigate(['/admin-alumno', { userType: this.userType }]);
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'La matricula fue eliminada.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'La matricula no fue eliminada.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Seleccione primero una matricula.',
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
