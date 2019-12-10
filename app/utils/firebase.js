import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDoPQO5bUzij7b-vXFTPVtyDfUdk5sk_L0",
  authDomain: "spa-sahra.firebaseapp.com",
  databaseURL: "https://spa-sahra.firebaseio.com",
  projectId: "spa-sahra",
  storageBucket: "spa-sahra.appspot.com",
  messagingSenderId: "429768369465",
  appId: "1:429768369465:web:62251a5548671353cfb4e8"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);