// @flow

import {
  type Node,
  useContext,
  createContext,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from 'react';
import { TOKEN_KEY } from '@tj/services/constants';
import { isObjectEmpty } from '@adeira/js';

const LoginContext = createContext();

type AuthResponse = {
  +id_token: string,
};
type BasicProfile = {
  +getGivenName: () => string,
};
type GoogleAuthUser = {
  +getAuthResponse: () => ?AuthResponse,
  +getBasicProfile: () => ?BasicProfile,
};

type User = {
  +authResponse: AuthResponse,
  +basicProfile: BasicProfile,
};
type Props = {
  +children: Node,
};

let auth2;

const LoginProvider = ({ children }: Props): Node => {
  const [user, setUser] = useState<?User>();

  const updateGoogleUser = useCallback((user: ?GoogleAuthUser) => {
    const basicProfile = user?.getBasicProfile();
    const authResponse = user?.getAuthResponse();

    if (basicProfile != null && authResponse != null && !isObjectEmpty(authResponse)) {
      setUser({ basicProfile, authResponse });
      const authToken = authResponse.id_token;
      localStorage.setItem(TOKEN_KEY, authToken);
    } else {
      setUser(null);
      localStorage.removeItem(TOKEN_KEY);
    }
  }, []);

  const userChanged = useCallback(
    (user) => {
      updateGoogleUser(user);
    },
    [updateGoogleUser],
  );

  const refreshValues = useCallback(() => {
    if (auth2) {
      updateGoogleUser(auth2.currentUser.get());
    }
  }, [updateGoogleUser]);

  const initSigninV2 = useCallback(() => {
    auth2 = globalThis.gapi.auth2.init({
      client_id: '217427830380-6i8cjcbdp4mnft3ahdaln6m0kha8cdps.apps.googleusercontent.com',
      scope: 'profile email',
    });

    // Listen for changes to current user.
    auth2.currentUser.listen(userChanged);

    // Sign in the user if they are currently signed in.
    if (auth2.isSignedIn.get() === true) {
      auth2.signIn();
    }

    // Start with the current live values.
    refreshValues();
  }, [refreshValues, userChanged]);

  useEffect(() => {
    if (auth2 == null) {
      globalThis.gapi.load('auth2', initSigninV2);
    }
  }, [initSigninV2]);

  const state = useMemo(() => ({ user }), [user]);
  return <LoginContext.Provider value={state}>{children}</LoginContext.Provider>;
};

function useGoogleUser(): ?User {
  const context = useContext(LoginContext);
  return context?.user;
}

function signOut(): Promise<void> {
  return globalThis.gapi.auth2.getAuthInstance().signOut();
}

function renderSignInButton(id: string) {
  globalThis.gapi.signin2.render(id, {
    scope: 'email profile',
  });
}

export { LoginProvider, useGoogleUser, signOut, renderSignInButton };
