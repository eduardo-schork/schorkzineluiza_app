import React, { Component } from 'react';
import createNavigator from './routes';
export default class App extends Component {
  render() {
    const Routes = createNavigator(false)

    return <Routes />
  }
}