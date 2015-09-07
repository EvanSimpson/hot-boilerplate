import React, { Component } from 'react';

import styles from "./App.css";
import Box from "./Box";

export default class App extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <h1 className={ styles.header }>
          { "Example" }
        </h1>
        <Box/>
      </div>
    );
  }
}
