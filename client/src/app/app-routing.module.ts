import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoFomrComponent} from './components/empleado-fomr/empleado-fomr.component'

const routes: Routes = [
  {
    path:'nuevo',
    component:EmpleadoFomrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
