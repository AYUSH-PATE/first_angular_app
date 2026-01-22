import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header';
import { Nav } from './navigation/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
