import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7GHOc7cj4v9BRL19ho0GhkDjuB1GVb6k",
  authDomain: "crown-clothing-1c650.firebaseapp.com",
  projectId: "crown-clothing-1c650",
  storageBucket: "crown-clothing-1c650.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "998085225237",
  appId: "1:998085225237:web:ac3dbb1d747737d8f3d71c",
  measurementId: "G-MKNTDD876Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const cartItemRef = doc(
  firestore,
  "users",
  "dcbakbakjbola",
  "cartItems",
  "specificItemId"
);
