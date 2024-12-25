import { useState } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  useLocation,
  Link,
  useParams,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import TopicLayout from "./layouts/TopicLayout";
import ShopLayout from "./layouts/ShopLayout";
import ShopPage from "./pages/shop/shop.component";

const TopicsList = () => {
  // console.log(props);
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Link to={`13`}>13th topic</Link>
      <h1>Topics page</h1>
    </div>
  );
};

const Home = () => {
  const location = useLocation();

  console.log(location);
  return (
    <div>
      <Link to={"/topics"}>Topics</Link>
      <h1>Home page</h1>
    </div>
  );
};
const TopicDetail = () => {
  const { hatId } = useParams();

  // alert(id);
  return (
    <div>
      <h1>Topic detail page: {hatId}</h1>
    </div>
  );
};

// export const TopicLoader = ({ params }) => {
//   const { topicId } = params;

//   return topicId;
// };
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="topics" element={<TopicLayout />}>
        <Route index element={<TopicsList />} />
        <Route path="/topics/:topicId" element={<TopicDetail />} />
      </Route>
      {/* <Route path="hats" element={<TopicLayout />}>
        <Route index element={<TopicsList />} />
        <Route path="/hats/:hatId" element={<TopicDetail />} />
      </Route> */}
      <Route path="shop" element={<ShopLayout />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Route>
  )
);

function App() {

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
