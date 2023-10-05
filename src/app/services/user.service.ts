import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFrequencia } from '../interfaces/IFrequencia';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public registrarFrequencia(cod: string, token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const registrar: IFrequencia = {
      codigo: cod,
    };
    console.log(registrar);
    return this.http.post(`${this.API}ponto/registrar`, registrar, { headers });
  }

  public validarToken(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(`${this.API}usuario/verify`, { headers });
  }
}
