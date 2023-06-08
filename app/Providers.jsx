import React from 'react';
import userProvider from './userProvider';
import { UserProvider } from './userProvider';
import { CookieProviders } from './cookieProviders';
const Providers = ({ children }) => {
  return (
    <>
      <UserProvider>
        <CookieProviders>{children}</CookieProviders>
      </UserProvider>
    </>
  );
};

export default Providers;
