import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoFomrComponent} from './components/empleado-fomr/empleado-fomr.component';
import { ListaempleadosComponent} from './components/listaempleados/listaempleados.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'lista',
    pathMatch:'full'

  },
  {
    path:'nuevo',
    component:EmpleadoFomrComponent
  },
  {
    path:'lista',
    component:ListaempleadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
