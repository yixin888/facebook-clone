import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBJ-EJVDyhLfDxUMw23QlxcSu_HdgNtibQ",
    authDomain: "facebook-clone-717dc.firebaseapp.com",
    projectId: "facebook-clone-717dc",
    storageBucket: "facebook-clone-717dc.appspot.com",
    messagingSenderId: "808226652842",
    appId: "1:808226652842:web:2a7c2fb9263ee2532886d3",
    measurementId: "G-KRJ2C5H8SB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;