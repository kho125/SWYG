import { useRouter } from "next/router";
import HaniChatUI from "./HaniChat.presenter";

export default function HaniChat() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <HaniChatUI onClickMove={onClickMove} />;
}
