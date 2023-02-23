import * as S from "../../../../../styles/StartStyles";

export default function NarrationStart2UI(props) {
  return (
    <>
      <S.Wrapper>
      <S.Bg>
        <S.NarrationBox>
          <p>메신저를 확인하니</p>
          <p>정체모를 메신저들이 잔뜩<br />와있었다..</p>
          <p>의사라는 사람이 왜 나한테<br />연락을 하지?</p>
        </S.NarrationBox>
        <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
