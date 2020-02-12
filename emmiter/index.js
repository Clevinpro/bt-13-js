import './login.js';
import './welcome.js';
import eventEmitter from './emitter.js';


// function onLogin() {
//   const name = "Adam";
//   const pass = "pass";

//   // login({ name, pass })
//   // welcome({ name, pass });
//   eventEmitter.emit('login', { name, pass });
// }


// onLogin();


class Ranges {
  constructor() {
    this.list = [];
  }
  addRangeToList() {
    console.log('run ');
    // this.list.reduce(
    //   (acc, range) => {
    //     acc.push(range);
    //     return acc;
    //   },
    //   [this.list[0]]
    // );
    this.list = this.list.reduce(
      (acc, range) => {
        console.log('this.list', this.list);
        if (acc[acc.length - 1][1] + 1 < range[0]) {
          acc.push(range);
        } else if (acc[acc.length - 1][1] < range[1]) {
          acc[acc.length - 1][1] = range[1];
        }
        return acc;
      },
      [this.list[0]]
    );
  }
  /**
   * Adds a range to the list
   */
  add(range) {
    this.list.push(range);
    this.addRangeToList();
  }
  /**
   * Removes a range from the list
   */
  remove(range) {
    // this.list.reduce((acc, [start, fin]) => {
    //   if (range[0] < start && range[1] > fin) {
    //     return acc;
    //   }
    //   //   return acc;
    // }, []);
    this.list = this.list.reduce((acc, [start, end]) => {
      if (range[0] < start && range[1] > end) {
        return acc;
      }
      if (start < range[0] && range[1] < end) {
        acc.push([start, range[0] - 1]);
        acc.push([range[1] + 1, end]);
      } else if (range[0] <= start) {
        acc.push([range[1] + 1, end]);
      } else if (range[0] <= end) {
        acc.push([start, range[0] - 1]);
      } else {
        acc.push([start, end]);
      }
      return acc;
    }, []);
  }
  /**
   * Prints out the list of ranges
   */
  print() {
    return console.log(
      "Display: " + this.list.map(num => [num]).join(" ")
    );
  }
 }


 const obj = new Ranges();

 obj.add([1,20]);
 obj.add([21,25]);
 console.log('obj', obj);

