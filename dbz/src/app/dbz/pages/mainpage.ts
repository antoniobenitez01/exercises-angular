import { Component, OnInit } from '@angular/core';
import { ListaComponent } from '../components/lista';
import { AddPersonajeComponent } from '../components/addpersonaje';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: 'mainpage.html',
  imports: [ListaComponent,AddPersonajeComponent]
})

export class MainPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
