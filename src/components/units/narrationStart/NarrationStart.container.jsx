import { useRouter } from "next/router";
import NarrationStartUI from "./NarrationStart.presenter";

export default function NarrationStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/doctor");
  };

  return <NarrationStartUI onClickMove={onClickMove} />;
}
