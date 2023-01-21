import * as S from "./Home.styles";

export default function HomeUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Group>
          <S.Title>첫 페이지!!</S.Title>
          <S.Btn onClick={props.onClickMove}>시작하기</S.Btn>
        </S.Group>
      </S.Wrapper>
    </>
  );
}
