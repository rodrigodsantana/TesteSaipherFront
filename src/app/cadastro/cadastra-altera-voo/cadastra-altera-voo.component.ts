import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoosServices } from '../voos.service';
import { Aeronave } from '../aeronaves';
import { Aeroportos } from '../aeroportos';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CadastroVoo } from './cadastro-voo';
import { Padrao } from '../padrao';


@Component({
  selector: 'sp-cadastra-altera-voo',
  templateUrl: './cadastra-altera-voo.component.html'
})
export class CadastraAlteraVooComponent implements OnInit {
  public idVoo: string = '';
  public tipo: string = "";
  public cityId: string = "";
  public aeronaves: Aeronave[] = [];
  public aeroportos: Aeroportos[] = [];
  public novoAlteraForm: FormGroup;
  lista1: boolean = false;
  lista2: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private vooService: VoosServices, public fb: FormBuilder) {

    this.idVoo = this.route.snapshot.params.id;

  }

  novoAltera(valor: CadastroVoo) {
    if (this.novoAlteraForm.status === 'VALID') {
      //console.log(valor);
      valor.aeronaveId = valor.aeronaveForm.id;
      valor.aeroportoDestinoId = valor.aeroportoDestino.id;
      valor.aeroportoOrigemId = valor.aeroportoOrigem.id;
      valor.id = this.idVoo;

      if (this.idVoo) {

        this.vooService.AlterarVoo(valor).subscribe((resp: Padrao<CadastroVoo>) => {

          this.router.navigate(['/home']);

        }, error => {

          this.vooService.showErros(error);
        });

      } else {

        this.vooService.IncluirVoo(valor).subscribe((resp: Padrao<CadastroVoo>) => {

          this.router.navigate(['/home']);

        }, error => {

          this.vooService.showErros(error);
        });

      }



    }

  }


  get aeronaveForm() {

    return this.novoAlteraForm.get('aeronaveForm');

  }

  get aeroportoOrigem() {

    return this.novoAlteraForm.get('aeroportoOrigem');

  }

  get aeroportoDestino() {

    return this.novoAlteraForm.get('aeroportoDestino');

  }

  ngOnInit(): void {


    this.vooService.obterAeronaves()
      .subscribe(
        aeronaves => {
          this.aeronaves = aeronaves.value;
          this.lista2 = true;
          this.vooService.obterAeroportos()
            .subscribe(
              aeroportos => {
                this.aeroportos = aeroportos.value;
                this.lista1 = true;

                this.CarregaFormulario();
              },
              error => this.vooService.showErros(error)
            )
        },
        error => this.vooService.showErros(error)
      )

    /* this.novoAlteraForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      senha:new FormControl('',[Validators.required, Validators.minLength(3)])
}); */

  }

  private CarregaFormulario() {
    this.novoAlteraForm = new FormGroup({
      //usernome:new FormControl('',[Validators.required,Validators.email]),
      id: new FormControl(''),
      aeroportoOrigem: new FormControl(null, [Validators.required]),
      aeroportoDestino: new FormControl(null, [Validators.required]),
      aeronaveForm: new FormControl(null, [Validators.required]),
      dataAgendamento: new FormControl(new Date(), [Validators.required])
    });
    if (this.idVoo) {
      this.tipo = "Alteração";
      this.vooService.ObterVoo(this.idVoo)
        .subscribe(voo => {
          let v = voo.value;
          let vaeronave = this.aeronaves.find(x => x.id == v.aeronaveId);
          let vaeroportoOrigem = this.aeroportos.find(x => x.id == v.aeroportoOrigemId);
          let vaeroportoDestino = this.aeroportos.find(x => x.id == v.aeroportoDestinoId);
          this.novoAlteraForm = new FormGroup({
            //usernome:new FormControl('',[Validators.required,Validators.email]),
            id: new FormControl(v.id),
            aeroportoOrigem: new FormControl(vaeroportoOrigem, [Validators.required]),
            aeroportoDestino: new FormControl(vaeroportoDestino, [Validators.required]),
            aeronaveForm: new FormControl(vaeronave, [Validators.required]),
            dataAgendamento: new FormControl(v.dataAgendamento, [Validators.required])
          });
          //console.log(aeronaves.value)
        }, error => this.vooService.showErros(error));
    }
    else {
      this.tipo = "Cadastro";
      this.novoAlteraForm = new FormGroup({
        //usernome:new FormControl('',[Validators.required,Validators.email]),
        id: new FormControl(''),
        aeroportoOrigem: new FormControl(null, [Validators.required]),
        aeroportoDestino: new FormControl(null, [Validators.required]),
        aeronaveForm: new FormControl(null, [Validators.required]),
        dataAgendamento: new FormControl(new Date(), [Validators.required])
      });
    }
  }
}
