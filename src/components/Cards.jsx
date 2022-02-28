import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import MyContext from "../contexts/myContext";

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
    <section className="grid md:grid-cols-2 justify-center items-center justify-items-center md:gap-8 p-8 lg:px-20 md:mt-32 fullscreen">
      {cards.map((card) => (
        <div
          className="p-8 md:p-12 bg-white rounded text-center w-64 md:w-80 space-y-8 my-8"
          key={card.title}
        >
          <div className="space-y-1">
            <p className="text-xl font-bold highlight">{card.title}</p>
            <p>{card.description}</p>
          </div>
          <div className="flexCenter gap-4">
            <button className="bg-gray-300 p-2 rounded">
              <Link
                href={{
                  pathname: `/quiz/[slug]`,
                  query: { slug: card.value, difficulty: "Easy", name: slug },
                }}
              >
                Fácil
              </Link>
            </button>
            <button className="bg-gray-300 p-2 rounded">
              <Link
                href={{
                  pathname: `/quiz/[slug]`,
                  query: { slug: card.value, difficulty: "Hard", name: slug },
                }}
              >
                Difícil
              </Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
