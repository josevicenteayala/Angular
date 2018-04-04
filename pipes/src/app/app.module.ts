import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';


@NgModule({
  declarations: [
    AppComponent,CapitalizadoPipe, DomseguroPipe, ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:"en"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
