import { Aeronave } from '../aeronaves';
import { Aeroportos } from '../aeroportos';

export class CadastroVoo {


    aeroportoDestinoId:string = '';
    aeroportoOrigemId:string = '';
    aeronaveId:string = '';
    dataAgendamento:Date = null;
    aeronaveForm:Aeronave = new Aeronave();
    aeroportoOrigem:Aeroportos = new Aeroportos();
    aeroportoDestino:Aeroportos = new Aeroportos();
    id:string = '';

}
