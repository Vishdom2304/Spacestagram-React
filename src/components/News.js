import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    }
  }

  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://api.nasa.gov/planetary/apod?api_key=TxGUOr73fqQIXvDAcxx85pvi7QMdvvE8A6Dc9rDB&count=${this.props.pageSize}`
    this.setState({ loading: true })
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parsedData, loading: false })
    this.props.setProgress(100);
  }
  
  render() {
    return (
      <>
        <div className="d-flex flex-column container my-3 py-3">
          {this.state.loading && <Spinner />}
          <div className="row my-3">
            {!this.state.loading && this.state.articles.map((element) => {
              if (element.title && element.explanation && element.url) {
                return <div className="col-md-4 my-4 d-flex justify-content-between" key={element.url}>
                  <NewsItem title={element.title} description={element.explanation.slice(0, 500)} imageUrl={element.url} date={element.date} source={element.copyright} setAlert={this.props.setAlert}/>
                </div>
              }
            })}
          </div>
        </div>
      </>
    )
  }
}

export default News
