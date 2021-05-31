import firebase from 'firebase/app';
import 'firebase/database';

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

export {database as default}