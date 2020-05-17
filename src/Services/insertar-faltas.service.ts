import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertarFaltasService {

  constructor(private http : HttpClient) { }

  insertFaltas(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/db_insert_faltas.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      
    }, (err)=>{
      console.log("Error!");
    });
  }
  insertMessage(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/db_insert_message.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      
    }, (err)=>{
      console.log("Error!");
    });
  }
}
