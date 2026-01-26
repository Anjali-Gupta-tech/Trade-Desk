import React, { useState } from "react";
import { Link } from "react-router-dom";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenu = (index) => {
    setSelectedMenu(index)
  }
  const menuclass = 'menu'
  const activeMenuclass = 'menu selected'

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/'
              onClick={() => handleMenu(0)}>
              <p className={selectedMenu === 0 ? activeMenuclass : menuclass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/orders'
              onClick={() => handleMenu(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuclass : menuclass}>Orders</p>
            </Link>
          </li>
                    <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/holdings'
              onClick={() => handleMenu(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuclass : menuclass}>Holdings</p>
            </Link>
          </li>
                   <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/positions'
              onClick={() => handleMenu(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuclass : menuclass}>Position</p>
            </Link>
          </li>
                    <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/funds'
              onClick={() => handleMenu(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuclass : menuclass}>Funds</p>
            </Link>
          </li>
                <li>
            <Link
              style={{ textDecoration: 'none' }}
              to='/apps'
              onClick={() => handleMenu(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuclass : menuclass}>App</p>
            </Link>
          </li>
        </ul>
        <hr />
      
   

      </div>
    </div>
  );
};

export default Menu;
