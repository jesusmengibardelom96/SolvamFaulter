import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Papa } from 'ngx-papaparse';
import { UploadCSVService } from 'src/Services/upload-csv.service';
import { HttpClient } from '@angular/common/http';
import { Navigation, Router } from '@angular/router';
import { UsauriosService } from 'src/Services/usaurios.service';
import { InsertarProfesorService } from 'src/Services/insertar-profesor.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  comp: boolean = false;
  usersBBDD: any;
  users = JSON.parse(sessionStorage.getItem("User"));
  //Variables para controlar la edicion de campos
  ableEdit: boolean = false;

  //Variable que recoge el path temporal del archivo
  tmpPath: string = "";

  //Variables de usuario
  userName: string = this.users.user;

  password: string = "";
  userType: string = "";
  password2: string = "";

  passwordAnt: string = this.password;
  userNameAnt: string = this.userName;

  //input type
  inputType: string = "password";
  inputType2: string = "password";

  //icon name
  iconName: string = "eye-outline";
  iconName2: string = "eye-outline";


  constructor(
    private menu: MenuController,
    private alertController: AlertController,
    private route: Router,
    private userService: UsauriosService,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private cursoService: InsertarProfesorService
  ) {
  }

  ionViewWillEnter() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userName = users.user;
    this.userType = users.type;
    this.userNameAnt = this.userName;
    this.passwordAnt = users.pass;
    this.userService.refillUsuarios();
    setTimeout(() => {
      this.usersBBDD = JSON.parse(localStorage.getItem("Usuarios"));
      this.userService.clearStorageUsu();
    }, 500);
  }

  ngOnInit() {
  }

  seePassField() {
    if (this.inputType === "password") {
      this.inputType = "text";
      this.iconName = "eye-off-outline";
    } else {
      this.inputType = "password";
      this.iconName = "eye-outline";
    }
  }

  seePassField2() {
    if (this.inputType2 === "password") {
      this.inputType2 = "text";
      this.iconName2 = "eye-off-outline";
    } else {
      this.inputType2 = "password";
      this.iconName2 = "eye-outline";
    }
  }

  //Abrir menu
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //Habilitar edicion de campos
  enableFields() {
    this.ableEdit ? this.ableEdit = false : this.ableEdit = true;
  }

  //Muestra las opciones de administracion para alumnos
  showOptionsAdminAlumno() {
    this.route.navigate(['/admin-alumno', { userType: this.userType }]);
  }

  showOptionsAdminProf() {
    this.route.navigate(['/admin-profesor', { userType: this.userType }]);
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
            let comp = false;
            let opc = "";
            if (this.userName !== this.userNameAnt && opc === "") {
              opc = "N";
              console.log(opc);
            } else if (this.userName !== this.userNameAnt && opc !== "") {
              opc += "yN";
              console.log(opc);
            }
            console.log(this.password + " - " + this.passwordAnt);
            if (this.password !== this.passwordAnt && this.password !== "" && this.passwordAnt !== "" && opc === "") {
              opc = "P";
              console.log(opc);
            } else if (this.password !== this.passwordAnt && this.password !== "" && this.passwordAnt !== "" && opc !== "") {
              opc += "yP";
              console.log(opc);
            }
            for (let usu of this.usersBBDD) {
              if (usu.NombreUsuario === this.userName  && opc === "N" || opc === "yN") {
                this.presentLoading2();
                comp = true;
                break;
              }
            }
            if (this.password === this.password2 && comp === false) this.presentLoading(opc);
            else if (this.password !== this.password2 && comp === false) this.presentErrorToast();
          }
        }, {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.presentCancelToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading(opc) {
    const loading = await this.loadCtrl.create({
      message: 'Cambiando los datos. Por favor espere...',
      duration: 3000
    });
    await loading.present();



    let json = {
      userName: this.userName,
      userNameAntiguo: this.userNameAnt,
      pass: this.password,
      opc: opc
    }
    
    this.userService.updateUsuario(json);
    const { role, data } = await loading.onDidDismiss();
    this.presentToast();
    this.userName = this.userNameAnt;
    this.password = "";
    this.inputType = "password";
    this.iconName = "eye-outline";
    console.log('Loading dismissed!');
  }

  async presentLoading2() {
    const loading = await this.loadCtrl.create({
      message: 'Cambiando los datos. Por favor espere...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.presentUserErrorToast();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'La edicion fue aceptada, inicie sesion de nuevo.',
      duration: 2000,
      color: "success"
    });
    toast.present();
    const { role, data } = await toast.onDidDismiss();
    this.route.navigateByUrl("login");
  }

  async presentErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'Las contraseñas no son iguales, vuelva a intentarlo.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentUserErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'El usuario' + this.userName + ' ya existe, vuelva a intentarlo.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'La edicion se canceló.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  showNavOption() {
    if (!this.comp) this.comp = true;
    else this.comp = false;
  }

  goToMensajes() {
    this.route.navigateByUrl("/mensajes");
    this.comp = false;
  }

  goToMensajesEnviados() {
    this.route.navigateByUrl("/mensajes-enviados");
    this.comp = false;
  }

  closeSession() {
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }
}
