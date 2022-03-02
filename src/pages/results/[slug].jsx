import { useContext } from "react";
import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Feedback from "../../components/Feedback";
import Cards from "../../components/Cards";
import { FaArrowDown } from "react-icons/fa";

export default function Results() {
  const {
    index,
    setIndex,
    questions,
    myAnswersQuiz,
    setMyAnswers,
    allMyAnswers,
    setAllMyAnswers,
    answerChosen,
    setAnswerChosen,
    correctAnswersQuiz,
    setCorretAnswers,
  } = useContext(MyContext);

  setIndex(0);

  return (
    <div>
      <Head>
        <title>Economapas Quiz</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>
      <Navbar />
      <div className="p-4 md:p-6 md:mx-28 mb-6 mt-24 bg-white rounded text-center w-auto space-y-8 center">
        <p className="text-xl">
          Acertou {correctAnswersQuiz} de {myAnswersQuiz.length} questões!
        </p>
      </div>
      <div className="md:mx-28 flex justify-between text-lg">
        <p>Confira o gabarito</p>
        <div className="flex items-center gap-2">
          <p>Outros quizes </p>
          <FaArrowDown />
        </div>
      </div>
      <Feedback />
      <section className="mt-10">
        <h2 className="text-xl text-center font-highlight">
          Faça outros quizes:
        </h2>
        <div
          className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center 
          justify-items-center md:gap-8 mx-28  fullscreen"
        >
          <Cards />
        </div>
      </section>
    </div>
  );
}
