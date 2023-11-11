import { useContext, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { userCredential } from "../constants/common";
import { setToLocalStorage } from "../helpers/local-storage";

const navlinks = [
  { path: "/", display: "Home" },
  { path: "/services", display: "Services" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/contact", display: "Contact" },
];

export default function Header() {
  const { role, user, token } = useContext(AuthContext);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  // * Explain how the sticky header and toggle icon features are working

  const handleStickyHeader = () => {
    const headerElement = headerRef.current;
    if (headerElement) {
      window.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        )
          headerElement.classList.add("sicky_header");
        else headerElement.classList.remove("sicky_header");
      });
    }
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    setToLocalStorage(userCredential, { user, role, token });
  }, [user, role, token]);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ====== Logo ====== */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* ====== Menu ====== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navlinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ====== Nav Right ====== */}
          <div className="flex items-center gap-4">
            {user && token ? (
              <div className="">
                <Link to={`${role}/profile/me`}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={user?.photo}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
