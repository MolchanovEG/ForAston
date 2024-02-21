function deepEqual(obj1, obj2) {
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
}

//test
const Z = { elf: 10 };

const obj1 = { here: { is: "on", other: "3" }, object: Z };

const obj2 = { here: { is: "on", other: "2" }, object: Z };

deepEqual(obj1, obj2);
