/****************************************************************************************************
 1. Dodaj poprawnie plik 'script.js' do pliku index.html. Wyświetl w konsoli: 'Poprawnie dodany skrypt';

 2. Napisz funkcję, która przyjmuje 2 argumenty i zwraca większy z nich.
 Input: 2, 5        Output: 5
 Input: 2, -5       Output: 2
 Input: 'aaa', -5   Output: 'argumenty to nie liczby`

 3. Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
 Input: uppercaseFirstLetter('kamil') Output: 'Kamil'
 Input: uppercaseFirstLetter(12)      Output: 'to nie jest string'

 4. Wyświetl wartość w konsoli z obiektu labyrinth:
 a) 'Garfield'
 b) 'elephant'
 c) 'flying'
 */

const labirynth = {
        animals: [
            { name: 'Pluto', species: 'dog' },
            { name: 'Garfield', species: 'cat' },
            { name: 'Simba', species: 'lion' },
            { name: 'Maniek', species: 'elephant' }
        ],
        nonAnimals: [
            { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
            { name: 'C3PO', species: 'robot', skills: ['talking'] }
        ],
        showAnimals: function() { console.log(this.animals) },
        showNonAnimals: function() { console.log(this.nonAnimals) }
    }
/*
 5. Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
 a na wielokrotności 3 i 5 FizzBuzz.
 Output: 'Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz Fizz Fizz Buzz Fizz FizzBuzz Fizz Buzz'

 6. Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
 Input: [
     {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
     {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
     {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
 ]
 Output:
 'Margarita (ser, sos, oregano) - 15
 Roma (ser, sos, szynka, pieczarki) - 18
 Salami (ser, sos, salami) - 18'

 7*. Napisz funkcję, która w przypadku kiedy jako argument otrzyma string, zwróci liczbę samogłosek z tego stringa.
 W przeciwnym przypadku niech zwróci string: 'to nie string'.
 Input: 'Kartagina'                 Output: 4
 Input: 'Mezopotamia'               Output: 6
 Input: 'Wielki Zderzacz Hadronów'  Output: 8
 Input: {}                          Output: 'to nie string'
 Input: 345                         Output: 'to nie string'
 Input: undefined                   Output: 'to nie string'

 */

// ********************* Solutions *************************************************


//******  exercise 2 *******

const handleHigherValue = (num1, num2) => {
    let result = 0;
    if (typeof num1 !== "number") {
        result = 'Pierwszy argument to nie liczba';
    } else if (typeof num2 !== "number") {
        result = 'Drugi argument to nie liczba';
    } else {
        num1 >= num2 ? result = num1 : result = num2;
    }
    return result;
};

// Input: 2, 5        Output: 5
let result = handleHigherValue(2, 5);
console.log(result);

// Input: 2, -5       Output: 2
let result2 = handleHigherValue(2, -5);
console.log(result2);

// Input: 'aaa', -5   Output: 'argumenty to nie liczby'
let result3 = handleHigherValue('aaa', -5);
console.log(result3);

//****** exercise 3 *******

const uppercaseFirstLetter = string => {
    let result = '';
    if (typeof string !== 'string' || string === '') {
        result = 'To nie jest string';
    } else {
        // let firstLetter = string.substring(0,1).toLocaleUpperCase();
        // console.log(firstLetter)
        // let restOfString = string.slice(1);
        // console.log(restOfString);
        // result = firstLetter.concat(restOfString);
        // refactoring
        result = string.substring(0,1).toUpperCase().concat(string.slice(1));
    }
    return result;
}

//  Input: uppercaseFirstLetter('kamil') Output: 'Kamil'
let string = uppercaseFirstLetter('kamil');
console.log(string);

// Input: uppercaseFirstLetter(12) Output: 'to nie jest string'
let string2 = uppercaseFirstLetter(12);
console.log(string2);

//******* zadanie 4 ********

// a) 'Garfield'
console.log(labirynth.animals[1].name);

//  b) 'elephant'
console.log(labirynth.animals[3].species);

// c) 'flying'
console.log(labirynth.nonAnimals[0].skills[1]);

//******* exercise 5 ********

const generatePatern = () => {
    const array = [];
    for (let i=1; i<=50; i++) {
        // debugger;
        if (i!==0 && i%3 === 0 && i%15 !== 0) {
            array.push('Fizz');
            // console.log('Fizz');
        }else if (i%5 === 0 && i%15 !==0) {
            array.push('Buzz');
            // console.log('Buzz')
        } else if (i%3 === 0 && i%5 === 0 && i%15 ===0) {
            array.push('FizzBuzz');
            // console.log('FizzBuzz')
        }
    }
    return array;
}

let patern = generatePatern();
console.log(patern);

//******* exercise 6 ********

const pizzaMenu = [
    {name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano']},
    {name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki']},
    {name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami']}
];

const handlePizzaMenu = pizzaMenu => {
    pizzaMenu.forEach(pizza => {
        console.log(`${pizza.name} (${pizza.ingredients}) - ${pizza.price}`);
    });
};

handlePizzaMenu(pizzaMenu);

//******* exercise 7 ********

const handleString = string => {
    let result = 0;
    const regex = /[aeioyuąęóĄĘÓ]/gi; //pattern
    if (typeof string !== 'string' || string === '') {
        result = 'to nie string';
    } else {
    const array = [...string.match(regex)];
    result = array.length;
    }
    return result;
}

// Input: 'Kartagina'                 Output: 4
let word = handleString('Katragina');
console.log(word);

// Input: 'Mezopotamia'               Output: 6
let word2 = handleString('Mezopotamia');
console.log(word2);

// Input: 'Wielki Zderzacz Hadronów'  Output: 8
let word3 = handleString('Wielki Zderzacz Hadronów');
console.log(word3);

//  Input: {}                       Output: 'to nie string'
let word4 = handleString({});
console.log(word4);

// Input: 345                       Output: 'to nie string'
let word5 = handleString(345);
console.log(word5);

// Input: undefined                 Output: 'to nie string'
let word6 = handleString(undefined);
console.log(word6);