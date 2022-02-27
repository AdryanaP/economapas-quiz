import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import MyContext from "../../contexts/myContext";
import { useContext } from "react";

export default function Quizes() {
  const { name, setName } = useContext(MyContext);

  return (
    <div className="fullscreen">
      <Navbar />
      <Cards />
    </div>
  );
}
