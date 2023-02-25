import Start1UI from "./start1.presenter";
import { useRouter } from "next/router";

export default function Start1() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/narrationStart/narrationStart1");
  };

  return <Start1UI onClickMove={onClickMove} />;
}
