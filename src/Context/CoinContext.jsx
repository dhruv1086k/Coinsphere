import { useState } from "react";
import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState();
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoin = async () => {
    const options = { 
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-PjXXkiyAxjP6BQoQgXa5PoFz",
      },
    };
  };
};
