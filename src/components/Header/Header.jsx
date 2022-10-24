import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const menuRef = useRef();
  const [f, setF] = useState(true);
  const showMenu = () => {
    if (f) {
      menuRef.current.style.display = "block";
      setF(false);
    } else if (!f) {
      menuRef.current.style.display = "none";
      setF(true);
    }
  };

  return (
    <div className='header'>
      <a className='logo' href='/'>
        <div className='logo-image'></div>
        <h1>
          Shegami<span>.dev</span>
        </h1>
      </a>
      <div className='menu' ref={menuRef}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/works'>Works</Link>
          </li>
        </ul>
      </div>
      <div
        className='toggle'
        onClick={() => {
          showMenu();
        }}
      >
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
}

export default Header;
