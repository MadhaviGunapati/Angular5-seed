import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  // Al  modules will declare here
  imports: [
    BrowserModule
  ],
  // All component & pipe &router will declare here
  declarations: [
    AppComponent
  ],
  // Main component
  bootstrap: [AppComponent],
  // All services declare here
  providers: []
})
export class AppModule { }
