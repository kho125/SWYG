import { useRouter } from "next/router";
import Start2UI from "./start2.presenter";

export default function Start2() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/start/start3");
  };

  return <Start2UI onClickMove={onClickMove} />;
}
