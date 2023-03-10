import { useRouter } from "next/router";
import NarrationStartUI from "./Doctor.presenter";

export default function NarrationStart() {
  const router = useRouter();

  const onClickMove = () => {
    localStorage.clear();
    router.push("/");
  };

  return <NarrationStartUI onClickMove={onClickMove} />;
}
