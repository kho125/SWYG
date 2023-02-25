import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  text-align: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Bg = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background: linear-gradient(#478ef9 0, rgba(71, 142, 249, 0) 55%);
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img``;

export const Title = styled.div`
  margin-left: 210px;
`;

export const Bottom = styled.div`

  padding-top: 50px;
  height: 30%;
  background-color: #d9d9d9;
  //background: linear-gradient(#fff, #478ef9);
`;

export const Writer = styled.div`
  height: 42px;
`;

export const StartBtn = styled.div`
margin: 0 20%;
color: #000;
padding: 10px;
background-color: #6180ed;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
white-space: pre-wrap;
cursor: pointer;
color: white;

@media (hover:hover) {
  :hover {
      background-color:#01275c;
  }
}
`;
