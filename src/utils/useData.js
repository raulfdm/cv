import { useState, useEffect } from 'react';
import { useList } from 'react-firebase-hooks/database';

import { useAuth } from 'src/config/auth';
import firebase from 'src/config/firebase';

const save = userId => formData => {
  return firebase
    .database()
    .ref(userId)
    .set({ ...formData });
};

export function useData() {
  const [data, setData] = useState({});

  const { user } = useAuth();

  const [snapshots, loading] = useList(firebase.database().ref(user.uid));

  useEffect(() => {
    if (snapshots.length > 0) {
      const sanatizedData = snapshots.reduce((acc, snap) => {
        acc[snap.key] = snap.val();
        return acc;
      }, {});

      setData(sanatizedData);
    }
  }, [loading]);

  return { data, isLoadingData: loading, submitCv: save(user.uid) };
}
