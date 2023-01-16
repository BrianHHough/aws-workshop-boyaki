import React, { useState, useEffect, useRef } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo, listUserInfos } from '../../graphql/queries';
import { updateUserInfo } from '../../graphql/mutations';

import Sidebar from "../../containers/Sidebar"
import { AddImageCon, ChatSelectCon, ChatSelectPic, ChatTextRightCon, ChatTextRightNameInfo, ChatTextRightNameSubtitle, ChatTextRightPreviewInfo, ImageIconStyled, M1, M1Title, M2, MessageCon, MessageInfoCon, MessageInfoConRightNameInfo, MessageInput, MessageInputCon, MessageScrollCon, MessageTextCon, MessageTimestamp, OuterCon, SendButtonCon, SendIconStyled } from './MessageElements';
import { Avatar } from '@mui/material';

// TestData
import messages1 from "./MessageTestData1.json";
import moment from 'moment';

Amplify.configure("../../aws-exports.js");

const initialUserDataTemplate = { 
  name: "", 
  handle: "", 
  pictureURL: "",
  bio: "",
}

const theme = createTheme({
    header: {
      marginLeft: "30px",
      padding: "20px 0px 0px 0px",
    },
    postlist: {
        width: "calc(100vw - 340px)",
        height: "100vh",
        position: "relative",
        float: "top",
        left: "340px",
        marginTop: "-25px",
    },
    box: {
        width: "80%",
        border: "1px solid grey",
        borderRadius: "20px",
        marginBottom: "10px",
        display: "flex",
        padding: "10px",
        marginLeft: "30px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "red"
        }
    },
    avatar: {
        marginTop: "5px",
    },
    text: {
        marginLeft: "10px",
        fontWeight: "600",
        cursor: "text",
    },
    textOwnerAndTime: {
      marginLeft: "10px",
      fontWeight: "400",
      cursor: "text",
    },
    postBody: {
      display: "block"
    },
    ownerAndTime: {
      display: "flex"
    },
    inputField: {
      width: "300px",
      height: "60px",
      fontSize: "20pt"
    },
    form: {

    },
    usernamecon: {

    }
});

