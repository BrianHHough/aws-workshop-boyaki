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


import PersonIcon from '@mui/icons-material/Person';

import PublicIcon from '@mui/icons-material/Public';

import {Auth, API, graphqlOperation } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { listPostsBySpecificOwner } from '../../graphql/queries';
import { onCreatePost } from '../../graphql/subscriptions';

import { createPost } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

const SUBSCRIPTION = 'SUBSCRIPTION';
const INITIAL_QUERY = 'INITIAL_QUERY';
const ADDITIONAL_QUERY = 'ADDITIONAL_QUERY';

const reducer = (state, action) => {
    switch (action.type) {
      case INITIAL_QUERY:
        return action.posts;
      case ADDITIONAL_QUERY:
        return [...state, ...action.posts]
      case SUBSCRIPTION:
        return [action.post, ...state]
      default:
        return state;
    }
  };

const ProfilePage = ({activeListItem}) => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const { user } = useAuthenticator();

    const [posts, dispatch] = useReducer(reducer, []);
    const [postsSub, setPostsSub] = useState([]);
    const [nextToken, setNextToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
        }
    });

    const getPostsBySpecifiedUser = async (type, nextToken = null) => {
        try {
            const postData = await API.graphql(
                graphqlOperation(listPostsBySpecificOwner, {
                    // owner: "dba56bd6-16c1-4528-b0f2-0273662e257e::username1",

                    // Get Username 1
                    // owner: "username1",
                    // owner: "dba56bd6-16c1-4528-b0f2-0273662e257e::username1", 

                    // Get userappsyncmock
                    // owner: "userappsyncmock",
                    // owner: "ff03de39-5287-4b92-b1e2-fce3d8264bb7::userappsyncmock",
                    owner: userId,
                    // type: "Post",
                    sortDirection: 'DESC', // ASC vs. DESC for opposite
                    // limit: 3, //default = 10
                    nextToken: nextToken,
                    // authMode: "AMAZON_COGNITO_USER_POOLS"
                }))
            // const postsItems = postData.data.listPostsSortedByTimestamp.items
            dispatch({ type: type, posts: postData.data.listPostsBySpecificOwner.items })
            setNextToken(postData.data.listPostsBySpecificOwner.nextToken);
            // dispatch(posts)
            // console.log(posts)
        } catch (err) {console.log('error fetching posts')}
    }

    useEffect(() => {
        getPostsBySpecifiedUser()
      }, [postsSub])

      const getAdditionalPosts = () => {
        if (nextToken === null) return; //Reached the last page
        getPostsBySpecifiedUser(ADDITIONAL_QUERY, nextToken);
      }

      useEffect(() => {
        getPostsBySpecifiedUser(INITIAL_QUERY);
    
        const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
          next: (msg) => {
            const post = msg.value.data.onCreatePost;
                if (post.owner !== userId) return;
                dispatch({ type: SUBSCRIPTION, post: post });
            }
        });
        return () => subscription.unsubscribe();
      }, []);



    const PostBox = ({ text, username, createdAt, timestamp }) => {
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
                        {username} 
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

    return (
        <>
        <ThemeProvider theme={theme}>
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                {user.username === userId ?
                    <h1>My Posts</h1>
                    :
                    <h1>{userId}'s Posts</h1>
                }

                </div>
                {console.log(posts)}
                {posts ? (
                    posts.map((item, index, text) => (
                        <div key={`item${index}`}>
                            <PostBox 
                                id={item.id} 
                                text={item.content} 
                                key={item.value}
                                username={item.owner}
                                createdAt={item.createdAt}
                                timestamp={item.timestamp}
                            />
                        </div>
                    ))
                    ) : (
                        "Loading..."
                    )}
                </div>
            {/* </Drawer> */}
            </ThemeProvider>
        </>
    )
}

export default ProfilePage