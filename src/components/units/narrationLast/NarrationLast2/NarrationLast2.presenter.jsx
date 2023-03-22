import * as S from "../../../../../styles/StartStyles";
// import * as S from "./NarrationLast2.styles"

export default function NarrationStart2UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>메신저가 하나 와있다.</p>
            <p>메신저를 보낸 사람은..?</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
