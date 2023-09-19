import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4df1688f79c547f28b2e4f3848fba89a&page=1&pageSize=12";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })
  }

  handlePrevclick = async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4df1688f79c547f28b2e4f3848fba89a&page=${this.state.page - 1}&pageSize=12`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles
    })
  }

  handleNextclick = async ()=>{

    if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4df1688f79c547f28b2e4f3848fba89a&page=${this.state.page + 1}&pageSize=12`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }

    
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>News - Today Top HeadLines</h1>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,40):" "} description={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
        })}     
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Prev</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
        
      </div>
    )
  }
}

export default News