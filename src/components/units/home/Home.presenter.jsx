//import * as S from "./Home.styles"
import * as S from "../../../../styles/HomeStyles";

export default function HomeUI(props) {
  return (
    <>
      <S.Wrapper>
      <S.Bg>
          <S.LogoWrapper>
            <S.Logo src="/logo.png" />
            <S.Title>save your bias</S.Title>
          </S.LogoWrapper>
        </S.Bg>
        <S.Bottom>
          <S.Writer>This is a fan made contents</S.Writer>
          <S.StartBtn onClick={props.onClickMove}>시작</S.StartBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
