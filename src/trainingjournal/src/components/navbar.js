// @flow

import { type Node } from 'react';
import { Navbar as NavbarComponent, Box } from '@tbergq/components';
import { Link, useNavigate } from '@tbergq/router';
import { fbt } from 'fbt';

import { useGoogleUser, signOut } from './login-context';

function NavLeft({ isLoggedIn }): Node {
  if (!isLoggedIn) {
    return null;
  }
  return (
    <Link to="/home">
      <fbt desc="Home navbar link">Home</fbt>
    </Link>
  );
}
function NavRight({ name, isLoggedIn }): Node {
  const navigate = useNavigate();
  if (!isLoggedIn) {
    return (
      <Link to="/account/login">
        <fbt desc="Login navbar link">Login</fbt>
      </Link>
    );
  }

  return (
    <Box display={{ _: 'block', desktop: 'flex' }}>
      <Box marginRight={{ desktop: 'normal' }} marginBottom={{ _: 'normal', desktop: 'none' }}>
        {fbt(`Hi ${fbt.param('username', name)}`, 'user greeting')}
      </Box>
      <Box>
        <a
          href="/"
          onClick={async (e) => {
            e.preventDefault();
            await signOut();
            navigate('/');
          }}
        >
          <fbt desc="logout link">Log out</fbt>
        </a>
      </Box>
    </Box>
  );
}
export default function Navbar(): Node {
  const user = useGoogleUser();
  const basicProfile = user?.basicProfile;
  const isLoggedIn = user != null;
  const name = basicProfile?.getGivenName() ?? '';

  return (
    <NavbarComponent
      left={<NavLeft isLoggedIn={isLoggedIn} />}
      right={<NavRight isLoggedIn={isLoggedIn} name={name} />}
      brand={<Link to="/">Trainingjournal</Link>}
    />
  );
}
