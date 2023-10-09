import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MemberComponent } from './Pages/dashboard/member/member.component';
import { PontoComponent } from './Pages/dashboard/ponto/ponto.component';
import { ProjetosComponent } from './Pages/dashboard/projetos/projetos.component';
import { AdminComponent } from './Pages/dashboard/admin/admin.component';
import { AtualizacaoComponent } from './Pages/dashboard/atualizacao/atualizacao.component';
import { AgendaComponent } from './Pages/dashboard/agenda/agenda.component';
import { GerarTokenComponent } from './Pages/dashboard/gerar-token/gerar-token.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'in',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: MemberComponent },
      { path: 'projetos', component: ProjetosComponent },
      { path: 'frequencia', component: PontoComponent },
      { path: 'atualizacoes', component: AtualizacaoComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'gerar-token', component: GerarTokenComponent },
    ],
  },

  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
