// import { TYPES, USER_TYPES } from './constants.js';
import * as Types from './constants.js';
import UserClass from './user.js';

console.log('TYPES :', Types.TYPES);
console.log('USER_TYPES :', Types.USER_TYPES);

const user = new UserClass('Bart', Types.USER_TYPES.ADMIN);
console.log('UserClass :', UserClass);
console.log('user :', user);