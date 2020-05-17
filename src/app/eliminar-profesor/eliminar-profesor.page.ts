import { Component, OnInit } from '@angular/core';
import { InsertarProfesorService } from 'src/Services/insertar-profesor.service';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { parse } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-profesor',
  templateUrl: './eliminar-profesor.page.html',
  styleUrls: ['./eliminar-profesor.page.scss'],
})
export class EliminarProfesorPage implements OnInit {

  //Array asignaturas
  asignaturas:any[] = [];

  //Array profesores
  usuarios:any[] = [];

  //variable usu
  usuario:any;
  idUsuario: any = 0;

  userType:any;

  constructor(
    private usuService: InsertarProfesorService,
    private asigService: AsignaturasService,
    private alertController: AlertController,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private route: Router
    ) { }

  ngOnInit() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userType = users.type;
    this.usuService.refillUsuarios();
    this.asigService.refillAsignaturas();

    setTimeout(() => {
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      console.log(this.usuarios);
      console.log(this.asignaturas);
      this.usuService.clearStorageUsu();
      this.asigService.clearStorageAsig();
    }, 500);
  }

  getId($event){
    this.idUsuario = parseInt($event.detail.value);
  }

  deleteProfesor(){
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de eliminacion',
      message: '¿Quiere usted eliminar este profesor?',
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
            let comp = true;
            if(this.idUsuario === 0){
              console.log("Seleccione primero el profesor");
            }else{
              for(let i of this.asignaturas){
                if(this.idUsuario === parseInt(i.ProfesorId)) comp = false;
              }
        
              if(comp != true){
                this.presentLoading2();
              }else{
                let jsonProfAsig = {
                  id: parseInt(this.idUsuario)
                };
                this.usuService.deleteProfWithoutAsig(jsonProfAsig);
                this.presentLoading();
              }
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertConfirm2() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de eliminacion',
      message: 'Este profesor tiene asignaturas asignadas ¿Continuar?',
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
            let jsonProfAsig = {
              id: parseInt(this.idUsuario)
            };
            this.usuService.deleteProfWithAsig(jsonProfAsig);
            this.presentLoading();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Eliminando al profesor. Por favor espere...',
      duration: 3000
    });
    await loading.present();
    this.usuService.refillUsuarios();

    setTimeout(() => {
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      console.log(this.usuarios);
      this.usuService.clearStorageUsu();
    }, 500);
    this.usuario = null;
    const { role, data } = await loading.onDidDismiss();
    this.route.navigate(['/admin-profesor', { userType: this.userType }]);
    this.presentToast();
    console.log('Loading dismissed!');
  }

  async presentLoading2() {
    const loading = await this.loadCtrl.create({
      message: 'Eliminando al profesor. Por favor espere...',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.presentAlertConfirm2();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor fue eliminado.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor no fue eliminado.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentAsigErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Este profesor tiene una asignatura asignada.',
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
