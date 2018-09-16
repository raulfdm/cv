import { firebaseAuth, googleAuthProvider } from '../globals/firebase';

const firebaseLocalStorage = 'firebaseToken';

const saveToken = newToken => localStorage.setItem(firebaseLocalStorage, newToken);

export const removeToken = () => localStorage.removeItem(firebaseLocalStorage);

export const getToken = () => localStorage.getItem(firebaseLocalStorage);

export const LoginWithGoogle = () => {
  return firebaseAuth()
    .signInWithPopup(googleAuthProvider)
    .then(({ credential: { accessToken } }) => {
      saveToken(accessToken);
      return accessToken;
    })
    .catch(err => {
      removeToken();
      return err;
    });
};
