import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchData && this.props.fetchData()
  }

  render() {
    const articleElements = this.props.articles.map((article) => (
      <li key={article.id} className="test__article-list_item">
        <Article
          article={article}
          isOpen={article.id === this.props.openItemId}
          toggleOpen={this.props.toggleOpenItem}
        />
      </li>
    ))

    return <ul>{articleElements}</ul>
  }
}

export default accordion(ArticleList)
