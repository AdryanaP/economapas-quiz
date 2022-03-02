import { useContext, useEffect } from "react";
import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import Feedback from "../../components/Feedback";
import Cards from "../../components/Cards";
import { FaArrowDown } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const { name, setIndex, myAnswersQuiz, correctAnswersQuiz } =
    useContext(MyContext);

  setIndex(0);

  useEffect(() => {
    if (!name) {
      router.push({
        pathname: "/",
      });
    }
  }, []);

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
      <main className="pb-8">
        <div className="p-4 md:p-6 md:mx-28 mb-6 mt-24 bg-white rounded text-center w-auto space-y-8 center">
          <p className="text-xl">
            Acertou {correctAnswersQuiz} de {myAnswersQuiz.length} questões!
          </p>
        </div>
        <div className="mx-2 md:mx-28 flex justify-between text-sm md:text-lg">
          <p>Confira o gabarito</p>
          <div className="flex items-center gap-2">
            <p>Outros quizes </p>
            <FaArrowDown />
          </div>
        </div>
        <Feedback />
        <section className="mt-10">
          <h2 className="text-xl text-center font-highlight">
            Faça outros quizes:
          </h2>
          <div
            className="grid md:grid-cols-2 2xl:grid-cols-4 justify-center items-center 
          justify-items-center md:gap-8 mx-28 my-10"
          >
            <Cards />
          </div>
        </section>
      </main>
    </div>
  );
}
