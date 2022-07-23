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
import { listPostsBySpecificOwner, getFollowRelationship, listFollowRelationships } from '../../graphql/queries';
import { onCreatePost } from '../../graphql/subscriptions';
import { createFollowRelationship, deleteFollowRelationship } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';

import PostBox from '../PostBox';

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
    const [isLiked, setIsLiked] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [isFollowing, setIsFollowing] = useState(false);
    const [numberOfFollowers, setNumberOfFollowers] = useState(0);

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
        AnotherUserInfo: {
          display: "flex"
        },
        ButtonCon: {
          position: "relative",
          marginLeft: "20px"
        },
        FollowButton: {
          height: "30px",
          top: "50%",
          transform: "translateY(-50%)",
          position: "absolute",
          borderRadius: "7px",
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
                    // nextToken: nextToken,
                    // authMode: "AMAZON_COGNITO_USER_POOLS"
                }))
            // const postsItems = postData.data.listPostsSortedByTimestamp.items
            dispatch({ type: type, posts: postData.data.listPostsBySpecificOwner.items })
            setNextToken(postData.data.listPostsBySpecificOwner.nextToken);
            // dispatch(posts)
            console.log(posts)
        } catch (err) {console.log('error fetching posts')}
    }

    const getIsFollowing = async ({followerId, followeeId}) => {
      const res = await API.graphql(graphqlOperation(getFollowRelationship,{
        followeeId: followeeId, // username of person being followed (someone else)
        followerId: followerId, // username of person doing the following (me)
      }));
      console.log(res)
      // setNumberOfFollowers(res)
      return res.data.getFollowRelationship !== null
    }

    const getNumberOfFollowers = async () => {
      try {
        const res = await API.graphql(graphqlOperation(listFollowRelationships, {
          followeeId: userId,
        }))
        setNumberOfFollowers(res.data.listFollowRelationships.items.length)
      } catch (error) {console.log('failed to load followers')}
    }
    

    useEffect(() => {
      getIsFollowing();
      getNumberOfFollowers();
    }, []);

    const getAdditionalPosts = () => {
      if (nextToken === null) return; //Reached the last page
      getPostsBySpecifiedUser(ADDITIONAL_QUERY, nextToken);
    }

    const follow = async () => {
      console.log('follow')
      const input = {
        // id: `${userId}::${currentUser.username}`,
        followeeId: userId, // someone else
        followerId: currentUser.username, // me
        timestamp: Math.floor(Date.now() / 1000),
      }
      const res = await API.graphql(graphqlOperation(createFollowRelationship, {input: input}));
      if(!res.data.createFollowRelationship.errors) setIsFollowing(true);
      console.log(res);
    }

    const unfollow = async() => {
      console.log('unfollow');
      const input = {
        // id: `${userId}::${currentUser.username}`,
        followeeId: userId, // someone else
        followerId: currentUser.username, // me
        // timestamp: '1658437217'
      }
      const res = await API.graphql(graphqlOperation(deleteFollowRelationship,{input: input}));
      if(!res.data.deleteFollowRelationship.errors) setIsFollowing(false);
      console.log(res) 
    }

    useEffect(() => {
        getPostsBySpecifiedUser()
      }, [postsSub])


      
    useEffect(() => {
      const init = async() => {

        const currentUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(currentUser);

        // setFollowing based on inputs

        // setIsFollowing(await getIsFollowing({
        //   // relationshipID: ID,
        //   id: `${currentUser.username}::${userId}`
        //   // followeeId: userId,
        //   // followerId: currentUser.username
        // }));

        const result = await getIsFollowing({
          followeeId: userId, // username of person being followed (someone else)
          followerId: user.username, 
        })

        setIsFollowing(result);
        // console.log(user.username, userId);

        // setIsFollowing(await getIsFollowing({
        //   // relationshipID: ID,
        //   id: `${currentUser.username}::${userId}`,
        //   followeeId: userId,
        //   followerId: currentUser.username
        // }));

        getPostsBySpecifiedUser(INITIAL_QUERY);
      }
      init()

      const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
        next: (msg) => {
          const post = msg.value.data.onCreatePost;
              if (post.owner !== userId) return;
              dispatch({ type: SUBSCRIPTION, post: post });
          }
      });
      return () => subscription.unsubscribe();
      // when there is a change in URL, run this side script
    }, [userId]); 


    return (
        <>
        <ThemeProvider theme={theme}>
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                {user.username === userId ?
                    <>
                    <h1>My Posts</h1>
                    <h3>Followers: {numberOfFollowers}</h3>
                    </>
                    :
                    <>
                    <div style={theme.AnotherUserInfo}>
                    <h1>{userId}'s Posts</h1>
                    {/* {console.log(user.username)} */}
                    <>
                    <div style={theme.ButtonCon}>
                      
                      {(currentUser && userId !== user.username ) &&
                      ( isFollowing ?
                        <button 
                          style={theme.FollowButton}
                          onClick={unfollow}
                        >
                          FOLLOWING
                        </button>
                      : 
                        <button 
                          style={theme.FollowButton}
                          onClick={follow}
                        >
                          FOLLOW
                        </button>
                      )
                      } 
                      </div>
                      </>
                  </div>
                  <h3>Followers: {numberOfFollowers}</h3>
                  </>
                }

                </div>
                {/* Show all posts: {console.log(posts)} */}
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
                                isLiked={isLiked}
                                setIsLiked={setIsLiked}
                                listOfLikes={item.likes}
                                listOfLikesID={null}
                                // listOfLikes={item.likes[0]}
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