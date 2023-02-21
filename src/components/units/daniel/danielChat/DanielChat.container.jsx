import { useRouter } from "next/router";
import DanielChatUI from "./DanielChat.presenter";

export default function DanielChat() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/");
  };

  return <DanielChatUI onClickMove={onClickMove} />;
}
