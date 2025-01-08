import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="relative min-h-screen text-white bg-[#101428] overflow-x-hidden">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <img src="./public/coin1.png" alt="" className="coin1 absolute" />
        <img src="./public/coin2.png" alt="" className="coin2 absolute" />
        <img src="./public/coin3.png" alt="" className="coin3 absolute" />
        <img src="./public/coin4.png" alt="" className="coin4 absolute" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
