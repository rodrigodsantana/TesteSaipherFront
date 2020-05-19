import { Component, OnInit } from '@angular/core';
import { VoosServices } from '../voos.service';
import { Voo } from '../voos';
import { Aeronave } from '../aeronaves';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-lista-voo',
  templateUrl: './lista-voo.component.html'
})
export class ListaVooComponent implements OnInit {

  constructor(private router: Router,private vooService: VoosServices) { }

  public voos: Voo[] = []
  
  deletarVoo(voo:Voo)
  {

    if (confirm('Deseja realmente deletar esse voo?'))
    {
      
      this.vooService.DeletarVoo(voo.vooId)
      .subscribe(
        voos => {
          this.obterListaVoos()
        },
        error => this.vooService.showErros(error)
      ) 

    }

  }
  ngOnInit() {
     this.obterListaVoos();    
  }


  private obterListaVoos() {
    this.vooService.obterVoos()
      .subscribe(voos => {
        this.voos = voos.value;
        console.log(voos);
      }, error => this.vooService.showErros(error));
  }
}
