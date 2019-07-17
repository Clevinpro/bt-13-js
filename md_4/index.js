console.log('work');

// const users = [
//     {
//         id: "aksjdhqi23",
//         name: "Limpopo1",
//         position: "frontend",
//         salary: 1200,
//     },
//     {
//         id: "aksjdhqi231",
//         name: "Limpopo2",
//         position: "frontend",
//         salary: 1200,
//     },
//     {
//         id: "aksjdhqi223",
//         name: "Limpopo3",
//         position: "backend",
//         salary: 1000,
//     },
//     {
//         id: "aksjdhqi233",
//         name: "Limpop4",
//         position: "frontend",
//         salary: 1200,
//     },
//     {
//         id: "aksjdhqi234",
//         name: "Limpopo5",
//         position: "backend",
//         salary: 1000,
//     }
// ];

// function filterUsers(arr, value, action, newValue) {
//     const filteredArr = [];

//     for(const element of arr) {
//         if(element.position === value) {
//             // const newElement = {...element};
//             // newElement.position = 'backend-dev';

//             filteredArr.push(action(element, newValue));
//         }
//     }
//     return filteredArr;
// }

// function updatePosition(element, value) {
//     const newElement = {...element};
//     newElement.position = value;

//     return newElement;
// }

// function updateSalary(element, value) {
//     const newElement = { ...element };
//     newElement.salary += value;
//     return newElement;
// }


// const backendUsers = filterUsers(
//     users,
//     'backend',
//     updatePosition,
//     'developer',
// );

// const frontendUpdatedSalary = filterUsers(
//     users,
//     'frontend',
//     updateSalary,
//     300,
// );

// console.log('backendUsers :', backendUsers);
// console.log('frontendUpdatedSalary :', frontendUpdatedSalary);
// console.log('users :', users);


// function a() {
//     b();
//     console.log('a');
// }

// function b() {
//     c();
//     console.log('b');
// }

// function c() {
//     console.log('c');
// }

// a();


// const arr = [ 1, 2, 3, 4];

// const newArr1 = [];

// for(const item of arr) {
//     newArr1.push(item * 2);
// }

// const newArr2 = [];

// for(const item of arr) {
//     newArr2.push(item * 3);
// }

// console.log('newArr1 :', newArr1);
// console.log('newArr1 :', newArr2);

// function updateArr(arr, num) {
//     const newArr = [];

//     for(const item of arr) {
//         newArr.push(item * num);
//     }

//     return newArr;
// }


// updateArr(arr, 5);
// console.log('newArr :', newArr);


// const getCounter = function() {
//     let counter = 0;


//     const increment = function() {
//         counter += 1;
        
//         return counter;
//     }

    

//     return increment;
// }

// const counter1 = getCounter();


// console.log('counter1 :', counter1);
// // increment();
// console.log('counter1 :', counter1());
// console.log('counter1 :', counter1());

// const counter2 = getCounter();
// console.log('counter2() :', counter2());
// console.log('counter2() :', counter2());
// console.log('counter2() :', counter2());
// console.log('counter1 :', counter1());
// console.log('counter1 :', counter1());




// const user = {
//     name: "Bob",
//     // getInfo: function() {}
//     getInfo() {
//         console.log('this', this)
//         return `name: ${this.name}`
//     }
// };

// const getInfoFunc = user.getInfo;
// console.log('user.getInfo() :', user.getInfo());
// // console.log('getInfoFunc() :', getInfoFunc());

// const user2 = {
//     name: "Sara"
// };

// user2.getInfo = user.getInfo;

// console.log('user2.getInfo() :', user2.getInfo());




// const user = {
//     name : "Alan",
//     getInfo: () => {
//         console.log('this', this);
//     }
// }

// // const userGetInfo = user.userGetInfo.b



// const getUserInfo = function(surname, surname1) {
//     return `name: ${this.name} surname: ${surname} ${surname1}`;
// }

// console.log('object :', getUserInfo.call(user, 'Walkers', 'Walkers1'));
// console.log('object :', getUserInfo.apply(user, ['Walkers', 'ws']));

// const getUserInfoWithTarget = getUserInfo.bind(user, 'Walkers11', 'Walkers11')

// console.log('getUserInfoWithTarget() :', getUserInfoWithTarget());


const car = {
    name: "BMW",
    cost: 30000,
    getInfo() {
        // const getUAH = () => {
        //     console.log('this :', this);
        //     return this.cost * 27;
        // }
        const getUAH = () => this.cost * 27;
        
        return `Car: ${this.name} cost: ${getUAH()}`
    }
}

console.log('car.getInfo() :', car.getInfo());





