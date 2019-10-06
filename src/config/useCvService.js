import { useState, useEffect } from 'react';
import CvService from 'src/CvService';

export const useCvService = () => {
  const [service, setService] = useState(null);

  /* ComponentDidMount */
  useEffect(() => {
    setService(new CvService());
  }, []);

  return { service };
};
