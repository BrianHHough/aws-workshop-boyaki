import React, { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { Auth, Hub } from 'aws-amplify';

// initialize the context with an empty object
const UserContext = createContext({});

export default function AuthContext({ children }) {
  // Auth0 Federation
  const [token, setToken] = useState(null);
  // Store the user in a state variable
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  // (Only once) - when the component mounts, create a listener for any auth events.
  useEffect(() => {
    Hub.listen('auth', ({payload: {event, data}}) => {
      // Hub listens for auth events that happen.
      // i.e. Sign in, sign out, sign up, etc.
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          setToken("grating...");
          getToken().then(userToken => setToken(userToken.idToken.jwtToken));
          break;
        case "signOut":
          setToken(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
        default:
          break;
        }
      // Whenever an event gets detected, run the checkUser function
      checkUser();
    });
  }, []);

  function getToken() {
    return Auth.currentSession()
      .then(session => session)
      .catch(err => console.log(err));
  }

  async function checkUser() {
    try {
      // Get the current authenticated user
      // const user = await Auth.currentAuthenticatedUser();
      const user = await Auth.currentUserInfo();
      if (user) {
        // set the user in state
        setUser(user);
      }
    } 
    // Error occurs if there is no user signed in.
    catch (error) {
      // set the user to null if there is no user. 
      setUser(null);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user, // the value of the current user
        setUser, // the setState method - allows us to set the current user in state from anywhere in our application
        token
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// export the hook so we can use it in other components.
export const useUser = () => useContext(UserContext);
