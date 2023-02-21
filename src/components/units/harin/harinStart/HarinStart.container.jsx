import { useRouter } from "next/router";
import HarinStartUI from "./HarinStart.presenter";

export default function HarinStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/harin/harinChat");
  };

  return <HarinStartUI onClickMove={onClickMove} />;
}
