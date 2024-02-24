Function.prototype.myBind = function (obj, ...args) {
  return (...newArgs) => this.apply(obj, [...args, ...newArgs]);
};

// test

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`);
};

let obj = {
  name: "Jack",
};

let newFunc = myFunc.myBind(obj, "random words");
newFunc("New York");
