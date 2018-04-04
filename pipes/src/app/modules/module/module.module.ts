import {LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers:[{provide:LOCALE_ID,useValue:'es'}],
  bootstrap:[AppComponent]
})
export class ModuleModule { }
