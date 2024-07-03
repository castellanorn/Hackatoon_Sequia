import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";



const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        
      </header>
      <div className="flex flex-grow">
        <main className="bg-[color:var(--col-components-bg)] flex flex-col w-full items-center py-5 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;