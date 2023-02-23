import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as S from "./HarinChat.styles";

export default function HarinChatUI(props) {
  const router = useRouter();

  const [step, setStep] = useState(0);      // question step
  const [select, setSelect] = useState([]); // selected question index list
  const [score, setScore] = useState(0);    // add score

  const scrollRef = useRef();
  useEffect(() => {
    console.log('ref')
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [step])


  const harinQuestion = [
    {
      id: 0,
      qa: { str: `야옹` },
      q1: { str: '야옹??', score: 1 },
      q2: { str: '멍멍!!', score: 0 },
    },
    {
      id: 1,
      qa: { str: `저는 이게 고민이예요,,, 사람들이 자꾸 저를 고양이인줄 알아요` },
      q1: { str: '하지만,, 어느정도 닮은건 사실인걸요...', score: 2 },
      q2: { str: '하지만,,해린씨는 사람이에요', score: 0 },
    },
    {
      id: 2,
      qa: { str: `그렇죠,,,츄르는 그냥 맛있어서 먹는거에요!!` },
      q1: { str: '지금 무엇을 그리고 있나요?', score: 1 },
      q2: { str: '손에 그거는 뭐에요?', score: 0 },
    },
    {
      id: 3,
      qa: { str: `이 노트요? 이건 그냥 아무것도 아닌데,,,` },
      q1: { str: '저만 보여주세요!', score: 0 },
      q2: { str: '비밀로 할게요!', score: 1 },
    },
    {
      id: 4,
      qa: { str: `그럼 비밀로 하기로 해요!! 상담사님만 보여드릴 거예요` },
      q1: { str: '무슨 그림이죠?', score: 0 },
      q2: { str: '귀여운 캐릭터들이군요', score: 1 },
    },
    {
      id: 5,
      qa: { str: `저는 그냥 창밖으로 보이는 걸 그린거예요 상담사님도 창밖에 저것들이 보이시나요?` },
      q1: { str: '네 아주 잘 보이네요,,', score: 2 },
      q2: { str: '아니요,, 보이지 않는걸요', score: 0 },
    },
  ]

  const selectChat = (index) => {
    setStep(++step);
    let _list = select;
    _list.push(index)
    setSelect(_list);

    let _score;
    if(index === 0) // up(q1) select
     _score = score + harinQuestion[step].q1.score
    else            // down(q2) select
     _score = score + harinQuestion[step].q2.score

    setScore(_score);

    console.log(step, index, _score);
  }

  function Question(index) {
    return (
      <>
        <S.ChatWrapperLeft>
          <S.ChatWrapper>
            <S.SmallAvatarImage src="/images/chat/harin.svg" />
            <S.Flex>
              <S.SmallAvatarName>해린</S.SmallAvatarName>
              <S.ChatLeft>
                {harinQuestion[index].qa.str}
              </S.ChatLeft>
            </S.Flex>
          </S.ChatWrapper>
        </S.ChatWrapperLeft>
        <S.ChatWrapperRight>
          {step === index && <S.ChatRight>당신의 대답은?</S.ChatRight>}
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === harinQuestion.length - 1 ? router.push("/daniel/danielStart") : selectChat(0)}>
              {harinQuestion[index].q1.str}
            </S.ChatBtn>
            :
            select[index] === 0 &&
            <S.ChatRight>
              {harinQuestion[index].q1.str}
            </S.ChatRight>
          }
          {step === index ?
            <S.ChatBtn onClick={() =>
              index === harinQuestion.length - 1 ? router.push("/daniel/danielStart") : selectChat(1)}>
              {harinQuestion[index].q2.str}
            </S.ChatBtn>
            : select[index] === 1 &&
            <S.ChatRight>
              {harinQuestion[index].q2.str}
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
            <S.AvatarImage src="/images/chat/harin.svg" />
            <S.AvatarName>해린</S.AvatarName>
          </S.AvatarWrapper>
          {
            harinQuestion.map((value, index ) => index <= step &&
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
