// @flow

import { type Node } from 'react';
import { Navbar as NavbarComponent } from '@tbergq/components';
import { Link } from '@tbergq/router';
import { fbt } from 'fbt';
import { useQuery } from 'react-query';

import fetchUserDetails, { FETCH_USER_DETAILS_KEY } from '../account/api/fetch-user-details';

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
  if (!isLoggedIn) {
    return null;
  }
  return <div>{fbt(`Hi ${fbt.param('username', username)}`, 'user greeting')}</div>;
}
export default function Navbar(): Node {
  const { data } = useQuery(FETCH_USER_DETAILS_KEY, fetchUserDetails, {
    suspense: false,
    staleTime: Infinity,
  });

  return (
    <NavbarComponent
      left={<NavLeft isLoggedIn={data != null} />}
      right={<NavRight isLoggedIn={data != null} username={data?.username} />}
      brand={<Link to="/">Trainingjournal</Link>}
    />
  );
}
