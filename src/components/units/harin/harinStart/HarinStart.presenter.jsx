import * as S from "./HarinStart.styles";

export default function HarinStartUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>참 신기한 공주님이네,,,</p> 
            <p>다음은 해린이라는 사람이구나</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
