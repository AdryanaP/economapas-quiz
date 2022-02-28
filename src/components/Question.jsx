import { useContext, useEffect, useState } from "react";
import MyContext from "../contexts/myContext";
import Answers from "../components/Answers";
import { useRouter } from "next/router";

export default function Question() {
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
    setCorrectAnswers,
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
          setCorrectAnswers(++correctAnswers);
        }
      }
    }
  };

  const nextQuestion = () => {
    if (!answerChosen) {
      setError("Marque uma opção");
    } else {
      checkResult();
      if (index !== 9) {
        setError("");
        setIndex(++index);
        setMyAnswers([...myAnswers, answerChosen]);
        setAllMyAnswers([...allMyAnswers, answerChosen]);
        setAnswerChosen("");
      } else {
        router.push({
          pathname: "/results/[slug]",
          query: { slug: slug, difficulty: difficulty, name: name },
        });
      }
    }
  };

  console.log(myAnswers);

  return (
    <div
      className="p-8 md:p-12 bg-white rounded text-center w-72 md:w-29 space-y-8 my-8 center"
      key={index}
    >
      {questions[index] && (
        <div className="space-y-4">
          <p className="text-xl font-bold highlight">
            <span>{index + 1} - </span>
            {questions[index].question}
          </p>
          <Answers />
        </div>
      )}
      {!questions[index] && <p>Loading...</p>}
      <div className="flex items-center justify-between">
        <span className="text-xs text-red-700">{error}</span>
        <button className="bg-gray-300 p-2 rounded" onClick={nextQuestion}>
          Responder
        </button>
      </div>
    </div>
  );
}
