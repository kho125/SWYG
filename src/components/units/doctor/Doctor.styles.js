import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
`;

export const AvatarWrapper = styled.div`
  padding: 34px 27px;
  display: flex;
  align-items: center;
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
  height: 90%;
  background: linear-gradient(#ffff05, rgba(245, 249, 71, 0) 55%);
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 10%;
  background-color: #ffff05;
  border-top: 2px solid #000; ;
`;

export const FirstBtn = styled.button`
  margin: 0 12px;
  width: 80px;
  height: 35px;
  background: linear-gradient(#fff, #6df92c);
  font-weight: 700;
  color: #000;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;

export const ChatWrapperLeft = styled.div``;

export const ChatWrapper = styled.div`
  padding: 34px 10px;
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
  height: 104px;
  background: #fff;
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 30px 30px 30px;
`;

export const ChatWrapperRight = styled.div`
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
  height: 52px;
  background: #fff;
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0 30px 30px;
`;

export const ChatBtn = styled.button`
  display: block;
  padding-left: 18px;
  margin: 5px 0;
  width: 226px;
  height: 63px;
  color: #000;
  background: linear-gradient(#fff, #6df92c);
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: start;
`;
