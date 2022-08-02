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
import { Block } from '@mui/icons-material';

const PostBox = ({ id, item, text, username, createdAt, listOfLikes, userPointer }) => {
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
            minHeight: "230px",
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
        RightSidebar: {
          display: "block",
        },
        HeartCon: {
          height: "90px",
          width: "70px",
          margin: "0 auto",
        },
        CommentCon: {
          height: "90px",
          width: "70px",
          margin: "0 auto",
          marginTop: "20px"
        }
    });
    
    const UsernameChar = username.slice(0,1);
    const [listOfLikesCount, setListOfLikesCount] = useState(0);
    const [ currentUserLikeItem, setCurrentUserLikeItem ] = useState([]);
    const [ isLiked, setIsLiked ] = useState(false);
    
    // console.log(listOfLikes.items.length)
    // const countOfListOfLikes = listOfLikes.length

    useEffect(() => {
      if (listOfLikes)
      setListOfLikesCount(listOfLikes.items.length)
    }, [listOfLikes])


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
    
    <div style={theme.RightSidebar}>
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
                      {listOfLikes.items.length > 0 ? (
                      listOfLikes.items.map((item) => (
                        <p>{item.likeUserId}</p>
                      ))) : (
                        ""
                      )}
                    </>
                }
              >
                <p style={{marginTop: "-5px", textAlign: "center"}}>Likes {listOfLikesCount}</p>
              </HtmlTooltip>

        </div>

        <div 
          style={theme.CommentCon}
        >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                width="100%" height="50%"
                
                onClick={() => {
                  isLiked === true ? 
                  DELETE_LIKE() : 
                  CREATE_LIKE()
                }
              }
              >
              
              {isLiked === true ?
              <path 
                style={{
                  fill:  "white",
                  marginRight: "10px"
                }}
                fill="white" 
                
                // d="M128 224h256v64H128zM128 128h256v64H128z" 
                d="M480 0H32C14.312 0 0 14.312 0 32v352c0 17.688 14.312 01 01 32h64v96l144-96h240c17.688 0 12-14.312 32-32V32c0-17.688-14.312-32-32-32zm-32 352H240l-80"
                />
                :
                <path 
                style={{
                  marginRight: "10px"
                }}
                fill="white" 
                
                // d="M128 224h256v64H128zM128 128h256v64H128z" 
                d="M480 0H32C14.312 0 0 14.312 0 32v352c0 17.688 14.312 32 32 32h64v96l144-96h240c17.688 0 32-14.312 32-32V32c0-17.688-14.312-32-32-32zm-32 352H240l-80 48v-48H64V64h384v288z"
                />
              }
              </svg>

              <HtmlTooltip
                title={
                  <>
                    <h3>Accounts:</h3>
                      {listOfLikes.items.length > 0 ? (
                      listOfLikes.items.map((item) => (
                        <p>{item.likeUserId}</p>
                      ))) : (
                        ""
                      )}
                    </>
                }
              >
                <p style={{marginTop: "-5px", textAlign: "center"}}>MSG's {listOfLikesCount}</p>
              </HtmlTooltip>
        </div>  
      </div>

      </div>
        
      </div>
      </ThemeProvider>
    </>
    );
  };

export default PostBox