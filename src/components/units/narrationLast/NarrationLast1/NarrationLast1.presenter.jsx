// import * as S from "../../../../../styles/StartStyles";
import * as S from "./NarrationLast1.styles"

export default function NarrationLast1UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>이상한 꿈은 끝난 것 같다</p>
            <p>일어나서 핸드폰을 확인해 본다,,</p>
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
