// console.log('work');

// let a = 5;
// const b = 6;

// console.log('start value a:', a);
// console.log('start value b:', b);

// a = a + b;

// console.log('a:', a);
// console.log('b:', b);


// let word = '';
// let num;
// const age = 30;
// const name = 'Alex';
// const message = 'Welcome to the game';
// const free = false;
// let user = null;

// word = name + ' ' + message + ' !';

// console.log('new "word":', word);
// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof free);
// console.log(typeof user);
// console.log(typeof age);

// const userConfirm = confirm('Are you ready ?');
// const userInput = prompt('What are you doing now ?');


// console.log('userConfirm: ', userConfirm);
// alert(userInput);


// console.log(5 % 2 !== 0); // 5 % 2 =  1 // true // odd 
// console.log(6 % 2 === 0); // 6 % 2 = 0 // true // even

// console.log('' == false);


// console.log(5 + 5 + 'px');

// const currency = '1000';

// const promptValue = prompt('Enter number');

// console.log('promptValue:', promptValue);
// console.log(typeof promptValue);

// const sum = Number(currency) + Number(promptValue);
// console.log(sum);


// let myMoney = 20000; 

// myMoney = myMoney + sum;
// console.log('myMoney', myMoney);

// const updateMoney = String(myMoney);
// console.log('updateMoney', updateMoney);
// console.log(typeof updateMoney);




// const logoWidth = '120px';
// const logoHeight = '24.5px';

// console.log('logoWidth', Number.parseInt(logoWidth));
// console.log('logoHeight', Number.parseInt(logoHeight));
// console.log('logoHeight', Number.parseFloat(logoHeight));

// const name = prompt('Who are you?');

// console.log(' 5 > 4 && name !== "Barty"', 5 > 4 && name !== 'Barty');
// console.log('5 > 4 || 5 > 5', 5 > 4 || 5 > 5);
// console.log('5 > 5 || 5 > 4', 5 > 5 || 5 > 4);
// console.log('5 >= 5', 5 >= 5);
// console.log('5 > 5', 5 > 5);
// console.log('5 <= 20', 5 <= 20);

// if(5 > 4 && name !== 'Barty' && name !== 'Boss') {
//     alert(`Hello ${name + "'s"}. We are closed at ${22 + 1 + ' p.m.'}`);
// } else if (5 > 4 && name === "Boss") {
//     alert('Boss!!! Welcome');
// } else {
//     alert('Barty go home!');
// }


// console.log('isNaN', Number.isNaN(Number('5px'))); // not a number
// console.log('isNaN !== true', Number.isNaN(Number('5px')) !== true); // is a number ?
// console.log('to Number', Number('5px')); // NaN
// console.log('NaN', typeof Number('5px')); // NaN
// console.log(typeof Number('5px') === 'number'); // true
// console.log(NaN === NaN); // false


// const text = 'Lorem ipsum Dolor sit amet.';
// const word = 'DoLoR';

// console.log(text.length);
// console.log(text[0]);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.toLowerCase().includes(word.toLowerCase()));
// console.log(text.toLowerCase().indexOf(word.toLowerCase()));


// const user = 'Bart';

// if(user === 'Bart') {
//     const surname = 'Simpson';
//     if (surname === 'Simpson') {
//         console.log(user + ' ' + surname );
//     }
// }

// console.log('surname:', surname); // is not defined

// console.log('work');

// let count = 0;
// const text = 'Lorem ipsum Dolor sit amet.';

// while(count < text.length) {
//     console.log(`letter # ${count + 1}___:`, text[count]);
//     count = count + 1;
// }

// console.log(`letter # ${0 + 1}___:`, text[0]);
// console.log(`letter # ${1 + 1}___:`, text[1]);
// console.log(`letter # ${2 + 1}___:`, text[2]);

// let answer;

// do {
//     answer = prompt('What are you doing ???!!!');

// }while(answer === null)

// console.log('answer:', answer);


// for(let i = 0; i < 10; i = i + 1) {
//     if(i === 5) {
//         continue;
//     }
//     if(i === 7) {
//         break;
//     }
//     console.log(i);
// }


// const userInput = prompt('What is the day today?');

// switch(userInput.toLowerCase()) {
//     case 'monday':
//         alert('Have a nice week!');
//         break;
//     case 'friday':
//         alert('Drink alcohol! :) ');
//         break;
//     default:
//         alert('You can do it! Friday is coming! :) ');
// }


// let user;
// let isAuth = true;


// isAuth = false;
// user = isAuth ? 'Welcome' : 'Auth with your account';
// user = isAuth && 'Welcome' || 'Auth with your account';
// if (isAuth) {
//     user = 'Welcome';
// } else {
//     user = 'Auth with your account';
// }

// alert(user);


