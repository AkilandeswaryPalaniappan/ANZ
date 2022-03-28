import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Pricing } from './components/Pricing';


import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <Layout>
         <Route path='/pricing' component={Pricing} />
       </Layout>
    );
  }
}
