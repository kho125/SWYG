import * as S from "./HaniStart.styles";

export default function NarrationStart1UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>메신저 목록을 확인한다,,,</p>
            <p>하니,,? 하니가 누구지,,,?</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
