import Link from "next/link";

export default function (props) {
  return (
    <header className="bg-white flex justify-between py-3 px-4 md:px-6 items-center">
      <div className="flex">
        <h1 className="text-xl">Economapas Quiz</h1>
      </div>
      <div className="flex gap-4 md:gap-6 items-center">
        <p className="text-lg">{props.name}</p>
        <Link href="/">Sair</Link>
      </div>
    </header>
  );
}
