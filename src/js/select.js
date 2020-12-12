function renderList(list, item, placeholder) {
  const listItem = document.createElement("li");
  listItem.className = "option";
  listItem.textContent = item;

  listItem.addEventListener("click", () => {
    placeholder.textContent = item;
    list.dataset.value = item;
  });
  list.appendChild(listItem);
}

const toggleList = (list) => list.classList.toggle("active");

categorySelect.addEventListener("click", () => toggleList(categoryOptions));
difficultySelect.addEventListener("click", () => toggleList(difficultyOptions));
