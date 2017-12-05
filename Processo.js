class Processo {

    constructor(nome, vigencia, main, instancias, mapas, dataDoDeploy) {
        this.nome = nome;
        this.vigencia = vigencia;
        this.main = main;
        this.instancias = instancias;
        this.mapas = mapas;
        this.dataDoDeploy = dataDoDeploy;
    }

}

module.exports = Processo;