import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import NavBar from "../common/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar />
      <div className="flex flex-grow">
        <main className=" flex flex-col w-full items-center py-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


