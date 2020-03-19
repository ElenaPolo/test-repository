const logic = require('../logic.js');

describe("plus function",function () {
    it("calculate 1+2",function () {
      assert.equal(logic.plus('1','2'),3);
    })
  })
  
  describe("minus function",function () {
    it("calculate 1-2",function () {
      assert.equal(logic.minus('1','2'),-1);
    })
  })
  
  describe("mult function",function () {
    it("calculate 5*2",function () {
      assert.equal(logic.mult('5','2'),10);
    })
  })
  
  describe("dev function",function () {
    it("calculate 8/2",function () {
      assert.equal(logic.dev('8','2'),4);
    })
    it("calculate 8/0",function () {
      assert.equal(logic.dev('8','0'),"ERROR!");
    })
  })