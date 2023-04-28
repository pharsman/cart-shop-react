import { createBrowserRouter } from "react-router-dom";

// import { NavLayout } from "./NavLayout.jsx";

import { Home } from "./pages/Home/Home.jsx";
import { Cart } from "./pages/Carts/Cart.jsx";
import { Inner } from "./pages/Inner/Inner.jsx";
import { NotFound } from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  // {
  // path: "",
  // element: <NavLayout />,
  // children: [
  {
    path: "",
    element: <Home />,
    index: true,
  },
  { 
    path: "cart",
    element: <Cart />,
  },
  {
    path: "inner",
    element: <Inner />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  // ],
  // },
]);

export default router;
