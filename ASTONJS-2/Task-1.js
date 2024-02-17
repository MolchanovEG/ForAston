// test
let arr = [
  1,
  "Hello",
  true,
  Symbol(),
  null,
  undefined,
  -5.6,
  {},
  function () {
    console.log("Hello World!");
  },
];

function getLength(arr) {
  arr.forEach((arr) => {
    if (arr != NaN)
      if (arr?.length ?? 0) console.log(arr.length);
      else console.log(0);
  });
}

getLength(arr);
