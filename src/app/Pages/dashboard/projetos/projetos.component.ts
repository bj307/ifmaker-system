import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtualizacao } from 'src/app/interfaces/IAtualizacao';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { AtualizacaoService } from 'src/app/services/atualizacao.service';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  constructor(
    private router: Router,
    private projetoService: ProjetosService,
    private atualizacoesService: AtualizacaoService
  ) {}

  ngOnInit(): void {
    this.projetos = [];
    this.atualizacoes = [];
    this.lerProjetos();
  }

  projetoView: IProjeto = {
    id: '',
    nome: '',
    descricao: '',
    tipo: '',
    usuarios: [],
    atualizacao: [],
  };

  atualizacoes: IAtualizacao[] = [];

  projetos: IProjeto[] = [];

  lerProjetos() {
    this.projetoService.buscarTodosProjetos().subscribe((res: any) => {
      res.map((projeto: IProjeto) => {
        this.projetos.push(projeto);
      });
    });
  }

  lerAtualizacoes(id: string) {
    this.atualizacoesService.buscarAtualizacoes(id).subscribe((res: any) => {
      res.map((a: IAtualizacao) => {
        this.atualizacoes.push(a);
      });
    });
  }

  verProjeto(projeto: IProjeto) {
    this.atualizacoes = [];
    this.lerAtualizacoes(projeto.id);
    this.projetoView = projeto;
  }
}
