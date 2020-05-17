import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UploadCSVService {
  csv:any;
  constructor(private http : HttpClient) { }

  upload(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/uploadCsv.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  uploadMatricula(json:any)
  {
    this.http.post('https://www.solvam.es/app/php/db_uploadCsv_Matricula.php', JSON.stringify(json),{observe: 'body'})
    .subscribe((res: Response) => {
      
    }, (err)=>{
      console.log("Error!");
    });
  }
  
}
