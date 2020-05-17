import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-profesor',
  templateUrl: './admin-profesor.page.html',
  styleUrls: ['./admin-profesor.page.scss'],
})
export class AdminProfesorPage implements OnInit {

  //Variables para componentes
  adminProfesoresList:any[] = [{title: "Asociar profesor"}, {title:"Ingresar nuevo profesor"}, {title:"Eliminar profesor"}];
  titles:string = "";

  //Variable usertype
  userType:any;

  constructor(private route: Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.activeRoute.snapshot.paramMap.get('userType');
    console.log(this.userType);
  }

  showOptionsAdminProf(adminList){
    if(adminList.title === "Asociar profesor"){
      this.route.navigateByUrl('/asociar-profesor');
    }else if(adminList.title === "Ingresar nuevo profesor"){
      this.route.navigateByUrl('/ingresar-profesor');
    }else if(adminList.title === "Eliminar profesor"){
      this.route.navigateByUrl('/eliminar-profesor');
    }
  }

  closeSession(){
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }
}
