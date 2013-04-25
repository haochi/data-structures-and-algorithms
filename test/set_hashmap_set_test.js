var Set = require('../ds/set/hashmap_set');
var assert = require("assert");

describe('Set', function(){
  var set;

  beforeEach(function(){
    set = new Set(function(item){
      var sum = 0;
      for(var i=0, l=item.length; i<l; i++){
        sum += item.charCodeAt(i);
      }
      return sum;
    });
    set.add("hello");
    set.add("world");
  });

  describe('#size()', function(){
    it('should return 2', function(){
      assert.equal(2, set.size());
    });
  });

  describe('#remove()', function(){
    it('should return 1', function(){
      set.remove("hello");
      assert.equal(1, set.size());
    });
  });

  describe('#contains()', function(){
    it('should return true', function(){
      assert.ok(set.contains("hello"));
    });
  });
});
