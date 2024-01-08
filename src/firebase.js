import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnXtcCb8TgZrF1WDZnFN5-vgHr-nBdcWE",
  authDomain: "js-times-app.firebaseapp.com",
  projectId: "js-times-app",
  storageBucket: "js-times-app.appspot.com",
  messagingSenderId: "515157280194",
  appId: "1:515157280194:web:8ddfa265fdde958f10425b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export{
  app
}