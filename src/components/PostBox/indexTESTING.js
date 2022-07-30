import React, { useState, useEffect, useReducer } from 'react'

import Moment from 'moment';
import moment from 'moment';

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


import Heart from "../../assets/heartSVG.svg"

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createLike, deleteLike } from "../../graphql/mutations";

import { useNavigate } from 'react-router-dom';
import { getLike, getPost, listLikes } from '../../graphql/queries';

const HANDLE_LIKE = Symbol("HANDLE_LIKE");
const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");

    const initialState = {
      likes: 100,
      dislikes: 12,
      active: null
    };

    const reducer = (state, action) => {
      const { likes, dislikes, active } = state;
    
      switch (action.type) {
        case HANDLE_LIKE:
          // CREATE_LIKE();
          return {
            ...state,
            likes: state.likes + 1,
            dislikes: active === "dislike" ? dislikes - 1 : dislikes,
            active: "like"
          };
        case HANDLE_DISLIKE:
          // DELETE_LIKE();
          return {
            ...state,
            likes: active === "like" ? likes - 1 : likes,
            active: "dislike",
            dislikes: dislikes + 1
          };
        default:
          return state;
      }
    };



const PostBoxTESTING = ({ id, item, text, username, createdAt, listOfLikes, userPointer, fullPostData }) => {
    const navigate = useNavigate();
    const { user } = useAuthenticator();

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
        boxCon: {
          display: "flex",
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
            maxWidth: "750px",
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
            marginTop: "15px"
        },
        userHandle: {
            marginRight: "5px",
            cursor: "pointer",
        },
        postBody: {
            display: "block",
            width: "80%",
        },
        ownerAndTime: {
            display: "flex"
        },
        HeartCon: {
          height: "70px",
          width: "70px",
          margin: "0 auto",
        }
    });
    
    const UsernameChar = username.slice(0,1);

    

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const { likes, dislikes, active } = state;
    const [listOfLikesCount, setListOfLikesCount] = useState(0);

    const [ currentUserLikeItem, setCurrentUserLikeItem ] = useState([]);
    const [ isLiked, setIsLiked ] = useState(false);
    
    // console.log(fullPostData);

    // console.log(listOfLikes ? listOfLikes : 0)
    // console.log(listOfLikes.items.length)
    // const countOfListOfLikes = listOfLikes.length


    // useEffect(() => {
    //   if (listOfLikes)
    //   setListOfLikesCount(listOfLikes.items.length)
    // }, [listOfLikes])


    const CREATE_LIKE = async () => {
      const res = await API.graphql(graphqlOperation(createLike, { input: {
        postID: id,
        likeUserId: user.username,
      } }));
      console.log(res);
      GET_LIKE();

      // try { 
      //   const res = await API.graphql(({
      //     query: getPost,
      //     variables: { id: id}
      // }))
      //   console.log(res);
      // } catch (error) {console.log(error, 'help')};
      // window.location.reload()
    }

    const GET_LIKE = async () => {
      const res = await API.graphql(graphqlOperation(listLikes, { filter: {
        // postID: { eq: "8df0fe08-6cad-4b0b-b2b4-0a41d06706a3" },
        postID: { eq: id },
        likeUserId: { eq: user.username },
      } }));
      // console.log(res.data.listLikes.items);
      setCurrentUserLikeItem(res.data.listLikes.items);
      if(res.data.listLikes.items.length > 0) {
        setIsLiked(true)
      } else {
        setIsLiked(false)
      }
      
      // window.location.reload()
    }
    useEffect(() => {
      GET_LIKE();
    }, [])
    
    const DELETE_LIKE = async () => {
      const res = await API.graphql(graphqlOperation(deleteLike, { input: {
        // postID: id,
        // id: currentUserLikeItem[0].id,

        id: currentUserLikeItem[0].id,
        // postID: "8df0fe08-6cad-4b0b-b2b4-0a41d06706a3",

        // likeUserId: user.username
      } }));
      console.log(res);
      GET_LIKE();
      // window.location.reload()
    }

    // Filter function to get like item - DOESN'T WORK

    // const fetchCurrentUserLikeItem = async (listOfLikes) => {
    //   try {
    //     // for (let i = 0; i < listOfLikes.length; i++ ) 
    //     const response = listOfLikes.filter((item)=>(item.likeUserId === user.username));
    //     setCurrentUserLikeItem(response);
    //     console.log(listOfLikes);
    //   } catch (error) {console.log('error getting like item')}
    // }

    // useState(() => {
    //   fetchCurrentUserLikeItem();
    // }, [])


    const HtmlTooltip = styled(({ className, ...props }) => (
      <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
    }));


    return (
      <>
        <ThemeProvider theme={theme}>
          <div style={theme.boxCon}>
          <div style={theme.box}>

          {/* PROFILE PICTURE - PFP */}
          {userPointer?.pictureURL ?
            <Avatar 
              style={theme.avatar}
              src={userPointer.pictureURL}
            />
            :
            <Avatar style={theme.avatar}>
                {UsernameChar.toUpperCase()}
            </Avatar>
            }

            <div style={theme.postBody}>

              <div style={theme.ownerAndTime}>
                
                <div style={theme.textOwnerAndTime}>
                    <div 
                        id="Go to User's Page"
                        style={theme.userHandle}
                        onClick={() => {
                            Auth.currentAuthenticatedUser().then((user) => {
                            navigate('/' + userPointer?.handle);
                            })}}>
                        {userPointer?.handle ? 
                          userPointer?.handle
                          :
                          username
                        }
                    </div>
                    {" • "}
                    {moment(createdAt).fromNow()}
                </div>
              </div>

              <p style={theme.text}>
                  {text}
              </p>

            </div>

            <div 
              style={theme.HeartCon}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 16 16"
                height="70px"
                onClick={() => {
                  isLiked === true ? 
                  DELETE_LIKE() : 
                  CREATE_LIKE()
                }
              }
                // onClick={() => {
                //   active !== "like" ? 
                //   dispatch({ type: HANDLE_LIKE }) : 
                //   dispatch({ type: HANDLE_DISLIKE });

                //   active !== "like" ? 
                //   CREATE_LIKE() : 
                //   DELETE_LIKE();
                // }}

                // className={isLiked ? "HeartFilled" : "HeartUnfilled"}
                // onClick={() => toggle(item)}
                // onClick={toggleLike => setIsLiked(true)} // Like all posts
              >
                <path 
                style={{
                  fill: isLiked === true ? "#e41749" : "none",
                  marginRight: "10px"
                }}
                stroke="#e41749" 
                d="M5.047 2.506c-2.114 0-3.533 1.711-3.533 3.824 0 2.398 3.35 5.263 6.22 7.176 2.871-1.913 6.182-4.824 6.221-7.176.035-2.113-1.333-3.824-3.447-3.824-.902 0-1.817.477-2.774 1.433-.957-.956-1.785-1.433-2.687-1.433z" />
              </svg>

              <HtmlTooltip
                title={
                  <>
                    <h3>Accounts:</h3>
                      {/* {listOfLikes.items.length > 0 ? (
                      listOfLikes.items.map((item) => (
                        <p>{item.likeUserId}</p>
                      ))) : (
                        ""
                      )} */}
                    </>
                }
              >
                <p style={{marginTop: "-5px"}}>Likes {listOfLikesCount}</p>
              </HtmlTooltip>

            </div>            

          </div>
            
          </div>
        </ThemeProvider>
      </>
    );
  };

export default PostBoxTESTING