import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';
import { Input } from '@angular/core';

@Component({
  selector: 'dbz-lista',
  templateUrl: 'lista.html',
  standalone: false
})

export class ListaComponent {
  @Input('miLista')
  public listaPersonajes : Personaje[] = [{
    nombre : "Trunks",
    fuerza : 7000
  }]
}
