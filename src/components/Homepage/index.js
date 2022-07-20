import React from 'react'
import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
  } from "@aws-amplify/ui-react";

export function HomePage(){
  return (
    <>
        <div>Hey you're logged in</div>
        <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello, {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
        </Authenticator>
    </>
  )
}

export default HomePage;