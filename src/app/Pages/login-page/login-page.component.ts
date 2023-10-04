import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../interfaces/ILogin';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}
  email: string = '';
  senha: string = '';
  alerta!: string;
  erro = false;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(6), Validators.required]],
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      const usuario: ILogin = {
        email: this.email,
        senha: this.senha,
      };
      this.loginService.login(usuario).subscribe(
        (res: any) => {
          sessionStorage.setItem('usuario_logado', JSON.stringify(res));
          this.router.navigate(['/in/dashboard']);
        },
        (err) => {
          (this.erro = true), (this.alerta = err.error), console.log(err);
        }
      );
    }
  }
}
