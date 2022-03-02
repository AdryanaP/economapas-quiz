async function getQuestions(category, difficulty) {
  const url =
    `https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&limit=10&category=${category}&difficulty=${difficulty}`;
  const params = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "GET",
  };

  return fetch(url, params);
}

export { getQuestions };
