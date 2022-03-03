import { useContext } from "react";
import MyContext from "../contexts/myContext";
import { FaCheck, FaBan } from "react-icons/fa";

export default function Feedback() {
  const { questions, myAnswersQuiz } = useContext(MyContext);

  function getFeedback(answers, index, correctAnswers) {
    const results = Object.keys(answers).map((answer) => {
      return {
        label: answers[answer],
        isMyAnswer: answer === myAnswersQuiz[index],
        isCorrectAnswer: correctAnswers[`${answer}_correct`] === "true",
      };
    });
    return results;
  }

  return (
    <section className="md:mx-28 py-6 grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
      {questions.map((question, i) => (
        <div
          key={question.id}
          className="space-y-4 bg-white rounded p-4 md:p-8"
        >
          <p className="font-bold font-highlight text-lg">
            <span>{questions.indexOf(question) + 1} - </span>
            {question.question}
          </p>
          {getFeedback(question.answers, i, question.correct_answers).map(
            (answer) => {
              if (answer.label) {
                return (
                  <ul className="list-none">
                    {answer.isCorrectAnswer && (
                      <div
                        key={answer.label}
                        className={`flex gap-3 items-center justify-between p-2 rounded-md ${
                          answer.isMyAnswer ? "bg-green-400" : ""
                        }`}
                      >
                        <li className="font-bold">{answer.label}</li>
                        <span>
                          <FaCheck />
                        </span>
                      </div>
                    )}
                    {!answer.isCorrectAnswer && (
                      <div
                        key={answer.label}
                        className={`flex gap-3 items-center justify-between p-2 rounded-md ${
                          answer.isMyAnswer ? "bg-red-400" : ""
                        }`}
                      >
                        <li>{answer.label}</li>
                        <span>{answer.isMyAnswer ? <FaBan /> : ""}</span>
                      </div>
                    )}
                  </ul>
                );
              }
            }
          )}
        </div>
      ))}
    </section>
  );
}
