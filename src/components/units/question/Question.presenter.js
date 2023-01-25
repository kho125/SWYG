import * as S from "./Question.styles";

import { ProgressBar, Button } from "react-bootstrap";

export default function QuestionUI(props) {
  return (
    <>
      <S.Wrapper>
        <ProgressBar
          striped
          variant="danger"
          now={(props.questionNo / props.QuestionData.length) * 100}
          style={{ marginTop: "20px" }}
          // variant="warning"
          // animated
          // style={{
          //   width: "80%",
          //   marginTop: 20,
          // }}
        />
        <S.Title>{props.QuestionData[props.questionNo].title}</S.Title>
        <S.BtnGroup>
          <Button
            style={{
              width: "40%",
              minHeigth: "200px",
              fontSize: "15px",
              marginRight: "20px",
            }}
            // variant="warning"
            onClick={() =>
              props.handleClickAnswer(
                1
                // props.QuestionData[props.questionNo].type
              )
            }
          >
            {/* {props.QuestionData[props.questionNo]} */}
            {props.QuestionData[props.questionNo].answera}
          </Button>
          <Button
            style={{ width: "40%", minHeigth: "200px", fontSize: "15px" }}
            // variant="warning"
            onClick={() =>
              props.handleClickAnswer(
                1
                // props.QuestionData[props.questionNo].type
              )
            }
          >
            {/* {props.QuestionData[props.questionNo]} */}
            {props.QuestionData[props.questionNo].answerb}
          </Button>
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
