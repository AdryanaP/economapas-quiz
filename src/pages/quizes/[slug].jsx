import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
import MyContext from "../../contexts/myContext";

export default function Quizes() {
  const { setMyAnswers, setIndex, setCorrectAnswers } = useContext(MyContext);

  useEffect(() => {
    setMyAnswers([]);
    setIndex(0)
    setCorrectAnswers(0)
  }, []);


  return (
    <div className="fullscreen">
      <Navbar />
      <Cards />
    </div>
  );
}
