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

database.ref().set({
    title:"blog title 1",
    description:"blog description 1",
    author:{
        name:"Mert",
        surname:"Özen"
    }
}).then(()=>{
    console.log("kayıt eklendi");
    database.ref("tags")
    .set(["react","angular","vue"])
    .then(()=>{
        console.log("etiketler eklendi.");
    })
    .catch((err)=>{
        console.log("hata",err);
    })
})
.catch((err)=>{
    console.log("hata",err);
});
