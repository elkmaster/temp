import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/components/home.css';

export class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <p className="description">This is Cabinet. {this.props.auth.loggedIn ? 'true' : 'false'}</p>
      </div>
    );
  }
}
Home.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Home);
