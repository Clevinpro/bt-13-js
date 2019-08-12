import eventEmitter from './eventEmitter.js';

eventEmitter.subscribe('add todo', addTodo);

function addTodo(arr, str) {
  arr.push(str);
};