import { useContext, useEffect, useState } from "react";
import MyContext from "../contexts/myContext";

export default function Feedback() {
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

  function getFeedback(answers, index, correctAnswers) {
    const results = Object.keys(answers).map((answer) => {
      return {
        label: answers[answer],
        isMyAnswer: answer === myAnswers[index],
        isCorrectAnswer: correctAnswers[`${answer}_correct`] === "true",
      };
    });
    return results;
  }

  // TODO: Checar se esta pegando a resposta da ultima pergunta
  return (
    <section className="md:mx-28 py-6 grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {questions.map((question, i) => (
        <div key={question.id} className="space-y-4 bg-white p-8">
          <p className="font-bold font-highlight">
            <span>{questions.indexOf(question) + 1} - </span>
            {question.question}
          </p>
          {getFeedback(question.answers, i, question.correct_answers).map(
            (answer) => {
              console.log(answer);
              if (answer.label) {
                return (
                  <div key={answer.label} className="flex gap-2 items-center">
                    {answer.isCorrectAnswer && (
                      <li
                        className={`font-bold ${
                          answer.isMyAnswer ? "bg-green-400" : ""
                        }`}
                      >
                        {answer.label}
                      </li>
                    )}
                    {!answer.isCorrectAnswer && (
                      <li
                        className={`${answer.isMyAnswer ? "bg-red-400" : ""}`}
                      >
                        {answer.label}
                      </li>
                    )}
                  </div>
                );
              }
            }
          )}
          {/* {Object.keys(question.answers).map((answer) => {
            if (question.answers[answer]) {
              getFeedback(question.answers, i, question.correct_answers, question.answers[answer])
              return (
                <div key={answer} className="flex gap-2 items-center">
                  <li>{myAnswers[i] === answer ? "true" : "false"} {question.correct_answers[`${answer}_correct`]} {question.answers[answer]}</li>
                </div>
              );
            }
          })} */}
        </div>
      ))}
    </section>
  );
}
