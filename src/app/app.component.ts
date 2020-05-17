import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  user:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  sideMenu()
  {
    //let user = JSON.parse(sessionStorage.getItem("User"));
    //this.user = user.user;
    this.navigate =
    [
      {
        title : "Horarios y sesiones",
        url   : "/home",
        icon  : "time-outline"
      },
      {
        title : "Mensajes",
        url   : "/mensajes",
        icon  : "file-tray-outline"
      },
      {
        title : "Mensajes enviados",
        url   : "/mensajes-enviados",
        icon  : "mail-open-outline"
      },
      {
        title : "Perfil",
        url   : "/perfil",
        icon  : "person-circle-outline"
      },
    ]
  }
}
