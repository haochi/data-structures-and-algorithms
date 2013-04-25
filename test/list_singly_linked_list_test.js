var List = require('../ds/list/singly_linked_list');
var assert = require("assert");

describe('List', function(){
  var list;

  beforeEach(function(){
    list = new List();
    list.append(2);
    list.append(3);
    list.append(4);
    list.prepend(1);
  });

  describe('#size()', function(){
    it('should return 4', function(){
      assert.equal(4, list.size());
    });
  });

  describe('#get()', function(){
    it('should return 2', function(){
      assert.equal(2, list.get(1));
    });
  });

  describe('#remove()', function(){
    it('should return 3', function(){
      list.remove(1);
      assert.equal(3, list.size());
      assert.equal(3, list.get(1));
    });
  });

  describe('#dequeue()', function(){
    it('should return 1', function(){
      assert.equal(1, list.dequeue(1));
    });
  });

  describe('#pop', function(){
    it('should return 4', function(){
      assert.equal(4, list.pop());
    });
  });

  describe("#iterator()", function(){
    it("shouldn't throw an exception", function(){
      var it = list.iterator();
      var arr = [];
      for(var it=list.iterator(); it.hasNext();){
        arr.push(it.next());
      }
      assert.deepEqual([1,2,3,4], arr);
    });
  });
});
