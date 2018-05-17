import React, { Component } from 'react';
import '../style/app.css';
import DropzoneComponent from '../containers/DropzoneComponent'
import CVContainer from '../containers/CVContainer';

export default class App extends Component {
  render() {
    return (
      <div id='page'>
        <CVContainer />
        <DropzoneComponent droppedFiles={this.onDrop} />
      </div>
    );
  }
}
