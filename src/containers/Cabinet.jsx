import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import '../styles/components/home.css';

export class Cabinet extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <p className="description">This is Cabinet. {this.props.auth.loggedIn ? 'true' : 'false'}</p>
        <button onClick={this.props.logout}> logout </button>
      </div>
    );
  }
}
Cabinet.propTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logout })(Cabinet);
