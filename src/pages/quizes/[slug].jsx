import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
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
    <div className="h-full">
      <Navbar />
      <section
        className="grid md:grid-cols-2 justify-center items-center 
          justify-items-center md:gap-8 h-full p-8 lg:px-44 pt-28"
      >
        <Cards />
      </section>
    </div>
  );
}
