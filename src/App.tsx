import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import "./App.css";

const App = (): JSX.Element => (
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
      </Routes>
    </Suspense>
  </Router>
);

export default App;
