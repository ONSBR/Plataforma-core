class Processo {

    constructor(nome, operacoes, vigencia, main, instancias, mapas, dataDoDeploy) {
        this.nome = nome;
        this.operacoes = operacoes;
        this.vigencia = vigencia;
        this.main = main;
        this.instancias = instancias;
        this.mapas = mapas;
        this.dataDoDeploy = dataDoDeploy;
    }

}

module.exports = Processo;