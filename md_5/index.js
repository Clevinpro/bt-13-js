console.log("work");

// function User(name, salary) {
//     // User.prototype.constructor = User

//     // new User()
//     // this {}
//     // [[Prototype]]
//     // // this.__proto__ = User.prototype;
//     // this = Object.create(User)

//     this.userName = name;
//     this.userSalary = salary;
//     this.balance = 0;

//     // this.getInfo = function() {
//     //     return `name:${this.userName} balance: ${this.balance}`;
//     // }

//     // return this
// }

// // const obj = new Object();
// // const obj = {};

// User.prototype.getInfo = function() {
//     return `name:${this.userName} balance: ${this.balance}`;
// }

// function SuperUser(name, salary, type) {
//     this.userType = type;

//     User.call(this, name, salary);
//     // this.balance = null;
//     // update SuperUser this
//     // {
//     //     this.userName = name;
//     //     this.userSalary = salary;
//     //     this.balance = 0;
//     // }
// }

// SuperUser.prototype = Object.create(User.prototype);
// SuperUser.prototype.constructor = SuperUser;

// SuperUser.prototype.getUserType = function() {
//     return this.userType;
// }

// // console.log('obj', {});

// console.log('User.name :', User.name);

// // console.log(User);
// console.dir(User);

// const bart = new User('Bart', 3000);
// const lisa = new User('Lisa', 6000);

// console.log('bart', bart);
// console.log('bart.getInfo() :', bart.getInfo());
// console.log('lisa', lisa);
// console.log('lisa.getInfo() :', lisa.getInfo());

// const superBart = new SuperUser('SuperBart', 6000, 'admin');

// console.log('superBart :', superBart);
// console.log('superBart.getUserType() :', superBart.getUserType());
// console.log('superBart.getInfo() :', superBart.getInfo());

// String.prototype.firstLetterToUpper = function() {
//     console.log('this in string method: ', this);

//     const arr = this.split(' ');
//     const newArr = [];
//     for(let word of arr) {
//         word = word[0].toUpperCase() + word.slice(1);
//         newArr.push(word);
//     }
//     return newArr.join(' ');
// }

// console.log("Hello how are you man ?".firstLetterToUpper());

// class User {
//   constructor(name, salary) {
//     this._name = name;
//     this._salary = salary;
//     this._balance = 0;
//   }

//   getInfo() {
//     return `name:${this._name} balance: ${this._balance}`;
//   }
// }

// class SuperUser extends User {
//   constructor(name, salary, type) {
//     super(name, salary);
//     this._type = type;
//   }

//   static salaryToUAH(obj) {
//     return obj._balance * 27;
//   }

//   // getUserType ()
//   get type() {
//     return this._type;
//   }

//   set type(type) {
//     return this._type = type;
//   }

//   get balance() {
//     return this._balance;
//   }

//   set balance(sum) {
//     return this._balance += sum;
//   }
// }

// console.dir(User);

// const bart = new User("Bart", 3000);
// const superBart = new SuperUser("Super Bart", 6000, "admin");

// console.log("bart :", bart);
// console.log("bart.getInfo() :", bart.getInfo());

// console.log("superBart :", superBart);
// console.log("superBart.getInfo() :", superBart.getInfo());
// // console.log('superBart.getUserType() :', superBart.getUserType());
// console.log("superBart.type :", superBart.type);
// console.log("superBart.type :", (superBart.type = "User"));

// superBart.balance = 3000;
// console.log("superBart.balance :", superBart.balance);

// console.log(
//   "SuperUser.salaryToUAH(superBart) :",
//   SuperUser.salaryToUAH(superBart)
// );

const random = function(max, min) {
  return Math.floor(Math.random() * (max - min)) + 1;
};

// function Creature(name, health, attack, block) {
//   this.name = name; // string
//   this.health = health; // number
//   this.attack = attack; // number
//   this.block = block; // object { chance: 5%, value: 70% }
// }

class Creature {
  constructor(name, health, attack, block) {
    this.name = name; // string
    this.health = health; // number
    this.attack = attack; // number
    this.block = block; // object { chance: 5%, value: 70% }
  }
  attackTarget(target) {
    let roundAttack;
    console.log("random______________:", random(100, 1));

    if (this.type !== "hero") {
      if (random(100, 1) <= target.dodge) {
        return console.log(`${target.name} dogged attack`);
      }
      if (random(100, 1) <= target.block.chance) {
        const newAttack = Math.floor(
          this.attack * (1 - target.block.value / 100)
        );
        console.log(
          `${this.name} attack ${target.name} by ${newAttack} points`
        );
        return (target.health = target.health - newAttack);
      }
    } else {
      console.log("Hero shot");
      roundAttack = this.attack;
      if (random(100, 1) <= 15) {
        roundAttack = roundAttack * 7;
      }
      if (random(100, 1) <= target.block.chance) {
        const newAttack = Math.floor(
          roundAttack * (1 - target.block.value / 100)
        );
        console.log(
          `${this.name} attack ${target.name} by ${newAttack} points`
        );
        return (target.health = target.health - newAttack);
      }
    }
    console.log(
      `${this.name} attack ${target.name} by ${roundAttack ||
        this.attack} points`
    );
    return (target.health = target.health - (roundAttack || this.attack));
  }
}

// target must be object
// Creature.prototype.attackTarget = function(target) {
//   let roundAttack;
//   console.log('random______________:', random(100, 1));

//   if(this.type !== "hero") {
//     if(random(100, 1) <= target.dodge) {
//       return console.log(`${target.name} dogged attack`);
//     }
//     if(random(100, 1) <= target.block.chance) {
//       const newAttack = Math.floor(this.attack * ( 1 - target.block.value / 100));
//       console.log(`${this.name} attack ${target.name} by ${newAttack} points`);
//       return target.health = target.health - newAttack;
//     }
//   } else {
//     console.log('Hero shot');
//     roundAttack = this.attack;
//     if(random(100, 1) <= 15) {
//       roundAttack = roundAttack * 7;
//     }
//     if(random(100, 1) <= target.block.chance) {
//       const newAttack = Math.floor(roundAttack * ( 1 - target.block.value / 100));
//       console.log(`${this.name} attack ${target.name} by ${newAttack} points`);
//       return target.health = target.health - newAttack;
//     }
//   }

// console.log(`${this.name} attack ${target.name} by ${roundAttack || this.attack} points`);
// return target.health = target.health - (roundAttack || this.attack);
// }

class Hero extends Creature {
  constructor(name, health, attack, block, dodge, critical) {
    super(name, health, attack, block);
    this.dodge = dodge;
    this.type = "hero";
    this.critical = critical;  
  }
}

// function Hero(name, health, attack, block, dodge, critical) {
//   this.dodge = dodge;
//   this.type = "hero";
//   this.critical = critical;
//   Creature.call(this, name, health, attack, block);
// }

// Hero.prototype = Object.create(Creature.prototype);
// Hero.prototype.constructor = Hero;

const dragon = new Creature("Marusya", 1000, 90, { chance: 5, value: 80 });

const hero = new Hero("Lancelot", 100, 50, { chance: 80, value: 80 }, 80, 15);

let rounds = 0;
while (dragon.health > 0 && hero.health > 0) {
  dragon.attackTarget(hero);
  if (hero.health > 0) {
    hero.attackTarget(dragon);
  } else {
    break;
  }
  console.log(hero.health);
  console.log(dragon.health);
  rounds += 1;
}

console.log("rounds :", rounds);
if (dragon.health <= 0) {
  console.log("Dragon is die");
} else {
  console.log("Hero is die");
}
