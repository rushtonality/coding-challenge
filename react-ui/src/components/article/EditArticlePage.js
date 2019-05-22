import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../../actions/ArticleActions";

class EditArticlePage extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.dispatch(fetchArticle(id));
    }
    
    render() {
        const { error, data } = this.props;
    
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (data) {
            return (
            <ul>
                <li>{data.title}</li>
            </ul>
            );
        }

        return <div>Loading...</div>;
    }
}

const mapStateToProps = state => ({
    data: state.article.data,
    loading: state.article.loading,
    error: state.article.error
});
  
export default connect(mapStateToProps)(EditArticlePage);
