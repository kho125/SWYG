import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as S from "./MinjiChat.styles";

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


  const minjiQuestion = [
    {
      id: 0,
      qa: { str: `안녕하세요.\n지금 환자분들을 담당하는\n주치의 김민지입니다.` },
      q1: { str: '아까 의사라고 하는 사람을\n이미 만났는데요?', score: 0 },
      q2: { str: '당신이 진짜 의사군요', score: 1 },
    },
    {
      id: 1,
      qa: { str: `아까 만나셨던 분은\n사실 의사가 아닙니다.\n본인이 의사라는\n착각을 하고 계신 분이죠,,` },
      q1: { str: '당신도 어딘가\n힘든 부분이 있지는 않나요?', score: 2 },
      q2: { str: '그렇군요', score: 0 },
    },
    {
      id: 2,
      qa: { str: `어찌됐든, 저는 다음 환자를\n보러 가야해요!!\n계속 힘써주세요!!` },
      q1: { str: '네 알겠습니다.', score: 0 },
      q2: { str: '민지씨도 화이팅하세요!', score: 1 },
    },
  ]

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
              index === minjiQuestion.length - 1 ? router.push("/hyein/hyeinStart") : selectChat(0)}>
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
              index === minjiQuestion.length - 1 ? router.push("/hyein/hyeinStart") : selectChat(1)}>
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
            minjiQuestion.map((value, index ) => index <= step &&
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
