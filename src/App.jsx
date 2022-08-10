import "./App.css";
import "antd/dist/antd.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Result from "./pages/Result";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/results" element={<Result />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
