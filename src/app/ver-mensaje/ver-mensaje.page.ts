import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from 'src/Services/alumnos.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { MessagesService } from 'src/Services/messages.service';
import { AsignaturasService } from 'src/Services/asignaturas.service';
import { UsauriosService } from 'src/Services/usaurios.service';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ver-mensaje',
  templateUrl: './ver-mensaje.page.html',
  styleUrls: ['./ver-mensaje.page.scss'],
})
export class VerMensajePage implements OnInit {
  fecha: any;
  textMess: any;
  message: any;
  alumnos: any;
  alumno: any;


  //flags
  compTlfM: boolean = true;
  compTlfP: boolean = true;
  compTlfA: boolean = true;
  compMailM: boolean = true;
  compMailP: boolean = true;
  compMailA: boolean = true;

  constructor(private activeRoute: ActivatedRoute,
    private aluService: AlumnosService,
    private emailComposer: EmailComposer,
    private router: Router,
    private messService: MessagesService,
    private toast: ToastController,
    private loadingController: LoadingController
  ) { }

  ionViewWillEnter() {
    this.message = JSON.parse(this.activeRoute.snapshot.paramMap.get('mess'));
    this.fecha = this.message.fecha;
    this.textMess = this.message.textoMensaje;
    console.log(this.message);
    this.aluService.refillAlumnos();
    setTimeout(() => {
      this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
      this.aluService.clearStorageAlumnos();
      console.log(this.alumnos);
      for (let a of this.alumnos) {
        if (a.NIA === this.message.idAlumno) {
          this.alumno = a;
          break;
        }
      }
      console.log(this.alumno);

      if (this.alumno.CorreoA === "" || this.alumno.CorreoA === null) this.compMailA = false;
      if (this.alumno.CorreoP === "" || this.alumno.CorreoP === null) this.compMailP = false;
      if (this.alumno.CorreoM === "" || this.alumno.CorreoM === null) this.compMailM = false;
      if (this.alumno.TelefonoA === "" || this.alumno.TelefonoA === null) this.compTlfA = false;
      if (this.alumno.TelefonoP === "" || this.alumno.TelefonoP === null) this.compTlfP = false;
      if (this.alumno.TelefonoM === "" || this.alumno.TelefonoM === null) this.compTlfM = false;
    }, 500);
  }

  ngOnInit() {
  }

  sendMailP() {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    let email = {
      app: 'gmail',
      to: this.alumno.CorreoP,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Faltas de asistencia',
      body: this.textMess,
      isHtml: true
    }
    this.emailComposer.open(email);
  }

  sendMailM() {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    let email = {
      app: 'gmail',
      to: this.alumno.CorreoM,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Faltas de asistencia',
      body: this.textMess,
      isHtml: true
    }
    this.emailComposer.open(email);
  }

  sendMailA() {
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');
    let email = {
      app: 'gmail',
      to: this.alumno.CorreoA,
      cc: '',
      bcc: [],
      attachments: [],
      subject: 'Faltas de asistencia',
      body: this.textMess,
      isHtml: true
    }
    this.emailComposer.open(email);
  }

  sendWhatsP() {
    //https://api.whatsapp.com/send?phone=34646849137&text=Mensaje%20de%20Prueba%20-%20Lorenzo.
    window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoP + "&text=" + this.message.textoMensaje);
  }

  sendWhatsM() {
    window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoM + "&text=" + this.message.textoMensaje);
  }

  sendWhatsA() {
    window.open("https://api.whatsapp.com/send?phone=34" + this.alumno.TelefonoA + "&text=" + this.message.textoMensaje);
  }

  archivarMensaje() {
    this.messService.sendMessage({ idMess: this.message.MensajeId });
    this.presentLoading3();
  }

  goToMensajesEnviados(){
    this.router.navigateByUrl('/mensajes-enviados');
  }

  goToMensajes(){
    this.router.navigateByUrl('/mensajes');
  }

  //Fin comprobaciones
  async presentLoading3() {

    const loading = await this.loadingController.create({
      message: 'Archivando mensaje, por favor espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.showToast();
  }

  async showToast() {
    let toast;

    toast = await this.toast.create({
      message: "Mensaje archivado en mensajes enviados",
      duration: 3000,
      position: 'bottom',
      color: 'success'
    });


    toast.present();
  }

  closeSession() {
    this.router.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }
}
