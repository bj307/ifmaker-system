import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements OnInit {
  constructor(private router: Router) {}

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
