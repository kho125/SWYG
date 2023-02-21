import * as S from "./MinjiStart.styles";

export default function MinjiStartUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
          <p>일단 다음 사람으로 넘어가자,,,</p><br />
          <p>민지,,?</p><br />
          <p>처음에 봤던 의사랑 다른 사람인가?</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
