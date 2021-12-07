import React from 'react';

import { Redirect } from 'react-router-dom';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const USERS = [null, "Penguin", "Parrot", "Zebra"]

//sign in options
const fireabseUIConfig = {
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    GoogleAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup', //don't redirect when signing in
  credentialHelper: 'none', //disable the account chooser
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect/refresh
    }
  }
}

export default function SignInPage(props) {
  const auth = getAuth();

  if(props.user) {
    return <Redirect to="/"/>
  }  

  return (
    <div className="card bg-light mt-5 pt-5">
      <div className="container card-body">
        <StyledFirebaseAuth uiConfig={fireabseUIConfig} firebaseAuth={auth} />
      </div>
    </div>
  )
}