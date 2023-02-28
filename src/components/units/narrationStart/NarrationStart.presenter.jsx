import { useState } from "react";
// import * as S from "../../../../../styles/StartStyles";
import * as S from "./NarrationStart.styles"
import { prologue } from "../../../Script";

export default function NarrationStartUI(props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1)
  }
  return (
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            {prologue[step].str}
          </S.NarrationBox>
          <S.StartBtn onClick={step === prologue.length - 1 ? props.onClickMove : nextStep}>계속</S.StartBtn>
        </S.Bg>
        <S.Bottom></S.Bottom>
      </S.Wrapper>
    </>
  );
}
