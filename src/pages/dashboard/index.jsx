import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";

export default function HomeA() {
  const router = useRouter();
  const {
    query: { name },
  } = router;
  return (
    <div className="fullscreen">
      <Navbar name={name}></Navbar>
      <Cards />
    </div>
  );
}
