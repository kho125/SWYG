import { useRouter } from "next/router";
import Minji2ChatUI from "./Minji2Chat.presenter";

export default function Minji2Chat() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <Minji2ChatUI onClickMove={onClickMove} />;
}
