import { Component, OnInit } from '@angular/core';
import { UsauriosService } from 'src/Services/usaurios.service';
import { AsociarProfesorService } from 'src/Services/asociar-profesor.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asociar-profesor',
  templateUrl: './asociar-profesor.page.html',
  styleUrls: ['./asociar-profesor.page.scss'],
})
export class AsociarProfesorPage implements OnInit {

  //Arrays de cosas
  usuarios:any[];
  cursos:any[];
  asignaturas:any[];

  //Variables prof
  profNombre:any;
  profCurso:any;
  profAsignatura:any;

  //variable comprobante
  comp:boolean = false;
  comp2:boolean = false;
  comp3:boolean = false;

  userType:any;

  constructor(
    private asigProfService:AsociarProfesorService,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private route : Router
    ) { }

  ngOnInit() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userType = users.type;
    this.asigProfService.refillUsuarios();
    setTimeout(()=>{
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      this.asigProfService.clearStorageUsu();
    }, 500);
  }

  getNombre($event){
    this.profNombre = $event.detail.value;

    this.asigProfService.refillCursos();
    setTimeout(()=>{
      this.cursos = JSON.parse(localStorage.getItem("Cursos"));
      this.asigProfService.clearStorageCur();
      this.comp = true;
    }, 500);
  }

  getCurso($event){
    this.profCurso = $event.detail.value;

    this.asigProfService.refillAsignaturas({Grupo: this.profCurso});
    setTimeout(()=>{
      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.asigProfService.clearStorageAsig();
      this.comp2 = true;
    }, 500);
    
  }

  getAsignatura($event){
    this.profAsignatura = $event.detail.value;
    this.comp3 = true;
  }

  asociarProfesor(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de insercion',
      message: '¿Quiere usted asociar este profesor? <br>Puede que la asignatura ya tenga uno asignado.',
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
            let jsonAsociarProfesor = {
              idProf: this.profNombre,
              Curso: this.profCurso,
              Asignatura: this.profAsignatura
            }
            this.asigProfService.asociarProfAsig(jsonAsociarProfesor);
            this.presentLoading();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Asociando al profesor. Por favor espere...',
      duration: 2000
    });
    await loading.present();
    
    const { role, data } = await loading.onDidDismiss();
    this.asigProfService.refillUsuarios();
    setTimeout(()=>{
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      this.asigProfService.clearStorageUsu();
    }, 500);
    this.profNombre = "";
    this.profCurso = "";
    this.profAsignatura ="";
    this.presentToast();
    this.route.navigate(['/admin-profesor', { userType: this.userType }]);
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor fue asociado a ' + this.profAsignatura + '.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'La asociciacion fue cancelada.',
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
