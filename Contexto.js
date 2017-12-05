class Contexto {
    
    constructor(evento, instancia, dataSet, dataDeReferencia){
        this.evento = evento;
        this.instancia = instancia;
        this.dataSet = dataSet;
        this.dataDeReferencia = dataDeReferencia;
    }
}

module.exports = Contexto;