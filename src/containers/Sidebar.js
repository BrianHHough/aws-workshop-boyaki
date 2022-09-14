import React, { useState, useEffect } from 'react'

import {
    MyCustomCardFinalized
} from "../components/PostBox/PostBoxElements.js"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PaidIcon from '@mui/icons-material/Paid';

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

    // Link Previewer States
    const [thereIsALink, setThereIsALink] = useState(false);
    const [extractedLinkForPost, setExtractedLinkForPost] = useState("");
    const [metadata, setMetadata] = useState({});

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
          // owner: user.attributes.preferred_username,
          timestamp: Math.floor(Date.now() / 1000),
          // likes: [null]
        }})); 
        // console.log(res)
        setValue('');
        getPosts();
        window.location.reload()
      }
      // console.log(user.username);

      // =============== //
    // LINK PREVIEWER  //
    // =============== //

    function isValidUrl(textBoxText) {
        try {
          var response = textBoxText.match(
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
          );
          // console.log("pulled out link", response);
          if (response !== null) {
            setExtractedLinkForPost("");
          }
          setExtractedLinkForPost(response[0]);
          return response !== null;
        } catch (error) {
          // console.log("error checking string");
        }
      }
  
      useEffect(() => {
        const response = isValidUrl(value);
        if (response == true) {
          return setThereIsALink(true);
        } else {
          setExtractedLinkForPost("");
          setThereIsALink(false);
        }
      }, [value]);

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
                        selected={activeListItem === 'Follow-Only Feed'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/follow-only-feed');
                            })
                    }}
                    key='follow-only-feed'
                    >
                        <ListItemIcon>
                            <PublicIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="Follow Only Feed" />
                    </ListItemStyled>

                    <ListItemStyled
                        button
                        selected={activeListItem === 'fetch-and-load'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/fetch-and-load');
                            })
                    }}
                    key='fetch-and-load'
                    >
                        <ListItemIcon>
                            <PublicIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="Fetch 'n Load" />
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

                    <ListItemStyled
                        button
                        selected={activeListItem === 'settings'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/settings');
                            })
                    }}
                        key='settings'
                    >
                        <ListItemIcon>
                            <SettingsIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemStyled>

                    <ListItemStyled
                        button
                        selected={activeListItem === 'premium'}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/premium');
                            })
                    }}
                        key='premium'
                    >
                        <ListItemIcon>
                            <PaidIcon htmlColor={theme.icon.fontColor}/>
                        </ListItemIcon>
                        <ListItemText primary="Premium" />
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
                    {/* Parse string and pull out the link */}
                    {/* {console.log("metadata", metadata)} */}
                        {extractedLinkForPost.length > 0 ? (
                        <MyCustomCardFinalized
                            url={extractedLinkForPost}
                            fetchData
                            setData={{ setMetadata }}
                            // setData={data => ({
                            //   ...data,
                            //   title: 'SENTRY ACTIVATED',
                            //   description: 'Are humans worth it?',
                            //   image: { url: 'https://i.imgur.com/1FyFxlk.jpg' },
                            //   publisher: 'HAL 9000',
                            //   url: 'http://thehal9000.com'
                            // })}
                        />
                    ) : (
                    ""
                    )}
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
                  Welcome back: {" "}
                  { user.username} | @{user.attributes.preferred_username}
                </div>
                </Drawer>
            </ThemeProvider>
        </>
    )
}

export default Sidebar