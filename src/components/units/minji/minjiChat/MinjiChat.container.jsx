import { useRouter } from "next/router";
import MinjiChatUI from "./MinjiChat.presenter";

export default function MinjiChat() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/");
  };

  return <MinjiChatUI onClickMove={onClickMove} />;
}
