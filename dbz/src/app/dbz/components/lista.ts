import { Component, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { Input } from '@angular/core';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'lista.html',
  standalone: false
})

export class ListaComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input('miLista')
  public listaPersonajes : Personaje[] = []

  public eliminarPersonaje(id : string): void{
    this.onDeletePersonaje.emit(id);
  }
}
