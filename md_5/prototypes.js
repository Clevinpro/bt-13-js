console.log('work');
// new Object();
// const obj = new Object();
// const obj = {};

// console.dir( Object);

// console.log('obj :', obj);

// prototype only func
// __proto__ only obj

class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getInfo() {
        console.log(`Name: ${name}`);
    }
}


// const User = function User(name, surname, age) {
//     // User.prototype.constructor = User
    
//     // this
//     // new User
//     // this.__proto__ = User.prototype;
//     // this = Object.create(User.prototype);


//     this.name = name;
//     this.surname = surname;
//     this.age = age;

//     // this.getInfo = function() {
//     //     console.log(`Name: ${name}`);
//     // }
// }

// User.prototype.getInfo = function() {
//     console.log(`Name: ${name}`);
// }



class SuperUser extends User {
    constructor(name, surname, age, type) {
        super(name, surname, age);
        this._type = type;
    }

    static getRandom() {
        return Math.random() * 100;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }
}

// function SuperUser (name, surname, age, type) {
//     this.type = type;

//     User.call(this, name, surname, age);
//     // this.name = name;
//     // this.surname = surname;
//     // this.age = age;
// }

// SuperUser.prototype = Object.create(User.prototype);
// SuperUser.prototype.constructor = SuperUser;

console.log('User.prototype :', User.prototype);

console.dir(User);

const user = new User("Alex", "Borosos", 25);

const user2 = new SuperUser("Bob", "Marlow", 40, "admin");
user.getInfo();

console.log('user :', user);
console.log('user2 :', user2);
console.log('user2.type :', user2.type);
console.log('user2.type :', user2.type = "user");
console.log('SuperUser.getRandom() :', SuperUser.getRandom());

