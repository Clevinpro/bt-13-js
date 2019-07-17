console.log('work');
"use strict";

// const numbers = [1, 2, 3, 4];

// console.log(numbers);
// console.log('numbers.length :', numbers.length);
// console.log('numbers[3] :', numbers[3]);

// numbers[0] = 5;

// // numbers = [5, 2, 3, 4];

// console.log('numbers :', numbers);
// console.log('numbers[0] :', numbers[0]);

// numbers.length = 3;
// // numbers.length = 7;

// console.log('numbers :', numbers);
// console.log('numbers[6] :', numbers[6]);

// let count = 0;
// let sum = 0;

// while(count < numbers.length) {
//     // sum += numbers[count];
//     sum = sum + numbers[count];
//     // count = count + 1;
//     console.log(numbers[count]);

//     count += 1;
// }

// console.log('sum :', sum);



// const names = ['Alex', 'Bob', 'Frankie', 'Bart', 'Lisa'];

// console.log('names.includes("Bart") :', names.includes("Bart"));
// console.log('names.indexOf("Lisa") :', names.indexOf("Lisa"));

// // copy 'Frankie', 'Bart' to new array
// const bestFriend = names.slice(2, 4);

// console.log('names :', names);
// console.log('bestFriend :', bestFriend);

// // adding 'Alex', 'Bob'
// bestFriend.splice(0, 0, 'Alex', 'Bob');
// console.log('bestFriend :', bestFriend);
// // adding 'Lisa'
// bestFriend.splice(4, 0, 'Lisa');
// console.log('bestFriend :', bestFriend);

// // replace Lisa with Erika
// bestFriend.splice(4,1, 'Erika');
// console.log('bestFriend :', bestFriend);

// // goodbye Erika 
// bestFriend.splice(4,1);
// console.log(bestFriend);



// console.log(bestFriend.push('Lisa', 'Erika'));
// console.log('bestFriend :', bestFriend);

// console.log(bestFriend.pop());

// console.log('bestFriend.unshift("Taras") :', bestFriend.unshift("Taras"));
// console.log('bestFriend :', bestFriend);
// console.log('bestFriend.shift() :', bestFriend.shift());
// console.log('bestFriend :', bestFriend);
// console.log('bestFriend :', bestFriend.length);
// console.log('bestFriend.push("Barbara") :', bestFriend.push("Barbara"));


// const text = "Lorem ipsum dolor sit, amet consectetur Adipisicing."

// const arrFromText = text.split(' ');
// console.log('arrFromText :', arrFromText);

// const newArrText = [];

// for(const element of arrFromText) {
//     if (element.toLowerCase() === 'lorem') {
//         newArrText.push(element.toUpperCase());
//         continue;
//     }
//     newArrText.push(element);
// }

// console.log('newArrText :', newArrText);

// const updateText = newArrText.join(' ');
// console.log('updateText :', updateText);



// const a = 5;

// let b = a;

// b = 6;

// console.log('a :', a);
// console.log('b :', b);

// const arr1 = [1, 2, 3, 4, 5];
// const arr4 = [6, 7];
// const arr2 = arr1.concat(arr4);

// arr2[1] = 2000;

// const arr3 = [1, 2000, 3, 4, 5];

// console.log('arr2 === arr3 :', arr2 === arr3);
// console.log('arr2 === arr1 :', arr2 === arr1);

// console.log('arr1 :', arr1);
// console.log('arr2 :', arr2);
// console.log('arr4 :', arr4);




// const arrNumbers = [ 4, 7, 11, 15, 9 ];
// const updateNumbers = [];

// for(const element of arrNumbers) {
//     updateNumbers.push(element * 2);
// }

// console.log('arrNumbers :', arrNumbers);
// console.log('updateNumbers :', updateNumbers);

// const updateNumbers2 = [];

// for(const element of arrNumbers) {
//     updateNumbers2.push(element * 3);
// }

// console.log('arrNumbers :', arrNumbers);
// console.log('updateNumbers2 :', updateNumbers2);



// const updateArr = function(arr, number) {
//     const updateArr = [];

//     for(const element of arr) {
//         updateArr.push(element * number);
//     }

//     return updateArr;
// }

// const myArr = updateArr(arrNumbers, 5);
// console.log('arrNumbers :', arrNumbers);
// console.log('myArr :', myArr);

// console.log('updateArr(myArr, 2) :', updateArr(myArr, 2));


// function updateArr(arr, number) {
//     const updateArr = [];

//     for(const element of arr) {
//         updateArr.push(element * number);
//     }

//     return updateArr;
// }


const name = 'Lisa';

// const myFunc = function() {
//     // const name = 'Bart';
//     const surname = 'Simpson';
//     const arr = [];
//     if (true) {
//         console.log(arr);
//     }   
//     console.log('arr', arr);

//     return `hello I'm ${name} ${surname}`;
// }

// console.log(myFunc());



// const myFunc = function() {
//     if (arguments.length  === 2) {

//     } else if ( arguments.length === 4) {

//     }

    

// };

// myFunc(1, 2, 3, 4);




