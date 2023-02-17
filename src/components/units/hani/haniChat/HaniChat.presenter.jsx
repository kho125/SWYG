import * as S from "./HaniChat.styles";

export default function NarrationStart1UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/doctor.svg" />
            <S.AvatarName>하니</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/doctor.svg" />
              <S.Flex>
                <S.SmallAvatarName>하니</S.SmallAvatarName>
                <S.ChatLeft>
                  상담사님,<br />지금 급한 환자들이 있는데,<br />연락 안받으시나요?? 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>혼란이라니,,, 갑자기,,,?</S.ChatBtn>
            <S.ChatBtn>어떤 부분에서 혼란스러웠나요?</S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
