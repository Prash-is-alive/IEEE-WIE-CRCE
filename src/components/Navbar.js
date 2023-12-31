import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ieeeLogo from "../assets/logos/ieee-wie-logo.png";
import "../css/Navbar.css";
function Navbar() {
  // Memoized handleToggle function
  const handleToggle = () => {
    if (window.innerWidth <= 768) {
      let toggler = document.querySelector(".navLinks").style;
      toggler.height = toggler.height === "auto" ? 0 : "auto";
      toggler.overflow = toggler.overflow === "hidden" ? "none" : "hidden";
      document.querySelector(".navLinks").classList.toggle("p-3")
    }
  };

  // Memoized NavLink component
  const MemoNavLink = React.memo(({ to, icon, text, onClick }) => {
    return (
      <NavLink className="navLink text-white" to={to} onClick={onClick}>
        <Icon icon={icon} /> {text}
      </NavLink>
    );
  });

  // Memoized navigation links
  const navLinks = useMemo(() => {
    return [
      { to: "/about", icon: "mdi:about-circle-outline", text: "About" },
      { to: "/events", icon: "carbon:event", text: "Events" },
      { to: "/team", icon: "fluent:people-team-16-regular", text: "Team" },
    ];
  }, []);
  
  return (
    <>
      {/* Navigation bar */}
      <nav className={"navbar fixed-top"}>
        <div className="navbrand">
          {/* Logo */}
          <div>
            <Link className="navbar-brand" to="/">
              <img src={ieeeLogo} alt="IEEE" width="60" />
            </Link>
          </div>
          {/* Toggler for small screens */}
          <button
            className="navbar-toggler"
            onClick={handleToggle}
            type="button"
          >
            <span><Icon icon="line-md:menu" /></span>
          </button>
        </div>
        {/* Navigation links */}
        <div className="navLinks">
          {navLinks.map((link, index) => (
            <MemoNavLink
              key={index}
              to={link.to}
              icon={link.icon}
              text={link.text}
              onClick={handleToggle}
            />
          ))}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
           <Icon icon="academicons:ieee" /> Contact
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
