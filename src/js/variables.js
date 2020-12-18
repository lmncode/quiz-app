//select
const categorySelect = document.querySelector(".category");
const categoryOptions = categorySelect.querySelector(".options");
const categoryPlaceholder = categorySelect.querySelector(".placeholder");

const difficultySelect = document.querySelector(".difficulty");
const difficultyOptions = difficultySelect.querySelector(".options");
const difficultyPlaceholder = difficultySelect.querySelector(".placeholder");

const categories = ["JavaScript", "HTML", "PHP"];
const difficultyList = [
  { difficulty: "Easy", coins: 10 },
  { difficulty: "Medium", coins: 20 },
  { difficulty: "Hard", coins: 30 },
];

const startBtn = document.querySelector(".start");
let selectedCategory;
let selectedDifficulty;
const warning = document.querySelector(".warning");

//timer
const timerText = document.querySelector(".timer span");
let remainingTime = 20;
let timerId;

//question
let questions;
let questionIndex = 0;
let correctAnswer;
const question = document.querySelector(".question");
const answerList = document.querySelector(".answers");

//heartIcon
let wrongAnswer = 0;
const hearts = document.querySelector(".hearts");
console.log(hearts);

//modal
const modal = document.querySelector(".modal");

//score
let coins;
const scoreText = document.querySelector(".score span");
let score = 0;
