// const key = Symbol('Some string');
// const key2 = Symbol('Some string');

// console.log('key === key2 :', key === key2);

// const obj = {
//   name: "Alex",
//   age: 30,
//   [key2]: [1, 2, 3],
// };

// obj[key] = 'Some string value';

// console.log('obj :', obj);
// console.log('obj[key2] :', obj[key2]);
// console.log("obj['Some string']", obj['Some string']);

// for(const el in obj) {
//   console.log(el);
// }

// const someArr = [1, 2 , 3];

// function iterator(arr) {
//   let i = 0;
//   return {
//     next() {
//       const value = i < arr.length ? i++ : undefined;
//       const complete = i === arr.length ? true : false;
//       return {
//         value,
//         complete,
//       }
//     }
//   }
// }


// const runIterator = iterator(someArr);

// console.log('runIterator.next() :', runIterator.next());
// console.log('runIterator.next() :', runIterator.next());
// console.log('runIterator.next() :', runIterator.next());
// console.log('runIterator.next() :', runIterator.next());


// function* messageGenerator(){
//   let answer = yield 'Welcome';

//   if(answer === 'okay') {
//     yield 'Super!'
//   } else {
//     yield 'Good buy!'
//   }
// }

// const messageIterator = messageGenerator();

// console.log('messageIterator.next() :', messageIterator.next());
// // console.log('messageIterator.next() :', messageIterator.next('okay'));
// console.log(
//   'messageIterator.next().value :',
//   messageIterator.next('okay').value
// );
// console.log('messageIterator.next() :', messageIterator.next());

async function getData() {
  try {
    const res = await fetch('https://swapi.co/api/films/1/')
      .then(res => res.json());
    const res1 = await fetch('https://swapi.co/api/films/2/')
      .then(res => res.json());
      // .then(data => console.log('resData :', data))
      // .catch(err => console.error(err));
    console.log(res)
    console.log(res1)
  } catch(err) {
    throw err;
  }

}
// console.log( getData().then(data => console.log(data)));
getData()

// console.log('data :', data);
