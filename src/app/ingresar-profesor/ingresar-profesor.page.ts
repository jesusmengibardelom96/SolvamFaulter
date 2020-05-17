import { Component, OnInit } from '@angular/core';
import { InsertarProfesorService } from 'src/Services/insertar-profesor.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-profesor',
  templateUrl: './ingresar-profesor.page.html',
  styleUrls: ['./ingresar-profesor.page.scss'],
})
export class IngresarProfesorPage implements OnInit {
  //Variable comps
  comp: boolean = false;
  comp2: boolean = false;
  comp3: boolean = false;
  comp4: boolean = false;
  comp5: boolean = false;

  //Variables input
  userName: string;
  password: string;
  password2: string;
  profTipo: any;

  //Color variable
  inputColorName: string = "";
  inputColorPass: string = "";
  inputColorPass2: string = "";

  //input type
  inputType: string = "password";
  inputType2: string = "password";

  //icon name
  iconName: string = "eye-outline";
  iconName2: string = "eye-outline";

  //array usuarios y cursos
  users: any[];
  cursos: any[];

  //tutor
  profCurso: any;

  userType:any;

  constructor(
    private insertProfesor: InsertarProfesorService,
    private alertController: AlertController,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController,
    private route : Router
  ) { }

  ngOnInit() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.userType = users.type;
    this.insertProfesor.refillUsuarios();
    this.insertProfesor.refillCursos();

    setTimeout(() => {
      this.users = JSON.parse(localStorage.getItem("Usuarios"));
      console.log(this.users);
      this.insertProfesor.clearStorageUsu();

      this.cursos = JSON.parse(localStorage.getItem("Cursos"));
      console.log(this.cursos);
      this.insertProfesor.clearStorageCur();
    }, 500);
  }

  getComp($event) {
    this.inputColorName = "";

    if ($event.detail.value !== "") {
      this.comp = true;
      this.userName = $event.detail.value;
    }
    else {
      this.comp = false;
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
      this.inputColorName = "danger";
    }

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

  seePassField2(){
    if (this.inputType2 === "password") {
      this.inputType2 = "text";
      this.iconName2 = "eye-off-outline";
    } else {
      this.inputType2 = "password";
      this.iconName2 = "eye-outline";
    }
  }

  getComp3($event){
    this.inputColorPass = "";
    if ($event.detail.value !== "") {
      this.comp2 = true;
    }
    else {
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
      this.inputColorPass2 = "danger";
    }
  }

  getComp2($event) {
    this.inputColorPass = "";
    if ($event.detail.value !== "") {
      this.password = $event.detail.value;
    }
    else {
      this.comp2 = false;
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
      this.inputColorPass = "danger";
    }
  }

  getCurso($event) {
    if ($event.detail.value !== "") {
      this.comp5 = true;
      this.profCurso = $event.detail.value;
    }
    else {
      this.comp5 = false;
    }
  }

  getTipo($event) {
    if ($event.detail.value !== "") {
      this.comp3 = true;
      this.comp5 = true;
      this.profTipo = $event.detail.value;
    }
    else {
      this.comp3 = false;
      this.comp4 = false;
      this.comp5 = false;
    }
  }

  ingresarProfesor() {
    this.presentAlertConfirm();

  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmacion de insercion',
      message: '¿Quiere usted Insertar este profesor?',
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
            let comp6 = true;
            for (let i of this.users) {
              console.log(this.userName + " - " + i.NombreUsuario);
              if (this.userName === i.NombreUsuario) comp6 = false;
            }
            console.log(comp6);
            if (comp6 != true) {
              this.presentLoading2();
            } else {
              if(this.password !== this.password2) this.presentErrorPassToast();
              else {
                if (this.comp4) {
                  let jsonTutor = {
                    id: parseInt(this.users[this.users.length - 1].id) + 1,
                    usuario: this.userName,
                    pass: this.password,
                    tipo: this.profTipo,
                    tutor: this.profCurso
                  }
                  this.insertProfesor.insertProfWithTutor(jsonTutor);
                } else {
                  let jsonSinTutor = {
                    id: parseInt(this.users[this.users.length - 1].id) + 1,
                    usuario: this.userName,
                    pass: this.password,
                    tipo: this.profTipo
                  }
                  this.insertProfesor.insertProfWithoutTutor(jsonSinTutor);
                }
                this.presentLoading();
              }
            }
            
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Insertando al profesor. Por favor espere...',
      duration: 3000
    });
    await loading.present();
    this.insertProfesor.refillUsuarios();


    setTimeout(() => {
      this.users = JSON.parse(localStorage.getItem("Usuarios"));
      console.log(this.users);
      this.insertProfesor.clearStorageUsu();
    }, 500);
    const { role, data } = await loading.onDidDismiss();
    this.userName = "";
    this.password ="";
    this.password2 = "";
    this.profTipo = "";
    this.profCurso = "";
    this.route.navigate(['/admin-profesor', { userType: this.userType }]);
    this.presentToast();
    console.log('Loading dismissed!');
  }

  async presentLoading2() {
    const loading = await this.loadCtrl.create({
      message: 'Insertando al profesor. Por favor espere...',
      duration: 3000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.presentNameErrorToast();
    this.inputColorName = "danger";
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor fue insertado.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor no fue insertado.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentNameErrorToast() {
    const toast = await this.toastCtrl.create({
      message: 'El profesor ' +  this.userName + ' ya existe.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentErrorPassToast(){
    const toast = await this.toastCtrl.create({
      message: 'Las contraseñas no coinciden.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
    this.password2 = "";
    this.inputColorPass2 = "danger";
  }

  closeSession(){
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }
}
