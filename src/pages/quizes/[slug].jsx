import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
import MyContext from "../../contexts/myContext";

export default function Quizes() {
  const { setMyAnswersQuiz, setIndex, setCorrectAnswersQuiz } = useContext(MyContext);

  useEffect(() => {
    setMyAnswersQuiz([]);
    setIndex(0)
    setCorrectAnswersQuiz(0)
  }, []);


  return (
    <div className="fullscreen">
      <Navbar />
      <Cards />
    </div>
  );
}
