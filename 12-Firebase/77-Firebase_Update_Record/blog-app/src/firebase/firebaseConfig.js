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
})
.catch((err)=>{
    console.log("hata",err);
});

//set ile diğer tüm alanlar silinir sadece title güncellenir veya eklenir
// database.ref().set({
//     title:"blog title 2"
// });

//update ile sadece ilgili alanlar güncellenir
// database.ref().update({
//     title:"blog title 2",
//     description:"blog description 2"
// });

// database.ref().update({
//     title:"blog title 2",
//     description:"blog description 2",
//     author:{
//         name:"Mehmet",
//         surname:"Özen"
//     }
// });

// database.ref().update({
//     title:"blog title 2",
//     description:"blog description 2",
//     "author/name":"Mesut"
// });

// database.ref().update({
//     title:"blog title 2",
//     description:"blog description 2",
//     "author/name":"Mesut",
//     imageUrl:"1.jpg"
// });

database.ref("author").update({
    name:"Mesut"
});

