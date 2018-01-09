var EntityMetadata = require("./EntityMetadata");

class PlatformEntity {

    constructor(entityMetadata) {
        this._metadata = new EntityMetadata();
        this._metadata.type = this.constructor.name;
    }

}

module.exports = PlatformEntity;