import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz6_l_hG-x_JHLG-p4tgr8DXxQlq8O5W4",
  authDomain: "billing-system-1ef6d.firebaseapp.com",
  projectId: "billing-system-1ef6d",
  storageBucket: "billing-system-1ef6d.appspot.com",
  messagingSenderId: "781701790148",
  appId: "1:781701790148:web:0f4464d5221f5501cfcc91",
  measurementId: "G-YNK9FHKMZ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };