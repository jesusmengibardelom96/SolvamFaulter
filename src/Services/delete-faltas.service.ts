import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteFaltasService {

  constructor(private http : HttpClient) { }

  deleteFaltas(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/db_delete_falta.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      
    }, (err)=>{
      console.log("Error!");
    });
  }
  updateHoras(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/db_update_horas.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      
    }, (err)=>{
      console.log("Error!");
    });
  }
}
