import './styles.css';
// import planetsTemplate from './templates/planet.hbs';
// import peoplesTemplate from './templates/people.hbs';
import postTemplate from './templates/post.hbs';

// const baseUrl = 'https://swapi.co/api';
// let appData = {
//   planets: [],
//   peoples: [],
//   refs: {
//     planetsList: document.querySelector('.planets'),
//     peoplesList: document.querySelector('.peoples'),
//   },
//   getPlanets() {
//     return this.planets;
//   },
//   render(data, link, template) {
//     const markup =
//     data.map(el => template(el)).join('');
//     link.insertAdjacentHTML('afterbegin', markup);
//   }
// };

// fetch(`${baseUrl}/planets/?page=1`)
//   .then((response) => response.json())
//   .then(data => {
//     console.log('data', data);
//     appData.planets = data.results;
//     // console.log('appData.getPlanets()', appData.getPlanets());
//     // console.log(
//     //   'planetsTemplate()',
//     //   planetsTemplate(appData.planets[0])
//     // )
//     appData.render(
//       appData.planets,
//       appData.refs.planetsList,
//       planetsTemplate,
//     );
//   });

// fetch(`${baseUrl}/people/?page=1`)
// .then((response) => response.json())
// .then(data => {
//   console.log('data', data);
//   appData.peoples = data.results;
//   // console.log('appData.getPlanets()', appData.getPlanets());
//   // console.log(
//   //   'planetsTemplate()',
//   //   planetsTemplate(appData.planets[0])
//   // )
//   appData.render(
//     appData.peoples,
//     appData.refs.peoplesList,
//     peoplesTemplate,
//   );
// });

const baseUrl2 = "http://localhost:3001";

const postsData = {
  posts: [],
  refs: {
    form: document.querySelector('.form'),
    postsList: document.querySelector('.posts'),
    formButton: document.querySelector('button[type="submit"]'),
    titleInput: document.querySelector('input[name="title"]'),
    textArea: document.querySelector('textarea[name="text"]'),
  },
  editMode: null,
  getPosts() {
    // fetch(`${baseUrl2}/posts`, { method: "GET" })
    fetch(`${baseUrl2}/posts`)
      .then(response => {
        console.log('response :', response);
        return response.json()
      })
      .then(data => {
        console.log('data', data)
        this.posts = data;
        this.render();
      });
  },

  createPost(data) {
    fetch(`${baseUrl2}/posts`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        this.posts.push(data);
        // this.renderPosts()
        // this.renderPost()
        console.log('data', data);
        this.refs.postsList.insertAdjacentHTML(
          'beforeend',
          postTemplate(data)
        );
      })

  },

  updatePost(data, id) {
    fetch(`${baseUrl2}/posts/${id}`, {
      method: 'PUT',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log('res data', data);
        this.posts = this.posts.map(el => {
          if(el.id === id) {
            return ({...el, ...data });
          }
          return el;
        });
        this.render();
      });
  },

  render() {
    this.refs.postsList.innerHTML = '';
    const markup =
    this.posts.map(el => postTemplate(el)).join('');
    this.refs.postsList.insertAdjacentHTML('afterbegin', markup);
  }
}

postsData.refs.form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('e.currentTarget.elements.title', e.currentTarget.elements.title);
  const submData = {
    title: e.currentTarget.elements.title.value,
    text: e.currentTarget.elements.text.value,
  };

  if(!postsData.editMode) {
    postsData.createPost(submData);
  } else {
    postsData.updatePost(submData, postsData.editMode);
  }
})

postsData.getPosts();

postsData.refs.postsList
  .addEventListener('click', function(e) {
  // if(e.target.nodeName === "BUTTON") {
  if(e.target.dataset.type === "DELETE") {
    const id = e.target.dataset.id;

    fetch(`${baseUrl2}/posts/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      e.target.closest('.posts__item').remove();
    })
  } else if(e.target.dataset.type === "UPDATE") {
    const id = +e.target.dataset.id;
    postsData.refs.formButton.textContent = 'update';
    postsData.editMode = id;
    const elData = postsData.posts
      .find(el => el.id === id);
    postsData.refs.titleInput.value = elData.title;
    postsData.refs.textArea.value = elData.text;
  }
})
