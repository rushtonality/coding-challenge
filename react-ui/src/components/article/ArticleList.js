import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../../actions/ArticleListActions";
import ArticleItem from "./ArticleItem";

class ArticleList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchArticles());        
    }

    onClickMore() {
        this.props.dispatch(
            fetchArticles(this.props.articles.length + 1, true));        
    }

    render() {
        const { articles, error } = this.props;
    
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        return (
            <div>
            {
                articles.map((article, index) => (
                    <ArticleItem key={index} article={article} />
                ))
            }
            <button className="btn btn-outline-secondary btn-block"  onClick={this.onClickMore.bind(this)}>More</button>
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    articles: state.articles.data,
    error: state.articles.error
});
  
export default connect(mapStateToProps)(ArticleList);

