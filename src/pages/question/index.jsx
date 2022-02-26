import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Question(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await fetch(
        "https://quizapi.io/api/v1/questions?apiKey=x5yYMkHgQ0xhz7Q7RD1CfTQESV5gXkBwlfcuNFed&limit=10",
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "GET",
        }
      ).then((res) => res.json());

      console.log(result);
      setQuestions(result);
    };

    fetchQuestions();
  }, []);

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

  const [index, setIndex] = useState(0);

  const nextQuestion = () => {
    if (index !== 3) {
      setIndex(++index);
    }
  };

  const router = useRouter();
  const {
    query: { name },
  } = router;

  return (
    <div>
      <Navbar name={props.name}></Navbar>
      <div
        className="p-8 md:p-12 bg-white rounded text-center w-64 md:w-80 space-y-8 my-8 center"
        key={cards[index].title}
      >
        <div className="space-y-1">
          <p className="text-xl font-bold highlight">{questions[index].question}</p>
          <p>{cards[index].description}</p>
        </div>
        <button className="bg-gray-300 p-2 rounded" onClick={nextQuestion}>
          Responder
        </button>
      </div>
    </div>
  );
}
