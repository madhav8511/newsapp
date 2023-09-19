import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2023/09/bse_nse_stockmarket_nifty_sensex-3-770x433.jpg":imageUrl} className="card-img-top" alt="..." style={{width: "287px",height: "190px",backgroundSize: "cover"}}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
        </div>
    </div>
    </div>
    )
  }
}

export default NewsItem