import Link from "next/link";
import { useState, useEffect } from "react";

export default function (props) {


  const cards = [
    {
      title: "Linux",
      description: "10 questões",
    },
    {
      title: "DevOps",
      description: "10 questões",
    },
    {
      title: "Docker",
      description: "10 questões",
    },
    {
      title: "Programming ",
      description: "10 questões",
    },
  ];
  const listCards = cards.map((card) => {
    return (
      <div
        className="p-8 md:p-12 bg-white rounded text-center w-64 md:w-80 space-y-8 my-8"
        key={card.title}
      >
        <div className="space-y-1">
          <p className="text-xl font-bold highlight">{card.title}</p>
          <p>{card.description}</p>
        </div>
        <button className="bg-gray-300 p-2 rounded">
          <Link
            href={{
              pathname: "/question",
              query: { name: props.name },
            }}
          >
            Responder
          </Link>
        </button>
      </div>
    );
  });

  return (
    <section className="grid md:grid-cols-2 justify-center items-center justify-items-center md:gap-8 p-8 lg:px-20 md:mt-32 fullscreen">
      {listCards}
    </section>
  );
}
