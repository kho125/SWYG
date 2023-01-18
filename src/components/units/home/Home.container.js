import HomeUI from "./Home.presenter";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/mbti/question");
  };

  return <HomeUI onClickMove={onClickMove} />;
}
