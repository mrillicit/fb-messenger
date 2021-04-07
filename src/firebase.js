import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBoD2wCGMIJQqqZZ_lxDHnTJozRbX11C2Q",
    authDomain: "facebook-messenger-app-c1c2b.firebaseapp.com",
    projectId: "facebook-messenger-app-c1c2b",
    storageBucket: "facebook-messenger-app-c1c2b.appspot.com",
    messagingSenderId: "905453372429",
    appId: "1:905453372429:web:48a75bc11aab4e47124144"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;