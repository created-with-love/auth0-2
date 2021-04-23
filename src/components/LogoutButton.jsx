import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const history = useHistory();

  const logOut = () => {
    logout();
    history.push('/auth0-2');
  };
  return isAuthenticated && <button onClick={logOut}>Log Out</button>;
};

export default LogoutButton;
