import axios from 'axios';

const FIREBASE_KEYS = {
  idToken: 'firebase_id_token',
  authToken: 'firebase_auth_token',
  userId: 'firebase_user_id',
};

class CvService {
  constructor() {
    this.retrieveAuthData();
    this.baseUrl = 'https://personal-cv-87ac0.firebaseio.com';
    this.dbUrl = `${this.baseUrl}/${this.userId}.json`;
  }

  saveAuthData({ userId, idToken, authToken }) {
    this.userId = userId;
    this.idToken = idToken; // A Firebase Auth ID token for the authenticated user.
    this.authToken = authToken; // A Firebase Auth refresh token for the authenticated user.

    localStorage.setItem(FIREBASE_KEYS.authToken, authToken);
    localStorage.setItem(FIREBASE_KEYS.idToken, idToken);
    localStorage.setItem(FIREBASE_KEYS.userId, userId);
  }

  retrieveAuthData() {
    this.userId = localStorage.getItem(FIREBASE_KEYS.userId);
    this.idToken = localStorage.getItem(FIREBASE_KEYS.idToken);
    this.authToken = localStorage.getItem(FIREBASE_KEYS.authToken);
  }

  async login(email, password) {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`,
        { email, password, returnSecureToken: true },
      );

      const {
        idToken, // A Firebase Auth ID token for the authenticated user.
        refreshToken: authToken, // A Firebase Auth refresh token for the authenticated user.
        localId: userId,
      } = response.data;

      const data = { userId, idToken, authToken };

      this.saveAuthData(data);

      return data;
    } catch (error) {
      return error;
    }
  }

  logout() {
    localStorage.removeItem(FIREBASE_KEYS.authToken);
    localStorage.removeItem(FIREBASE_KEYS.idToken);
    localStorage.removeItem(FIREBASE_KEYS.userId);

    window.location.href = '/login';
  }

  get isAuthenticated() {
    /* TODO: Implement a way to check if token is still valid */
    return this;
  }

  getData() {
    /* TODO IMPLEMENT IT */
    // if (!this.isAuthenticated) {
    //   throw new Error('User is not authenticted');
    // }

    return axios.get(this.dbUrl).then(res => res.data);
  }

  saveData(cvData = {}) {
    return axios.patch(`${this.dbUrl}?auth=${this.idToken}`, cvData).then(res => res.data);
  }
}

export default CvService;
