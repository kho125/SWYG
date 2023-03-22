import { useState } from "react";
// import * as S from "../../../../styles/StartStyles";
import * as S from "./start.styles"
import { startNarration } from "../../../Script";

export default function StartUI(props) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1)
  }

  return (
    
    <>
      <S.Wrapper>
        <S.Bg>
          <S.NarrationBox>
            {startNarration[step].str}
          </S.NarrationBox>
          <S.Bottom>
            <S.StartBtn onClick={step === startNarration.length - 1 ? props.onClickMove : nextStep}>계속</S.StartBtn>
          </S.Bottom>
        </S.Bg>
      </S.Wrapper>
    </>
  );
}
