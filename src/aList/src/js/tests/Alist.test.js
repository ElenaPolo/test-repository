const { Alist } = require('../Alist');

describe("alist, size",function () {
    const alist = new Alist([1, 2, 3]);  
    it("search alist size",function () {
      assert.equal(alist.size(),3);
    })
  })

  describe("alist, addStart",function () {
    const alist = new Alist([1, 2, 3]);  
    it("add first 5, see size",function () {
      assert.equal(alist.addStart(5),4);
    })
    it("add first 5",function () {
      assert.deepEqual(alist.array,[5,1,2,3]);
    })
  })

  describe("alist, addEnd",function () {
    const alist = new Alist([1, 2, 3]);  
    it("add last 5, see size",function () {
      assert.equal(alist.addEnd(5),4);
    })
    it("add last 5",function () {
      assert.deepEqual(alist.array,[1,2,3,5]);
    })
  })

  describe("alist, delStart",function () {
    const alist = new Alist([1, 2, 3]);  
    it("del first",function () {
      assert.equal(alist.delStart(),1);
    })
    it("alist after del first",function () {
      assert.deepEqual(alist.array,[2,3]);
    })
  })

  describe("alist, delEnd",function () {
    const alist = new Alist([1, 2, 3]);  
    it("del last",function () {
      assert.equal(alist.delEnd(),3);
    })
    it("alist after del last",function () {
      assert.deepEqual(alist.array,[1,2]);
    })
  })

  describe("alist, delPosition",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("del position",function () {
      assert.equal(alist.delPosition(2),3);
    })
    it("alist after del position",function () {
      assert.deepEqual(alist.array,[1,2,4,5,6]);
    })
  })

  describe("alist, get",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("get second element",function () {
      assert.equal(alist.get(1),2);
    })
  })

  describe("alist, set",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("set 8 to second place",function () {
      alist.set(8,1);
      assert.deepEqual(alist.array,[1, 8, 3, 4, 5, 6]);
    })
    it("set 8 to seventh place",function () {
      assert.equal(alist.set(8,7),"Error!");
    })
  })

  describe("alist, toString",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("get a string",function () {
      assert.equal(alist.toString(),"123456");
    })
  })

  describe("alist, clear",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);
    alist.addStart(7);
    alist.delPosition(3);
    alist.clear();
    let array = alist.array;  
    it("clear changes",function () {
      assert.deepEqual(array,[1, 2, 3, 4, 5, 6]);
    })
  })

  describe("alist, min",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("find min",function () {
      assert.equal(alist.min(),1);
    })
  })

  describe("alist, max",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("find max",function () {
      assert.equal(alist.max(),6);
    })
  })

  describe("alist, minIndex",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("find min index",function () {
      assert.equal(alist.minIndex(),0);
    })
  })

  describe("alist, maxIndex",function () {
    const alist = new Alist([1, 2, 3, 4, 5, 6]);  
    it("find max index",function () {
      assert.equal(alist.maxIndex(),5);
    })
  })
  
  describe("alist, sort",function () {
    const alist = new Alist([1,5,2,4,3]);  
    it("sort array",function () {
      alist.sort();
      assert.deepEqual(alist.array,[1,2,3,4,5]);
    })
  })

  describe("alist, reverse",function () {
    const alist = new Alist([1,5,2,4,3]);  
    it("reverse array",function () {
      alist.reverse();
      assert.deepEqual(alist.array,[3,4,2,5,1]);
    })
  })
  
  describe("alist, halfReverse",function () {
    const alist = new Alist([1,5,2,4,3,7]);  
    it("Halfreverse array",function () {
      alist.halfReverse();
      assert.deepEqual(alist.array,[2,5,1,7,3,4]);
    })
    it("Halfreverse array",function () {
      alist.clear();
      alist.addEnd(8);
      alist.halfReverse();
      assert.deepEqual(alist.array,[2,5,1,4,8,7,3]);
    })
  })