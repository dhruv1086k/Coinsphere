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
      <div>HOme</div>
    </>
  );
}
