// Написать функцию
// function firstSum = (arr, total) => {//Решение

// },
// которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]

const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    const firstNum = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const secondNum = arr[j];
      if (firstNum + secondNum === total) return [firstNum, secondNum];
    }
  }
  return "does not contain the required amount";
};

// test

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total)); //result = [4, 9]

// Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

// Сложность алгоритма равна Оn^2, т.к. есть обход всех значений в цикле и повторный обход всех значений во вложенном цикле
