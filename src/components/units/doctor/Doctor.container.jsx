import { useRouter } from "next/router";
import NarrationStart1UI from "./Doctor.presenter";

export default function NarrationStart1() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <NarrationStart1UI onClickMove={onClickMove} />;
}
