import { FormInput } from "../components/FormInput";
import axiosClient from "../api/axiosClient";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosClient.post("/api/users/register", formData);
      setMsg(data.message || "Registrasi berhasil. Silakan login.");
      alert("Registrasi berhasil. Silakan login.");
      navigate("/login"); // ➜ redirect ke halaman login
    } catch (err) {
      setMsg(err?.response?.data?.error || "Registrasi gagal");
    }
  };
  return (
    <div className="px-4 md:px-8 flex flex-col items-center w-full max-w-5xl mx-auto">
      <h1 className="text-2xl md:text-5xl text-teal-600 py-16 font-bold">
        REGISTER
      </h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-3 w-full">
        {msg && (
          <p className="bg-red-100 text-red-600 px-3 py-4 rounded-md">{msg}</p>
        )}
        <FormInput
          label="Nama"
          id="name"
          name="name"
          type="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="example@mail.com"
          required
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          value={formData.password}
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
          Buat akun
        </button>
        <div>
          Sudah punya akun?{" "}
          <Link className="text-blue-600 underline" to="/login">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
