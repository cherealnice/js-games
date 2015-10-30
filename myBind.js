Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    return fn.apply(context);
  };
};

var Cat = {
  name: "sennacy",
  sayHi: function() {
    return (this.name);
  }
};

var Dog = {
  name: "Mingus"
};
