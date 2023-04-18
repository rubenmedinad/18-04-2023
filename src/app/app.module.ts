import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreFormularioComponent } from './padre-formulario/padre-formulario.component';
import { HijoListaComponent } from './hijo-lista/hijo-lista.component'
import { FormsModule } from '@angular/forms';
import { HijoLista2Component } from './hijo-lista2/hijo-lista2.component'
import { PadreFormulario2Component } from './padre-formulario2/padre-formulario2.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreFormularioComponent,
    HijoLista2Component,
    HijoListaComponent,
    PadreFormulario2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