const MessagesPage = () => {
    const { user } = useAuthenticator();
    const [selectedChat, setSelectedChat] = useState(null);
    

    // AVATAR 
    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
      function stringAvatar(name) {
        return {
          sx: {
            bgcolor: stringToColor(name),
          },
          children: `${name.split(' ')[0][0]}`,
        };
      }

    // Selected Chat
    const handleSelectedChat = (e) => {
      console.log("Selected Chat");
      setSelectedChat(e.target.key);
    }

    const [myHandle, setMyHandle] = useState("brian");
    const [currentAuthor, setCurrentAuthor] = useState("brian");
    const prevHandle = useRef(null)
    let sameHandleCount = 1;
    const handleRender = (author) => {
        if (currentAuthor === null || currentAuthor !== author) {
          setCurrentAuthor(author);
          return "message-left";
        } else {
          return "message-right";
        }
      }
      console.log(myHandle);
    
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages(messages1);
    }, [])

    const newMessageInputs = {
            id: messages.length,
            handle: "brian",
            text: "",
            timestamp: new Date().toISOString()
        }

    const [newMessage, setNewMessage] = useState(newMessageInputs);
    const [newMessageToSend, setNewMessageToSend] = useState("");
    const sendNewMessage = () => {
        // const newMessage = {
        //     "id": messages.length,
        //     "handle": "brian",
        //     "text": "This is a new message",
        //     "timestamp": new Date().toISOString()
        // }
        setMessages(messages.concat(newMessage));
    }

    const messagesContainerRef = useRef(null);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    const handleNewMessage = (e) => {
        setNewMessage({...newMessage, [e.target.name]: e.target.value})
    }
    

    return (
      <>
        <Sidebar />
        <ThemeProvider theme={theme}>
          <OuterCon>
            <M1>
              <M1Title>My DMs</M1Title>

              <ChatSelectCon onClick={handleSelectedChat}>
                <ChatSelectPic>
                  <Avatar {...stringAvatar("Bobby")} />
                </ChatSelectPic>
                <ChatTextRightCon>
                  <ChatTextRightNameInfo>
                    Bobby{" "}
                    <ChatTextRightNameSubtitle>
                      @bob • 2h
                    </ChatTextRightNameSubtitle>
                  </ChatTextRightNameInfo>

                  <ChatTextRightPreviewInfo>
                    This is our first conversation and it keeps going but we
                    need to cut it off at some point
                  </ChatTextRightPreviewInfo>
                </ChatTextRightCon>
              </ChatSelectCon>

              <ChatSelectCon onClick={handleSelectedChat}>
                <ChatSelectPic>
                  <Avatar {...stringAvatar("Jimmy")} />
                </ChatSelectPic>
                <ChatTextRightCon>
                  <ChatTextRightNameInfo>
                    Jimmy{" "}
                    <ChatTextRightNameSubtitle>
                      @bob • 2h
                    </ChatTextRightNameSubtitle>
                  </ChatTextRightNameInfo>

                  <ChatTextRightPreviewInfo>
                    We need to start another chat with this platform so we can work on the 
                  </ChatTextRightPreviewInfo>
                </ChatTextRightCon>
              </ChatSelectCon>
            </M1>

            <M2>
                <MessageInfoCon>
                    <ChatSelectPic>
                    <Avatar {...stringAvatar("Kent Dodds")} />
                    </ChatSelectPic>
                    <ChatTextRightCon>
                    <MessageInfoConRightNameInfo>
                        Bobby {" "}
                    </MessageInfoConRightNameInfo>
                    </ChatTextRightCon>
                </MessageInfoCon>

                <MessageScrollCon
                    ref={messagesEndRef}
                >
                    
                {messages.length > 0 && messages.map((message, index) => {
                let timestamp = null;
                // console.log(message.id + 1, prevHandle.current);
                console.log(messages1.length - 1);
                // if (message.id === index[0]) {
                //     timestamp = <MessageTimestamp>{message.timestamp}</MessageTimestamp>;
                // }
                // else if (message.id === messages.length - 1) {
                //     timestamp = <MessageTimestamp>{message.timestamp}</MessageTimestamp>;
                // }
                // if (prevHandle.current === null || prevHandle.current !== message.handle) {
                //     prevHandle.current = message.handle;
                //     sameHandleCount = 0;
                //     timestamp = <MessageTimestamp>{message.timestamp}</MessageTimestamp>;
                // } else {
                //     sameHandleCount++;
                //     if (sameHandleCount > 2) {
                //         timestamp = <MessageTimestamp>{message.timestamp}</MessageTimestamp>;
                //     }
                // }
                return (
                    <MessageCon
                        yourMessage={message.handle === myHandle ? true : false}
                        className={handleRender(myHandle)}
                        key={message.index}
                    >
                    <MessageTextCon>
                        {message.text}
                    </MessageTextCon> 
                    {/* {timestamp} */}
                    <MessageTimestamp>{moment(message.timestamp).format("MMM DD, YYYY hh:mm a")}</MessageTimestamp>
                    </MessageCon>
                );
                })}

                {/* <div ref={messagesEndRef}></div> */}

                </MessageScrollCon>


                <MessageInputCon>
                    <AddImageCon>
                        <ImageIconStyled/>
                    </AddImageCon>
                    <MessageInput 
                        key="text"
                        name="text"
                        value={newMessage.text}
                        onChange={handleNewMessage}
                        placeholder="Type a message..." 
                    />
                    
                    <SendButtonCon
                        onClick={sendNewMessage}
                    >
                        <SendIconStyled />
                    </SendButtonCon>
                </MessageInputCon>
            </M2>
          </OuterCon>
        </ThemeProvider>
      </>
    );
}

export default MessagesPage