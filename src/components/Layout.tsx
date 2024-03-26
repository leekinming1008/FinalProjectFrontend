import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Navbar.tsx";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
