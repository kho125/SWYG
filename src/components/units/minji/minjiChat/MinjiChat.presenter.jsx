import * as S from "./MinjiChat.styles";

export default function MinjiChatUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/minji.svg" />
            <S.AvatarName>민지</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/minji.svg" />
              <S.Flex>
                <S.SmallAvatarName>민지</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요,<br />
                  지금 환자분들을 담당하는<br />
                  주치의 김민지입니다. 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>아까 의사라고 하는 사람을<br />이미 만났는데요?</S.ChatBtn>
            <S.ChatBtn>당신이 진짜 의사군요 </S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
