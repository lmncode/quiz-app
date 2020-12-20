function openModal() {
  modalText.textContent = `Your score: ${score}`;
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}
