import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public login(usuario: ILogin) {
    return this.http.post(`${this.LOCAL}sessao`, usuario);
  }
}
