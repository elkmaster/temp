import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/components/layout/nav.css';

const Nav = () => (
  <nav>
    <ul className="menu">
      <li className="menuItem"><Link to="/">Home</Link></li>
      <li className="menuItem"><Link to="/comments">More examples</Link></li>
    </ul>
  </nav>
);

export default Nav;
