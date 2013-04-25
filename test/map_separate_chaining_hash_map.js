var Map = require('../ds/map/separate_chaining_hash_map');
var assert = require("assert");

describe('Map', function(){
  var map;

  beforeEach(function(){
    map = new Map(16, function(key){
      return key.length;
    });
    map.put("hello", 1);
    map.put("world", 2);
  });

  describe('#size()', function(){
    it('should return 2', function(){
      assert.equal(2, map.size());
    });
  });

  describe('#get()', function(){
    it('should return 2', function(){
      assert.equal(1, map.get("hello"));
      assert.equal(2, map.get("world"));
    });
  });

  describe('#remove()', function(){
    it('should return 1', function(){
      assert.equal(1, map.remove("hello"));
      assert.equal(1, map.size());
    });
  });
/*
  describe("#iterator()", function(){
    it("shouldn't throw an exception", function(){
      var arr = [];
      for(var it=map.iterator(); it.hasNext();){
        arr.push(it.next());
      }
      console.log(arr);
      assert.deepEqual([1,2], arr);
    });
  });
*/
});
