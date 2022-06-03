import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBLRPlRAX9vMMiNxb0pVyDZNqeM8ixcpDI",
    authDomain: "playlists-5e2b1.firebaseapp.com",
    projectId: "playlists-5e2b1",
    storageBucket: "playlists-5e2b1.appspot.com",
    messagingSenderId: "193608195649",
    appId: "1:193608195649:web:da54c585a8ef7ede5270c0"
  };
// init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  //timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp}