import React from 'react';
import Dropzone from 'react-dropzone';
import '../style/dropzoneComponent.css';
import { connect } from 'react-redux';
import { fetchJson } from '../actions';

class DropZoneComponent extends React.Component {
  onDrop = (accepted) => {
    let href = accepted[0].preview
    this.props.fetchJson(href)
    console.log(href)
  }
  render() {
    return (
      <div id="fixedDropzone">
        <div id="dropzone">
          <Dropzone name='inputFile.json'
            accept="application/json, image/png"
            onDrop={this.onDrop}
          >
            <p>Want to try it yourself? <br/>
            Drop a json file here.</p>
          </Dropzone>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    json: state.json
  };
}

export default connect(mapStateToProps, { fetchJson })(DropZoneComponent);
