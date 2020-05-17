import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertarProfesorService {

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

  insertProfWithoutTutor(json){
    this.http.post('https://www.solvam.es/app/php/db_insert_usuario_no_tutor.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  insertProfWithTutor(json){
    this.http.post('https://www.solvam.es/app/php/db_insert_usuario_tutor.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  deleteProfWithAsig(json){
    this.http.post('https://www.solvam.es/app/php/db_delete_profesor_asig.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  deleteProfWithoutAsig(json){
    this.http.post('https://www.solvam.es/app/php/db_delete_profesor.php', JSON.stringify(json), {observe: 'body'})
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

}
