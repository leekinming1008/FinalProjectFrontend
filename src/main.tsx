import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CartPage from "./Pages/CartPage";
import WishList from "./Pages/WishList";
import UserPage from "./Pages/UserPage";
import LoginPage from "./Pages/LoginPage";
import ProductDetail from "./Pages/ProductDetails";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

import SignUp from "./Pages/SingUp";
import EditPage from "./Pages/EditPage";
import CreateProductPage from "./Pages/CreateProductPage";
import CreateCommentPage from "./Pages/CreateCommitPage";
import CreatePostPage from "./Pages/CreatePostPage";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/CartPage",
        element: <CartPage />,
      },
      {
        path: "/WishList",
        element: <WishList />,
      },
      {
        path: "/UserPage/:selecteduserID",
        element: <UserPage />,
      },
      {
        path: "/editProduct/:id",
        element: <EditPage />,
      },
      {
        path: "/createProduct",
        element: <CreateProductPage />,
      },
      {
        path: "/createComment/:selecteduserID",
        element: <CreateCommentPage />,
      },
      {
        path: "/createPost",
        element: <CreatePostPage />,
      },
      // {
      //   path: "/LoginPage",
      //   element: <LoginPage />,
      // },
      {
        path: "/ProductDetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={browserRouter} />
  </>
);
