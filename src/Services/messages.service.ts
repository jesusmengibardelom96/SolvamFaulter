import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  refillMessagesNoEnv(){
    this.http.post('https://www.solvam.es/app/php/db_select_messages.php',JSON.stringify({env:0}), {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Mensajes", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillMessagesEnv(){
    this.http.post('https://www.solvam.es/app/php/db_select_messages.php',JSON.stringify({env:1}), {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Mensajes", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  sendMessage(json){
    this.http.post('https://www.solvam.es/app/php/db_message_env.php',JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  clearStorageMess(){
    localStorage.removeItem("Mensajes");
  }
}
