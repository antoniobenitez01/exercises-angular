import { Component } from '@angular/core';
import { DBZService } from '../services/dbz-service';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'mainpage.html',
  standalone: false
})

export class MainPageComponent {
  // DBZService debería ser privado - Utilizando GETTERS
  constructor(private dbzService : DBZService){}

  get personajes(): Personaje[]{
    return this.dbzService.getPersonajes();
  }

  onDeletePersonaje(id:string): void{
    this.dbzService.deletePersonajeById(id);
  }

  onAddPersonaje(personaje: Personaje){
    this.dbzService.addPersonaje(personaje);
  }
}
