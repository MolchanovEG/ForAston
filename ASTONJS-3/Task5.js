function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  const keysA = Object.keys(obj1).sort();
  const keysB = Object.keys(obj2).sort();

  if (keysA.length !== keysB.length) {
    return false;
  }

  let result = true;

  keysA.forEach((key) => {
    if (!keysB.includes(key)) {
      result = false;
    }

    if (typeof obj1[key] === "function" || typeof obj2[key] === "function") {
      if (obj1[key].toString() !== obj2[key].toString()) {
        result = false;
      }
    }

    if (!deepEqual(obj1[key], obj2[key])) {
      result = false;
    }
  });

  return result;
}

//test
const Z = { elf: 10 };

const obj1 = {
  a: null,
  object: Z,
  here: { is: "on", other: "3" },
};

const obj2 = {
  here: { is: "on", other: "3" },
  object: Z,
  a: null,
};

console.log(deepEqual(obj1, obj2));
