import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-alumno',
  templateUrl: './admin-alumno.page.html',
  styleUrls: ['./admin-alumno.page.scss'],
})
export class AdminAlumnoPage implements OnInit {
  //Variables para componentes
  adminAlumnosList:any[] = [{title: "Insertar alumnos"}, {title:"Eliminar matricula"}, {title:"Eliminar Alumno"}];
  titles:string = "";

  //Variable usertype
  userType:any;

  constructor(private route: Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.userType = this.activeRoute.snapshot.paramMap.get('userType');
    console.log(this.userType);
  }

  showOptionsAdminAlumno(adminList){
    if(adminList.title === "Subir CSV alumnos"){
      this.route.navigate(['/csv-alumno', { userType: this.userType }]);
    }else if(adminList.title === "Eliminar matricula"){
      this.route.navigate(['/eliminar-matricula', { userType: this.userType }]);
    }else if(adminList.title === "Eliminar Alumno"){
      this.route.navigate(['/eliminar-alumno', { userType: this.userType }]);
    }
  }

  closeSession(){
    this.route.navigateByUrl("/login");
    sessionStorage.removeItem("User");
  }

}
