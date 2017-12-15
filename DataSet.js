class DataSet {

    constructor(){
        this.entities = [];
    }

    save(entity) {
        this.entities.push(entity.titular);
    }

    update(entity) {
    }

    delete(entity) {
    }
}

module.exports = DataSet;