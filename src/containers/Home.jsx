import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchWeather } from '../actions/weather';

import '../styles/components/home.css';

export class Home extends Component {
  static propTypes = {
    data: PropTypes.shape({
      city: PropTypes.string,
      temp: PropTypes.number,
    }).isRequired,
    fetchWeather: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <p className="description">This is Home component.</p>
        <p className="description">Below a real API request with Cherkasy weather.</p>
        <p className="weather-data">
          Temperature in <span className="city">{data.city}</span> - <span className="temp">{data.temp}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ weather: { data } }) => ({ data });

export default connect(mapStateToProps, { fetchWeather })(Home);
