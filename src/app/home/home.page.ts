import { Component } from '@angular/core';
//Controladores y servicios
import { MenuController, AlertController, ToastController, LoadingController } from '@ionic/angular';
//Servicio de alumnos
import { AlumnosService } from 'src/Services/alumnos.service';
//Servicio de asignaturas
import { AsignaturasService } from 'src/Services/asignaturas.service';
//Servicio de AlumnosMatricula
import { AlumnoMatriculaService } from 'src/Services/alumno-matricula.service';
//Servicio de usuarios (Profesores)
import { UsauriosService } from 'src/Services/usaurios.service';
//Servicio de subir los datos del csv
import { UploadCSVService } from 'src/Services/upload-csv.service';
//Extension para leer datos de un csv
import { Papa } from 'ngx-papaparse';
//Extension para enviar datos json a un fichero php y procesarlos
import { HttpClient } from '@angular/common/http';
//Servicio de AlumnosFaltas
import { AlumnosFaltasService } from 'src/Services/alumnos-faltas.service';
//Servicio para Insertar faltas
import { InsertarFaltasService } from 'src/Services/insertar-faltas.service';
import { DeleteFaltasService } from 'src/Services/delete-faltas.service';
import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  //Inicio variables
  //Variables tabla profesores
  profesor: any = "";
  idUsu: number = 0;
  profTipo: String = "";
  profesores: any = [];

  //Variables de alumnos
  alumnos: any = [];
  selected = [];
  clicked: string = "";

  //Variables de asignaturas
  asignaturas: any = [];
  nombAsig: String = "";

  //Array de matriculados
  matriculados: any = [];

  //Array de mensajes
  messages: any = [];

  //Comprobantes para pasar falta
  comp: boolean = false;
  comp2: boolean;

  //Comprobantes para ver las faltas
  compFiltro: boolean = false;
  compAlumnos: boolean = false;

  //Array de alumnos faltados
  alumnosFaltas: any = [];
  faltasRegistradas: any = [];

  //Comprobantes para borrar faltas
  compDelete: boolean = false;

  //Variables para tratar las fechas y horas
  fechaFaltaAlumno: any;
  today: any;
  today2: any;
  today3: any;
  today4: any;
  firstDate: any;
  hours: any = "2";
  hoursAlumnos: any;
  //Fin variables
  constructor(
    private menu: MenuController,
    private alumnoService: AlumnosService,
    private asigService: AsignaturasService,
    private matService: AlumnoMatriculaService,
    private usuService: UsauriosService,
    private aluFaltas: AlumnosFaltasService,
    private alert: AlertController,
    private toast: ToastController,
    private insertarFaltas: InsertarFaltasService,
    private loadingController: LoadingController,
    private deleteFaltas: DeleteFaltasService,
    private route: Router
  ) {
  }

  ionViewWillEnter() {
    let users = JSON.parse(sessionStorage.getItem("User"));
    this.profesor = users.user;

    this.usuService.refillUsuarios();
    this.alumnoService.refillAlumnos();
    this.asigService.refillAsignaturas();
    this.asigService.refillMessages();
    this.presentLoading3();
    setTimeout(() => {
      this.alumnos = JSON.parse(localStorage.getItem("Alumnos"));
      this.alumnoService.clearStorageAlumnos();

      this.asignaturas = JSON.parse(localStorage.getItem("Asignaturas"));
      this.asigService.clearStorageAsig();


      this.messages = JSON.parse(localStorage.getItem("Messages"));
      this.asigService.clearStorageMess();

      this.profesores = JSON.parse(localStorage.getItem("Usuarios"));
      for (let prof of this.profesores) {
        if (prof.NombreUsuario === this.profesor) {
          this.idUsu = prof.id;
          this.profTipo = prof.Tipo;
        }

      }


      this.usuService.clearStorageUsu();

      this.matService.clearStorageMat();
    }, 1500);

    this.today = new Date().toUTCString().substring(0, 10);
    this.today2 = new Date().toUTCString().substring(0, 10);
    this.today3 = new Date().toISOString().substring(0, 10);
    this.today4 = new Date().toISOString().substring(0, 10);
  }

  //Inicio de la aplicacion
  ngOnInit() {


  }

  navigation() {
    this.compFiltro = false;
    this.comp = false;
  }

  //Abre el menu
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //Inicio pasar lista
  //Muestra a los alumnos para ponerles falta
  showAlumnos(nomAsig: String) {
    this.today = new Date().toISOString().substring(0, 10);
    this.today2 = new Date().toISOString().substring(0, 10);
    let i = 0;
    let j = 0;
    //this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
    if (this.comp === false) {

      this.nombAsig = nomAsig;

      this.asigService.getCompAsig(this.nombAsig);

      setTimeout(() => {
        this.comp = true;
        this.compFiltro = false;
        this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
        this.matriculados = [...this.matriculados];

        if (this.matriculados.length === 0) {
          this.comp2 = true;
        } else {
          this.comp2 = false;
        }

        this.matService.clearStorageMat();
      }, 500);
    } else {
      this.comp = false;
      this.hours = "2";
      this.matService.clearStorageMat();
    }

  }

  //Crea un array de alumnos seleccionados
  selectAlumno(item) {
    if (this.messages.length === 0) {
      if (this.selected.length !== 0 && !item.seleccionado) {
        item.seleccionado = true;

        item.MensajeId = parseInt(this.selected[this.selected.length - 1].MensajeId) + 1;
        this.selected.push(item);
        this.messages.push(item);
      } else if (this.selected.length !== 0 && item.seleccionado) {

        item.seleccionado = false;
        let index = this.selected.indexOf(item) - this.selected.length;
        this.selected.splice(index, 1);
        this.messages.splice(index, 1);
      } else if (this.selected.length === 0) {
        item.seleccionado = true;
        if (this.messages.length === 0) {
          item.MensajeId = 1;
          this.messages.push(item);
        } else {
          item.MensajeId = parseInt(this.messages[this.messages.length - 1].MensajeId) + 1;
          this.messages.push(item);
        }
        this.selected.push(item);
      }

    } else {
      if (this.selected.length !== 0 && !item.seleccionado) {
        item.seleccionado = true;
        item.MensajeId = parseInt(this.selected[this.selected.length - 1].MensajeId) + 1;
        this.selected.push(item);
      } else if (this.selected.length !== 0 && item.seleccionado) {

        item.seleccionado = false;
        let index = this.selected.indexOf(item) - this.selected.length;
        this.selected.splice(index, 1);
      } else if (this.selected.length === 0) {
        item.seleccionado = true;
        item.MensajeId = parseInt(this.messages[this.messages.length - 1].MensajeId) + 1;
        this.selected.push(item);
      }
      console.log(this.selected);
      console.log(this.messages);
    }
  }

  //Inserta la falta de un alumno en la BBDD y un mensaje
  saveFaltasAlumnos() {
    let dateToday = new Date(this.today);
    let textMessage = "";
    let date1 = new Date(this.today);
    let date2 = new Date(this.today2);

    if (+date2 < +date1) {
      this.showErrorToast("FutureDate");
      this.today = new Date().toUTCString().substring(0, 10);
    } else {
      for (let i of this.selected) {
        if (this.hours === "0.33") {
          console.log(parseFloat(this.hours) + parseInt(i.HorasFaltadasTotales));
          textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " se ha retrasado en " + i.NombreAsig + " el dia " + this.parseDate(dateToday) + " - SOLVAM \n \n Centro FP SOLVAM";
          let json = {
            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
            textoMensaje: textMessage,
            idMatricula: parseInt(i.Id),
            horasTotales: (parseFloat(this.hours) + parseInt(i.HorasFaltadasTotales)),
            horas: parseFloat(this.hours),
            idAlumno: i.Id_Alumno,
            idAsig: parseInt(i.Id_Asignatura),
            idMess: parseInt(i.MensajeId)
          }
          this.insertarFaltas.insertFaltas(json);
          this.insertarFaltas.insertMessage(json);
        } else if (this.hours === "0") {
          textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " ha sido expulsado en " + i.NombreAsig + " el dia " + this.parseDate(dateToday)+ " - SOLVAM \n \n Centro FP SOLVAM";
          let json = {
            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
            textoMensaje: textMessage,
            idMatricula: parseInt(i.Id),
            horasTotales: (parseInt(this.hours) + parseInt(i.HorasFaltadasTotales)),
            horas: parseInt(this.hours),
            idAlumno: i.Id_Alumno,
            idAsig: parseInt(i.Id_Asignatura),
            idMess: parseInt(i.MensajeId)
          }
          this.insertarFaltas.insertFaltas(json);
          this.insertarFaltas.insertMessage(json);
        } else {
          textMessage = "El alumno " + i.Nombre + " " + i.Apellido1 + " ha faltado a " + i.NombreAsig + " " + this.hours + " horas el dia " + this.parseDate(dateToday)+ " - SOLVAM \n \n Centro FP SOLVAM";
          let json = {
            fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate()) : (dateToday.getDate())),
            textoMensaje: textMessage,
            idMatricula: parseInt(i.Id),
            horasTotales: (parseInt(this.hours) + parseInt(i.HorasFaltadasTotales)),
            horas: parseInt(this.hours),
            idAlumno: i.Id_Alumno,
            idAsig: parseInt(i.Id_Asignatura),
            idMess: parseInt(i.MensajeId)
          }
          this.insertarFaltas.insertFaltas(json);
          this.insertarFaltas.insertMessage(json);
        }

      }
      this.presentLoading("faltaInsertada");
      this.selected = [];
    }
  }
  //Fin pasar lista

  //Inicio ver Faltas
  //Muestra las faltas de los alumnos en esa asignatura
  showAlumnosFaltas(nomAsig: String) {
    this.hours = "2";
    this.alumnosFaltas = [];
    if (this.compFiltro === false) {
      this.nombAsig = nomAsig;

      this.compFiltro = true;
      this.compAlumnos = false;
      this.comp = false;
      this.compDelete = false;

      this.today = new Date().toISOString().substring(0, 10);
      this.today2 = new Date().toISOString().substring(0, 10);
    } else {
      this.compFiltro = false;
      this.compDelete = true;
    }
  }

  //Recoge los datos de BBDD para mostrar las faltas de los alumnos
  sendQueryFaltas() {
    this.alumnosFaltas = [];
    let date1 = new Date(this.today);
    let date2 = new Date(this.today2);

    if (+date2 < +date1) {
      this.presentErrorDate();
    } else {
      this.aluFaltas.getFaltasAlumno(date1.getFullYear() + '-' + ((date1.getMonth() + 1) < 10 ? '0' + (date1.getMonth() + 1) : (date1.getMonth() + 1)) + '-' + ((date1.getDate() + 1) < 10 ? '0' + (date1.getDate()) : (date1.getDate())), date2.getFullYear() + '-' + ((date2.getMonth() + 1) < 10 ? '0' + (date2.getMonth() + 1) : (date2.getMonth() + 1)) + '-' + ((date2.getDate() + 1) < 10 ? '0' + (date2.getDate()) : (date2.getDate())), this.nombAsig);
      setTimeout(() => {
        this.alumnosFaltas = JSON.parse(localStorage.getItem("Faltas"));
        this.aluFaltas.clearStorageFal();
        for (let i of this.alumnosFaltas) {

          this.fechaFaltaAlumno = this.parseDate(i.fecha);
          console.log(i);
          i.fecha = this.parseDate(i.fecha);
          i.prueba = parseFloat(i.HorasFaltadas);
          let cadena = i.Apellido1 + ", " + i.Nombre;
          i.Nombre = cadena.length > 10 ? i.Nombre.substring(0,5)+"...": i.Nombre;
        }

        if (this.alumnosFaltas.length === 0) {
          this.compAlumnos = true;
          this.compDelete = false;
        } else {
          this.compAlumnos = false;
          this.compDelete = true;
        }
      }, 500);
    }

  }

  //Comprueba que el campo de fecha inicio sea correcto
  fechaIniComp() {
    let date1 = new Date(this.today);
    let date2 = new Date(this.today2);
    if (+date1 > +date2) {
      this.presentErrorDate();
      this.today = new Date().toISOString().substring(0, 10);
    }
  }

  //Comprueba que el campo de fecha fin sea correcto
  fechaFinComp() {
    let date1 = new Date(this.today);
    let date2 = new Date(this.today2);
    if (+date2 < +date1) {
      this.presentErrorDate();
      this.today2 = new Date().toISOString().substring(0, 10);
    }
  }

  //Agrega 0 en caso de que el dia u el mes no supere las 2 cifras
  private padLeft(n) {
    return ("00" + n).slice(-2);
  }

  //Parsea la fecha para que se vea en el formato español
  private parseDate(date: Date) {

    let d = new Date(date),
      dformat = [this.padLeft(d.getDate()),
      this.padLeft(d.getMonth() + 1),
      d.getFullYear()
      ].join('/');
    return dformat;
  }
  //Fin ver faltas

  iscompDelete(item) {
    if (this.alumnosFaltas.length === 0) {
      this.showErrorToast("compDelete");
    } else {
      this.presentCompDelete(item);
    }
  }
  //Inicio Eliminar faltas
  private deleteFalta(item) {

    let dateToday = new Date(item.fecha);
    let json = {
      fecha: dateToday.getFullYear() + '-' + ((dateToday.getMonth() + 1) < 10 ? '0' + (dateToday.getMonth() + 1) : (dateToday.getMonth() + 1)) + '-' + ((dateToday.getDate() + 1) < 10 ? '0' + (dateToday.getDate() + 1) : (dateToday.getDate())),
      idMatricula: item.id,
      idAlumno: item.Id_Alumno,
      horasTotales: (parseInt(item.HorasFaltadasTotales) - parseInt(item.HorasFaltadas)),
      MensajeId: item.MensajeId,
      idAsig: item.Id_Asignatura
    }
    console.log(json);
    this.deleteFaltas.deleteFaltas(json);
    this.deleteFaltas.updateHoras(json);

    this.presentLoading("faltasEliminadas");

  }
  //Fin Eliminar faltas

  //Inicio comprobaciones
  //Presenta un error alert sobre la fecha cuando aplicas el filtro
  async presentErrorDate() {
    const alert = await this.alert.create({
      header: 'Error',
      subHeader: 'Error en las fechas',
      message: 'La fecha inicial no puede ser mas grande que la fecha final, compruebe que las fechas estan correctas',
      buttons: ['Ok']
    });

    await alert.present();
  }

  //Presenta una confirmacion antes de borrar las faltas
  async presentCompDelete(item) {
    const alert = await this.alert.create({
      header: 'Borrar',
      subHeader: 'Borrar faltas',
      message: '¿Esta seguro de que quiere eliminar estas faltas?',
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.deleteFalta(item);
        }
      },
      {
        text: 'Cancelar',
        handler: () => {
          console.log('Cancelado');
        }
      }]
    });

    await alert.present();
  }

  //Muestra toasts de error
  async showErrorToast(type: any) {
    let toast;
    if (type === "ExceedHours") {
      toast = await this.toast.create({
        message: "Numero de horas excedido, minimo 1 maximo 5",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "FutureDate") {
      toast = await this.toast.create({
        message: "Fecha incorrecta, maximo dia posible " + this.today,
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    } else if (type === "faltaInsertada") {
      toast = await this.toast.create({
        message: "Faltas insertadas",
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
    } else if (type === "faltasEliminadas") {
      toast = await this.toast.create({
        message: "Faltas eliminadas",
        duration: 3000,
        position: 'bottom',
        color: 'success'
      });
    } else if (type === "compDelete") {
      toast = await this.toast.create({
        message: "No hay alumnos que seleccionar aqui",
        duration: 3000,
        position: 'bottom',
        color: 'danger'
      });
    }

    toast.present();
  }

  //Presenta un loader cada vez que hago una gestion en la BBDD
  async presentLoading(type: any) {
    let date1 = new Date(this.today);
    let date2 = new Date(this.today2);
    if (type === "faltaInsertada") {
      const loading = await this.loadingController.create({
        message: 'Insertando faltas, por favor espere...',
        duration: 2000
      });
      await loading.present();

      this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
      this.asigService.getCompAsig(this.nombAsig);
      this.asigService.refillMessages();
      setTimeout(() => {
        this.matriculados = JSON.parse(localStorage.getItem("Matriculados"));
        this.matriculados = [...this.matriculados];

        this.messages = JSON.parse(localStorage.getItem("Messages"));
        this.asigService.clearStorageMess();
      }, 500)
      const { role, data } = await loading.onDidDismiss();

      console.log(this.matriculados);
      this.showErrorToast("faltaInsertada");
      console.log('Loading dismissed!');
    } else if (type === "faltasEliminadas") {
      const loading = await this.loadingController.create({
        message: 'Eliminando faltas, por favor espere...',
        duration: 2000
      });
      await loading.present();
      this.sendQueryFaltas();
      if (this.alumnosFaltas.length === 0) this.comp2 = false;
      const { role, data } = await loading.onDidDismiss();
      this.showErrorToast("faltasEliminadas");
      console.log('Loading dismissed!');
    }

  }
  //Fin comprobaciones
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
    this.route.navigateByUrl("/login");
    this.comp = false;
    this.compFiltro = false;
    sessionStorage.removeItem("User");
  }
}
