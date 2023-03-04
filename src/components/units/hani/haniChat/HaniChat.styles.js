import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 500px;
  height: 100vh;
  background: linear-gradient(#ffff05, rgba(245, 249, 71, 0) 55%);
`;

export const AvatarWrapper = styled.div`
  padding: 34px 27px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
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
  bottom: 80px;
  left: 0;
  width: 100%;
  max-width: 500px;
  /* overflow-y: scroll; */
  padding: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  background-color: #ffff05;
  border-top: 2px solid #000;
  width: 100%;
  max-width: 500px;
  height: 10%;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
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
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 30px 30px 30px;
  white-space: pre-wrap;
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
  border: 2px solid #000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 0 30px 30px;
  white-space: pre-wrap;
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
  white-space: pre-wrap;
`;
