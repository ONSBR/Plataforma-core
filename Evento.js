class Evento {
    constructor(name, processName, data, instancia, responsavel, payload, origem) {
        this.name = name;
        this.processName = processName;
        this.data = data;
        this.instancia = instancia;
        this.responsavel = responsavel;
        this.payload = payload;
        this.origem = origem;
    }
}

module.exports = Evento;