import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main style={{ padding: "20px" }}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
