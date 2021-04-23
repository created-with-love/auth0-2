import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  console.log(window.location.origin.slice(7));

  return (
    isAuthenticated && (
      <button
        onClick={() =>
          logout({ returnTo: `${window.location.origin}/auth0-2` })
        }
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
