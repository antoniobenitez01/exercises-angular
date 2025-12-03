import { Component } from '@angular/core';
import { DBZService } from '../services/dbz-service';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'mainpage.html',
  standalone: false
})

export class MainPageComponent {
  // DBZService debería ser privado - Utilizando GETTERS
  constructor(public dbzService : DBZService){}
}
