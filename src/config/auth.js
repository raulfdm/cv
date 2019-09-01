import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'src/config/firebase';

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = '/login';
    });
};

const login = ({ email, password }) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const useAuth = () => {
  const [user, initialising, error] = useAuthState(firebase.auth());

  const isChecking = initialising === true;
  const isAuth = isChecking === false && !!user;

  return { isAuth, user, initialising, error, logout, isChecking, login };
};
