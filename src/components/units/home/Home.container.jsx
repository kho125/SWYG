import HomeUI from "./Home.presenter";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/start/start1");
  };

  return <HomeUI onClickMove={onClickMove} />;
}
