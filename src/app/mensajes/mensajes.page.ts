import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { MessagesService } from 'src/Services/messages.service';
import { InsertarFaltasService } from 'src/Services/insertar-faltas.service';
import { DeleteFaltasService } from 'src/Services/delete-faltas.service';
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { UsauriosService } from 'src/Services/usaurios.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  user: any;
  userType: any;
  today: any;
  edit: boolean = false;
  messages: any;
  matriculados: any;
  usuarios: any;
  asignaturas: any;
  messages2: any = [];
  comp: boolean = false;

  constructor(private menu: MenuController,
    private messService: MessagesService,
    private delFalta: DeleteFaltasService,
    private matService: AlumnoMatriculaService,
    private faltasService: InsertarFaltasService,
    private loadingController: LoadingController,
    private asigService: AsignaturasService,
    private usuService: UsauriosService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.messages2 = [];
    this.user = JSON.parse(sessionStorage.getItem("User"));
    this.userType = this.user.type;
    this.matService.setStorageMat();
    this.messService.refillMessagesNoEnv();
    this.asigService.refillAsignaturas();
    this.usuService.refillUsuarios();
    this.presentLoading3();
    setTimeout(() => {
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.messages = JSON.parse(localStorage.getItem("Mensajes"));
      this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));

      this.matService.clearStorageMat();
      this.messService.clearStorageMess();
      this.usuService.clearStorageUsu();
      this.asigService.clearStorageAsig();
      if (this.messages.length !== 0) {
        for (let m of this.messages) {
          m.fecha = this.parseDate(m.fecha);
        }


        for (let m of this.messages) {
          for (let a of this.asignaturas) {
            if (a.ProfesorId === this.user.id && this.user.type === "Profesor") {
              console.log("Entro 1");
              if (a.id === m.idAsig) {
                console.log("Entro 2");
                let json = {
                  fecha: m.fecha,
                  textoMensaje: m.textoMensaje,
                  idAlumno: m.idAlumno,
                  MensajeId: m.MensajeId,
                  idAsig: m.idAsig,
                  HorasFaltadas: m.HorasFaltadas
                }
                this.messages2.push(json);
              }
            } else if (this.user.type === "ProfAdmin" || this.user.type === "Administrativo") {
              this.messages2 = this.messages;
            }
          }
        }
        console.log(this.messages2);
      }
    }, 500);


  }

  ngOnInit() {

  }

  editMessages() {
    if (this.edit === false) this.edit = true;
    else this.edit = false
  }

  deleteMessage(mess) {
    this.presentAlertConfirm(mess);
  }

  //Agrega 0 en caso de que el dia u el mes no supere las 2 cifras
  private padLeft(n) {
    return ("00" + n).slice(-2);
  }

  //Parsea la fecha para que se vea en el formato español
  parseDate(date: Date) {

    let d = new Date(date),
      dformat = [this.padLeft(d.getDate()),
      this.padLeft(d.getMonth() + 1),
      d.getFullYear()
      ].join('/');
    return dformat;
  }

  seeMessage(m) {
    this.router.navigate(['/ver-mensaje', { mess: JSON.stringify(m) }]);
  }

  async presentAlertConfirm(mess) {
    const alert = await this.alertController.create({
      header: '¿Desea eliminar este mensaje?',
      message: 'Al eliminar este mensaje se actualizaran las horas del matriculado en cuestion ¿Continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.presentCancelToast();
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            for (let i of this.matriculados) {
              if (i.Id_Alumno === mess.idAlumno && i.Id_Asignatura === mess.idAsig) {
                console.log("Mensaje Eliminado " + (parseInt(i.HorasFaltadasTotales) - parseInt(mess.HorasFaltadas)));
                let horasResta = parseInt(i.HorasFaltadasTotales) - parseInt(mess.HorasFaltadas);
                let json = {
                  horasTotales: horasResta,
                  idAlumno: mess.idAlumno,
                  idAsig: mess.idAsig
                }
                this.faltasService.insertFaltas(json);
                this.delFalta.deleteFaltas({ MensajeId: mess.MensajeId });
                break;
              }
            }
            this.presentLoadingWithOptions();
          }
        }
      ]
    });
    alert.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Borrando el mensaje, por favor espere...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    await loading.present();

    this.messages2 = [];
    this.matService.setStorageMat();
    this.messService.refillMessagesNoEnv();
    this.asigService.refillAsignaturas();
    this.usuService.refillUsuarios();
    setTimeout(() => {
      this.usuarios = JSON.parse(localStorage.getItem("Usuarios"));
      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.messages = JSON.parse(localStorage.getItem("Mensajes"));
      this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));

      this.matService.clearStorageMat();
      this.messService.clearStorageMess();
      this.usuService.clearStorageUsu();
      this.asigService.clearStorageAsig();
      if (this.messages.length !== 0) {
        for (let m of this.messages) {
          m.fecha = this.parseDate(m.fecha);
        }


        for (let m of this.messages) {
          for (let a of this.asignaturas) {
            if (a.ProfesorId === this.user.id && this.user.type === "Profesor") {
              console.log("Entro 1");
              if (a.id === m.idAsig) {
                console.log("Entro 2");
                let json = {
                  fecha: m.fecha,
                  textoMensaje: m.textoMensaje,
                  idAlumno: m.idAlumno,
                  MensajeId: m.MensajeId,
                  idAsig: m.idAsig,
                  HorasFaltadas: m.HorasFaltadas
                }
                this.messages2.push(json);
              }
            } else if (this.user.type === "ProfAdmin" || this.user.type === "Administrativo") {
              this.messages2 = this.messages;
            }
          }
        }
        console.log(this.messages2);
      }
    }, 500);
    const { role, data } = await loading.onDidDismiss();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Este mensaje fue eliminado.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentCancelToast() {
    const toast = await this.toastController.create({
      message: 'Este mensaje no fue eliminado.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  showNavOption() {
    if (!this.comp) this.comp = true;
    else this.comp = false;
  }

  goToMensajesEnviados() {
    this.router.navigateByUrl("/mensajes-enviados");
    this.comp = false;
  }

  goToPerfil() {
    this.router.navigateByUrl("/perfil");
    this.comp = false;
  }

  async presentLoading3() {

    const loading = await this.loadingController.create({
      message: 'Cargando datos, por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  closeSession() {
    this.router.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }
}
