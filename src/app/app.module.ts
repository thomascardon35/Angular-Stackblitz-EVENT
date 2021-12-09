import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NavBarComponent, NavItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
