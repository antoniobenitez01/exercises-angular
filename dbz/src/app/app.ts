import { Component, signal } from '@angular/core';
import { DbzModule } from './dbz/dbz-module';
import { MainPageComponent } from "./dbz/pages/mainpage";

@Component({
  selector: 'app-root',
  imports: [DbzModule, MainPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dbz');
}
