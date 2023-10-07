import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
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
