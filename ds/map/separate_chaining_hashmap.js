var List = require('../list/singly_linked_list');
var Entry = require('./map_entry');

function Map(buckets_size, hash){
  this.hash = hash;
  this.buckets_size = buckets_size;
  this.buckets = new List();
  this.length = 0;
  while(buckets_size-->0){
    var bucket = new List();
    this.buckets.append(bucket);
  }
}

Map.prototype.put = function(key, value){
  var index = this.hash(key) % this.buckets_size;
  var bucket = this.buckets.get(index);
  var entry_index = indexOfInBucket(bucket, key);
  var entry;

  if(entry_index >= 0){
    entry = bucket.get(entry_index);
    entry.value = value;
  }else{
    entry = new Entry();
    entry.key = key;
    entry.value = value;
    bucket.append(entry);
    this.length++;
  }
}

Map.prototype.get = function(key){
  var entry;
  var index = this.hash(key) % this.buckets_size;
  var bucket = this.buckets.get(index);

  for(var it=bucket.iterator(); it.hasNext();){
    entry = it.next();
    if(entry.key === key){
      return entry.value;
    }
  }
  return null;
}

Map.prototype.remove = function(key){
  var entry;
  var index = this.hash(key) % this.buckets_size;
  var bucket = this.buckets.get(index);
  var entry_index = indexOfInBucket(bucket, key);

  if(entry_index !== -1){
    entry = bucket.remove(entry_index);
    this.length--;
    return entry.value;
  }else{
    return null;
  }
}

Map.prototype.contains = function(key){
  var bucket;
  for(var i=0; i<this.buckets_size; i++){
    bucket = this.buckets.get(i);
    if(indexOfInBucket(bucket, key) !== -1){
      return true;
    }
  }
  return false;
}

Map.prototype.size = function(){
  return this.length;
}

Map.prototype.iterator = function(){
  return new MapIterator(this);
}

function MapIterator(map){
  this.map = map;
  this.bucket_index = 0;
  this.entry_index = 0;
}

MapIterator.prototype.hasNext = function(){
  var buckets = this.map.buckets;
  var bucket = buckets.get(this.bucket_index);
  // TODO
  return false;
}

MapIterator.prototype.next = function(){
  var bucket = this.map.buckets.get(this.bucket_index);
  var entry = bucket.get(this.entry_index);
  this.entry_index++;
  if(this.entry_index === bucket.size()){
    this.bucket_index++;
  }
  return entry;
}

function indexOfInBucket(bucket, key){
  var entry;
  for(var it=bucket.iterator(), it_index=0; it.hasNext(); it_index++){
    entry = it.next();
    if(entry.key === key){
      return it_index;
      break;
    }
  }
  return -1;
}

module.exports = Map;
