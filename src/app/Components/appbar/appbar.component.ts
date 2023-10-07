import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent implements OnInit {
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
}
