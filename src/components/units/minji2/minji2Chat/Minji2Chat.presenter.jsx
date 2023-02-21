import * as S from "./Minji2Chat.styles";

export default function Minji2ChatUI(props) {
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
                  다들 잘 만나고 오셨나요?
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>네 이제 저도 무엇이<br />진짜인지 모르겠네요</S.ChatBtn>
            <S.ChatBtn>멤버들을 다시 볼 수는 없나요?</S.ChatBtn>
          </S.ChatWrapperRight>
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
