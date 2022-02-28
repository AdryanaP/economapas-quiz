import { useContext, useState } from "react";
import MyContext from "../contexts/myContext";

export default function Question() {
  const {
    index,
    questions,
    answerChosen,
    setAnswerChosen
  } = useContext(MyContext);
  
  const saveAnswer = (answer) => {
    setAnswerChosen(answer);
  };

  return (
    <form className="text-left">
      {Object.keys(questions[index].answers).map((answer) => {
        if (questions[index].answers[answer]) {
          return (
            <div key={answer} className="flex gap-2 items-baseline">
              <input
                type="radio"
                name={"questão" + questions[index].id}
                id={answer}
                value={answer}
                onClick={() => saveAnswer(answer)}
              />
              <label>{questions[index].answers[answer]}</label>
            </div>
          );
        }
      })}
    </form>
  );
}
