console.log('work');



const arr = [{name: "Bart"}, {name: "Lisa"}, {name: "Loky"}];

function renderUsers(users) {
    const ul = document.createElement('ul');
    ul.className = "user-list";

    users.forEach(el => {
        ul.append(createUser(el));
    });
    // console.log('ul :', ul);
    document.querySelector('.users-section').append(ul);
}

function createUser({ name }) {
    const li = document.createElement('li');
    li.className = "user-list__item";
    // li.classList.add('user-list__item');
    const h3 = document.createElement('h3');
    h3.textContent = name;
    li.append(h3);
    // console.log('li', li);

    return li;
}

renderUsers(arr);


// class HomePage {
//     constructor() {
//         this.toggleNav = document.querySelector('.toggle-nav');
//         this.nav = document.querySelector('.nav');

//         this.toggleNav.addEventListener('click', this.handleToggleNav.bind(this));
//         console.log('create class');
//     }

//     handleToggleNav() {
//         console.log('click');
//         this.nav.classList.toggle('active');
//     }

    
// }

// const homePage = new HomePage();


// const homePageObj = {
//     toggleNav: document.querySelector('.toggle-nav'),
//     nav: document.querySelector('.nav'),
//     handleToggleNav() {
//         this.nav.classList.toggle('active');
//     }
// }


// homePageObj.toggleNav.addEventListener('click', homePageObj.handleToggleNav.bind(homePageObj));
// console.log('create class');


// addEventListener('click', homePageObj.getInfo);




const toggleNav = document.querySelector('.toggle-nav');
const nav = document.querySelector('.nav');
const modalOverlay = document.querySelector('.overlay');
const modalButton = document.querySelector('.toggle-modal');
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');
const name = document.querySelector('input[name="name"]');
const surname = document.querySelector('input[name="surname"]');
const phone = document.querySelector('input[name="phone"]');
const email = document.querySelector('input[name="email"]');
const radio = document.querySelector('input[type="radio"]');

// console.log('form :', form);
// console.log('inputs :', inputs);

radio.addEventListener('input', (e) => {
    console.log('e.target.value :', e.target.value);
});

// const submDatas = {};

// inputs.forEach(el => {
//     // console.log('el :', el);
//     el.addEventListener('change', function(e) {
//         submDatas[event.target.name] = event.target.value;
//     })
// })

function handleSubmit(event) {
    event.preventDefault();
    console.log('email.value :', email.value);
    console.log(event);

    const submData = {
        name: name.value,
        surname: surname.value,
        phone: phone.value,
        email: email.value,
    }

    console.log('submData :', submData);
    // console.log('submDatas :', submDatas);
    
    event.target.reset();
    modalOverlay.classList.toggle('active');
}

form.addEventListener('submit', handleSubmit);

toggleNav.addEventListener('click', handleToggleNav);


function handleToggleNav() {
    nav.classList.toggle('active');
}

function toggleModal(event) {
    if(event.target === modalOverlay || event.target === modalButton) {
        modalOverlay.classList.toggle('active');
    }
}




modalButton.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);








