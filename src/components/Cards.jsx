import Link from "next/link";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import MyContext from "../contexts/myContext";

export default function () {
  const router = useRouter();
  const { slug } = router.query;

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
          className="bg-white rounded text-center w-64 md:w-80 mb-8 shadow-xl"
          key={card.title}
        >
          <div className="space-y-1 p-8 rounded-md">
            <p className="text-xl font-bold font-highlight">{card.title}</p>
            <p>{card.description}</p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href={{
                pathname: `/quiz/[slug]`,
                query: { slug: card.value, difficulty: "Easy", name: slug },
              }}
            >
              <a
                className="w-full p-4 border-r border-r-whiteTransparent bg-primary
              hover:bg-green-300 transition ease-in-out delay-150 rounded-bl"
              >
                Fácil
              </a>
            </Link>

            <Link
              href={{
                pathname: `/quiz/[slug]`,
                query: { slug: card.value, difficulty: "Hard", name: slug },
              }}
            >
              <a
                className="w-full p-4 bg-primary hover:bg-orange-300 
              transition ease-in-out delay-150 rounded-br"
              >
                Difícil
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
