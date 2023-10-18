import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getExchanges, limit } from "../network/apis";
import { Exchange } from "../utils/types";

export default function Directory() {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    async function fetchExchanges() {
      const data = await getExchanges();
      setExchanges(data);
    }
    fetchExchanges();
  }, []);

  return (
    <section className="frame">
      <code className="center green">
        CryptoCurrency exchanges on Coingecko
      </code>
      <code className="italic">
        Exchanges list&nbsp;
        <span className="yellow">limited to {limit}:</span>
      </code>

      <main className="card">
        <div className="grid">
          <span className="underline bold"> Name </span>
          <span className="underline bold"> Country </span>
          <span className="underline bold"> Url </span>
          <span className="underline bold"> Logo </span>
          <span className="underline bold"> Trust rank </span>
        </div>

        <div>
          {exchanges &&
            exchanges.length !== 0 &&
            exchanges.map((exchange, index) => (
              <Link
                to={`/exchanges/${exchange.id}`}
                key={exchange.id}
                className="grid"
              >
                <span>{exchange.name}</span>
                <span>{exchange.country}</span>
                <span className="break">{exchange.url}</span>
                <img src={exchange.image} alt={`${exchange.name} logo`} />
                <span>{exchange.trust_score_rank}</span>
              </Link>
            ))}
        </div>
      </main>
    </section>
  );
}
