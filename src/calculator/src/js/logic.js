function plus(a,b){
    return parseFloat(a)+parseFloat(b);
  }
  function minus(a,b){
    return parseFloat(a)-parseFloat(b);
  }
  function mult(a,b){
    return parseFloat(a)*parseFloat(b);
  }
  function dev(a,b){
    if (b!=0){
      return parseFloat(a)/parseFloat(b);
    } else {
      return "ERROR!";
    }
  }

  module.exports = {
      plus,
      minus,
      mult,
      dev,
  }