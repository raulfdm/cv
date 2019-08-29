import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
