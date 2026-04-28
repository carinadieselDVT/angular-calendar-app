import { Component, inject, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-bar',
  templateUrl: './menubar.component.html',
  standalone: true,
  imports: [MenubarModule],
})
export class Menubar implements OnInit {
  items: MenuItem[] | undefined;
  private router = inject(Router);
  ngOnInit() {
    this.items = [
      {
        label: 'Month View',
        command: () => {
          this.router.navigate(['/month-view']);
        },
      },
      {
        label: 'Year View',
        command: () => {
          this.router.navigate(['/year-view']);
        },
      },
    ];
  }
}
