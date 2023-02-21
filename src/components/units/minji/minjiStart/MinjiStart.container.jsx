import { useRouter } from "next/router";
import MinjiStartUI from "./MinjiStart.presenter";

export default function MinjiStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/minji/minjiChat");
  };

  return <MinjiStartUI onClickMove={onClickMove} />;
}
