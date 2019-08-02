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

let usersData = localStorage.getItem("users");

if(usersData &&  JSON.parse(usersData).length > 0) {
  console.log(true);
  usersData = JSON.parse(usersData);
} else {
  console.log(false);
  usersData = users;
}

// const user1 = users[0];
// console.log("user1 :", user1);
// console.log("JSON.stringify(user1) :", JSON.stringify(user1));
// // localStorage.setItem("user", user1);
// localStorage.setItem("user", JSON.stringify(user1));

// let newUser;

// console.log("localStorage.getItem() :", localStorage.getItem("user"));

// newUser = JSON.parse(localStorage.getItem("user"));
// console.log("newUser :", newUser);

function renderUsers(usersList, link) {
  const ul = document.createElement("ul");
  ul.className = "user-list";
  console.log("ul :", ul);

  ul.addEventListener("click", function(e) {
    console.log("e.target :", e.target);
    // console.log('e.target.nodeName :', e.target.nodeName);
    if (e.target.nodeName === "BUTTON") {
      console.log('e.target.closest() :', e.target.closest('.user-list__item'));
      const id = e.target.closest(".user-list__item").dataset.id;
      const newUsers = usersData.filter(el => el.id !== +id);
      usersData = newUsers;
      console.log('newUsers :', newUsers);
      localStorage.setItem('users', JSON.stringify(newUsers));
      e.target.closest(".user-list__item").remove();
    }

    if (e.target.nodeName === "LI") {
      const surname = e.target.dataset.surname;
      const name = e.target.querySelector("span").textContent;
      console.log("name :", name);
      alert(`${name} ${surname}`);
    }
  });

  usersList.forEach(el => {
    ul.append(createUserElement(el));
  });
  console.log("ul :", ul);

  link.append(ul);
}

function createUserElement(userObj) {
  const li = document.createElement("li");
  li.className = "user-list__item";
  li.dataset.surname = userObj.surname;
  li.dataset.id = userObj.id;
  const span = document.createElement("span");
  span.textContent = userObj.name;
  const button = document.createElement("button");
  button.textContent = "remove";
  button.style.backgroundColor = "red";
  button.style.color = "#fff";
  button.style.padding = "5px";
  li.append(span);
  li.append(button);
  // console.log('li :', li);
  return li;
}

renderUsers(usersData, document.body);

console.log("document.body :", document.body);

const form = document.querySelector("form");

function handleAdd(e) {
  e.preventDefault();

  const ul = document.querySelector(".user-list");
  const name = document.querySelector('input[name="name"]').value;
  const surname = document.querySelector('input[name="surname"]').value;
  const newUser = { id: usersData.length + 1, name, surname };

  ul.append(createUserElement(newUser));
  const newUsers = [...usersData];
  console.log('newUsers.length', usersData.length)
  newUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(newUsers));
  usersData = newUsers;
  e.target.reset();
}

form.addEventListener("submit", handleAdd);
