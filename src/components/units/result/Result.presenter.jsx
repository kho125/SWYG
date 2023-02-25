import * as S from "../../../../styles/ResultStyles";

import Router, { useRouter } from "next/router";

export default function ResultUI(props) {
  const router = useRouter();

  function Member() {
    let ko, en;
    switch(JSON.parse(router.query.winner))
    {
      case 0: ko = '하니'; en = 'hani';
      break
      case 1: ko = '민지'; en = 'minji';
      break
      case 2: ko = '혜인'; en = 'hyein';
      break
      case 3: ko = '해린'; en = 'harin';
      break
      case 4: ko = '다니엘'; en = 'daniel';
      break
      default:
        ko = '민지'; en = 'minji';
        break;
    }

    console.log(ko, en);

    return(
      <S.Bg>
      <S.Image src={`/images/result/${en}.svg`} />
      <S.Name>{ko}</S.Name>
      <S.Narration>
        <p>당신이 현실로 구해온 멤버는 <br /><strong>{ko}</strong> 입니다!</p>
        <p>이제 다른 멤버들을<br />구할 차례입니다!</p>
      </S.Narration>
      </S.Bg>
    )
  }

  return (
    <>
      <S.Wrapper>
        <Member/>
        <S.Bottom>      
          <S.Btn>공유하기</S.Btn>
        <S.Btn onClick={() => Router.push("/")}>다시하기</S.Btn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
