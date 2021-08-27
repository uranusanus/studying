let testArray = [];
let testArray_elements = [];
let occurences = [];
let mostOften = [];
let cnt, max = 0;

function getNumber() {

    const min = 1;
    const max = 8;
    let n = Math.random();

    return Math.floor(n * (max - min) + min);
}

for (let index = 0; index < 20; index++) { // Тестовый массив
    testArray.push(getNumber());
}

for (let index = 0; index < testArray.length; index++) {
    const compvar = testArray[index];
    if (testArray_elements.indexOf(compvar) === -1) { // Этот массив (testArray_elements) хранит в единственном экземпляре все встреченнные элементы тестового массива
        testArray_elements.push(compvar);
    }
}

/*
    Каждый элемент массива testArray_elements мы сравниваем со всеми элементами тестового массива, 
    чтобы узнать, сколько раз встречаются определённые элементы (cnt). Кол-во встреч мы записываем
    в массив occurences (все элементы комплементарны, то есть имеют один и тот же индекс в обоих массивах)
*/

for (let index = 0; index <= testArray_elements.length; index++) {
    const element = testArray_elements[index];
    if (cnt) {
        occurences.push(cnt);
    }
    cnt = 0;
    for (let index2 = 0; index2 < testArray.length; index2++) {
        const testElement = testArray[index2];
        if (element === testElement) {
            cnt++;
        }
    }
}

for (let index = 0; index < occurences.length; index++) { // Находим элемент, встречающийся больше остальных (max - максимальное число встреч)
    const element = occurences[index];
    if (element > max) {
        max = element;
    }
}

for (let index = 0; index < occurences.length; index++) { // Сравниваем все элементы с max на случай, если часто встречающееся число не одно
    const element = occurences[index];
    if (element === max) {
        mostOften.push(testArray_elements[index]); // Из массива testArray_elements мы берём элемент комплементарный по индексу элементу из occurences
    }
}

console.log(`Сгенерированный массив:\n${testArray}\n`);
console.log(`Фильтрованный массив (все элементы в единственном экземпляре):\n${testArray_elements}\n`);
console.log(`Число вхождений всех элементов:\n${occurences}\n`);

if (mostOften.length !== 1) { // Если в массиве часто встречающихся чисел больше одного элемента, то выводим весь массив, нет - только первый элемент
    console.log(`Максимальное кол-во вхождений у элементов: ${mostOften}`);
} else {
    console.log(`Максимальное кол-во вхождений у элемента: ${mostOften[0]}`);
}