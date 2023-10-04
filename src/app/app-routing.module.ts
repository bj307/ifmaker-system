import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MemberComponent } from './Pages/dashboard/member/member.component';
import { PontoComponent } from './Pages/dashboard/ponto/ponto.component';
import { ProjetosComponent } from './Pages/dashboard/projetos/projetos.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'in/dashboard', component: MemberComponent },
  { path: 'in/projetos', component: ProjetosComponent },
  { path: 'in/frequencia', component: PontoComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
