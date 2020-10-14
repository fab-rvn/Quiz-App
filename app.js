import questions from './questions.js';

const signInSection = document.getElementById('signIn');
const inputField = document.getElementById('username');
const enterButton = document.getElementById('enter-button');
const homeSection = document.getElementById('home');
const welcomeTextElement = document.getElementById('welcome-text');
const gameButton = document.getElementById('start-game-button');
const gameSection = document.getElementById('game');
const questionTextElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const gameOver = document.getElementById('game-over');
const finalTextElement = document.getElementById('final-text');
const scoreTextElement = document.getElementById('final-score');
const highScoresList = document.getElementById('high-scores-list');
const playAgainButton = document.getElementById('play-again-button');
const goHomeButton = document.getElementById('go-home-button');

let users = [];
let user = {};
let availableQuestions = [];
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let acpetingAnswer = false;

const MAX_BONUS = 5;
const MAX_QUESTIONS = 4;

enterButton.addEventListener('click', e => {
  e.preventDefault();
  createUser();
  homeSection.classList.toggle('hide');
  signInSection.classList.toggle('hide');
  welcomeTextElement.innerText = `Welcome to Quiz App ${user.name}`;
});

gameButton.addEventListener('click', () => {
  gameSection.classList.toggle('hide');
  homeSection.classList.toggle('hide');
  startGame();
})

playAgainButton.addEventListener('click', () => {
  gameSection.classList.toggle('hide');
  gameOver.classList.toggle('hide');
  startGame();
})

goHomeButton.addEventListener('click', () => {
  signInSection.classList.toggle('hide');
  gameOver.classList.toggle('hide');
})

function createUser() {
  if (!inputField.value) inputField.value = 'unknow';
  let firstChar = inputField.value.slice(0,1).toUpperCase();
  let restOfChar = inputField.value.slice(1,).toLowerCase();
  let username = firstChar + restOfChar;
  user = {
    name: username,
    score: 0
  }
  users.push(user);
  inputField.value = "";
}

function startGame() {
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions];
  nextQuestion();
}

function nextQuestion() {
  if (questionCounter >= MAX_QUESTIONS || availableQuestions.length === 0) {
    user.score = score;

    if (score >= 60) {
      finalTextElement.innerText = `Well done ${user.name}`;
      scoreTextElement.style.color = 'var(--correct)';
    } else {
      finalTextElement.innerText = `${user.name} You can do better than this..`;
      scoreTextElement.style.color = 'var(--wrong)';
    }

    scoreTextElement.innerText = score;
    highScoresList.innerHTML = users.map(user => `<li class="score-list-item">${user.name} - ${user.score}</li>`).join('');
    gameOver.classList.toggle('hide');
    gameSection.classList.toggle('hide');
  }
  
  questionCounter++;
  // DISPLAY QUESTIONS
  const questionIndex = availableQuestions.length -1;
  currentQuestion = availableQuestions[questionIndex];
  questionTextElement.innerText = currentQuestion.question;
  // DISPLAY ANSWERS
  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion['choice' + number];
  });
  // DISCARD THE DONE QUESTIONS
  availableQuestions.splice(questionIndex, 1);
  acpetingAnswer = true;
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if (!acpetingAnswer) return;
    acpetingAnswer = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'wrong';

    if (classToApply == 'correct') {
      incrementScore(MAX_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      nextQuestion()
    }, 1000);
  }) 
})

function incrementScore(num) {
  score += num;
}


