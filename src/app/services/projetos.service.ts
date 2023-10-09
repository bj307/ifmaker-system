import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetosService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public buscarMeusProjetos(token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.get(`${this.LOCAL}projeto/meus-projetos`, { headers });
  }

  public buscarTodosProjetos() {}
}
