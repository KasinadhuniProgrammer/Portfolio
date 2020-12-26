import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPvr4vz7OXjhDj3Jgd7XtUPOPQyCdhMgs",
    authDomain: "my-portfolio-f647f.firebaseapp.com",
    projectId: "my-portfolio-f647f",
    storageBucket: "my-portfolio-f647f.appspot.com",
    messagingSenderId: "350073125867",
    appId: "1:350073125867:web:cd6f6faa8841e2528137ae"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export { auth, provider };
export default db;  