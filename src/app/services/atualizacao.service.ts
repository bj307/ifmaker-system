import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IAtualizacao } from '../interfaces/IAtualizacao';

@Injectable({
  providedIn: 'root',
})
export class AtualizacaoService {
  constructor(private http: HttpClient) {}

  private API = environment.API;
  private LOCAL = 'http://localhost:3000/';

  public atualizar(atualizacao: IAtualizacao, token: string) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(`${this.LOCAL}atualizacao/inserir`, atualizacao, {
      headers,
    });
  }

  public buscarAtualizacoes(id: string) {
    return this.http.get(`${this.LOCAL}atualizacao?id=${id}`);
  }
}
