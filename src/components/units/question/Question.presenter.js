import * as S from "./Question.styles";

import { ProgressBar, Button } from "react-bootstrap";

export default function QuestionUI(props) {
  // const [questionNo, setQuestionNo] = useState(0);

  return (
    <>
      <S.Wrapper>
        <ProgressBar
          variant="warning"
          animated
          // now={(questionNo / QuestionData.length) * 100}
          style={{
            width: "80%",
            marginTop: 20,
          }}
        />
        <S.Title>질문</S.Title>
        <S.BtnGroup>
          <S.Btn>
            <S.Answera>내용</S.Answera>
          </S.Btn>
          <S.Btn>
            <S.Answera>내용</S.Answera>
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
