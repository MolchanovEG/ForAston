// Решить (без использования IDE, естественно) типовые задачи - написать порядок и вывод в консоли:

// 1)
console.log("1");
setTimeout(() => console.log("2"), 1);
let promiseNew = new Promise((resolve) => {
  console.log("3");
  resolve();
});
promiseNew.then(() => console.log("4"));
setTimeout(() => console.log("5"));
console.log("6");

// Вывод: 1,3,6(синхронный код)
// 4(микротаск)
// 2,5(макротаски)

// 2)
let promiseTree = new Promise((resolve, reject) => {
  resolve("a");
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
  console.log("3");
});

// Вывод: 1, 3(синхронный код)
// 2 (макротаск)

// 3)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});
promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  })
  .catch((res) => {
    return res + "d";
  })
  .then((res) => {
    console.log(res);
  });
// Вывод: abc (цепочка микротасков then)
// далее выполнится finally, но без вывода в консоль

// 4)
function doSmth() {
  return Promise.resolve("123");
}
doSmth()
  .then(function (a) {
    console.log("1", a);
    return a;
  })
  .then(function (b) {
    console.log("2", b);
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err);
  })
  .then(function (c) {
    console.log("4", c);
    return c;
  });

// Вывод: 1 123 | 2 123 | 3 321 | 4 undefined

// 5)
console.log("1");
setTimeout(function () {
  console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Вывод: 1 4 (синх код) 3 (микротаск) 2 (макротаск)
