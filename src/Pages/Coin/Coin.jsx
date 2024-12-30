import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";
// import ChartItem from '../../components/chart/ChartItem'

export default function Coin() {
  const { coinId } = useParams();
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-PjXXkiyAxjP6BQoQgXa5PoFz",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.log("failed to load historical data", err);
    }
  };

  useEffect(() => {
    if (Array.isArray(allCoin)) {
      const selectedCoin = allCoin?.find((coin) => coin.id === coinId);
      setDisplayCoin(selectedCoin || null);
    } else {
      setDisplayCoin({});
    }
  }, [allCoin, coinId]);

  if (!displayCoin) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <img
            className="w-[5%]"
            src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-auto pt-[10vh] mb-10 flex flex-col items-center">
        <div className="py-10">
          <div className="w-24 h-24 mx-auto bg-white rounded-full p-3">
            <img src={displayCoin.image} alt="" />
          </div>
          <h1 className="mt-5 text-4xl font-semibold text-center">
            {displayCoin.name}
          </h1>
        </div>
        <div className="w-1/3 max-lg:w-1/2 max-sm:w-full px-16 max-[500px]:px-6 rounded-lg">
          {/* <ChartItem /> */}
        </div>
        <div className="mt-10 text-xl max-sm:px-10 max-sm:text-sm">
          <div className="flex justify-between items-center gap-24 my-3">
            <span>Coin Rank</span>
            <span>{displayCoin.market_cap_rank}</span>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-24 my-3">
            <span>Market Cap Change Percentage (24hr)</span>
            <span
              className={
                displayCoin.market_cap_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {displayCoin?.market_cap_change_percentage_24h &&
                displayCoin.market_cap_change_percentage_24h.toLocaleString()}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-24 my-3">
            <span>Price Change Percentage</span>
            <span
              className={
                displayCoin.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {displayCoin?.price_change_percentage_24h &&
                displayCoin.price_change_percentage_24h.toLocaleString()}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-24 my-3">
            <span>High (24 hour)</span>
            <span>
              {currency.symbol}
              {displayCoin.high_24h}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center gap-24 my-3">
            <span>Low (24 hour)</span>
            <span>
              {currency.symbol}
              {displayCoin.low_24h}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
