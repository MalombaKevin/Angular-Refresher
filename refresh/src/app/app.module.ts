import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';
import { NameDetailsComponent } from './name-details/name-details.component';
import { MalombaComponent } from './malomba/malomba.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    NameDetailsComponent,
    MalombaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
