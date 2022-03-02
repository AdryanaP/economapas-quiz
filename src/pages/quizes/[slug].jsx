import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
import Head from "next/head";
import MyContext from "../../contexts/myContext";

export default function Quizes() {
  const { setMyAnswersQuiz, setIndex, setCorrectAnswersQuiz } =
    useContext(MyContext);

  useEffect(() => {
    setMyAnswersQuiz([]);
    setIndex(0);
    setCorrectAnswersQuiz(0);
  }, []);

  return (
    <div className="fullscreen">
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
      <Cards />
    </div>
  );
}
