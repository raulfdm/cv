import { useState, useEffect } from 'react';
import axios from 'axios';

export function useData() {
  const [data, setData] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://personal-cv-87ac0.firebaseio.com/cv.json');
      setData(response.data);
      setIsLoadingData(false);
    }
    fetchData();
  }, []);

  return { data, isLoadingData };
}
