import { useRouter } from "next/router";
import DanielChatUI from "./DanielChat.presenter";

export default function DanielChat() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <DanielChatUI onClickMove={onClickMove} />;
}
