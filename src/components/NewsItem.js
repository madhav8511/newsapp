import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png":imageUrl} className="card-img-top" alt="..." style={{width: "287px",height: "190px",backgroundSize: "cover"}}/>
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