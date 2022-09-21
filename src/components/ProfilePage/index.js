import React, { useState, useEffect, useReducer } from 'react'
import {useLocation} from 'react-router-dom';
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
import { listPostsBySpecificOwner, getFollowRelationship, listFollowRelationships, getUserInfo, userByHandle } from '../../graphql/queries';
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
    const location = useLocation();
    const { userId } = useParams();
    const usernamePath = (location.pathname.substring(1));
    const { user } = useAuthenticator();

    const [posts, dispatch] = useReducer(reducer, []);
    const [postsFetched, setPostsFetched] = useState([]);
    const [postsSub, setPostsSub] = useState([]);
    const [nextToken, setNextToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);
    const [myUserData, setMyUserData] = useState();
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

    // console.log(usernamePath);

    async function fetchUser() {
      // const { username } = await Auth.currentAuthenticatedUser();
        try {
          const userData = await API.graphql({
            query: userByHandle,
            variables: { handle: usernamePath },
            // authMode: "API_KEY"
        });
        setMyUserData(userData?.data.userByHandle.items[0]);
        setPostsFetched(userData?.data.userByHandle.items[0].post.items)
      } catch (error) { console.log(error, 'error getting user data')}
    }

    useEffect(()=> {
        fetchUser();
    }, []) 
    console.log('myUserData', myUserData)
    console.log('posts', postsFetched);

    const getPostsBySpecifiedUser = async (type, nextToken = null) => {
      // console.log(myUserData?.name);
      const { username } = await Auth.currentAuthenticatedUser();
      const ownerUserData = myUserData?.name;
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
                    owner: ownerUserData, 
                    // type: "Post",
                    sortDirection: 'DESC', // ASC vs. DESC for opposite
                    // limit: 3, //default = 10
                    // nextToken: nextToken,
                    authMode: "API_KEY" 
                }))
            // const postsItems = postData.data.listPostsSortedByTimestamp.items
            dispatch({ type: type, posts: postData.data.listPostsBySpecificOwner.items })
            setNextToken(postData.data.listPostsBySpecificOwner.nextToken);
            // dispatch(posts)
            // console.log(posts)
        } catch (err) {console.log(err, 'error fetching posts')}
    }

    const getIsFollowing = async () => {
      const res = await API.graphql(graphqlOperation(getFollowRelationship,{
        followeeId: myUserData?.name, // username of person being followed (someone else)
        followerId: user.username, // username of person doing the following (me)
      }));
      // console.log(res)
      // setNumberOfFollowers(res)
      return res.data.getFollowRelationship !== null
    }

    const getNumberOfFollowers = async () => {  
      try {
        const res = await API.graphql(graphqlOperation(listFollowRelationships, {
          // followerId: myUserData?.owner,
          // sortDirection: "DESC",
          filter: {
            followeeId: {eq: myUserData?.name} 
        },
        }))
        // console.log(myUserData)
        console.log(res.data.listFollowRelationships.items)
        setNumberOfFollowers(res.data.listFollowRelationships.items.length)
      } catch (error) {console.log(error, 'failed to load followers')}
    }

    

    useEffect(() => {
      getIsFollowing();
      getNumberOfFollowers();
    }, [myUserData, setNumberOfFollowers]);

    const getAdditionalPosts = () => {
      if (nextToken === null) return; //Reached the last page
      getPostsBySpecifiedUser(ADDITIONAL_QUERY, nextToken);
    }

    const follow = async () => {
      console.log('follow')
      const input = {
        // id: `${userId}::${currentUser.username}`,
        followeeId: myUserData.name, // userId, // someone else
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
        followeeId: myUserData.name, // userId, // someone else
        followerId: currentUser.username, // me
        // timestamp: '1658437217'
      }
      const res = await API.graphql(graphqlOperation(deleteFollowRelationship,{input: input}));
      if(!res.data.deleteFollowRelationship.errors) setIsFollowing(false);
      console.log(res) 
    }

    useEffect(() => {
        getPostsBySpecifiedUser()
      }, [])


      
    useEffect(() => {
      const init = async() => {

        const currentUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(currentUser);

        const result = await getIsFollowing({
          followeeId: myUserData?.name, // username of person being followed (someone else)
          followerId: user.username, 
        })

        setIsFollowing(result);


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
    }, [myUserData]); 

    // console.log(user.username)


    return (
        <>
        <ThemeProvider theme={theme}> 
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                {user.username === myUserData?.name ?
                    <>
                    <h1>My Posts</h1>
                    <h3>Followers: {myUserData.name ? numberOfFollowers : 0}</h3>
                    </>
                    :
                    <>
                    <div style={theme.AnotherUserInfo}>
                    <div style={{height: "50px", width: "50px", marginTop: "20px", marginRight: "10px"}}>
                      <img 
                        src={`${myUserData?.pictureURL}`} 
                        alt="Profile" 
                        style={{
                          height: "100%", 
                          width: "100%",
                          objectFit: "cover",
                          borderRadius: "360px"
                        }}
                      />
                    </div>
                    <h1>{myUserData?.name}'s Posts</h1>
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
                {/* {console.log(posts)} */}
                {postsFetched.length > 0 ? (
                    postsFetched.map((item, index, text) => (
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
                                // listOfLikesID={null}
                                userPointer={item.userPointer}
                                fullPostData={item}
                            />
                           
                        </div>
                    ))
                    ) : (
                      <div style={{
                        marginLeft: "30px"
                      }}>
                        "Loading..."
                      </div>
                    )}
                </div>
            {/* </Drawer> */}
            </ThemeProvider>
        </>
    )
}

export default ProfilePage