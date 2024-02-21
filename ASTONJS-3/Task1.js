//Литеральная форма
const counter1 = {};

//Создание объектов с помощью ключевого слова new
class Counter {
  constructor() {
    this.a = null;
  }
}

const counter2 = new Counter();

//Создание объектов с помощью встроенных методов Object
const counter3 = Object.create(null);

const counter4 = Object.assign({});
