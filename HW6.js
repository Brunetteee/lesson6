//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let heWo = 'hello world';

for (const char of heWo) {
    console.log(char)
}

console.log('~~~~~~~~~~~~~~~~~~~~');

let loIp = 'lorem ipsum';

for (const char of loIp) {
    console.log(char)
}

console.log('~~~~~~~~~~~~~~~~~~~~');

let jsIsCo = 'javascript is cool';

for (const char of jsIsCo) {
    console.log(char)
}

// - Перевести до великого регістру наступні стрінгові значення
// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];

   
    let str = 'hello world';
    let str1 = 'lorem ipsum';
    let str2 = 'javascript is cool';


let toUpperCase = str.toUpperCase();
console.log(toUpperCase);
let toUpperCase1 = str1.toUpperCase();
console.log(toUpperCase1);
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);


// - Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('-----------------------------------------------------')

let word=  'HELLO WORLD';
let word1=  'LOREM IPSUM';
let word2=  'JAVASCRIPT IS COOL';

let toLowerCase = word.toLowerCase();
console.log(toLowerCase)
let toLowerCase1=word1.toLowerCase();
console.log(toLowerCase1)
let toLowerCase2=word2.toLowerCase();
console.log(toLowerCase2)


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

console.log('-----------------------------------------------------')

let dirtyStr = ' dirty string   ';
// console.log(dirtyStr.trim());
let trim = dirtyStr.trim();
console.log(trim);
console.log(trim[0]);
console.log(trim[trim.length - 1]);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
console.log('-----------------------------------------------------');

let arr = 'Ревуть воли як ясла повні';
let split=arr.split('  ');
console.log(split)



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

console.log('-----------------------------------------------------');

let numbers=[10,8,-7,55,987,-1011,0,1050,0];

let newNumbers=numbers.map((item)=> item + '');
console.log(newNumbers)



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

console.log('-----------------------------------------------------');

let nums = [11,21,3];

let sort=nums.sort((a,b)=>{
    return a-b
})
console.log(sort)

let sort1=nums.sort((a,b)=>{
    return b-a;
})
console.log(sort1)


// ==========================


// - є масив
console.log('-----------------------------------------------------');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration


let topic= coursesAndDurationArray.sort((cours1,cours2)=>{
    return cours2.monthDuration-cours1.monthDuration
})
console.log(topic)
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців


//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newTopicArray =coursesAndDurationArray.map(cours =>{
    cours.id = 265;
    return cours
})
console.log(newTopicArray)
//  =========================






// console.log('-----------------------------------------------------');
// //  описати колоду карт (від 6 до туза без джокерів)
// let cards=[
//     {cardSuit: 'spade', value: 6, color: 'black'},
//     {cardSuit: 'spade', value: 7, color: 'black'},
//     {cardSuit: 'spade', value: 8, color: 'black'},
//     {cardSuit: 'spade', value: 9, color: 'black'},
//     {cardSuit: 'spade', value: 10, color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'black'},
//     {cardSuit: 'spade', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: 'king', color: 'black'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//
//     {cardSuit: 'diamond', value: 6, color: 'black'},
//     {cardSuit: 'diamond', value: 7, color: 'black'},
//     {cardSuit: 'diamond', value: 8, color: 'black'},
//     {cardSuit: 'diamond', value: 9, color: 'black'},
//     {cardSuit: 'diamond', value: 10, color: 'black'},
//     {cardSuit: 'diamond', value: 'jack', color: 'black'},
//     {cardSuit: 'diamond', value: 'queen', color: 'black'},
//     {cardSuit: 'diamond', value: 'king', color: 'black'},
//     {cardSuit: 'diamond', value: 'ace', color: 'black'},
//
//     {cardSuit: 'heart', value: 6, color: 'black'},
//     {cardSuit: 'heart', value: 7, color: 'black'},
//     {cardSuit: 'heart', value: 8, color: 'black'},
//     {cardSuit: 'heart', value: 9, color: 'black'},
//     {cardSuit: 'heart', value: 10, color: 'black'},
//     {cardSuit: 'heart', value: 'jack', color: 'black'},
//     {cardSuit: 'heart', value: 'queen', color: 'black'},
//     {cardSuit: 'heart', value: 'king', color: 'black'},
//     {cardSuit: 'heart', value: 'ace', color: 'black'},
//
//     {cardSuit: 'clubs', value: 6, color: 'black'},
//     {cardSuit: 'clubs', value: 7, color: 'black'},
//     {cardSuit: 'clubs', value: 8, color: 'black'},
//     {cardSuit: 'clubs', value: 9, color: 'black'},
//     {cardSuit: 'clubs', value: 10, color: 'black'},
//     {cardSuit: 'clubs', value: 'jack', color: 'black'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'black'},
// ];




//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker