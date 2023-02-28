import StartUI from "./start.presenter";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/narrationStart");
  };

  return <StartUI onClickMove={onClickMove} />;
}
