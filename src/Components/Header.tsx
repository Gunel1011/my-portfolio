import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import pageList from "../constant/pageList";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LiaCookieBiteSolid } from "react-icons/lia";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo_img" />
            </Link>
          </div>
          <nav className={`navBar ${isMenuOpen ? "active" : ""}`}>
            <ul className="navList">
              {pageList.map((page) => (
                <li className="navItem" key={page.id}>
                  <NavLink
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={page.path}
                    onClick={closeMenu}
                  >
                    {page.title}
                    <p className="plus">
                      <LiaCookieBiteSolid />
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {isMenuOpen ? (
            <IoClose className="menuIcon" onClick={toggleMenu} />
          ) : (
            <HiMenuAlt3 className="menuIcon" onClick={toggleMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
