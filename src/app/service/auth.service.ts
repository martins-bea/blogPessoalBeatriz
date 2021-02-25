import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    
    ) { }

  entrar(userLogin: UserLogin):Observable<UserLogin> {
    return this.http.post<UserLogin>("http://localhost:8080/usuarios/logar", userLogin) //AQUI GARANTE QUE O END POINT VAI RECEBER UM USERLOGIN 


  }

  cadastrar(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user)


  }
}
