import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

//modelo
import { Empleado} from '../models/empleados' 
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root',
})
export class EmpleadosserviceService {
  URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getEmpleados() {
    return this.http.get(`${this.URL}`);
  }

  getEmpleado(id: String) {
    return this.http.get(`${this.URL}/${id}`);
  }

  saveEmpleado(empleado: Empleado) {
    return this.http.post(`${this.URL}`, empleado);
  }

  eliminarEmpleado(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
  actualizarEmpleado(id: string, nuevoEmpleado: Empleado): Observable<any> {
    return this.http.put(`${this.URL}/${id}`, nuevoEmpleado);
  }
}
