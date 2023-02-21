import * as S from "./HaniChat.styles";

export default function HaniChatUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/hani.svg" />
            <S.AvatarName>하니</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hani.svg" />
              <S.Flex>
                <S.SmallAvatarName>하니</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요 상담사님
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hani.svg" />
              <S.Flex>
                <S.SmallAvatarName>하니</S.SmallAvatarName>
                <S.ChatLeft>
                  저는 처음에는<br />
                  어떤게 진짜 나인지<br /> 
                  너무 혼란스러웠어요 
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
