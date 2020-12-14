// @flow

import type { Node } from 'react';
import { Navbar as NavbarComponent } from '@tbergq/components';
import { Link } from '@tbergq/router';
import { fbt } from 'fbt';

import { TOKEN_KEY } from '../constants';

export default function Navbar(): Node {
  const token = localStorage.getItem(TOKEN_KEY);
  return (
    <NavbarComponent
      left={
        token != null && (
          <Link to="/home">
            <fbt desc="Home navbar link">Home</fbt>
          </Link>
        )
      }
      brand={<Link to="/">Trainingjournal</Link>}
    />
  );
}
