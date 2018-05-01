import React, { Component } from 'react';
import './uno-content.css';
import UnoPreview from '../uno-preview/uno-preview.js';

class UnoContent extends Component {
  render() {
    return (
      <div className="UnoContent">
      <h1>Hello</h1>
      <UnoPreview link="http://www.yahoo.com" linkText="Yahoo" />
      <UnoPreview link="http://www.google.com" linkText="Google" />
      </div>
    );
  }
}

export default UnoContent;
