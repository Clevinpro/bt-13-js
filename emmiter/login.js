import eventEmitter from './emitter.js';

eventEmitter.subscribe('login', login);

function login ({ name, pass }) {
  // fetch 
  console.log('fetch success');
}