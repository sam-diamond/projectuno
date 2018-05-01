import React, { Component } from 'react';
import './uno-preview.css';

class UnoPreview extends Component {
  render() {
    return (
      <div className="UnoPreview">
      <a href={this.props.link}>{this.props.linkText}</a>
      </div>
    );
  }
}

export default UnoPreview;
