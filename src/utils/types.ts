import type { FC } from "react";

export interface Route {
  key: string;
  title: string;
  path: string;
  element: FC<Record<string, unknown>>;
}

export interface Exchange {
  id: string;
  name: string;
  country: string;
  url: string;
  trust_score_rank: number;
  image: string;
}

export interface ExchangeID {
  id: string | undefined;
  [key: string]: string | undefined;
}

export interface ExchangeDetails {
  name: string;
  country: string;
  trust_score_rank: number;
  image: string;
  year_established: number;
  description: string;
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  other_url_1: string;
  other_url_2: string;
  twitter_handle: string;
}
