// import * as S from "../../../../../styles/StartStyles";
import * as S from "./Minji2Start.styles"

export default function Minji2StartUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
          <p>이제 마지막인 것 같다,,</p>
          <p>아까 의사선생님이었던 김민지.</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
