import { firebaseAuth } from '../globals/firebase';

const firebaseLocalStorage = 'firebaseToken';

const saveToken = newToken => localStorage.setItem(firebaseLocalStorage, newToken);

const removeToken = () => localStorage.removeItem(firebaseLocalStorage);

export const getToken = () => localStorage.getItem(firebaseLocalStorage);

export const signOut = () =>
  firebaseAuth()
    .signOut()
    .then(removeToken);

export const signIn = (email, password) => {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user: { m: token } }) => {
      saveToken(token);
      return token;
    });
};
