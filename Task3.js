// Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const Person2 = new SuperPerson("Ivan", "Ivanov");

class AnotherPerson extends SuperPerson {
  constructor(name, surname) {
    super(name, surname);
  }
}
const AnotherPerson2 = new AnotherPerson("Ivan", "Ivanov");

// test
console.log(Person2.name);
console.log((Person2.name = "Igor"));

console.log(AnotherPerson2.name);
console.log((AnotherPerson2.name = "Igor"));
