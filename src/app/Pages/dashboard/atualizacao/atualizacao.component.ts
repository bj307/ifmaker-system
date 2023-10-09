import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAtualizacao } from 'src/app/interfaces/IAtualizacao';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.css'],
})
export class AtualizacaoComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.detalhes = '';
    this.projeto = '';
    this.validaToken();
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

  usuario = '';
  projeto = '';
  detalhes = '';

  p1: IProjeto = {
    id: '1',
    nome: 'UI Design',
    descricao: 'exemplo projeto de ensino',
    tipo: 'Ensino',
    usuarios: ['u1', 'u2'],
    atualizacao: ['a1', 'a2'],
  };

  p2: IProjeto = {
    id: '2',
    nome: 'Arduino',
    descricao: 'exemplo projeto de ensino',
    tipo: 'Ensino',
    usuarios: ['u1', 'u2'],
    atualizacao: ['a1', 'a2'],
  };

  projetos: IProjeto[] = [this.p1, this.p2];

  salvar() {
    const atualizacao: IAtualizacao = {
      usuario: this.usuario,
      projeto: this.projeto,
      detalhes: this.detalhes,
    };

    console.log(atualizacao);
  }
}
