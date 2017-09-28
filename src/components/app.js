import React, { Component } from 'react';
import Articles from './Articles';

export default class App extends Component {
  render() {
  	console.log('test');
    return (
      <div>{this.props.children}</div>
    );
  }
}
