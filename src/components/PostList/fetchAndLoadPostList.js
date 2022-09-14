import React, { useState, useEffect, useReducer, useCallback, useRef } from 'react'

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
import { getLike, listLikesByOwner, listPostsSortedByTimestamp } from '../../graphql/queries';
import { onCreatePost } from '../../graphql/subscriptions';

import { createPost } from '../../graphql/mutations';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../../containers/Sidebar"
import PostBox from '../PostBox';
import PostBoxTESTING from "../PostBox/indexTESTING"

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

  export function Item({index, text}) {
    return (
    <>
      <div style={{
        // background: "lightblue",
        borderBottom: "2px solid lightblue ",
        minHeight: "140px",
        height: "auto",
        width: "100%"
      }}>
        <h1>Post #{index}</h1>
        <h2>{text}</h2>
      </div>
    </>
    )
  }

const PostList = ({activeListItem}) => {
    const navigate = useNavigate();
    const { user } = useAuthenticator();

    const [posts, dispatch] = useReducer(reducer, []);
    const [postsSub, setPostsSub] = useState([]);
    const [nextTokenState, setNextTokenState] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    // Scroll States
    const [initiateScroll, setInitiateScroll] = useState(false);
    


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

    const getPosts = async (type, nextToken = nextTokenState) => {
        try {
            const postData = await API.graphql(
                graphqlOperation(listPostsSortedByTimestamp, {
                    type: "Post", 
                    sortDirection: 'DESC', // ASC vs. DESC for opposite
                    limit: 5, //default = 10
                    nextToken: nextTokenState,
                    // authMode: "AMAZON_COGNITO_USER_POOLS"
                }))
            // const postsItems = postData.data.listPostsSortedByTimestamp.items
            dispatch({ 
              type: type, 
              posts: postData.data.listPostsSortedByTimestamp.items 
            })
              setNextTokenState(postData.data.listPostsSortedByTimestamp.nextToken);
            // dispatch(posts)
            // console.log(posts)
        } catch (err) {console.log('error fetching posts')}
    }

  //   const identifyLikeForDelete = async (type, nextToken = null) => {
  //     try {
  //       const fetchedPostID = await API.graphql(graphqlOperation(listLikesByOwner, {
  //         likeUserId: user.username,
  //         filter: {
  //           postID: 
  //         }
  //       }))
        
  //       const likeData = await API.graphql(
  //             graphqlOperation(getLike, {
  //                 postID: fetchedPostID, 
  //           }))
  //         // const postsItems = postData.data.listPostsSortedByTimestamp.items
  //         dispatch({ type: type, posts: postData.data.listPostsSortedByTimestamp.items })
  //         setNextToken(postData.data.listPostsSortedByTimestamp.nextToken);
  //         // dispatch(posts)
  //         // console.log(posts)
  //     } catch (err) {console.log('error fetching posts')}
  // }

    useEffect(() => {
        getPosts()
      }, [postsSub])

      // useEffect(() => {
      //   getAdditionalPosts()
      // }, [nextTokenState])

      const getAdditionalPosts = () => {
        if (nextTokenState === null) return; //Reached the last page
        getPosts(ADDITIONAL_QUERY, nextTokenState);
      }

      useEffect(() => {
        getPosts(INITIAL_QUERY);
    
        const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
          next: (msg) => {
            console.log('allposts subscription fired')
            const post = msg.value.data.onCreatePost;
            dispatch({ type: SUBSCRIPTION, post: post });
          }
        });
        return () => subscription.unsubscribe();
      }, []);



    // const post_data_placeholder = [
    //     {
    //       id: 0,
    //       text: "text goes here 1",
    //       username: "Jerry"
    //     },
    //     {
    //       id: 1,
    //       text: "text goes here 2",
    //       username: "Bananna"
    //     },
    //     {
    //       id: 2,
    //       text: "text goes here 3",
    //       username: "Sarah"
    //     }
    //   ];

    // const PostBox = ({ text, username, createdAt, timestamp }) => {
    //     const UsernameChar = username.slice(0,1);
    //     return (
    //       <>
    //         <ThemeProvider theme={theme}>
    //           <div style={theme.box}>

    //             <Avatar style={theme.avatar}>
    //                 {UsernameChar.toUpperCase()}
    //             </Avatar>

    //             <div style={theme.postBody}>

    //               <div style={theme.ownerAndTime}>
                    
    //                 <p style={theme.textOwnerAndTime}>
    //                     {username} 
    //                     {" • "}
    //                     {moment(createdAt).fromNow()}
    //                 </p>
    //               </div>

    //               <p style={theme.text}>
    //                   {text}
    //               </p>

    //             </div>

    //           </div>
    //         </ThemeProvider>
    //       </>
    //     );
    //   };

    const listInnerRef = useRef();
    const onScroll = () => {
      if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        
        // console.log('scrollTop:' + scrollTop)
        // console.log('clientHeight:' + clientHeight)
        // console.log('-------------------------')
        // console.log(scrollTop + clientHeight + 1)
        // console.log('scrollTop:' + scrollHeight)
        console.log(listInnerRef.current.scrollHeight)
        
        // if ((scrollTop + clientHeight + 1) === scrollHeight) {
        //   setInitiateScroll(true);
        // } else {
        //   setInitiateScroll(false);
        // }

        if((scrollTop + clientHeight + 1) >= scrollHeight) {
          
        }
        
        if ((scrollTop + clientHeight + 1) >= scrollHeight) {
          // TO SOMETHING HERE
          // getAdditionalPosts();
          const getAdditionalPosts = () => {
            if (nextTokenState === null) return; //Reached the last page
            getPosts(ADDITIONAL_QUERY, nextTokenState);
          }
          getAdditionalPosts()

          console.log("Reached bottom");
        }
        
        if (scrollTop === 0) {
          // TO SOMETHING HERE
          console.log("Reached top");
        }
      }
    };

    return (
        <>
        <Sidebar
          getPosts={e => getPosts()}
        />
        <ThemeProvider theme={theme}>
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                  <h1>Fetch 'n Load Posts</h1>
                </div>
                <div
                  id="Container"
                  className="list-inner"
                  onScroll={() => onScroll()}
                  ref={listInnerRef}
                  style={{
                    width: "500px",
                    height: "300px", 
                    border: "1px solid lightgrey",
                    overflowX: "hidden",
                    overflowY: "scroll",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)"  
                  }}
                >
                  {posts.map((post, index) => {
                    return (
                      // Return value
                      <Item 
                        key={index} 
                        index={post.id.slice(0,8)} 
                        text={post.content} 
                      />
                    );
                  })}
                </div>
                {/* {console.log('posts', posts)}
                {console.log('nextToken', nextTokenState)} */}
                {/* {posts ? (
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
                                // listOfLikesID={null}
                                userPointer={item.userPointer}
                                fullPostData={item}
                            />
                        </div>
                    ))
                    ) : (
                        "Loading..."
                    )} */}
                    <Button variant='outlined' onClick={() => getAdditionalPosts()}> Read More </Button>
                </div>
            {/* </Drawer> */}
            </ThemeProvider>
        </>
    )
}

export default PostList