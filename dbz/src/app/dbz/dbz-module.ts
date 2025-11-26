import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/mainpage';
import { ListaComponent } from './components/lista';
import { AddPersonajeComponent } from './components/addpersonaje';

@NgModule({
  declarations: [MainPageComponent, ListaComponent, AddPersonajeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
