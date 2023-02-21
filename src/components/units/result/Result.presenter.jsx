import * as S from "./Result.styles";

import Router from "next/router";

export default function ResultUI() {
  return (
    <>
      <S.Wrapper>
      <S.Bg>
        <S.Image src="/images/result/minji.svg" />
        <S.Name>민지</S.Name>
        <S.Narration>
          <p>당신이 현실로 구해온 멤버는 <br /><strong>민지</strong> 입니다!</p>
          <p>이제 다른 멤버들을<br />구할 차례입니다!</p>
        </S.Narration>
        <S.Btn>공유하기</S.Btn>
        <S.Btn onClick={() => Router.push("/")}>다시하기</S.Btn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
