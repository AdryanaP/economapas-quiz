import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import MyContext from "../contexts/myContext";
import react from "react";

export default function () {
  const router = useRouter();
  const { slug } = router.query;
  const { category, setCategory } = useContext(MyContext);

  const cards = [
    {
      title: "Linux",
      value: "Linux",
      description: "10 questões",
    },
    {
      title: "SQL",
      value: "SQL",
      description: "10 questões",
    },
    {
      title: "Docker",
      value: "Docker",
      description: "10 questões",
    },
    {
      title: "Programming ",
      value: "Code",
      description: "10 questões",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <div
          className="p-8 md:p-12 bg-white rounded text-center w-64 md:w-80 space-y-8 mb-8"
          key={card.title}
        >
          <div className="space-y-1">
            <p className="text-xl font-bold font-highlight">{card.title}</p>
            <p>{card.description}</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link
              href={{
                pathname: `/quiz/[slug]`,
                query: { slug: card.value, difficulty: "Easy", name: slug },
              }}
            >
              <a className="bg-sky-400 p-2 w-16 rounded">Fácil</a>
            </Link>

            <Link
              href={{
                pathname: `/quiz/[slug]`,
                query: { slug: card.value, difficulty: "Hard", name: slug },
              }}
            >
              <a className="bg-sky-400 p-2 w-16 rounded">Difícil</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
