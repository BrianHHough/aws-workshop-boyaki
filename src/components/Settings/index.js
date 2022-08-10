import React, { useState, useEffect } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo, listUserInfos } from '../../graphql/queries';
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
    const [username, setUsername] = useState('');
    const [picture, setPicture ] = useState();
    const [pictureData, setPictureData ] = useState();
    const [pictureDataStatus, setPictureDataStatus] = useState();
    const [uploadedS3FilePath, setUploadedS3FilePath] = useState();

    const [userDataTemplate, setUserDataTemplate] = useState(initialUserDataTemplate);
    const [userInfoFetched, setUserInfoFetched] = useState();
    const [handleCheckTaken, setHandleCheckTaken] = useState(true);

    // DYNAMODB - FETCH USER DATA INITIALLY (OR SET UP USER)
    useEffect(() => {
      fetchUser()
      // Fetch UserData
      async function fetchUser() {
        const { username } = await Auth.currentAuthenticatedUser();
          try {
            const userData = await API.graphql({
              query: getUserInfo,
              variables: { name: username },
          });
          setUserInfoFetched(userData.data.getUserInfo);
        } catch (error) { console.log('error fetching user data')}


        // If nothing there yet - create user
        if (userInfoFetched === undefined) {
          userDataTemplate.name = username;
          // userDataTemplate.handle = user.attributes.preferred_username;
          userDataTemplate.bio = "I'm new here. Say hi!"
          userDataTemplate.pictureURL = "https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/pfps/global/orange-red-gradient.png";
          
          try {
            const newUser = await API.graphql({
              query: createUserInfo,
              variables: { input: userDataTemplate },
              // authMode: "AMAZON_COGNITO_USER_POOLS"
            });
            setUserInfoFetched(newUser.data.getUserInfo);
          } catch (error) { console.log(error, 'user already set up')}
        }

        // if (userInfoFetched !== undefined) {
        //   userDataTemplate.name = username;
        //   userDataTemplate.handle = user.attributes.preferred_username;
        //   userDataTemplate.pictureURL = user.attributes.picture;
        //   try {
        //     const newUser = await API.graphql({
        //       query: updateUserInfo,
        //       variables: { input: userDataTemplate },
        //       // authMode: "AMAZON_COGNITO_USER_POOLS"
        //     });
        //     setUserInfoFetched(newUser.data.getUserInfo);
        //   } catch (error) { console.log('error setting up user')}
        // }
      }
    // }, [userInfoFetched]);
  }, []);




    // FETCH USER INFO
    // console.log(userInfoFetched);
    // console.log('handle', userInfoFetched)
    // console.log(userDataTemplate);






    // console.log(userInfoFetched)

  //   async function updateCurrentPost() {
  //     if (!title || !content) return; 
  //     const postUpdated = {
  //         id, 
  //         content,
  //         title
  //     };

  //     if (coverImage && localImage) {
  //         const fileName = `${coverImage.name}_${uuid()}`;
  //         postUpdated.coverImage = fileName;
  //         await Storage.put(fileName, coverImage);
  //     };

  //     await API.graphql({
  //         query: updatePost,
  //         variables: { input: postUpdated },
  //         authMode: "AMAZON_COGNITO_USER_POOLS" // only they can update 
  //     });
  //     router.push(`/my-posts`);
      
  // }


    // COGNITO
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
      const S3FilePath = result.key;
      const S3FilePrefix = "https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/"
      // https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/pfps/username1/Blue1.jpeg
      const updatedPicturePathFull = `${S3FilePrefix}${S3FilePath}`;

      // Cognito Part
      try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await Auth.updateUserAttributes(user, {
          "picture": updatedPicturePathFull
        })
        console.log(response, "Cognito updated")
        // event.preventDefault();
      ;
      } catch (error) {console.log('error saving picture to cognito')}

      // DynamoDB Part
      try {
        const photoUploadedToCognito = { 
          name: user.username, 
          pictureURL: updatedPicturePathFull,
        }
        console.log(photoUploadedToCognito)
        const response = await API.graphql({
          query: updateUserInfo,
          variables: { input: photoUploadedToCognito },
          // authMode: "AMAZON_COGNITO_USER_POOLS"
        });
        console.log(response, "DynamoDB updated")
        setUserInfoFetched(response.data.updateUserInfo);
        
        // setUserInfoFetched(updateUserPicture.data.getUserInfo);
      } catch (error) { console.log(error, 'error adding picture to DDB')}
    }

    // COGNITO
    // async function handleSubmitUploadPicture(event, uploadedS3FilePath) {
    //   // pfps/username1/Blue1.jpeg
    //   const S3FilePath = uploadedS3FilePath;
    //   const S3FilePrefix = "https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/"
    //   // https://boyaki6ed0ded3313b4d9ea6b8ba36880e300304540-dev.s3.amazonaws.com/public/pfps/username1/Blue1.jpeg
    //   const updatedPicturePathFull = `${S3FilePrefix} ${S3FilePath}`;
    //   try {
    //     const user = await Auth.currentAuthenticatedUser();
    //     const response = await Auth.updateUserAttributes(user, {
    //       "picture": updatedPicturePathFull
    //     })
    //     console.log(response)
    //     // event.preventDefault();
    //   ;
    //   } catch (error) { 
    //     console.log('error saving picture') 
    //   }
    // }

    // Remove special characters from username (enforce only alphanumeric)
    function handleChangeUsername(event) {
      const {value} = event.target;
      setUsername(value
        .replace(/\s/g, '')
        .replace(/[^a-z0-9]/gi,'')
        // .replace(/(^\&)|,(^\@)|,/g, '')
        .split('.').join('')
        .toLowerCase()
      );
    }

    console.log(username);

    const checkIfHandleTaken = async (type, username) => {
      console.log(username);
      try {
        const handleData = await API.graphql(
          graphqlOperation(listUserInfos, {
            // handle: username
            filter: {
              handle: { eq: 'username2'}
            }
        }))
        const handleCheckData = handleData.data.listUserInfos.items;
        console.log(handleCheckData);

        // function searchReturnedData(username, handleCheckData) {
        //   for (var i=0; i <  handleCheckData.length; i++) {
        //     if (handleCheckData[i].handle === username) {
        //       return handleCheckData[i];
        //     }
        //   }
        // }
        let handleCheckDataHandle = handleCheckData.find(o => o.handle == username);
        console.log(handleCheckData)

        if (handleCheckData) {
          setHandleCheckTaken(true)
        } else {
          setHandleCheckTaken(false)
        }
      } catch (error) {console.log('error fetching handles')}
    }

    // useEffect(() => (
    //   checkIfHandleTaken()
    // ), [handleCheckTaken] )

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
                      <h2>Handle</h2>
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
                    <button style={{background: "lightblue"}} type="submit">Save Changes</button>
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
                  <br></br>
                  <button style={{background: "yellow"}} onClick={checkIfHandleTaken}>Check if handle taken</button>
                    <p>Handle is: {handleCheckTaken === true ? "taken" : "available"}</p>




                  {/* UPLOADING PROFILE PICTURE */}


                  {user.attributes.picture ?
                    <>
                    <div style={theme.usernamecon}>
                      <h2>Profile Picture</h2>
                      <p>This is your profile picture:</p>
                        {/* {console.log(user.attributes.picture)} */}
                        <img src={userInfoFetched?.pictureURL} alt="pfp" width="80px" height="80px"/>
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
                  <h3>Upload a file...</h3>
                  }


                  {pictureDataStatus ? 'File uploaded successfully' : ""}

                </div>
                <hr></hr>
                <div>

                  {userInfoFetched !== undefined || null || "" ? 
                    ""
                    :
                    <h4>You don't have a saved profile yet</h4>
                  }

                  {/* Check if you have the profile details */}
                  {userInfoFetched?.handle && userInfoFetched?.pictureURL ? 
                    <h4>Your profile has the stuff </h4>
                    : 
                    <p>You need a couple things...</p>
                  }
                </div>
            
                </div>
            </ThemeProvider>
        </>
    )
}

export default SettingsPage