import React, { useState } from 'react'

import { createTheme, ThemeProvider } from "@mui/material/styles"

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


import PersonIcon from '@mui/icons-material/Person';

import PublicIcon from '@mui/icons-material/Public';

import {Auth, API, graphqlOperation } from 'aws-amplify';

import { createPost } from '../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { orange } from '@mui/material/colors';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { getPost } from '../graphql/queries';

const drawerWidth = 340;
const MAX_POST_CONTENT_LENGTH = 140;



const Sidebar = ({activeListItem, getPosts}) => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const { user } = useAuthenticator();
    const { signOut } = useAuthenticator()

    const [value, setValue] = useState('');
    const [isError, setIsError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const theme = createTheme({
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
          position: 'relative',
        //   background: "red",
        },
        drawerPaper: {
          width: drawerWidth,
          height: "100vh",
          position: 'relative',
          background: "#0f0c29",
          color: "white",
          fontColor: "white"
          
        },
        // toolbar: theme.mixins.toolbar,
        textField: {
          width: "100%",
          backgroundColor: "#302b63",
          color: "white"
        },
        input: {
            color: 'white'
        },
        list: {
          width: 300,
        },
        toolbar: {
            fill: "blue",
            // background: "red",
            backgroundColor: "blue",
        },
        button: {
            backgroundColor: "#8b81f5",
            color: "white"
        },
        icon: {
            fontColor: "white"
        },
        MenuItem: {
            backgroundColor: "#302b63",
            color: "white",
            marginBottom: "5px",
            
            "&$selected:hover": {
                backgroundColor: "#514aa1",
            }
        },
        
    });

    const ListItemStyled = styled(ListItem)`
        background-color: #302b63;
        color: white;
        margin-bottom: 5px;
        &:hover {
            background-color: #514aa1;
        }
    `;


    const handleChange = event => {
        setValue(event.target.value);
        if (event.target.value.length > MAX_POST_CONTENT_LENGTH) {
          setIsError(true);
          setHelperText(MAX_POST_CONTENT_LENGTH - event.target.value.length);
        } else {
          setIsError(false);
          setHelperText('');
        }
      };
    
      // Inject values into JSON for new post
      const onPost = async () => {
        const res = await API.graphql(graphqlOperation(createPost, { input: {
          type: 'Post',
          content: value,
          owner: user.username,
          timestamp: Math.floor(Date.now() / 1000),
        }})); 
        console.log(res)
        setValue('');
        getPosts();
      }

      // const signOut = () => {
      //   Auth.signOut()
      //     .then(data => console.log(data)) && navigate('/')
      //     .catch(err => console.log(err));
      // }

    return (
        <>
            <ThemeProvider theme={theme}>
            <Drawer
                variant="permanent"
                anchor="left"
                >
                <List style={theme.drawerPaper}>

                    <ListItemStyled
                        button
                        selected={activeListItem === 'global-timeline'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/feed');
                            })
                    }}
                    key='global-timeline'
                    >
                        <ListItemIcon>
                            <PublicIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="My Feed" />
                    </ListItemStyled>

                    <ListItemStyled
                        button
                        selected={activeListItem === 'profile'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/' + user.username);
                            })
                    }}
                        key='profile'
                    >
                        <ListItemIcon>
                            <PersonIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemStyled>

                    <ListItem key='post-input-field'>
                    <ListItemText primary={
                        <TextField
                            error={isError}
                            helperText={helperText}
                            id="post-input"
                            label="Type your post!"
                            multiline
                            maxRows="8"
                            variant="filled"
                            value={value}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"

                            style={theme.textField}
                            InputLabelProps={{
                                style: { color: "grey" },
                              }}
                              sx={{
                                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                                  color: "white",
                                },
                                // ".css-vrv6yj-MuiInputBase-root-MuiFilledInput-root:after": {
                                //     borderBottom: "2px solid red !important",
                                // },
                                ".css-vrv6yj-MuiInputBase-root-MuiFilledInput-root:after": {
                                    borderBottom: "2px solid #8b81f5 !important",
                                }
                              }}
                            InputProps={{
                                style: { color: "white" },
                                sx: {
                                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                    border: "2px solid white",
                                  },
                                  ".css-17bz3np-MuiInputBase-root-MuiFilledInput-root:after": {
                                    borderBottom: "2px solid red",
                                  },
                                  "&:hover": {
                                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                                      border: "2px solid white",
                                    },
                                  },
                                },
                              }}
                        />
                    } />
                    </ListItem>
                    <ListItem key='post-button'>
                    <ListItemText primary={
                        <Button
                            style={theme.button}
                            variant="contained"
                            color="inherit"
                            disabled={isError}
                            onClick={onPost}
                            fullWidth
                        >
                        Post
                        </Button>
                    } />
                    </ListItem>
                    <ListItem key='logout'>
                    <ListItemText primary={
                        <Button
                        variant="outlined"
                        onClick={signOut}
                        fullWidth
                        >
                        Logout
                        </Button>
                    } />
                    </ListItem>
                </List>
                <div>
                  Welcome back...
                  {user.username}
                </div>
                </Drawer>
            </ThemeProvider>
        </>
    )
}

export default Sidebar