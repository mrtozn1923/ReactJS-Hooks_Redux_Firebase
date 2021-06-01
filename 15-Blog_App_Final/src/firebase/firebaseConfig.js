import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);

const database=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {database as default,googleAuthProvider, firebase};