import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const flatStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
                        url(${this.props.flat.imageUrl})`
    }

    const flatClass = this.props.selected ? "card active" : "card"

    return(
      <div className={flatClass} style={flatStyle}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    )
  }

  handleClick = (e) => {
    this.props.selectFlat(this.props.index)
  }
}

export default Flat;
