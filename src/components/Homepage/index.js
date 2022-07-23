import React from 'react'
import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";

import { Auth } from 'aws-amplify';


import Sidebar from "../../containers/Sidebar"
import PostList from "../../components/PostList"
import ProfilePage from '../ProfilePage';

export function HomePage(){

  async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    <>
        
        <Authenticator>
            {({ signOut, user }) => (
              <>
                {/* <div>Hey you're logged in</div>
                <h1>Hello, {user.username}</h1>
                <button onClick={signOut}>Sign out</button> */}
                {/* <Sidebar/> */}
                
                {window.location.pathname === '/feed' ?
                  <>
                  
                  <PostList/>
                  </>
                  : 
                  <>
                  {window.location.pathname === `/${user.username}` ?
                    // My profile
                    <div>
                      <Sidebar/>
                      <ProfilePage id="My profile"/>
                    </div>
                    : 
                    // Someone else's profile
                    <div>
                      <Sidebar/>
                      <ProfilePage id="Someone else's profile"/>
                    </div>
                  }
                  </>
                }

                {/* {window.location.pathname === `${user.username}` ? */}
                {/* {user.username === userId  */}
                {/* {window.location.pathname === `/${user.username}` ?
                  <div>
                    <ProfilePage/>
                  </div>
                  : 
                  <div>
                    <ProfilePage/>
                  </div>
                } */}
              </>
            )}
        </Authenticator>
    </>
  )
}

export default HomePage;