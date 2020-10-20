import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences } from "../../portfolio";
import { HashLink as Link } from 'react-router-hash-link';

/**
 * When using HashBrowser, the scrolling usning '<a href="#id">/<a>" doesn't work. See github issue for solution.
 * https://github.com/ReactTraining/react-router/issues/394#issuecomment-220221604
 */
function Header() {
  const { isDark } = useContext(StyleContext);
  const exp = workExperiences.viewExperiences;
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          {exp === true && (
            <li>
              <Link to="#experience">Work Experiences</Link>
            </li>
          )}
          <li>
            <Link to="#opensource">Open Source</Link>
          </li>
          <li>
            <Link to="#achievements">Achievements</Link>
          </li>
          <li>
            <Link to="#blogs">Blogs</Link>
          </li>
          <li>
            <Link to="#talks">Talks</Link>
          </li>
          <li>
            <Link to="#contact">Contact Me</Link>
          </li>
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
