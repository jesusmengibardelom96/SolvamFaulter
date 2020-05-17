import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsociarProfesorService {

  constructor(private http: HttpClient) { }
  
  refillUsuarios(){
    this.http.get('https://www.solvam.es/app/php/db_select_usuarios.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Usuarios", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillCursos(){
    this.http.get('https://www.solvam.es/app/php/db_select_curso.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Cursos", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillAsignaturas(json){
    this.http.post('https://www.solvam.es/app/php/db_select_asignaturas_curso.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Asignaturas", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  asociarProfAsig(json){
    this.http.post('https://www.solvam.es/app/php/db_asociar_prof_asig.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  clearStorageUsu(){
    localStorage.removeItem("Usuarios");
  }
  clearStorageCur(){
    localStorage.removeItem("Cursos");
  }
  clearStorageAsig(){
    localStorage.removeItem("Asignaturas");
  }
}
