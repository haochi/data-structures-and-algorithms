function ListIterator(head){
  this.it = head.next;
}
ListIterator.prototype.hasNext = function(){
  return this.it !== null;
}
ListIterator.prototype.next = function(){
  var next = this.it;
  this.it = next.next;
  return next.data;
}

module.exports = ListIterator;
