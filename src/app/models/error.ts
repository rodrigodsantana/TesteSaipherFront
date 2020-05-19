export enum criticidade_enum
{
    alta = 1,
    media = 2,
    baixa = 3
}

export enum camada_enum
{
    app = 1,
    dominio = 2,
    repositorio = 3,
    outros = 4
}


export enum tipoNotificacao_enum
{
    alerta = 1,
    erro = 2,
    sucesso = 3,
    informacao = 4

}

export enum intencaoNotificacao_enum
{

    inconsistenciaDataAgendamentoVoo = 10

}

export class Error {

    mensagem:string = '';
    criticidade:criticidade_enum = criticidade_enum.media;
    camada:camada_enum = camada_enum.outros;
    tiponotificacao:tipoNotificacao_enum.erro;
    intecaonotificacao:intencaoNotificacao_enum = null;
    camposCriticados:Array<string> = [];


}


