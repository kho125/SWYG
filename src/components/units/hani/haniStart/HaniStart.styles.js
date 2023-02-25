import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  text-align: center;
`;

export const Bg = styled.div`
  padding-top: 204px;
  height: 80%;
  background: linear-gradient(#ffff05, rgba(245, 249, 71, 0) 55%);
`;

export const NarrationBox = styled.div`
  margin: 0 auto 37px;
  padding: 22px 33px;
  width: 327px;
  height: 323px;
  background: #fff;
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  white-space: pre-wrap;
  /* line-height: 50px; */
`;

export const Bottom = styled.div`
  padding-top: 92px;
  height: 20%;
  background: linear-gradient(#fff, #ffff05);
`;

export const StartBtn = styled.button`
  width: 327px;
  height: 73px;
  background: linear-gradient(#fff, #6df92c);
  color: #000;
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
`;
