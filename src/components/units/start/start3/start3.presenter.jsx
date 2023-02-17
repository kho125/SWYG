import * as S from "./start3.styles";

export default function Start3UI(props) {
  return (
    
    <>
      <S.Wrapper>
        <S.Bg>
          <S.Box>
            <p>상담 내용에 따라</p>
            <p>마지막에 현실로 함께 돌아오는</p>
            <p>멤버가 달라지게 될 겁니다.</p>
            <p>그럼 시작해 볼까요?</p>
          </S.Box>
        </S.Bg>
        <S.Bottom>
        <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
