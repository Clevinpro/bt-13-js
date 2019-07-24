console.log('work');

// const users = [
//     {
//         id: "alsjdhakjhdakj",
//         name: "Bob",
//         type: "admin",
//         category: "frontend",
//         balance: 400,
//     },
//     {
//         id: "alsj2093jhdakj",
//         name: "Jerry",
//         type: "user",
//         category: "frontend",
//         balance: 1000,
//     },
//     {
//         id: "alsj2013da3kj",
//         name: "Mark",
//         type: "admin",
//         category: "backend",
//         balance: 100,
//     },
//     {
//         id: "la2311sdl21k2l31",
//         name: "Siri",
//         type: "user",
//         category: "backend",
//         balance: 300,
//     },
//     {
//         id: "la2311sdlk2l31",
//         name: "Sara",
//         type: "user",
//         category: "backend",
//         balance: 50,
//     },
// ];

// console.log('users :', users);

// const filterUsers = function(arr, action) {
//     const newArr = [];

//     for(const elem of arr) {
//         if(action(elem)) {
//             newArr.push(elem);
//         }
//     }

//     return newArr;
// }

// const filterByType = elem => elem.type === 'user';

// const filteredUsers = users.filter((elem) => {
    //     if(elem.type === 'user' && users.category === 'frontend') {
        //         return true;
        //     }
        //     return false  
// });

const filteredUsers = users.filter((elem) => elem.type === 'user' &&
 users.category === 'frontend');

// delete element by id
// users.filter(elem => elem.id !== id);



// console.log('filterUsers(users) :', filterUsers(users, filterByType));
// console.log(
//     'filterUsers(users) :',
//     filterUsers(users, (elem) => elem.category === "frontend"));

console.log('filteredUsers :', filteredUsers);


// const updateUserByID = function(arr, id, data) {
//     const newArr = [...arr];

//     for(const elem of newArr) {
//         if(elem.id === id) {
//             newArr[newArr.indexOf(elem)] = {...elem, ...data};
//         }
//     }

//     return newArr;
// };

// console.log('updateUserByID() :',
//  updateUserByID(users, 'la2311sdl21k2l31', {type: "admin"}));

// const id = 'la2311sdl21k2l31';
// const newData = { type: "admin" };

// const updUsers = users.map((elem) => {
//     if(elem.id === id) {
//         return {...elem, ...newData}
//     }
//     return elem;
// });

// console.log('updUsers :', updUsers);

// console.log('names :', users.map(elem => elem.name));
// console.log('updateValue :', users.map(elem => elem.name + '-dev' ));

// console.log('users.find :', users.find(elem => elem.id === id));
// // console.log('users.filter :', users.filter(elem => elem.id === id));

// console.log('users.reverse() :', users.reverse());

// const myNewBalance = users.reduce((acc, elem) => acc + elem.balance, 0);
// console.log('myNewBalance :', myNewBalance);

// const numbers = [25, 40 , 70, 11];

// console.log('numbers.reduce :', numbers.reduce((acc, el) => acc + el, 0));

// console.log('numbers.sort() :', numbers.sort());
// // console.log('numbers.sort() :', numbers.sort((a, b) => a - b));
// console.log('numbers.sort() :', numbers.sort((a, b) => b - a));

// console.log('users.sort :', users.sort((a, b) => a.balance - b.balance));
// console.log('users.sort :', users.sort((a, b) => {
//     if ( a.name < b.name ){
//       return -1;
//     }
//     if ( a.name > b.name ){
//       return 1;
//     }
//     return 0;
//   }
// ));
