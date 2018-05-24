import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCqGDoMqHoRMp8u917L5mbsqO0LKrXpmjw",
    authDomain: "resume-db248.firebaseapp.com",
    databaseURL: "https://resume-db248.firebaseio.com/",
    projectId: "resume-db248",
    storageBucket: "resume-db248.appspot.com",
    messagingSenderId: "1006018239430",
    auth: "/.json?auth=EBRWKRaOxTSi7t9dAdeRL4sbv74SWh4VSUJErfgI"
  };
firebase.initializeApp(config);

export default config;
