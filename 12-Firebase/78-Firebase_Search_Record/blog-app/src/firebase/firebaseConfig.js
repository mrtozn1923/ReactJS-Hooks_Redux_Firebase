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

//once metodu ile veri bir seferde okunur ve bağlantı koparılır.
// database.ref()
//     .once("value")
//     .then((snapshot)=>{
//         const blog=snapshot.val();
//         console.log(blog);
//     })
//     .catch(e=>{console.log("Okuma hatası")});

    
// database.ref("author")
// .once("value")
// .then((snapshot)=>{
//     const blog=snapshot.val();
//     console.log(blog);
// })
// .catch(()=>{console.log("Okuma hatası")});

// database.ref("author/name")
// .once("value")
// .then((snapshot)=>{
//     const blog=snapshot.val();
//     console.log(blog);
// })
// .catch(()=>{console.log("Okuma hatası")});

//on metodu ile veritabanında bir değişiklik olduğunda tekrar veriyi almak için
database.ref()
    .on("value",(snapshot)=>{
        const blog=snapshot.val();
        console.log(blog);
    });

setTimeout(() => {
   database.ref("title").set("updated blog title 1"); 
}, 3000);

setTimeout(() => {
    // database.ref("title").set("updated blog title 2"); 
    database.ref().off(); //bağlantıyı kopartmak için
 }, 6000);

 setTimeout(() => {
    database.ref("title").set("updated blog title 3"); 
 }, 9000);