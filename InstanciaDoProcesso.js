class InstanciaDoProcesso {

    constructor(id, dataInicioDaExecucao, dataFimDaExecucao, status, responsavel, processo, 
        dataDeReferencia, reproducao) {
            this.id = id;
            this.dataInicioDaExecucao = dataInicioDaExecucao;
            this.dataFimDaExecucao = dataFimDaExecucao;
            this.status = status;
            this.responsavel = responsavel;
            this.processo = processo;
            this.dataDeReferencia = dataDeReferencia;
            this.reproducao = reproducao;
    }

}

module.exports = InstanciaDoProcesso;