import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/Shared/Navbar";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <div className="max-md:w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
