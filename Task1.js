const strNum = (stop) => {
  // строка цифр
  let str = "";

  if (stop == 1) return "1";

  for (let i = 1; i <= stop; i++) {
    str += i;
  }

  for (let i = stop - 1; i >= 1; i--) {
    str += i;
  }
  return str;
};

function pattern(n) {
  if (isNaN(n)) {
    console.log("Entered not a number");
    return -1;
  }
  if (n <= 0) {
    console.log("Entered number <= 0");
    return -2;
  }

  let spaces = n - 1;

  for (let i = 0; i < n; i++) {
    let str = ""; //строка паттерна

    str += " ".repeat(spaces); // количество пробелов в строке
    str += strNum(n - spaces); // законченная строка
    spaces--;
    console.log(str);
  }

  spaces = 1;

  for (let i = n - 1; i > 0; i--) {
    let str = ""; //строка паттерна

    str += " ".repeat(spaces); // количество пробелов в строке
    str += strNum(n - spaces); // законченная строка
    spaces++;
    console.log(str);
  }
}

// test
pattern(5);
