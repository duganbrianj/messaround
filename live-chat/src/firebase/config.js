import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvHn3l-lZ8PlaLDsZrlMdGuus7qGTXfak",
    authDomain: "messaround-8add8.firebaseapp.com",
    projectId: "messaround-8add8",
    storageBucket: "messaround-8add8.appspot.com",
    messagingSenderId: "1011504739443",
    appId: "1:1011504739443:web:f010325de9595ea735a606"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }