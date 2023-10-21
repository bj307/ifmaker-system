import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtualizacao } from 'src/app/interfaces/IAtualizacao';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { AtualizacaoService } from 'src/app/services/atualizacao.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.css'],
})
export class AtualizacaoComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private projetoService: ProjetosService,
    private atualizacaoService: AtualizacaoService
  ) {}

  usuario = '';
  projeto = '';
  detalhes = '';

  projetos: IProjeto[] = [];

  ngOnInit(): void {
    this.detalhes = '';
    this.projeto = '';
    this.validaToken();
    this.lerProjetos();
  }

  validaToken() {
    const sessao = sessionStorage.getItem('usuario_logado');
    if (sessao == null) {
      this.router.navigate(['/login']);
    } else {
      const { jwtToken } = JSON.parse(sessao);
      this.userService.validarToken(jwtToken).subscribe(
        (res: any) => {
          this.usuario = res.id;
        },
        (err) => {
          console.log(err);
          sessionStorage.clear;
          this.router.navigate(['/login']);
        }
      );
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

  salvar() {
    const sessao = sessionStorage.getItem('usuario_logado');
    const { id, jwtToken } = JSON.parse(sessao!);
    const atualizacao: IAtualizacao = {
      usuario: id,
      projeto: this.projeto,
      detalhes: this.detalhes,
    };

    console.log(atualizacao);
    this.atualizacaoService
      .atualizar(atualizacao, jwtToken)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(['']);
  }
}
