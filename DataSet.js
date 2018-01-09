var EntityMetadata = require("./EntityMetadata");

class DataSet {

    constructor(){
        this.entities = [];
    }

    save(entity, entityType) {
        entity.entityMetadata= new EntityMetadata(entityType, "create");
        this.entities.push(entity);
    }

    update(entity, entityType) {
        entity.entityMetadata= new EntityMetadata(entityType, "update");
        this.entities.push(entity);
    }
}

module.exports = DataSet;