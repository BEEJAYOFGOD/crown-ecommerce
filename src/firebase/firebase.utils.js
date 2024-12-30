// Import the necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// Your Firebase configuration
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

// Initialize services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Configure Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Export Google Sign-In Function
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get the user reference from the Firestore database
  const userRef = doc(firestore, "users", userAuth.uid);

  // Get the user snapshot from the Firestore database
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    // Get the user properties from the userAuth object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create the user in the Firestore database
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};
