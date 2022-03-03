import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
import Head from "next/head";
import MyContext from "../../contexts/myContext";
import { useRouter } from "next/router";

export default function Quizes() {
  const router = useRouter();
  const { setMyAnswersQuiz, setIndex, setCorrectAnswersQuiz, name } =
    useContext(MyContext);

  useEffect(() => {
    if (!name) {
      router.push({
        pathname: "/",
      });
    }

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
          href="/logo.png"
        ></link>
      </Head>
      <Navbar />
      <section
        className="grid md:grid-cols-2 justify-center items-center 
        justify-items-center md:gap-8 p-8 lg:px-44 pt-28 md:pt-60"
      >
        <Cards />
      </section>
    </div>
  );
}
