import { useContext } from "react";
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
              className={`flex gap-3 items-center border rounded-3xl px-2 md:px-4 ${
                answer === answerChosen ? "border-primary" : ""
              }`}
            >
              <input
                type="radio"
                name={"questão" + questions[index].id}
                id={answer}
                value={answer}
                onClick={() => saveAnswer(answer)}
              />
              <label
                htmlFor={answer}
                className="w-full py-2 md:py-4 cursor-pointer"
                onClick={() => saveAnswer(answer)}
              >
                {questions[index].answers[answer]}
              </label>
            </div>
          );
        }
      })}
    </form>
  );
}
