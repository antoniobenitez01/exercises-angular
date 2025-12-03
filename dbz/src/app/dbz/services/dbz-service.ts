import { Injectable } from '@angular/core'
import { Personaje } from '../interfaces/personaje';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() {}

  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: "Krillin",
    fuerza : 500
  },{
    id: uuid(),
    nombre: "Goku",
    fuerza : 10000
  },{
    id: uuid(),
    nombre: "Vegeta",
    fuerza : 5000
  },{
    id: uuid(),
    nombre: "Trunks",
    fuerza : 7000
  },{
    id: uuid(),
    nombre: "Muten Roshi",
    fuerza : 1000
  }]

  public onNewPersonaje(personaje: Personaje): void{
    //const newPersonaje : Personaje = { id: uuid(), ...personaje};
    const newPersonaje : Personaje = {...personaje};
    newPersonaje.id = uuid();
    this.personajes.push(newPersonaje);
  }
  /*
  public onDeletePersonaje(index: number): void{
    console.log(this.personajes.at(index));
    this.personajes.splice(index,1);
  }*/

  public onDeletePersonaje( id: string){
    this.personajes = this.personajes.filter (personaje => personaje.id !== id);
  }
}
