console.log('work');

function User(name, salary) {
    // User.prototype.constructor = User

    // new User()
    // this {}
    // [[Prototype]]
    // // this.__proto__ = User.prototype;
    // this = Object.create(User)

    this.userName = name;
    this.userSalary = salary;
    this.balance = 0;

    // this.getInfo = function() {
    //     return `name:${this.userName} balance: ${this.balance}`;
    // }

    // return this
}


User.prototype.getInfo = function() {
    return `name:${this.userName} balance: ${this.balance}`;
}

function SuperUser(name, salary, type) {
    this.userType = type;


    User.call(this, name, salary);
    // update SuperUser this
    // {
    //     this.userName = name;
    //     this.userSalary = salary;
    //     this.balance = 0;
    // }
}

SuperUser.prototype = Object.create(User.prototype);
SuperUser.prototype.constructor = SuperUser;

SuperUser.prototype.getUserType = function() {
    return this.userType;
}



// console.log('obj', {});

console.log('User.name :', User.name);

// console.log(User);
console.dir(User);

const bart = new User('Bart', 3000);
const lisa = new User('Lisa', 6000);

console.log('bart', bart);
console.log('bart.getInfo() :', bart.getInfo());
console.log('lisa', lisa);
console.log('lisa.getInfo() :', lisa.getInfo());

const superBart = new SuperUser('SuperBart', 6000, 'admin');

console.log('superBart :', superBart);
console.log('superBart.getUserType() :', superBart.getUserType());
console.log('superBart.getInfo() :', superBart.getInfo());


String.prototype.firstLetterToUpper = function() {
    console.log('this in string method: ', this);
    
    const arr = this.split(' ');
    const newArr = [];
    for(let word of arr) {
        word = word[0].toUpperCase() + word.slice(1);
        newArr.push(word); 
    }
    return newArr.join(' ');
}

console.log("Hello how are you man ?".firstLetterToUpper());
