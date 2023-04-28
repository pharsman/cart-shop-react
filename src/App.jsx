import router from "./router";
import { RouterProvider } from "react-router-dom";

import { Header } from "./components/Header/Header.jsx";
import { Products } from "./components/Products/Products.jsx";

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
