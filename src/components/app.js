import React, { Component } from 'react';
import Articles from './Articles';
import  {Grid } from 'react-bootstrap';

export default class App extends Component {
  render() {
    return (
      <Grid fluid>{this.props.children}</Grid>
    );
  }
}
