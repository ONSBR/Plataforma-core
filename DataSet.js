class DataSet {

    constructor(){
        this.entities = new Map();
        this.entities.set("clients", []);
        this.entities.set("accounts", []);
    }

    save(entity) {
        this.entities.get("clients").push(entity.titular);
        this.entities.get("accounts").push(entity.saldo);
    }

    update(entity) {
    }

    delete(entity) {
    }
}

module.exports = DataSet;