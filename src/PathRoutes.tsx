import React from "react";
import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthGuard from "./components/AuthGuard";
import GuestGuard from "./components/GuestGuard";
import LoginPage from "./pages/LoginPage";

const PathRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestGuard />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<AuthGuard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRoutes;
