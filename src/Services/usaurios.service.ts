import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsauriosService {

  constructor(private http: HttpClient) { }
  
  refillUsuarios(){
    this.http.get('https://www.solvam.es/app/php/db_select_usuarios.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Usuarios", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  refillUsuariosLogin(){
    this.http.get('https://www.solvam.es/app/php/db_select_usuarios_login.php', {observe: 'body'})
    .subscribe((res: Response) => {
      localStorage.setItem("Usuarios", JSON.stringify(res));
    }, (err)=>{
      console.log("Error!");
    });
  }

  updateUsuario(json){
    this.http.post('https://www.solvam.es/app/php/db_update_usuario.php', JSON.stringify(json), {observe: 'body'})
    .subscribe((res: Response) => {
    }, (err)=>{
      console.log("Error!");
    });
  }

  clearStorageUsu(){
    localStorage.removeItem("Usuarios");
  }
}
