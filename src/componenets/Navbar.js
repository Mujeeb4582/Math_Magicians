import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];
  return (
    <header className="header">
      <h1 className="logo">Math Magicians</h1>
      <nav className="navBar">
        <ul className="navMenu">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeclassname="active-link"
              >
                {link.text}

              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
