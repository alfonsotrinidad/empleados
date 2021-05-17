import {Request, Response} from 'express';

//base de datos

import pool from "../database";

class EmpleadoController{
    public index(req:Request,res:Response){
        const x = pool.query('DESCRIBE empleados');
        res.send(x);
    }
}


export const empleadoController = new EmpleadoController(); 