const Llist = require('../lList');

describe('AddStart', function() {
  it ('add 3 to start', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.addStart(3);
    assert.deepEqual(llist.get(0), 3);
  });
});

describe('AddEnd', function() {
  it ('add 3 to end', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.addEnd(3);
    assert.deepEqual(llist.get(4), 3);
  });
});

describe('AddPosition', function() {
  it ('add 3 to position 3', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.addPosition(3, 3);
    assert.deepEqual(llist.get(3), 3);
  });
});

describe('delStart', function() {
  it ('delete first node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.delStart(), 5);
  });
  it ('delete first node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.delStart();
    assert.deepEqual(llist.get(0), 3);
  });
});

describe('delEnd', function() {
  it ('delete last node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.delEnd(), 1);
  });
  it ('delete last node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.delEnd();
    assert.deepEqual(llist.toArray(), [5, 3, 2]);
  });
});

describe('delPosition', function() {
  it ('delete node 2', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.delPosition(2), 2);
  });
  it ('delete node 2', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.delPosition(2);
    assert.deepEqual(llist.toArray(), [5, 3, 1]);
  });
});

describe('get', function() {
  it ('get 2', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.get(2), 2);
  });
});

describe('set', function() {
  it ('set 17 to node 1', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.set(1, 17)
    assert.deepEqual(llist.get(1), 17);
  });
  it ('set 17 to node 1', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.set(1, 17)
    assert.deepEqual(llist.toArray(), [5, 17, 2, 1]);
  });
});

describe('tostring', function() {
  it ('get string', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.toString(), '5321');
  });
});

describe('tostring', function() {
  it ('get array', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.toArray(), [5, 3, 2, 1]);
  });
});

describe('max', function() {
  it ('max node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.max(), 5);
  });
});

describe('min', function() {
  it ('min node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.min(), 1);
  });
});

describe('sort', function() {
  it ('sort', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.sort();
    assert.deepEqual(llist.toArray(), [1, 2, 3, 5]);
  });
  it ('sort', function() {
    let llist = new Llist([5, 13, 22, 1, -6]);
    llist.sort();
    assert.deepEqual(llist.toArray(), [-6, 1, 5, 13, 22]);
  });
});

describe('maxIndex', function() {
  it ('maxIndex node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.maxIndex(), 0);
  });
});

describe('minIndex', function() {
  it ('minIndex node', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.minIndex(), 3);
  });
});

describe('Reverse', function() {
  it ('reverse', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.reverse();
    assert.deepEqual(llist.toArray(), [1, 2, 3, 5]);
  });
  it ('reverse', function() {
    let llist = new Llist([5, 13, 22, 1, -6]);
    llist.reverse();
    assert.deepEqual(llist.toArray(), [-6, 1, 22, 13, 5]);
  });
});

describe('halfReverse', function() {
  it ('halfreverse', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.halfReverse();
    assert.deepEqual(llist.toArray(), [3, 5, 1, 2]);
  });
  it ('halfreverse', function() {
    let llist = new Llist([5, 13, 22, 1, -6]);
    llist.halfReverse();
    assert.deepEqual(llist.toArray(), [13, 5, 22, -6, 1]);
  });
});

describe('size', function() {
  it ('size', function() {
    let llist = new Llist([5, 3, 2, 1]);
    assert.deepEqual(llist.size(), 4);
  });
  it ('size', function() {
    let llist = new Llist([]);
    assert.deepEqual(llist.size(), 'Linked list is empty');
  });
});

describe('clear', function() {
  it ('clear', function() {
    let llist = new Llist([5, 3, 2, 1]);
    llist.sort();
    llist.delEnd();
    llist.clear()
    assert.deepEqual(llist.toArray(), [5, 3, 2, 1]);
  });
});