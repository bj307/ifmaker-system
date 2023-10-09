import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  userAdmin!: boolean;

  usuario: IUsuario = {
    id: '',
    nome: '',
    email: '',
    nivel_acesso: '',
  };

  ngOnInit(): void {
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
          this.usuario!.id = res.id;
          this.usuario!.nome = res.nome;
          this.usuario!.email = res.email;
          this.usuario!.nivel_acesso = res.nivel_acesso;
          this.verifyAccess();
        },
        (err) => {
          console.log(err);
          sessionStorage.clear;
          this.router.navigate(['/login']);
        }
      );
    }
  }

  isAdmin() {
    this.userAdmin = true;
    console.log('is admin');
  }

  isMember() {
    this.userAdmin = false;
    console.log('is member');
  }

  verifyAccess() {
    if (this.usuario.nivel_acesso === 'admin') {
      this.isAdmin();
    } else if (this.usuario.nivel_acesso === 'member') {
      this.isMember();
    } else {
      this.router.navigate(['/login']);
    }
  }
}
