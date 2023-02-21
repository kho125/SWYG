import { useRouter } from "next/router";
import NarrationLast1UI from "./NarrationLast1.presenter";

export default function NarrationLast1() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/narrationLast/narrationLast2");
  };

  return <NarrationLast1UI onClickMove={onClickMove} />;
}
