import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

import { EmpleadosserviceService } from '../../services/empleadosservice.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-listaempleados',
  templateUrl: './listaempleados.component.html',
  styleUrls: ['./listaempleados.component.css']
})
export class ListaempleadosComponent implements OnInit {

empleados: any =  [];
  constructor(private es:EmpleadosserviceService, private r:Router) { }

  ngOnInit(): void {
  this.getEmpleados();    
  }

getEmpleados(){
  this.es.getEmpleados().subscribe(
    res => {
      this.empleados = res;
    },
    error => console.log(error)
  );
}
  eliminar(id: string){
   
    this.es.eliminarEmpleado(id).subscribe(
      res =>{ 
        this.getEmpleados();    
      },
      err => console.log(err)
      )
       window.location.reload();
  }


}
