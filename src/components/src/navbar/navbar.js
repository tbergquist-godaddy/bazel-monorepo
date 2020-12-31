// @flow

import { type Node, type Element, useState, useCallback, Children } from 'react';
import { create } from '@adeira/sx';
import { MdMenu } from 'react-icons/md';

import './navbar.css';
import Box from '../box/box';
import useMatchMedia from '../use-match-media';
import { breakpoints } from '../breakpoints';
import IconButton from '../button/icon-button';

type Props = {
  +brand: Element<any>,
  +left?: Node,
  +right?: Node,
  +menuAriaLabel?: string,
};

export default function Navbar({ brand, left, right, menuAriaLabel = 'Menu' }: Props): Node {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const onNavLinkClick = (e: SyntheticEvent<HTMLElement>) => {
    // $FlowExpectedError[prop-missing]
    if (e.target.tagName === 'A') {
      setIsExpanded(false);
    }
  };

  const onMatchMediaChange = useCallback((matches) => {
    setIsDesktop(matches);
    if (matches) {
      setIsExpanded(false);
    }
  }, []);

  useMatchMedia(breakpoints.desktop, onMatchMediaChange);
  return (
    <nav className={`Navbar ${styles('header', isExpanded && 'headerExpanded')}`}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <div className={`Navbar__brand ${styles('brand')}`}>{brand}</div>
          {isDesktop && <div>{left}</div>}
        </Box>
        {isDesktop ? (
          <div>{right}</div>
        ) : (
          <span className="Navbar__Burger-wrapper">
            <IconButton aria-label={menuAriaLabel} onClick={() => setIsExpanded((state) => !state)}>
              <MdMenu />
            </IconButton>
          </span>
        )}
      </Box>
      <div className={styles('expanded', isExpanded && 'expandedVisible')}>
        {isExpanded && (
          <div className="Navbar__expanded" onClick={onNavLinkClick}>
            <Box>
              {Children.map(left, (child) => (
                <div className="Navbar__expanded-link-wrapper">{child}</div>
              ))}
              {Children.map(right, (child) => (
                <div className="Navbar__expanded-link-wrapper">{child}</div>
              ))}
            </Box>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = create({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    padding: 'var(--space-normal)',
    maxHeight: '64px',
    transition: 'max-height var(--transition-duration-normal) ease-in',
    overflowY: 'hidden',
  },
  headerExpanded: {
    maxHeight: '500px',
  },
  brand: {
    fontSize: '1.8rem',
    marginRight: 'var(--space-large)',
  },
  expanded: {
    opacity: 0,
    transition: 'opacity var(--transition-duration-normal) ease-in',
  },
  expandedVisible: {
    opacity: 1,
  },
});
