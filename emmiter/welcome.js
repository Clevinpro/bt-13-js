import eventEmitter from './emitter.js';

eventEmitter.subscribe('login', welcome);

function welcome({ name }) {
  alert(`Welcome ${name}`);
}