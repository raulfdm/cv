import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBaFkiQ67qtERkJjxgCiY552_JwdcSdI3Y',
  authDomain: 'personal-cv-87ac0.firebaseapp.com',
  databaseURL: 'https://personal-cv-87ac0.firebaseio.com',
  projectId: 'personal-cv-87ac0',
  storageBucket: 'personal-cv-87ac0.appspot.com',
  messagingSenderId: '539911573701',
};

firebase.initializeApp(config);

export const cvDatabase = firebase
  .database()
  .ref()
  .child('cv');

export const firebaseAuth = firebase.auth;
