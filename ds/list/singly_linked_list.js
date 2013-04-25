var Node = require('../node/node');
var ListIterator = require('./list_iterator');

function List(){
  this.head = new Node();
  this.tail = this.head;
  this.length = 0;
}
List.prototype.is_empty = function(){
  return this.size === 0;
}

List.prototype.size = function(){
  return this.length;
}

List.prototype.append = List.prototype.push = function(data){
  var node = new Node();
  node.data = data;
  this.tail.next = node;
  this.tail = node;
  this.length += 1;
}

List.prototype.pop = function(){
  return this.remove(this.size()-1);
}

List.prototype.prepend = function(data){
  var node = new Node();
  node.data = data;
  node.next = this.head.next;
  this.head.next = node;
  this.length += 1;
}

List.prototype.iterator = function(){
  return new ListIterator(this.head);
}

List.prototype.get = function(index){
  return at(this, index).data;
}

List.prototype.remove = function(index){
  var prev = at(this, index-1);
  var remove = prev.next;
  prev.next = remove.next;
  this.length--;
  return remove.data;
}

function at(list, index){
  var item = list.head;
  while(index-->=0){
    item = item.next;
  }
  return item;
}

module.exports = List;
