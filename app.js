import questions from './questions.js';

const signInSection = document.getElementById('signIn');
const inputField = document.getElementById('username');
const enterButton = document.getElementById('enter-button');
const homeSection = document.getElementById('home');
const welcomeTextElement = document.getElementById('welcome-text');
const gameButton = document.getElementById('start-game-button');
const rules = document.getElementById('rules');
const rulesButton = document.getElementById('rules-button');
const iconCloseRules = document.getElementById('close-icon');
const gameSection = document.getElementById('game');
const progressBar = document.getElementById('progress-bar');
const topic = Array.from(document.getElementsByClassName('step'));
const questionTextElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const gameOver = document.getElementById('game-over');
const finalTextElement = document.getElementById('final-text');
const scoreTextElement = document.getElementById('final-score');
const highScoresList = document.getElementById('high-scores-list');
const sortUpIcon = document.getElementById('sort-up-icon');
const sortDownIcon = document.getElementById('sort-down-icon');
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
const MAX_QUESTIONS = 20;

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

rulesButton.addEventListener('click', () => {
  rules.classList.toggle('hide');
})

iconCloseRules.addEventListener('click', () => {
  rules.classList.toggle('hide');
})

sortUpIcon.addEventListener("click", () => {
  highScoresList.innerHTML = "";
  users.sort((a,b) => b.score - a.score)
  .map(user => highScoresList.innerHTML += `<li class="score-list-item">${user.name} - ${user.score}</li>`);
})

sortDownIcon.addEventListener('click', () => {
  highScoresList.innerHTML = "";
  users.sort((a,b) => a.score - b.score)
  .map(user => highScoresList.innerHTML += `<li class="score-list-item">${user.name} - ${user.score}</li>`);
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
    // SAVE THE SCORE AND STYLE IT
    user.score = score;
    if (score >= 60) {
      finalTextElement.innerText = `Well done ${user.name}!`;
      scoreTextElement.style.color = 'var(--correct)';
    } else {
      finalTextElement.innerText = `${user.name} You can do better than this..`;
      scoreTextElement.style.color = 'var(--wrong)';
    }
    scoreTextElement.innerText = score;
    // RENDER ALL THE USER IN MEMORY
    highScoresList.innerHTML += `<li class="score-list-item">${user.name} - ${user.score}</li>`;
    gameOver.classList.toggle('hide');
    gameSection.classList.toggle('hide');
  }
  
  questionCounter++;
  // UPDATE PROGRESS BAR
  progressBar.style.width = (questionCounter / MAX_QUESTIONS) * 100 + '%';
  if (questionCounter > 12) {
    topic[2].classList.add('active');
  } else if (questionCounter > 6) {
    topic[1].classList.add('active');
  }
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


