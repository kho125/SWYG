import * as S from "./start2.styles";

export default function Start2UI(props) {
  return (
    
    <>
      <S.Wrapper>
        <S.Bg>
          <S.Box>
            <p>이번엔 여러분이 상담사가 되어</p>
            <p>멤버들을 상담해 줄 차례입니다.</p>
          </S.Box>
        </S.Bg>
        <S.Bottom>
        <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
