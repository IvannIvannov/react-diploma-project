import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-main">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
