var EntityMetadata = require("./EntityMetadata");

class DataSet {

    constructor(){
        this.entities = [];
    }

    save(entity, entityType) {
        entity._metadata = new EntityMetadata(entityType, "create");
        this.entities.push(entity);
    }

    update(entity, entityType) {
        entity._metadata.changeTrack = "update";
        this.entities.push(entity);
    }
}

module.exports = DataSet;