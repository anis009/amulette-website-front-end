import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import PhotosLibraryPage from "./pages/PhotosLibrary";
import ContactUs from "./pages/ContactUs";
import GetAppsPage from "./pages/GetApps";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/Products";
import { useState } from "react";
import Community from "./pages/Community";

function App() {
  const [librayFilterOpen, setLibrayFilterOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout
          librayFilterOpen={librayFilterOpen}
          setLibrayFilterOpen={setLibrayFilterOpen}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/photos-library",
          element: (
            <PhotosLibraryPage
              librayFilterOpen={librayFilterOpen}
              setLibrayFilterOpen={setLibrayFilterOpen}
            />
          ),
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/community",
          element: <Community />,
        },
        {
          path: "/get-the-app",
          element: <GetAppsPage />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/product-details",
          element: <ProductDetailsPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
