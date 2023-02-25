import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  text-align: center;
`;

export const Bg = styled.div`
  padding-top: 204px;
  height: 100%;
  background-color: #f5f5f5;
  //background: linear-gradient(#ffff05, rgba(245, 249, 71, 0) 55%);
`;

export const NarrationBox = styled.div`
  margin: 0 auto 37px;
  padding: 22px 33px;
  width: 327px;
  height: 323px;
  background: white;
  //border: 2px solid #000;
  border: 1px solid #d9d9d9;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  white-space: pre-wrap;
  line-height: 50px;
`;

export const Bottom = styled.div`
  // padding-top: 92px;
  // height: 20%;
  //background: linear-gradient(#fff, #ffff05);
`;

export const StartBtn = styled.div`
  margin-left: 90px;
  margin-right: 90px;
  padding: 10px;
  background-color: #6180ed;
  color: #f5f5f5;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.7s;
  @media (hover: hover) {
    :hover {
      background-color: #01275c;
    }
  }
`;
