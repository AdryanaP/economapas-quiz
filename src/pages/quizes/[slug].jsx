import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import { useContext, useEffect } from "react";
import MyContext from "../../contexts/myContext";

export default function Quizes() {
  const { setMyAnswers } = useContext(MyContext);

  useEffect(() => {
    setMyAnswers([]);
  }, []);

  return (
    <div className="fullscreen">
      <Navbar />
      <Cards />
    </div>
  );
}
