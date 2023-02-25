import { useRouter } from "next/router";
import NarrationStart2UI from "./NarrationLast2.presenter";

export default function NarrationStart2() {
  const router = useRouter();

  const onClickMove = () => {
    const scoreList = [
      JSON.parse(localStorage.getItem('haniScore')),
      JSON.parse(localStorage.getItem('minjiScore')),
      JSON.parse(localStorage.getItem('hyeinScore')),
      JSON.parse(localStorage.getItem('harinScore')),
      JSON.parse(localStorage.getItem('danielScore')),
    ]
    const maxValue = Math.max(...scoreList)
    const memberIdx = scoreList.lastIndexOf(maxValue);

    console.log(scoreList, maxValue, memberIdx);

    router.push({pathname:"/result", query: {winner:memberIdx}});
  };

  return <NarrationStart2UI onClickMove={onClickMove} />;
}
