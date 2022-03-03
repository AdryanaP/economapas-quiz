import "../styles/global.css";
import "tailwindcss/tailwind.css";
import MyContext from "../contexts/myContext";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [myAnswersQuiz, setMyAnswersQuiz] = useState([]);
  const [allMyAnswers, setAllMyAnswers] = useState([]);
  const [answerChosen, setAnswerChosen] = useState("");
  const [correctAnswersQuiz, setCorrectAnswersQuiz] = useState(0);
  const [allCorrectAnswers, setAllCorrectAnswers] = useState(0);

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
    allCorrectAnswers,
    setAllCorrectAnswers,
  };

  return (
    <MyContext.Provider value={context}>
      <Head>
        <title>Economapas Quiz</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png"></link>
      </Head>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
