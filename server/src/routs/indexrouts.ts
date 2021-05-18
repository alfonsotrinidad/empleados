import { Router } from 'express';
import {indexController} from '../controllers/indexcontroller';

class Indexrouts {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', indexController.list );
        this.router.get('/:id',indexController.getone);
        this.router.post('/',indexController.create);
        this.router.delete('/:id', indexController.delete);
        this.router.put('/:id', indexController.update);


        }
    }


const indexroutes = new Indexrouts();
export default indexroutes.router ;

