import MyContext from "../contexts/myContext";
import { useContext, useState } from "react";
import { FaHome, FaSignOutAlt, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function () {
  const { name, allMyAnswers, allCorrectAnswers } = useContext(MyContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header
      className="bg-white flex justify-between py-3 px-4 md:px-8 
        items-center fixed w-full top-0 z-50 cursor-default"
    >
      <Link
        href={{
          pathname: "/quizes/[slug]",
          query: { slug: name },
        }}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" alt="logo" className="w-8"/>
          <h1 className="text-xl">Economapas Quiz</h1>
        </div>
      </Link>

      <button
        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid 
          border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <FaBars />
      </button>

      <div
        className={`lg:flex flex-grow gap-4 md:gap-8 items-center cursor-default justify-end bg-white rounded ${
          navbarOpen
            ? "flex flex-col absolute top-0 right-0 mt-12 p-4"
            : "hidden"
        }`}
      >
        <p className="text-lg">{name}</p>
        <p>Questões: {allMyAnswers.length}</p>
        <p>Acertos: {allCorrectAnswers}</p>
        <Link
          href={{
            pathname: "/quizes/[slug]",
            query: { slug: name },
          }}
        >
          <span
            className="flex items-center gap-2 cursor-pointer 
            hover:text-secondary transition ease-in-out delay-150"
          >
            Quizes <FaHome />
          </span>
        </Link>
        <Link href="/">
          <span
            className="flex items-center gap-2 cursor-pointer 
            hover:text-secondary transition ease-in-out delay-150"
          >
            Sair <FaSignOutAlt />
          </span>
        </Link>
      </div>
    </header>
  );
}
