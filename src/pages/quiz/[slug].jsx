import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Question from "../../components/Question";
import Head from "next/head";
import { useEffect, useContext } from "react";
import { getQuestions } from "../../repository/questionsRepository";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const { slug, difficulty } = router.query;
  const { questions, setQuestions, setMyAnswersQuiz } = useContext(MyContext);

  useEffect(() => {
    if (!slug) return;

    setQuestions([]);
    setMyAnswersQuiz([])

    const fetchQuestions = async () => {
      await getQuestions(slug, difficulty)
        .then((res) => res.json())
        .then((res) => setQuestions(res));
    };

    fetchQuestions();
  }, [slug]);

  console.log(questions);

  return (
    <div>
      <Head>
        <title>Economapas Quiz</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>
      <Navbar />
      <div className="flex justify-center">
        <Question />
      </div>
    </div>
  );
}
