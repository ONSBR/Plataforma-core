class Evento {
    constructor(name, data, instancia, responsavel, payload) {
        this.name = name;
        this.data = data;
        this.instancia = instancia;
        this.responsavel = responsavel;
        this.payload = payload;
    }
}

module.exports = Evento;