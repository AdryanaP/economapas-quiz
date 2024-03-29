import { useContext, useEffect } from "react";
import MyContext from "../../contexts/myContext";
import Navbar from "../../components/Navbar";
import Feedback from "../../components/Feedback";
import Cards from "../../components/Cards";
import { FaArrowDown } from "react-icons/fa";

export default function Results() {
  const { setIndex, myAnswersQuiz, correctAnswersQuiz } = useContext(MyContext);

  setIndex(0);

  return (
    <div>
      <Navbar />
      <main className="pb-8">
        <section className="md:mx-28 mt-24 md:border rounded-md md:shadow-xl p-3">
          <div className="p-4 md:p-6 mb-6 bg-white rounded-t text-center w-auto space-y-8 center shadow-xl">
            <p className="text-xl">
              Acertou {correctAnswersQuiz} de {myAnswersQuiz.length} questões!
            </p>
          </div>
          <div className="mx-2 md:mx-28 flex justify-between text-sm md:text-lg text-white">
            <p className="cursor-default">Confira o gabarito:</p>
            <a href="#moreQuizes" className="flex items-center gap-2">
              <p>Outros quizes </p>
              <FaArrowDown />
            </a>
          </div>
          <Feedback />
        </section>

        <section
          id="moreQuizes"
          className="my-16 md:mx-28 md:border p-3 rounded-md md:shadow-xl"
        >
          <div className="p-4 md:p-6 bg-white rounded-t-md w-auto space-y-8 shadow-xl">
            <h2 className="text-xl text-center font-highlight">
              Faça outros quizes:
            </h2>
          </div>
          <div
            className="grid lg:grid-cols-2 2xl:grid-cols-4 justify-center items-center 
              justify-items-center md:gap-8 mx-2 xl:mx-28 my-10"
          >
            <Cards />
          </div>
        </section>
      </main>
    </div>
  );
}
