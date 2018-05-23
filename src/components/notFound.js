import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //navigate in app

export default class Resume extends Component {
  render() {
    return (
      <div id='page'>
        Not found, go back to safety:
        <Link to='/'>Example resume</Link>
      </div>
    );
  }
}
