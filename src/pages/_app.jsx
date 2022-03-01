import "../styles/global.css";
import "tailwindcss/tailwind.css";
import MyContext from "../contexts/myContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [myAnswersQuiz, setMyAnswersQuiz] = useState([]);
  const [allMyAnswers, setAllMyAnswers] = useState([]);
  const [answerChosen, setAnswerChosen] = useState("");
  const [correctAnswersQuiz, setCorrectAnswersQuiz ] = useState(0)
  const [allCorrectAnswers, setAllCorrectAnswers ] = useState(0)

  const context = {
    name,
    setName,
    category,
    setCategory,
    questions,
    setQuestions,
    index,
    setIndex,
    myAnswersQuiz,
    setMyAnswersQuiz,
    allMyAnswers,
    setAllMyAnswers,
    answerChosen,
    setAnswerChosen,
    correctAnswersQuiz,
    setCorrectAnswersQuiz,
    allCorrectAnswers, setAllCorrectAnswers
  };

  return (
    <MyContext.Provider value={context}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
