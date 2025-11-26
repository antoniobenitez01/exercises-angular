import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: 'addpersonaje.html',
  standalone: false
})

export class AddPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    nombre: '',
    fuerza: 0
  }

  public addPersonaje(): void{
    console.log(this.personaje);
    if (this.personaje.nombre.length === 0 ) return;

    this.onNewPersonaje.emit(this.personaje);
  }
}
