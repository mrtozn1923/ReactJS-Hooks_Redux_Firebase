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

// database.ref("products").push({
//     name:"Samsung S5",
//     price:3000,
//     isApproved:false
// });
// database.ref("products").push({
//     name:"Samsung S6",
//     price:4000,
//     isApproved:false
// });
// database.ref("products").push({
//     name:"Samsung S7",
//     price:5000,
//     isApproved:false
// });

// database.ref("products")
//     .once("value")
//     .then((snapshot)=>{
//         const products=[];

//         snapshot.forEach((product)=>{
//             products.push({
//                 id:product.key,
//                 ...product.val()
//             })
//         });

//         console.log(products);
//     })

database.ref("products").on("value",(snapshot)=>{
    const products=[];

        snapshot.forEach((product)=>{
            products.push({
                id:product.key,
                ...product.val()
            })
        });

        console.log(products);
})

//bir eleman silindiğinde silinen elemanın bilgilerini anlık olarak alma
// database.ref("products").on("child_removed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });
//bir eleman güncellendiğinde güncellenen elemanın bilgilerini anlık olarak alma
// database.ref("products").on("child_changed",(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

database.ref("products").push({
    name:"Samsung S8",
    price:5000,
    isApproved:false
});
//yeni bir eleman eklendiğinde eklenen elemanın bilgilerini anlık olarak alma
database.ref("products").on("child_added",(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})