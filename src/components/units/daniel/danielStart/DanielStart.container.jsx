import { useRouter } from "next/router";
import DanielStartUI from "./DanielStart.presenter";

export default function DanielStart() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/daniel/danielChat");
  };

  return <DanielStartUI onClickMove={onClickMove} />;
}
