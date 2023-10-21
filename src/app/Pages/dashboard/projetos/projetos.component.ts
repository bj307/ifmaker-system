import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProjeto } from 'src/app/interfaces/IProjeto';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  constructor(
    private router: Router,
    private projetoService: ProjetosService
  ) {}

  ngOnInit(): void {
    this.lerProjetos();
  }

  projetos: IProjeto[] = [];

  lerProjetos() {
    this.projetoService.buscarTodosProjetos().subscribe((res: any) => {
      res.map((projeto: IProjeto) => {
        this.projetos.push(projeto);
      });
    });
  }

  verProjeto(projeto: IProjeto) {
    console.log(projeto);
  }
}
