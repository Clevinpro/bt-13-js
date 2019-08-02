// console.log('log1');

// console.log('log2');

// setTimeout(function(){
//   console.log('log3');
// }, 2000);

// setTimeout(function(){
//   console.log('log4');
// }, 1000);


// console.log('log5');
// let count = 0;
// let timer1 = setInterval(function(){
//   console.log('count :', count);
//   count+=1;
// }, 1000);

// console.log('timer1 :', timer1);

// setTimeout(() => clearInterval(timer1), 5000);


// const date = new Date();
// console.log('date :', date);

// const date0 = new Date(0);

// console.log('date0 :', date0);
// console.log('Date.now() :', Date.now());

// // 12/05/2019

// function checkDate(date) {
//   let newDate = date;
//   if (date < 10) {
//     newDate = "0" + newDate;
//   }
//   console.log('newDate :', newDate);
//   return newDate;
// }

// function formatData(date) {
//   const currentDate = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();
//   return `${checkDate(currentDate)}/${checkDate(month)}/${year}`;
// }

// const newDate = formatData(date);

// console.log('newDate :', newDate);


// // const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// console.log('new Date(2019,7, 31) :', new Date(2019,6, 31));

// const start = new Date(2019,6, 31);
// const startMilliseconds = start.getTime();
// console.log('startMilliseconds :', startMilliseconds);
// const currentDate = Date.now();

// const hours = Math.floor((currentDate - startMilliseconds) / (1000 * 60 * 60));
// const minutes = Math.floor((currentDate - startMilliseconds) / (1000 * 60)  - hours * 60);
// const seconds = Math.floor((currentDate - startMilliseconds) / (1000)  - (hours * 60 * 60) - (minutes * 60));
// console.log('hours :', hours);
// console.log('minutes :', minutes);
// console.log('seconds :', seconds);







