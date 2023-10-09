import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { IUsuario } from 'src/app/interfaces/IUsuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  @Input() userAdmin!: boolean;
  menuVisible = false;

  ngOnInit(): void {
    this.menuVisible = false;
  }

  openMenu() {
    if (this.menuVisible) {
      this.menuVisible = false;
    } else {
      this.menuVisible = true;
    }
  }

  sair() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
