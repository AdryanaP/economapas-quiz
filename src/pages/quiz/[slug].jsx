import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";
import { useEffect, useContext } from "react";
import { getQuestions } from "../../repository/questionsRepository";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { slug, difficulty } = router.query;
  const {
    setQuestions,
    setMyAnswersQuiz,
    setIndex,
    name,
    setCorrectAnswersQuiz,
  } = useContext(MyContext);

  useEffect(() => {
    if (!name) {
      router.push({
        pathname: "/",
      });
    }

    if (!slug) return;

    setMyAnswersQuiz([]);
    setIndex(0);
    setCorrectAnswersQuiz(0);
    setQuestions([]);

    const fetchQuestions = async () => {
      await getQuestions(slug, difficulty)
        .then((res) => res.json())
        .then((res) => setQuestions(res));
    };

    fetchQuestions();
  }, [slug]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Question />
      </div>
    </div>
  );
}
