class Operacao {

    constructor(arquivo, metodo, eventosDeEntrada, eventosDeSaida, processo) {
        this.arquivo = arquivo;
        this.metodo = metodo;
        this.eventosDeEntrada = eventosDeEntrada;
        this.eventosDeSaida = eventosDeSaida;
        this.processo = processo;
    }

}

module.exports = Operacao;