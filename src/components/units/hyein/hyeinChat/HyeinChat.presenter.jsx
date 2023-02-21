import * as S from "./HyeinChat.styles";

export default function HyeinChatUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/hyein.svg" />
            <S.AvatarName>혜인</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hyein.svg" />
              <S.Flex>
                <S.SmallAvatarName>혜인</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요 상담사님
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hyein.svg" />
              <S.Flex>
                <S.SmallAvatarName>혜인</S.SmallAvatarName>
                <S.ChatLeft>
                  저는 사실,,,
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>신데렐라?</S.ChatBtn>
            <S.ChatBtn>백설공주?</S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
