import { useState } from "react";
import * as S from "../../../../../styles/StartStyles";
import { prologue } from "../../../../Script";

export default function NarrationStart1UI(props) {
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
