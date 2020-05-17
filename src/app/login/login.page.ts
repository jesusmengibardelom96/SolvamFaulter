import { Component, OnInit } from '@angular/core';
import { UsauriosService } from 'src/Services/usaurios.service';
import {Md5} from "md5-typescript";
import { LoadingController, ToastController } from '@ionic/angular';
import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  //User variables
  user:any;
  pass:any;
  userBBDD:any;
  passBBDD:any;
  typeBBDD:any;
  tutorBBDD:any;
  idBBDD:any;
  nomSolvamBBDD:any;

  //Array usuarios BBDD
  users:any[];
  
  //Variable type of input
  inputType:any = "password";

  //Variable icon
  iconName: string = "eye-outline";

  constructor(
    private usuService: UsauriosService,
    private loadCtrl: LoadingController,
    private toast : ToastController,
    private route: Router
    ) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.usuService.refillUsuarios();

    setTimeout(()=>{
      this.users = JSON.parse(localStorage.getItem("Usuarios"));
      this.usuService.clearStorageUsu();
      console.log(this.users);
    },500);
    console.log(Md5.init('1234'));
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
  goIntoApp(){
    for(let usu of this.users){
      if(this.user === usu.NombreUsuario){
        if(Md5.init(this.pass) === usu.Contrasenya){
          this.userBBDD = this.user;
          this.passBBDD = Md5.init(this.pass);
          this.typeBBDD = usu.Tipo;
          this.tutorBBDD = usu.Tutor;
          this.idBBDD = usu.id;
          break;
        }else{
          this.userBBDD = this.user;
          this.passBBDD = "passError";
          break;
        }
      }else{
        this.userBBDD = "userError";
      }
    }
    if(this.userBBDD === this.user && this.passBBDD === Md5.init(this.pass)) this.presentLoading();
    else if(this.userBBDD !== this.user) this.presentLoading2(this.userBBDD);
    else if (this.userBBDD === this.user && this.passBBDD !== Md5.init(this.pass)) this.presentLoading2(this.passBBDD);
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Accediendo a la aplicacion. Por favor espere...',
      duration: 3000
    });
    await loading.present();
    
    sessionStorage.setItem("User", JSON.stringify({id: this.idBBDD, user: this.userBBDD, pass: this.passBBDD, type: this.typeBBDD, tutor: this.tutorBBDD}));
    this.user = "";
    this.pass = "";
    const { role, data } = await loading.onDidDismiss();
    if(this.typeBBDD === "Administrativo") this.route.navigateByUrl("/perfil");
    else this.route.navigateByUrl("/home");
    this.presentToast();
    console.log('Loading dismissed!');
  }

  async presentLoading2(type) {
    const loading = await this.loadCtrl.create({
      message: 'Accediendo a la aplicacion. Por favor espere...',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    if(type == "userError") this.presentErrorToast2();
    else if(type == "passError") this.presentErrorToast();
    console.log('Loading dismissed!');
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Bienvenido ' + this.userBBDD,
      duration: 2000,
      color: "primary"
    });
    toast.present();
  }

  async presentErrorToast() {
    const toast = await this.toast.create({
      message: 'La contraseña no es correcta',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async presentErrorToast2() {
    const toast = await this.toast.create({
      message: 'El usuario no es correcto',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

}
