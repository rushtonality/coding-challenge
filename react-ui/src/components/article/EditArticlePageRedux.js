import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { fetchArticle } from "../../actions/ArticleActions";

class EditArticlePageRedux extends React.Component {

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
            <div>
                <h3>{data.title}</h3>
            </div>
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
  
export default connect(mapStateToProps)(EditArticlePageRedux);
