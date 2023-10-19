import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getExchanges, limit } from "../network/apis";
import { Exchange } from "../utils/types";

const Directory: React.FC = () => {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    async function fetchExchanges() {
      const data = await getExchanges();
      setExchanges(data);
    }
    fetchExchanges();
  }, []);

  return (
    <section className="frame grid">
      <code className="header grid green">
        CryptoCurrency exchanges on Coingecko
      </code>
      <code className="italic">
        Exchanges list&nbsp;
        <span className="yellow">limited to {limit}:</span>
      </code>

      <main className="card grid">
        <div className="list grid">
          <span> Name </span>
          <span> Country </span>
          <span> Url </span>
          <span> Logo </span>
          <span> Trust rank </span>
        </div>

        <ul>
          {exchanges &&
            exchanges.length !== 0 &&
            exchanges.map((exchange, index) => (
              <Link to={`/exchanges/${exchange.id}`} key={exchange.id}>
                <li className="list grid">
                  <span>{exchange.name}</span>
                  <span>{exchange.country}</span>
                  <span className="break">{exchange.url}</span>
                  <img src={exchange.image} alt={`${exchange.name} logo`} />
                  <span>{exchange.trust_score_rank}</span>
                </li>
              </Link>
            ))}
        </ul>
      </main>
    </section>
  );
}

export default Directory;