import * as S from "../../../../../styles/StartStyles";

export default function HyeinStartUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            방금 그 사람은<br /> 
            환자였을까 의사였을까,,,<br /><br />  
            일단 다음 사람으로 넘어가자,, 
          </S.NarrationBox>
          <S.StartBtn onClick={props.onClickMove}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
