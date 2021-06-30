import React, { Component } from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url({this.props.imageUrl});">
        <div class="card-category">150 EUR</div>
        <div class="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    )
  }

}

export default Card;
