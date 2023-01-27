import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBfCjQduV9uQS1XbonRXVZAoi_aDNFLj64",
  authDomain: "la-coctelera23.firebaseapp.com",
  projectId: "la-coctelera23",
  storageBucket: "la-coctelera23.appspot.com",
  messagingSenderId: "180437417867",
  appId: "1:180437417867:web:2c8e37580db8a454d0798e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getSingleItems(id){

    let docRef = doc(DB, "productos", id);

    let docSnapshot = await getDoc(docRef);

    let item = docSnapshot.data();
    item.id = docSnapshot.id;

    return item;
}

export async function getItems(){
  const collectionRef = collection(DB, "productos");
  let docSnapshot = await getDocs(collectionRef);

  let docsArray = docSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item
  });

  return dataDocs

}

export async function getItemsCategory(categoryID){
  const collectionRef = collection(DB, "productos");

  let q = query(collectionRef, where("category", "==", categoryID) );

  let docSnapshot = await getDocs(q);
  let docsArray = docSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return  { ...doc.data(), id: doc.id };
  });

  return dataDocs;

}

// export async function exportItemsToFirestore(){
//   const productos = [];

//   const collectionRef = collection(DB, "productos");

//   addDoc(collectionRef, productos[0]).then( respuesta => console.log(respuesta))
// }