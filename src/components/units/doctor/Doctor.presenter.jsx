import * as S from "./Doctor.styles";

export default function NarrationStart1UI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="images/chat/doctor.svg" />
            <S.AvatarName>의사</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="images/chat//doctor.svg" />
              <S.Flex>
                <S.SmallAvatarName>의사</S.SmallAvatarName>
                <S.ChatLeft>
                  상담사님,<br />지금 급한 환자들이 있는데,<br />연락 안받으시나요?? 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            <S.ChatRight>당신의 대답은?</S.ChatRight>
            <S.ChatBtn>무슨,,, 환자요?</S.ChatBtn>
            <S.ChatBtn>제가 상담사라구요,,,?</S.ChatBtn>
          </S.ChatWrapperRight>
          {/* <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/doctor.svg" />
              <S.Flex>
                <S.SmallAvatarName>의사</S.SmallAvatarName>
                <S.ChatLeft>
                  설명하자면 깁니다<br />지금 메신저가 와있을 거에요<br />우선 대화 나눠보세요! 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft> */}
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
