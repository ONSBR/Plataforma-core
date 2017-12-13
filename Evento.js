class Evento {
    constructor(name, processName, data, instancia, responsavel, payload) {
        this.name = name;
        this.processName = processName;
        this.data = data;
        this.instancia = instancia;
        this.responsavel = responsavel;
        this.payload = payload;
    }
}

module.exports = Evento;