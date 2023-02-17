import { useRouter } from "next/router";
import HaniStartUI from "./HaniStart.presenter";

export default function HaniStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/haniChat");
  };

  return <HaniStartUI onClickMove={onClickMove} />;
}
