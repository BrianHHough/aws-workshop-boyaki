import React, { useState, useEffect } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo } from '../../graphql/queries';
import { updateUserInfo } from '../../graphql/mutations';

import Sidebar from "../../containers/Sidebar"

Amplify.configure("../../aws-exports.js");

const initialUserDataTemplate = { 
  name: "", 
  handle: "", 
  pictureURL: "",
  bio: "",
}

const SettingsPage = () => {
    const { user } = useAuthenticator();
    const [username, setUsername] = useState();
    const [picture, setPicture ] = useState();
    const [pictureData, setPictureData ] = useState();
    const [pictureDataStatus, setPictureDataStatus] = useState();
    const [uploadedS3FilePath, setUploadedS3FilePath] = useState();

    const [userDataTemplate, setUserDataTemplate] = useState(initialUserDataTemplate);
    const [userInfoFetched, setUserInfoFetched] = useState();



    function handleChangeUsername(event) {
      const {value} = event.target;
      setUsername(value.toLowerCase());
    }

    function handleChangeUploadPicture(e) {
      const upload = (e) => setPictureData(e.target.files[0]);
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

    return (
        <>
        <Sidebar/>
        <ThemeProvider theme={theme}>
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                  <h1>Premium</h1>
                  <h3>Your status is:</h3>
                  
                </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default SettingsPage