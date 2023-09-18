import firebase from 'firebase/app';
import 'firebase/auth';
import secrets from './secrets'; // Import the secrets.js file

// Destructure the Firebase configuration from secrets.js
const { firebaseConfig } = secrets;

// Initialize Firebase with the provided configuration
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
