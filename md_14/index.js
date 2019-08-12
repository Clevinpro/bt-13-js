import eventEmitter from './eventEmitter.js';
import './addTodo.js';
import './sendMessage.js';
const todo = [];


// console.log(addTodo)
// console.log(sendMessage)


// eventEmitter.subscribe('add todo', addTodo);
// eventEmitter.subscribe('add todo', sendMessage);


function submit() {
  let str = 'some string';

  eventEmitter.emit('add todo', todo, str, 10);
}

submit();
console.log('todo :', todo);
