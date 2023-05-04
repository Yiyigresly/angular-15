import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule, //* Modulo de contador
    HeroesModule,//*Modulo de heroes
    DbzModule//! dbz Modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
