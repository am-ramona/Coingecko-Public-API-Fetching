import { FC } from "react";

export interface Route {
    key: string,
    title: string,
    path: string,
    // enabled: boolean,
    element: FC<{}>
}

export interface Exchange {
    id: string;
    name: string;
    country: string;
    url: string;
    trust_score_rank: number;
    image: string;
  }
  