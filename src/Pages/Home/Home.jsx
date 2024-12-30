import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../Context/CoinContext";

export default function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      setDisplayCoin(allCoin);
      console.log(displayCoin);
    } else {
      setDisplayCoin([]);
    }
  }, [allCoin]);

  return (
    <>
      <div className="w-full h-auto relative z-10 mt-44">
        <h1 className="mx-auto text-center text-6xl max-w-[700px] font-semibold mt-24 text-[#FEE715] max-sm:text-5xl">
          Empower Your Crypto Journey Today
        </h1>
        <p className="text-center max-sm:text-sm max-sm:px-10 max-w-[650px] mx-auto mt-10">
          Discover, track, and master cryptocurrency trends with real-time
          insights, powerful tools, and secure portfolio management—all in one
          place.
        </p>
        <div className="w-full flex justify-center items-center mt-16">
          <div className="p-10 max-[520px]:p-5 rounded-lg bg-[rgba(255,255,255,.1)] z-10">
            <form
              action=""
              className="flex gap-10 max-[520px]:gap-5 w-[30vw] max-xl:w-[50vw] max-sm:w-[80vw] max-[520px]:flex-col"
            >
              <input
                type="text"
                placeholder="Search crypto... "
                className="bg-[rgba(255,255,255,.4)] text-white px-2 py-2 rounded-md outline-none border-none w-full"
              />
              <button
                type="submit"
                className="bg-[#FEE715] px-10 max-[520px]:py-2 text-black rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="mt-24 flex justify-center flex-col items-center gap-5">
          <h1 className="bg-[#FEE715] text-black px-5 py-3 rounded-full">
            Crypto Chart
          </h1>
          <h4>Crypto Market Trade And Metrics</h4>
        </div>
        <div className="crypto-table max-w-[800px] my-5 max-lg:max-w-[700px] max-md:max-w-auto m-auto max-[720px]:mx-5 rounded-lg bg-gradient-to-t from-[rgba(83,83,175,0.5)] to-[rgba(8,0,42,1)] max-sm:text-sm">
          <div className="table-layout grid py-[15px] px-[20px] items-center border-b-[1px] border-[#3c3c3c]">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className="text-center">24H Change</p>
            <p className="text-right max-md:hidden">Market Cap</p>
          </div>
          {displayCoin?.slice(0, 10).map((item, index) => (
            <a href={`/coin/${item.id}`} key={index}>
              <div
                key={index}
                className="table-layout grid rounded-lg py-[15px] px-[20px] items-center border-b-[1px] border-[#3c3c3c] cursor-pointer"
              >
                <p>{item.market_cap_rank}</p>
                <p className="flex justify-start items-center gap-2">
                  <img src={item.image} className="h-[30px]" alt="" />
                  {item.name}{" "}
                  <span className="max-[500px]:hidden">- {item.symbol}</span>
                </p>
                <p>
                  {currency?.symbol} {item.current_price.toLocaleString()}
                </p>
                <p
                  className={
                    item.price_change_percentage_24h > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                  style={{ textAlign: "center" }}
                >
                  {Math.floor(item.price_change_percentage_24h) / 100}
                </p>
                <p className="text-right max-md:hidden">
                  {currency?.symbol} {item.market_cap.toLocaleString()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
