import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token_karyamudasolutif");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [token, navigate]);

  if (!token) return null;

  return <Outlet />;
}
