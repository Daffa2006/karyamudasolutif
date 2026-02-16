export default function Auth({ children }) {
  const token = localStorage.getItem("token_karyamudasolutif");

  return token ? null : children;
}
