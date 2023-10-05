import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  menuVisible = false;
  usuario: IUsuario = {
    id: '',
    nome: '',
    email: '',
    nivel_acesso: ''
  };
  ngOnInit(): void {
    this.menuVisible = false;
    this.validaToken();
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
          console.log(this.usuario);
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

  verifyAccess() {
    
    if (this.usuario.nivel_acesso === "admin") {
      this.isAdmin();
      
    } else if (this.usuario.nivel_acesso === "member") {
      this.isMember();
      
    } else {
      console.log('not member');
      // this.router.navigate(['/login']);
    }
  }

  isAdmin() {
    console.log('is admin');
  }

  isMember() {
    console.log('is member');
  }
}
