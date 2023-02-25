import { useRouter } from "next/router";
import NarrationStart1UI from "./NarrationStart1.presenter";

export default function NarrationStart1() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/doctor");
  };

  return <NarrationStart1UI onClickMove={onClickMove} />;
}
