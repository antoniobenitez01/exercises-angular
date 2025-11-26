import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'mainpage.html',
  standalone: false
})

export class MainPageComponent {
  public personajes: Personaje[] = [{
    nombre: "Krillin",
    fuerza : 500
  },{
    nombre: "Goku",
    fuerza : 10000
  },{
    nombre: "Vegeta",
    fuerza : 5000
  },{
    nombre: "Trunks",
    fuerza : 7000
  },{
    nombre: "Muten Roshi",
    fuerza : 1000
  }]

  public onNewPersonaje(personaje: Personaje): void{
    this.personajes.push(personaje);
  }
}
