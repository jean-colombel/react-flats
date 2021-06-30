import React, { Component } from 'react';

import flats from '../../data/flats.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flats: flats
    };
  }

  render() {
    return(
      <FlatList flats={this.flats}/>
    )
  }
}

export default App;
