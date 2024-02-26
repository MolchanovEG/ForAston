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

//////////////////////////
// without apply and call

const person = {
  firstName: "Jon",
  lastName: "Doe",
};

const fullName = function (city) {
  console.log(this.firstName + " " + this.lastName + " " + city);
};

Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

const name = fullName.myBind(person, "NH");
name();
