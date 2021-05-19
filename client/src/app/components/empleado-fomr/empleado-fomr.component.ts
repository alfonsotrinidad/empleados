import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

import { EmpleadosserviceService} from '../../services/empleadosservice.service'

import {Router} from '@angular/router';
@Component({
  selector: 'app-empleado-fomr',
  templateUrl: './empleado-fomr.component.html',
  styleUrls: ['./empleado-fomr.component.css']
})
export class EmpleadoFomrComponent implements OnInit {

  constructor(
    private es:EmpleadosserviceService,
    private r:Router) { }

  empleado:Empleado = {
    id:0,
    nombre:"", 
    fecha: ""
  };

  ngOnInit(): void {
  }

  saveempleado(){
    //delete this.empleado.id;
    //delete this.empleado.fecha;
   

    var dateControl =  (<HTMLInputElement>document.getElementById('fecha')).value ;
    this.empleado.fecha = dateControl;
    this.es.saveEmpleado(this.empleado).subscribe(
      res => {
       
      },
      err => console.error(err)

      )
      this.r.navigateByUrl('/lista');
  }

}
