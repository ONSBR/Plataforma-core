class Evento {
    constructor(name, processName, dataDoEvento, instancia, responsavel, payload, origem, dataRef, reproducao) {
        this.name = name;
        this.processName = processName;
        if (!dataDoEvento) {
            dataDoEvento = new Date();
        }
        this.dataDoEvento = dataDoEvento;
        this.instancia = instancia;
        this.responsavel = responsavel;
        this.payload = payload;
        this.origem = origem;
        this.dataRef = dataRef;
        this.reproducao = reproducao;
    }
}

module.exports = Evento;