import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/components/layout/nav.css';

export const Nav = ({ loggedIn }) => (
  <nav>
    <ul className="menu">
      <li className="menuItem"><Link to="/">Home</Link></li>
      <li className="menuItem"><Link to="/comments">More examples</Link></li>
      {loggedIn ?
        <li className="menuItem"><Link to="/cabinet">Cabinet</Link></li> :
        <li className="menuItem"><Link to="/login">Login\SignUp</Link></li>
      }
    </ul>
  </nav>
);

Nav.defaultProps = {
  loggedIn: false,
};

Nav.propTypes = {
  loggedIn: PropTypes.bool,
};

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
export default connect(mapStateToProps)(Nav);

