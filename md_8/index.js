// Есть список юзеров
// 1. Необходимо вывести их циклом создавая каждый ел
// через createElement
// 2. Добавить возможность удалять елемент через кнопку.
// Использовать делегирование событий
// 3. При клике на одного юзера выводим его имя в alert


const users = [
  {
    id: 1,
    name: "Bart",
    surname: "Simpson"
  },
  {
    id: 2,
    name: "Lisa",
    surname: "Simpson"
  },
  {
    id: 3,
    name: "Homer",
    surname: "Simpson"
  },
  {
    id: 4,
    name: "Marge",
    surname: "Simpson"
  }
];


function renderUsers(usersList, link) {
  
  const ul = document.createElement('ul');
  ul.className = "user-list";
  console.log('ul :', ul);

    ul.addEventListener('click', function(e) {
    console.log('e.target :', e.target);
    // console.log('e.target.nodeName :', e.target.nodeName);
    if(e.target.nodeName === "BUTTON") {
      // console.log('e.target.closest() :', e.target.closest('.user-list__item'));
      e.target.closest('.user-list__item').remove();
    }

    if(e.target.nodeName === 'LI') {
      const surname = e.target.dataset.surname;
      const name = e.target.querySelector('span').textContent;
      console.log('name :', name);
      alert(`${name} ${surname}`);
    }
  })

  usersList.forEach(el => {
    ul.append(createUserElement(el));
  })
  console.log('ul :', ul);

  link.append(ul);
}

function createUserElement(userObj) {
  const li = document.createElement('li');
  li.className = "user-list__item";
  li.dataset.surname = userObj.surname;
  const span = document.createElement('span');
  span.textContent = userObj.name;
  const button = document.createElement('button');
  button.textContent = 'remove';
  button.style.backgroundColor = "red";
  button.style.color = "#fff";
  button.style.padding = "5px"
  li.append(span);
  li.append(button);
  // console.log('li :', li);
  return li;
}


renderUsers(users, document.body);

console.log('document.body :', document.body);

const form = document.querySelector('form');

function handleAdd(e) {
  e.preventDefault();

  const ul = document.querySelector('.user-list');
  const name = document.querySelector('input[name="name"]').value;
  const surname = document.querySelector('input[name="surname"]').value;

  ul.append(createUserElement({ name, surname }));
  e.target.reset();
}

form.addEventListener('submit', handleAdd);

