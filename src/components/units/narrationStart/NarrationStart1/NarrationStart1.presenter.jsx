import * as S from "../../../../../styles/StartStyles";

export default function NarrationStart1UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            <p>어느 밤,,,,</p>
            <p>핸드폰을 보다 잠든 나는</p>
            <p>메신저 알람 소리에 잠에서 깬다</p><br /><br /><br /><br /><br />
            ( 아니 이 새벽에 누가 연락을 해!? )
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
