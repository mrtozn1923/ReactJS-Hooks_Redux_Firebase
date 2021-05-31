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

// const blogs=[
//     {
//         id:"1",
//         title:"blog title 1"
//     },
//     {
//         id:"2",
//         title:"blog title 2"
//     },
//     {
//         id:"3",
//         title:"blog title 3"
//     }
// ]

// const users=[
//     {
//         id:1,
//         name:"Mert"
//     },
//     {
//         id:2,
//         name:"Mehmet"
//     }
// ]

// database.ref().set({
//     blogs:blogs,
//     users:users
// });

//------------------------------

const blogs={
    101:{
        id:"1",
        title:"blog title 1"
    },
    102:{
        id:"2",
        title:"blog title 2"
    },
}
const users={
    "mrt":{
        name:"Mert",
        surname:"Özen"
    },
    "mhmt":{
        name:"Mehmet",
        surname:"Özen"
    },
}


// database.ref().set({
//     blogs,
//     users
// });
//okuma
database.ref("blogs").once("value").then((snapshot)=>{
    console.log(snapshot.val());
});

database.ref("blogs/101").once("value").then((snapshot)=>{
    console.log(snapshot.val());
});

database.ref("users/mrt").once("value").then((snapshot)=>{
    console.log(snapshot.val());
});
//ekleme
// database.ref("blogs").push({
//     id:"3",
//     title:"blog title 3",
// })
// database.ref("blogs").push({
//     id:"4",
//     title:"blog title 4",
// })

//-------------
