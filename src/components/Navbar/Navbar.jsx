import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useState, useRef } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  // Function to handle navigation and set active state
  const handleNavigation = (section) => {
    setActiveMenu(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); // Scroll to section smoothly
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="nav-icon"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          src={menu_close}
          onClick={closeMenu}
          alt="close-icon"
        />
        <li>
          <p
            onClick={() => handleNavigation("home")}
            className={activeMenu === "home" ? "active" : ""}
          >
            Home
          </p>
        </li>
        <li>
          <p
            onClick={() => handleNavigation("about")}
            className={activeMenu === "about" ? "active" : ""}
          >
            About Me
          </p>
        </li>
        <li>
          <p
            onClick={() => handleNavigation("services")}
            className={activeMenu === "services" ? "active" : ""}
          >
            Services
          </p>
        </li>
        <li>
          <p
            onClick={() => handleNavigation("work")}
            className={activeMenu === "work" ? "active" : ""}
          >
            Portfolio
          </p>
        </li>
        <li>
          <p
            onClick={() => handleNavigation("contact")}
            className={activeMenu === "contact" ? "active" : ""}
          >
            Contact
          </p>
        </li>
      </ul>
      <div
        className={`nav-connect ${activeMenu === "contact" ? "active" : ""}`}
        onClick={() => handleNavigation("contact")}
      >
        Let's Talk
      </div>
    </div>
  );
};

export default Navbar;
