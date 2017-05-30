import React from 'react';
import Dropzone from 'react-dropzone';

class FileUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      files: []
    };
  }

  onDrop(files) {
    this.setState({
      files: files
    });
  }

  render() {
    const files = this.state.files.map((file) => {
      return <li key={file.name}>{file.name.replace(/\+/gi, ' ')} - {file.size} bytes</li>
    });

    return (
      <div>
        <Dropzone onDrop={this.onDrop.bind(this)}></Dropzone>

        <h5>Uploaded files</h5>
        <ol>{files}</ol>
      </div>
    );
  }
}

export default FileUpload;