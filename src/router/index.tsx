import React, { JSXElementConstructor, lazy } from "react";
import App from "@/App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("@/views/home/Default"));
const Page1 = lazy(() => import("@/views/home/pages/Page1"));
const Page2 = lazy(() => import("@/views/home/pages/Page2"));

const About = lazy(() => import("@/views/About"));

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
);
const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={withLoadingComponent(<Home />)}>
          <Route index element={<Navigate to="/home/page1" />} />
          <Route path="page1" element={withLoadingComponent(<Page1 />)} />
          <Route path="page2" element={withLoadingComponent(<Page2 />)} />
        </Route>
        <Route path="/about" element={withLoadingComponent(<About />)} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
