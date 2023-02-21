import { useRouter } from "next/router";
import HyeinStartUI from "./HyeinStart.presenter";

export default function HyeinStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/hyein/hyeinChat");
  };

  return <HyeinStartUI onClickMove={onClickMove} />;
}
