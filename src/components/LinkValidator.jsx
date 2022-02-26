import Link from "next/link";

export default function LinkValidator(props) {
  console.log(props.name);
  if (props.name.trim() === "") {
    return (
      <span>Entrar</span>
    )
  } else {
    return (
      <Link
        href={{
          pathname: "/dashboard",
          query: { name: props.name },
        }}
      >
        Entrar
      </Link>
    );
  }
}
