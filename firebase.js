// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAglMDGe9oUqnuUR8f9wzssgMqbxOBTBfk",
  authDomain: "pet-city-61fcb.firebaseapp.com",
  projectId: "pet-city-61fcb",
  storageBucket: "pet-city-61fcb.appspot.com",
  messagingSenderId: "770560525849",
  appId: "1:770560525849:web:8e0fddadae9a05863bcc88"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };