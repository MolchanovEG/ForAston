// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

function showIndex(arr, delta = 3000) {
  arr.forEach((item, i) => {
    setTimeout(() => console.log(i), delta * i);
  });
}

const arr = [1, 2, 3, 4];
showIndex(arr);
