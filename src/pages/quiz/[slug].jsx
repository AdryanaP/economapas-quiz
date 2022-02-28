import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";
import { useEffect, useContext } from "react";
import { getQuestions } from "../../repository/questionsRepository";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { slug, difficulty } = router.query;
  const { questions, setQuestions } = useContext(MyContext);

  useEffect(() => {
    if (!slug) return;

    setQuestions([]);

    const fetchQuestions = async () => {
      await getQuestions(slug, difficulty)
        .then((res) => res.json())
        .then((res) => setQuestions(res));
    };

    fetchQuestions();
  }, [slug]);

  console.log(questions)

  return (
    <div>
      <Navbar />
      <Question />
    </div>
  );
}
