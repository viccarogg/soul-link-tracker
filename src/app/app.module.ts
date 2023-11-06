import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs'; 
import { HttpClientModule } from '@angular/common/http'; 

import { PartyComponent } from './party-tab/party/party.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartyTabComponent } from './party-tab/party-tab.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EncounterTabComponent } from './encounter-tab/encounter-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    PartyTabComponent,
    PokemonComponent,
    EncounterTabComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
