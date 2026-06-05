import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.includes("/quiz");

  return (
    <div className="app-layout">
      <Navbar />

      <main key={location.pathname} className="app-main">
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
