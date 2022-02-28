import { useContext, useEffect, useState } from "react";
import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";

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
      <div className="p-8 md:p-12 bg-white rounded text-center w-72 md:w-29 space-y-8 my-8 center">
        <p>
          {correctAnswers}/{allMyAnswers.length + 1}
        </p>
      </div>
      {questions.map((question) => (
        <div className="space-y-4">
          <p className="text-xl font-bold highlight">
            <span>{questions.indexOf(question)+1} - </span>
            {question.question}
          </p>
          {Object.keys(question.answers).map((answer) => {
            if (question.answers[answer]) {
              return (
                <div key={answer} className="flex gap-2 items-center">
                    <li>{question.answers[answer]}</li>
                </div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
