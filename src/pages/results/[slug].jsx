import { useContext, useEffect, useState } from "react";
import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Feedback from "../../components/Feedback";

export default function Results() {
  const {
    index,
    setIndex,
    questions,
    myAnswers,
    setMyAnswers,
    allMyAnswers,
    setAllMyAnswers,
    answerChosen,
    setAnswerChosen,
    correctAnswers,
    setCorretAnswers,
  } = useContext(MyContext);

  setIndex(0)

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-6 md:mx-28 mb-6 mt-10 bg-white rounded text-center w-auto space-y-8 center">
        <p className="text-xl">
          Acertou {correctAnswers} de {allMyAnswers.length + 1} questões!
        </p>
      </div>
      <div className="md:mx-28 flex justify-between text-lg">
        <p>Confira o gabarito</p>
        <p>Outros quizes</p>
      </div>
      <Feedback />
    </div>
  );
}
