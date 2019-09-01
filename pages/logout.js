import { useEffect } from 'react';
import { useAuth } from 'src/config/auth';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  });

  return null;
};

export default Logout;
