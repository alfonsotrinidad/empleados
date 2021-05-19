import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

import { EmpleadosserviceService} from '../../services/empleadosservice.service'

import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-empleado-fomr',
  templateUrl: './empleado-fomr.component.html',
  styleUrls: ['./empleado-fomr.component.css']
})
export class EmpleadoFomrComponent implements OnInit {
edit = false;
  constructor(
    private es:EmpleadosserviceService,
    private ar:ActivatedRoute,
    private r:Router) { }

  empleado:any = {
    id:0,
    nombre:"", 
    fecha: ""
  };

  ngOnInit(): void {
    const params = this.ar.snapshot.params;
    if(params.id){
     
      this.es.getEmpleado(params.id).subscribe((
        res  => {
          console.log(res);
          this. edit = true;
          this.empleado = res;
        }
      ))
    }
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

  updateempleado(){
    this.es.actualizarEmpleado(this.empleado.id,this.empleado).subscribe(
      res => { console.error(res)},
      err => console.error(err)
    )
  }

}
