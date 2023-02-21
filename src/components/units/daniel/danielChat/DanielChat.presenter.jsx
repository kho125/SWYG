import * as S from "./DanielChat.styles";

export default function DanielChatUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/daniel.svg" />
            <S.AvatarName>다니엘</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/daniel.svg" />
              <S.Flex>
                <S.SmallAvatarName>다니엘</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요 :)<br /> 
                  뉴진스의 다니엘입니다! 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>뉴진스,,,?<br />아이돌이요,,,?</S.ChatBtn>
            <S.ChatBtn>뉴진스,,,?<br />어디서 들어본거 같은데,,,?</S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
