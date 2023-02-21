import { useRouter } from "next/router";
import HarinChatUI from "./HarinChat.presenter";

export default function HarinChat() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/");
  };

  return <HarinChatUI onClickMove={onClickMove} />;
}
