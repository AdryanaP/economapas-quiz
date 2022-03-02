import { useContext, useEffect, useState } from "react";
import MyContext from "../contexts/myContext";
import Answers from "../components/Answers";
import { useRouter } from "next/router";

export default function Question() {
  const {
    index,
    setIndex,
    questions,
    myAnswersQuiz,
    setMyAnswersQuiz,
    allCorrectAnswers,
    setAllCorrectAnswers,
    allMyAnswers,
    setAllMyAnswers,
    answerChosen,
    setAnswerChosen,
    correctAnswersQuiz,
    setCorrectAnswersQuiz,
  } = useContext(MyContext);

  const [error, setError] = useState("");
  const router = useRouter();
  const { slug, difficulty, name } = router.query;

  useEffect(() => {
    setAnswerChosen("");
  }, []);

  const checkResult = () => {
    const options = questions[index].correct_answers;
    for (const result in options) {
      if (options[result] === "true") {
        if (result.includes(answerChosen)) {
          setCorrectAnswersQuiz(++correctAnswersQuiz);
          setAllCorrectAnswers(++allCorrectAnswers);
        }
      }
    }
  };

  console.log(index);

  const nextQuestion = () => {
    if (!answerChosen) {
      setError("Marque uma opção");
    } else {
      checkResult();
      setError("");
      setIndex(++index);
      setMyAnswersQuiz([...myAnswersQuiz, answerChosen]);
      setAllMyAnswers([...allMyAnswers, answerChosen]);
      setAnswerChosen("");
      if (index === 10) {
        setIndex(0);
        router.push({
          pathname: "/results/[slug]",
          query: { slug: slug, difficulty: difficulty, name: name },
        });
      }
    }
  };

  return (
    <div
      className="p-8 md:p-12 bg-white rounded text-center w-72 md:w-29 
        space-y-8 my-28 lg:my-8 translate sm:absolute sm:top-1/2 sm:left-1/2 z-1"
      key={index}
    >
      {questions[index] && (
        <div className="space-y-4">
          <p className="text-xl font-bold font-highlight">
            <span>{index + 1} - </span>
            {questions[index].question}
          </p>
          <Answers />
        </div>
      )}
      {!questions[index] && <p>Loading...</p>}
      <div className="flex items-center justify-between">
        <span className="text-xs text-red-700">{error}</span>
        <button className="bg-sky-400 p-2 px-4 rounded-md" onClick={nextQuestion}>
          Responder
        </button>
      </div>
    </div>
  );
}
