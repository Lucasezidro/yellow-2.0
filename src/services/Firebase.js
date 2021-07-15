import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAjBM2elm5ctSIEHBmWUihdUpdaVv1347I",
    authDomain: "yellow-2-8177e.firebaseapp.com",
    databaseURL: "https://yellow-2-8177e-default-rtdb.firebaseio.com",
    projectId: "yellow-2-8177e",
    storageBucket: "yellow-2-8177e.appspot.com",
    messagingSenderId: "114863463078",
    appId: "1:114863463078:web:e507278ea5978d9c1e3267",
    measurementId: "G-S7CR0W0H3C"
  };

  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth()
  const database = firebase.database()

  export { firebase, auth, database }