import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
//import * as S from "./MinjiChat.styles"
import * as S from "../../../../../styles/ChatStyles";
import { minjiQuestion } from "../../../../Script";

export default function MinjiChatUI(props) {
  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState([]); // selected question score list

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step])

  const selectChat = (index) => {
    setStep(step + 1);
    let _select = select;
    if(index === 0) // up(q1) select
    {
      _select.push(minjiQuestion[step].q1.score)
    }
    else            // down(q2) select
    {
      _select.push(minjiQuestion[step].q2.score)
    }

    setSelect(_select);

    if(_select.length === 3)
    {
      let _score = 0;
      for(let i = 0; i<_select.length; i++)
      {
        _score = _score + _select[i];
      }
      localStorage.setItem('minjiScore', _score)
      console.log(_score)
      router.push('/hyein/hyeinStart')
    }
  }

  const stepBack = () => {
    if(step === 0) {
      router.push('/minji/minjiStart')
    }

    let _select = select;
    _select.pop()
    setSelect(_select);
    setStep(step - 1)
  }

  function Question(index) {
    return (
      <div key={index}>
        <S.ChatWrapperLeft>
          <S.ChatWrapper>
            <S.SmallAvatarImage src="/images/chat/minji.svg" />
            <S.Flex>
              <S.SmallAvatarName>민지</S.SmallAvatarName>
              <S.ChatLeft>
                {minjiQuestion[index].qa.str}
              </S.ChatLeft>
            </S.Flex>
          </S.ChatWrapper>
        </S.ChatWrapperLeft>
        <S.ChatWrapperRight>
          {step === index && <S.ChatRight>당신의 대답은?</S.ChatRight>}
          {step === index ?
            <S.ChatBtn onClick={() => selectChat(0)}>
              {minjiQuestion[index].q1.str}
            </S.ChatBtn>
            :
            select[index] === 0 &&
            <S.ChatRight>
              {minjiQuestion[index].q1.str}
            </S.ChatRight>
          }
          {step === index ?
            <S.ChatBtn onClick={() => selectChat(1)}>
              {minjiQuestion[index].q2.str}
            </S.ChatBtn>
            : select[index] === 1 &&
            <S.ChatRight>
              {minjiQuestion[index].q2.str}
            </S.ChatRight>
          }
        </S.ChatWrapperRight>
      </div>
    )

  }


  return (
    <>
      <S.Wrapper>
      <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/minji.svg" />
            <S.AvatarName>민지</S.AvatarName>
          </S.AvatarWrapper>
        <S.Bg ref={scrollRef}>
          {
            minjiQuestion.map((value, index ) => index <= step && index < 3 &&
            Question(index)  
            )
          }
        </S.Bg>

        <S.Bottom>
          <S.FirstBtn onClick={() => stepBack()}>이전으로</S.FirstBtn>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
