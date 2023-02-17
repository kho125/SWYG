import { useRouter } from "next/router";
import NarrationStart2UI from "./NarrationStart2.presenter";

export default function NarrationStart2() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/doctor");
  };

  return <NarrationStart2UI onClickMove={onClickMove} />;
}
