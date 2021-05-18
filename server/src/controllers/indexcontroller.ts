import {Request, Response} from 'express';
import pool from '../database';

class IndexController{
    public async list(req:Request,res:Response):Promise<void>{
      const empleado =  await pool.query('select * from empleados');
      res.json(empleado);
        
    }

    public async getone(req:Request,res:Response):Promise<any>{
        const empleado =  await pool.query('select * from empleados where id = ?',req.params.id);
        if(empleado.length > 0)
            return  res.json(empleado[0]);
        return res.status(404).json({text:'Empleado no encontrado'});
    }

    public async create (req:Request,res:Response):Promise<void> {
        await pool.query('insert into empleados set ?',[req.body]);
        console.log(req.body);
        res.send(req.body);
    }
    public async delete (req:Request,res:Response):Promise<void>{
        await pool.query('delete from empleados where id = ?',[req.params.id])
        res.send("Juego eliminado!   " + req.params.id);
    }
    public async update (req:Request,res:Response):Promise<void>{
        await pool.query('update empleados set ? where id = ?',[req.body,req.params.id])
        res.send("Actualizando: "+ req.params.id );
    }

}


export const indexController = new IndexController(); 