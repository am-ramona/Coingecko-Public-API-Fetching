import Directory from "./views/directory";
import { lazy } from "react";

export { Directory };
export const CryptoExchangeDetails = lazy(() => import("./views/cryptoExchangeDetails"));
export const NoMatch = lazy(() => import("./views/404page"));