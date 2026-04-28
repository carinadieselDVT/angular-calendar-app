import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menubar } from './shared/components/menubar/menubar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Menubar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
