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
  },
  getPosts() {
    fetch(`${baseUrl2}/posts`)
      .then(response => response.json())
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
  render() {
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

  postsData.createPost(submData);
})

postsData.getPosts();

postsData.refs.postsList.addEventListener('click', function(e) {
  if(e.target.nodeName === "BUTTON") {
    const id = e.target.dataset.id;

    fetch(`${baseUrl2}/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        e.target.closest('.posts__item').remove();
      })
  }
})
