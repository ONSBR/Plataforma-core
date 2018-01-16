var EntityMetadata = require("./EntityMetadata");
var Enumerable = require('linq');

const CHANGETRACK_CREATE = "create";
const CHANGETRACK_UPDATE = "update";
const CHANGETRACK_DELETE = "delete";

class DataSet {

    constructor(){


        this.entities = [];
    }

    insert(entity, entityType) {

        this._validateEntity(entity);
        this._validateEntityType(entityType);    

        var collectionType = this._createOrGetCollection(entityType);

        entity._metadata = new EntityMetadata(entityType, CHANGETRACK_CREATE);
        collectionType.push(entity);
    }

    update(entity) {

        this._validateEntity(entity);
        this._validateMetadata(entity);
        entity._metadata.changeTrack = CHANGETRACK_UPDATE;
    }

    // TODO tem um problema para ser validado que é o caso de consulta após remoção,
    // o item deveria continuar existindo?
    delete(entity) {
        
        this._validateEntity(entity);
        this._validateMetadata(entity);
        entity._metadata.changeTrack = CHANGETRACK_DELETE;
    }

    queryable(entityType) {

        this._validateEntityType(entityType);    
        return Enumerable.from(this._createOrGetCollection(entityType)).where(
            function(item) { return item._metadata.changeTrack != CHANGETRACK_DELETE; }
        );
    }

    _loadOrReplaceCollection(collect, entityType) {
        
        this._validateEntityType(entityType);    
        
        // TODO proderia validar se todas entidades da lista tem metadados
        
        if (collect) {
            this.entities[entityType] = collect;
        }
    }

    _createOrGetCollection(entityType) {
        
        var retorno = this.entities[entityType];
        if (!retorno) {
            retorno = [];
            this.entities[entityType] = retorno;
        } 
        return retorno;
    }   

    _validateEntity(entity) {
        if (!entity) {
            throw new Error("Entidade deve ser informada");
        }
    }

    _validateMetadata(entity) {
        if (!entity._metadata) {
            throw new Error("Entidade não tem os metadados.");
        }
    }

    _validateEntityType(entityType) {
        if (!entityType) {
            throw new Error("Tipo da Entidade deve ser informada");
        }
    }

}

module.exports = DataSet;