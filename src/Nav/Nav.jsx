import "./nav.css";
import MegaMenu from "./MegaMenu";
import { useState } from "react";
const Nav = () => {
  const [visible, setVisible] = useState(false);
  const megaMenuHandler = () => setVisible(!visible);
  return (
    <>
      <nav className="container">
        <div className="logo">
          <h1>Mahmoud</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">gallery</a>
            </li>
            <li>
              <a href="#">features</a>
            </li>
            <li onClick={megaMenuHandler}>
              <a href="#">other links</a>
            </li>
          </ul>
        </div>
      </nav>
      {visible && <MegaMenu />}
    </>
  );
};

export default Nav;
