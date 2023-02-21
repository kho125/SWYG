import { useRouter } from "next/router";
import HyeinChatUI from "./HyeinChat.presenter";

export default function HyeinChat() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/");
  };

  return <HyeinChatUI onClickMove={onClickMove} />;
}
