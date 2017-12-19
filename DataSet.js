class DataSet {

    constructor(){
        this.entities = new Map();
    }

    save(entity, entityType) {
        if(this.entities.get(entityType) == undefined) {
            this.entities.set(entityType, [entity]);
        } else {
            this.entities.get(entityType).push(entity);
        }
    }

    update(entity) {
    }

    delete(entity) {
    }
}

module.exports = DataSet;