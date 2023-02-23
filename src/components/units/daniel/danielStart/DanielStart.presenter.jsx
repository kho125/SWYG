import * as S from "../../../../../styles/StartStyles";

export default function HarinStartUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>점점 나도 모르게 빠져들 뻔 했네,,</p> 
            <p>다음은 다니엘씨.</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
