import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmpleadoFomrComponent } from './components/empleado-fomr/empleado-fomr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmpleadoFomrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
