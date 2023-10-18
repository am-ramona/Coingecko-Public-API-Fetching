import { Directory, CryptoExchangeDetails, NoMatch } from "./pages";
import { Route } from "./utils/types";

export const routes: Array<Route> = [
  {
    key: "directory-route",
    title: "Directory",
    path: "/",
    // enabled: true,
    element: Directory,
  },
  {
    key: "details-route",
    title: "CryptoExchangeDetails",
    path: "/details",
    // enabled: true,
    element: CryptoExchangeDetails,
  },
  {
    key: "noMatch-route",
    title: "404page",
    path: "*",
    // enabled: true,
    element: NoMatch,
  },
];
