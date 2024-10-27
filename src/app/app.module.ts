import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MemoryMatchingGameComponent } from './memory-matching-game/memory-matching-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryMatchingGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
