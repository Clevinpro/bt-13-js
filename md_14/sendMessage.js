
import eventEmitter from './eventEmitter.js';

eventEmitter.subscribe('add todo', sendMessage);
function sendMessage(arr, str, value) {
  alert(`New todo: ${str}, value: ${value}`);
}