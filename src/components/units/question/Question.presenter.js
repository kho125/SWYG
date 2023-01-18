import * as S from "./Question.styles";

export default function QuestionUI(props) {
  return (
    <>
      <S.Wrapper>
        {/* <ProgressBar
          variant="warning"
          animated
          now={(questionNo / QuestionData.length) * 100}
          style={{
            width: "80%",
            marginTop: 20,
          }}
        /> */}
        {/* <S.ButtonGroup>
          <Button
            variant="warning"
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
            style={{ width: "40%", minHeight: "200px", fontSize: "15pt" }}
          >
            {QuestionData[props.questionNo]}
          </Button>
          <Button
            variant="warning"
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
            style={{
              width: "40%",
              marginLeft: "20px",
              minHeight: "200px",
              fontSize: "15pt",
            }}
          >
            {QuestionData[props.questionNo]}
          </Button>
        </S.ButtonGroup> */}
      </S.Wrapper>
    </>
  );
}
