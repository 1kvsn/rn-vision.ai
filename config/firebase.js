import * as firebase from "firebase";
import {FIREBASE_API_KEY, APP_ID, MESSAGING_SENDER_ID} from '../keys';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "rn-vision-project.firebaseapp.com",
  databaseURL: "https://rn-vision-project.firebaseio.com",
  projectId: "rn-vision-project",
  storageBucket: "rn-vision-project.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;