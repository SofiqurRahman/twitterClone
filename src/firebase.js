import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCGSkisOlHb5GNfQ6XmRay8KCcZo4NfeuA",
  authDomain: "twitterclone-ca855.firebaseapp.com",
  databaseURL: "https://twitterclone-ca855.firebaseio.com",
  projectId: "twitterclone-ca855",
  storageBucket: "twitterclone-ca855.appspot.com",
  messagingSenderId: "951571899306",
  appId: "1:951571899306:web:a9993aac95b6a58a1541d3",
  measurementId: "G-ERTBRP0GXF"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;