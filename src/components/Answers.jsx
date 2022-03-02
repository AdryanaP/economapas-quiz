import { useContext, useState } from "react";
import MyContext from "../contexts/myContext";

export default function Question() {
  const { index, questions, setAnswerChosen, answerChosen } =
    useContext(MyContext);

  const saveAnswer = (answer) => {
    setAnswerChosen(answer);
  };

  return (
    <form className="text-left space-y-3">
      {Object.keys(questions[index].answers).map((answer) => {
        if (questions[index].answers[answer]) {
          return (
            <div
              key={answer}
              className={`flex gap-3 items-center border rounded-3xl md:rounded-full p-2 md:p-4 ${
                answer === answerChosen ? "border-sky-400" : ""
              }`}
            >
              <input
                type="radio"
                name={"questão" + questions[index].id}
                id={answer}
                value={answer}
                onClick={() => saveAnswer(answer)}
              />
              <label htmlFor={answer} onClick={() => saveAnswer(answer)}>
                {questions[index].answers[answer]}
              </label>
            </div>
          );
        }
      })}
    </form>
  );
}
