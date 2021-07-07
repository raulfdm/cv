import { useEffect } from 'react';
import { useCvService } from 'src/config/useCvService';

const Logout = () => {
  const { service } = useCvService();

  useEffect(() => {
    if (service) {
      service.logout();
    }
  }, [service]);

  return null;
};

export default Logout;
