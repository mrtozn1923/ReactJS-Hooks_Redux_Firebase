import firebase from 'firebase';

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

database.ref().set({
    title:"blog title 1",
    description:"blog description 1",
    author:{
        name:"Mert",
        surname:"Özen"
    }
});
/*
database.ref("title").set("blog title 2");
database.ref("description").set("blog description 2");
database.ref("author").set({
    name:"Mehmet",
    surname:"Özen"
});*/

// database.ref("author/name").set("Mesut");
// database.ref("tags").set(["react","javascript","angular"]);