import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Alumnos } from 'src/app/models/Alumnos.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  constructor(private http: HttpClient) { }

  refillAlumnos(){
    this.http.get('https://www.solvam.es/app/php/db_select_alumnos.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Alumnos", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
    
  }

  refillAlumnosCur(json){
    this.http.post('https://www.solvam.es/app/php/db_select_alumnos_curso.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Alumnos", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
    
  }

  refillCurso(){
    this.http.get('https://www.solvam.es/app/php/db_select_curso.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Cursos", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
    
  }

  deleteAlumno(idAlumno){
    let jsonMat = {
      Id: idAlumno
    }
    console.log(jsonMat);
    this.http.post('https://www.solvam.es/app/php/db_delete_alumno.php', JSON.stringify(jsonMat), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log(err);
      localStorage.setItem("Error", JSON.stringify({msg : err.error.text}));
    });
    
  }

  clearStorageAlumnos(){
    localStorage.removeItem("Alumnos");
  }

  clearStorageCurso(){
    localStorage.removeItem("Cursos");
  }

  clearStorageErrors(){
    localStorage.removeItem("Error");
  }
}
