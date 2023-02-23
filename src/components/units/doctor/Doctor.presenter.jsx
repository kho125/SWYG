import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./Doctor.styles";

export default function NarrationStart1UI(props) {

  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState(-1); // selected question index

  const selectChat = (index) => {
    setStep(++step);
    setSelect(index);
    console.log(step, index);
  }

  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/doctor.svg" />
            <S.AvatarName>의사</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/doctor.svg" />
              <S.Flex>
                <S.SmallAvatarName>의사</S.SmallAvatarName>
                <S.ChatLeft>
                  상담사님,<br />지금 급한 환자들이 있는데,<br />연락 안받으시나요?? 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          <S.ChatWrapperRight>
            {step === 0 && <S.ChatRight>당신의 대답은?</S.ChatRight>}
            {step === 0 ? <S.ChatBtn onClick={()=>selectChat(0)}>무슨,,, 환자요?</S.ChatBtn> : select === 0 && <S.ChatRight>무슨,,, 환자요?</S.ChatRight>}
            {step === 0 ? <S.ChatBtn onClick={()=>selectChat(1)}>제가 상담사라구요,,,?</S.ChatBtn> : select === 1 && <S.ChatRight>제가 상담사라구요,,,?</S.ChatRight>}
          </S.ChatWrapperRight>
          { step > 0 &&
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/doctor.svg" />
              <S.Flex>
                <S.SmallAvatarName>의사</S.SmallAvatarName>
                <S.ChatLeft>
                  설명하자면 깁니다<br />지금 메신저가 와있을 거에요<br />우선 대화 나눠보세요! 
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          }
          {step > 0 &&
            <S.ChatWrapperRight>
            {step === 1 && <S.ChatRight>당신의 대답은?</S.ChatRight>}
            {step === 1 && <S.ChatBtn onClick={() => router.push("/hani/haniStart")}>네 알겠습니다,,,</S.ChatBtn>}
            {step === 1 && <S.ChatBtn onClick={() => router.push("/hani/haniStart")}>뭐라구요? 갑자기요?</S.ChatBtn>}
          </S.ChatWrapperRight>
          }
          </S.Bg>
        
        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
