import Meta from "./Meta";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
