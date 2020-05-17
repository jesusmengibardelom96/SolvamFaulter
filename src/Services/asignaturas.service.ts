import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlumnoMatriculaService } from './alumno-matricula.service';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  constructor(private http: HttpClient, private matService: AlumnoMatriculaService) { }

  refillAsignaturas(){
    this.http.get('https://www.solvam.es/app/php/db_select_asignaturas.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Asignaturas", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillAsignaturasCurso(CursoAsig){
    let jsonCursoAsig = {
      Grupo: CursoAsig
    }
    console.log(jsonCursoAsig);
    this.http.post('https://www.solvam.es/app/php/db_select_asignaturas_curso.php', JSON.stringify(jsonCursoAsig), {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Asignaturas", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillMessages(){
    this.http.get('https://www.solvam.es/app/php/db_select_message.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Messages", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }


  clearStorageAsig(){
    localStorage.removeItem("Asignaturas");
  }

  clearStorageMess(){
    localStorage.removeItem("Messages");
  }

  getCompAsig(NombreAsig:String){
    this.matService.setStorageComp(NombreAsig);
  }

  
}
