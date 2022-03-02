import React, { useState } from "react";
import Head from "next/head";
import { useContext, useEffect } from "react";
import MyContext from "../contexts/myContext";
import { useRouter } from "next/router";

export default function Home() {
  const { name, setName, setAllMyAnswers, setAllCorrectAnswers } =
    useContext(MyContext);
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    setAllMyAnswers("");
    setAllCorrectAnswers(0);
    setName("");
  }, []);

  const changeName = () => {
    const inputN = document.getElementById("inputName");
    setName(inputN.value);
    if (name.trim()) {
      setError(false);
    }
  };

  const validateInput = (event) => {
    event.preventDefault();
    if (name.trim()) {
      router.push({
        pathname: "/quizes/[slug]",
        query: { slug: name },
      });
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Head>
        <title>Economapas Quiz</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
      </Head>

      <main>
        <section className="translate absolute top-1/2 left-1/2 flex justify-center items-center">
          <div className="bg-whiteTransparent rounded-md p-10 md:p-20 md:w-96 text-center space-y-8 shadow-xl">
            <h1 className="font-highlight text-2xl text-black">
              Insira seu nome:
            </h1>
            <form className="text-center flex flex-col gap-8">
              <input
                type="text"
                id="inputName"
                placeholder="Seu nome"
                className="p-2 block mb-4 ml-0 bg-transparent placeholder-zinc-500 border-b border-b-black 
                outline-0 transition ease-in-out delay-150 focus:border-b-sky-400"
                onChange={changeName}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    validateInput(event);
                  }
                }}
              />
              <div
                className={`flex gap-4 items-center ${
                  error ? "justify-between" : "justify-end"
                }`}
              >
                <span
                  className={`text-red-600 text-xs ${
                    error ? "flex" : "hidden"
                  }`}
                >
                  É necessário inserir nome
                </span>
                <button
                  type="button"
                  className="bg-sky-400 p-2 px-4 rounded"
                  onClick={(event) => validateInput(event)}
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
