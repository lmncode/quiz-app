const categorySelect = document.querySelector(".category");
const categoryOptions = categorySelect.querySelector(".options");
const categoryPlaceholder = categorySelect.querySelector(".placeholder");

const difficultySelect = document.querySelector(".difficulty");
const difficultyOptions = difficultySelect.querySelector(".options");
const difficultyPlaceholder = difficultySelect.querySelector(".placeholder");

const categories = ["JavaScript", "CSS", "HTML"];
const difficultyList = ["Easy", "Medium", "Hard"];

const startBtn = document.querySelector(".start");
let selectedCategory;
let selectedDifficulty;
