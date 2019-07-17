console.log('work');

// const user = {
//     name: "Alex",
//     age: 30,
//     email: "Alex@mail.com",
//     married: false,
//     "a/.z": 0,
// };

// console.log('user.name :', user.name);
// console.log(`name: ${user.name} age: ${user.age} email: ${user.email}`);

// console.log('user["married"]', user["married"]);
// console.log('user["a/.z"]', user["a/.z"]);



// function getData(obj, objKey) {
//     return obj[objKey];
// }

// console.log('getData(user,"email") :', getData(user,"email"));

// delete user["a/.z"];
// console.log('user :', user);

// const name = "Bart";
// const userAge = 25;

// const user2 = {
//     // name: name,
//     name,
//     userAge,
//     married: true,
//     // sendHallo: function() {
//     //     console.log('Hello my name is Bart');
//     // },
//     sendHello() {
//         // console.log('Hello my name is Bart');
//         console.log('this :', this);
//         console.log('Hello my name is ' + this.name);
//     },
// };

// user2.email = "Bart@mail.com";
// console.log('user2 :', user2);

// console.log('user2.surname :', user2.surname);

// user2.surname = "Simpson";

// console.log('user2 :', user2);
// console.log('user2.surname :', user2.surname);

// user2.sendHello();


// const data = {
//     apples: 25,
//     bananas: 10,
//     pineapple: 5,
//     oranges: 7,
// }

// const dataCost = {
//     apples: 5,
//     bananas: 7,
//     pineapple: 10,
// }

// const apples = dataCost.apples;
// const pineapple = dataCost.pineapple;
// const { apples, pineapple: ananas } = dataCost;
// console.log('apples :', apples);
// console.log('pineapple :', ananas);

// const numbers = [1, 3 ,5];
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];
// const [first, second, third] = numbers;
// console.log('first :', first);

// let sum = 0;

// for (const keyOfObject in dataCost) {
//     sum += data[keyOfObject] * dataCost[keyOfObject];    
// }

// console.log('sum :', sum);



// const dataCostKeys = Object.keys(dataCost);
// console.log('dataCostKeys :', dataCostKeys);

// let sum2 = 0;

// for(const element of dataCostKeys) {
//     sum2 += data[element] * dataCost[element];
// }

// console.log('sum2 :', sum2);


// const dataCostValues = Object.values(dataCost);
// console.log('dataCostValues :', dataCostValues);

// let sum = 0;

// for(const value of dataCostValues) {
//     sum += value;
// }

// console.log('sum :', sum);


// const dataCostEntries = Object.entries(dataCost);
// console.log('dataCostEntries :', dataCostEntries);

// for(const element of dataCostEntries) {
//     console.log(`${element[0]}: ${element[1]}`);
// }

//rest
// function myFunction(a, b, ...arr) {
//     console.log('arr', arr);
//     console.log(a, b);
// }

// myFunction('a', 'b', 1, 2, 3);

// // spread

// const arr1 = [2, 6, 7];
// const arr2 = [14, 15 , 66];

// // const newArr = arr1.concat(arr2);
// const newArr = [1, ...arr1, 8, 11, ...arr2];

// console.log('arr1 :', arr1);
// console.log('newArr :', newArr);

// const obj1 = {
//     name: "Olexiy",
//     age: 33,
// };

// const obj2 = {
//     age: 35,
//     position: 'frontend',
// };

// const newObject = { ...obj1, ...obj2, married: false };
// // const newObject = Object.assign({ married: false }, obj1, obj2);

// console.log('obj1 :', obj1);
// console.log('obj2 :', obj2);
// console.log('newObject :', newObject);



// # 1

// console.log(a);
// var a = 5;
// let a = 5; // Cannot access 'a' before initialization

// # 2
// var a = 5;

// console.log(a);
// if(true) {
// // 	var a = 10; // change a variable in global scope
// 	let a = 10;
// 	console.log('with let', a);
// }

// console.log(a);


// 'use strict'; // with use strict error "a is not defined"

// a = 5;

// function myFunc() {
// 	a = 10;

// 	if(true) {
// 		a = 15;
// 	}
// 	console.log('in func', a);
	
// 	return a; 
// }

// myFunc();
// console.log(a);


// const cars = [
//     {
//         id: 'asdqoiweu2',
//         name: 'BMW',
//         color: 'red'
//     },
//     {
//         id: 'qpoweiqpowie',
//         name: 'Audi',
//         color: 'purple'
//     },
//     {
//         id: 'kasjdlakjds',
//         name: 'Mercedes',
//         color: 'white'
//     },
//     {
//         id: 'alsa;slkd',
//         name: 'Mercedes',
//         color: 'red'
//     },
// ];

// function filterByColor(arr, color) {
//     const redCars = [];

//     for(const car of arr) {
//         if(car.color === color) {
//             redCars.push(car);
//         }
//     }

//     return redCars;
// }

// function updateById(arr, id, newData) {
//     for(const car of arr) {
//         if(car.id === id) {
//             const newCar = {...car, ...newData}
//             arr.splice(arr.indexOf(car), 1, newCar);
//         }
//     }

//     return arr;
// }

// function updateById(arr, id, newData) {
//     const newArr = [];

//     for(const car of arr) {
//         if(car.id === id) {
//             const newCar = {...car, ...newData}
//             newArr.push(newCar);
//             continue;
//         }
//         newArr.push(car);
//     }

//     return newArr;
// }



// console.log('redCars :', filterByColor(cars, 'red'));
// console.log('updateById() :', updateById(cars, 'kasjdlakjds', { color: 'black' }));
