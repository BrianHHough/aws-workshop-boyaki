import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

import { createTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles"

import Amplify from "aws-amplify";
import {Auth, API, graphqlOperation, Storage } from 'aws-amplify';
import { useAuthenticator } from "@aws-amplify/ui-react";
import { createUserInfo } from '../../graphql/mutations';
import { getUserInfo } from '../../graphql/queries';
import { updateUserInfo } from '../../graphql/mutations';

import Sidebar from "../../containers/Sidebar"

Amplify.configure("../../aws-exports.js");

const initialUserDataTemplate = { 
  name: "", 
  handle: "", 
  pictureURL: "",
  bio: "",
}

const SettingsPage = () => {
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
    });

    const handleClick = async (e) => {
      // const stripe = await loadStripe('pk_test_l8VbmbOPY90BgShjtT6mwlsm');
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
      try {const { error } = await stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1LR5xkCKJ7t6EJmTtmOFQtWE',
          quantity: 1
        }],
        mode: 'subscription',
        successUrl: 'http://localhost:3000',
        cancelUrl: 'http://localhost:3000/premium',
      })
    } catch (error) {console.log(error, 'failed to call stripe api')}
    }

    return (
        <>
        <Sidebar/>
        <ThemeProvider theme={theme}>
                <div style={theme.postlist} id="PostListCon">
                <div style={theme.header}>
                  <h1>Premium</h1>
                  <h3>Your status is:</h3>
                  <hr></hr>
                  <button onClick={handleClick}>Get Premium</button>
                  
                </div>
                </div>
            </ThemeProvider>
        </>
    )
}

export default SettingsPage