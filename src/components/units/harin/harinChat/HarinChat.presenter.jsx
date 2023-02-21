import * as S from "./HarinChat.styles";

export default function HarinChatUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/harin.svg" />
            <S.AvatarName>해린</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/harin.svg" />
              <S.Flex>
                <S.SmallAvatarName>해린</S.SmallAvatarName>
                <S.ChatLeft>
                  야옹
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>야옹??</S.ChatBtn>
            <S.ChatBtn>멍멍!!</S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
