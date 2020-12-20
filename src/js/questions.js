function getQuestions(category, difficulty) {
  loader.classList.add("active");
  let questions = axios
    .get(
      `https://quizapi.io/api/v1/questions?apiKey=vWV5hrbItvDUDCBjUXf7WTKOKM5NGnZwplEnznMX&category=code&difficulty=${difficulty}&limit=10&tags=${category}`
    )
    .then((response) => {
      loader.classList.remove("active");
      return response.data;
    });
  return questions;
}
