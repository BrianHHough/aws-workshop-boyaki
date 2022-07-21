import React, { useState, useEffect, useReducer } from 'react'

import Moment from 'moment';
import moment from 'moment';

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { green, orange } from '@mui/material/colors';

import {Auth, API, graphqlOperation } from 'aws-amplify';

import { useNavigate } from 'react-router-dom';

const PostBox = ({ text, username, createdAt, timestamp }) => {
    const navigate = useNavigate();

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
            display: "flex",
        },
        userHandle: {
            marginRight: "5px",
            cursor: "pointer",
        },
        postBody: {
            display: "block"
        },
        ownerAndTime: {
            display: "flex"
        }
    });
    
    const UsernameChar = username.slice(0,1);
    return (
      <>
        <ThemeProvider theme={theme}>
          <div style={theme.box}>

            <Avatar style={theme.avatar}>
                {UsernameChar.toUpperCase()}
            </Avatar>

            <div style={theme.postBody}>

              <div style={theme.ownerAndTime}>
                
                <p style={theme.textOwnerAndTime}>
                    <div 
                        id="Go to User's Page"
                        style={theme.userHandle}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/' + username);
                            })}}>
                        {username}
                    </div>
                    {" • "}
                    {moment(createdAt).fromNow()}
                </p>
              </div>

              <p style={theme.text}>
                  {text}
              </p>

            </div>

          </div>
        </ThemeProvider>
      </>
    );
  };

export default PostBox