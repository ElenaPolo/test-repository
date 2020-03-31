"use strict";

let List = require('../../../list/list');
let Node = require('../../../list/Node');

function Llist(array){
    this.root = null;
    this.defaultArray = array;
    this.init(array);
}

Llist.prototype = Object.create(List.prototype);
Llist.prototype.constructor = Llist;

Llist.prototype.init = function(arr) {
    for (let i=arr.length-1; i>=0; i--){
        this.addStart(arr[i]);
    }
};

Llist.prototype.addStart = function(el) {
    let node = new Node(el);
    node.next = this.root;
    this.root = node;
}

Llist.prototype.addEnd = function(el) {
    let node = new Node(el);
    let current = null;

    if (this.root === null){
        this.root = node;
    } else {
        current = this.root;

        while(current.next){
            current = current.next;
        }

        current.next = node;
    }
}

Llist.prototype.addPosition = function(el, index){
    let node = new Node(el);
    if (index === 0){  
        node.next = this.root;
        this.root = node;
    } else {
        let current = this.root;
        let prev = null;
        let i = 0;

        while(i<index) {
            i++;
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;
    }
}

Llist.prototype.delStart = function() {
    let start = this.root;
    this.root = this.root.next;
    return start.data;
}

Llist.prototype.delEnd = function() {
    let current = this.root;
    while (current.next.next) {
        current = current.next;
    }
    let end = current.next;
    current.next = null;
    
    return end.data;
}

Llist.prototype.delPosition = function(index) {
    let current = this.root;
    let del = null;

    if(index===0){
        del = this.root.data;
        this.root = current.next;
    } else {
        let prev = current;
        let i = 0;

        while (i<index){
            i++;
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        del = current.data;
    }
    return del;
}

Llist.prototype.get = function(index) {
    let current = this.root;
    let i = 0;

    while (i<index){
        i++;
        current = current.next;
    }
    return current.data;
}

Llist.prototype.set = function(index, value) {
    let i = 0;
    let current = this.root;
    while (i<index){
        i++;
        current = current.next;
    }
    current.data = value;
    return current;
}

Llist.prototype.toString = function() {
    let str = `${this.root.data}`;
    let current = this.root;
    while(current.next){
        current = current.next;
        str += current.data;
    }
    return str;
}

Llist.prototype.toArray = function(){
    let arr = [this.root.data];
    let current = this.root;
    let i = 1;
    while(current.next){
        current = current.next;
        arr[i] = current.data;
        i++;
    }
    return arr;
}

Llist.prototype.max = function() {
    let max = this.root.data;
    let current = this.root;
    let i = 0;
    while (i < this.size()) {
      if (max < current.data) {
        max = current.data;
      }

      current = current.next;
      i++;
    }

    return max;
}

Llist.prototype.min = function() {
    let min = this.root.data;
    let current = this.root;
    let i = 0;
    while (i < this.size()) {
      if (min > current.data) {
        min = current.data;
      }

      current = current.next;
      i++;
    }

    return min;
}

Llist.prototype.sort = function() {
    let arr = this.toArray()
    for (let i=1; i<arr.length; i++){
        for(let j = i; j>0 && arr[j-1]>arr[j];j--){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        this.addStart(arr[i])
        this.delEnd();
    }
    let sorted = new Llist(arr);
    return sorted;
}

List.prototype.maxIndex = function() {
    let current = this.root;
    let max = current;
    let maxIndex = 0;
    let i = 0;
    while (current.next) {
      current = current.next;
      i++;
      if (current.data > max.data) {
        max = current;
        maxIndex = i;
      }
    }
    return maxIndex;
}

List.prototype.minIndex = function() {
    let current = this.root;
    let min = current;
    let minIndex = 0;
    let i = 0;
    while (current.next) {
      current = current.next;
      i++;
      if (current.data < min.data) {
        min = current;
        minIndex = i;
      }
    }
    return minIndex;
}

List.prototype.reverse = function() {
    let arr = this.toArray();
    let tempArr = [];
    let temp = 0;
    for (let i=arr.length-1, j=0; i>=0, j<arr.length; i--, j++){
        temp =  arr[i];
        tempArr[i] =  arr[j];
    };
    arr = tempArr;
    for (let i = arr.length - 1; i >= 0; i--) {
        this.addStart(arr[i])
        this.delEnd();
    }
    let reversed = new Llist(arr);
    return reversed;
}

List.prototype.halfReverse = function() {
    const length = this.size();
  let previous = null;
  let current = this.root;
  let next = null;
  let i = 0;

  while (i < Math.floor(length / 2) && current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  this.root = previous;
  previous = null;
  next = null;

  if (length % 2 === 1) {
    this.addEnd(current.data);
    current = current.next;
  }

  while (i < length && current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  while (previous) {
    this.addEnd(previous.data);
    previous = previous.next;
  }
}

List.prototype.size = function() {
    if (this.root) {
        let size = 1;
        let current = this.root;
    
        while (current.next) {
          current = current.next;
          size++;
        }
        return size;
    }  
    return 'Linked list is empty';
}

List.prototype.clear = function() {
    this.root = null;
    this.init(this.defaultArray);
}

module.exports = Llist;