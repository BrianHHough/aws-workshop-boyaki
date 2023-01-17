import React, { useState, useEffect, useRef } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo, listChatsAvailableByUser, listUserInfos } from '../../graphql/queries';
import { updateUserInfo } from '../../graphql/mutations';

import Sidebar from "../../containers/Sidebar"
import { AddImageCon, ChatSelectCon, ChatSelectPic, ChatTextRightCon, ChatTextRightNameInfo, ChatTextRightNameSubtitle, ChatTextRightPreviewInfo, ImageIconStyled, M1, M1Title, M2, MessageCon, MessageInfoCon, MessageInfoConRightNameInfo, MessageInput, MessageInputCon, MessageScrollCon, MessageTextCon, MessageTimestamp, OuterCon, SendButtonCon, SendIconStyled } from './MessageElements';
import { Avatar } from '@mui/material';

// TestData
import TestingChat from "./Chat"
import messages1 from "./MessageTestData1.json";
import messages2 from "./MessageTestData2.json";

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


    const [chatsAvailableForUser, setChatsAvailableForUser] = useState([]);
    

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
    
      async function fetchChatsAvailableForUser() {
        const { username } = await Auth.currentAuthenticatedUser();
        try {
          const chatsAvailableFetched = await API.graphql({
            query: listChatsAvailableByUser,
            variables: { owner: username },
          });
          console.log("chatsAvailableFetched", chatsAvailableFetched.data.listChatsAvailableByUser.items);
          setChatsAvailableForUser(chatsAvailableFetched.data.listChatsAvailableByUser.items)
        } catch (error) {console.log('error getting available chats:', error)}
      }
  
      useEffect(() => {
        fetchChatsAvailableForUser();
      }, [])
    

    return (
      <>
        <Sidebar />
        <ThemeProvider theme={theme}>
          <OuterCon>
            <M1>
              <M1Title>My DMs (Testing)</M1Title>

              {chatsAvailableForUser.length > 0 && chatsAvailableForUser.map((chat, index) => (
                <ChatSelectCon 
                  key={chat.id}
                  onClick={handleSelectedChat}>
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
              ))}
              
            </M1>

            <M2>
                <MessageInfoCon>
                    <ChatSelectPic>
                    <Avatar {...stringAvatar("Jimmy")} />
                    </ChatSelectPic>
                    <ChatTextRightCon>
                    <MessageInfoConRightNameInfo>
                        Jimmy {" "}
                    </MessageInfoConRightNameInfo>
                    </ChatTextRightCon>
                </MessageInfoCon>

                <MessageScrollCon>
                    <TestingChat
                        messages={messages2} 
                    />
                    
                

                </MessageScrollCon>


                <MessageInputCon>
                    <AddImageCon>
                        <ImageIconStyled/>
                    </AddImageCon>
                    <MessageInput 
                        placeholder="Type a message..." 
                    />
                    
                    <SendButtonCon>
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