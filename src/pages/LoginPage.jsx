import { FormInput } from "../components/FormInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axiosClient from "../api/axiosClient";
export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosClient.post("/api/users/login", formData);
      localStorage.setItem("token_karyamudasolutif", data.token);
      setMsg("Login sukses");
      navigate("/");
    } catch (err) {
      setMsg(err?.response?.data?.error || "Login gagal");
    }
  };
  return (
    <div className="px-4 md:px-8 flex flex-col items-center w-full max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-5xl text-teal-600 py-16 font-bold">
        LOGIN
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-3 w-full">
        {msg && (
          <p className="bg-red-100 text-red-600 px-3 py-4 rounded-md">{msg}</p>
        )}
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="example@mail.com"
          //   error={errors.email}
          required
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="example@mail.com"
          //   error={errors.password}
          required
        />
        <button
          type="submit"
          className="bg-teal-600 font-semibold py-3.5 px-4 rounded-lg text-white cursor-pointer"
        >
          Login
        </button>
        <div>
          Belum punya akun?{" "}
          <Link className="text-blue-600 underline" to="/register">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
