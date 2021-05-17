import { Router } from 'express';
import {indexController} from '../controllers/indexcontroller';

class Indexrouts {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', indexController.index );
        }
    }


const indexroutes = new Indexrouts();
export default indexroutes.router ;

