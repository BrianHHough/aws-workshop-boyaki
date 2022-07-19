import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { AmplifySignUp, AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useTheme } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";

import {Login} from "./components/Login"

import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { makeStyles, ThemeProvider } from "@mui/material/styles"

import awsconfig from './aws-exports';
import HomePage from './components/Homepage';
Amplify.configure(awsconfig);

function App({ signOut, userState }) {
  const [authState, setAuthState] = useState();
  const { user } = useAuthenticator();
  const { tokens } = useTheme();

      if (user) {
        return <HomePage/>
      }
      return <Login/>
      }


export default App;
