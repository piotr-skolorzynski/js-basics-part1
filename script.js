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

//  zadanie 2

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


// zadanie 3
