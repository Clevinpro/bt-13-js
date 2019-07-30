import { random } from './helpers.js';


export default class User {
  constructor(name, type) {
    this.name = name;
    this.type = type
    this.typeAcc = random(10, 1);
  }
}

