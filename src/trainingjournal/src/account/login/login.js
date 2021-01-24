/* eslint-disable camelcase */
/* eslint-disable no-console */
// @flow

import { type Node, useLayoutEffect } from 'react';
import fbt from 'fbt';
import { Heading } from '@tbergq/components';
import { Helmet } from 'react-helmet';

import LoginForm from './login-form';
import './login.css';

export default function Login(): Node {
  useLayoutEffect(() => {
    // TODO: Clean up
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    window.onSignIn = (googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log(`ID: ${profile.getId()}`); // Don't send this directly to your server!
      console.log(`Full Name: ${profile.getName()}`);
      console.log(`Given Name: ${profile.getGivenName()}`);
      console.log(`Family Name: ${profile.getFamilyName()}`);
      console.log(`Image URL: ${profile.getImageUrl()}`);
      console.log(`Email: ${profile.getEmail()}`);

      // The ID token you need to pass to your backend:
      const id_token = googleUser.getAuthResponse().id_token;
      console.log(`ID Token: ${id_token}`);
    };
    document.body?.appendChild(script);
  }, []);
  return (
    <>
      <Helmet>
        <title>Trainingjournal | login</title>
      </Helmet>
      <div className="Login__container">
        <Heading align="center" level="h1">
          <fbt desc="login page heading">Trainingjournal login</fbt>
        </Heading>
        <LoginForm />
        <div className="g-signin2" data-onsuccess="onSignIn" />
      </div>
    </>
  );
}
