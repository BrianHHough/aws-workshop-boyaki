import React, { useEffect, useState } from 'react';
import { Heading, useTheme } from "@aws-amplify/ui-react";
import { Amplify, Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

export function SignInHeader() {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  const { tokens } = useTheme();

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
      .then(currentUser => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

  return (
    <>
    <Heading 
      level={3} 
      padding={`${tokens.space.xl} ${tokens.space.xl} 0`}
    >
      Sign into your Account
    </Heading>
    <div style={{marginLeft: "30px", marginTop: "10px", marginBottom: "-30px"}}>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Sign in with Google</button>
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <button onClick={() => Auth.federatedSignIn({provider: "Auth0" })}>Auth0 <> Twitter</></button>
      <p style={{color: "black"}}>OR</p>
    </div>
    </>
  );
}
