import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoMatriculaService {

  response:any;
  constructor(private http: HttpClient) { }

  setStorageComp(nombreAsignatura:String){
    localStorage.removeItem("Matriculados");
    let jsonAsig = {
      nombre: nombreAsignatura
    }
    this.http.post('https://www.solvam.es/app/php/db_select_matricula.php', JSON.stringify(jsonAsig),{observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Matriculados", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  setStorageMat(){
    localStorage.removeItem("Matriculados");
    this.http.get('https://www.solvam.es/app/php/db_select_matricula_normal.php',{observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Matriculados", JSON.stringify(res));
    }, (err)=>{
      console.log(err);
    });
  }

  setStorageMatCur(json){
    let jsonCursoMat = {
      Grupo: json
    }
    this.http.post('https://www.solvam.es/app/php/db_matricula_curso.php', JSON.stringify(jsonCursoMat),{observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Matriculados", JSON.stringify(res));
    }, (err)=>{
      console.log(err);
    });
  }

  setStorageCompMat(json){
    this.http.post('https://www.solvam.es/app/php/db_select_matricula_alumno_asignatura.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("compMatricula", JSON.stringify(res));
      //console.log(res);
      //this.response = res;

    }, (err)=>{
      console.log(err);
    });
  }

  deleteMat(idMatricula){
    let jsonMat = {
      Id: idMatricula
    }
    this.http.post('https://www.solvam.es/app/php/db_delete_matricula.php', JSON.stringify(jsonMat),{observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log(err);
    });
  }

  deleteMatAlumno(json){
    this.http.post('https://www.solvam.es/app/php/db_delete_matricula_alumno.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log(err);
    });
  }

  deleteMensajeMat(json){
    this.http.post('https://www.solvam.es/app/php/db_delete_mensaje_matricula.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log(err);
    });
  }

  deleteMensaje(json){
    this.http.post('https://www.solvam.es/app/php/db_delete_mensaje.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log(err);
    });
  }

  clearStorageMat(){
    localStorage.removeItem("Matriculados");
  }

  clearStorageCompMat(){
    localStorage.removeItem("compMatricula");
  }
}