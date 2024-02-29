// Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// литеральный способ

const Person1 = {
  name: "Ivan",
  surname: "Ivanov",
};

const AnotherPerson1 = {
  __proto__: Person1,
};
// Создание объектов с помощью ключевого слова new

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}
const Person2 = new Person("Ivan", "Ivanov");

class AnotherPerson extends Person {
  constructor(name, surname) {
    super(name, surname);
  }
}
const AnotherPerson2 = new AnotherPerson("Ivan", "Ivanov");

//Создание объектов с помощью встроенных методов Object

const AnotherPerson3 = Object.create(Person1, {
  name: { value: "Ivan", enumerable: true, writable: true, configurable: true },
  surname: {
    value: "Ivanov",
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

// logInfo

Person1.logInfo = function () {
  return `Name: ${this.name}. Surname: ${this.surname}.`;
};

Person.prototype.logInfo = function () {
  return `Name: ${this.name}. Surname: ${this.surname}.`;
};

console.log(AnotherPerson1.logInfo());
console.log(AnotherPerson2.logInfo());
