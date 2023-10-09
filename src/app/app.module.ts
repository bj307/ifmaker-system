import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MemberComponent } from './Pages/dashboard/member/member.component';
import { HttpClientModule } from '@angular/common/http';
import { AppbarComponent } from './Components/appbar/appbar.component';
import { PontoComponent } from './Pages/dashboard/ponto/ponto.component';
import { ProjetosComponent } from './Pages/dashboard/projetos/projetos.component';
import { AdminComponent } from './Pages/dashboard/admin/admin.component';
import { AtualizacaoComponent } from './Pages/dashboard/atualizacao/atualizacao.component';
import { AgendaComponent } from './Pages/dashboard/agenda/agenda.component';
import { GerarTokenComponent } from './Pages/dashboard/gerar-token/gerar-token.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ToolbarComponent,
    HomePageComponent,
    MemberComponent,
    PontoComponent,
    AppbarComponent,
    ProjetosComponent,
    AdminComponent,
    AtualizacaoComponent,
    AgendaComponent,
    GerarTokenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
