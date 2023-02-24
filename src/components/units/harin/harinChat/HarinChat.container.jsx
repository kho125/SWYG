import { useRouter } from "next/router";
import HarinChatUI from "./HarinChat.presenter";

export default function HarinChat() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <HarinChatUI onClickMove={onClickMove} />;
}
