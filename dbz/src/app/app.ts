import { Component, signal } from '@angular/core';
import { DbzModule } from './dbz/dbz-module';

@Component({
  selector: 'app-root',
  imports: [DbzModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dbz');
}
