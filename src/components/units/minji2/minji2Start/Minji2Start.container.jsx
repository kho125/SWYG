import { useRouter } from "next/router";
import Minji2StartUI from "./Minji2Start.presenter";

export default function Minji2Start() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/minji2/minji2Chat");
  };

  return <Minji2StartUI onClickMove={onClickMove} />;
}
