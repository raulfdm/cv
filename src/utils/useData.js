import { useState, useEffect } from 'react';
import axios from 'axios';

const urlV0 = 'https://personal-cv-87ac0.firebaseio.com/new-cv.json';

export function useData(url = urlV0) {
  const [data, setData] = useState({});
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setData(response.data || {});
      setIsLoadingData(false);
    }
    fetchData();
  }, []);

  return { data, isLoadingData };
}
