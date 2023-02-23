import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as S from "./HyeinChat.styles";

export default function HyeinChatUI(props) {
  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState([]); // selected question index list
  const [score, setScore] = useState(0);    // add score

  const scrollRef = useRef();
  useEffect(() => {
    console.log('ref')
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step])


  const hyeinQuestion = [
    {
      id: 0,
      qa: { str: `저는 사실,,,` },
      q1: { str: '신데렐라?', score: 1 },
      q2: { str: '백설공주?', score: 0 },
    },
    {
      id: 1,
      qa: { str: `네 맞아요 !! 동화에 나오는 !!` },
      q1: { str: '네 알겠습니다,,,', score: 0 },
      q2: { str: '어쩐지 아름다우시더라!!', score: 1 },
    },
    {
      id: 2,
      qa: { str: `그런데 지금 혹시 시간이 어떻게 되나요?` },
      q1: { str: '오후 12시요', score: 0 },
      q2: { str: '오전 12시요', score: 2 },
    },
    {
      id: 3,
      qa: { str: `이미 늦었네요,,, 저는 이제 그만 빨리 가봐야해요` },
      q1: { str: '어디를 가봐야 하죠?', score: 1 },
      q2: { str: '갑자기 가시면 안됩니다!!', score: 0 },
    },
    {
      id: 4,
      qa: { str: `지하철 막차는 놓치면 안되잖아요!!` },
      q1: { str: '네 알겠습니다,,,', score: 0 },
      q2: { str: '공주님이 막차라니요?', score: 1 },
    },
    {
      id: 5,
      qa: { str: `결국엔 현실로 돌아가야 하잖아요` },
      q1: { str: '저도 그렇구요', score: 0 },
      q2: { str: '아무리 공주님이어도 현실로 돌아가야 하는군요', score: 2 },
    },
  ]

  const selectChat = (index) => {
    setStep(++step);
    let _list = select;
    _list.push(index)
    setSelect(_list);

    let _score;
    if(index === 0) // up(q1) select
     _score = score + hyeinQuestion[step].q1.score
    else            // down(q2) select
     _score = score + hyeinQuestion[step].q2.score

    setScore(_score);

    console.log(step, index, _score);
  }

  function Question(index) {
    return (
      <>
        <S.ChatWrapperLeft>
          <S.ChatWrapper>
            <S.SmallAvatarImage src="/images/chat/hyein.svg" />
            <S.Flex>
              <S.SmallAvatarName>혜인</S.SmallAvatarName>
              <S.ChatLeft>
                {hyeinQuestion[index].qa.str}
              </S.ChatLeft>
            </S.Flex>
          </S.ChatWrapper>
        </S.ChatWrapperLeft>
        <S.ChatWrapperRight>
          {step === index && <S.ChatRight>당신의 대답은?</S.ChatRight>}
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === hyeinQuestion.length - 1 ? router.push("/harin/harinStart") : selectChat(0)}>
              {hyeinQuestion[index].q1.str}
            </S.ChatBtn>
            :
            select[index] === 0 &&
            <S.ChatRight>
              {hyeinQuestion[index].q1.str}
            </S.ChatRight>
          }
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === hyeinQuestion.length - 1 ? router.push("/harin/harinStart") : selectChat(1)}>
              {hyeinQuestion[index].q2.str}
            </S.ChatBtn>
            : select[index] === 1 &&
            <S.ChatRight>
              {hyeinQuestion[index].q2.str}
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
            <S.AvatarImage src="/images/chat/hyein.svg" />
            <S.AvatarName>혜인</S.AvatarName>
          </S.AvatarWrapper>
          <S.ChatWrapperLeft>
            <S.ChatWrapper>
              <S.SmallAvatarImage src="/images/chat/hyein.svg" />
              <S.Flex>
                <S.SmallAvatarName>혜인</S.SmallAvatarName>
                <S.ChatLeft>
                  안녕하세요 상담사님
                </S.ChatLeft>
              </S.Flex>
            </S.ChatWrapper>
          </S.ChatWrapperLeft>
          {
            hyeinQuestion.map((value, index ) => index <= step &&
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
