import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtualizacao } from 'src/app/interfaces/IAtualizacao';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { AtualizacaoService } from 'src/app/services/atualizacao.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private projetoService: ProjetosService,
    private atualizacoesService: AtualizacaoService
  ) {}

  menuVisible = false;
  usuario: IUsuario = {
    id: '',
    nome: '',
    email: '',
    nivel_acesso: '',
    num_projetos: 0,
    status: '',
  };

  projetos: IProjeto[] = [];

  projetoView: IProjeto = {
    id: '',
    nome: '',
    descricao: '',
    tipo: '',
    usuarios: [],
    atualizacao: [],
  };

  atualizacoes: IAtualizacao[] = [];

  ngOnInit(): void {
    this.projetos = [];
    this.atualizacoes = [];
    this.lerDados();
    this.lerProjetos();
    this.validaToken();
    const sessao = sessionStorage.getItem('usuario_logado');
    const { nome } = JSON.parse(sessao!);
    this.usuario!.nome = nome;
    this.menuVisible = false;
  }

  openMenu() {
    if (this.menuVisible) {
      this.menuVisible = false;
    } else {
      this.menuVisible = true;
    }
  }

  validaToken() {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao == null) {
      this.router.navigate(['/login']);
    } else {
      const { jwtToken } = JSON.parse(sessao);
      this.userService.validarToken(jwtToken).subscribe(
        (res: any) => {
          this.usuario!.id = res.id;
          this.usuario!.nome = res.nome;
          this.usuario!.email = res.email;
          this.usuario!.nivel_acesso = res.nivel_acesso;
        },
        (err) => {
          sessionStorage.clear;
          this.router.navigate(['/login']);
        }
      );
    }
  }

  lerDados() {
    const projetos = sessionStorage.getItem('projetos');
    const status = sessionStorage.getItem('status');
    if (projetos == null || status == null) {
      setTimeout(() => {
        this.lerDados();
      }, 100);
    } else {
      this.usuario.status = status!;
      this.usuario.num_projetos = Number(projetos);
    }
  }

  lerProjetos() {
    const sessao = sessionStorage.getItem('usuario_logado');
    const { id } = JSON.parse(sessao!);
    if (id === '') {
      setTimeout(() => {
        this.lerProjetos();
      }, 100);
    } else {
      this.projetoService.buscarMeusProjetos(id).subscribe((res: any) => {
        res.map((projeto: IProjeto) => {
          this.projetos.push(projeto);
        });
      });
    }
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
