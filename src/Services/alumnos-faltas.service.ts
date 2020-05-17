import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosFaltasService {

  constructor(private http: HttpClient) { }

  getFaltasAlumno(date1, date2, nombreAsig:any){
    localStorage.removeItem("Faltas");
    let jsonAsig = {
      fechaInicio: date1,
      fechaFin: date2,
      nombAsig: nombreAsig
    }
    this.http.post('https://www.solvam.es/app/php/db_comp_faltas.php', JSON.stringify(jsonAsig),{observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Faltas", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }
  clearStorageFal(){
    localStorage.removeItem("Faltas");
  }
}
