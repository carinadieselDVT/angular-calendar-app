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
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        },
      },
    ];
  }
}

// import { Component, OnInit } from '@angular/core';
// import { MenubarModule } from 'primeng/menubar';
// import { MenuItem } from 'primeng/api';

// @Component({
//     template: `
//         <div class="card">
//             <p-menubar [model]="items" />
//         </div>
//     `,
//     standalone: true,
//     imports: [MenubarModule]
// })
// export class MenubarRouterDemo implements OnInit {
//     items: MenuItem[] | undefined;

//     ngOnInit() {
//         this.items = [
//             {
//                 label: 'Router',
//                 icon: 'pi pi-palette',
//                 items: [
//                     {
//                         label: 'Installation',
//                         routerLink: '/installation'
//                     },
//                     {
//                         label: 'Configuration',
//                         routerLink: '/configuration'
//                     }
//                 ]
//             },
//             {
//                 label: 'Programmatic',
//                 icon: 'pi pi-link',
//                 command: () => {
//                     this.router.navigate(['/installation']);
//                 }
//             },
//             {
//                 label: 'External',
//                 icon: 'pi pi-home',
//                 items: [
//                     {
//                         label: 'Angular',
//                         url: 'https://angular.io/'
//                     },
//                     {
//                         label: 'Vite.js',
//                         url: 'https://vitejs.dev/'
//                     }
//                 ]
//             }
//         ];
//     }
// }
