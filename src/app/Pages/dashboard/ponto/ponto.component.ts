import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.css'],
})
export class PontoComponent implements OnInit {
  constructor(private userService: UserService) {}

  inputs: string[] = ['', '', '', '', '', ''];
  combinedNumber: string = '';
  codeValid = true;
  successMessage = false;

  ngOnInit(): void {
    this.codeValid = true;
    this.successMessage = false;
  }

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!value) {
      return;
    }

    this.inputs[index] = value;

    // Focus on the next input if available
    if (index < this.inputs.length - 1) {
      const nextInput = document.getElementById('otc-' + (index + 2));
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  combineNumbers() {
    // Combine the numbers in the array into a single string
    const combinedString = this.inputs.join('');
    return combinedString;
  }

  validarCodigo() {
    const sessao = sessionStorage.getItem('usuario_logado');
    const { id, jwtToken } = JSON.parse(sessao!);
    this.userService
      .registrarFrequencia(this.combineNumbers(), jwtToken)
      .subscribe(
        (res) => {
          this.codeValid = true;
          this.successMessage = true;
          this.inputs = ['', '', '', '', '', ''];
        },
        (err) => {
          this.codeValid = false;
          this.successMessage = false;
        }
      );
  }
}
