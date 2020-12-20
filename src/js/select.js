function renderList(list, item, placeholder) {
  const listItem = document.createElement("li");
  listItem.className = "option";
  if (typeof item === "object") {
    listItem.textContent = item.difficulty;
  } else {
    listItem.textContent = item;
  }
  listItem.addEventListener("click", () => {
    placeholder.textContent = listItem.textContent;
    list.dataset.value = placeholder.textContent;

    if (item.coins) {
      coins = item.coins;
    }
  });
  list.appendChild(listItem);
}

const toggleList = (list) => list.classList.toggle("active");

categorySelect.addEventListener("click", () => toggleList(categoryOptions));
difficultySelect.addEventListener("click", () => toggleList(difficultyOptions));
