import * as S from "./Result.styles";

import { Button } from "react-bootstrap";
import { ResultData } from "../../../../assets/data/resultdata";
import Router from "next/router";

export default function ResultUI() {
  return (
    <>
      <S.Wrapper>
        <S.Header>예비집사 판별기</S.Header>
        <S.Contents>
          <S.Title>결과 보기</S.Title>
          <S.LogoImage>
            <img
              src={ResultData[0].image}
              className="rounded-circle"
              width={350}
            />
          </S.LogoImage>
          <S.Desc>
            예비 집사님과 찰떡궁합인 고양이는 {ResultData[0].name}
            입니다.
          </S.Desc>
          <Button onClick={() => Router.push("/mbti/home")}>
            테스트 다시하기
          </Button>
        </S.Contents>
      </S.Wrapper>
    </>
  );
}
