import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as S from "./HaniChat.styles";

export default function HaniChatUI(props) {

  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState([]); // selected question index list
  const [score, setScore] = useState(0);    // add score

  const scrollRef = useRef();
  useEffect(() => {
    console.log('ref')
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step])


  const haniQuestion = [
    {
      id: 0,
      qa: { str: `저는 처음에는\n어떤게 진짜 나인지\n너무 혼란스러웠어요` },
      q1: { str: '혼란이라니,,, 갑자기,,,?', score: 0 },
      q2: { str: '어떤 부분에서 혼란스러웠나요?', score: 1 },
    },
    {
      id: 1,
      qa: { str: `사람들이 원하는 나와\n진짜 나 사이에서 많이\n헷갈려했어요` },
      q1: { str: '그래서, 지금은 어때요?', score: 1 },
      q2: { str: '흔한 인지부조화\n증상으로 보이는군요', score: 0 },
    },
    {
      id: 2,
      qa: { str: `하지만 이제\n저는 자신을 찾은거 같아요!\n저는,,,` },
      q1: { str: '당신은,,,?', score: 1 },
      q2: { str: '하니잖아요!', score: 0 },
    },
    {
      id: 3,
      qa: { str: `저는 당신을 위한\n인공지능 비서 Siri에요` },
      q1: { str: 'Siri야 ~', score: 2 },
      q2: { str: '하이 빅스비', score: 0 },
    },
    {
      id: 4,
      qa: { str: `무엇을 도와드릴까요?` },
      q1: { str: '빨리 이 이상한 꿈에서\n깨고 싶네요.', score: 0 },
      q2: { str: '하니씨를 만나서 반가워요\n조금만 더 여기 있고 싶네요', score: 2 },
    },
    {
      id: 5,
      qa: { str: `저는 당신이 원하는 것이면\n무엇이든 이루어 드립니다.\n잠시만 기다려 보세요!` },
      q1: { str: '네 알겠습니다,,,', score: 0 },
      q2: { str: '기다릴 수 없네요', score: 1 },
    },
  ]

  const selectChat = (index) => {
    setStep(++step);
    let _list = select;
    _list.push(index)
    setSelect(_list);

    let _score;
    if(index === 0) // up(q1) select
     _score = score + haniQuestion[step].q1.score
    else            // down(q2) select
     _score = score + haniQuestion[step].q2.score

    setScore(_score);

    console.log(step, index, _score);
  }

  function Question(index) {
    return (
      <>
        <S.ChatWrapperLeft>
          <S.ChatWrapper>
            <S.SmallAvatarImage src="/images/chat/hani.svg" />
            <S.Flex>
              <S.SmallAvatarName>하니</S.SmallAvatarName>
              <S.ChatLeft>
                {haniQuestion[index].qa.str}
              </S.ChatLeft>
            </S.Flex>
          </S.ChatWrapper>
        </S.ChatWrapperLeft>
        <S.ChatWrapperRight>
          {step === index && <S.ChatRight>당신의 대답은?</S.ChatRight>}
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === haniQuestion.length - 1 ? router.push("/minji/minjiStart") : selectChat(0)}>
              {haniQuestion[index].q1.str}
            </S.ChatBtn>
            :
            select[index] === 0 &&
            <S.ChatRight>
              {haniQuestion[index].q1.str}
            </S.ChatRight>
          }
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === haniQuestion.length - 1 ? router.push("/minji/minjiStart") : selectChat(1)}>
              {haniQuestion[index].q2.str}
            </S.ChatBtn>
            : select[index] === 1 &&
            <S.ChatRight>
              {haniQuestion[index].q2.str}
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
            <S.AvatarImage src="/images/chat/hani.svg" />
            <S.AvatarName>하니</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hani.svg" />
              <S.Flex>
                <S.SmallAvatarName>하니</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요 상담사님
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          {
            haniQuestion.map((value, index ) => index <= step &&
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
