import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getExchangeById } from "../network/apis";
import type { ExchangeID, ExchangeDetails } from "../utils/types";

const CryptoExchangeDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<ExchangeID>();
  const [exchangeDetails, setExchangeDetails] =
    useState<ExchangeDetails | null>(null);

  useEffect(() => {
    async function fetchExchangeDetails (): Promise<void> {
      if (id != null) {
        const data = await getExchangeById(id);
        setExchangeDetails(data);
      }
    }
    void fetchExchangeDetails();
  }, [id]);

  if (exchangeDetails === null) return <p className="yellow">Loading ...</p>;

  return (
    <section className="details grid padding">
      <code className="green header grid">Exchange details</code>
      <p> name: {exchangeDetails.name}</p>
      <p> Country: {exchangeDetails.country}</p>
      <p> Trust rank: {exchangeDetails.trust_score_rank}</p>
      <span>
        Logo: <img src={exchangeDetails.image} alt={exchangeDetails.name} />
      </span>
      <p> Year of establishment: {exchangeDetails.year_established}</p>
      <ul>
        <p className="italic">Social media links:</p>

        {exchangeDetails.facebook_url !== '' && (
          <li>
            <a
              href={exchangeDetails.facebook_url}
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>
        )}
        {exchangeDetails.reddit_url !== '' && (
          <li>
            <a
              href={exchangeDetails.reddit_url}
              rel="noreferrer"
              target="_blank"
            >
              Reddit
            </a>
          </li>
        )}

        {exchangeDetails.telegram_url !== '' && (
          <li>
            <a
              href={exchangeDetails.telegram_url}
              rel="noreferrer"
              target="_blank"
            >
              Telegram
            </a>
          </li>
        )}

        {exchangeDetails.slack_url !== '' && (
          <li>
            <a
              href={exchangeDetails.slack_url}
              rel="noreferrer"
              target="_blank"
            >
              Slack
            </a>
          </li>
        )}

        {exchangeDetails.other_url_1 !== '' && (
          <li>
            <a
              href={exchangeDetails.other_url_1}
              rel="noreferrer"
              target="_blank"
            >
              {(new URL(exchangeDetails.other_url_1)).hostname.replace(
                /www.|.com/g,
                (matched) => '',
              )}
            </a>
          </li>
        )}

        {exchangeDetails.other_url_2 !== '' && (
          <li>
            <a
              href={exchangeDetails.other_url_2}
              rel="noreferrer"
              target="_blank"
            >
              {(new URL(exchangeDetails.other_url_2)).hostname.replace(
                /www.|.com/g,
                (matched) => '',
              )}
            </a>
          </li>
        )}

        {exchangeDetails.twitter_handle !== '' && (
          <li>
            <a
              href={'http://twitter.com/' + exchangeDetails.twitter_handle}
              rel="noreferrer"
              target="_blank"
            >
              Twitter Handle
            </a>
          </li>
        )}
      </ul>
      <p>
        Description:
        {exchangeDetails?.description.length === 0
          ? 'not available'
          : exchangeDetails.description}
      </p>
      <button type="button" onClick={() => { navigate(-1) }} className="pointer">
        Back
      </button>
    </section>
  );
}

export default CryptoExchangeDetails;
