import React from 'react';
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
import Settings from './components/Settings';

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

      if (user) {
        return (
          <>
            <ThemeProvider theme={theme}>
              <CssBaseline /> {/* Remove styles */}
              <BrowserRouter>
                <Routes> {/* No longer Switch */}
                  <Route path='/' element={<HomePage/>} />
                  <Route path='/feed' element={<HomePage/>} />
                  <Route path='/settings' element={<Settings/>} />
                  <Route path='/:userId' element={<HomePage/>} />
                  <Route path="/*" element={<Navigate to="/" />} />
                  {/* <Navigate path='*' to="/" /> */}
                </Routes> 
                {/* <Navigate path='*' to="/" /> */}
              </BrowserRouter>
            </ThemeProvider>
          </>
        )
      };

      return <Login/>
      }


export default App;