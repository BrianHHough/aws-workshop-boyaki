import styled from "styled-components";

// Material UI Icons
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';

export const OuterCon = styled.div`
    display: flex;
    margin-left: 340px;
    width: calc(98.7vw - 340px);
    position: absolute;
`;

export const M1 = styled.div`
    width: 50%;
    height: 100vh;
    /* min-width: 560px; */
    background: var(--c1);
    position: relative;
`;

export const M1Title = styled.div`
  color: var(--c4);
  font-weight: 800;
  font-size: 25pt;
  margin-left: 20px;
`;

export const ChatSelectCon = styled.div`
  background: var(--c2);
  height: 60px;
  width: calc(100% - 40px);
  margin-left: 20px;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease-in;
  margin-top: 20px;

  &:hover {
    background: var(--c3);
    transition: all 0.3s ease-in;
  }
`;

export const ChatSelectPic = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  margin-right: 10px;
`;

export const ChatTextRightCon = styled.div`
  position: relative;
  width: calc(100% - 40px);
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  margin-right: 10px;
  display: block;
  
`;

export const ChatTextRightNameInfo = styled.div`
    font-weight: 800;
    color: var(--c4);
    position: relative;
`;

export const MessageInfoConRightNameInfo = styled.div`
    font-weight: 800;
    color: var(--c4);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;

export const ChatTextRightNameSubtitle = styled.span`
    font-weight: 400;
    color: var(--c5);
    font-size: 13px;
`;



export const ChatTextRightPreviewInfo = styled.div`
    color: var(--c4);
    position: relative;
    font-size: 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% - 47px);
`;

export const M2 = styled.div`
  /* width: 50%; */
  width: 560px;
  height: 100vh;
  /* min-width: 560px; */
  background: var(--c2);
  position: relative;
`;

export const MessageInfoCon = styled.div`
    height: 50px;
    width: 100%;
    top: 0px;
    position: absolute;
    display: flex;
    background: rgb(24, 25, 42, 0.6); // rgba( 0, 0, 0, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    z-index: 99999;
`;

export const MessageScrollCon = styled.div`
    // height: calc(100% - 120px);
    /* margin-top: 50px; */
    height: calc(100% - 80px);
    padding: 50px 0px 30px 0px;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
    display: none;
    /* width: 5px; */
    }

    &::-webkit-scrollbar-track {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        display: none;
    }

    ::-webkit-scrollbar-thumb:hover {
        display: none;
    }
`;

export const MessageCon = styled.div`
    width: 300px;
    min-height: 50px;
    position: relative;
    background: var(--c1);
    color: var(--c4);
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: ${props => props.yourMessage === true ? 
        "25px 25px 0px 25px" : "25px 25px 25px 0px"};
    float: ${props => props.yourMessage === true ?
        "right" : "left"};
    .message-left {
        border-radius: 20px 0 0 20px;
        float: left;
    }
        .message-right {
        border-radius: 0 20px 20px 0;
        float: right;
    }
`;

export const MessageTextCon = styled.div`
    color: var(--c4);
    padding: 15px 20px 15px 20px;
    min-height: 50px;
`;

export const MessageTimestamp = styled.div`
    position: absolute;
    color: var(--c6);
    font-size: 13px;
    margin-top: 5px;
`;

export const MessageInputCon = styled.div`
  position: absolute;
  width: calc(100% - 40px);
  margin-left: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  height: 60px;
  bottom: 0;
  display: flex;
  background: var(--c1);
`;

export const MessageInput = styled.input`
    height: 100%;
    width: calc(100% - 110px);
    background: transparent;
    border: none;
    color: var(--c4);
    margin-left: 50px;
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        color: var(--c5);
    }
`; 

export const AddImageCon = styled.div`
    height: 50px;
    width: 50px;
    transition: all 0.3s ease-in;
    border-radius: 10px;
    cursor: pointer;
    left: 0px;
    margin-top: 5px;
    position: absolute;
    /* top: 50%;
    transform: translateY(-50%); */
    &:hover {
        background: var(--c5);
        transition: all 0.3s ease-in;
    }
`;

export const ImageIconStyled = styled(ImageIcon)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`;

export const SendButtonCon = styled.div`
    height: 50px;
    width: 50px;
    transition: all 0.3s ease-in;
    border-radius: 360px;
    cursor: pointer;
    right: 0px;
    margin-top: 5px;
    position: absolute;
    /* top: 50%;
    transform: translateY(-50%); */
    &:hover {
        background: var(--c5);
        transition: all 0.3s ease-in;
    }
`;

export const SendIconStyled = styled(SendIcon)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: relative;
`;

export const TypingDotsCon = styled.div`
    height: 20px;
    width: 100%;
`;