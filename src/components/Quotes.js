import axios from "axios";
import React, { useEffect, useState } from "react";
const Quotes = () => {
  const [quotes, setQuotes] = useState();
  useEffect(() => {
    const random = Math.floor(Math.random() * 1643 - 1);
    (async () => {
      try {
        const quotesRes = await axios.get("https://type.fit/api/quotes");
        setQuotes(quotesRes.data[random].text);
      } catch (error) {
        console.log("Error:", error);
      }
    })();
  }, []);
  return (
    <div className="quotes-cont">
      <p className="quotes-para">{quotes}</p>
    </div>
  );
};

export { Quotes };
