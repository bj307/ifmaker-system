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

  public buscarMeusProjetos(id: string) {

    return this.http.get(`${this.API}projeto/meus-projetos/${id}`);
  }

  public buscarTodosProjetos() {}
}
