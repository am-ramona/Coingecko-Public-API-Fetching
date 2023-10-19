import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import { Directory, CryptoExchangeDetails, NoMatch } from "./pages";
import "./App.css";

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.element />}
          />
        ))}
        {/* <Route path="/" element={<Directory />} />
        <Route path="/exchanges/:id" element={<CryptoExchangeDetails />} />
        <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Suspense>
  </Router>
);

export default App;
