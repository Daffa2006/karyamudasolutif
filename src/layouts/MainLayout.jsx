import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "../components/Navbar";

async function loadPreline() {
  return import("preline/dist/index.js");
}
export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === "function"
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
