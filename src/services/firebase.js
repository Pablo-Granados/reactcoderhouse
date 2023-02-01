import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, documentId, writeBatch} from "firebase/firestore";


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

export async function createBuyOrder(order){
  const collectionRef = collection(DB, "orders");

  let newOrder = await addDoc(collectionRef, order);
  return newOrder.id
}

export async function createBuyOrder_WithStockControl(order) {
  const collectionRef = collection(DB, "orders");
  const collectionProductsRef = collection(DB, "productos");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));
  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;

    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    if (stockDispoible < countItemInCart)
      throw new Error(
        `Stock no disponible para el producto para el producto ${doc.id}`
      );
    else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
  });

  await batch.commit();
  let newOrder = await addDoc(collectionRef, order);
  return newOrder.id;
}
