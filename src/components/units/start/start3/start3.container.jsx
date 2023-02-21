import { useRouter } from "next/router";
import Start3UI from "./start3.presenter";

export default function Start3() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/narrationStart/narrationStart1");
  };

  return <Start3UI onClickMove={onClickMove}  />;
}
