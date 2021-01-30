// @flow

import { type Node, useEffect } from 'react';
import fbt from 'fbt';
import { Heading } from '@tbergq/components';
import { Helmet } from 'react-helmet';
import { useNavigate } from '@tbergq/router';

import { useGoogleUser, renderSignInButton } from '../../components/login-context';
import './login.css';

export default function Login(): Node {
  const user = useGoogleUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      // undefined means not set, null means not logged in
      renderSignInButton('my-signin');
    } else if (user != null) {
      navigate('/home');
    }
  }, [user, navigate]);
  return (
    <>
      <Helmet>
        <title>Trainingjournal | login</title>
      </Helmet>
      <div className="Login__container">
        <Heading level="h1">
          <fbt desc="login page heading">Trainingjournal login</fbt>
        </Heading>
        <p>
          <fbt desc="login with google">Use your google account to log in</fbt>
        </p>
        <div id="my-signin" className="g-signin2" />
      </div>
    </>
  );
}
