import React, { useState } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";

import Sidebar from "../../containers/Sidebar"

Amplify.configure("../../aws-exports.js");

const SettingsPage = () => {
    const { user } = useAuthenticator();
    console.log(user);
    const [username, setUsername] = useState();
    const [picture, setPicture ] = useState();
    const [pictureData, setPictureData ] = useState();
    const [pictureDataStatus, setPictureDataStatus] = useState();
    const [uploadedS3FilePath, setUploadedS3FilePath] = useState();

    async function handleSubmitUsername(event) {
      event.preventDefault();
      try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await Auth.updateUserAttributes(user, {
          "preferred_username": username
        })
        console.log(response)
      ;
      } catch (error) { 
        console.log('error saving username') 
      }
    }

    const uploadFile = async () => {
      const result = await Storage.put(`pfps/${user.username}/${pictureData.name.replace(/\s/g, '')}`, pictureData, {
        // contentType: pictureData.type,
        contentType: ".jpg, .jpeg, .png",
        progressCallback(progress) {
          console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
        },
      });
      setPictureDataStatus(true);
      console.log(result.key);
      setUploadedS3FilePath(result.key);
      // handleSubmitUploadPicture();
      const S3FilePath = uploadedS3FilePath;
      const S3FilePrefix = "https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/"
      // https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/pfps/username1/Blue1.jpeg
      const updatedPicturePathFull = `${S3FilePrefix}${S3FilePath}`;
      try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await Auth.updateUserAttributes(user, {
          "picture": updatedPicturePathFull
        })
        console.log(response)
        // event.preventDefault();
      ;
      } catch (error) { 
        console.log('error saving picture') 
      }
    }

    async function handleSubmitUploadPicture(event, uploadedS3FilePath) {
      // pfps/username1/Blue1.jpeg
      const S3FilePath = uploadedS3FilePath;
      const S3FilePrefix = "https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/"
      // https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/pfps/username1/Blue1.jpeg
      const updatedPicturePathFull = `${S3FilePrefix} ${S3FilePath}`;
      try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await Auth.updateUserAttributes(user, {
          "picture": updatedPicturePathFull
        })
        console.log(response)
        // event.preventDefault();
      ;
      } catch (error) { 
        console.log('error saving picture') 
      }
    }

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
                  <h1>Settings</h1>



                {/* EDIT USERNAME */}

                  <form 
                    style={theme.form}
                    onSubmit={handleSubmitUsername}
                  >
                  {user.attributes.preferred_username ?
                    <>
                    <div style={theme.usernamecon}>
                      <h2>Username</h2>
                      <p>This is your preferred username:</p>
                      <input
                        type="text"
                        id="username" 
                        name="username" 
                        onChange={handleChangeUsername}
                        value={username}
                        placeholder={user.attributes.preferred_username}
                        style={theme.inputField}
                      >
                      </input>
                      </div>
                    <button type="submit">Save Changes</button>
                    </>
                    :
                    <>
                    <div style={theme.usernamecon}>
                      <h3>You Need a Username!</h3>
                      <p>Add in a username here:</p>
                      <input
                        type="text"
                        id="username" 
                        name="username" 
                        onChange={handleChangeUsername}
                        value={username}
                        placeholder={"elonmusk"}
                        style={theme.inputField}
                      >
                      </input>
                      </div>
                    <button type="submit">Save Changes</button>
                    </>
                  }
                  </form>




                  {/* UPLOADING PROFILE PICTURE */}


                  {user.attributes.picture ?
                    <>
                    <div style={theme.usernamecon}>
                      <h2>Profile Picture</h2>
                      <p>This is your profile picture:</p>
                      <div>
                        <b>Your image goes here:</b>
                      </div>
                      <input
                        type="file"
                        // id="picture" 
                        // name="picture" 
                        accept=".jpg, .jpeg, .png"
                        // onChange={handleChange}
                        onChange={(e) => setPictureData(e.target.files[0])}
                        // value={pictureData}
                        style={theme.inputField}
                      >
                      </input>
                      </div>
                    <button type="submit" onClick={uploadFile}>Save Changes</button>
                    
                    </>
                    :
                    <>
                    <div style={theme.usernamecon}>
                      <h3>You Need a Profile Picture!</h3>
                      <p>Upload an image here:</p>
                      <input
                        type="file"
                        // id="picture" 
                        // name="picture" 
                        accept=".jpg, .jpeg, .png"
                        // onChange={handleChange}
                        onChange={(e) => setPictureData(e.target.files[0])}
                        // value={pictureData}
                        style={theme.inputField}
                      >
                      </input>
                      </div>
                    <button type="submit" onClick={uploadFile}>Save Changes</button>
                    </>
                  }

                  {pictureData ? 
                  <h3>{pictureData.name}</h3>
                  : 
                  <h3>No file...</h3>
                  }

                  {pictureDataStatus ? 'File uploaded successfully' : ""}

                </div>
            
                </div>
            </ThemeProvider>
        </>
    )
}

export default SettingsPage