import React, { useState } from 'react';
import Amplify from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";

import {Login} from "./components/Login"

import { 
  Navigate,
  Routes, 
  Route,
  BrowserRouter } from 'react-router-dom';

import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
// import Checkbox from '@mui/material/Checkbox';

import awsconfig from './aws-exports';
import HomePage from './components/Homepage';
import FollowOnlyFeed from "./components/Homepage/follow-only-feed"
import FetchAndLoad from "./components/Homepage/fetchAndLoad"
import Settings from './components/Settings';
import Premium from "./components/Premium"
import AuthContext from './hooks/AuthContext';
import MessagesPage from './components/Messages';
import MessagesPage2 from "./components/Messages/index2"

Amplify.configure(awsconfig);

const theme = createTheme({
  status: {
    danger: red[500],
  },
  palette: {
    // type: 'light',
      // primary: {
      //   main: '#f50057',
      // },
      // secondary: {
      //   main: '#f50057',
      // },
      background: {
        default: 'rgb(15, 12, 41)',
      },
      text: {
        primary: 'white',
      },
    },
});



// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));

function App() {
  const { user } = useAuthenticator();
  const [token, setToken] = useState(null);

      if (user) {
        return (
          <>
            <AuthContext token={token}>
              <ThemeProvider theme={theme}>
                <CssBaseline /> {/* Remove styles */}
                <BrowserRouter>
                  <Routes> {/* No longer Switch */}
                    <Route path='/' element={<HomePage token={token}/>} />
                    <Route path='/feed' element={<HomePage/>} />
                    <Route path='/follow-only-feed' element={<FollowOnlyFeed/>} />
                    <Route path='/fetch-and-load' element={<FetchAndLoad/>} />
                    <Route path='/messages' element={<MessagesPage/>} />
                    <Route path='/messages2' element={<MessagesPage2/>} />
                    <Route path='/premium' element={<Premium/>} />
                    <Route path='/settings' element={<Settings/>} />
                    <Route path='/:userId' element={<HomePage/>} />
                    <Route path="/*" element={<Navigate to="/" />} />
                    {/* <Navigate path='*' to="/" /> */}
                  </Routes> 
                  {/* <Navigate path='*' to="/" /> */}
                </BrowserRouter>
              </ThemeProvider>
            </AuthContext>
          </>
        )
      };

      return <Login/>
      }


export default App;