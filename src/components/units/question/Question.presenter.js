import * as S from "./Question.styles";

import { ProgressBar } from "react-bootstrap";

export default function QuestionUI(props) {
  return (
    <>
      <S.Wrapper>
        <ProgressBar
          variant="warning"
          animated
          now={(props.questionNo / props.QuestionData.length) * 100}
          style={{
            width: "80%",
            marginTop: 20,
          }}
        />
        <S.Title>질문</S.Title>
        <S.BtnGroup>
          <S.Btn
            variant="warning"
            onClick={() =>
              handleClickAnswer(1, QuestionData[props.questionNo].type)
            }
          >
            {props.QuestionData[props.questionNo]}
          </S.Btn>
          <S.Btn
            variant="warning"
            onClick={() =>
              handleClickAnswer(1, QuestionData[props.questionNo].type)
            }
          >
            {props.QuestionData[props.questionNo]}
          </S.Btn>
        </S.BtnGroup>

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
