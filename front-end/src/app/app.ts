import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home.component';
import { About } from './about/about.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taskflow');
}
