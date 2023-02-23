import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as S from "../../../../../styles/ChatStyles";
import { minjiQuestion } from "../../../../Question";

export default function MinjiChatUI(props) {
  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState([]); // selected question index list
  const [score, setScore] = useState(0);    // add score

  const scrollRef = useRef();
  useEffect(() => {
    console.log('ref')
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step])

  const selectChat = (index) => {
    setStep(++step);
    let _list = select;
    _list.push(index)
    setSelect(_list);

    let _score;
    if(index === 0) // up(q1) select
     _score = score + minjiQuestion[step].q1.score
    else            // down(q2) select
     _score = score + minjiQuestion[step].q2.score

    setScore(_score);

    console.log(step, index, _score);
  }

  function Question(index) {
    return (
      <>
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
            <S.ChatBtn onClick={() =>
              index === 2 ? router.push("/hyein/hyeinStart") : selectChat(0)}>
              {minjiQuestion[index].q1.str}
            </S.ChatBtn>
            :
            select[index] === 0 &&
            <S.ChatRight>
              {minjiQuestion[index].q1.str}
            </S.ChatRight>
          }
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === 2 ? router.push("/hyein/hyeinStart") : selectChat(1)}>
              {minjiQuestion[index].q2.str}
            </S.ChatBtn>
            : select[index] === 1 &&
            <S.ChatRight>
              {minjiQuestion[index].q2.str}
            </S.ChatRight>
          }
        </S.ChatWrapperRight>
      </>
    )

  }


  return (
    <>
      <S.Wrapper>
        <S.Bg ref={scrollRef}>
          <S.AvatarWrapper>
            <S.AvatarImage src="/images/chat/minji.svg" />
            <S.AvatarName>민지</S.AvatarName>
          </S.AvatarWrapper>
          {
            minjiQuestion.map((value, index ) => index <= step && index < 3 &&
            Question(index)  
            )
          }
        </S.Bg>

        <S.Bottom>
          <S.FirstBtn onClick={props.onClickMove}>처음으로</S.FirstBtn>
        </S.Bottom>
      </S.Wrapper>
    </>
  );
}
