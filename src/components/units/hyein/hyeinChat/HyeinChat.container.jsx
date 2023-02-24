import { useRouter } from "next/router";
import HyeinChatUI from "./HyeinChat.presenter";

export default function HyeinChat() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <HyeinChatUI onClickMove={onClickMove} />;
}
