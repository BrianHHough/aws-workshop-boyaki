import React, { useState } from 'react'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import {Auth, API, graphqlOperation } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";

import Sidebar from "../../containers/Sidebar"


const SettingsPage = () => {
    const { user } = useAuthenticator();
    console.log(user);
    const [ username, setUsername] = useState();

    async function handleSubmit(event, user) {
      event.preventDefault();
      try {
        const user = await Auth.currentAuthenticatedUser();
        const response = await Auth.updateUserAttributes(user, {
          "preferred_username": username
        })
        console.log(response)
      ;
      } catch (error) {
        console.log('error updating profile')
      }
    }

    function handleChange(event) {
      const {value} = event.target;
      setUsername(value.toLowerCase());
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

                  <form 
                    style={theme.form}
                    onSubmit={handleSubmit}
                  >
                  {user.attributes.preferred_username ?
                    <>
                    <div style={theme.usernamecon}>
                      <h3>Username</h3>
                      <p>This is your preferred username:</p>
                      <input
                        type="text"
                        id="username" 
                        name="username" 
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                </div>
            
                </div>
            </ThemeProvider>
        </>
    )
}

export default SettingsPage