const counter = { a: 10, b: 20, c: { d: 30, e: 40 } };
let copyCouneter = {};

//копирование ссылки
copyCouneter = counter;

//копирование первого слоя через spread оператор
copyCouneter = { ...counter };

//Клонирование через JSON.stringify и JSON.parse
copyCouneter = JSON.parse(JSON.stringify(counter));

//копирование через structuredClone()
copyCouneter = structuredClone(counter);

//копироввание через lodash
import cloneDeep from "lodash.clonedeep";

copyCouneter = cloneDeep(counter);

// копирование через первого слоя через Object.assign
copyCouneter = Object.assign({}, counter);
