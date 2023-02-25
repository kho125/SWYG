import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Bg = styled.div`
height: 80%;
  backgroundColor:#f5f5f5;
  //background: linear-gradient(#478ef9 0, rgba(71, 142, 249, 0) 55%);
`;

export const Bottom = styled.div`
height: 20%;
margin-top: 30px;
padding: 5%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #e5e5e5;
width:100%;
max-width: 500px;
`;

export const Image = styled.img`
  margin: 20px 0;
  width: 180px;
  height: 270px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #000;
`;

export const Narration = styled.div`
margin: 10px 37px;
padding: 10px 33px;
background: white;
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

export const Btn = styled.div`
margin: 10px;
color: #000;
padding: 10px;
background-color: #6180ed;
box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 30px;
white-space: pre-wrap;
cursor: pointer;
color: white;
width: 50%;

@media (hover:hover) {
  :hover {
      background-color:#01275c;
  }
}
`;
