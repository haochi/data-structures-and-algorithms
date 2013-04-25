var Map = require('../map/separate_chaining_hashmap');
function Set(hash){
  this.map = new Map(16, hash);
}

Set.prototype.remove = function(item){
  this.map.remove(item);
}

Set.prototype.size = function(){
  return this.map.size();
}

Set.prototype.add = function(item){
  this.map.put(item, null);
}

Set.prototype.contains = function(item){
  return this.map.contains(item);
}

module.exports = Set;
