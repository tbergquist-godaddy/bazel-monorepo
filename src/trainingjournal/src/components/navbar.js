// @flow

import { type Node } from 'react';
import { Navbar as NavbarComponent, Box } from '@tbergq/components';
import { Link, useNavigate } from '@tbergq/router';
import { fbt } from 'fbt';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import fetchUserDetails, { FETCH_USER_DETAILS_KEY } from '../account/api/fetch-user-details';
import logout from '../account/api/logout';
import { TOKEN_KEY } from '../constants';

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
function NavRight({ isLoggedIn, username }): Node {
  const navigate = useNavigate();
  const cache = useQueryClient();
  const { mutate } = useMutation(logout, {
    onError: () => {},
    onSuccess: () => {
      localStorage.removeItem(TOKEN_KEY);
      cache.invalidateQueries(FETCH_USER_DETAILS_KEY);
      navigate('/');
    },
  });
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
        {fbt(`Hi ${fbt.param('username', username)}`, 'user greeting')}
      </Box>
      <Box>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            mutate();
          }}
        >
          Log ut
        </a>
      </Box>
    </Box>
  );
}
export default function Navbar(): Node {
  const { data } = useQuery(FETCH_USER_DETAILS_KEY, fetchUserDetails, {
    suspense: false,
  });

  return (
    <NavbarComponent
      left={<NavLeft isLoggedIn={data != null} />}
      right={<NavRight isLoggedIn={data != null} username={data?.username} />}
      brand={<Link to="/">Trainingjournal</Link>}
    />
  );
}
