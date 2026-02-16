export default function Guest({ children }) {
  const token = localStorage.getItem("token_karyamudasolutif");

  return !token ? null : children;
}
