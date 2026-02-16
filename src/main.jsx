import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./layouting.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ContentListPage from "./pages/ContentListPage";
import ContentDetailPage from "./pages/ContentDetailPage";
import ContentCreatePage from "./pages/ContentCreatePage.jsx";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import ContentEditPage from "./pages/ContentEditPage.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/contents" element={<ContentListPage />} />
            <Route path="/contents/me" element={<ContentListPage />} />
            <Route path="/contents/:id" element={<ContentDetailPage />} />
            <Route path="/contents/create" element={<ContentCreatePage />} />
            <Route path="/contents/edit/:id" element={<ContentEditPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
