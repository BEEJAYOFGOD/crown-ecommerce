import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ShopLayout from "./layouts/ShopLayout";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { userContext } from "./contexts/userContext";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInUp from "./pages/sign-in-up/sign-in-up.component";
import { onSnapshot } from "firebase/firestore";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />

      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<ShopPage />} />
      </Route>

      <Route path="/signin" element={<SignInUp />} />
    </Route>
  )
);

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        const unsubscribeFromSnapshot = onSnapshot(userRef, (userSnapshot) => {
          setCurrentUser({
            id: userSnapshot.id,
            ...userSnapshot.data(),
          });
        });

        console.log(currentUser);

        // Ensure snapshot listener is cleaned up
        return () => unsubscribeFromSnapshot();
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribeFromAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <userContext.Provider value={{ currentUser, setCurrentUser }}>
          <RouterProvider router={router} />
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
