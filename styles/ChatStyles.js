import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  background-color:#f5f5f5
  //background: linear-gradient(#ffff05, rgba(245, 249, 71, 0) 55%);
`;

export const AvatarWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  height: 80px;
  width:100%;
  max-width: 500px;
  overflow: hidden;
  background-color: white;
  border-bottom: 1px solid #d9d9d9;
`;

export const AvatarImage = styled.img`
  margin-right: 12px;
`;

export const AvatarName = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #000;
`;

export const Bg = styled.div`
  overflow-y: scroll;
  position: absolute;
  top: 80px;
  bottom:80px;
  left:0;
  width:100%;
  max-width: 500px;
  overflow-y:scroll;
  padding: 10px;
`;

export const Bottom = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background-color: #d9d9d9;
  width:100%;
  max-width: 500px;
  height: 10%;
  height: 80px;
  position: absolute;
  left:0;
  bottom:0;
`;

export const FirstBtn = styled.div`
  margin: 0 12px;
  // width: 80px;
  // height: 35px;
  padding: 10px 30px;
  background-color: white;
  font-weight: 700;
  color: #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  cursor: pointer;
`;

export const ChatWrapperLeft = styled.div``;

export const ChatWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

export const SmallAvatarImage = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const Flex = styled.div``;

export const SmallAvatarName = styled.div`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  color: #000;
`;

export const ChatLeft = styled.div`
  padding: 12px 25px 12px 12px;
  width: 226px;
  max-height: 124px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 30px 30px 30px;
  white-space:pre-wrap;

  animation: chatLeft .5s ease-in;
`;

export const ChatWrapperRight = styled.div`
  margin-top: 62px;
  margin-right: 12px;
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
`;

export const ChatRight = styled.div`
  margin-bottom: 5px;
  padding: 12px 25px 12px 18px;
  width: 226px;
  max-height: 104px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0 30px 30px;
  white-space:pre-wrap;

  animation: chatRight .5s ease-in;
`;

export const ChatBtn = styled.div`
  display: block;
  padding-left: 18px;
  margin: 5px 0;
  width: 226px;
  padding: 10px 10px 10px 20px;
  color: #000;
  background-color: #6180ed;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: start;
  white-space: pre-wrap;
  cursor: pointer;
  color: white;

  animation: chatRight .5s ease-in;

  @media (hover:hover) {
    :hover {
        background-color:#01275c;
    }
  }
`;