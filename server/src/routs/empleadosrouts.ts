import { Router } from 'express';
import { empleadoController} from '../controllers/empleadosController'
class empleadosRouts {
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/',empleadoController.index);
        }
    }


const empleadosrouts = new empleadosRouts();
export default empleadosrouts.router ;
