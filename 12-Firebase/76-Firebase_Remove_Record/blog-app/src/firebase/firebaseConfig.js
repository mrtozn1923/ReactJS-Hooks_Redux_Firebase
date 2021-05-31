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

// database.ref().set({
//     title:"blog title 1",
//     description:"blog description 1",
//     author:{
//         name:"Mert",
//         surname:"Özen"
//     }
// }).then(()=>{
//     console.log("kayıt eklendi");
//     database.ref("tags")
//     .set(["react","angular","vue"])
//     .then(()=>{
//         console.log("etiketler eklendi.");
//     })
//     .catch((err)=>{
//         console.log("hata",err);
//     })
// })
// .catch((err)=>{
//     console.log("hata",err);
// });

// database.ref("title")
//     .remove()
//     .then(()=>{
//         console.log("title removed");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// database.ref("author/name")
//     .remove()
//     .then(()=>{
//         console.log("name removed");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//tümünü silme
// database.ref()
//     .remove()
//     .then(()=>{
//         console.log("record removed");
//     })
//     .catch((err)=>{
//         console.log(err);
//     });

//tümünü silme
// database.ref.set(null);

