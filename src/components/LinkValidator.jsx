import Link from "next/link";

export default function LinkValidator(props) {
  if (props.name.trim() === "") {
    return (
      <span>Entrar</span>
    )
  } else {
    return (
      <Link
        href={{
          pathname: "/quizes",
          query: { name: props.name },
        }}
      >
        Entrar
      </Link>
    );
  }
}
