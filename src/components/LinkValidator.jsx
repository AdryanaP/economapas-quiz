import Link from "next/link";
import MyContext from '../contexts/myContext';
import { useContext } from "react";

export default function LinkValidator() {
  const { name, setName } = useContext(MyContext)

  if (name.trim() === "") {
    return (
      <span>Entrar</span>
    )
  } else {
    return (
      <Link
        href={"/quizes"}
      >
        Entrar
      </Link>
    );
  }
}
