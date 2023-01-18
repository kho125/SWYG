import { useState } from "react";
import QuestionUI from "./Question.presenter";
import { QuestionData } from "../../../../assets/data/questiondata";
import { createSearchParams } from "react-router-dom";

export default function Question() {
  // const [questionNo, setQuestionNo] = useState(0);
  // const [totalScore, setTotalScore] = useState([
  //   { id: "EI", score: 0 },
  //   { id: "SN", score: 0 },
  //   { id: "TF", score: 0 },
  //   { id: "JP", score: 0 },
  // ]);

  // const handleClickAnswer = (add, type) => {
  //   const newScore = totalScore.map((s) =>
  //     s.id === type ? { id: s.id, score: s.score + add } : s
  //   );
  //   setTotalScore(newScore);
  //   if (QuestionData.length !== questionNo + 1) {
  //     setQuestionNo(questionNo + 1);
  //   } else {
  //     const mbti = newScore.reduce(
  //       (acc, curr) =>
  //         acc +
  //         (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
  //       ""
  //     );
  //     Navigate({
  //       pathname: "/mbti/result",
  //       search: `?${createSearchParams({
  //         mbti: mbti,
  //       })}`,
  //     });
  //   }
  // };

  return (
    <QuestionUI
    // handleClickAnswer={handleClickAnswer}
    // questionNo={questionNo}
    />
  );
}
