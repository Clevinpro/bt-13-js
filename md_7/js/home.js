import quizData from "./quiz-data.js";

console.log("quizData :", quizData);

const someObj = {
  question: "Что возвращает метод Array.prototype.filter()?",
  choices: [
    0,
    1,
    2
  ],
  answer: 2
};

function createChoice(question) {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  // индекс брать первого из цикла forEach(el, indx)
  input.setAttribute('name', 'choice-' + 1);
  input.setAttribute('value', question);
  console.log('input :', input);
}

createChoice(someObj.choices[0]);
