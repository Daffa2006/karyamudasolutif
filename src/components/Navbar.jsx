import { Link, NavLink, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import Guest from "../routes/Guest";
import Auth from "../routes/Auth";
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [me, setMe] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token_karyamudasolutif");
    setIsDropdownOpen(false);
    navigate("/login");
  };
  useEffect(() => {
    axiosClient
      .get("/api/users/me")
      .then((res) => setMe(res.data))
      .catch(() => setMe(null));
  }, []);
  function getInitials(fullName) {
    if (!fullName) return "";

    const words = fullName.trim().split(" ").filter(Boolean);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    const firstInitial = words[0][0];
    const lastInitial = words[words.length - 1][0];

    return (firstInitial + lastInitial).toUpperCase();
  }
  const handleNavigateToLoginPage = () => {
    navigate("/login");
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-3 bg-navbar border-b border-b-zinc-300">
      <nav className="max-w-340 w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
        <Link
          className="sm:order-1 flex-none text-xl font-semibold text-foreground focus:outline-hidden focus:opacity-80"
          to="/"
        >
          KMS
        </Link>
        <div className="sm:order-3 flex items-center gap-x-2">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg bg-layer border border-zinc-300 text-layer-foreground shadow-2xs hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <svg
              className="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle</span>
          </button>
          <Guest>
            <button
              onClick={handleNavigateToLoginPage}
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg bg-layer border border-zinc-300 text-layer-foreground shadow-2xs hover:text-teal-600 hover:border-teal-600 transition-colors cursor-pointer focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 disabled:pointer-events-none"
            >
              Login
            </button>
          </Guest>
          {/* User Profile Dropdown */}
          <Auth>
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-10.5 h-10.5 bg-teal-600 text-teal-50 text-lg rounded-full items-center justify-center flex hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {getInitials(me?.name)}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-zinc-200 py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-zinc-200">
                    <p className="text-sm font-semibold text-zinc-800">
                      {me.name}
                    </p>
                    <p className="text-sm text-zinc-500 truncate">{me.email}</p>
                  </div>
                  {/* Logout Button */}
                  <div className="border-t border-zinc-200 pt-2">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </Auth>
        </div>
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          aria-labelledby="hs-navbar-alignment-collapse"
          role="region"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <Auth>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-teal-600 focus:outline-hidden"
                    : "text-lg text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                }
              >
                Halaman Utama
              </NavLink>

              <NavLink
                to="/contents"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-teal-600 focus:outline-hidden"
                    : "text-lg text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                }
              >
                Daftar Konten
              </NavLink>
              <NavLink
                to="/contents/create"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-teal-600 focus:outline-hidden"
                    : "text-lg text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                }
              >
                Buat Konten
              </NavLink>
              <NavLink
                to="/contents/me"
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-medium text-teal-600 focus:outline-hidden"
                    : "text-lg text-navbar-nav-foreground hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                }
              >
                Konten Anda
              </NavLink>
            </Auth>
          </div>
        </div>
      </nav>
    </header>
  );
}
