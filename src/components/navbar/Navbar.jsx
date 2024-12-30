import { useContext, useState } from "react";
import { CoinContext } from "../../Context/CoinContext";
import "remixicon/fonts/remixicon.css";

export default function Navbar() {
  const { setCurrency } = useContext(CoinContext);
  const [showMenu, setShowMenu] = useState(false);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="fixed w-full h-[10vh] flex justify-between items-center border-b-[1px] border-b-[#525252] px-20 max-lg:px-5 z-[99] bg-[#101428]">
        <h1 className="text-2xl font-semibold">
          Coin<span className="text-[#FEE715]">Sphere</span>
        </h1>
        <ul
          className={`flex gap-10 ${
            showMenu
              ? "max-md:absolute max-md:bg-[#101428] max-md:mt-[10vh] max-md:py-10 max-md:px-4 max-md:top-0 max-md:left-0 max-md:flex max-md:flex-col max-md:w-full max-md:text-center"
              : "max-md:hidden"
          }`}
        >
          <a href="/" className="text-[#FEE715]">
            <li>Home</li>
          </a>
          <a href="" className="hover:text-[#FEE715] transition-all">
            <li>Trade</li>
          </a>
          <a href="" className="hover:text-[#FEE715] transition-all">
            <li>Market</li>
          </a>
          <a href="" className="hover:text-[#FEE715] transition-all">
            <li>Learn</li>
          </a>
          {showMenu && (
            <div className="flex justify-center">
              <button className="flex items-center gap-2 bg-[#FEE715] px-4 py-2 max-md:px-3 max-md:py-1 max-md:text-sm rounded-full text-black">
                Sign Up{" "}
                <img src="/public/arrow_icon.png" className="w-4 h-4" alt="" />
              </button>
            </div>
          )}
        </ul>
        <div className="flex gap-5">
          <select
            name=""
            id=""
            className="px-2 rounded-md bg-transparent bg-[#101428]"
            onChange={currencyHandler}
          >
            <option className="bg-[#101428]" value="usd">
              USD
            </option>
            <option className="bg-[#101428]" value="inr">
              INR
            </option>
            <option className="bg-[#101428]" value="eur">
              EUR
            </option>
          </select>
          <button className="flex max-sm:hidden gap-2 justify-between items-center bg-[#FEE715] px-4 py-2 max-md:px-3 max-md:py-1 max-md:text-sm rounded-full text-black">
            Sign Up{" "}
            <img
              src="/public/arrow_icon.png"
              className="max-md:text-sm"
              alt=""
            />
          </button>
          <div
            className="justify-center items-center hidden max-md:flex"
            onClick={menuHandler}
          >
            <i class="ri-menu-line text-3xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </>
  );
}
