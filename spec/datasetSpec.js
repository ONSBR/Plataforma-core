describe("DateSet", function() {
    
    var DataSet = require('../DataSet');
    
    var dataSet;
    var contaType = "Conta";
    
    beforeEach(function() {
           
        dataSet = new DataSet();
                
        var conta1 = { name : "conta1", ativa: false };
        var conta2 = { name : "conta2", ativa: true };
    
        dataSet.insert(conta1, contaType);
        dataSet.insert(conta2, contaType);
    });
    
    
    it("should be not undefined", function() {

      var query = dataSet.queryable(contaType);
      var item = query.first();

      expect(item).toBeTruthy();
      expect(item.name).toEqual("conta1");
    });

    it("should be active value ", function() {
        
        var query = dataSet.queryable(contaType);
        query = query.where(function(item) { return item.ativa });
        var result = query.toArray();
        
        expect(result.length).toEqual(1);
        expect(query.first().name).toEqual("conta2");
    });

    it("should be first active and not removed", function() {
        
        var query = dataSet.queryable(contaType);
        var item = query.first(function(item) { return item.ativa });
        
        expect(item.name).toEqual("conta2");

        dataSet.delete(item);
                
        item = query.firstOrDefault(function(item) { return item.ativa });

        expect(item).toBeNull();
    });
  
  });
  