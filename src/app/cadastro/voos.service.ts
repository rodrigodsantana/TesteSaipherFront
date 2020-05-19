import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voo } from './voos';
import { Aeronave } from './aeronaves';
import { Aeroportos } from './aeroportos';
import { Padrao } from './padrao';
import { CadastroVoo } from './cadastra-altera-voo/cadastro-voo';

@Injectable()
export class VoosServices {
    constructor(private http: HttpClient){

    }

    showErros(error:any ) {

            let err = '';
            error.error.value.forEach(element => {
                err += element.mensagem+'\n';
            });

            alert(err);    

    }

    UrlServiceV1: string = "https://localhost:44365/";

    IncluirVoo(voo:CadastroVoo):Observable<Padrao<CadastroVoo>> {        
        return this.http.post<Padrao<CadastroVoo>>(this.UrlServiceV1 + "api/voo/InserirVoo",  voo)
    } 

    DeletarVoo(id:string):Observable<Padrao<CadastroVoo>> {        
        return this.http.delete<Padrao<CadastroVoo>>(this.UrlServiceV1 + "api/voo/DeletarVoo/"+id)
    } 

    AlterarVoo(voo:CadastroVoo):Observable<Padrao<CadastroVoo>> {        
        return this.http.put<Padrao<CadastroVoo>>(this.UrlServiceV1 + "api/voo/AlterarVoo",  voo)
    } 

    ObterVoo(id:string):Observable<Padrao<CadastroVoo>> {        
        return this.http.get<Padrao<CadastroVoo>>(this.UrlServiceV1 + "api/voo/ObterVoo/"+id)
    } 

    obterVoos():Observable<Padrao<Voo[]>> {        
        return this.http.post<Padrao<Voo[]>>(this.UrlServiceV1 + "api/voo/ObterVoos",  { "Ativo":"true" })
    } 
    obterAeronaves():Observable<Padrao<Aeronave[]>> {        
        return this.http.get<Padrao<Aeronave[]>>(this.UrlServiceV1 + "api/aeronave/ObterAeronaves")
    }
    obterAeroportos():Observable<Padrao<Aeroportos[]>> {        
        return this.http.get<Padrao<Aeroportos[]>>(this.UrlServiceV1 + "api/aeroporto/ObterAeroportos")
    }
}