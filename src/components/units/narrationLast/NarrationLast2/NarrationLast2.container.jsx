import { useRouter } from "next/router";
import NarrationStart2UI from "./NarrationLast2.presenter";

export default function NarrationStart2() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/result");
  };

  return <NarrationStart2UI onClickMove={onClickMove} />;
}
