import React from "react";
import "./SideBar.scss";

const links = ["Typography", "Grid", "Buttons", "Inputs"];

const SideBar = () => {
  return (
    <nav className="sidebar">
      <h1>
        <span>Dev</span>challenges.io
      </h1>
      <ul className="navbar">
        {links.map((link) => {
          return (
            <li>
              <a
                href="/#"
                className={link === "Inputs" ? "navLink active" : "navLink"}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
